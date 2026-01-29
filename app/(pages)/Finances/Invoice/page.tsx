"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Link from "next/link";
import SelectBox, { SelectOption } from "@/app/components/SelectBox";
import { DatePicker } from "@/app/components/DatePicker";
import Buttons from "@/app/ui/Buttons";
import InvoiceTable from "@/app/components/InvoiceTable";

const propertyOptions: SelectOption[] = [
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
                                        <h6 className="text-black-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Invoices</h6>
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
                              <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Invoices</h4>
                              <p className="text-base font-inter font-normal leading-6 text-gray-2200">Manage and track all student invoices</p>
                         </div>
                         <div className="flex items-center gap-3">
                              <Buttons type="submit" className="px-4 !py-2.5 gap-2.5 bg-blue-1500!" variant="primary">
                                   <img src="/images/plus-icon.svg" className="brightness-[28]" alt="" /> Create Invoice
                              </Buttons>
                         </div>
                    </div>
                    <div className="xl:mt-[30px] mt-5 flex xl:flex-nowrap flex-wrap gap-3 mb-6">
                         <div className="max-w-[140px] w-full">
                              <SelectBox className="bg-white!"
                                   options={propertyOptions}
                                   defaultValue={propertyOptions[0]}
                                   onChange={(val) => console.log('Property:', val)}
                              />
                         </div>
                         <div className="w-60">
                              <DatePicker className="bg-white!"></DatePicker>
                         </div>

                    </div>
                    <InvoiceTable></InvoiceTable>
                    <div className="mt-4">
                         <h6 className="text-sm font-normal leading-5 text-gray-1400">Showing 8 of 8 invoices</h6>
                    </div>
               </div>
          </div>
     );
}
