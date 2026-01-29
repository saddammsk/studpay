"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image' 






export const MediaTourAudio = () => {

      return (
            <div className="max-w-270.5 w-full mx-auto border border-solid border-gray-1100/50 rounded-xl bg-white p-6">
                  <div className="text-center">
                        <h4 className="text-black-1000 font-PlayfairDisplay font-bold text-xl leading-7 mb-2">Add Audio Descriptions</h4>
                        <p className="text-gray-1000 font-inter font-normal text-base leading-6">Record or upload audio narration to guide viewers through your property.</p>
                  </div>
                  <div className="flex sm:flex-row flex-col items-center gap-6 border border-solid border-gray-1100/50 bg-white rounded-xl p-6 mt-6">
                        <div className="">
                              <Link href={"#"} className="group text-black-1000 font-inter font-medium text-base leading-6 flex items-center justify-center flex-col gap-3">
                                    <span className="group-hover:scale-[1.05] group-hover:shadow-25xl transition-all duration-500 ease-in-out bg-blue-1100 w-20 h-20 flex items-center justify-center rounded-full"><Image src="../images/mic-icon.svg" alt="Image" width={32} height={32} /></span>
                                    Record
                              </Link>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center gap-6 sm:w-full w-full sm:pl-6 pl-0 sm:pt-0 pt-4 relative after:absolute after:content='' after:left-0 after:top-0 sm:after:w-px after:w-full sm:after:h-16 after:h-px after:bg-gray-1100">
                              <span className="text-gray-1000 font-inter font-normal text-sm leading-5">or</span>
                              <label htmlFor="file-upload"
                                    className="group sm:w-auto w-full inline-flex gap-3 items-center justify-center py-4 px-6 border-2 border-dashed border-gray-1100 bg-white hover:bg-yellow-1100/5 hover:border-yellow-1100 rounded-xl cursor-pointer transition-colors"
                              >
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M11.3333 5.33333L7.99996 2L4.66663 5.33333" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M8 2V10" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <div className="sm:flex-1 sm:w-full">
                                          <h4 className="text-black-1000 font-inter font-medium sm:text-base text-xs leading-6">Upload Audio</h4>
                                          <p className="text-gray-1000 font-inter font-normal sm:text-sm text-xs leading-5">MP3, WAV, M4A</p>
                                    </div>
                                    <input
                                          id="file-upload"
                                          type="file"
                                          className="hidden"
                                    />

                              </label>
                        </div>
                  </div>


            </div>
      )
}
