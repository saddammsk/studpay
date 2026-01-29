"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Buttons from "@/app/ui/Buttons";






export const MediaTourHotspots = () => {

      return (
            <div className="max-w-270.5 w-full mx-auto border border-solid border-gray-1100/50 rounded-xl bg-white p-6">
                  <div className="text-center">
                        <h4 className="text-black-1000 font-PlayfairDisplay font-bold text-xl leading-7 mb-2">Add Interactive Hotspots</h4>
                        <p className="text-gray-1000 font-inter font-normal text-base leading-6">Create interactive points that viewers can click for more information.</p>
                  </div>
                  <div className="mt-6">
                        <ul className="flex items-center justify-center gap-2">
                              <li><Link href={"#"} className="group text-white font-normal font-inter text-base leading-6 px-4 inline-flex items-center gap-2 rounded-xl bg-blue-1100 h-10 hover:bg-blue-1100 hover:text-white"><Image src="../images/info-dark.svg" alt="Image" width={16} height={16} className="brightness-[2000] group-hover:brightness-[2000]" /> Info</Link></li>
                              <li><Link href={"#"} className="group text-black-1000 font-normal font-inter text-base leading-6 px-4 inline-flex items-center gap-2 rounded-xl bg-lightgray h-10 hover:bg-blue-1100 hover:text-white"><Image src="../images/link-icon.svg" alt="Image" width={16} height={16} className="brightness-0 group-hover:brightness-[2000]" /> Link</Link></li>
                              <li><Link href={"#"} className="group text-black-1000 font-normal font-inter text-base leading-6 px-4 inline-flex items-center gap-2 rounded-xl bg-lightgray h-10 hover:bg-blue-1100 hover:text-white"><Image src="../images/video-icon.svg" alt="Image" width={16} height={16} className="brightness-0 group-hover:brightness-[2000]" /> Video</Link></li>
                        </ul>
                        <div className="md:max-w-227.5 mt-6 w-full mx-auto flex md:flex-row flex-col lg:gap-6 gap-4">
                              <div className="flex-1 w-full">
                                    <div className="flex flex-col mb-4">
                                          <Image src="/images/LivingRoom.png" alt="Image" width={600} height={337} className="w-full rounded-xl" />
                                    </div>
                                    <Buttons className="gap-2 text-base! hover:bg-yellow-1100/90 hover:shadow-none"><Image src="/images/plus-icon.svg" alt="Image" width={20} height={20} /> Add New Hotspot</Buttons>
                              </div>
                              <div className="lg:max-w-[288px] md:max-w-50 max-w-full w-full">
                                    <h4 className="font-medium font-inter mb-3 text-sm leading-5 text-black24 tracking-[0.35px] uppercase">Hotspots (0)</h4>
                                    <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-1100 p-4">
                                          <p className="text-gray-1000 font-normal lg:text-sm text-xs font-inter leading-5">No hotspots added yet</p>
                                    </div>
                              </div>
                        </div>
                  </div>


            </div>
      )
}
