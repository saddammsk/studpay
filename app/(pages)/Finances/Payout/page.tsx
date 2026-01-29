"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Link from "next/link";
import Buttons from "@/app/ui/Buttons";
import InputField from "@/app/ui/InputField";
import PaymentsTable2 from "@/app/components/PaymentsTable2";
import PayoutsTable from "@/app/components/PayoutTable";
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
                              <h4 className="text-2xl font-bold leading-9 text-black-1200 mb-1">Payouts</h4>
                              <p className="text-sm font-inter font-normal leading-6 text-gray-2200">Manage and track your payout transactions</p>
                         </div>
                         <div className="flex-1 w-full max-w-[192px]">
                              <Buttons type="submit" className="px-4 !py-2.5 gap-2.5" variant="bluebtn">
                                   <img src="/images/arrow-2.svg" className="brightness-[6]" alt="" />  Request Payout
                              </Buttons>
                         </div>
                    </div>
                    <div className="grid lg:grid-cols-2 xl:gap-[60px] mb-4 gap-4">
                         <div className="border-l-4 border-black-1300 flex items-start justify-between py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                              <div>
                                   <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Available Balance</span>
                                   <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$8,270.00</h4>
                                   <p className="font-inter text-xs font-normal leading-4 text-gray-1400">Ready for withdrawal</p>
                              </div>
                              <div className="bg-black-1300/[10%] w-12 h-12 rounded-full flex items-center justify-center">
                                   <img src="/images/dollar-black.svg" alt="" />
                              </div>
                         </div>
                         <div className="flex items-start justify-between  py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                              <div>
                                   <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Next Payout Date</span>
                                   <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">Dec 22, 2024</h4>
                                   <p className="font-inter text-xs font-normal leading-4 text-gray-1400">Automatic scheduled payout</p>
                              </div>
                              <div className="bg-black-1300/[10%] w-12 h-12 rounded-full flex items-center justify-center">
                                   <img src="/images/calendar2.svg" alt="" />
                              </div>
                         </div>
                    </div>
                    <PayoutsTable></PayoutsTable>
               </div>
          </div>
     );
}
