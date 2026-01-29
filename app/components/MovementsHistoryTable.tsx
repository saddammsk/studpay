import Image from "next/image";

type MovementStatus = "Completed";

interface Movement {
     id: number;
     date: string;
     type: "Rent Payment" | "Refund" | "Withdrawal" | "StudSafe";
     description: string;
     property: string;
     amount: string;
     balanceAfter: string;
     status: MovementStatus;
}

/* 🔹 Status pill config */
const statusConfig = {
     Completed: {
          icon: "/images/tick-icon2.svg",
          classes: "bg-green-1300/[10%] border border-green-1300/[20%] text-green-1300",
     },
} as const;

/* 🔹 Type icon config (ROW IMAGE) */
const typeConfig = {
     "Rent Payment": {
          icon: "/images/home-icon2.svg",
          bg: "bg-blue-1400/[10%]",
     },
     Refund: {
          icon: "/images/refund-icon.svg",
          bg: "bg-gray-1700",
     },
     Withdrawal: {
          icon: "/images/arrow-doen-yellow.svg",
          bg: "bg-yellow-1100/[10%]",
     },
     StudSafe: {
          icon: "/images/trenup.svg",
          bg: "bg-yellow-1100/[10%]",
     },
} as const;

/* 🔹 Data (from image) */
const movements: Movement[] = [
     {
          id: 1,
          date: "Jan 09, 2026",
          type: "Rent Payment",
          description: "Monthly housing payment",
          property: "Oak Street Studio",
          amount: "-$1,290.00",
          balanceAfter: "$5,183.26",
          status: "Completed",
     },
     {
          id: 2,
          date: "Jan 08, 2026",
          type: "Refund",
          description: "Overpayment refund",
          property: "Campus View Lofts #305",
          amount: "+$55.00",
          balanceAfter: "$5,086.88",
          status: "Completed",
     },
     {
          id: 3,
          date: "Jan 07, 2026",
          type: "Refund",
          description: "Deposit refund",
          property: "Sunset Apartments #204",
          amount: "+$88.00",
          balanceAfter: "$4,975.81",
          status: "Completed",
     },
     {
          id: 4,
          date: "Jan 06, 2026",
          type: "Refund",
          description: "Overpayment refund",
          property: "Sunset Apartments #204",
          amount: "+$110.00",
          balanceAfter: "$4,999.90",
          status: "Completed",
     },
     {
          id: 5,
          date: "Jan 01, 2026",
          type: "Withdrawal",
          description: "Withdrawal to bank account",
          property: "Campus View Lofts #305",
          amount: "-$202.00",
          balanceAfter: "$4,925.25",
          status: "Completed",
     },
     {
          id: 6,
          date: "Jan 01, 2026",
          type: "StudSafe",
          description: "Withdrawal to bank account",
          property: "Campus View Lofts #305",
          amount: "+$38.00",
          balanceAfter: "$4,925.25",
          status: "Completed",
     },
];

function MovementsHistoryTable() {
     return (
          <div className="overflow-x-auto mt-5 mb-6 border border-gray-1300 shadow-10xl rounded-xl">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-gray-2800 text-black-1000 font-inter font-medium">
                         <tr>
                              <th className="px-4 py-3 font-medium text-left">Date</th>
                              <th className="px-4 py-3 font-medium text-left">Type</th>
                              <th className="px-4 py-3 font-medium text-left">Description</th>
                              <th className="px-4 py-3 font-medium text-left">Property</th>
                              <th className="px-4 py-3 font-medium text-left">Amount</th>
                              <th className="px-4 py-3 font-medium text-left">Balance After</th>
                              <th className="px-4 py-3 font-medium">Status</th>
                         </tr>
                    </thead>
                    <tbody>
                         {movements.map((item) => (
                              <tr key={item.id} className="border-t bg-white border-gray-1300">
                                   {/* Date */}
                                   <td className="px-4 py-[14px] text-sm text-black-1000">
                                        {item.date}
                                   </td>
                                   {/* Type (ICON + TEXT) */}
                                   <td className="px-4 py-[14px]">
                                        <div className="flex items-center gap-3">
                                             <div
                                                  className={`h-8 w-8 rounded-xl flex items-center justify-center ${typeConfig[item.type].bg
                                                       }`}
                                             >
                                                  <Image
                                                       src={typeConfig[item.type].icon}
                                                       alt=""
                                                       width={16}
                                                       height={16}
                                                  />
                                             </div>

                                             <span className="text-sm font-normal text-black-1000">
                                                  {item.type}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Description */}
                                   <td className="px-4 py-[14px] text-sm text-gray-1400">
                                        {item.description}
                                   </td>

                                   {/* Property */}
                                   <td className="px-4 py-[14px] text-sm text-gray-1400">
                                        {item.property}
                                   </td>

                                   {/* Amount */}
                                   <td
                                        className={`px-4 py-[14px] text-sm font-medium ${item.amount.startsWith("-")
                                             ? "text-red-1100"
                                             : "text-green-1100"
                                             }`}
                                   >
                                        {item.amount}
                                   </td>

                                   {/* Balance After */}
                                   <td className="px-4 py-[14px] text-base text-gray-1400">
                                        {item.balanceAfter}
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-[14px]">
                                        <span
                                             className={`px-2 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium w-fit ${statusConfig[item.status].classes}`}
                                        >
                                             <Image
                                                  src={statusConfig[item.status].icon}
                                                  alt=""
                                                  width={12}
                                                  height={12}
                                             />
                                             {item.status}
                                        </span>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}

export default MovementsHistoryTable;
