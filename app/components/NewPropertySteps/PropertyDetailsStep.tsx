"use client";

import Link from "next/link";


export const PropertyDetailsStep = () => {
      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Add Property</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Dimensions & Capacity</li>
                  </ul>
                  <div className="flex items-center gap-3 mb-4 mt-8">
                        <span className='bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center'>
                              <img src="../images/home-icon.svg" alt='' className="filter-img" />
                        </span>
                        <div className="relative">
                              <h4 className="font-bold font-inter text-blue-black17 text-xl leading-7 mb-1 tracking-[-0.5px] text-black17">Property Characteristics</h4>
                              <p className='text-gray-1400 font-inter font-normal text-sm leading-5'>Dimensions & Capacity</p>
                        </div>
                  </div>
                  <p className="text-gray-1400 font-inter font-normal text-sm leading-5">Accurately describe the physical size and accommodation capacity of your property.</p>
                  <div className="bg-white border border-solid border-gray-1300/50 rounded-xl p-6 mt-8">
                        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4">
                              <div className="">
                                    <div className="mb-6">
                                          <label className="text-black17 font-inter font-normal text-sm leading-3.5 flex gap-2 mb-1.5">Surface (m²)<span className="text-red12">*</span></label>
                                          <div className="relative">
                                                <input type="text" className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-[10px] h-10 w-full px-3.5 text-gray-1400 placeholder:text-gray-1400 outline-0 font-normal font-inter text-sm leading-normal" placeholder="e.g., 45" />
                                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-1400 font-inter font-normal text-sm leading-5 block">m²</span>
                                          </div>
                                    </div>
                                    <div className="mb-6">
                                          <label className="text-black17 font-inter font-normal text-sm leading-3.5 flex gap-2 mb-1.5">Accommodation Capacity <span className="text-red12">*</span></label>
                                          <div className="relative">
                                                <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-[10px] h-10 w-full px-3.5 text-gray-1400 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                                      <option>Select capacity</option>
                                                </select>
                                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 block"><img src="../images/down-arrow.svg" alt="" /> </span>
                                          </div>
                                    </div>
                                    <div className="">
                                          <div className="flex items-center gap-3 border border-solid border-gray-1300/50 bg-gray33/50 p-4 h-14.5 rounded-xl">
                                                <span className="border border-solid border-blue-1100 w-4 h-4 rounded-full flex items-center"></span>
                                                <p className="text-black17 font-inter font-normal text-sm leading-3.5">This is a studio</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="">
                                    <div className="mb-6">
                                          <label className="text-black17 font-inter font-normal text-sm leading-3.5 flex gap-2 mb-1.5">Total number of rooms<span className="text-red12">*</span><img src="../images/info-icon.svg" alt="" /> </label>
                                          <div className="relative mb-1.5">
                                                <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-[10px] h-10 w-full px-3.5 text-gray-1400 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                                      <option>Select total rooms</option>
                                                </select>
                                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 block"><img src="../images/down-arrow.svg" alt="" /> </span>
                                          </div>
                                          <span className="block text-gray-1400 font-normal font-inter text-xs leading-6">Living room, kitchen, bedrooms, etc.</span>
                                    </div>
                                    <div className="mb-6">
                                          <label className="text-black17 font-inter font-normal text-sm leading-3.5 flex gap-2 mb-1.5">Number of bedrooms <span className="text-red12">*</span></label>
                                          <div className="relative">
                                                <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-[10px] h-10 w-full px-3.5 text-gray-1400 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                                      <option>Select bedrooms</option>
                                                </select>
                                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 block"><img src="../images/down-arrow.svg" alt="" /> </span>
                                          </div>
                                    </div>
                                    <div>
                                          <label className="text-black17 font-inter font-normal text-sm leading-3.5 flex gap-2 mb-1.5">Number of bathrooms  <span className="text-red12">*</span></label>
                                          <div className="relative">
                                                <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-[10px] h-10 w-full px-3.5 text-gray-1400 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                                      <option>Select bathrooms</option>
                                                </select>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="border border-solid border-gray-1300/50 bg-white rounded-xl mt-8">
                        <Link href={"#"} className="group px-6 pt-4 pb-6 flex items-center justify-between">
                              <div className="">
                                    <h4 className="text-black17 group-hover:text-green16 transition-all duration-500 ease-in-out font-inte font-bold text-lg leading-7 tracking-[-0.45px]">Room Surface Breakdown</h4>
                                    <span className="text-gray-1400 font-normal font-inter text-sm leading-5">Optional</span>
                              </div>
                              <span className="flex items-center justify-center bg-gray33 transition-all duration-500 ease-in-out group-hover:bg-green16/10 rounded-full w-8 h-8">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.666992 0.666748L4.66699 4.66675L8.66699 0.666748" className="group-hover:stroke-green16 transition-all duration-500 ease-in-out" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </span>
                        </Link>
                  </div>
            </div>
      )
}
