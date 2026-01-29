"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Link from "next/link";
import MonthDropdown from "@/app/components/MonthDropdown";
import PropertyTable from "@/app/components/PropertyTable";


export default function Home() {
     const [isOpen, setIsOpen] = useState(false);

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
                                        <h6 className="text-black-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Revenue by property</h6>
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
                    <Link href="/" className="flex items-center gap-2 text-sm font-inter font-medium leading-5 text-gray-1000 py-2 mb-2.5" ><img src="/images/left-arrow.svg" alt="" /> Back to Applications</Link>
                    <div className="flex items-center sm:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between ">
                         <div>
                              <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Revenue by Property</h4>
                              <p className="text-base font-inter font-normal leading-6 text-gray-2200">Detailed breakdown of rental revenue across all properties</p>
                         </div>
                         <div className="flex items-center gap-3">
                              <button className="text-sm rounded-[10px] font-normal cursor-pointer font-inter leading-5 text-black flex items-center justify-center gap-2 py-[9px] px-[14px] bg-transparent border border-gray-2400">
                                   <img src="/images/export-arrow.svg" alt="" /> Export</button>
                         </div>
                    </div>
                    <div className="w-fit my-2.5">
                         <MonthDropdown></MonthDropdown>
                    </div>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                         <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Total Revenue</h6>
                              <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">€138,800</span>
                              <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                                   <img src="/images/grapgh-line.svg" alt="" />+9.2% vs last period
                              </div>
                         </div>
                         <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Active Properties</h6>
                              <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">6</span>
                              <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                                   <img src="/images/building-icon.svg" alt="" />Generating revenue
                              </div>
                         </div>
                         <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Avg. Occupancy</h6>
                              <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">89%</span>
                              <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                                   <img src="/images/per-icon.svg" alt="" />Across all units
                              </div>
                         </div>
                         <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Revenue per Unit</h6>
                              <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">€2,892</span>
                              <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                                   <img src="/images/grapgh-line.svg" alt="" />+5.2% efficiency
                              </div>
                         </div>
                    </div>
                    <PropertyTable></PropertyTable>
               </div>
          </div>
     );
}
