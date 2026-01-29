"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Buttons from "@/app/ui/Buttons";
import SettingSidebar from "@/app/components/SettingSidebar";
import DropdownMenu from "@/app/ui/DropdownMenu";
import Link from "next/link";

export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const ownerMenuItems = [
          { label: 'Admin', },
          { label: 'Owner', },
          { label: 'Viewer', },
     ]

     return (
          <div className="bg-gray-1900 font-dm-sans  xl:pl-64 md:pl-50 pt-16">
               <Sidebar isOpen={isOpen} />
               <header className="fixed top-0 left-0 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
                    <div className="xl:px-6 md:px-3 px-4 flex items-center justify-end">
                         <Link href="/" className="flex items-center justify-center md:w-10 w-6 md:h-10 h-6 relative rounded-md">
                              <img src="../images/notification-icon.svg" alt="" className="md:h-auto h-3.5" />
                              <span className="text-white absolute -top-1 -right-1 flex items-center justify-center font-medium md:text-xs text-[10px] leading-4 bg-blue-1100 md:w-5 w-4 md:h-5 h-4 rounded-full">3</span>
                         </Link>
                         <UserDropMenu />
                         <Link href="/"
                              onClick={(e) => {
                                   e.preventDefault();
                                   setIsOpen(!isOpen);
                              }}
                              className="md:hidden flex items-center"
                         >
                              <img src="../images/menu-icon.svg" alt="" className="h-5" />
                         </Link>
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
                                             <img src="/images/user-icon.svg" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-2xl font-bold leading-8 text-black-1200">Team & Access</h4>
                                             <p className="text-base font-normal font-inter leading-6 text-gray-1400">Manage team members and permissions</p>
                                        </div>
                                   </div>
                                   <div className="bg-white mt-6 border border-gray-1100 rounded-xl shadow-7xl 2xl:p-6 p-4">
                                        <div className="flex items-center justify-between">
                                             <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Team Members</p>
                                             <div className="w-fit min-w-[120px]">
                                                  <Buttons href="/" className="!py-2.5" variant="primary">
                                                       Invite Member
                                                  </Buttons>
                                             </div>
                                        </div>
                                        <form action="" className="mt-6 space-y-3">
                                             <div className="border border-gray-1300 bg-gray-1700/[20%] rounded-[10px] flex items-center justify-between gap-5 p-4">
                                                  <div className="flex items-center gap-3">
                                                       <img src="/images/user-img.png" className="w-10 h-10 rounded-full" alt="" />
                                                       <div>
                                                            <h6 className="text-base font-normal font-inter leading-6 text-black-1200">John Smith</h6>
                                                            <span className="block text-sm font-normal leading-5 font-inter text-gray-1400">john@example.com</span>
                                                       </div>
                                                  </div>
                                                  <DropdownMenu label="Owner" items={ownerMenuItems} />
                                             </div>
                                             <div className="border border-gray-1300 bg-gray-1700/[20%] rounded-[10px] flex items-center justify-between gap-5 p-4">
                                                  <div className="flex items-center gap-3">
                                                       <img src="/images/user-img.png" className="w-10 h-10 rounded-full" alt="" />
                                                       <div>
                                                            <h6 className="text-base font-normal font-inter leading-6 text-black-1200">John Smith</h6>
                                                            <span className="block text-sm font-normal leading-5 font-inter text-gray-1400">john@example.com</span>
                                                       </div>
                                                  </div>
                                                  <div className="flex items-center gap-3">
                                                       <DropdownMenu label="Owner" items={ownerMenuItems} />
                                                       <Link href="/" className="text-sm font-normal leading-5 block text-red-1000 py-2 px-3">Remove</Link>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-1300 bg-gray-1700/[20%] rounded-[10px] flex items-center justify-between gap-5 p-4">
                                                  <div className="flex items-center gap-3">
                                                       <img src="/images/user-img.png" className="w-10 h-10 rounded-full" alt="" />
                                                       <div>
                                                            <h6 className="text-base font-normal font-inter leading-6 text-black-1200">John Smith</h6>
                                                            <span className="block text-sm font-normal leading-5 font-inter text-gray-1400">john@example.com</span>
                                                       </div>
                                                  </div>
                                                  <div className="flex items-center gap-3">
                                                       <DropdownMenu label="Viewer" items={ownerMenuItems} />
                                                       <Link href="/" className="text-sm font-normal leading-5 block text-red-1000 py-2 px-3">Remove</Link>
                                                  </div>
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
