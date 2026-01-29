"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Buttons from "@/app/ui/Buttons";

export const PropertyMediaBoostCredibility = () => {

      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Media & Trust </Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Boost Your Credibility (Optional)</li>
                  </ul>
                  <div className="flex items-start gap-3 my-6">
                        <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                              <Image src="../images/sheild-icon.svg" alt="receipt Image" width={24} height={24} className="brightness-[200]" />
                        </span>
                        <div className="relative flex-1 w-full">
                              <h4 className="font-medium font-inter sm:mb-2 mb-1 sm:text-xl text-lg sm:leading-9 leading-6 text-black24">Media – Boost Your Credibility</h4>
                              <p className='text-gray40 font-inter font-normal sm:text-sm text-xs leading-6'>Increase tenant trust by verifying your property ownership. Stand out with a verified badge.</p>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray45 rounded-2xl p-8">
                        <div className="flex items-start gap-4 transition-all duration-500 ease-in-out hover:bg-gray-2300/50px hover:border-green237/50 border-2 border-solid border-gray45 rounded-xl p-5">
                              <span className="flex items-center border-solid border-2 border-blue-1100 w-5 h-5 rounded-lg"></span>
                              <div className="">
                                    <h4 className="text-black24 font-inter font-semibold text-lg leading-7 mb-1">Verify this property now</h4>
                                    <p className="text-gray-2200 font-normal font-inter text-base leading-6">Add a verification badge to build instant trust with potential tenants</p>
                              </div>
                        </div>
                        <div className="opacity-50 mt-6">
                              <p className="text-black24 font-inter font-medium text-sm leading-5">Upload property tax or ownership document</p>
                              <label htmlFor="file-upload"
                                    className="group mt-3 w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray45 bg-green236/30 rounded-xl cursor-pointer transition-colors"
                              >
                                    <span className="flex items-center justify-center rounded-full w-12 h-12 bg-green236">
                                          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11.3333 5.33333L7.99996 2L4.66663 5.33333" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 2V10" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                    </span>
                                    <div className="mt-4 text-center">
                                          <h4 className="text-black24 font-inter font-medium sm:text-base text-xs leading-6">Drop your document here or click to browse</h4>
                                          <p className="text-gray-2200 font-inter font-normal sm:text-sm text-xs leading-5">PDF, JPG or PNG • Max 10 MB</p>
                                    </div>
                                    <input
                                          id="file-upload"
                                          type="file"
                                          className="hidden"
                                    />

                              </label>
                              <div className="flex items-center gap-3 mt-6 rounded-xl border border-solid border-green236 bg-green236/30 p-4">
                                    <Image src="../images/info-check.svg" alt="receipt Image" width={20} height={22} />
                                    <p className="text-blue-1100 font-inter font-medium text-base leading-6">Your listing will receive the "Verified Property" badge</p>
                              </div>
                              <p className="text-gray-2200 font-inter font-normal text-sm leading-5 text-center mt-6">Verification happens after publication and does not prevent your listing from going live</p>
                              <Buttons className="w-full bg-yellow24 opacity-50 mt-6 h-11 text-darkBrown! gap-4">Continue with Verification <Image src="../images/dark-right-arrow.svg" alt="Image" width={16} height={16} /></Buttons>
                        </div>

                  </div>

            </div>
      )
}
