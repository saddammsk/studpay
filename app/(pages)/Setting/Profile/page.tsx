"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Buttons from "@/app/ui/Buttons";
import Link from "next/link";
import InputField from "@/app/ui/InputField";
import SettingSidebar from "@/app/components/SettingSidebar";

export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [name2, setName2] = useState("");
     const [phone, setPhone] = useState("");
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
                                   <h4 className="text-2xl font-bold leading-8 text-black-1200">Profile</h4>
                                   <p className="text-base font-normal font-inter leading-6 text-gray-1400">Manage your personal information and preferences.</p>
                                   <div className="my-6 bg-white rounded-[10px] border border-gray-1300/[50%] shadow-6xl p-6">
                                        <h4 className="text-lg font-bold leading-7 text-black-1200">Profile Photo</h4>
                                        <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Update your profile picture</p>
                                        <div className="mt-6 flex items-center gap-6">
                                             <img src="/images/profile-img.png" alt="" />
                                             <div>
                                                  <button type="button" className="bg-gray-1600 text-sm font-normal leading-5 text-black-1200 border border-gray-1300 rounded-lg flex items-center gap-2 py-2.5 px-4 cursor-pointer">
                                                       <img src="/images/camera.svg" alt="" />Change Photo
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="my-6 bg-white rounded-[10px] border border-gray-1300/[50%] shadow-6xl p-6">
                                        <h4 className="text-lg font-bold leading-7 text-black-1200">Personal Information</h4>
                                        <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Update your personal details</p>
                                        <form action="" className="mt-6">
                                             <div className="grid grid-cols-2 gap-4">
                                                  <InputField
                                                       label="First Name"
                                                       placeholder="John"
                                                       value={name}
                                                       onChange={(e) => setName(e.target.value)}
                                                       id="name"
                                                       name="name"
                                                       variant="filled2"
                                                  />
                                                  <InputField
                                                       label="Last Name"
                                                       placeholder="Doe"
                                                       value={name2}
                                                       onChange={(e) => setName2(e.target.value)}
                                                       id="name2"
                                                       name="name2"
                                                       variant="filled2"
                                                  />
                                             </div>
                                             <InputField
                                                  label="Email Address"
                                                  placeholder="john.doe@example.com"
                                                  value={email}
                                                  onChange={(e) => setEmail(e.target.value)}
                                                  id="name2"
                                                  name="name2"
                                                  variant="filled2"
                                             />
                                             <InputField
                                                  label="Phone Number"
                                                  placeholder="+1 (555) 123-4567"
                                                  value={phone}
                                                  onChange={(e) => setPhone(e.target.value)}
                                                  id="name2"
                                                  name="name2"
                                                  variant="filled2"
                                             />
                                             <div className="w-fit min-w-[127px]">
                                                  <Buttons href="/login" className="!py-2.5" variant="primary">
                                                       Save Changes
                                                  </Buttons>
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
