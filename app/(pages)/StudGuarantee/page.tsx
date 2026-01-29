"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Buttons from "@/app/ui/Buttons";
import Link from 'next/link'
export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const properties = [
          {
               id: 1,
               title: "Résidence Les Jardins",
               price: "€1,200.00",
               status: "Active",
               tenant: "Marie Dupont",
               type: "Deposit",
               period: "01 Sept 2024 — 31 Aug 2025",
               disabled: false,
          },
          {
               id: 2,
               title: "Studio Belleville",
               price: "€2,400.00",
               status: "Active",
               tenant: "Lucas Martin",
               type: "Full Coverage",
               period: "15 Oct 2024 — 14 Oct 2025",
               disabled: false,
          },
          {
               id: 3,
               title: "Appartement République",
               price: "€800.00",
               status: "Expired",
               tenant: "Emma Bernard",
               type: "Rent",
               period: "01 Sept 2023 — 31 Aug 2024",
               disabled: true,
          },
          {
               id: 4,
               title: "Chambre Étudiante Lyon",
               price: "€600.00",
               status: "Pending",
               tenant: "Emma Bernard",
               type: "Rent",
               period: "01 Sept 2023 — 31 Aug 2024",
               disabled: true,
          },
          {
               id: 5,
               title: "Colocation Montmartre",
               price: "€1,800.00",
               status: "Active",
               tenant: "Sophie Moreau",
               type: "Full Coverage",
               period: "01 Jun 2024 — 31 May 2025",
               disabled: false,
          },
          {
               id: 6,
               title: "T2 Nation",
               price: "€950.00",
               status: "Expired",
               tenant: "Alexandre Petit",
               type: "Rent",
               period: "01 Mar 2023 — 29 Feb 2024",
               disabled: true,
          },
     ];

     const statusClasses: any = {
          Active: "text-green-1200 bg-green-1200/[10%]",
          Expired: "text-gray-2200 bg-gray-2300",
          Pending: "text-yellow-1100 bg-yellow-1100/[10%]",
     };


     return (
          <div className="bg-gray-1900 font-dm-sans  xl:pl-64 md:pl-50 pt-16">
               <Sidebar isOpen={isOpen} />
               <header className="fixed top-0 left-0 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
                    <div className="xl:px-6 md:px-3 px-4 flex items-center justify-between">
                         <div className="">
                              <h4 className="text-black-1000 font-dm-sans font-semibold md:text-lg text-base md:leading-7 leading-5 tracking-[-0.45px]">Stud Guarantee</h4>
                              <p className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Dashboard</p>
                         </div>
                         <div className="flex items-center md:gap-4 gap-2.5">
                              <Link href="/" className="flex items-center justify-center md:w-10 w-6 md:h-10 h-6 relative rounded-md">
                                   <img src="../images/notification-icon.svg" alt="" className="md:h-auto h-3.5" />
                                   <span className="text-white absolute -top-1 -right-1 flex items-center justify-center font-medium md:text-xs text-[10px] leading-4 bg-blue-1100 md:w-5 w-4 md:h-5 h-4 rounded-full">3</span>
                              </Link>
                              <UserDropMenu />
                              <Link
                                   href="/"
                                   onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(!isOpen);
                                   }}
                                   className="md:hidden flex items-center"
                              >
                                   <img src="../images/menu-icon.svg" alt="" className="h-5" />
                              </Link>


                         </div>
                    </div>
               </header>
               <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
                    <div className="flex items-center justify-between mb-4">
                         <div>
                              <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Guarantees</h4>
                              <p className="text-base font-inter font-normal leading-6 text-gray-2200">Manage your rental guarantees</p>
                         </div>
                         <div className="w-fit">
                              <Buttons href="/" className="!py-2.5 px-4 gap-2" variant="primary">
                                   <img src="/images/plus-icon.svg" alt="" />   Request a guarantee
                              </Buttons>
                         </div>
                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 mb-4 gap-4">
                         <div className="bg-white rounded-xl shadow-5xl flex items-center gap-4 py-[22px] px-5">
                              <div className="rounded-xl w-12 h-12 rounded-xl bg-blue-1300 flex items-center justify-center">
                                   <img src="/images/shield-icon.svg" alt="" />
                              </div>
                              <div>
                                   <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">3</h4>
                                   <p className="text-sm font-inter font-normal leading-5 text-gray-2200">Active Guarantees</p>
                              </div>
                         </div>
                         <div className="bg-white rounded-xl shadow-5xl flex items-center gap-4 py-[22px] px-5">
                              <div className="rounded-xl w-12 h-12 rounded-xl bg-blue-1300 flex items-center justify-center">
                                   <img src="/images/timer-blue.svg" alt="" />
                              </div>
                              <div>
                                   <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">1</h4>
                                   <p className="text-sm font-inter font-normal leading-5 text-gray-2200">Pending</p>
                              </div>
                         </div>
                         <div className="bg-white rounded-xl shadow-5xl flex items-center gap-4 py-[22px] px-5">
                              <div className="rounded-xl w-12 h-12 rounded-xl bg-blue-1300 flex items-center justify-center">
                                   <img src="/images/info-icon.svg" alt="" />
                              </div>
                              <div>
                                   <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">2</h4>
                                   <p className="text-sm font-inter font-normal leading-5 text-gray-2200">Expired</p>
                              </div>
                         </div>
                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 mb-4 4xl:gap-x-9 gap-x-5 gap-y-4">
                         {properties.map((item) => (
                              <div key={item.id} className="bg-white rounded-xl shadow-5xl p-5">
                                   {/* Header */}
                                   <div className="flex items-center mb-4 gap-3 justify-between">
                                        <div className="flex items-center gap-3">
                                             <div className="w-10 h-10 rounded-xl bg-blue-1300 flex items-center justify-center">
                                                  <img src="/images/register-icon2.svg" alt="" />
                                             </div>
                                             <div>
                                                  <h4 className="text-base font-inter font-bold leading-6 text-black-1200">
                                                       {item.title}
                                                  </h4>
                                                  <p className="text-sm font-inter text-gray-2200">
                                                       {item.price}
                                                  </p>
                                             </div>
                                        </div>

                                        <span
                                             className={`text-xs font-inter px-2.5 py-0.5 rounded-full ${statusClasses[item.status]}`}
                                        >
                                             {item.status}
                                        </span>
                                   </div>

                                   {/* Info */}
                                   <ul className="space-y-[14px] mb-4">
                                        <li className="flex items-center gap-2 text-sm text-gray-2200">
                                             <img src="/images/user-icon3.svg" alt="" />
                                             <span>Tenant:</span>
                                             <span className="text-black-1200">{item.tenant}</span>
                                        </li>

                                        <li className="flex items-center gap-2 text-sm text-gray-2200">
                                             <img src="/images/shield-icon2.svg" className="w-4" alt="" />
                                             <span>Type:</span>
                                             <span className="text-black-1200">{item.type}</span>
                                        </li>

                                        <li className="flex items-center gap-2 text-sm text-gray-2200">
                                             <img src="/images/calendar2.svg" alt="" />
                                             <span>Period:</span>
                                             <span className="text-black-1200">{item.period}</span>
                                        </li>
                                   </ul>

                                   {/* Button */}
                                   <Buttons
                                        href="/"
                                        variant="primaryborder"
                                        className={`!py-1.5 px-4 gap-2 ${item.disabled ? "opacity-50" : ""
                                             }`}
                                   >
                                        Declare a claim
                                   </Buttons>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}
