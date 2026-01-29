"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Buttons from "@/app/ui/Buttons";
import SettingSidebar from "@/app/components/SettingSidebar";

export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     return (
          <div className="bg-gray-1900 font-dm-sans  xl:pl-64 md:pl-50 pt-16">
               <Sidebar isOpen={isOpen} />
               <header className="fixed top-0 left-0 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
                    <div className="xl:px-6 md:px-3 px-4 flex items-center justify-end">
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
               </header>
               <div className="xl:py-6 xl:px-4 p-4">
                    <div className="lg:flex gap-[126px]">
                         <div className="lg:w-[256px] lg:h-[calc(100vh_-_123px)] lg:fixed static top-[88px] xl:left-[284px] left-[212px] bg-white border-r border-gray-1300/[50%]">
                              <div className="md:p-6 px-4 pt-0 pb-6 border-b border-gray-1300/[50%]">
                                   <h4 className="font-inter text-lg font-bold leading-7 text-black-1000">Settings</h4>
                                   <p className="text-sm font-normal leading-5 text-gray-1400">Manage your account</p>
                              </div>
                              <SettingSidebar></SettingSidebar>
                         </div>
                         <div className="2xl:w-[calc(100%_-_398px)] lg:w-[calc(100%_-_298px)] ml-auto">
                              <div className=" max-w-[830px]">
                                   <div className="flex lg:mt-0 mt-5 items-center gap-3">
                                        <div className="bg-black-1300/[10%] w-9 h-9 rounded-[10px] flex items-center justify-center">
                                             <img src="/images/building-icon2.svg" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-2xl font-bold leading-8 text-black-1200">Bank & Billing</h4>
                                             <p className="text-base font-normal font-inter leading-6 text-gray-1400">Manage your payment methods and billing</p>
                                        </div>
                                   </div>
                                   <div className="my-6 grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-6 gap-3">
                                        <div className="bg-white flex items-center gap-4 border border-gray-1100 rounded-xl shadow-7xl 2xl:px-5 px-3 2xl:py-6 py-4">
                                             <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-1200/[10%]">
                                                  <img src="/images/register-icon2.svg" alt="" />
                                             </div>
                                             <div>
                                                  <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Bank Accounts</h6>
                                                  <span className="2xl:text-2xl text-xl font-inter font-bold leading-8 text-black-1000">1</span>
                                             </div>
                                        </div>
                                        <div className="bg-white flex items-center gap-4 border border-gray-1100 rounded-xl shadow-7xl 2xl:px-5 px-3 2xl:py-6 py-4">
                                             <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-1000">
                                                  <img src="/images/wallet-green.svg" alt="" />
                                             </div>
                                             <div className="flex-1">
                                                  <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Next Payout</h6>
                                                  <span className="2xl:text-2xl text-xl font-inter font-bold leading-8 text-black-1000">$2,450.00</span>
                                             </div>
                                        </div>
                                        <div className="bg-white flex items-center gap-4 border border-gray-1100 rounded-xl shadow-7xl 2xl:px-5 px-3 2xl:py-6 py-4">
                                             <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-2000">
                                                  <img src="/images/dollar-icon.svg" alt="" />
                                             </div>
                                             <div className="flex-1">
                                                  <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">This Month</h6>
                                                  <span className="2xl:text-2xl text-xl font-inter font-bold leading-8 text-black-1000">$12,580.00</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-white mb-5 md:flex-nowrap flex-wrap flex items-center justify-between gap-4 border border-gray-1100 rounded-xl shadow-7xl px-5 py-6">
                                        <div>
                                             <span className="text-lg font-inter font-bold leading-8 text-black-1000">Bank Accounts</span>
                                             <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Manage accounts for receiving payouts</h6>
                                        </div>
                                        <Buttons href="/" variant="primary" className="bg-blue-1200! w-fit! gap-2 py-[14px]! px-5!">
                                             <img src="/images/plus-icon.svg" alt="" />    Add Bank Account
                                        </Buttons>

                                   </div>
                                   <div className="bg-white flex items-start gap-4 border border-gray-1100 rounded-xl shadow-7xl px-5 py-6">
                                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-1200/[10%]">
                                             <img src="/images/register-icon2.svg" alt="" />
                                        </div>
                                        <div>
                                             <div className="flex items-center gap-2">
                                                  <span className="text-base font-inter font-bold leading-8 text-black-1000">Chase Bank</span>
                                                  <div className="bg-blue-1200 rounded-full text-xs text-white font-normal leading-4 font-inter flex items-center gap-1 py-1 px-2.5">
                                                       <img src="/images/star-icon2.svg" alt="" />    Primary
                                                  </div>
                                             </div>
                                             <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">John Doe</h6>
                                             <h6 className="text-sm font-normal leading-5 mb-2 font-inter text-gray-1000">•••• •••• •••• 7890</h6>
                                             <div className="text-xs font-normal leading-4 text-green-1100 py-0.5 px-2 inline-block rounded-full bg-green-1000">Connected via Open Banking</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
