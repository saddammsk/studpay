/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Fragment, useState } from "react";

type PaymentStatus = "Completed" | "Failed" | "Processing";
type SortField = "file" | "date" | "records" | "status";
type SortOrder = "asc" | "desc";

interface Payment {
     id: number;
     file: {
          name: string;
          icon: string;
     };
     date: string;
     records: string;
     status: PaymentStatus;
     errors: string;
     actions: string;
     details?: {
          uploadedBy: string;
          duration: string;
          speed: string;
          errorDetails?: string;
     };
}

const statusConfig = {
     Completed: {
          icon: "✓",
          classes: "bg-green-100 text-green-700",
          bgColor: "bg-green-50",
     },
     Failed: {
          icon: "✕",
          classes: "bg-red-100 text-red-700",
          bgColor: "bg-red-50",
     },
     Processing: {
          icon: "⟳",
          classes: "bg-yellow-100 text-yellow-700",
          bgColor: "bg-yellow-50",
     },
} as const;



const payments: Payment[] = [
     {
          id: 1,
          file: { name: "properties_batch_2025.csv", icon: "📄" },
          date: "2025-01-15 14:32",
          records: "156",
          status: "Completed",
          errors: "—",
          actions: "View Details",
          details: {
               uploadedBy: "admin@studpay.io",
               duration: "2.3s",
               speed: "67.8 KB/s",
          }
     },
     {
          id: 2,
          file: { name: "units_update_jan.xlsx", icon: "📊" },
          date: "2025-01-14 09:15",
          records: "89",
          status: "Completed",
          errors: "3",
          actions: "View Details",
          details: {
               uploadedBy: "manager@studpay.io",
               duration: "1.5s",
               speed: "59.3 KB/s",
               errorDetails: "3 rows with invalid email format",
          }
     },
     {
          id: 3,
          file: { name: "new_listings_batch.csv", icon: "📄" },
          date: "2025-01-12 16:45",
          records: "234",
          status: "Failed",
          errors: "234",
          actions: "View Details",
          details: {
               uploadedBy: "user@studpay.io",
               duration: "3.1s",
               speed: "75.4 KB/s",
               errorDetails: "All rows missing required 'address' column",
          }
     },
     {
          id: 4,
          file: { name: "residence_data.csv", icon: "📄" },
          date: "2025-01-10 11:20",
          records: "45",
          status: "Completed",
          errors: "—",
          actions: "View Details",
          details: {
               uploadedBy: "admin@studpay.io",
               duration: "0.8s",
               speed: "56.2 KB/s",
          }
     },
     {
          id: 5,
          file: { name: "quarterly_import.xlsx", icon: "📊" },
          date: "2025-01-08 08:00",
          records: "512",
          status: "Processing",
          errors: "—",
          actions: "View Details",
          details: {
               uploadedBy: "admin@studpay.io",
               duration: "In progress...",
               speed: "82.1 KB/s",
          }
     },
];

