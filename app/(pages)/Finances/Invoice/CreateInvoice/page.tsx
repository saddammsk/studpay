"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import Link from "next/link";
import InputField from "@/app/ui/InputField";
import SelectBox, { SelectOption } from "@/app/components/SelectBox";
import { DatePicker } from "@/app/components/DatePicker";
import { Button } from "@/components/ui/button";
import PrimaryLink from "@/app/ui/PrimaryLink";

const propertyOptions: SelectOption[] = [
     { id: 1, name: 'All Status' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]

export default function Home() {
     const [isOpen, setIsOpen] = useState(false);
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [name2, setName2] = useState("");
     const [number, setNumber] = useState("");
     const [number2, setNumber2] = useState("");
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
                                        <h6 className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Invoices</h6>
                                   </li>
                                   <li>
                                        <img src="/images/right-arrow.svg" alt="" />
                                   </li>
                                   <li>
                                        <h6 className="text-black-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Create Invoice</h6>
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
                    <div className="flex items-center xl:flex-nowrap flex-wrap xl:gap-0 gap-5 sm:gap-0 gap-4 justify-between ">
                         <div>
                              <h4 className="text-2xl font-bold leading-9 text-black-1200 mb-1">Create Invoice</h4>
                              <p className="text-sm font-inter font-normal leading-6 text-gray-2200">Generate a new invoice for a student</p>
                         </div>
                    </div>
                    <div className="mt-9">

                         <form action="" className="mt-6">
                              <div className="border border-gray-1300 bg-white mb-8 rounded-xl pb-1! p-6">
                                   <h6 className="text-base font-normal font-inter leading-5 mb-6 text-black-1000">Student Information</h6>
                                   <div className="grid lg:grid-cols-2 mb-8 gap-x-6">
                                        <InputField
                                             label="Student Name *"
                                             placeholder="Enter student name"
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}
                                             id="name"
                                             name="name"
                                             variant="filled2"
                                        />
                                        <InputField
                                             label="Email Address"
                                             placeholder="john.doe@example.com"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             id="name2"
                                             name="name2"
                                             variant="filled2"
                                        />
                                        <div className="w-full">
                                             <label htmlFor="" className="text-xs font-inter font-normal leading-[14px] mb-3 block text-black-1000">Property *</label>
                                             <SelectBox className="bg-white!"
                                                  options={propertyOptions}
                                                  defaultValue={propertyOptions[0]}
                                                  onChange={(val) => console.log('Property:', val)}
                                             />
                                        </div>
                                        <div className="w-full lg:mt-0 mt-5">
                                             <label htmlFor="" className="text-xs font-inter font-normal leading-[14px] mb-3 block text-black-1000">Due Date *</label>
                                             <DatePicker className="bg-white! w-full! max-w-full!"></DatePicker>
                                        </div>
                                   </div>
                              </div>
                              <div className="border border-gray-1300 bg-white rounded-xl p-6 mb-8">
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-base font-normal font-inter leading-5 mb-6 text-black-1000">Invoice Items</h6>
                                        <button type="button" className="flex items-center gap-3 text-xs font-inter font-normal leading-5 text-black-1000 py-1.5 px-2.5 rounded-md bg-gray34 border border-gray-1300"><img src="/images/plus-icon-black.svg" alt="" /> Add Item</button>
                                   </div>
                                   <div className="flex items-end justify-between flex-wrap gap-y-0 sm:gap-5 gap-3">
                                        <div className="w-full md:max-w-[323px] max-w-full">
                                             <InputField
                                                  label="Description"
                                                  placeholder="Item description"
                                                  value={name2}
                                                  onChange={(e) => setName2(e.target.value)}
                                                  id="name"
                                                  name="name"
                                                  variant="filled2"
                                             />
                                        </div>
                                        <div className="sm:max-w-[120px] max-w-20">
                                             <InputField
                                                  label="Quantity"
                                                  placeholder="1"
                                                  value={number}
                                                  onChange={(e) => setNumber(e.target.value)}
                                                  id="name2"
                                                  name="name2"
                                                  variant="filled2"
                                             />
                                        </div>
                                        <div className="sm:max-w-[120px] max-w-20">
                                             <InputField
                                                  label="Rate"
                                                  placeholder="0"
                                                  value={number}
                                                  onChange={(e) => setNumber(e.target.value)}
                                                  id="name2"
                                                  name="name2"
                                                  variant="filled2"
                                             />
                                        </div>
                                        <div className="text-end mb-5">
                                             <h6 className="text-[13px] mb-4 font-inter leading-5 text-gray-1400">Amount</h6>
                                             <span className="block text-xs font-inter leading-5 text-black-1000">$0.00</span>
                                        </div>
                                        <Link href="/" className="flex  mb-5 items-center justify-center w-9 h-9"><img src="/images/del-icon.svg" alt="" /></Link>
                                   </div>
                                   <div className="">
                                        <div className="mb-2 flex items-center justify-between">
                                             <h6 className="text-sm font-inter font-normal leading-5 text-gray-1400">Subtotal</h6>
                                             <h6 className="text-sm font-inter font-normal leading-5 text-black-1000">$0.00</h6>
                                        </div>
                                        <div className="pb-2 mb-2 border-b border-gray-1300 flex items-center justify-between">
                                             <h6 className="text-sm font-inter font-normal leading-5 text-gray-1400">Tax (10%)</h6>
                                             <h6 className="text-sm font-inter font-normal leading-5 text-black-1000">$0.00</h6>
                                        </div>
                                        <div className="pb-2  flex items-center justify-between">
                                             <h6 className="text-base font-inter font-normal leading-5 text-gray-1400">Total</h6>
                                             <h6 className="text-base font-inter font-bold leading-5 text-blue-1500">$0.00</h6>
                                        </div>
                                   </div>
                              </div>
                              <div className="border border-gray-1300 bg-white mb-8 rounded-xl p-6">
                                   <h6 className="text-base font-normal font-inter leading-5 mb-6 text-black-1000">Additional Notes</h6>
                                   <textarea name="" className="text-[13px] font-inter font-normal text-gray-1400 placeholder:text-gray-1400 py-[9px] px-[13px] bg-gray34 rounded-md border border-gray-1300 w-full h-[100px]" placeholder="Add any notes or payment instructions..." id=""></textarea>
                              </div>
                              <ul className="flex items-center justify-end gap-4">
                                   <li>
                                        <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5 border border-gray-1300 bg-transparent! text-black-1000!" variant="primary">
                                             Save as Draft
                                        </PrimaryLink>
                                   </li>
                                   <li>
                                        <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5 bg-blue-1100!" variant="primary">
                                             Create Invoice
                                        </PrimaryLink>
                                   </li>
                              </ul>
                         </form>
                    </div>
               </div>
          </div>
     );
}
