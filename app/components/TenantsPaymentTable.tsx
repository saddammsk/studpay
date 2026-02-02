import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import PaymentDropdownMenu from "@/app/ui/PaymentDropdownMenu";

type PaymentStatus = "Paid" | "Pending";

interface Payment {
     date: string;
     payment: string;
     amount: string;
     method: string;
     id: number;
     status: PaymentStatus;
     payoutdate: string;

}

const statusConfig = {
     Paid: {
          classes: "bg-greenlight/10 border-greenlight/20 text-greenlight",
          dot: "bg-greenlight",
     },
     Pending: {
          classes: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
          dot: "bg-yellow-1100",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          date: "01 Dec 2024",
          payment: "rent",
          amount: "€850.00",
          method: "StudPay Escrow",
          status: "Paid",
          payoutdate: "05 Dec 2024",
     },
     {
          id: 2,
          date: "01 Nov 2024",
          payment: "rent",
          amount: "€850.00",
          method: "StudPay Escrow",
          status: "Paid",
          payoutdate: "05 Dec 2024",

     },
     {
          id: 3,
          date: "15 Oct 2024",
          payment: "deposit",
          amount: "€1,700.00",
          method: "StudPay Escrow",
          status: "Paid",
          payoutdate: "15 Aug 2025",

     },
     {
          id: 4,
          date: "01 Oct 2024",
          payment: "rent",
          amount: "€850.00",
          method: "StudPay Escrow",
          status: "Paid",
          payoutdate: "05 Oct 2024",

     },
     {
          id: 5,
          date: "01 Jan 2025",
          payment: "rent",
          amount: "€850.00",
          method: "StudPay Escrow",
          status: "Pending",
          payoutdate: "05 Jan 2025",

     },
];

const StatusMenuItems = [
     { label: 'Active', },
     { label: 'Ending Soon', },
     { label: 'Ended', },
]
const PropertiesMenuItems = [
     { label: 'Sunset Apartments', },
     { label: 'Oak Street Residence', },
     { label: 'Sunset Apartments', },
     { label: 'Downtown Lofts', },
     { label: 'Oak Street Residence', },
]


export default function TenantsPaymentTable() {
     return (
          <div className="mt-5">
               <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-0 gap-4 justify-between lg:px-6 sm:px-3 px-4 py-7 border-b border-solid border-gray-2400">
                    <h4 className="text-black-1200 font-bold font-inter text-lg leading-7">Payment History</h4>
                    <div className="sm:w-auto w-full flex sm:flex-row flex-col sm:items-center items-start gap-3">
                         <span className="flex items-center gap-2 text-gray-2200 font-normal font-inter text-sm leading-5">
                              <Image
                                   src="../images/filter-icon.svg"
                                   alt=""
                                   width={16}
                                   height={16}
                              />
                              Filters:
                         </span>
                         <div className="relative xl:min-w-40 sm:min-w-32.5 min-w-full">
                              <span className="flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2">
                                   <Image
                                        src="../images/calendargray.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                   />
                              </span>
                              <select className="h-9 appearance-none border border-solid border-gray55 bg-white text-black-1200 font-normal font-inter text-sm leading-5 w-full text-center rounded-[10px]">
                                   <option>All time</option>
                              </select>
                              <span className="flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2">
                                   <Image
                                        src="../images/down-arrow.svg"
                                        alt=""
                                        width={10}
                                        height={6}
                                   />
                              </span>
                         </div>
                         <div className="flex items-center gap-3 sm:w-auto w-full">
                              <PaymentDropdownMenu label={"All statuses"} items={StatusMenuItems} />
                              <PaymentDropdownMenu label={"All types"} items={PropertiesMenuItems} />
                         </div>
                    </div>
               </div>

               <div className="overflow-x-auto">
                    <table className="2xl:w-full w-341.25 text-sm">
                         <thead className="bg-white uppercase">
                              <tr>
                                   <th className="px-6 py-3 text-left font-inter font-bold text-xs text-gray-2200 leading-4 uppercase tracking-[0.6px]">Date</th>
                                   <th className="px-6 py-3 text-left font-inter font-bold text-xs text-gray-2200 leading-4 uppercase tracking-[0.6px]">Payment Type</th>
                                   <th className="px-6 py-3 text-left font-inter font-bold text-xs text-gray-2200 leading-4 uppercase tracking-[0.6px]">Amount</th>
                                   <th className="px-6 py-3 text-left font-inter font-bold text-xs text-gray-2200 leading-4 uppercase tracking-[0.6px]">Payment Method</th>
                                   <th className="px-6 py-3 text-left font-inter font-bold text-xs text-gray-2200 leading-4 uppercase tracking-[0.6px]">Status</th>
                                   <th className="px-6 py-3 text-left font-inter font-bold text-xs text-gray-2200 leading-4 uppercase tracking-[0.6px]">Payout Date</th>
                              </tr>
                         </thead>

                         <tbody>
                              {payments.map((item) => (
                                   <tr key={item.id} className="border-t border-gray-2400">
                                        {/* date */}
                                        <td className="px-4 py-4.5">
                                             <div className="flex items-center">
                                                  <span className="text-black15 flex items-center text-sm font-normal leading-5">{item.date}</span>

                                             </div>
                                        </td>

                                        {/* Payment */}
                                        <td className="px-4 py-4.5 text-sm font-normal leading-5 text-black15">
                                             {item.payment}
                                        </td>

                                        {/* Amount */}
                                        <td className="p-6 text-sm font-bold leading-5 text-black15">
                                             {item.amount}
                                        </td>

                                        {/* Method */}
                                        <td className="p-6  text-sm font-normal leading-5 font-inter text-gray-2200">
                                             {item.method}
                                        </td>
                                        {/* Status */}
                                        <td className="p-6">
                                             <span className={`px-2.5 h-5.5 w-fit rounded-full gap-1.5 flex items-center text-xs font-normal font-inter ${statusConfig[item.status].classes
                                                  }`}
                                             >
                                                  <span
                                                       className={`w-1.5 h-1.5 flex items-center justify-center rounded-full ${statusConfig[item.status].dot}`}
                                                  ></span>
                                                  {item.status}
                                             </span>
                                        </td>
                                        {/* Payout Date */}
                                        <td className="p-6">
                                             <span className="text-gray-2200 text-sm font-normal leading-5 font-inter block">{item.payoutdate}</span>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
}
