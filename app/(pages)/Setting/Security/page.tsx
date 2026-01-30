"use client";

import { useState } from "react";
import Sidebar from "@/app/components/common/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import PrimaryLink from "@/app/ui/PrimaryLink";
import Link from "next/link";
import InputField from "@/app/ui/InputField";
import SettingSidebar from "@/app/components/SettingSidebar";
import ToggleSwitch from "@/app/ui/ToggleSwitch";

export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [name2, setName2] = useState("");
     const [phone, setPhone] = useState("");
     const [switch1, setSwitch1] = useState(false)
     const [switch2, setSwitch2] = useState(false)
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
                                             <img src="/images/shield-icon3.svg" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-2xl font-bold leading-8 text-black-1200">Security</h4>
                                             <p className="text-base font-normal font-inter leading-6 text-gray-1400">Protect your account</p>
                                        </div>
                                   </div>
                                   <div className="bg-white mt-6 border border-gray-1100 rounded-xl shadow-7xl 2xl:px-5 px-3 2xl:py-6 py-4">
                                        <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Password</p>
                                        <form action="" className="mt-3">
                                             <InputField
                                                  label="Current Password"
                                                  placeholder=""
                                                  value={name}
                                                  onChange={(e) => setName(e.target.value)}
                                                  id="name"
                                                  name="name"
                                                  variant="filled2"
                                             />
                                             <InputField
                                                  label="New Password"
                                                  placeholder=""
                                                  value={name2}
                                                  onChange={(e) => setName2(e.target.value)}
                                                  id="name2"
                                                  name="name2"
                                                  variant="filled2"
                                             />
                                             <InputField
                                                  label="Confirm New Password"
                                                  placeholder=""
                                                  value={email}
                                                  onChange={(e) => setEmail(e.target.value)}
                                                  id="name2"
                                                  name="name2"
                                                  variant="filled2"
                                             />
                                             <div className="py-6 border-t border-gray-1300 mt-6 flex items-center justify-between">
                                                  <div>
                                                       <h6 className="text-base font-inter leading-6 text-black-1000">Two-Factor Authentication</h6>
                                                       <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">Add an extra layer of security</span>
                                                  </div>
                                                  <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                                             </div>
                                             <div className="py-6 border-t border-gray-1300  flex items-center justify-between">
                                                  <div>
                                                       <h6 className="text-base font-inter leading-6 text-black-1000">Login Alerts</h6>
                                                       <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">Get notified of new logins</span>
                                                  </div>
                                                  <ToggleSwitch enabled={switch2} setEnabled={setSwitch2} />
                                             </div>
                                             <div className="w-fit ml-auto min-w-[127px]">
                                                  <PrimaryLink href="/login" className="!py-2.5" variant="primary">
                                                       Update Password
                                                  </PrimaryLink>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
