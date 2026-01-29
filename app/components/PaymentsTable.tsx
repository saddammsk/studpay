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
          location: string;
          image: string;
     };
     amount: string;
     method: string;
     status: PaymentStatus;
     date: string;
}
const statusConfig = {
     Paid: {
          icon: "/images/tick-icon2.svg",
          classes: "bg-green-1600/[10%] text-green-1600",
     },
     Pending: {
          icon: "/images/timer-icon2.svg",
          classes: "bg-yellow-1100/[10%] text-yellow-1100",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          student: { name: "Marie Dupont", initials: "MD" },
          property: {
               name: "Studio 12A",
               location: "Paris 5ème",
               image: "/images/property-img.png",
          },
          amount: "850,00 €",
          method: "Bank Transfer",
          status: "Paid",
          date: "Dec 28, 2024",
     },
     {
          id: 2,
          student: { name: "Lucas Martin", initials: "LM" },
          property: {
               name: "Apt 3B",
               location: "Lyon 3ème",
               image: "/images/property-img.png",
          },
          amount: "720,00 €",
          method: "Card",
          status: "Pending",
          date: "Dec 27, 2024",
     },
     {
          id: 3,
          student: { name: "Emma Bernard", initials: "EB" },
          property: {
               name: "Studio 8C",
               location: "Bordeaux",
               image: "/images/property-img.png",
          },
          amount: "650,00 €",
          method: "Bank Transfer",
          status: "Paid",
          date: "Dec 26, 2024",
     },
];

export default function PaymentsTable() {
     return (
          <div className="overflow-x-auto mt-5 border border-gray-2400 rounded-xl">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-gray-1900 text-gray24 font-inter font-bold">
                         <tr>
                              <th className="px-4 py-3 text-left">Student</th>
                              <th className="px-4 py-3 text-left">Property</th>
                              <th className="px-4 py-3 text-left">Amount</th>
                              <th className="px-4 py-3 text-left">Method</th>
                              <th className="px-4 py-3 text-left">Status</th>
                              <th className="px-4 py-3 text-left">Date</th>
                              <th className="px-4 py-3"></th>
                         </tr>
                    </thead>

                    <tbody>
                         {payments.map((item) => (
                              <tr key={item.id} className="border-t border-gray-2400">
                                   {/* Student */}
                                   <td className="px-6 py-[14px]">
                                        <div className="flex items-center gap-3">
                                             <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold">
                                                  {item.student.initials}
                                             </div>
                                             <span className="text-black-1000 text-base font-medium leading-6">{item.student.name}</span>
                                        </div>
                                   </td>

                                   {/* Property */}
                                   <td className="px-6 py-[14px]">
                                        <div className="flex items-center gap-3">
                                             <Image
                                                  src={item.property.image}
                                                  alt=""
                                                  width={36}
                                                  height={36}
                                                  className="rounded"
                                             />
                                             <div>
                                                  <div className="text-base font-medium leading-6 text-black-1000">{item.property.name}</div>
                                                  <div className="flex items-center gap-1 text-sm font-normal leading-5 text-gray-1400">
                                                       <img src="/images/location-icon.svg" alt="" /> {item.property.location}
                                                  </div>
                                             </div>
                                        </div>
                                   </td>

                                   {/* Amount */}
                                   <td className="px-6 py-[14px] text-base font-bold leading-6 text-black-1000">
                                        {item.amount}
                                   </td>

                                   {/* Method */}
                                   <td className="px-6 py-[14px] text-base font-normal leading-6 text-gray-1400">
                                        {item.method}
                                   </td>

                                   {/* Status */}
                                   {/* Status */}
                                   <td className="px-6 py-[14px]">
                                        <span
                                             className={`px-2 py-1 w-fit rounded-full flex items-center gap-1.5 text-xs font-medium ${statusConfig[item.status].classes
                                                  }`}
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


                                   {/* Date */}
                                   <td className="px-6 py-[14px]  text-base font-normal leading-6 text-gray-1400">
                                        {item.date}
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
     );
}
