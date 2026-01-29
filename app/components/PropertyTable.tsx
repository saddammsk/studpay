import Image from "next/image";

type PaymentStatus = "Paid" | "Pending";

interface Payment {
     id: number;
     student: {
          name: string;
          initials: string;
     };
     property: {
          name: string;
     };
     amount: string;
     method: string;
     status: PaymentStatus;
     occupancy: string;
     trend: string;
     trendType: "up" | "down" | "neutral";
}


const payments: Payment[] = [
     {
          id: 1,
          student: { name: "Sunset Apartments", initials: "123 Oak Street, Brooklyn, NY 11201" },
          property: { name: "12" },
          amount: "€28,800",
          method: "€14,400",
          status: "Paid",
          occupancy: "92%",
          trend: "+8.5%",
          trendType: "up",
     },
     {
          id: 2,
          student: { name: "Harbor View Residence", initials: "456 Marina Blvd, San Francisco, CA 94123" },
          property: { name: "8" },
          amount: "€32,000",
          method: "€16,000",
          status: "Paid",
          occupancy: "100%",
          trend: "+12.3%",
          trendType: "up",
     },
     {
          id: 3,
          student: { name: "Downtown Loft", initials: "789 Main St, Chicago, IL 60601" },
          property: { name: "6" },
          amount: "€15,600",
          method: "€7,800",
          status: "Pending",
          occupancy: "83%",
          trend: "0%",
          trendType: "neutral",
     },
     {
          id: 4,
          student: { name: "Garden Terrace", initials: "321 Elm Avenue, Austin, TX 78701" },
          property: { name: "10" },
          amount: "€22,000",
          method: "€11,000",
          status: "Pending",
          occupancy: "70%",
          trend: "-5.2%",
          trendType: "down",
     },
     {
          id: 5,
          student: { name: "Downtown Loft", initials: "789 Main St, Chicago, IL 60601" },
          property: { name: "6" },
          amount: "€15,600",
          method: "€7,800",
          status: "Pending",
          occupancy: "83%",
          trend: "0%",
          trendType: "neutral",
     },
     {
          id: 6,
          student: { name: "Downtown Loft", initials: "789 Main St, Chicago, IL 60601" },
          property: { name: "6" },
          amount: "€15,600",
          method: "€7,800",
          status: "Pending",
          occupancy: "83%",
          trend: "0%",
          trendType: "neutral",
     },
];


function PropertyTable() {
     return (
          <div className="overflow-x-auto mt-5 border border-gray-2400 rounded-xl">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-gray-1900 text-gray24 font-inter font-bold">
                         <tr>
                              <th className="px-4 py-3 text-left">Property</th>
                              <th className="px-4 py-3 text-left">Units</th>
                              <th className="px-4 py-3 text-left">Monthly Revenue</th>
                              <th className="px-4 py-3 text-left">Security Deposits</th>
                              <th className="px-4 py-3 text-left">Occupancy</th>
                              <th className="px-4 py-3 text-left">Trend</th>
                              <th className="px-4 py-3"></th>
                         </tr>
                    </thead>

                    <tbody>
                         {payments.map((item) => (
                              <tr key={item.id} className="border-t border-gray-2400">
                                   {/* Student */}
                                   <td className="px-6 py-[14px]">
                                        <div className="text-sm font-dm-sans font-medium leading-5 text-black-1400">
                                             {item.student.initials}
                                        </div>
                                        <span className="text-gray-2200 text-xs font-dm-sans font-normal leading-4">{item.student.name}</span>
                                   </td>

                                   {/* Property */}
                                   <td className="px-6 py-[14px]">
                                        <div className="text-sm font-dm-sans font-normal leading-5 text-black-1400">{item.property.name}</div>
                                   </td>

                                   {/* Amount */}
                                   <td className="px-6 py-[14px] font-dm-sans text-sm font-medium leading-5 text-black-1400">
                                        {item.amount}
                                   </td>

                                   {/* Method */}
                                   <td className="px-6 py-[14px] font-dm-sans text-sm font-normal leading-5 text-black-1400">
                                        {item.method}
                                   </td>

                                   {/* Occupancy */}
                                   <td className="px-6 py-[14px]">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium 
         ${parseInt(item.occupancy) >= 90 ? 'bg-green-1600/[10%] text-green-1600' :
                                                  parseInt(item.occupancy) >= 80 ? 'bg-yellow-1100/[10%] text-yellow-1100' :
                                                       'bg-red-1100/[10%] text-red-1100'}`}>
                                             {item.occupancy}
                                        </span>
                                   </td>
                                   {/* Trend */}
                                   <td className="px-6 py-[14px] text-sm font-medium">
                                        <div className="flex items-center gap-1">
                                             {item.trendType === "up" && (
                                                  <>
                                                       <img src="/images/trenup.svg" alt="up" className="w-4 h-4" />
                                                       <span className="text-green-1400">{item.trend}</span>
                                                  </>
                                             )}
                                             {item.trendType === "down" && (
                                                  <>
                                                       <img src="/images/trend-down.svg" alt="down" className="w-4 h-4" />
                                                       <span className="text-red-1000">{item.trend}</span>
                                                  </>
                                             )}
                                             {item.trendType === "neutral" && (
                                                  <>
                                                       <span className="text-gray-2200">—</span>
                                                       <span className="text-gray-2200">{item.trend}</span>
                                                  </>
                                             )}
                                        </div>
                                   </td>



                                   {/* More */}
                                   <td className="px-6 py-[14px]">
                                        <button className="text-gray-400 hover:text-gray-600">
                                             •••
                                        </button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     )
}

export default PropertyTable
