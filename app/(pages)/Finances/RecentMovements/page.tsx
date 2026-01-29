"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Link from "next/link";
import SelectBox, { SelectOption } from "@/app/components/SelectBox";
import { DatePicker } from "@/app/components/DatePicker";
import MovementsTable from "@/app/components/MovementsTable";
import MovementsHistoryTable from "@/app/components/MovementsHistoryTable";
import Pagination from "@/app/ui/Pagination";

const propertyOptions: SelectOption[] = [
     { id: 1, name: 'All Properties' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]
const propertyOptions2: SelectOption[] = [
     { id: 1, name: 'All Types' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]
const propertyOptions3: SelectOption[] = [
     { id: 1, name: 'All Status' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]

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
                                        <h6 className="text-black-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Blocked Deposits</h6>
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
                    <div className="flex items-center sm:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between ">
                         <div>
                              <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Recent Movements</h4>
                              <p className="text-base font-inter font-normal leading-6 text-gray-2200">Complete history of your financial movements</p>
                         </div>
                         <div className="flex items-center gap-3">
                              <button className="text-sm rounded-[10px] font-normal cursor-pointer font-inter leading-5 text-black flex items-center justify-center gap-2 py-[9px] px-[14px] bg-transparent border border-gray-2400">
                                   <img src="/images/export-icon2.svg" alt="" /> Export</button>
                         </div>
                    </div>
                    <div className="xl:mt-[64px] mt-5 border border-gray-1300 bg-white rounded-xl shadow-10xl p-4 flex xl:flex-nowrap flex-wrap gap-3 mb-6">
                         <div className="">
                              <DatePicker></DatePicker>
                         </div>
                         <div className="max-w-[180px] w-full">
                              <SelectBox
                                   options={propertyOptions}
                                   defaultValue={propertyOptions[0]}
                                   onChange={(val) => console.log('Property:', val)}
                              />
                         </div>
                         <div className="max-w-[180px] w-full">
                              <SelectBox
                                   options={propertyOptions2}
                                   defaultValue={propertyOptions[1]}
                                   onChange={(val) => console.log('Property2:', val)}
                              />
                         </div>
                         <div className="max-w-[140px] w-full">
                              <SelectBox
                                   options={propertyOptions3}
                                   defaultValue={propertyOptions[2]}
                                   onChange={(val) => console.log('Property3:', val)}
                              />
                         </div>
                         <div className="relative w-full max-w-[521px]">
                              <input type="text" className="text-sm font-inter pl-9 w-full text-gray-1400 placeholder:text-gray-1400 bg-gray-1600 border border-gray-1300 px-3 h-10 rounded-[10px]" placeholder="Search transactions..." />
                              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                   <img src="/images/search-icon.svg" alt="" />
                              </div>
                         </div>
                    </div>
                    <MovementsHistoryTable></MovementsHistoryTable>
                    <div className="border flex-wrap gap-5 bg-white border-gray-1300 shadow-10xl rounded-xl flex items-center justify-between px-6 py-4">
                         <h6 className="text-sm font-normal leading-5 text-gray-1400">Showing 1 to 10 of 50 transactions</h6>
                         <Pagination></Pagination>
                    </div>
               </div>
          </div>
     );
}
