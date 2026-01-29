interface PropertyRow {
     id: number;
     property: string;
     revenue: string;
     expenses: string;
     netEarnings: string;
     occupancy: number;
}

const properties: PropertyRow[] = [
     {
          id: 1,
          property: "42 Oak Street, Apt 3B",
          revenue: "$15,600",
          expenses: "-$3,200",
          netEarnings: "$12,400",
          occupancy: 95,
     },
     {
          id: 2,
          property: "15 Maple Avenue, Unit 7",
          revenue: "$12,400",
          expenses: "-$2,800",
          netEarnings: "$9,600",
          occupancy: 88,
     },
     {
          id: 3,
          property: "88 Pine Road, Flat 2",
          revenue: "$9,800",
          expenses: "-$2,100",
          netEarnings: "$7,700",
          occupancy: 75,
     },
     {
          id: 4,
          property: "23 Elm Street, Suite 5A",
          revenue: "$6,700",
          expenses: "-$1,900",
          netEarnings: "$4,800",
          occupancy: 62,
     },
     {
          id: 5,
          property: "42 Oak Street, Apt 3B",
          revenue: "$15,600",
          expenses: "-$3,200",
          netEarnings: "$12,400",
          occupancy: 95,
     },
     {
          id: 6,
          property: "42 Oak Street, Apt 3B",
          revenue: "$15,600",
          expenses: "-$3,200",
          netEarnings: "$12,400",
          occupancy: 95,
     },
     {
          id: 7,
          property: "15 Maple Avenue, Unit 7",
          revenue: "$12,400",
          expenses: "-$2,800",
          netEarnings: "$9,600",
          occupancy: 88,
     },
     {
          id: 8,
          property: "88 Pine Road, Flat 2",
          revenue: "$9,800",
          expenses: "-$2,100",
          netEarnings: "$7,700",
          occupancy: 75,
     },
     {
          id: 9,
          property: "23 Elm Street, Suite 5A",
          revenue: "$6,700",
          expenses: "-$1,900",
          netEarnings: "$4,800",
          occupancy: 62,
     },
     {
          id: 10,
          property: "42 Oak Street, Apt 3B",
          revenue: "$15,600",
          expenses: "-$3,200",
          netEarnings: "$12,400",
          occupancy: 95,
     },
];

function EarningsTable() {
     return (
          <div className="overflow-x-auto mt-5">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-white text-sm text-gray-1400 font-inter font-bold">
                         <tr>
                              <th className="4xl:px-4 px-3 py-3 text-left font-bold">
                                   Property
                              </th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-bold">
                                   Revenue
                              </th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-bold">
                                   Expenses
                              </th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-bold">
                                   Net Earnings
                              </th>
                              <th className="4xl:px-4 px-3 py-3 text-left font-bold">
                                   Occupancy
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {properties.map((item) => (
                              <tr key={item.id} className="border-t border-gray-1300 bg-white">
                                   <td className="4xl:px-4 px-3 py-[14px]">
                                        <span className="text-black-1000 block 4xl:text-sm text-xs font-inter font-normal leading-5">
                                             {item.property}
                                        </span>
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px] 4xl:text-sm text-xs font-inter font-normal text-black-1400">
                                        {item.revenue}
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px] 4xl:text-sm text-xs font-inter font-normal text-red-1000">
                                        {item.expenses}
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px] 4xl:text-sm text-xs font-inter font-medium text-green-1100">
                                        {item.netEarnings}
                                   </td>

                                   <td className="4xl:px-4 px-3 py-[14px]">
                                        <span
                                             className={`inline-flex items-center rounded-full px-2 py-[2px] text-xs font-medium
                    ${item.occupancy >= 85
                                                       ? "bg-green-1100/[15%] text-green-1100"
                                                       : item.occupancy >= 50
                                                            ? "bg-yellow-1100/[15%] text-yellow-1100"
                                                            : "bg-orange-100 text-orange-1000"
                                                  }
                  `}
                                        >
                                             {item.occupancy}%
                                        </span>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}

export default EarningsTable;
