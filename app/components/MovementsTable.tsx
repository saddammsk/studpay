import Image from "next/image";


interface Payment {
     id: number;
     student: {
          name: string;
     };
     property: {
          name: string;
     };
     amount: string;
     method: string;
     trend: string;
     trendType: "up" | "down" | "neutral";
}


const payments: Payment[] = [
     {
          id: 1,
          student: { name: "15 Jan 2024" },
          property: { name: "45 Rue Vauvenargues" },
          amount: "Monthly interest credit",
          method: "€801.67",
          trend: "+8.5%",
          trendType: "up",
     },
     {
          id: 2,
          student: { name: "01 Jan 2024" },
          property: { name: "12 Avenue Foch" },
          amount: "Initial deposit",
          trend: "€1,200.00",
          trendType: "up",
          method: "€1,200.00",
     },
     {
          id: 3,
          student: { name: "15 Dec 2023" },
          property: { name: "12 Avenue Foch" },
          amount: "Initial deposit",
          trend: "€1,200.00",
          trendType: "up",
          method: "€1,200.00",
     },
     {
          id: 4,
          student: { name: "01 Dec 2023" },
          property: { name: "23 Rue de Rivoli" },
          amount: "Deposit released",
          trend: "€800.00",
          trendType: "down",
          method: "€3,200.00",
     },
     {
          id: 5,
          student: { name: "15 Dec 2023" },
          property: { name: "12 Avenue Foch" },
          amount: "Initial deposit",
          trend: "€1,200.00",
          trendType: "up",
          method: "€1,200.00",
     },
];


function MovementsTable() {
     return (
          <div className="overflow-x-auto mt-5 ">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-lightgray text-gray-1000 font-inter font-normal">
                         <tr>
                              <th className="4xl:px-4 px-3 py-3 text-left font-normal">Date</th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-normal">Property</th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-normal">Description</th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-normal">Amount</th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-normal">Balance</th>
                         </tr>
                    </thead>

                    <tbody>
                         {payments.map((item) => (
                              <tr key={item.id} className="border-t border-gray-2400">
                                   <td className="4xl:px-4 px-3 py-[14px]">
                                        <span className="text-black-1000 block 4xl:text-sm text-xs font-inter font-normal leading-5">{item.student.name}</span>
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px]">
                                        <div className="4xl:text-sm text-xs font-inter font-normal leading-5 text-black-1400">{item.property.name}</div>
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px] font-inter 4xl:text-sm text-xs font-normal leading-5 text-gray-1400">
                                        {item.amount}
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px] 4xl:text-sm text-xs font-medium">
                                        <div className="flex items-center gap-1">
                                             {item.trendType === "up" && (
                                                  <>
                                                       <img src="/images/arrow-green.svg" alt="up" className="w-4 h-4" />
                                                       <span className="text-green-1100">{item.trend}</span>
                                                  </>
                                             )}
                                             {item.trendType === "down" && (
                                                  <>
                                                       <img src="/images/arrow-down.svg" alt="down" className="w-4 h-4" />
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
                                   <td className="4xl:px-4 px-3 py-[14px] font-bold 4xl:text-sm text-xs font-inter">
                                        <span>{item.method}</span>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     )
}

export default MovementsTable
