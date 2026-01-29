"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { MediaTourImport } from "@/app/components/NewPropertySteps/PropertyMediaStudpayTool/MediaTourImport";
import { MediaTourAssign } from "@/app/components/NewPropertySteps/PropertyMediaStudpayTool/MediaTourAssign";
import { MediaTourHotspots } from "@/app/components/NewPropertySteps/PropertyMediaStudpayTool/MediaTourHotspots";
import { MediaTourAudio } from "@/app/components/NewPropertySteps/PropertyMediaStudpayTool/MediaTourAudio";

export const PropertyMediaStudpayTool = () => {

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
                                    <Image src="../images/camera-white.svg" alt="Image" width={20} height={20} />
                              </span>
                              <div className="relative flex-1 w-full">
                                    <h4 className="font-medium font-inter sm:mb-2 mb-1 sm:text-xl text-lg sm:leading-9 leading-6 text-black24">Media – Virtual Tour</h4>
                                    <p className='text-gray40 font-inter font-normal sm:text-sm text-xs leading-6'>Give buyers an immersive experience of your property</p>
                              </div>
                        </div>
                        <div className="">
                              <div className="sm:overflow-x-auto overflow-x-scroll">
                                    <ul className="z-0 flex items-center sm:justify-center justify-start gap-13  sm:w-auto w-130 sm:pb-0 pb-2.5 relative after:absolute after:content='' after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 lg:after:w-1/2 after:w-[70%] after:h-0.5 after:bg-gray50">
                                          <li className="bg-gray-1900 lg:px-4 px-0 z-50">
                                                <span className="flex items-center justify-center rounded-full text-white font-inter font-bold text-sm leading-5 w-10 h-10 bg-blue-1100 mx-auto">1</span>
                                                <div className="text-center mt-3">
                                                      <h4 className="text-black-1000 font-inter font-semibold text-sm leading-5 mb-0.5">Import</h4>
                                                      <p className="text-gray-1000 font-inter font-normal text-xs leading-4">Upload photos</p>
                                                </div>
                                          </li>
                                          <li className="bg-gray-1900 lg:px-4 px-0 z-50">
                                                <span className="flex items-center justify-center rounded-full text-gray-1000 font-inter font-bold text-sm leading-5 w-10 h-10 bg-lightgray mx-auto">2</span>
                                                <div className="text-center mt-3">
                                                      <h4 className="text-gray-1000 font-inter font-semibold text-sm leading-5 mb-0.5">Assign</h4>
                                                      <p className="text-gray-1000 font-inter font-normal text-xs leading-4">Organize rooms</p>
                                                </div>
                                          </li>
                                          <li className="bg-gray-1900 lg:px-4 px-0 z-50">
                                                <span className="flex items-center justify-center rounded-full text-gray-1000 font-inter font-bold text-sm leading-5 w-10 h-10 bg-lightgray mx-auto">3</span>
                                                <div className="text-center mt-3">
                                                      <h4 className="text-gray-1000 font-inter font-semibold text-sm leading-5 mb-0.5">Hotspots</h4>
                                                      <p className="text-gray-1000 font-inter font-normal text-xs leading-4">Add interactions</p>
                                                </div>
                                          </li>
                                          <li className="bg-gray-1900 lg:px-4 px-0 z-50">
                                                <span className="flex items-center justify-center rounded-full text-gray-1000 font-inter font-bold text-sm leading-5 w-10 h-10 bg-lightgray mx-auto">4</span>
                                                <div className="text-center mt-3">
                                                      <h4 className="text-gray-1000 font-inter font-semibold text-sm leading-5 mb-0.5">Audio</h4>
                                                      <p className="text-gray-1000 font-inter font-normal text-xs leading-4">Record narration</p>
                                                </div>
                                          </li>
                                    </ul>
                              </div>
                              <div className="md:pt-16 pt-8">
                                    <div className="hidden">
                                          <MediaTourImport />
                                    </div>
                                    <div className="hidden">
                                          <MediaTourAssign />
                                    </div>
                                    <div className="hidden">
                                          <MediaTourHotspots />
                                    </div>
                                    <div className="">
                                          <MediaTourAudio />
                                    </div>
                              </div>
                        </div>


                  </div>

            </>
      )
}
