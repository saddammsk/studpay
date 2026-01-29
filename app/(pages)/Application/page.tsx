"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import InputField from "@/app/ui/InputField";
import StatusDropdown from "@/app/components/StatusDropdown";
import ApplicationTable from "@/app/components/ApplicationTable";


export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const [name, setName] = useState("");


     return (
          <div className="bg-gray-1900 font-dm-sans  xl:pl-64 md:pl-50 pt-16">
               <Sidebar isOpen={isOpen} />
               <header className="fixed top-0 left-0 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
                    <div className="xl:px-6 md:px-3 px-4 flex items-center justify-between">
                         <div className="">
                              <h4 className="text-black-1000 font-dm-sans font-semibold md:text-lg text-base md:leading-7 leading-5 tracking-[-0.45px]">Applications</h4>
                              <h6 className="text-black-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Welcome back, Partner</h6>
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
                    <div className="mb-6">
                         <h4 className="text-2xl font-bold leading-8 text-black-1200 mb-1">Applications</h4>
                         <p className="text-base font-inter font-normal leading-6 text-gray-2200">Review and manage student rental applications with AI-powered risk assessment</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap">
                         <div className="w-full max-w-[320px]">
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
                         <div className="flex gap-2">
                              <StatusDropdown
                                   buttonLabel="Status"
                                   buttonClassName="bg-gray-50"
                                   leftIcon="/images/filter-icon.svg"
                                   rightIcon="/images/droparrow.svg"
                                   items={[
                                        { label: 'Edit', shortcut: '⌘E', onClick: () => console.log('Edit') },
                                        { label: 'Duplicate', shortcut: '⌘D', onClick: () => console.log('Duplicate') },
                                        { divider: true },
                                        { label: 'Archive', shortcut: '⌘A', onClick: () => console.log('Archive') },
                                        { label: 'Delete', shortcut: '⌘D', onClick: () => console.log('Delete') },
                                   ]}
                              />
                              <StatusDropdown
                                   buttonLabel="AI Risk"
                                   buttonClassName="bg-gray-50"
                                   leftIcon="/images/star.svg"
                                   rightIcon="/images/droparrow.svg"
                                   items={[
                                        { label: 'Edit', shortcut: '⌘E', onClick: () => console.log('Edit') },
                                        { label: 'Duplicate', shortcut: '⌘D', onClick: () => console.log('Duplicate') },
                                        { divider: true },
                                        { label: 'Archive', shortcut: '⌘A', onClick: () => console.log('Archive') },
                                        { label: 'Delete', shortcut: '⌘D', onClick: () => console.log('Delete') },
                                   ]}
                              />

                         </div>
                    </div>
                    <ApplicationTable></ApplicationTable>
                    <div className="flex items-center justify-between mt-4">
                         <h6 className="text-sm font-inter leading-5 text-gray-1000">Showing 8 of 8 applications</h6>
                         <h6 className="text-sm font-inter leading-5 text-gray-1000">2 pending review</h6>
                    </div>
               </div>
          </div>
     );
}