export default function APITable() {
     const [expandedRows, setExpandedRows] = useState<number[]>([]);
     const [sortField, setSortField] = useState<SortField>("date");
     const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 5;


     const sortedData = payments.sort((a, b) => {
          let aValue: any = a[sortField];
          let bValue: any = b[sortField];

          if (sortField === "records") {
               aValue = parseInt(a.records);
               bValue = parseInt(b.records);
          }

          if (sortField === "date") {
               aValue = new Date(a.date).getTime();
               bValue = new Date(b.date).getTime();
          }

          if (sortOrder === "asc") {
               return aValue > bValue ? 1 : -1;
          } else {
               return aValue < bValue ? 1 : -1;
          }
     });

     const totalPages = Math.ceil(sortedData.length / itemsPerPage);
     const paginatedData = sortedData.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
     );

     const toggleRowExpansion = (id: number) => {
          setExpandedRows((prev) =>
               prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
          );
     };

     const handleSort = (field: SortField) => {
          if (sortField === field) {
               setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          } else {
               setSortField(field);
               setSortOrder("asc");
          }
          setCurrentPage(1);
     };



     const downloadErrorReport = (payment: Payment) => {
          if (payment.errors === "—") {
               alert("No errors to download");
               return;
          }

          const report = `Error Report - ${payment.file.name}\n\nDate: ${payment.date}\nTotal Errors: ${payment.errors}\n\nError Details:\n${payment.details?.errorDetails || "See error log"}`;
          const blob = new Blob([report], { type: "text/plain" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `errors_${payment.id}.txt`;
          a.click();
     };

     const retryUpload = (payment: Payment) => {
          alert(`Retrying upload for: ${payment.file.name}`);
     };

     return (
          <div className="mt-5 border border-gray-300 rounded-xl overflow-hidden shadow-md">
               <div className="px-6 py-4 bg-gray-50 border-b border-gray-300">
                    <h4 className="text-gray-900 font-inter text-base leading-6">
                         Import History
                    </h4>
               </div>

               <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                         <thead className="bg-gray-4200 uppercase border-b border-gray-300">
                              <tr>
                                   <th className="px-6 py-3 text-left">
                                        <button
                                             onClick={() => handleSort("file")}
                                             className="font-inter font-semibold text-xs text-gray-700 leading-4 tracking-[0.6px] hover:text-gray-900 flex items-center gap-1"
                                        >
                                             File
                                             {sortField === "file" && (
                                                  <span>{sortOrder === "asc" ? "" : ""}</span>
                                             )}
                                        </button>
                                   </th>
                                   <th className="px-6 py-3 text-left">
                                        <button
                                             onClick={() => handleSort("date")}
                                             className="font-inter font-semibold text-xs text-gray-700 leading-4 tracking-[0.6px] hover:text-gray-900 flex items-center gap-1"
                                        >
                                             Date
                                             {sortField === "date" && (
                                                  <span>{sortOrder === "asc" ? "" : ""}</span>
                                             )}
                                        </button>
                                   </th>
                                   <th className="px-6 py-3 text-left">
                                        <button
                                             onClick={() => handleSort("records")}
                                             className="font-inter font-semibold text-xs text-gray-700 leading-4 tracking-[0.6px] hover:text-gray-900 flex items-center gap-1"
                                        >
                                             Records
                                             {sortField === "records" && (
                                                  <span>{sortOrder === "asc" ? "" : ""}</span>
                                             )}
                                        </button>
                                   </th>
                                   <th className="px-6 py-3 text-left">
                                        <button
                                             onClick={() => handleSort("status")}
                                             className="font-inter font-semibold text-xs text-gray-700 leading-4 tracking-[0.6px] hover:text-gray-900 flex items-center gap-1"
                                        >
                                             Status
                                             {sortField === "status" && (
                                                  <span>{sortOrder === "asc" ? "" : ""}</span>
                                             )}
                                        </button>
                                   </th>
                                   <th className="px-6 py-3 text-left font-inter font-semibold text-xs text-gray-700 leading-4 tracking-[0.6px]">
                                        Errors
                                   </th>
                                   <th className="px-6 py-3 text-left font-inter font-semibold text-xs text-gray-700 leading-4 tracking-[0.6px]">
                                        Actions
                                   </th>
                              </tr>
                         </thead>

                         <tbody>
                              {paginatedData.length > 0 ? (
                                   paginatedData.map((item) => (
                                        <Fragment key={item.id}>
                                             <tr  className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                                                  <td className="p-6">
                                                       <div className="flex items-center gap-3">
                                                            <span className="text-xl">{item.file.icon}</span>
                                                            <span className="text-gray-900 flex items-center text-sm font-normal leading-5">
                                                                 {item.file.name}
                                                            </span>
                                                       </div>
                                                  </td>

                                                  <td className="p-6 text-sm font-normal leading-5 text-gray-600">
                                                       {item.date}
                                                  </td>

                                                  <td className="p-6 text-sm font-normal leading-5 text-gray-900 font-semibold">
                                                       {item.records}
                                                  </td>

                                                  <td className="p-6">
                                                       <span
                                                            className={`px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium w-fit ${
                                                                 statusConfig[item.status].classes
                                                            }`}
                                                       >
                                                            <span>{statusConfig[item.status].icon}</span>
                                                            {item.status}
                                                       </span>
                                                  </td>

                                                  <td className="p-6 text-sm font-normal leading-5 font-inter">
                                                       <span
                                                            className={
                                                                 item.errors === "—"
                                                                      ? "text-gray-600"
                                                                      : "text-red-600 font-semibold"
                                                            }
                                                       >
                                                            {item.errors}
                                                       </span>
                                                  </td>

                                                  <td className="p-6">
                                                       <button
                                                            onClick={() => toggleRowExpansion(item.id)}
                                                            className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline"
                                                       >
                                                            {expandedRows.includes(item.id)
                                                                 ? "Hide Details"
                                                                 : "View Details"}
                                                       </button>
                                                  </td>
                                             </tr>

                                             {expandedRows.includes(item.id) && (
                                                  <tr className="border-t border-gray-200 bg-gray-50">
                                                       <td colSpan={6} className="p-6">
                                                            <div className="space-y-4">
                                                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                                      <div>
                                                                           <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
                                                                                Uploaded By
                                                                           </p>
                                                                           <p className="text-gray-900 font-medium mt-1">
                                                                                {item.details?.uploadedBy}
                                                                           </p>
                                                                      </div>
                                                                      <div>
                                                                           <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
                                                                                Duration
                                                                           </p>
                                                                           <p className="text-gray-900 font-medium mt-1">
                                                                                {item.details?.duration}
                                                                           </p>
                                                                      </div>
                                                                      <div>
                                                                           <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
                                                                                Upload Speed
                                                                           </p>
                                                                           <p className="text-gray-900 font-medium mt-1">
                                                                                {item.details?.speed}
                                                                           </p>
                                                                      </div>
                                                                 </div>

                                                                 {item.details?.errorDetails && (
                                                                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
                                                                           <p className="text-red-900 text-sm font-semibold mb-1">
                                                                                Error Details
                                                                           </p>
                                                                           <p className="text-red-700 text-sm">
                                                                                {item.details.errorDetails}
                                                                           </p>
                                                                      </div>
                                                                 )}

                                                                 <div className="flex gap-3 pt-4 border-t border-gray-300">
                                                                      {item.errors !== "—" && (
                                                                           <button
                                                                                onClick={() => downloadErrorReport(item)}
                                                                                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-all"
                                                                           >
                                                                                Download Error Report
                                                                           </button>
                                                                      )}
                                                                      {item.status === "Failed" && (
                                                                           <button
                                                                                onClick={() => retryUpload(item)}
                                                                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all"
                                                                           >
                                                                                ⟳ Retry Upload
                                                                           </button>
                                                                      )}
                                                                 </div>
                                                            </div>
                                                       </td>
                                                  </tr>
                                             )}
                                        </Fragment>
                                   ))
                              ) : (
                                   <tr>
                                        <td colSpan={6} className="p-6 text-center text-gray-500">
                                             No imports found matching your criteria
                                        </td>
                                   </tr>
                              )}
                         </tbody>
                    </table>
               </div>

               {totalPages > 1 && (
                    <div className="px-6 py-4 bg-white border-t border-gray-300 flex items-center justify-between">
                         <div className="text-sm text-gray-600">
                              Page {currentPage} of {totalPages} ({sortedData.length} total)
                         </div>
                         <div className="flex gap-2">
                              <button
                                   onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                   disabled={currentPage === 1}
                                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                              >
                                   ← Previous
                              </button>
                              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                   <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-2 rounded-lg text-sm ${
                                             page === currentPage
                                                  ? "bg-blue-600 text-white"
                                                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                                        }`}
                                   >
                                        {page}
                                   </button>
                              ))}
                              <button
                                   onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                   disabled={currentPage === totalPages}
                                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                              >
                                   Next →
                              </button>
                         </div>
                    </div>
               )}
          
          </div>
     );
}