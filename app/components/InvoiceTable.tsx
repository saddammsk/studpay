import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

/* ================= TYPES ================= */
type InvoiceStatus = "Paid" | "Unpaid" | "Overdue";

interface Invoice {
     id: number;
     invoiceId: string;
     studentName: string;
     property: string;
     amount: string;
     dueDate: string;
     status: InvoiceStatus;
}

/* ================= STATUS CONFIG ================= */
const statusConfig = {
     Paid: "bg-green-1100 text-white",
     Unpaid: "bg-yellow-1100 text-white",
     Overdue: "bg-red-1100 text-white",
} as const;

/* ================= DATA ================= */
const invoices: Invoice[] = [
     {
          id: 1,
          invoiceId: "INV-001",
          studentName: "Emma Thompson",
          property: "Sunset Apartments, Unit 4B",
          amount: "$1,250.00",
          dueDate: "Jan 15, 2025",
          status: "Paid",
     },
     {
          id: 2,
          invoiceId: "INV-002",
          studentName: "James Wilson",
          property: "Campus View, Room 202",
          amount: "$950.00",
          dueDate: "Jan 20, 2025",
          status: "Unpaid",
     },
     {
          id: 3,
          invoiceId: "INV-003",
          studentName: "Sofia Martinez",
          property: "Green Valley Dorms, Suite 5",
          amount: "$1,100.00",
          dueDate: "Dec 28, 2024",
          status: "Overdue",
     },
     {
          id: 4,
          invoiceId: "INV-001",
          studentName: "Emma Thompson",
          property: "Sunset Apartments, Unit 4B",
          amount: "$1,250.00",
          dueDate: "Jan 15, 2025",
          status: "Paid",
     },
     {
          id: 5,
          invoiceId: "INV-002",
          studentName: "James Wilson",
          property: "Campus View, Room 202",
          amount: "$950.00",
          dueDate: "Jan 20, 2025",
          status: "Unpaid",
     },
     {
          id: 6,
          invoiceId: "INV-003",
          studentName: "Sofia Martinez",
          property: "Green Valley Dorms, Suite 5",
          amount: "$1,100.00",
          dueDate: "Dec 28, 2024",
          status: "Overdue",
     },
];

/* ================= COMPONENT ================= */
function InvoiceTable() {
     const [selectedRows, setSelectedRows] = useState<number[]>([]);
     const headerCheckboxRef = useRef<HTMLInputElement>(null);

     /* 🔹 Indeterminate logic */
     useEffect(() => {
          if (headerCheckboxRef.current) {
               headerCheckboxRef.current.indeterminate =
                    selectedRows.length > 0 &&
                    selectedRows.length < invoices.length;
          }
     }, [selectedRows]);

     const isAllSelected =
          invoices.length > 0 &&
          selectedRows.length === invoices.length;

     return (
          <div className="overflow-x-auto mt-5 mb-6 border border-gray-1300 shadow-10xl rounded-xl">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-gray-2900 text-gray-1400 font-inter font-bold">
                         <tr>
                              {/* Header Checkbox */}
                              <th className="px-4 py-3 text-start">
                                   <input
                                        ref={headerCheckboxRef}
                                        type="checkbox"
                                        className="h-4 w-4 custom-checkbox cursor-pointer border border-blue-1500 appearance-none rounded"
                                        checked={isAllSelected}
                                        onChange={(e) =>
                                             setSelectedRows(
                                                  e.target.checked
                                                       ? invoices.map((item) => item.id)
                                                       : []
                                             )
                                        }
                                   />
                              </th>

                              <th className="px-4 py-3 text-left">Invoice ID</th>
                              <th className="px-4 py-3 text-left">Student Name</th>
                              <th className="px-4 py-3 text-left">Property</th>
                              <th className="px-4 py-3 text-left">Amount</th>
                              <th className="px-4 py-3 text-left">Due Date</th>
                              <th className="px-4 py-3 text-left">Status</th>
                              <th className="px-4 py-3 text-end">Actions</th>
                         </tr>
                    </thead>

                    <tbody>
                         {invoices.map((item) => (
                              <tr
                                   key={item.id}
                                   className="border-t bg-white border-gray-1300 text-sm font-normal leading-5 "
                              >
                                   {/* Row Checkbox */}
                                   <td className="px-4 py-[14px]">
                                        <input
                                             type="checkbox"
                                             className="h-4 w-4 custom-checkbox cursor-pointer border border-blue-1500 appearance-none rounded"
                                             checked={selectedRows.includes(item.id)}
                                             onChange={() =>
                                                  setSelectedRows((prev) =>
                                                       prev.includes(item.id)
                                                            ? prev.filter((id) => id !== item.id)
                                                            : [...prev, item.id]
                                                  )
                                             }
                                        />
                                   </td>

                                   {/* Invoice ID */}
                                   <td className="px-4 py-[14px] font-medium text-black-1000">
                                        {item.invoiceId}
                                   </td>

                                   {/* Student */}
                                   <td className="px-4 py-[14px] text-black-1000">
                                        {item.studentName}
                                   </td>

                                   {/* Property */}
                                   <td className="px-4 py-[14px] text-gray-1400">
                                        {item.property}
                                   </td>

                                   {/* Amount */}
                                   <td className="px-4 py-[14px] text-black-1000">
                                        {item.amount}
                                   </td>

                                   {/* Due Date */}
                                   <td className="px-4 py-[14px] text-gray-1400">
                                        {item.dueDate}
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-[14px]">
                                        <span
                                             className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[item.status]}`}
                                        >
                                             {item.status}
                                        </span>
                                   </td>

                                   {/* Actions */}
                                   <td className="px-4 py-[14px]">
                                        <div className="flex items-center justify-end gap-1">
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center">
                                                  <Image src="/images/eye-icon2.svg" alt="" width={16} height={16} />
                                             </Link>
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center">
                                                  <Image src="/images/export-arrow.svg" alt="" width={16} height={16} />
                                             </Link>
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center">
                                                  <Image src="/images/send-icon.svg" alt="" width={16} height={16} />
                                             </Link>
                                        </div>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>

          </div>
     );
}

export default InvoiceTable;
