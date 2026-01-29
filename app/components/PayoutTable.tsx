type PayoutStatus = "Completed" | "Processing";

interface Payout {
     id: number;
     payoutId: string;
     amount: string;
     bank: {
          name: string;
          account: string;
     };
     status: PayoutStatus;
     date: string;
}

const statusConfig = {
     Completed: {
          dot: "bg-green-1100",
          classes: "bg-green-1100/[15%] text-green-1100",
     },
     Processing: {
          dot: "bg-yellow-1100",
          classes: "bg-yellow-1100/[10%] text-yellow-1100",
     },
} as const;

const payouts: Payout[] = [
     {
          id: 1,
          payoutId: "PO-2024-001",
          amount: "$4250.00",
          bank: {
               name: "Chase Bank",
               account: "****4829",
          },
          status: "Completed",
          date: "Dec 15, 2024",
     },
     {
          id: 2,
          payoutId: "PO-2024-002",
          amount: "$3180.00",
          bank: {
               name: "Bank of America",
               account: "****7821",
          },
          status: "Processing",
          date: "Dec 18, 2024",
     },
     {
          id: 3,
          payoutId: "PO-2024-003",
          amount: "$2890.00",
          bank: {
               name: "Chase Bank",
               account: "****4829",
          },
          status: "Completed",
          date: "Dec 10, 2024",
     },
     {
          id: 4,
          payoutId: "PO-2024-004",
          amount: "$5100.00",
          bank: {
               name: "Wells Fargo",
               account: "****3384",
          },
          status: "Completed",
          date: "Dec 5, 2024",
     },
     {
          id: 5,
          payoutId: "PO-2024-005",
          amount: "$1950.00",
          bank: {
               name: "Chase Bank",
               account: "****4829",
          },
          status: "Completed",
          date: "Dec 1, 2024",
     },
];

export default function PayoutsTable() {
     return (
          <div className="overflow-x-auto border border-gray-2400 rounded-xl">
               <table className="lg:w-full w-[992px] text-sm">
                    <thead className="bg-gray-1900 text-gray24 font-semibold">
                         <tr>
                              <th className="px-4 py-3 text-left">Payout ID</th>
                              <th className="px-4 py-3 text-left">Amount</th>
                              <th className="px-4 py-3 text-left">Bank Account</th>
                              <th className="px-4 py-3 text-left">Status</th>
                              <th className="px-4 py-3 text-left">Date</th>
                         </tr>
                    </thead>

                    <tbody>
                         {payouts.map((item) => (
                              <tr key={item.id} className="border-t border-gray-2400 text-sm">
                                   {/* Payout ID */}
                                   <td className="px-4 py-3 text-black17">
                                        {item.payoutId}
                                   </td>

                                   {/* Amount */}
                                   <td className="px-4 py-3 font-bold text-black-1000">
                                        {item.amount}
                                   </td>

                                   {/* Bank */}
                                   <td className="px-4 py-3">
                                        <div className="text-sm text-black-1000">
                                             {item.bank.name}
                                        </div>
                                        <div className="text-xs text-gray-1400">
                                             {item.bank.account}
                                        </div>
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-3">
                                        <span
                                             className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusConfig[item.status].classes}`}
                                        >
                                             <span
                                                  className={`h-2 w-2 rounded-full ${statusConfig[item.status].dot}`}
                                             />
                                             {item.status}
                                        </span>
                                   </td>

                                   {/* Date */}
                                   <td className="px-4 py-3 text-black-1000">
                                        {item.date}
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}
