"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'


export const PropertyFinancialDeposit = () => {
      const [value, setValue] = useState(2); // default step value
      const min = 1;
      const max = 3;
      const step = 1;
      const percentage = ((value - min) / (max - min)) * 100;
      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Financial Terms</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Deposit & Availability</li>
                  </ul>
                  <div className="flex items-center gap-3 mb-6 mt-7">
                        <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                              <Image src="../images/euro-sign.svg" alt="receipt Image" width={20} height={20} />
                        </span>
                        <div className="relative">
                              <h4 className="font-bold font-inter text-blue-black17 text-xl leading-7 mb-1 tracking-[-0.5px] text-black17">Financial conditions</h4>
                              <p className='text-gray-1400 font-inter font-normal text-sm leading-5'>Security Deposit & Availability</p>
                        </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                        <div className="">
                              <div className="bg-white border border-solid border-gray27 rounded-xl shadow-20xl mb-6">
                                    <div className="bg-lightgray/30 border-b border-solid border-gray27 px-6 py-4 gap-3 flex items-center">
                                          <span className="bg-blue-1000/10 rounded-xl w-8 h-8 flex items-center justify-center">
                                                <Image src="../images/wallet.svg" alt="receipt Image" width={20} height={20} />
                                          </span>
                                          <h4 className="text-black24 font-bold text-base leading-6">Financial guarantees</h4>
                                    </div>
                                    <div className="p-2">
                                          <div className="">
                                                <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex gap-2 mb-1.5">Security deposit<span className="text-red12">*</span></label>
                                                <div className="relative">
                                                      <input type="text" className="border border-solid border-gray27 pr-10 bg-gray41 rounded-[10px] h-10 w-full px-3.5 text-gray40 placeholder:text-gray40 outline-0 font-medium font-inter text-sm leading-normal" placeholder="750" />
                                                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray40 font-inter font-medium text-base leading-5 block">€</span>
                                                </div>
                                                <p className="text-gray40 font-inter font-normal text-xs leading-4 mt-2">Held in a secure escrow account</p>
                                          </div>
                                          <div className="mt-6">
                                                <div className="w-full flex justify-between text-sm text-gray-500">
                                                      <span className="text-gray40 font-normal font-inter text-sm leading-5 block">0 month</span>
                                                      <span className="text-black24 font-medium font-inter text-sm leading-5 block">1.0 month's rent</span>
                                                      <span className="text-gray40 font-normal font-inter text-sm leading-5 block">2 month</span>
                                                </div>
                                                <div className="w-full relative h-2 mt-3 bg-gray42">
                                                      <div className="absolute inset-0 bg-gray42 rounded-full"></div>
                                                      <div
                                                            className="absolute h-2 bg-blue-1100 rounded-l-full"
                                                            style={{ width: `${percentage}%` }}
                                                      ></div>
                                                      <input
                                                            type="range"
                                                            min={min}
                                                            max={max}
                                                            step={step}
                                                            value={value}
                                                            onChange={(e) => setValue(Number(e.target.value))}
                                                            className="w-full h-2 bg-transparent appearance-none absolute z-10 cursor-pointer"
                                                            style={{ WebkitAppearance: "none" }}
                                                      />
                                                </div>
                                          </div>
                                          <div className="flex items-start gap-3 bg-blue-1000/5 border-2 border-dashed border-blue-1000/10 rounded-xl p-4 mt-6">
                                                <span className="mt-1 border border-solid border-blue-1100 w-4 h-4 rounded-full flex items-center"></span>
                                                <div className="flex-1 w-full">
                                                      <div className="flex items-center gap-2">
                                                            <Image src="../images/sheild-icon.svg" alt="receipt Image" width={20} height={20} />
                                                            <h4 className="text-black24 font-inter font-bold text-sm leading-3.5">Include StudGuarantee</h4>
                                                      </div>
                                                      <p className="text-gray40 font-normal text-sm leading-5 mt-1">Protection against unpaid rent up to €100,000</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="cost-bg border border-solid border-blue-1000/20 rounded-xl shadow-20xl px-2">
                                    <div className="bg-lightgray/30 border-b border-solid border-gray27 px-6 py-4 gap-3 flex items-center">
                                          <span className="bg-blue-1000/10 rounded-xl w-8 h-8 flex items-center justify-center">
                                                <Image src="../images/cost-price.svg" alt="cost Image" width={20} height={20} />
                                          </span>
                                          <h4 className="text-black24 font-bold text-base leading-6">Initial cost to the tenant</h4>
                                    </div>
                                    <div className="pb-3.5">
                                          <ul>
                                                <li className="text-gray40 font-normal font-inter text-base leading-6 flex items-center justify-between border-b border-solid border-gray27/50 py-2 mb-3">First month's rent <span className="text-black24 font-medium">750 €</span></li>
                                                <li className="text-gray40 font-normal font-inter text-base leading-6 flex items-center justify-between border-b border-solid border-gray27/50 py-2  mb-3">Security deposit <span className="text-black24 font-medium">750 €</span></li>
                                                <li className="text-black24 font-bold font-inter text-lg leading-7 flex items-center justify-between pt-2">Total to be paid <span className="text-blue-1100">1 500 €</span></li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <div className="">
                              <div className="bg-white border border-solid border-gray27 rounded-xl shadow-20xl mb-6">
                                    <div className="bg-lightgray/30 border-b border-solid border-gray27 px-6 py-4 gap-3 flex items-center">
                                          <span className="bg-blue-1000/10 rounded-xl w-8 h-8 flex items-center justify-center">
                                                <Image src="../images/Availability-icon.svg" alt="Availability Image" width={20} height={20} />
                                          </span>
                                          <h4 className="text-black24 font-bold text-base leading-6">Availability</h4>
                                    </div>
                                    <div className="p-2 pb-4.5">
                                          <div className="">
                                                <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex gap-2 mb-2.5">Available from<span className="text-red12">*</span></label>
                                                <div className="relative">
                                                      <input type="text" className="border border-solid border-gray27 pl-12 bg-gray41 rounded-[10px] h-10 w-full px-3.5 text-gray40 placeholder:text-gray40 outline-0 font-medium font-inter text-sm leading-normal" placeholder="Select a date" />
                                                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray40 font-inter font-medium text-base leading-5 block">
                                                            <Image src="../images/calendargray.svg" alt="calendargray Image" width={16} height={16} />
                                                      </span>
                                                </div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                                                <div className="">
                                                      <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex gap-2 mb-2.5">Minimum duration<span className="text-red12">*</span></label>
                                                      <div className="relative">
                                                            <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-xl h-12 w-full px-3.5 text-black24 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                                                  <option>9 month</option>
                                                            </select>
                                                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 block">
                                                                  <Image src="../images/down-arrow.svg" alt="Arrow Image" width={16} height={16} />
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className="">
                                                      <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex gap-2 mb-2.5">Maximum duration</label>
                                                      <div className="relative">
                                                            <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-xl h-12 w-full px-3.5 text-black24 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                                                  <option>12 month</option>
                                                            </select>
                                                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 block"><Image src="../images/down-arrow.svg" alt="Arrow Image" width={16} height={16} /> </span>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="">
                                                <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex mb-3.5">Periods of unavailability</label>
                                                <Link href={'#'} className="flex items-center justify-center gap-4 text-black24 font-medium font-inter text-sm leading-5 rounded-[10px] border border-dashed border-gray27 bg-gray41 h-10">
                                                      <Image src="../images/plus-black.svg" alt="plus Image" width={16} height={16} />
                                                      Add a period
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div> 
            </div>
      )
}
