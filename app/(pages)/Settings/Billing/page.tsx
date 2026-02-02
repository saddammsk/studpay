'use client'

import { AddBankModal } from "@/app/components/Settings/AddBankModel";
import PrimaryLink from "@/app/ui/PrimaryLink";
import { useState } from "react";

export default function BillingPage() {
          const [showModel1, setModel1] = useState(false)

     return (

          <div className="flex-1">
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
                         <PrimaryLink onClick={()=> setModel1(true)}  variant="primary" className="bg-blue-1200! w-fit! gap-2 py-[14px]! px-5!">
                              <img src="/images/plus-icon.svg" alt="" />    Add Bank Account
                         </PrimaryLink>

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


          <AddBankModal isOpen={showModel1} setIsOpen={setModel1} onSuccess={()=> setModel1(false)} />
               
          </div>
            
     );
}
