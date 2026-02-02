"use client";

import { useState } from "react";
import PrimaryLink from "@/app/ui/PrimaryLink";
import ToggleSwitch from "@/app/ui/ToggleSwitch";

export default function Home() {
     const [switch1, setSwitch1] = useState(false)
     const [switch2, setSwitch2] = useState(false)
     const [switch3, setSwitch3] = useState(false)
     const [switch4, setSwitch4] = useState(false)
     const [switch5, setSwitch5] = useState(false)


     return (
        
          <div className="2xl:w-[calc(100%_-_398px)] lg:w-[calc(100%_-_298px)] ml-auto">
               <div className=" max-w-[830px]">
                    <div className="flex lg:mt-0 mt-5 items-center gap-3">
                         <div className="bg-black-1300/[10%] w-9 h-9 rounded-[10px] flex items-center justify-center">
                              <img src="/images/notifaction-icon.svg" alt="" />
                         </div>
                         <div>
                              <h4 className="text-2xl font-bold leading-8 text-black-1200">Notifications</h4>
                              <p className="text-base font-normal font-inter leading-6 text-gray-1400">Configure how you receive updates</p>
                         </div>
                    </div>
                    <div className="bg-white mt-6 border border-gray-1100 rounded-xl shadow-7xl 2xl:p-6 p-4">
                         <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Email Notifications</p>
                         <form action="" className="mt-3">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <h6 className="text-base font-inter leading-6 text-black-1000">Payment received</h6>
                                        <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">When a tenant makes a payment</span>
                                   </div>
                                   <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                              </div>
                              <div className="mt-4  flex items-center justify-between">
                                   <div>
                                        <h6 className="text-base font-inter leading-6 text-black-1000">Maintenance requests</h6>
                                        <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">New maintenance tickets</span>
                                   </div>
                                   <ToggleSwitch enabled={switch2} setEnabled={setSwitch2} />
                              </div>
                              <div className="mt-4  flex items-center justify-between">
                                   <div>
                                        <h6 className="text-base font-inter leading-6 text-black-1000">Lease updates</h6>
                                        <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">Lease renewals and expirations</span>
                                   </div>
                                   <ToggleSwitch enabled={switch3} setEnabled={setSwitch3} />
                              </div>
                              <div className="mt-4  flex items-center justify-between">
                                   <div>
                                        <h6 className="text-base font-inter leading-6 text-black-1000">Weekly summary</h6>
                                        <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">Weekly property performance report</span>
                                   </div>
                                   <ToggleSwitch enabled={switch4} setEnabled={setSwitch4} />
                              </div>
                              <div className="py-6 border-t border-gray-1300 mt-6 flex items-end justify-between">
                                   <div>
                                        <p className="text-sm mb-6 font-normal font-inter leading-6 text-gray-1400">Push Notifications</p>
                                        <div>
                                             <h6 className="text-base font-inter leading-6 text-black-1000">Two-Factor Authentication</h6>
                                             <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">Add an extra layer of security</span>
                                        </div>
                                   </div>
                                   <ToggleSwitch enabled={switch5} setEnabled={setSwitch5} />
                              </div>
                              <div className="w-fit ml-auto min-w-[148px]">
                                   <PrimaryLink href="/login" className="!py-2.5" variant="primary">
                                        Save Preferences
                                   </PrimaryLink>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
            
     );
}
