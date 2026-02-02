'use client'
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ProgressBar from "@/app/ui/ProgressBar";
import PrimaryLink from "@/app/ui/PrimaryLink";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from "next/link";
import { OverviewPane } from "./_components/OverviewPane";
import { DocumentsPane } from "./_components/DocumentsPane";
import { ActionsPane } from "./_components/ActionsPane";





type ItemStatus = "ok" | "issue" | null;


interface ChecklistItem {
     id: number;
     label: string;
     status: ItemStatus;
}

export default function ApplicationReviewPage() {


     const [items, setItems] = useState<ChecklistItem[]>([
          { id: 1, label: "Sofa & Cushions", status: null },
          { id: 2, label: "TV & Electronics", status: null },
          { id: 3, label: "Flooring & Carpet", status: null },
          { id: 4, label: "Windows & Curtains", status: null },
     ]);


     const [notes, setNotes] = useState("");

     const updateStatus = (id: number, status: ItemStatus) => {
          setItems((prev) =>
               prev.map((item) =>
                    item.id === id ? { ...item, status } : item
               )
          );
     };

 

     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4 font-inter">
               <div className="mb-6">
                    <Link href="/Applications" className="flex items-center gap-3 text-sm font-inter font-medium text-gray-1000 py-2.5 px-3"><img src="/images/left-arrow.svg" alt="" /> Back to Applications</Link>
                    <h4 className="text-2xl font-bold leading-8 text-black-1200 mb-1 mt-1.5">Applications</h4>
                    <p className="text-base font-inter font-normal leading-6 text-gray-2200">Review and manage student rental applications with AI-powered risk assessment</p>
               </div>
               <TabGroup>
                    <TabList className="border w-fit border-gray-3300 rounded-[10px] bg-blue-1000/[5%] p-1">
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Overview</Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Documents </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Actions  </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Lease  </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Signature  </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Inspection      </Tab>
                    </TabList>
                    <TabPanels className="mt-6">
                         <TabPanel>
                              <OverviewPane/>
                         </TabPanel>
                         <TabPanel>
                               <DocumentsPane/>
                         </TabPanel>
                         <TabPanel>
                            <ActionsPane/>
                         </TabPanel>
                         <TabPanel>
                              <div className="flex items-center flex-wrap gap-5 justify-between mb-8">
                                   <div className="">
                                        <div className="flex items-center mb-2 gap-3">
                                             <h4 className="text-2xl font-bold font-inter leading-8 text-black-1600">Lease Proposal</h4>
                                             <div className="text-xs font-inter font-normal leading-4 text-blue-1700 flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-1800"><span className="w-1.5 h-1.5 rounded-full block bg-blue-1700"></span> Pending Review</div>
                                        </div>
                                        <p className="text-base font-inter font-normal leading-6 text-gray-3500">Reference: LP-2024-00847 • Created Dec 29, 2024</p>
                                   </div>
                                   <div className="w-fit">
                                        <PrimaryLink type="submit" className="px-4 !py-2.5 font-medium gap-2" variant="primary">
                                             <img src="/images/pencile.svg" alt="" /> Generate Lease
                                        </PrimaryLink>
                                   </div>
                              </div>
                              <div className="flex xl:flex-nowrap flex-wrap gap-4">
                                   <div className="xl:w-8/12 w-full">
                                        <div className="rounded-xl mb-6 border border-gray-3600 overflow-hidden shadow-5xl">
                                             <div className="bg-[url(/images/bg-img.png)] bg-cover bg-no-repeat min-h-[192px] p-4 flex items-end justify-start">
                                                  <div>
                                                       <h4 className="text-lg font-inter font-bold leading-7 text-white mb-1">1250 Market Street, Unit 4B</h4>
                                                       <div className="text-sm font-inter font-normal leading-5 text-white/[80%] flex items-center gap-1.5">
                                                            <img src="/images/map-icon.svg" alt="" />San Francisco, CA 94102
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="grid grid-cols-2">
                                                  <div className="flex items-center justify-center gap-2 py-3 border-r border-gray-3600">
                                                       <img src="/images/home-icon.svg" className="w-4" alt="" />  2BR Apartment
                                                  </div>
                                                  <div className="flex items-center pl-4 gap-2 py-3 border-r border-gray-3600">
                                                       <img src="/images/sqaure-icon.svg" className="w-4" alt="" />  1,200 sq ft
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/dollar-icon2.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Monthly Rent</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">$3,850.00</span>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Due on the 1st of each month</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/shield-icon4.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Security Deposit</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">$7,700.00</span>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Equivalent to 2 months rent</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/calendar-icon2.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Lease Start</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">February 1, 2025</span>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/timer-icon3.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Lease End</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">January 31, 2026</span>
                                                            <h6 className="text-sm leading-5 text-gray-3500">12-month term</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="xl:w-4/12 w-full">
                                        <div className="border border-gray-3600 mb-6 rounded-xl shadow-5xl p-6">
                                             <h4 className="text-lg font-inter font-bold leading-7  text-black-1600">Summary</h4>
                                             <div className="flex items-center mb-3 justify-between">
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-gray-3500">First Month's Rent</h6>
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-black-1600">$3,850.00</h6>
                                             </div>
                                             <div className="flex items-center mb-3 pb-3 border-b border-gray-3600  justify-between">
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-gray-3500">Security Deposit</h6>
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-black-1600">$7,700.00</h6>
                                             </div>
                                             <div className="flex items-center  justify-between">
                                                  <h6 className="text-base font-inter font-normal leading-5 text-black-1600">Total Due at Signing</h6>
                                                  <h6 className="text-lg font-inter font-bold leading-5 text-black-1600">$7,700.00</h6>
                                             </div>
                                        </div>
                                        <div className="border border-gray-3600 mb-6 rounded-xl shadow-5xl p-6">
                                             <h4 className="text-lg font-inter font-bold leading-7  text-black-1600">Parties</h4>
                                             <div className="mb-3 pb-3 border-b border-gray-3600">
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">Landlord</h6>
                                                  <h6 className="text-base font-inter font-normal leading-5 text-black-1600">Bay Area Properties LLC</h6>
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">contact@bayareaproperties.com</h6>
                                             </div>
                                             <div className="">
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">Tenant</h6>
                                                  <h6 className="text-base font-inter font-normal leading-5 text-black-1600">Sarah Chen</h6>
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">sarah.chen@email.com</h6>
                                             </div>
                                        </div>
                                        <PrimaryLink type="submit" className="px-4 !py-2.5  gap-2.5 " variant="primary">
                                             <img src="/images/send-icon.svg" className="invert-[1]" alt="" /> Send for Signature
                                        </PrimaryLink>
                                        <ul className="flex gap-3 mt-3">
                                             <li className="w-1/2">
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/pencile-icon-black.svg" alt="" /> Edit Proposal
                                                  </PrimaryLink>
                                             </li>
                                             <li className="w-1/2">
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/export-arrow.svg" alt="" />Download PDF
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className=" xl:-ml-8 hidden 4xl:-mr-10 xl:-mx-4 mx-4">
                                   <div className="flex items-center flex-wrap bg-white justify-between py-4 md:px-10 px-4">
                                        <ul className="flex gap-3 mt-3">
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/pdf-icon.svg" alt="" />Save Draft
                                                  </PrimaryLink>
                                             </li>
                                             <li >
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/recycle-icon2.svg" alt="" /> Reset
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                        <ul className="flex flex-wrap gap-3 mt-3">
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/eye-icon2.svg" alt="" /> Preview
                                                  </PrimaryLink>
                                             </li>
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/export-arrow.svg" alt="" />Download PDF
                                                  </PrimaryLink>
                                             </li>
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  " variant="primary">
                                                       <img src="/images/send-icon.svg" className="invert-[1]" alt="" />Send for Signature
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="lg:flex">
                                        <div className="lg:w-[288px] w-full">
                                             <div className="bg-white">
                                                  <div className="p-4 border-b border-gray-3600">
                                                       <h5 className="text-base font-inter font-bold leading-6 mb-1 text-black-1600">Lease Summary</h5>
                                                       <p className="text-xs font-inter font-normal leading-4 text-gray-3500">Click highlighted fields in the document to edit</p>
                                                  </div>
                                                  <div className="p-2 space-y-1 mb-6">
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/file-icon.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Document</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Type</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Residential Lease</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Reference</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">LP-2024-00847</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Status</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Draft</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/user-icon6.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Parties</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Landlord</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Bay Area Properties…</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Tenant</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Sarah Chen</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/home-icon2.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Property</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Address</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">1250 Market Street, …</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/dollar-sign.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Financial</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Monthly Rent</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">$3,850.00</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Security Deposit</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">$7,700.00</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/calendar3.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Term</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Duration</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">12 months</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Start</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">February 1, 2025</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">End</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">January 31, 2026</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="px-4">
                                                       <div className="border border-blue-1000/[20%] bg-blue-1000/[5%] rounded-xl p-4 flex items-start gap-2">
                                                            <img src="/images/info-blue.svg" alt="" />
                                                            <div className="flex-1">
                                                                 <h4 className="text-xs font-inter font-normal leading-4 text-black-1600 mb-1">Editable Fields</h4>
                                                                 <p className="text-xs font-inter font-normal leading-4 text-gray-3500">Fields highlighted in blue can be
                                                                      clicked and edited directly in the
                                                                      document preview.</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="lg:w-[calc(100%_-_288px)] w-full ml-auto bg-gray-3700/[50%] p-8 text-center">
                                             <img src="/images/pdf-img.png" className="inline-block" alt="" />
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="flex lg:flex-nowrap flex-wrap gap-4">
                                   <div className="2xl:w-9/12 lg:w-7/12 w-full">
                                        <h4 className="font-inter font-bold text-lg leading-7 mb-4 text-black-1600">Signers</h4>
                                        <div className="grid 2xl:grid-cols-2 gap-[15px] mb-6">
                                             <div className="border  bg-white border-gray-3600 rounded-xl shadow-6xl md:p-6 p-3">
                                                  <div className="flex items-start justify-between border-b border-gray-3600 pb-4 mb-4">
                                                       <div className="flex items-center gap-3">
                                                            <img src="/images/user-img3.png" alt="" />
                                                            <div>
                                                                 <h6 className="text-xs leading-5 text-gray-3500">Landlord</h6>
                                                                 <span className="block text-base font-bold font-inter text-black-1600">$3,850.00</span>
                                                                 <h6 className="text-sm leading-5 text-gray-3500">Due on the 1st of each month</h6>
                                                            </div>
                                                       </div>
                                                       <div className="py-2 px-3 flex items-center gap-1.5 border border-green-2000 rounded-full text-sm font-normal leading-5 text-green-1900 bg-gray-3700 "><img src="/images/tick-icon4.svg" alt="" /> Signed</div>
                                                  </div>
                                                  <div className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-3500">
                                                       <img src="/images/tick-icon4.svg"></img> Signed on <span className="text-black-1600">Dec 27, 2024 at 2:30 PM</span>
                                                  </div>
                                             </div>
                                             <div className="border  bg-white border-gray-3600 rounded-xl shadow-6xl md:p-6 p-3">
                                                  <div className="flex items-start justify-between border-b border-gray-3600 pb-4 mb-4">
                                                       <div className="flex items-center gap-3">
                                                            <img src="/images/user-img3.png" alt="" />
                                                            <div>
                                                                 <h6 className="text-xs leading-5 text-gray-3500">Student</h6>
                                                                 <span className="block text-base font-bold font-inter text-black-1600">Emily Chen</span>
                                                                 <h6 className="text-sm leading-5 text-gray-3500">emily.chen@university.edu</h6>
                                                            </div>
                                                       </div>
                                                       <div className="py-2 px-3 flex items-center gap-1.5 border border-blue-1000/[20%] rounded-full text-sm font-normal leading-5 text-blue-1000 "><img src="/images/timer-blue.svg" className="w-4 h-4" alt="" /> Pending</div>
                                                  </div>
                                                  <div className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-3500">
                                                       <img src="/images/timer-blue.svg" className="w-4 h-4" alt="" />Expires on <span className="text-black-1600">Jan 3, 2025</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="border border-gray-3600  bg-white rounded-xl shadow-6xl md:p-6 p-3">
                                             <h4 className="text-lg font-inter font-bold leading-7 text-black-1600 mb-6">Signature Timeline</h4>
                                             <ul className="space-y-8 ">
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-green-2300 after:h-full after:w-[2px] after:absolute after:left-5 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-2200 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/tick-icon4.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Document Created</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Lease agreement generated and prepared for signatures</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-green-2300 after:h-full after:w-[2px] after:absolute after:left-5 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-2200 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/tick-icon4.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Sent to Landlord</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Signature request sent to Robert Martinez</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-green-2300 after:h-full after:w-[2px] after:absolute after:left-5 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-2200 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/tick-icon4.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Landlord Signed</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Robert Martinez completed their signature</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                                                       <div className=" bg-blue-1000/[10%] w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/pencile-icon2.svg" className="w-4 h-4" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Awaiting Student Signature</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Waiting for Emily Chen to sign the document</span>
                                                            <span className="text-xs font-inter font-medium leading-4 text-blue-1600 mt-3 w-fit  py-1.5 flex items-center gap-1.5 px-3 rounded-full border border-blue-1000/[20%]"><img src="/images/timer-blue.svg" className="w-[14px]"></img> Awaiting action</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4 relative">
                                                       <div className="bg-gray-3700 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/file-tick.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-gray-3500">Document Complete</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">All parties will have signed the lease agreement</span>
                                                       </div>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="2xl:w-3/12 lg:w-5/12 w-full">
                                        <div className="border border-gray-3600 mb-6 bg-white rounded-xl shadow-6xl md:p-6 p-3">
                                             <div className="flex items-center justify-between">
                                                  <h4 className="text-lg font-inter font-bold leading-7 text-black-1600">Signing Progress</h4>
                                                  <span className="text-2xl font-bold leading-8 text-blue-1000">1/2</span>
                                             </div>
                                             <div className="bg-gray-3700 mt-4  mb-3 w-full overflow-hidden h-3 block rounded-full">
                                                  <div className="bg-blue-1000 w-[41%] h-full block"></div>
                                             </div>
                                             <h6 className="text-sm font-normal leading-5 text-gray-3500">1 signature remaining</h6>
                                        </div>
                                        <div className="border border-gray-3600 mb-6 bg-white rounded-xl shadow-6xl md:p-6 p-3">
                                             <h4 className="text-lg font-inter font-bold leading-7 text-black-1600 mb-4">Quick Actions</h4>
                                             <div className="space-y-3">
                                                  <div className="border border-gray-3600 rounded-xl py-3 px-4">
                                                       <h6 className="text-base font-normal leading-6 text-black-16000">Resend Invitation</h6>
                                                       <p className="text-sm font-normal leading-5 text-gray-3500">Send another email to pending signers</p>
                                                  </div>
                                                  <div className="border border-gray-3600 rounded-xl py-3 px-4">
                                                       <h6 className="text-base font-normal leading-6 text-black-16000">Download Audit Trail</h6>
                                                       <p className="text-sm font-normal leading-5 text-gray-3500">Get complete signing history</p>
                                                  </div>
                                                  <div className="border border-gray-3600 rounded-xl py-3 px-4">
                                                       <h6 className="text-base font-normal leading-6 text-black-16000">Cancel Document</h6>
                                                       <p className="text-sm font-normal leading-5 text-gray-3500">Void this signature request</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="grid mb-5 xl:grid-cols-4 md:grid-cols-2 gap-4 justify-between">
                                   <div className="flex items-center gap-3">
                                        <div className="bg-blue-1000/[10%] w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/home-icon2.svg" className="w-5" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Property</h4>
                                             <p className="text-sm font-medium leading-5 text-black">Oceanview Apartment #302</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/location-icon2.png" className="w-4" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Address</h4>
                                             <p className="text-sm font-medium leading-5 text-black">1234 Beach Blvd, Miami FL</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/user-icon3.svg" className="w-4" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Guest</h4>
                                             <p className="text-sm font-medium leading-5 text-black">Sarah Johnson</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/calendar2.svg" className="w-4" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Date</h4>
                                             <p className="text-sm font-medium leading-5 text-black">Dec 29, 2024</p>
                                        </div>
                                   </div>
                              </div>
                              <TabGroup>
                                   <TabList className="bg-lightgray rounded-md p-1 w-fit flex items-center">
                                        <Tab className="md:min-w-[230px] px-3 flex items-center justify-center rounded py-1.5 ytext-gray-1000 text-sm font-inter leading-5 data-selected:bg-blue-1000 data-selected:text-white">Check-in Inspection</Tab>
                                        <Tab className="md:min-w-[230px] px-3 flex items-center justify-center rounded py-1.5 ytext-gray-1000 text-sm font-inter leading-5 data-selected:bg-blue-1000 data-selected:text-white">Check-out Inspection</Tab>
                                   </TabList>
                                   <TabPanels className="mt-6">
                                        <TabPanel>
                                             <div className="flex lg:flex-nowrap flex-wrap gap-6 max-w-[1158px] mx-auto">
                                                  <div className="lg:w-8/12 w-full">
                                                       <div className="bg-blue-1000/[5%] border border-blue-1000/[20%] rounded-lg p-4">
                                                            <p className="text-sm font-inter font-normal leading-5 text-black"><strong>Check-in Inspection:</strong> Document the property condition before the guest's stay. Verify all items and note any
                                                                 pre-existing issues.</p>
                                                       </div>
                                                       <div className="space-y-4 mt-4">
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={true}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/bed-icon2.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Living Room</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/bed-icon.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Master Bedroom</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/bathroom.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Bathroom</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/kitchen.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Kitchen</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                       </div>
                                                  </div>
                                                  <div className="lg:w-4/12 w-full">
                                                       <div className="border border-gray-1100 bg-white rounded-lg p-4 mb-4">
                                                            <h4 className="text-sm font-normal leading-5 text-black mb-4">Inspection Progress</h4>
                                                            <div className="flex items-center justify-between">
                                                                 <h6 className="text-gray-1000 text-xs font-normal">Completion</h6>
                                                                 <h6 className="text-gray-1000 text-xs font-normal">33%</h6>
                                                            </div>
                                                            <div className="bg-gray-3700 mt-1  mb-3 w-full overflow-hidden h-2 block rounded-full">
                                                                 <div className="bg-blue-1000 w-[41%] h-full block"></div>
                                                            </div>
                                                            <div className="mt-4 grid grid-cols-2 gap-3">
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           <img src="/images/tick-icon4.svg" alt="" />Completed
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">2/6</span>
                                                                 </div>
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           <img src="/images/caution-icon2.svg" alt="" />Issues
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">1</span>
                                                                 </div>
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           📷 Photos
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">5</span>
                                                                 </div>
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           <img src="/images/timer.svg" className="w-4" alt="" />Duration
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">12 min</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="border border-gray-1100 bg-white rounded-lg p-4 mb-4">
                                                            <h4 className="text-sm font-normal leading-5 text-black mb-3">Previous Inspections</h4>
                                                            <div className="py-2 border-b border-gray-1100 flex items-center justify-between">
                                                                 <div>
                                                                      <h6 className="text-sm font-normal leading-5 text-black">Check-in</h6>
                                                                      <span className="text-gray-1000 block text-xs font-normal leading-4">Dec 15, 2024</span>
                                                                 </div>
                                                                 <p className="text-green-1300 text-xs font-normal leading-4">Completed</p>
                                                            </div>
                                                            <div className="py-2  flex items-center justify-between">
                                                                 <div>
                                                                      <h6 className="text-sm font-normal leading-5 text-black">Check-in</h6>
                                                                      <span className="text-gray-1000 block text-xs font-normal leading-4">Dec 15, 2024</span>
                                                                 </div>
                                                                 <p className="text-green-1300 text-xs font-normal leading-4">Completed</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </TabPanel>
                                        <TabPanel>
                                             <div className=" max-w-[1158px] ">

                                                  <div className="flex lg:flex-nowrap flex-wrap gap-6">
                                                       <div className="lg:w-10/12 w-full">
                                                            <div className="border border-gray-2700 bg-white rounded-xl p-6">
                                                                 <div className="flex items-center justify-between flex-wrap gap-5 border-b border-gray-2700 pb-4 mb-4">
                                                                      <div>
                                                                           <h4 className="text-2xl font-dm-sans font-bold leading-8 text-black-1400">Check-out Inspection</h4>
                                                                           <p className="text-base font-dm-sans font-normal text-gray-2200">Document property condition and compare with check-in state</p>
                                                                      </div>
                                                                      <div className="text-xs font-dm-sans font-medium text-blue-1900 py-0.5 px-2.5 rounded-full border border-blue-1900/[20%] bg-gray-3800">
                                                                           In Progress
                                                                      </div>
                                                                 </div>
                                                                 <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/location3.svg" className="w-5" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Property</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">742 Evergreen Terrace, Apt
                                                                                     4B</p>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/user-icon3.svg" className="w-4" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Tenant</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">John Mitchell</p>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/calendar2.svg" className="w-4" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Check-in Date</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">Jan 15, 2024</p>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/timer.svg" className="w-4" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Check-in Date</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">Jan 15, 2024</p>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="space-y-4 mt-4">
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={true}>
                                                                      <DisclosureButton className="group cursor-pointer  p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/bed-icon2.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Living Room</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/caution-yellow.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-yellow-1100">1 issue</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-yellow-1100" width="30%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                      <DisclosureButton className="group cursor-pointer  p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/bed-icon.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Master Bedroom</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/gray-circle.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-gray-2200">Not started</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-gray-2200" width="0%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                      <DisclosureButton className="group cursor-pointer p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/bathroom.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Bathroom</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/check-green.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-green-1400">All OK</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-green-1400" width="40%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                      <DisclosureButton className="group cursor-pointer p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/kitchen.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Kitchen</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/caution-yellow.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-yellow-1100">1 issue</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-yellow-1100" width="30%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                            </div>
                                                            <div className="grid lg:grid-cols-2 mt-8 gap-6">
                                                                 <div className="border border-gray-2700 bg-white rounded-xl p-6 shadow-6xl">
                                                                      <div className="flex items-center mb-4 gap-2">
                                                                           <img src="/images/caution-icon2.svg" alt="" />
                                                                           <h6 className="text-lg font-bold leading-7 text-black-1400">Damage Summary</h6>
                                                                      </div>
                                                                      <div className="bg-gray-3900/[50%] border border-yellow-1100/[10%] mb-3 rounded-[10px] p-3 flex items-start justify-between">
                                                                           <div>
                                                                                <h4 className="text-sm font-medium leading-5 text-black-1400">Living Room — Flooring</h4>
                                                                                <p className="text-xs font-normal leading-4 text-gray-2200">Deep scratch near window, approximately 8 inches</p>
                                                                           </div>
                                                                           <span className="text-sm font-dm-sans font-bold leading-5 text-golden-1000">$150.00</span>
                                                                      </div>
                                                                      <div className="bg-gray-3900/[50%] border border-yellow-1100/[10%] mb-3 rounded-[10px] p-3 flex items-start justify-between">
                                                                           <div>
                                                                                <h4 className="text-sm font-medium leading-5 text-black-1400">Bathroom — Tiles & Grout</h4>
                                                                                <p className="text-xs font-normal leading-4 text-gray-2200">Cracked tile near shower drain, requires replacement</p>
                                                                           </div>
                                                                           <span className="text-sm font-dm-sans font-bold leading-5 text-golden-1000">$85.00</span>
                                                                      </div>
                                                                      <div className="border-t border-gray-2700 pt-4 mt-4">
                                                                           <div className="flex items-center justify-between mb-3">
                                                                                <div className="flex items-center gap-2">
                                                                                     <img src="/images/dollar-gray.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Estimated Repair Cost</h6>
                                                                                </div>
                                                                                <span className="text-sm font-dm-sans font-bold leading-5 text-black-1400 block">$235.00</span>
                                                                           </div>
                                                                           <div className="flex items-center justify-between mb-3 border-b border-gray-2700 pb-3">
                                                                                <div className="flex items-center gap-2">
                                                                                     <img src="/images/wallet-icon4.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Security Deposit</h6>
                                                                                </div>
                                                                                <span className="text-sm font-dm-sans font-bold leading-5 text-black-1400 block">$1500.00</span>
                                                                           </div>
                                                                           <div className="flex items-center justify-between mb-3">
                                                                                <h6 className="text-base font-dm-sans font-normal leading-5 text-black-1400">Refund to Tenant</h6>
                                                                                <span className="text-lg font-dm-sans font-bold leading-5 text-green-1400 block">$235.00</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="border border-gray-2700 bg-white h-fit rounded-xl p-6 shadow-6xl">
                                                                      <h6 className="text-lg font-bold leading-7 mb-4 text-black-1400">Actions</h6>
                                                                      <div className="bg-gray-4000 border border-gray-2700 mb-3 rounded-[10px] py-2.5 px-4 flex items-center gap-5">
                                                                           <img src="/images/printer-icon.svg" alt=""></img>
                                                                           <h4 className="text-sm font-medium leading-5 text-black-1400">Save Draft</h4>
                                                                      </div>
                                                                      <div className="bg-gray-4000 border border-gray-2700 mb-3 rounded-[10px] py-2.5 px-4 flex items-center gap-5">
                                                                           <img src="/images/file-icon3.svg" alt=""></img>
                                                                           <h4 className="text-sm font-medium leading-5 text-black-1400">Generate Report</h4>
                                                                      </div>
                                                                      <div className="border-t border-gray-2700 pt-4 mt-4">
                                                                           <p className="text-xs font-normal leading-4 text-gray-2200">By completing this inspection, you confirm that all items have been reviewed and
                                                                                documented accurately. This report will be shared with the tenant for review.</p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </TabPanel>
                                   </TabPanels>
                              </TabGroup>
                         </TabPanel>
                    </TabPanels>
               </TabGroup>
          </div>
     );
}
