"use client";
import { useState } from "react";
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import Link from "next/link";
import Image from 'next/image'
import PrimaryLink from "@/app/ui/PrimaryLink";

export const PropertyMediaVirtualTour = () => {
      const [isOpenVerify, setIsOpenVerify] = useState(false);

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
                              <div className="flex lg:flex-row flex-col items-start gap-11.25 lg:mt-13.5 mt-10">
                                    <div className="flex-1 w-full bg-green236/50 p-6 rounded-xl flex items-start gap-3">
                                          <span className="bg-green237/10 rounded-xl w-9 h-9 flex items-center justify-center">
                                                <Image
                                                      src="../images/info-dark.svg"
                                                      alt="Image"
                                                      width={20}
                                                      height={20} />
                                          </span>
                                          <div className="">
                                                <h4 className="text-black24 mb-2 font-inter font-semibold ">Why add a virtual tour?</h4>
                                                <ul>
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma sm:text-base text-sm leading-6 gap-2.5 mb-1">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Increase engagement by 300%</p>
                                                      </li>
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma sm:text-base text-sm leading-6 gap-2.5 mb-1">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Attract serious buyers faster</p>
                                                      </li>
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma sm:text-base text-sm leading-6 gap-2.5">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Increase engagement by 300%</p>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="lg:max-w-90 max-w-full w-full xl:-mt-30.75 border border-solid border-gray27 hover:shadow-15xl transition-all duration-500 ease-in-out cursor-pointer bg-white rounded-xl shadow-14xl xl:p-6 lg:p-4 p-6 relative after:absolute after:content='' after:w-full after:h-1.5 after:top-0 after:left-0 after:bg-linear-to-r after:from-blue15 after:from-0% after:via-blue15/80 after:via-50% after:to-blue15/60 after:to-100% after:rounded-t-xl">
                                          <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center rounded-xl w-11 h-11 shadow-16xl bg-linear-to-br from-blue15/20 to-blue15/5"><img src="../images/sheild-icon.svg" alt="" /> </span>
                                                <div className="flex-1 w-full">
                                                      <span className="text-blue15 font-inter font-semibold text-[11px] leading-4 tracking-[0.55px] uppercase">Boost credibility</span>
                                                      <h4 className="text-black15 font-inter font-semibold text-base leading-6">Verify this property</h4>
                                                </div>
                                          </div>
                                          <div className="flex items-center gap-2 mt-4 mb-5 border border-solid border-blue16 bg-blue16/50 rounded-[10px] p-3">
                                                <span className="bg-lightgray12/10 rounded-full w-6 h-6 flex items-center justify-center"><img src="../images/checkgreen.svg" alt="" /></span>
                                                <p className="text-blue17 font-inter font-medium text-sm leading-5 gap-2">Get the "Verified Property" badge</p>
                                          </div>
                                          <ul className="mb-6">
                                                <li className="flex items-center gap-3 mb-3">
                                                      <span className="bg-lightgray12/10 rounded-[10px] flex items-center justify-center w-8 h-8"><img src="../images/priceup.svg" alt="" /></span>
                                                      <p className="text-black15/90 font-normal font-inter text-sm leading-5">Up to 40% more applications</p>
                                                </li>
                                                <li className="flex items-center gap-3 mb-3">
                                                      <span className="bg-lightgray12/10 rounded-[10px] flex items-center justify-center w-8 h-8"><img src="../images/trustUser.svg" alt="" /></span>
                                                      <p className="text-black15/90 font-normal font-inter text-sm leading-5">Increased tenant trust</p>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                      <span className="bg-lightgray12/10 rounded-[10px] flex items-center justify-center w-8 h-8"><img src="../images/starRnak.svg" alt="" /></span>
                                                      <p className="text-black15/90 font-normal font-inter text-sm leading-5">Higher ranking in search</p>
                                                </li>
                                          </ul>
                                          <Link
                                                href={"#"}
                                                className="h-11 flex items-center justify-center rounded-lg hover:gap-3 gap-2 w-full px-4 bg-blue12 transition-all duration-500 ease-in-out text-white text-sm leading-5 font-semibold font-inter hover:shadow-3xl hover:bg-blue-1000/90">
                                                Verify this property
                                                <img src="../images/right-arrow.svg" alt="" />
                                          </Link>
                                    </div>
                              </div>
                              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-229.5 w-full mx-auto mt-7">
                                    <div>
                                          <Link href={"#"} className="h-full border border-solid border-gray45 bg-white rounded-xl shadow-6xl py-6 lg:px-9.5 px-6 flex flex-col">
                                                <span className="rounded-2xl w-14 h-14 flex items-center justify-center mb-6 bg-linear-to-r from-green237/20 to-green237/6">
                                                      <Image src="../images/upload-green.svg" alt="Image" width={28} height={28} />
                                                </span>
                                                <h4 className="text-black24 font-inter font-semibold text-xl leading-7 mb-1.5">Upload Video</h4>
                                                <p className="text-gray-2200 font-inter font-normal text-sm leading-5">Already have a tour? Upload it
                                                      directly</p>
                                                <ul className="mt-4">
                                                      <li className="flex items-center gap-2 text-black24 font-inter font-medium text-sm leading-5 mb-3">Format: <span className="text-gray-2200 font-normal">MP4</span></li>
                                                      <li className="flex items-center gap-2 text-black24 font-inter font-medium text-sm leading-5 mb-3">Duration:<span className="text-gray-2200 font-normal">Max 5 minutes</span></li>
                                                      <li className="flex items-center gap-2 text-black24 font-inter font-medium text-sm leading-5">Size: <span className="text-gray-2200 font-normal"> Max 500 MB</span></li>
                                                </ul>
                                          </Link>
                                    </div>
                                    <div>
                                          <Link href={"#"} className="h-full relative border border-solid border-gray45 bg-white rounded-xl shadow-6xl py-6 lg:px-9.5 px-6 flex flex-col">
                                                <span className="rounded-2xl w-14 h-14 flex items-center justify-center mb-6 bg-linear-to-r from-orange20/20 to-orange20/6">
                                                      <Image src="../images/start-dark.svg" alt="Image" width={28} height={28} />
                                                </span>
                                                <span className="absolute top-4 right-7 text-white font-inter font-semibold text-xs leading-4 inline-flex items-center justify-center bg-orange20 rounded-full h-5.5 px-2.5">Popular</span>
                                                <h4 className="text-black24 font-inter font-semibold text-xl leading-7 mb-1.5">StudPay Tool</h4>
                                                <p className="text-gray-2200 font-inter font-normal text-sm leading-5">Create an interactive tour in
                                                      minute</p>
                                                <ul className="mt-4">
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma text-sm leading-5 gap-2 mb-1.5">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Import your photos</p>
                                                      </li>
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma text-sm leading-5 gap-2 mb-1.5">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Add interactive hotspots</p>
                                                      </li>
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma text-sm leading-5 gap-2">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Record audio descriptions</p>
                                                      </li>
                                                </ul>
                                          </Link>
                                    </div>
                                    <div>
                                          <Link href={"#"} onClick={() => setIsOpenVerify(true)} className="border border-solid border-gray45 bg-white rounded-xl shadow-6xl py-6 lg:px-9.5 px-6 flex flex-col">
                                                <span className="rounded-2xl w-14 h-14 flex items-center justify-center mb-6 bg-linear-to-r from-yellow24/20 to-yellow24/6">
                                                      <Image src="../images/camera-yellow.svg" alt="Image" width={28} height={28} />
                                                </span>
                                                <h4 className="text-black24 font-inter font-semibold text-xl leading-7 mb-1.5">Professional Tour</h4>
                                                <p className="text-gray-2200 font-inter font-normal text-sm leading-5">Let experts handle everything</p>
                                                <div className="text-center bg-gray-2300/50 rounded-xl py-4.5 px-4 mt-4">
                                                      <p className="text-gray-2200 font-inter font-normal text-sm leading-5 mb-1.5">Starting from</p>
                                                      <h4 className="text-black24 font-inter font-bold text-2xl leading-8">€99</h4>
                                                </div>
                                                <ul className="mt-4">
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma text-sm leading-5 gap-2 mb-1.5">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">Professional equipment</p>
                                                      </li>
                                                      <li className="text-gray-2200 flex items-center font-inter font-norma text-sm leading-5 gap-2">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <p className="flex-1 w-full">4K quality video</p>
                                                      </li>
                                                </ul>
                                          </Link>
                                    </div>
                              </div>
                        </div>

                  </div>
                  {/* Professional virtual Tour MODAL */}
                  <Dialog
                        open={isOpenVerify}
                        onClose={() => setIsOpenVerify(false)}
                        className="relative z-50"
                  >

                        <DialogBackdrop
                              className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
                        />

                        <div className="fixed inset-0 flex items-start justify-center p-4 overflow-x-auto">
                              <DialogPanel
                                    className="
                        w-full max-w-160 rounded-xl bg-white sm:p-10 p-4
                        transition-all duration-300
                        data-closed:scale-95 data-closed:opacity-0
                      "
                              >
                                    <div className="text-center border-b border-solid border-gray47/50 pb-8.25">
                                          <span className="text-blue-1100 bg-blue-1000/10 inline-flex items-center justify-center h-6 px-3 rounded-full font-inter font-normal text-[11.4px] leading-4">Professional Service</span>
                                          <h5 className="text-gray46 font-normal font-inter text-[12.9px] leading-5 mt-3">Starting from</h5>
                                          <h3 className="text-black27 font-bold font-inter text-[39.9px] leading-12 mt-1 mb-1.5">€99</h3>
                                          <p className="text-gray46 font-normal font-inter text-[13px] leading-5">One-time payment, no hidden fees</p>

                                    </div>
                                    <div className="border-b border-solid border-gray47/50 py-8">
                                          <h4 className="text-gray46 font-normal font-inter text-[13.8px] leading-5 tracking-[0.35px] uppercase">What's included</h4>
                                          <ul className="mt-4">
                                                <li className="flex items-center gap-3 mb-3">
                                                      <span className="w-8 h-8 rounded-full flex items-center justify-center bg-green238/10">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                      </span>
                                                      <p className="text-black27 flex-1 w-full font-normal font-inter text-[15px] leading-6">Professional equipment</p>
                                                </li>
                                                <li className="flex items-center gap-3 mb-3">
                                                      <span className="w-8 h-8 rounded-full flex items-center justify-center bg-green238/10">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                      </span>
                                                      <p className="text-black27 flex-1 w-full font-normal font-inter text-[15px] leading-6">Pr4K quality video</p>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                      <span className="w-8 h-8 rounded-full flex items-center justify-center bg-green238/10">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#29A366" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                      </span>
                                                      <p className="text-black27 flex-1 w-full font-normal font-inter text-[15px] leading-6">Hosted & optimized tour</p>
                                                </li>
                                          </ul>

                                    </div>
                                    <div className="pt-8 pb-6">
                                          <h4 className="text-gray46 font-normal font-inter text-[13.8px] leading-5 tracking-[0.35px] uppercase">How it works</h4>
                                          <ul className="mt-6">
                                                <li className="flex items-start gap-4 mb-6">
                                                      <div className="flex items-center justify-center flex-col gap-2">
                                                            <span className="text-white font-bold font-inter text-sm leading-5 flex items-center justify-center bg-blue-1100 w-10 h-10 rounded-full">1</span>
                                                            <span className="bg-gray47 w-px h-6 flex items-center justify-center"></span>
                                                      </div>
                                                      <div className="flex-1 w-full">
                                                            <h4 className="text-black27 font-normal font-inter text-[15.1px] leading-6 mb-0.5">Schedule a visit</h4>
                                                            <p className="text-gray46 font-inter font-normal text-[12.9px] leading-5">Pick a date and time that works for you</p>
                                                      </div>
                                                </li>
                                                <li className="flex items-start gap-4 mb-6">
                                                      <div className="flex items-center justify-center flex-col gap-2">
                                                            <span className="text-white font-bold font-inter text-sm leading-5 flex items-center justify-center bg-blue-1100 w-10 h-10 rounded-full">2</span>
                                                            <span className="bg-gray47 w-px h-6 flex items-center justify-center"></span>
                                                      </div>
                                                      <div className="flex-1 w-full">
                                                            <h4 className="text-black27 font-normal font-inter text-[15.1px] leading-6 mb-0.5">Photographer records the tour</h4>
                                                            <p className="text-gray46 font-inter font-normal text-[12.9px] leading-5">Our professional captures every detail</p>
                                                      </div>
                                                </li>
                                                <li className="flex items-start gap-4">
                                                      <div className="flex items-center justify-center flex-col gap-2">
                                                            <span className="text-white font-bold font-inter text-sm leading-5 flex items-center justify-center bg-blue-1100 w-10 h-10 rounded-full">3</span>
                                                      </div>
                                                      <div className="flex-1 w-full">
                                                            <h4 className="text-black27 font-normal font-inter text-[15.1px] leading-6 mb-0.5">Tour is delivered and published</h4>
                                                            <p className="text-gray46 font-inter font-normal text-[12.9px] leading-5">Ready to share within 48 hours</p>
                                                      </div>
                                                </li>
                                          </ul>
                                          <div className="bg-gray48/50 rounded-xl p-4 mt-8 flex items-center justify-center">
                                                <p className="text-gray46 font-normal font-inter text-[12.6px] leading-5 flex items-center gap-1 flex-wrap">
                                                      <span className="text-black27 flex items-center">500+</span>
                                                      properties photographed • <span className="text-black27 flex items-center">4.9★</span>
                                                      average rating
                                                </p>
                                          </div>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                                          <li>
                                                <Link href={"#"} className="text-black27 font-inter font-normal text-[15px] leading-6 flex items-center justify-center gap-4 border border-solid border-gray47 rounded-[10px] h-12">
                                                      <Image src="../images/left-arrow.svg" alt="Image" width={16} height={16} className="brightness-0" />
                                                      Back to Media
                                                </Link>
                                          </li>
                                          <li>
                                                <PrimaryLink className="font-normal gap-4 rounded-[10px]">
                                                      <Image src="../images/calendar-white.svg" alt="Image" width={16} height={16} />
                                                      Book a photographer
                                                </PrimaryLink>
                                          </li>
                                    </ul>
                              </DialogPanel>
                        </div>
                  </Dialog>
            </>
      )
}
