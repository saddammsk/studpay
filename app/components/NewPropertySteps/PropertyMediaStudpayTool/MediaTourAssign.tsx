"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'






export const MediaTourAssign = () => {

      return (
            <div className="max-w-240 w-full mx-auto border border-solid border-gray-1100/50 rounded-xl bg-white p-6">
                  <div className="text-center">
                        <h4 className="text-black-1000 font-PlayfairDisplay font-bold text-xl leading-7 mb-2">Assign Photos to Rooms</h4>
                        <p className="text-gray-1000 font-inter font-normal text-base leading-6">Organize your photos by assigning them to different rooms in your property.</p>
                  </div>
                  <div className="flex lg:flex-row flex-col items-start gap-6  mt-6">
                        <div className="xl:max-w-71.75 lg:max-w-55 max-w-full w-full">
                              <h4 className="text-black-1000 font-inter font-medium text-sm leading-5 tracking-[0.35px] mb-3">Rooms</h4>
                              <ul>
                                    <li className="mb-3">
                                          <Link href={"#"} className="group px-3 bg-blue-1100 rounded-xl h-12 w-full flex items-center justify-between text-white font-inter font-medium text-base leading-6 hover:bg-blue-1100 hover:text-white transition-all duration-500 ease-in-out">
                                                <p className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5"><Image src="../images/bedroom-icon.svg" alt="Image" width={20} height={20} className="brightness-[2000] group-hover:brightness-[2000] transition-all duration-500 ease-in-out" /></span>Living Room</p>
                                                <span className="flex items-center justify-center w-6.25 h-6 bg-white/20 text-white font-inter font-normal text-sm leading-5 rounded-full group-hover:text-white group-hover:bg-white/20 transition-all duration-500 ease-in-out">0</span>
                                          </Link>
                                    </li>
                                    <li className="mb-3">
                                          <Link href={"#"} className="group px-3 bg-lightgray rounded-xl h-12 w-full flex items-center justify-between text-black-1000 font-inter font-medium text-base leading-6 hover:bg-blue-1100 hover:text-white transition-all duration-500 ease-in-out">
                                                <p className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5"><Image src="../images/Kitchen2.svg" alt="Image" width={20} height={20} className="brightness-[0] group-hover:brightness-[2000] transition-all duration-500 ease-in-out" /></span>Kitchen</p>
                                                <span className="flex items-center justify-center w-6.25 h-6 bg-lightgray text-black-1000 font-inter font-normal text-sm leading-5 rounded-full group-hover:text-white group-hover:bg-white/20 transition-all duration-500 ease-in-out">0</span>
                                          </Link>
                                    </li>
                                    <li className="mb-3">
                                          <Link href={"#"} className="group px-3 bg-lightgray rounded-xl h-12 w-full flex items-center justify-between text-black-1000 font-inter font-medium text-base leading-6 hover:bg-blue-1100 hover:text-white transition-all duration-500 ease-in-out">
                                                <p className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5"><Image src="../images/bed-icon.svg" alt="Image" width={20} height={20} className="brightness-[0] group-hover:brightness-[2000] transition-all duration-500 ease-in-out" /></span>Kitchen</p>
                                                <span className="flex items-center justify-center w-6.25 h-6 bg-lightgray text-black-1000 font-inter font-normal text-sm leading-5 rounded-full group-hover:text-white group-hover:bg-white/20 transition-all duration-500 ease-in-out">0</span>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link href={"#"} className="group px-3 bg-lightgray rounded-xl h-12 w-full flex items-center justify-between text-black-1000 font-inter font-medium text-base leading-6 hover:bg-blue-1100 hover:text-white transition-all duration-500 ease-in-out">
                                                <p className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5"><Image src="../images/bath-icon.svg" alt="Image" width={20} height={20} className="brightness-[0] group-hover:brightness-[2000] transition-all duration-500 ease-in-out" /></span>Bathroom</p>
                                                <span className="flex items-center justify-center w-6.25 h-6 bg-lightgray text-black-1000 font-inter font-normal text-sm leading-5 rounded-full group-hover:text-white group-hover:bg-white/20 transition-all duration-500 ease-in-out">0</span>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link href={"#"} className="group px-3 bg-lightgray rounded-xl h-12 w-full flex items-center justify-between text-black-1000 font-inter font-medium text-base leading-6 hover:bg-blue-1100 hover:text-white transition-all duration-500 ease-in-out">
                                                <p className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5"><Image src="../images/Outdoor.svg" alt="Image" width={20} height={20} className="brightness-[0] group-hover:brightness-[2000] transition-all duration-500 ease-in-out" /></span>Outdoor</p>
                                                <span className="flex items-center justify-center w-6.25 h-6 bg-lightgray text-black-1000 font-inter font-normal text-sm leading-5 rounded-full group-hover:text-white group-hover:bg-white/20 transition-all duration-500 ease-in-out">0</span>
                                          </Link>
                                    </li>
                              </ul>
                        </div>
                        <div className="flex-1 w-full">
                              <div className="pb-4">
                                    <h4 className="text-black-1000 font-inter font-medium text-base leading-6 mb-4">Living Room Photos</h4>
                                    <label htmlFor="file-upload"
                                          className="group flex flex-col mt-6 items-center justify-center w-full py-8 px-4 border-2 border-dashed border-gray-1100 bg-white rounded-xl cursor-pointer transition-colors"
                                    >
                                          <p className="text-gray-1000 font-inter font-normal sm:text-base text-xs leading-6 mb-1">No photos assigned to this room yet.</p>
                                          <p className="text-gray-1000 font-inter font-normal sm:text-sm text-xs leading-5">Maximum 50 photos, up to 10MB each</p>
                                          <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                          />

                                    </label>
                              </div>
                              <div className="border-t border-solid border-gray-1100 pt-4">
                                    <h4 className="text-black-1000 font-inter font-medium text-sm leading-4 mb-2">Available Photos</h4>
                                    <ul className="grid sm:grid-cols-6 grid-cols- gap-2">
                                          <li><Link href={'#'} className="group flex items-center"><Image src="/images/room-img1.jpg" alt="Image" width={94} height={94} className="rounded-xl group-hover:shadow-24xl transition-all duration-500 ease-in-out" /></Link></li>
                                          <li><Link href={'#'} className="group flex items-center"><Image src="/images/room-img2.jpg" alt="Image" width={94} height={94} className="rounded-xl group-hover:shadow-24xl transition-all duration-500 ease-in-out" /></Link></li>
                                          <li><Link href={'#'} className="group flex items-center"><Image src="/images/room-img3.jpg" alt="Image" width={94} height={94} className="rounded-xl group-hover:shadow-24xl transition-all duration-500 ease-in-out" /></Link></li>
                                          <li><Link href={'#'} className="group flex items-center"><Image src="/images/room-img4.jpg" alt="Image" width={94} height={94} className="rounded-xl group-hover:shadow-24xl transition-all duration-500 ease-in-out" /></Link></li>
                                          <li><Link href={'#'} className="group flex items-center"><Image src="/images/room-img5.jpg" alt="Image" width={94} height={94} className="rounded-xl group-hover:shadow-24xl transition-all duration-500 ease-in-out" /></Link></li>
                                          <li><Link href={'#'} className="group flex items-center"><Image src="/images/room-img6.jpg" alt="Image" width={94} height={94} className="rounded-xl group-hover:shadow-24xl transition-all duration-500 ease-in-out" /></Link></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
