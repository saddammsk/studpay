import Image from "next/image";

type PaymentStatus = "Paid" | "Pending" | "Failed";

interface Payment {
     id: number;
     student: {
          name: string;
          email: string;
          image: string;
     };
     invoiceId: string;
     amount: string;
     method: string;
     date: string;
     status: PaymentStatus;
}

const statusConfig = {
     Paid: {
          dot: "bg-green-1100",
          classes: "bg-green-1100/[15%] text-green-1100",
     },
     Pending: {
          dot: "bg-yellow-1100",
          classes: "bg-yellow-1100/[10%] text-yellow-1100",
     },
     Failed: {
          dot: "bg-red-1000",
          classes: "bg-red-1000/[10%] text-red-1000",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          student: {
               name: "Emma Thompson",
               email: "emma.thompson@university.edu",
               image: "/images/user-1.png",
          },
          invoiceId: "INV-2024-001",
          amount: "$1250.00",
          method: "Bank Transfer",
          date: "Dec 15, 2024",
          status: "Paid",
     },
     {
          id: 2,
          student: {
               name: "James Wilson",
               email: "j.wilson@university.edu",
               image: "/images/user-2.png",
          },
          invoiceId: "INV-2024-002",
          amount: "$980.00",
          method: "Credit Card",
          date: "Dec 14, 2024",
          status: "Pending",
     },
     {
          id: 3,
          student: {
               name: "Michael Chen",
               email: "m.chen@university.edu",
               image: "/images/user-3.png",
          },
          invoiceId: "INV-2024-004",
          amount: "$1350.00",
          method: "Credit Card",
          date: "Dec 10, 2024",
          status: "Failed",
     },
     {
          id: 4,
          student: {
               name: "Emma Thompson",
               email: "emma.thompson@university.edu",
               image: "/images/user-1.png",
          },
          invoiceId: "INV-2024-001",
          amount: "$1250.00",
          method: "Bank Transfer",
          date: "Dec 15, 2024",
          status: "Paid",
     },
     {
          id: 5,
          student: {
               name: "James Wilson",
               email: "j.wilson@university.edu",
               image: "/images/user-2.png",
          },
          invoiceId: "INV-2024-002",
          amount: "$980.00",
          method: "Credit Card",
          date: "Dec 14, 2024",
          status: "Pending",
     },
     {
          id: 6,
          student: {
               name: "Michael Chen",
               email: "m.chen@university.edu",
               image: "/images/user-3.png",
          },
          invoiceId: "INV-2024-004",
          amount: "$1350.00",
          method: "Credit Card",
          date: "Dec 10, 2024",
          status: "Failed",
     },
];

export default function PaymentsTable2() {
     return (
          <div className="overflow-x-auto border border-gray-2400 bg-white rounded-xl">
               <table className="lg:w-full w-[992px] text-sm">
                    <thead className=" text-gray-1400 bg-gray-1700/[50%] font-bold">
                         <tr>
                              <th className="px-4 py-3 text-left">Student</th>
                              <th className="px-4 py-3 text-left">Invoice ID</th>
                              <th className="px-4 py-3 text-left">Amount</th>
                              <th className="px-4 py-3 text-left">Payment Method</th>
                              <th className="px-4 py-3 text-left">Payment Date</th>
                              <th className="px-4 py-3 text-left">Status</th>
                         </tr>
                    </thead>

                    <tbody>
                         {payments.map((item) => (
                              <tr key={item.id} className="border-t border-gray-1300">
                                   {/* Student */}
                                   <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                             <div>
                                                  <div className="text-sm font-normal text-black-1000">
                                                       {item.student.name}
                                                  </div>
                                                  <div className="text-xs text-gray-1400">
                                                       {item.student.email}
                                                  </div>
                                             </div>
                                        </div>
                                   </td>

                                   {/* Invoice */}
                                   <td className="px-4 py-3 text-black-1000">
                                        {item.invoiceId}
                                   </td>

                                   {/* Amount */}
                                   <td className="px-4 py-3 font-bold text-black-1000">
                                        {item.amount}
                                   </td>

                                   {/* Method */}
                                   <td className="px-4 py-3 text-black-1000">
                                        {item.method}
                                   </td>

                                   {/* Date */}
                                   <td className="px-4 py-3 text-black-1000">
                                        {item.date}
                                   </td>

                                   {/* Status with dot */}
                                   <td className="px-4 py-3">
                                        <span
                                             className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusConfig[item.status].classes}`}
                                        >
                                             <span
                                                  className={`h-1.5 w-1.5 rounded-full ${statusConfig[item.status].dot}`}
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
