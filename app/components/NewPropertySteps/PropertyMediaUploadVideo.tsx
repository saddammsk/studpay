"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

export const PropertyMediaUploadVideo = () => {

      return (
            <>
                  <div className="pt-6">
                        <ul className="flex items-center gap-2 mt-0.5">
                              <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Media & Trust </Link> </li>
                              <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                              <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Virtual Tour (Optional) </li>
                        </ul>
                        <div className="flex items-start gap-3 my-6">
                              <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                                    <Image src="../images/camera-white.svg" alt="receipt Image" width={20} height={20} />
                              </span>
                              <div className="relative flex-1 w-full">
                                    <h4 className="font-medium font-inter sm:mb-2 mb-1 sm:text-xl text-lg sm:leading-9 leading-6 text-black24">Media – Virtual Tour</h4>
                                    <p className='text-gray40 font-inter font-normal sm:text-sm text-xs leading-6'>Give buyers an immersive experience of your property</p>
                              </div>
                        </div>
                        <div className="">
                              <div className="">
                                    <h4 className="text-black27 font-inter font-bold text-[22.9px] leading-9 tracking-[-0.6px] mb-0.5">Upload  Video</h4>
                                    <p className="text-gray46 font-normal font-inter text-[13.1px] leading-5">Upload your property HD quality video</p>
                              </div>
                              <div className="mt-8 rounded-2xl border border-solid border-gray47 bg-white shadow-23xl sm:px-8 px-4 pt-10 pb-8">
                                    <div className="">
                                          <label className="block text-black27 font-inter font-normal text-[12.8px] leading-3.5 mb-3">Video title</label>
                                          <input type="text" className="text-gray46 placeholder:text-gray46 font-inter font-normal text-[13.1px] leading-normal px-3.5 rounded-[10px] border border-solid border-gray47 bg-gray49 h-10 outline-0 w-full" placeholder="Example: Full apartment virtual tour" />
                                    </div>
                                    <div className="mt-8">
                                          <label htmlFor="file-upload"
                                                className="group flex flex-col items-center justify-center w-full pt-6 pb-4 px-4 border-2 border-dashed border-gray47 bg-white hover:border-purple20/40 hover:bg-purple20/2 rounded-xl cursor-pointer transition-colors"
                                          >
                                                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-1000/10">
                                                      <Image src="../images/upload-blue.svg" alt="receipt Image" width={20} height={20} />
                                                </span>
                                                <h4 className="text-black25 font-normal font-inter sm:text-[13px] text-xs text-center leading-5 mt-3 mb-1">Drag & drop your video here or <Link href={'#'} className="text-blue-1100"> click to browse </Link></h4>
                                                <p className="text-gray43 font-inter font-normal text-[11.1px] leading-4">MP4 • Max 5 min • Max 500 MB</p>
                                                <input
                                                      id="file-upload"
                                                      type="file"
                                                      className="hidden"
                                                />

                                          </label>
                                    </div>
                                    <div className="mt-8 mb-6 relative flex items-center justify-center after:absolute after:content='' after:left-0 after:top-1/2 after:-tracking-y-1/2 after:w-full after:h-px after:bg-gray47">
                                          <span className="text-gray46 relative z-50 bg-white font-normal font-inter text-xs leading-4 tracking-[0.6px] inline-flex items-center px-4">OR</span>
                                    </div>
                                    <div className="">
                                          <div className="flex items-center justify-between mb-2.5">
                                                <label className="block text-black27 font-inter font-normal text-[13.2px] leading-3.5">Video link</label>
                                                <span className="text-gray46 font-inter font-normal text-[11.1px] leading-4 block">(optional)</span>
                                          </div>
                                          <div className="relative">
                                                <input type="text" className="text-gray46 placeholder:text-gray46 font-inter font-normal pl-10.25 text-[12.8px] leading-normal px-3.5 rounded-[10px] border border-solid border-gray47 bg-gray49 h-10 outline-0 w-full" placeholder="https://youtube.com/..." />
                                                <Image src="../images/link2.svg" alt="Image" width={16} height={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
                                          </div>
                                          <p className="flex items-center gap-1 text-[11.4px] font-normal leading-4 font-inter mt-2"> <Image src="../images/info-gray.svg" alt="Image" width={14} height={14}/>Supports YouTube, Vimeo, Google Drive</p>
                                    </div>

                              </div>
                        </div>


                  </div>

            </>
      )
}
