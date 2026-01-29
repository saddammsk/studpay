"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InputField from "@/app/ui/InputField";
import PaymentsTable2 from "@/app/components/PaymentsTable2";
export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const [name, setName] = useState("");
     return (
          <div className="bg-gray-1900 font-dm-sans  xl:pl-64 md:pl-50 pt-16">
               <Sidebar isOpen={isOpen} />
               <header className="fixed top-0 left-0 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
                    <div className="xl:px-6 md:px-3 px-4 flex items-center justify-between">
                         <div className="">
                              <h4 className="text-black-1000 font-dm-sans font-semibold md:text-lg text-base md:leading-7 leading-5 tracking-[-0.45px]">Finances</h4>
                              <ul className="flex items-center gap-2.5">
                                   <li>
                                        <Link href="/" className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Finance</Link>
                                   </li>
                                   <li>
                                        <img src="/images/right-arrow.svg" alt="" />
                                   </li>
                                   <li>
                                        <h6 className="text-black-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Payments</h6>
                                   </li>
                              </ul>
                         </div>
                         <div className="flex items-center md:gap-4 gap-2.5">
                              <a href="#" className="flex items-center justify-center md:w-10 w-6 md:h-10 h-6 relative rounded-md">
                                   <img src="../images/notification-icon.svg" alt="" className="md:h-auto h-3.5" />
                                   <span className="text-white absolute -top-1 -right-1 flex items-center justify-center font-medium md:text-xs text-[10px] leading-4 bg-blue-1100 md:w-5 w-4 md:h-5 h-4 rounded-full">3</span>
                              </a>
                              <UserDropMenu />
                              <a
                                   href="#"
                                   onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(!isOpen);
                                   }}
                                   className="md:hidden flex items-center"
                              >
                                   <img src="../images/menu-icon.svg" alt="" className="h-5" />
                              </a>
                         </div>
                    </div>
               </header>
               <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
                    <div className="flex items-center xl:flex-nowrap flex-wrap mb-4 xl:gap-0 gap-5 sm:gap-0 gap-4 justify-between ">
                         <div>
                              <h4 className="text-2xl font-bold leading-9 text-black-1200 mb-1">Payments</h4>
                              <p className="text-sm font-inter font-normal leading-6 text-gray-2200">Manage and track all student payment transactions</p>
                         </div>
                         <div className="flex-1 w-full max-w-[320px]">
                              <InputField className="pl-10! h-10!"
                                   label=""
                                   placeholder="Search by student or invoice..."
                                   value={name}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setName(e.target.value)}
                                   leftIconSrc="/images/search-icon.svg"
                                   id="email"
                                   name="email"
                              />
                         </div>
                    </div>
                    <div className="grid lg:grid-cols-3 xl:gap-[60px] mb-4 gap-4">
                         <div className="border-l-4 border-green-1100 py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                              <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Total Received</span>
                              <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$8,270.00</h4>
                              <p className="font-inter text-xs font-normal leading-4 text-gray-1400">6 payments</p>
                         </div>
                         <div className="border-l-4 border-yellow-1100 py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                              <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Pending</span>
                              <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$2,180.00</h4>
                              <p className="font-inter text-xs font-normal leading-4 text-gray-1400">2 payments</p>
                         </div>
                         <div className="border-l-4 border-red-1000 py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                              <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Failed</span>
                              <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$1,350.00</h4>
                              <p className="font-inter text-xs font-normal leading-4 text-gray-1400">1 payment</p>
                         </div>
                    </div>
                    <PaymentsTable2></PaymentsTable2>
               </div>
          </div>
     );
}
