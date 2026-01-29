"use client";

import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InspectionCard from "@/app/components/InspectionCard";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function InspectionReport() {

     return (
          <DashboardLayout title="Inspection Report" className="bg-gray-1900"  showWallet={false}>
               <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
                    <div className="mb-4 flex flex-wrap gap-2 items-end justify-between">
                         <div>
                              <Link href="/" className="flex items-center py-2 text-sm mb-1.5 font-medium gap-2 text-gray-1000"><img src="/images/left-arrow.svg" alt=""></img> Back to Applications</Link>
                              <h4 className="text-lg font-bold leading-8 text-black-1400 mb-1">Inspection Report</h4>
                         </div>
                         <div className="flex items-center gap-2">
                              <PrimaryLink variant="default" className="gap-4 border border-gray-2700 bg-transparent! py-1.5! px-3!" >
                                   <img src="/images/export-arrow.svg" alt="" /> Download PDF</PrimaryLink>
                              <Link href="/" className="w-10 h-10 flex items-center justify-center"><img src="/images/cross-icon2.svg" alt="" /></Link>
                         </div>
                    </div>
                    <div className="border border-gray-2700 mb-6 bg-white rounded-[10px] p-6">
                         <div className="flex items-start justify-between flex-wrap gap-4 border-b border-gray-2700 pb-6 mb-6">
                              <div>
                                   <h4 className="text-2xl font-bold font-dm-sans text-black-1400 leading-8 mb-1">Property Inspection Report</h4>
                                   <p className="font-dm-sans text-sm font-normal leading-5 text-gray-2200">Report ID: INS-2025-00142</p>
                              </div>
                              <div className="text-sm font-dm-sans font-medium leading-5 text-black-1700 py-1 px-3 bg-black-1700/[10%] rounded-full">
                                   Move-Out Inspection
                              </div>
                         </div>
                         <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                   <h6 className="text-sm font-dm-sans mb-4 leading-5 text-gray-2200">Property Information</h6>
                                   <div className="flex items-start gap-3 mb-3">
                                        <div>
                                             <img src="/images/building-icon.svg" className="w-5" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Address</h4>
                                             <h6 className="text-base font-medium font-dm-sans text-black-1400">742 Evergreen Terrace</h6>
                                             <h4 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Unit 4B</h4>
                                        </div>
                                   </div>
                                   <div className="flex items-start gap-3">
                                        <div>
                                             <img src="/images/calendar2.svg" className="w-5" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Inspection Date</h4>
                                             <h6 className="text-base font-medium font-dm-sans text-black-1400">January 5, 2025</h6>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <h6 className="text-sm font-dm-sans mb-4 leading-5 text-gray-2200">Tenant Information</h6>
                                   <div className="flex items-start gap-3 mb-3">
                                        <div>
                                             <img src="/images/user-icon4.svg" className="w-5" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Tenant Name</h4>
                                             <h6 className="text-base font-medium font-dm-sans text-black-1400">John Mitchell</h6>
                                        </div>
                                   </div>
                                   <div className="flex items-start gap-3">
                                        <div>
                                             <img src="/images/file-icon5.svg" className="w-5" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Email</h4>
                                             <h6 className="text-base font-medium font-dm-sans text-black-1400">john.mitchell@email.com</h6>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="border border-gray-2700 mb-6 bg-white rounded-[10px] p-6">
                         <div className="flex items-start justify-between  pb-4">
                              <h4 className="text-lg font-bold font-dm-sans text-black-1400 leading-7">Inspection Summary</h4>
                         </div>
                         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 pb-4">
                              <div className="bg-gray-4100/[30%] rounded-[10px] p-4">
                                   <h6 className="text-sm font-dm-sans mb-1 leading-5 text-gray-2200">Total Items</h6>
                                   <span className="text-2xl font-dm-sans font-bold leading-7 text-black-1400">28</span>
                              </div>
                              <div className="bg-green-1400/[10%] rounded-[10px] p-4">
                                   <h6 className="text-sm font-dm-sans mb-1 leading-5 text-green-1400">Items OK</h6>
                                   <div className="flex items-center gap-2">
                                        <img src="/images/check-circle2.svg" alt="" />
                                        <span className="text-2xl font-dm-sans font-bold text-green-1400 leading-7 ">25</span>
                                   </div>
                              </div>
                              <div className="bg-yellow-1100/[10%] rounded-[10px] p-4">
                                   <h6 className="text-sm font-dm-sans mb-1 leading-5 text-yellow-1100">Issues Found</h6>
                                   <div className="flex items-center gap-2">
                                        <img src="/images/info-icon4.svg" alt="" />
                                        <span className="text-2xl font-dm-sans font-bold text-yellow-1100 leading-7 ">3</span>
                                   </div>
                              </div>
                              <div className="bg-gray-4100/[30%] rounded-[10px] p-4">
                                   <h6 className="text-sm font-dm-sans mb-1 leading-5 text-gray-2200">Est. Repair Cost</h6>
                                   <div className="flex items-center gap-2">
                                        <img src="/images/dollar-icon3.svg" alt="" />
                                        <span className="text-2xl font-dm-sans font-bold text-black-1400 leading-7 ">285</span>
                                   </div>
                              </div>
                         </div>
                         <div className="flex items-center pt-4 justify-between border-t border-gray-2700">
                              <div>
                                   <h6 className="text-sm font-normal leading-5 font-dm-sans text-gray-2200">Security Deposit</h6>
                                   <h6 className="text-base font-normal leading-6 font-dm-sans text-black-1400">$1,500</h6>
                              </div>
                              <div className="text-end">
                                   <h6 className="text-sm font-normal leading-5 font-dm-sans text-gray-2200">Refund Due</h6>
                                   <h6 className="text-lg font-bold leading-6 font-dm-sans text-green-1400">$1,215</h6>
                              </div>
                         </div>
                    </div>
                    <h4 className="text-lg font-bold font-dm-sans text-black-1400 leading-7">Room-by-Room Condition Report</h4>
                    <InspectionCard></InspectionCard>
                    <div className="pb-6 mb-6  border-b border-gray-2700">
                         <div className="border border-gray-2700  bg-white rounded-[10px] p-6 ">
                              <div className="flex items-start justify-between  pb-4">
                                   <h4 className="text-lg font-bold font-dm-sans text-black-1400 leading-7">Signatures</h4>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4 ">
                                   <div className="bg-green-1400/[5%] border border-green-1400/[30%] rounded-[10px] p-4">
                                        <div className="max-w-[365px]">
                                             <div className="flex items-start  border-b border-gray-2700 pb-3 mb-3 justify-between">
                                                  <div>
                                                       <h6 className="text-sm font-dm-sans mb-1 leading-5 text-gray-2200">Property Inspector</h6>
                                                       <span className="text-base font-dm-sans mb-1 font-medium leading-6 text-black-1400">Sarah Johnson</span>
                                                       <h6 className="text-xs font-dm-sans leading-4 text-gray-2200">Signed on January 5, 2025 at 2:30 PM</h6>
                                                  </div>
                                                  <img src="/images/tick-cricle2.svg" alt="" />
                                             </div>
                                             <div className="flex items-center gap-3 text-xs font-medium leading-4 text-green-1400">
                                                  <img src="/images/pencile-icon3.svg" alt="" />Digitally Signed
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-gray-4100/[20%] border border-green-1400/[30%] rounded-[10px] p-4">
                                        <div className="max-w-[365px]">
                                             <div className="flex items-start  border-b border-gray-2700 pb-3 mb-3 justify-between">
                                                  <div>
                                                       <h6 className="text-sm font-dm-sans mb-1 leading-5 text-gray-2200">Tenant</h6>
                                                       <span className="text-base font-dm-sans mb-1 font-medium leading-6 text-black-1400">John Mitchell</span>
                                                  </div>
                                                  <img src="/images/timer-icon4.svg" alt="" />
                                             </div>
                                             <h6 className="text-xs font-dm-sans leading-4 text-gray-2200">Awaiting signature</h6>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="text-center">
                         <p className="text-sm font-dm-sans font-normal leading-5 mb-2 text-gray-2200">This document was generated on January 5, 2025 and constitutes an official record of the property inspection.</p>
                         <p className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Report ID: INS-2025-00142</p>

                    </div>
               </div>
          </DashboardLayout>
     );
}
