"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { RadioGroup, Radio } from '@headlessui/react'
import ToggleSwitch from "@/app/ui/ToggleSwitch"
import Buttons from "@/app/ui/Buttons";




export const PropertyVisibilityBoost = () => {
      const [selected, setSelected] = useState('Startup')
      const [switch1, setSwitch1] = useState(false)
      const [switch2, setSwitch2] = useState(false)
      return (
            <div className="pt-6">
                  <div className="bg-white rounded-[20px] shadow-26xl lg:p-8 p-4">
                        <div className="flex items-center gap-3">
                              <span className='bg-gradient rounded-[20px] w-16 h-16 flex items-center justify-center'>
                                    <Image src="../images/Visibility-icon.svg" alt="Image" width={32} height={32} />
                              </span>
                              <div className="relative flex-1 w-full">
                                    <h4 className="font-bold font-inter sm:text-[30px] text-xl leading-9 text-black-1200 mb-1">Visibility & Boost</h4>
                                    <p className='text-gray51 font-inter font-normal sm:text-base text-sm leading-6'>Choose how you want your property to be discovered</p>
                              </div>
                        </div>
                        <div className="sm:pt-16 py-6 sm:pb-10">
                              <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="items-start grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-6 max-w-259.75 w-full mx-auto">
                                    <Radio
                                          value="Startup"
                                          className="group relative block cursor-pointer rounded-[20px] p-6 border-2 border-solid border-gray52  transition focus:not-data-focus:outline-none data-checked:shadow-27xl data-focus:outline data-focus:outline-white"
                                    >
                                          <div className="flex items-start gap-4">
                                                <span className="bg-gray53 w-12 h-12 rounded-2xl flex items-center justify-center">
                                                      <Image src="../images/eye-icon.svg" alt="Image" width={24} height={24} />
                                                </span>
                                                <div className="flex-1 w-full">
                                                      <h5 className="text-black-1200 font-inter font-bold text-xl leading-7 mb-1">Basic</h5>
                                                      <h4 className="text-black-1200 font-inter font-bold text-[30px] leading-9 flex items-end gap-1">Free <span className="text-gray51 mb-0.75 font-normal text-sm leading-5 flex">No fees</span></h4>
                                                </div>
                                          </div>
                                          <div className="mt-6">
                                                <p className="text-black-1200 mb-2 font-normal font-inter text-sm leading-5 flex items-center gap-2"><Image src="../images/price-arrow-black.svg" alt="Image" width={16} height={16} /> Standard visibility</p>
                                                <div className="w-full bg-gray53 relative rounded-full h-2">
                                                      <div className="bg-gray51 h-full w-27.75 rounded-full absolute left-0 top-0"></div>
                                                </div>
                                          </div>
                                          <div className="my-6">
                                                <ul>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-gray53 rounded-full w-5 h-5">
                                                                  <Image src="../images/check-gray.svg" alt="Image" width={12} height={12} />
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Listed on StudPay marketplace</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-gray53 rounded-full w-5 h-5">
                                                                  <Image src="../images/check-gray.svg" alt="Image" width={12} height={12} />
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Basic search ranking</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-gray53 rounded-full w-5 h-5">
                                                                  <Image src="../images/check-gray.svg" alt="Image" width={12} height={12} />
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Standard response time</p>
                                                      </li>
                                                      <li className="flex items-center gap-3">
                                                            <span className="flex items-center justify-center bg-gray53 rounded-full w-5 h-5">
                                                                  <Image src="../images/check-gray.svg" alt="Image" width={12} height={12} />
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Email support</p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <Buttons className="bg-gray53 group-data-checked:bg-blue-1000 group-data-checked:text-white! rounded-2xl! h-11 text-gray51! font-normal hover:text-white!">
                                                <span className="group-data-checked:hidden block">Select this plan</span>
                                                <span className="group-data-checked:block hidden">Selected</span>
                                          </Buttons>
                                          <div className="absolute top-4 right-4 bg-white flex items-center justify-center border border-solid border-gray52 w-6 h-6 rounded-full transition group-data-checked:border-blue-1000 group-data-checked:bg-blue-1000">
                                                <Image src="../images/check-white2.svg" alt="Image" width={16} height={16} className="opacity-0 group-data-checked:opacity-100" />
                                          </div>
                                    </Radio>
                                    <Radio
                                          value="Business"
                                          className="group relative block cursor-pointer rounded-[20px] p-6 border-2 border-solid border-blue-1000  transition focus:not-data-focus:outline-none data-checked:shadow-27xl data-focus:outline data-focus:outline-white"
                                    >
                                          <span className="inline-flex items-center justify-center font-inter font-bold text-xs leading-4 h-6 px-4 gap-1 bg-blue-1000 text-white rounded-full shadow-4xl absolute -top-2.75 left-1/2 -translate-x-1/2"><Image src="../images/star-white2.svg" alt="Image" width={12} height={12} /> Most Popular</span>
                                          <div className="flex items-start gap-4">
                                                <span className="bg-blue-1000/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                                                      <Image src="../images/light-blue.svg" alt="Image" width={24} height={24} />
                                                </span>
                                                <div className="flex-1 w-full">
                                                      <h5 className="text-black-1200 font-inter font-bold text-xl leading-7 mb-1">Boost</h5>
                                                      <h4 className="text-blue-1000 font-inter font-bold text-[30px] leading-9 flex items-end gap-1">€19 <span className="text-gray51 mb-0.75 font-normal text-sm leading-5 flex">/month</span></h4>
                                                </div>
                                          </div>
                                          <div className="mt-6">
                                                <p className="text-black-1200 mb-2 font-normal font-inter text-sm leading-5 flex items-center gap-2"><Image src="../images/price-arrow-black.svg" alt="Image" width={16} height={16} /> 2x more visibility</p>
                                                <div className="w-full bg-gray53 relative rounded-full h-2">
                                                      <div className="bg-blue-1000 h-full w-[75%] rounded-full absolute left-0 top-0"></div>
                                                </div>
                                          </div>
                                          <div className="my-6">
                                                <ul>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue-1000/10 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#0A91FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Featured in search results</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue-1000/10 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#0A91FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Highlighted listing badge</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue-1000/10 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#0A91FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Priority in recommendations</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue-1000/10 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#0A91FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Analytics dashboard</p>
                                                      </li>
                                                      <li className="flex items-center gap-3">
                                                            <span className="flex items-center justify-center bg-blue-1000/10 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#0A91FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Priority email support</p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <Buttons className="bg-gray53 group-data-checked:bg-blue-1000 group-data-checked:text-white! rounded-2xl! h-11 text-gray51! font-normal hover:text-white!">
                                                <span className="group-data-checked:hidden block">Select this plan</span>
                                                <span className="group-data-checked:block hidden">Selected</span>
                                          </Buttons>
                                          <div className="absolute top-4 right-4 bg-white flex items-center justify-center border border-solid border-gray52 w-6 h-6 rounded-full transition group-data-checked:border-blue-1000 group-data-checked:bg-blue-1000">
                                                <Image src="../images/check-white2.svg" alt="Image" width={16} height={16} className="opacity-0 group-data-checked:opacity-100" />
                                          </div>
                                    </Radio>
                                    <Radio
                                          value="Premium"
                                          className="group relative block cursor-pointer rounded-[20px] p-6 border-2 border-solid border-purple13  transition focus:not-data-focus:outline-none data-checked:shadow-27xl data-focus:outline data-focus:outline-white"
                                    >
                                          <span className="inline-flex items-center justify-center font-inter font-bold text-xs leading-4 h-6 px-4 gap-1 bg-gradient3  text-white rounded-full shadow-4xl absolute -top-2.75 left-1/2 -translate-x-1/2"><Image src="../images/simple-star.svg" alt="Image" width={12} height={12} /> Best Results</span>
                                          <div className="flex items-start gap-4">
                                                <span className="bg-gradient2 w-12 h-12 rounded-2xl flex items-center justify-center">
                                                      <Image src="../images/crown-icon.svg" alt="Image" width={24} height={24} />
                                                </span>
                                                <div className="flex-1 w-full">
                                                      <h5 className="text-black-1200 font-inter font-bold text-xl leading-7 mb-1">Premium</h5>
                                                      <h4 className="text-purple13 font-inter font-bold text-[30px] leading-9 flex items-end gap-1">€49<span className="text-gray51 mb-0.75 font-normal text-sm leading-5 flex">/month</span></h4>
                                                </div>
                                          </div>
                                          <div className="mt-6">
                                                <p className="text-black-1200 mb-2 font-normal font-inter text-sm leading-5 flex items-center gap-2"><Image src="../images/price-arrow-black.svg" alt="Image" width={16} height={16} /> 5x more visibility</p>
                                                <div className="w-full bg-gray53 relative rounded-full h-2">
                                                      <div className="bg-purple13 h-full w-full rounded-full absolute left-0 top-0"></div>
                                                </div>
                                          </div>
                                          <div className="my-6">
                                                <ul>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue134 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6B26D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Top placement in all searches</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue134 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6B26D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Premium verified badge</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue134 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6B26D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Featured on homepage</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue134 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6B26D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Social media promotion</p>
                                                      </li>
                                                      <li className="flex items-center gap-3 mb-3">
                                                            <span className="flex items-center justify-center bg-blue134 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6B26D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">Dedicated account manager</p>
                                                      </li>
                                                      <li className="flex items-center gap-3">
                                                            <span className="flex items-center justify-center bg-blue134 rounded-full w-5 h-5">
                                                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#6B26D9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                  </svg>
                                                            </span>
                                                            <p className="text-black-1200 font-normal font-inter text-sm leading-5">24/7 priority support</p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <Buttons className="bg-gray53 group-data-checked:bg-blue-1000 group-data-checked:text-white! rounded-2xl! h-11 text-gray51! font-normal hover:text-white!">
                                                <span className="group-data-checked:hidden block">Select this plan</span>
                                                <span className="group-data-checked:block hidden">Selected</span>
                                          </Buttons>
                                          <div className="absolute top-4 right-4 bg-white flex items-center justify-center border border-solid border-gray52 w-6 h-6 rounded-full transition group-data-checked:border-blue-1000 group-data-checked:bg-blue-1000">
                                                <Image src="../images/check-white2.svg" alt="Image" width={16} height={16} className="opacity-0 group-data-checked:opacity-100" />
                                          </div>
                                    </Radio>
                              </RadioGroup>

                        </div>
                        <div className="">
                              <h4 className="text-black-1200 font-inter font-bold text-lg leading-7 flex items-center gap-2">Optional Add-ons <span className="text-blue133 font-normal font-inter text-xs leading-4 bg-blue134 rounded-full inline-flex items-center justify-center h-6 px-2.5">Optional</span></h4>
                              <div className="mt-4 border-2 border-solid border-gray52 rounded-2xl flex sm:flex-row flex-col sm:items-center items-end sm:gap-0 gap-8 justify-between lg:p-5 p-4">
                                    <div className="flex items-center lg:gap-6 gap-4 lg:max-w-full max-w-92.5 w-full">
                                          <span className="bg-gray53 rounded-2xl flex items-center justify-center w-11 h-11"><Image src="../images/global-icon.svg" alt="Image" width={20} height={20} /></span>
                                          <div className="flex-1 w-full">
                                                <h4 className="text-black-1200 font-bold font-inter text-base leading-6 flex items-center gap-2.5 mb-0.5">Multi-Platform Distribution <Image src="../images/info-icon.svg" alt="Image" width={16} height={16} /></h4>
                                                <p className="text-gray51 font-normal font-inter text-sm leading-5">Publish to partner sites like Studapart, Roomlala, and more</p>
                                          </div>
                                    </div>
                                    <div className="flex items-center lg:gap-4 gap-2">
                                          <span className="text-gray51 font-inter font-bold lg:text-sm text-xs leading-5">+€9/mo</span>
                                          <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                                    </div>
                              </div>
                              <div className="mt-4 border-2 border-solid border-gray52 rounded-2xl flex sm:flex-row flex-col sm:items-center items-end sm:gap-0 gap-8 justify-between lg:p-5 p-4">
                                    <div className="flex items-center lg:gap-6 gap-4 lg:max-w-full max-w-92.5 w-full">
                                          <span className="bg-gray53 rounded-2xl flex items-center justify-center w-11 h-11"><Image src="../images/Priority-icon.svg" alt="Image" width={20} height={20} /></span>
                                          <div className="flex-1 w-full">
                                                <h4 className="text-black-1200 font-bold font-inter text-base leading-6 flex items-center gap-2.5 mb-0.5">Priority Placement <Image src="../images/info-icon.svg" alt="Image" width={16} height={16} /></h4>
                                                <p className="text-gray51 font-normal font-inter text-sm leading-5">Always appear in the first 10 results for matching searches</p>
                                          </div>
                                    </div>
                                    <div className="flex items-center lg:gap-4 gap-2">
                                          <span className="text-gray51 font-inter font-bold lg:text-sm text-xs leading-5">+€15/mo</span>
                                          <ToggleSwitch enabled={switch2} setEnabled={setSwitch2} />
                                    </div>
                              </div>
                              <div className="bg-blue134 mt-8 border-blue-1000/20 flex items-center justify-between rounded-2xl lg:px-5 px-4 lg:py-6 py-4">
                                    <div className="flex items-center gap-3">
                                          <Image src="../images/money-icon.svg" alt="Image" width={20} height={20} />
                                          <h4 className="text-black-1200 font-normal font-inter text-base leading-6">Monthly Total</h4>
                                    </div>
                                    <div className="flex items-center gap-1">
                                          <h5 className="text-blue-1000 font-inter font-bold text-2xl leading-8">€19</h5>
                                          <span className="text-gray51 font-inter font-normal text-sm leading-5">/month</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
