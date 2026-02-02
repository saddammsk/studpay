'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { ReactNode } from "react";
import InputField from "@/app/ui/InputField";
import StatusDropdownMenu from "@/app/ui/StatusDropdownMenu";

type PaymentStatus = "Active" | "Ending Soon" | "Ended"

interface Payment {
     movedateout: ReactNode;
     actions: {
          eyes: string;
          sms: string;
     };
     tenant: {
          name: string;
          initials: string;
     };
     property: {
          name: string;
          initials: string;
     };
     movedate: string;
     monthlyrent: string;
     id: number;
     status: PaymentStatus;
}

const statusConfig = {
     Active: {
          classes: "border-green239 bg-green241 text-green238",
     },
     "Ending Soon": {
          classes: "border-yellow42 bg-yellow23 text-yellow22",
     },
     Ended: {
          classes: "border-gray-1100 bg-lightgray text-darkgray12",
     },

} as const;

const payments: Payment[] = [
     {
          id: 1,
          tenant: { name: "properties_batch_2025.csv", initials: "ET" },
          property: { name: "Sunset Apartments", initials: "Unit 4B" },
          status: "Active",
          movedate: "Jan 15, 2024",
          movedateout: "Jan 14, 2025",
          monthlyrent: "$1,200",
          actions: { eyes: "/images/eyes2.svg", sms: "/images/sms.svg" },
     },
     {
          id: 2,
          tenant: { name: "James Wilson", initials: "JW" },
          property: { name: "Oak Street Residence", initials: "Unit 2A" },
          status: "Ending Soon",
          movedate: "Jun 1, 2023",
          movedateout: "May 31, 2024",
          monthlyrent: "$950",
          actions: { eyes: "/images/eyes2.svg", sms: "/images/sms.svg" },

     },
     {
          id: 3,
          tenant: { name: "Sofia Martinez", initials: "SM" },
          property: { name: "Sunset Apartments", initials: "Unit 7C" },
          status: "Active",
          movedate: "Mar 1, 2024",
          movedateout: "Feb 28, 2025",
          monthlyrent: "$1,350",
          actions: { eyes: "/images/eyes2.svg", sms: "/images/sms.svg" },
     },
     {
          id: 4,
          tenant: { name: "Michael Chen", initials: "MC" },
          property: { name: "Downtown Lofts", initials: "Unit 12" },
          status: "Ended",
          movedate: "Sep 15, 2022",
          movedateout: "Sep 14, 2023",
          monthlyrent: "$1,800",
          actions: { eyes: "/images/eyes2.svg", sms: "/images/sms.svg" },

     },
     {
          id: 5,
          tenant: { name: "Sarah Johnson", initials: "SJ" },
          property: { name: "Oak Street Residence", initials: "Unit 5B" },
          status: "Active",
          movedate: "Feb 1, 2024",
          movedateout: "Jan 31, 2025",
          monthlyrent: "$1,100",
          actions: { eyes: "/images/eyes2.svg", sms: "/images/sms.svg" },

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

export default function TenantsTable() {
     const [email, setEmail] = useState("");
     return (
          <div className="border border-gray-2400 rounded-xl">
               <div className="sm:p-6 p-4 border-b border-solid border-gray54">
                    <form className="flex sm:flex-row flex-col items-center gap-4">
                         <div className="search-feild sm:w-md w-full">
                              <InputField
                                   label={""}
                                   placeholder="Search by tenant name or unit..."
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   leftIconSrc="/images/search-icon.svg"
                                   id="email"
                                   name="email"
                                   variant="filled3"
                              />
                         </div>
                         <div className="flex items-center gap-3 sm:w-auto w-full">
                              <StatusDropdownMenu label={"All Status"} items={StatusMenuItems} />
                              <StatusDropdownMenu label={"All Properties"} items={PropertiesMenuItems} />
                         </div>
                    </form>
               </div>

               <div className="overflow-x-auto">
                    <table className="2xl:w-full w-341.25 text-sm">
                         <thead className="bg-white">
                              <tr>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Tenant Name</th>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Property / Unit</th>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Lease Status</th>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Move-in Date</th>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Move-out Date</th>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Monthly Rent</th>
                                   <th className="px-6 py-3 text-left font-inter font-medium text-xs text-gray-1400 leading-5">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {payments.map((item) => (
                                   <tr key={item.id} className="border-t border-gray-2400">
                                        <td className="px-6 py-4.5">
                                             <div className="flex items-center gap-3">
                                                  <span className="flex items-center justify-center bg-blue-1000/10 rounded-full w-9 h-9 text-blue-1000 font-medium text-sm leading-5">{item.tenant.initials}</span>
                                                  <span className="text-black-1200 flex items-center text-sm font-medium leading-5">{item.tenant.name}</span>
                                             </div>
                                        </td>
                                        <td className="px-6 py-4.5">
                                             <div className="flex flex-col items-start">
                                                  <h4 className="text-black-1200 flex items-center text-sm font-medium leading-5">{item.property.name}</h4>
                                                  <span className="flex items-center justify-center text-gray-1400 font-normal text-sm leading-5">{item.property.initials}</span>
                                             </div>
                                        </td>
                                        <td className="px-6 py-4.5">
                                             <span
                                                  className={`px-2.5 h-5.5 w-fit rounded-full flex border border-solid items-center text-xs font-medium font-inter ${statusConfig[item.status].classes
                                                       }`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>

                                        <td className="px-6 py-4.5 text-sm font-normal leading-5 text-gray-1400">
                                             {item.movedate}
                                        </td>

                                        <td className="px-6 py-4.5 text-sm font-normal leading-5 text-gray-1400">
                                             {item.movedateout}
                                        </td>




                                        <td className="px-6 py-4.5 text-sm font-medium leading-5 font-inter text-black-1200">
                                             {item.monthlyrent}
                                        </td>

                                        <td className="px-6 py-4.5">
                                             <div className="flex items-center gap-3">
                                                  <ul className="flex items-center gap-1">
                                                       <li>
                                                            <Link href={'#'} className="group flex items-center justify-center w-8 h-8 hover:bg-blue137 transition-all duration-500 ease-in-out rounded-full">
                                                                 <Image
                                                                      src={item.actions.eyes}
                                                                      alt=""
                                                                      width={16}
                                                                      height={16}
                                                                      className="group-hover:brightness-0"
                                                                 />
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href={'/TenantsProfile'} className="group flex items-center justify-center w-8 h-8 hover:bg-blue137 transition-all duration-500 ease-in-out rounded-full">
                                                                 <Image
                                                                      src={item.actions.sms}
                                                                      alt=""
                                                                      width={16}
                                                                      height={16}
                                                                      className="group-hover:brightness-0"
                                                                 />
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>

                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
               <div className="sm:px-6 sm:py-5.5 p-4 flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between border-t border-solid border-gray54">
                    <p className="text-gray-1400 font-normal text-sm leading-5">Showing 1 to 5 of 5 tenants</p>
                    <ul className="flex items-center justify-center gap-4">
                         <li>
                              <Link href={"#"} className="flex items-center justify-center border border-solid border-gray54 bg-white hover:bg-blue137 rounded-xl w-8 h-8 opacity-50">
                                   <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66699 8.66699L0.666992 4.66699L4.66699 0.666992" stroke="#14181F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>

                              </Link>
                         </li>
                         <li className="text-gray-1400 font-normal text-sm leading-5">Page 1 of 1</li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center border border-solid border-gray54 bg-white hover:bg-blue137 rounded-xl w-8 h-8 opacity-50">
                                   <Image
                                        src="../images/right-arrow-black.svg"
                                        alt=""
                                        width={6}
                                        height={19}
                                   />
                              </Link>
                         </li>
                    </ul>
               </div>
          </div>
     );
}
