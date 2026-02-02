"use client";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import Image from 'next/image'
import Link from "next/link";


export default function ListingReviewPublish() {
      const [isOpenVerify, setIsOpenVerify] = useState(false);
      const [isOpenSchedule, setIsOpenSchedule] = useState(false);

      return (
            <>
                  <div className="bg-gray15 font-dm-sans xl:pl-64 md:pl-50 pt-16">
              
                        <div className="pl-3 xl:pr-9 pr-3 py-6">
                              <div className="max-w-7xl w-full mx-auto lg:p-8">
                                    <div className="">
                                          <h4 className="text-black-1100 font-inter font-bold md:text-[30px] text-2xl md:leading-9 leading-7 mb-2">Review & Publish</h4>
                                          <p className="text-gray24 font-inter md:text-base text-sm font-normal leading-6">Take a final look at your listing before making it live.</p>
                                    </div>
                                    <div className="flex 2xl:flex-row flex-col gap-8 md:mt-8 mt-6">
                                          <div className="flex-1 w-full bg-white rounded-xl shadow-284xl">
                                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
                                                      <div className="relative">
                                                            <span className="absolute left-4 top-5 text-white font-inter font-bold text-xs leading-4 inline-flex items-center justify-center px-2.5 h-5 rounded-full bg-green238 shadow-29xl">✓ Verified Property</span>
                                                            <Image src="/images/CharmingStudio.jpg" alt="Image" width={398} height={288} className="w-full rounded-tl-xl" />
                                                      </div>
                                                      <div className="grid grid-cols-2 gap-1 relative">
                                                            <span className="absolute top-4.5 right-3.5 rounded-full inline-flex items-center justify-center text-black-1100 font-bold font-inter text-xs leading-4 bg-white h-5.5 px-2.5">5 photos</span>
                                                            <div className="flex flex-col">
                                                                  <Image src="/images/CharmingStudio2.jpg" alt="Image" width={197} height={142} className="w-full" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                  <Image src="/images/CharmingStudio3.jpg" alt="Image" width={197} height={142} className="w-full sm:rounded-tr-xl" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                  <Image src="/images/CharmingStudio2.jpg" alt="Image" width={197} height={142} className="w-full" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                  <Image src="/images/CharmingStudio2.jpg" alt="Image" width={197} height={142} className="w-full" />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="sm:p-6 p-4">
                                                      <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 items-start justify-between mb-3">
                                                            <div className="">
                                                                  <ul className="flex items-center gap-2 mb-1">
                                                                        <li className="font-inter font-medium text-sm leading-5 text-blue-1000">Private Room</li>
                                                                        <li className="font-inter font-normal text-sm leading-5 text-gray24">•</li>
                                                                        <li className="font-inter font-normal text-sm leading-5 text-gray24">Studio</li>
                                                                  </ul>
                                                                  <h4 className="text-black-1100 font-inter font-bold lg:text-2xl text-xl sm:leading-7.5 leading-6">Charming Studio in Marais District</h4>
                                                            </div>
                                                            <div className="">
                                                                  <h4 className="text-blue-1000 font-inter font-bold text-2xl leading-5 flex items-end justify-end mb-2">€950 <span className="flex font-normal text-sm text-gray24">/mo</span> </h4>
                                                                  <p className="text-gray24 font-inter font-normal text-sm leading-5">+ €80 charges</p>
                                                            </div>
                                                      </div>
                                                      <p className="text-gray24 font-inter font-normal sm:text-base text-sm leading-6 flex items-center gap-2"><Image src="/images/location-blue.svg" alt="Image" width={16} height={16} /> 42 Rue des Francs Bourgeois, 75004 Paris</p>
                                                      <ul className="mt-6 flex items-center gap-2 flex-wrap">
                                                            <li className="inline-flex items-center justify-center text-blue-1000 bg-blue-1000/10 rounded-full font-bold font-inter text-xs leading-4 px-2.5 h-5">Central Location</li>
                                                            <li className="inline-flex items-center justify-center text-blue-1000 bg-blue-1000/10 rounded-full font-bold font-inter text-xs leading-4 px-2.5 h-5">Fully Furnished</li>
                                                            <li className="inline-flex items-center justify-center text-blue-1000 bg-blue-1000/10 rounded-full font-bold font-inter text-xs leading-4 px-2.5 h-5">All Bills Included</li>
                                                            <li className="inline-flex items-center justify-center text-blue-1000 bg-blue-1000/10 rounded-full font-bold font-inter text-xs leading-4 px-2.5 h-5">Near Metro</li>
                                                      </ul>
                                                      <div className="border-t border-b border-solid border-gray36 py-4 mt-6">
                                                            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                                                                  <li className="flex items-center gap-3">
                                                                        <span className="bg-blue135 rounded-xl flex items-center justify-center w-10 h-10">
                                                                              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                              </svg>
                                                                        </span>
                                                                        <div className="">
                                                                              <span className="block text-gray24 font-normal text-sm leading-5">Size</span>
                                                                              <h4 className="text-black-1100 font-bold lg:text-base text-sm font-inter leading-6">28 m²</h4>
                                                                        </div>
                                                                  </li>
                                                                  <li className="flex items-center gap-3">
                                                                        <span className="bg-blue135 rounded-xl flex items-center justify-center w-10 h-10">

                                                                              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1.33301 2.66675V13.3334" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M1.33301 5.33325H13.333C13.6866 5.33325 14.0258 5.47373 14.2758 5.72378C14.5259 5.97383 14.6663 6.31296 14.6663 6.66659V13.3333" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M1.33301 11.3333H14.6663" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M4 5.33325V11.3333" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                              </svg>
                                                                        </span>
                                                                        <div className="">
                                                                              <span className="block text-gray24 font-normal text-sm leading-5">Bedrooms</span>
                                                                              <h4 className="text-black-1100 font-bold lg:text-base text-sm font-inter leading-6">1</h4>
                                                                        </div>
                                                                  </li>
                                                                  <li className="flex items-center gap-3">
                                                                        <span className="bg-blue135 rounded-xl flex items-center justify-center w-10 h-10">
                                                                              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M6.66634 2.66675L5.33301 4.00008" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M11.333 12.6667V14.0001" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M1.33301 8H14.6663" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M4.66699 12.6667V14.0001" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M6.00033 3.33336L5.08099 2.41403C4.8882 2.22034 4.64341 2.08667 4.37625 2.02919C4.10908 1.97171 3.83098 1.99288 3.57559 2.09014C3.3202 2.1874 3.09847 2.35659 2.93722 2.57722C2.77596 2.79786 2.6821 3.0605 2.66699 3.33336V11.3334C2.66699 11.687 2.80747 12.0261 3.05752 12.2762C3.30756 12.5262 3.6467 12.6667 4.00033 12.6667H12.0003C12.3539 12.6667 12.6931 12.5262 12.9431 12.2762C13.1932 12.0261 13.3337 11.687 13.3337 11.3334V8.00003" stroke="#0A91FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                                              </svg>
                                                                        </span>
                                                                        <div className="">
                                                                              <span className="block text-gray24 font-normal text-sm leading-5">Bathrooms</span>
                                                                              <h4 className="text-black-1100 font-bold lg:text-base text-sm font-inter leading-6">1</h4>
                                                                        </div>
                                                                  </li>
                                                                  <li className="flex items-center gap-3">
                                                                        <span className="bg-blue135 rounded-xl flex items-center justify-center w-10 h-10">
                                                                              <Image src="/images/user-icon2.svg" alt="Image" width={20} height={20} />
                                                                        </span>
                                                                        <div className="">
                                                                              <span className="block text-gray24 font-normal text-sm leading-5">Capacity</span>
                                                                              <h4 className="text-black-1100 font-bold lg:text-base text-sm font-inter leading-6">2 guests</h4>
                                                                        </div>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                      <div className="py-6">
                                                            <h4 className="text-black-1100 font-inter font-bold text-base leading-6 mb-2">About this property</h4>
                                                            <p className="text-gray24 font-inter font-normal sm:text-base text-sm leading-6.5">Beautiful fully-furnished studio apartment in the heart of the historic Marais district. Bright and airy with<br />high ceilings, exposed beams, and modern amenities. Perfect for students or young professionals looking<br />for a central Paris location with easy access to public transport, shops, and restaurants.</p>
                                                      </div>
                                                      <div className="">
                                                            <h4 className="text-black-1100 font-inter font-bold text-base leading-6 mb-2">Amenities</h4>
                                                            <ul className="grid sm:grid-cols-3 grid-cols-2 gap-3">
                                                                  <li className="flex items-center gap-2">
                                                                        <span className="bg-blue135 rounded-xl w-8 h-8 flex items-center justify-center"><Image src="/images/wifi-icon.svg" alt="Image" width={16} height={16} /></span>
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">WiFi</p>
                                                                  </li>
                                                                  <li className="flex items-center gap-2">
                                                                        <span className="bg-blue135 rounded-xl w-8 h-8 flex items-center justify-center"><Image src="/images/wave-icon.svg" alt="Image" width={16} height={16} /></span>
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Washing Machine</p>
                                                                  </li>
                                                                  <li className="flex items-center gap-2">
                                                                        <span className="bg-blue135 rounded-xl w-8 h-8 flex items-center justify-center"><Image src="/images/Air-Conditioning.svg" alt="Image" width={16} height={16} /></span>
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Air Conditioning</p>
                                                                  </li>
                                                                  <li className="flex items-center gap-2">
                                                                        <span className="bg-blue135 rounded-xl w-8 h-8 flex items-center justify-center"><Image src="/images/tv.svg" alt="Image" width={16} height={16} /></span>
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">TV</p>
                                                                  </li>
                                                                  <li className="flex items-center gap-2">
                                                                        <span className="bg-blue135 rounded-xl w-8 h-8 flex items-center justify-center"><Image src="/images/coffee-cup.svg" alt="Image" width={16} height={16} /></span>
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Coffee Machine</p>
                                                                  </li>
                                                                  <li className="flex items-center gap-2">
                                                                        <span className="bg-blue135 rounded-xl w-8 h-8 flex items-center justify-center"><Image src="/images/car.svg" alt="Image" width={16} height={16} /></span>
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Parking</p>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                      <div className="grid grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-blue135 rounded-xl sm:p-4 p-3">
                                                                  <p className="text-gray24 font-normal sm:text-sm text-xs leading-5 mb-1">Energy Rating (DPE)</p>
                                                                  <span className="text-white font-bold text-base leading-6 inline-flex items-center justify-center w-9.25 h-8 bg-yellow40 rounded-sm">C</span>
                                                            </div>
                                                            <div className="bg-blue135 rounded-xl sm:p-4 p-3">
                                                                  <p className="text-gray24 font-normal sm:text-sm text-xs leading-5 mb-1">Gas Emission (GES)</p>
                                                                  <span className="text-white font-bold text-base leading-6 inline-flex items-center justify-center w-9.25 h-8 bg-purple14 rounded-sm">B</span>
                                                            </div>
                                                      </div>
                                                      <div className="p-4 rounded-xl mt-6 bg-blue-1000/5 border border-solid border-blue-1000/20">
                                                            <h4 className="text-black-1100 font-inter font-bold text-base leading-6 mb-2">Financial Summary</h4>
                                                            <ul>
                                                                  <li className="flex items-center justify-between mb-2">
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Monthly Rent</p>
                                                                        <span className="text-black-1100 font-medium text-sm leading-5 block">€950</span>
                                                                  </li>
                                                                  <li className="flex items-center justify-between mb-2">
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Monthly Charges</p>
                                                                        <span className="text-black-1100 font-medium text-sm leading-5 block">€80</span>
                                                                  </li>
                                                                  <li className="flex items-center justify-between border-t border-solid border-gray36 pt-2 mb-2">
                                                                        <p className="text-black-1100 font-inter font-medium text-sm leading-5">Total Monthly</p>
                                                                        <span className="text-blue-1000 font-bold text-sm leading-5 block">€1,030</span>
                                                                  </li>
                                                                  <li className="flex items-center justify-between">
                                                                        <p className="text-gray24 font-inter font-normal text-sm leading-5">Security Deposit</p>
                                                                        <span className="text-black-1100 font-medium text-sm leading-5 block">€950</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                      <p className="text-gray24 font-normal font-inter text-sm leading-5 mt-6">Available from: <span className="text-green238 font-medium">January 15, 2026</span></p>
                                                </div>
                                          </div>
                                          <div className="2xl:max-w-[384px] max-w-full w-full">
                                                <div className="bg-white rounded-xl shadow-284xl">
                                                      <div className="flex items-center justify-between pt-6 pl-6 pr-2">
                                                            <h4 className="text-black-1100 font-bold sm:text-lg text-sm leading-7 flex items-center gap-1">Completion Checklist <span className="text-gray24 sm:text-sm text-xs leading-5 font-normal">7/8 complete</span></h4>
                                                            <span className="text-green2381 font-medium font-inter text-sm leading-5 flex items-center gap-1.5"><span className="flex items-center justify-center w-4 h-4"> <Image src="/images/checkgreen2.svg" alt="Image" width={16} height={16} /> </span> Ready</span>
                                                      </div>
                                                      <div className="px-6 pb-6 pt-4">
                                                            <div className="w-full bg-gray-1500 relative rounded-full h-2">
                                                                  <div className="bg-green2381 h-full w-[90%] rounded-full absolute left-0 top-0"></div>
                                                            </div>
                                                            <div className="mt-6">
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between">General information completed</h5>
                                                                  </div>
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between">Property details added</h5>
                                                                  </div>
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between">Financial terms set</h5>
                                                                  </div>
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between">Tenant criteria defined</h5>
                                                                  </div>
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between">Photos uploaded (minimum 5)</h5>
                                                                  </div>
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between">Description added</h5>
                                                                  </div>
                                                                  <div className="bg-green238/5 rounded-xl p-3 flex items-center gap-3 mb-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-green2381"><Image src="/images/check-white.svg" alt="Image" width={16} height={16} className="h-2" /></span>
                                                                        <h5 className="text-black-1100 font-medium font-inter text-sm leading-5 flex items-center justify-between flex-1 w-full">Property verification requested <span className="font-normal text-xs leading-4 text-gray24">Optional</span></h5>
                                                                  </div>
                                                                  <div className="bg-gray-1500/5 rounded-xl p-3 flex items-center gap-3">
                                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-gray36"></span>
                                                                        <h5 className="text-gray24 font-medium font-inter text-sm leading-5 flex items-center justify-between flex-1 w-full">Visibility boost selected <span className="font-normal text-xs leading-4 text-gray24">Optional</span></h5>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="bg-white rounded-xl shadow-284xl mt-6 p-6">
                                                      <h4 className="text-black-1100 font-inter font-bold text-lg leading-7 mb-4">Ready to Publish?</h4>
                                                      <Link href={'#'} className="font-bold text-base gap-2 rounded-xl text-white flex items-center justify-center bg-blue-1000 h-12 hover:bg-blue-1000/90 hover:shadow-29xl transition-all duration-500 ease-in-out" onClick={() => setIsOpenVerify(true)}><Image src="/images/plane-icon.svg" alt="Image" width={16} height={16} /> Publish Now</Link>
                                                      <Link href={'#'} className="flex items-center justify-center h-12 border-2 border-solid border-blue-1000 text-blue-1000! font-bold! text-base! gap-2 rounded-xl! bg-transparent hover:bg-blue-1000/5! hover:shadow-none mt-3" onClick={() => setIsOpenSchedule(true)}><Image src="/images/clock-blue.svg" alt="Image" width={16} height={16} /> Schedule Publication</Link>
                                                      <Link href={'#'} className="flex items-center justify-center text-gray24 font-medium text-base leading-6 font-inter gap-2 bg-gray33 hover:bg-gray-1500/80 border border-solid border-gray36 rounded-xl h-12 mt-3"><Image src="/images/save-icon.svg" alt="Image" width={16} height={16} /> Save as Draft</Link>
                                                      <div className="pt-4 border-t border-solid border-gray36 mt-4">
                                                            <Link href={'#'} className="group flex transition-all duration-500 ease-in-out items-center justify-center text-gray24 font-medium text-sm leading-6 font-inter gap-2 hover:bg-blue135 hover:text-black-1100  rounded-xl h-11"><Image src="/images/left-arrow-gray.svg" alt="Image" width={16} height={16} className="h-2.5 group-hover:brightness-0" /> Back to Visibility Settings</Link>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>


                  <Dialog
                        open={isOpenVerify}
                        onClose={() => setIsOpenVerify(false)}
                        className="relative z-50">
                        <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"/>

                        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-auto">
                              <DialogPanel
                                    className="w-full max-w-123.75 rounded-2xl bg-white px-8 py-6 transition-all duration-300 data-closed:scale-95 data-closed:opacity-0">
                                    <div className="text-center">
                                          <span className="flex items-center justify-center">
                                                <Image src="/images/success-icon.svg" alt="Image" width={128} height={128} />
                                          </span>
                                          <DialogTitle className="sm:text-[30px] text-2xl font-inter leading-9 font-medium text-black-1000 mt-5">
                                                Published Successfully! 🎉
                                          </DialogTitle>

                                          <p className="text-gray-1400 font-normal font-inter sm:text-[14.9px] text-sm leading-6 my-7">
                                                Your property listing is now live and visible to potential tenants.
                                          </p>
                                          <Buttons className="text-[15.1px]! max-w-79.5 w-full mx-auto">Done</Buttons>
                                    </div>
                              </DialogPanel>
                        </div>
                  </Dialog>
                  <Dialog
                        open={isOpenSchedule}
                        onClose={() => setIsOpenSchedule(false)}
                        className="relative z-50"
                  >
                        <DialogBackdrop
                              className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
                        />

                        <div className="fixed inset-0 flex items-center justify-center p-6 overflow-x-auto">
                              <DialogPanel
                                    className="w-full max-w-123.75 rounded-2xl relative bg-white sm:px-8 px-4 sm:py-6 py-4 transition-all duration-300 data-closed:scale-95 data-closed:opacity-0">
                                    <Link
                                          href="#"
                                          onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpenSchedule(false);
                                          }}
                                          className="w-4 h-4 absolute top-4 right-4 flex items-center justify-center"
                                    >
                                          <Image src="/images/close-icon.svg" alt="Close" width={16} height={16} />
                                    </Link>
                                    <div className="text-left">
                                          <DialogTitle className="text-xl leading-7 font-inter font-bold text-black-1000">
                                                Schedule Publication
                                                <p className="text-gray24 font-normal font-inter text-sm leading-5 mt-1.5">
                                                      Choose when your property listing should go live.
                                                </p>
                                          </DialogTitle>
                                          <div className="mt-9">
                                                <div className="mb-4.5">
                                                      <label className="block black-1100 font-inter font-medium text-sm leading-5 mb-2.5">Publication Date</label>
                                                      <div className="relative">
                                                            <input type="text" className="text-gray24 shadow-30xl placeholder:text-gray24 font-normal text-sm leading-5 rounded-xl h-11 bg-white border-2 border-solid border-gray36 w-full pl-13 outline-0" placeholder="Select a date" />
                                                            <span className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-5"><Image src="/images/calendar2.svg" alt="Image" width={16} height={16} /></span>
                                                      </div>
                                                </div>
                                                <div className="">
                                                      <label className="block black-1100 font-inter font-medium text-sm leading-5 mb-2.5">Publication Time</label>
                                                      <div className="relative">
                                                            <span className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-5"><Image src="/images/clock-icon.svg" alt="Image" width={16} height={16} /></span>
                                                            <select className="text-gray24 font-normal font-inter text-sm leading-5 rounded-[10px] appearance-none h-11 bg-blue136! text-center border border-solid border-gray36 w-full px-13 outline-0">
                                                                  <option>Select a time</option>
                                                            </select>
                                                            <span className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-5"><Image src="/images/down-arrow.svg" alt="Image" width={16} height={16} /></span>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="mt-8">
                                                <ul className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                                                      <li><Link href={"#"} className="flex items-center justify-center h-11 rounded-xl border-2 border-solid border-gray36 text-black-1100 font-medium font-inter text-sm leading-5 hover:border-blue-1000/30 hover:bg-blue135 transition-all duration-500 ease-in-out">Cancel</Link></li>
                                                      <li>  <Buttons className="rounded-xl! h-11! opacity-50">Schedule Publication</Buttons></li>
                                                </ul>
                                          </div>



                                    </div>
                              </DialogPanel>
                        </div>
                  </Dialog>
            </>

      );
}
