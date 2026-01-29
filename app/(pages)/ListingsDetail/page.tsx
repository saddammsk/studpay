"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import PropertyRadio from "@/app/components/PropertyRadio";
import Buttons from "@/app/ui/Buttons";
import Link from "next/link";

export default function Listing() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenVerify, setIsOpenVerify] = useState(false);
  const [file, setFile] = useState(null);



  return (
    <>
      <div className="bg-gray15 font-dm-sans xl:pl-64 md:pl-50 pt-16">
        <Sidebar isOpen={isOpen} />
        <header className="fixed top-0 left-0 z-10 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
          <div className="xl:px-6 md:px-3 px-4 flex items-center justify-between">
            <div className="">
              <h4 className="text-black-1000 font-dm-sans font-semibold md:text-lg text-base md:leading-7 leading-5 tracking-[-0.45px]">Notifications</h4>
              <p className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Welcome back, Partner</p>
            </div>
            <div className="flex items-center md:gap-4 gap-2.5">
              <div className="">
                <a href="#" className="flex items-center justify-center md:gap-2 text-black-1000 font-medium text-sm rounded-lg bg-gray-1200 leading-5 md:px-4 md:py-2.5 md:w-auto md:h-auto w-6 h-6">
                  <img src="../images/wallet.svg" alt="" className="md:h-auto h-3.5" />
                  <span className="md:flex hidden items-center">€12 450,00</span>
                </a>
              </div>
              <a href="#" className="flex items-center justify-center md:w-10 w-6 md:h-10 h-6 relative rounded-md">
                <img src="../images/notification-icon.svg" alt="" className="md:h-auto h-3.5" />
                <span className="text-white absolute -top-1 -right-1 flex items-center justify-center font-medium md:text-xs text-[10px] leading-4 bg-blue-1100 md:w-5 w-4 md:h-5 h-4 rounded-full">3</span>
              </a>
              <UserDropMenu />
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                className="md:hidden flex items-center"
              >
                <img src="../images/menu-icon.svg" alt="" className="h-5" />
              </a>


            </div>
          </div>
        </header>
        <div className="pl-3 xl:pr-9 pr-3 py-6">
          <div className="flex items-center justify-between">
            <div className="">
              <h4 className="text-black-1100 font-inter font-bold sm:text-2xl text-lg sm:leading-8 leading-6 mb-0.5">Property Listings</h4>
              <ul className="flex items-center gap-2 mt-0.5">
                <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={""}>My Listings</Link> </li>
                <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                <li className="text-black15 font-inter text-sm font-normal leading-5">Modern Downtown Apartm…</li>
              </ul>
            </div>

          </div>
          <div className="py-6">
            <div className="max-w-277.5 w-full mx-auto flex lg:flex-row flex-col gap-6">
              <div className="w-full flex-1">
                <div className="border border-solid border-blue15 flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between rounded-xl p-4 bg-linear-to-r from-blue16 from-0% via-blue16/80 via-50% to-blue16/60 to-100%">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center bg-blue15/15 rounded-xl w-10 h-10 shadow-16xl"><img src="../images/eyes-icon.svg" alt="" /> </span>
                    <div className="">
                      <h4 className="text-black15/70 font-semibold text-sm leading-5 mb-0.5 flex items-center gap-2"><span className="text-blue15 block">47 people</span>viewed your listing <img src="../images/star-icon.svg" alt="" /> </h4>
                      <p className="text-gray26 font-normal text-xs leading-4">Verify now to convert views into applications</p>
                    </div>
                  </div>
                  <Buttons href="/" className="h-10 w-auto! inline-flex hover:gap-2 transition-all duration-500 ease-in-out gap-1.5 px-4 bg-blue-1200 text-white">
                    Add Listing <img src="../images/right-arrow.svg" alt="" />
                  </Buttons>
                </div>
                <div className="rounded-xl border border-solid border-gray27 mt-5">
                  <div className="flex flex-col relative">
                    <img src="../images/apartment-bg.jpg" alt="" className="rounded-t-xl w-full" />
                    <div className="absolute bottom-0 left-0 w-full p-3">
                      <ul className="flex items-center gap-2">
                        <li className="bg-white flex items-center text-gray26 font-inter font-medium text-xs gap-2 rounded-[10px] h-8 px-3">
                          <img src="../images/eyes-icon.svg" alt="" />
                          <strong className="text-black15 font-semibold">47</strong>
                          views
                        </li>
                        <li className="bg-white flex items-center text-gray26 font-inter font-medium text-xs gap-2 rounded-[10px] h-8 px-3">
                          <img src="../images/calendargray.svg" alt="" />
                          2 days ago
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sm:p-5 p-4">
                    <div className="flex sm:flex-row flex-col sm:items-center justify-between">
                      <div className="">
                        <h4 className="text-black15 font-inter  font-bold text-lg leading-[22.5px]">Modern Downtown Apartment</h4>
                        <p className="text-gray26 font-normal font-inter text-sm leading-normal flex items-center gap-1.5 mt-[6.5px]"><img src="../images/location.svg" alt="" className="h-4" /> 123 Main Street, New York, NY 10001</p>
                      </div>
                      <div className="sm:mt-0 mt-5">
                        <h5 className="text-blue15 font-bold font-inter text-2xl sm:text-left text-right leading-8">$2,850</h5>
                        <span className="text-gray26 block text-right font-inter font-medium text-xs leading-4">/month</span>
                      </div>
                    </div>
                    <div className="border-t border-solid border-gray27 pt-4 mt-4">
                      <ul className="flex items-center sm:gap-4 gap-2.5">
                        <li className="flex items-center gap-2">
                          <span className="bg-gray28 rounded-[10px] w-8 h-8 flex items-center justify-center"><img src="../images/bed-icon.svg" alt="" /> </span>
                          <p className="text-gray26 font-inter font-normal text-xs leading-4 flex items-center gap-3.5"><strong className="text-black15 font-medium block">2</strong>beds</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="bg-gray28 rounded-[10px] w-8 h-8 flex items-center justify-center"><img src="../images/bath-icon.svg" alt="" /></span>
                          <p className="text-gray26 font-inter font-normal text-xs leading-4 flex items-center gap-3.5"><strong className="text-black15 font-medium block">2</strong>baths</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="bg-gray28 rounded-[10px] w-8 h-8 flex items-center justify-center"><img src="../images/sqft.svg" alt="" /></span>
                          <p className="text-gray26 font-inter font-normal text-xs leading-4 flex items-center gap-3.5"><strong className="text-black15 font-medium block">1200</strong>sqft</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="">
                    <Link href={"#"} className="group p-4 rounded-lg bg-gray29 hover:bg-blue16 hover:shadow-15xl transition-all duration-500 ease-in-out border border-solid border-gray27 w-full flex flex-col items-center justify-center">
                      <img src="../images/edit-listing-icon.svg" alt="" />
                      <h4 className="group-hover:text-blue17 transition-all duration-500 ease-in-out text-black15 font-medium mt-2 text-xs leading-4 font-inter">Edit listing</h4>
                    </Link>
                  </div>
                  <div className="">
                    <Link href={"#"} className="group p-4 rounded-lg bg-gray29 hover:bg-blue16 hover:shadow-15xl transition-all duration-500 ease-in-out border border-solid border-gray27 w-full flex flex-col items-center justify-center">
                      <img src="../images/applications-user.svg" alt="" />
                      <h4 className="group-hover:text-blue17 transition-all duration-500 ease-in-out text-black15 font-medium mt-2 text-xs leading-4 font-inter">Applications</h4>
                    </Link>
                  </div>
                  <div className="">
                    <Link href={"#"} className="group p-4 rounded-lg bg-gray29 hover:bg-blue16 hover:shadow-15xl transition-all duration-500 ease-in-out border border-solid border-gray27 w-full flex flex-col items-center justify-center">
                      <img src="../images/Messages.svg" alt="" />
                      <h4 className="group-hover:text-blue17 transition-all duration-500 ease-in-out text-black15 font-medium mt-2 text-xs leading-4 font-inter">Messages</h4>
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-white border border-solid border-gray27 p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-black15 font-semibold text-base font-inter leading-6">Listing Details</h4>
                    <Link href={'#'} className="hover:bg-blue16 rounded-lg listing-btn transition-all duration-500 ease-in-out flex items-center justify-center w-8 h-8"><img src="../images/vertical-dot.svg" alt="" /> </Link>
                  </div>
                  <div className="w-full mt-5">
                    <img src="../images/ListingDetails-img.png" alt="" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="xl:max-w-90 lg:max-w-62.5 max-w-full w-full">
                <div className="border border-solid border-gray27 hover:shadow-15xl transition-all duration-500 ease-in-out cursor-pointer bg-white rounded-xl shadow-14xl xl:p-6 lg:p-4 p-6 relative after:absolute after:content='' after:w-full after:h-1.5 after:top-0 after:left-0 after:bg-linear-to-r after:from-blue15 after:from-0% after:via-blue15/80 after:via-50% after:to-blue15/60 after:to-100% after:rounded-t-xl">
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
                  <Link onClick={() => setIsOpenVerify(true)}
                    href={"#"}
                    className="h-11 flex items-center justify-center rounded-lg hover:gap-3 gap-2 w-full px-4 bg-blue-1200 transition-all duration-500 ease-in-out text-white text-sm leading-5 font-semibold font-inter hover:shadow-3xl hover:bg-blue-1000/90">
                    Verify this property
                    <img src="../images/right-arrow.svg" alt="" />
                  </Link>
                </div>
                <div className="border border-solid border-gray27 bg-white rounded-xl my-5 p-5">
                  <h4 className="text-black15 font-semibold text-base leading-6 flex items-center gap-2">Performance <span className="text-gray26 text-xs leading-4 font-no]">Last 7 days</span></h4>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray28/50 hover:bg-gray28 transition-all duration-500 ease-in-out p-3.5 rounded-xl">
                      <h4 className="text-black15 font-inter font-bold text-2xl leading-8 mb-2.5">47</h4>
                      <span className="block text-gray26 font-inter font-normal text-xs leading-4">Total views</span>
                    </div>
                    <div className="bg-gray28/50 hover:bg-gray28 transition-all duration-500 ease-in-out p-3.5 rounded-xl">
                      <h4 className="text-black15 font-inter font-bold text-2xl leading-8 mb-2.5">❤ 12</h4>
                      <span className="block text-gray26 font-inter font-normal text-xs leading-4">Saved by</span>
                    </div>
                    <div className="bg-gray28/50 hover:bg-gray28 transition-all duration-500 ease-in-out p-3.5 rounded-xl">
                      <h4 className="text-black15 font-inter font-bold text-2xl leading-8 mb-2.5">📄 3</h4>
                      <span className="block text-gray26 font-inter font-normal text-xs leading-4">Applications</span>
                    </div>
                    <div className="bg-gray28/50 hover:bg-gray28 transition-all duration-500 ease-in-out p-3.5 rounded-xl">
                      <h4 className="text-black15 font-inter font-bold text-2xl leading-8 mb-2.5">💬 8</h4>
                      <span className="block text-gray26 font-inter font-normal text-xs leading-4">Messages</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue16/50 border border-solid border-blue16 p-5 rounded-xl">
                  <h4 className="text-black15 font-semibold text-sm leading-5">💡 Pro tip</h4>
                  <p className="text-gray26 font-normal font-inter text-sm leading-[22.8px] mt-1.5">Verified listings receive up to 40% more
                    applications. Complete the verification to stand
                    out from other landlords.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VERIFY MODAL */}
      <Dialog
        open={isOpenVerify}
        onClose={() => setIsOpenVerify(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <DialogBackdrop
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        {/* Modal wrapper */}
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-auto">
          <DialogPanel
            className="
            w-full max-w-2xl rounded-4xl bg-white sm:p-10 px-4 py-6
            transition-all duration-300
            data-closed:scale-95 data-closed:opacity-0
          "
          >
            <div className="text-center">
              <DialogTitle className="sm:text-[30px] text-2xl font-outfit leading-9 font-bold text-black16">
                Verify this property
              </DialogTitle>

              <p className="text-gray30 font-normal font-outfit sm:text-base text-sm leading-6 mt-2">
                Increase your credibility and get the "Verified Property" badge
              </p>
            </div>
            <div className="pt-8">
              <div className="">
                <ul className="flex items-center justify-center sm:gap-22 gap-13.5 relative after:absolute after:content='' after:left-1/2 after:-translate-1/2 after:top-2.5 after:w-[60%] after:h-0.5 after:bg-gray31">
                  <li className="bg-white relative z-50 sm:px-3 px-1.5">
                    <span className="flex items-center justify-center text-white font-semibold rounded-full bg-blue18 sm:w-10 w-8 sm:h-10 h-8 mx-auto">1</span>
                    <h4 className="text-black16 font-medium font-outfit sm:text-sm text-xs leading-5 mt-2">Choose document</h4>
                  </li>
                  <li className="bg-white relative z-50 sm:px-3 px-1.5">
                    <span className="flex items-center justify-center text-gray30 font-semibold rounded-full bg-gray31 sm:w-10 w-8 sm:h-10 h-8 mx-auto">2</span>
                    <h4 className="text-gray30 font-medium font-outfit sm:text-sm text-xs leading-5 mt-2">Upload</h4>
                  </li>
                  <li className="bg-white relative z-50 sm:px-3 px-1.5">
                    <span className="flex items-center justify-center text-gray30 font-semibold rounded-full bg-gray31 sm:w-10 w-8 sm:h-10 h-8 mx-auto">3</span>
                    <h4 className="text-gray30 font-medium font-outfit sm:text-sm text-xs leading-5 mt-2">Done</h4>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <div className="">
                  <h4 className="text-black16 font-outfit font-semibold sm:text-lg text-base leading-7">Choose a document to verify your property</h4>
                  <div className="">
                    <PropertyRadio />
                  </div>
                  <div className="bg-gray33 rounded-2xl mt-8 flex items-start gap-3 p-4">
                    <span className="flex items-center justify-center w-5 h-5"><img src="../images/sheild-green.svg" alt="" /> </span>
                    <p className="flex-1 w-full text-gray30 font-outfit font-normal text-sm leading-5">
                      You only need to upload one document. Documents are encrypted and deleted after
                      verification.
                    </p>
                  </div>
                  <div className="mt-8">
                    <ul className="flex items-center justify-between">
                      <li>
                        <Link href={'#'} className="flex items-center justify-center text-gray30 font-outfit font-medium text-base leading-4">Cancel</Link>
                      </li>
                      <li>
                        <Buttons onClick={() => setIsOpenVerify(false)} href="#" className="h-11 inline-flex px-8">
                          Continue
                        </Buttons>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden">
                  <h4 className="text-black16 font-outfit font-semibold sm:text-lg text-base leading-7">Upload your property tax document</h4>
                  <div className="bg-blue19 border border-solid border-blue18/20 mt-4 rounded-2xl flex items-center gap-3 p-4">
                    <div className="flex items-center flex-1 w-full gap-4">
                      <span className='bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center'>
                        <img src="../images/document-blue.svg" alt='' />
                      </span>
                      <div className="flex-1 w-full">
                        <h4 className="font-semibold font-outfit text-base leading-6 text-black16">Property tax document</h4>
                        <p className='text-gray30 font-outfit font-normal text-sm leading-5'>Selected document type</p>
                      </div>
                    </div>
                    <Link href={"#"} className="flex items-center justify-center w-7 h-7"><img src="../images/cross-icon.svg" alt="" /> </Link>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-4 pb-8">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full sm:p-8 p-4 border-2 border-dashed border-blue18/30 bg-blue18/5 rounded-2xl cursor-pointer transition-colors"
                    >
                      <div className="flex items-center mb-4 justify-center bg-blue18/10 rounded-full w-16 h-16">
                        <img src="../images/upload.svg" alt="" />
                      </div>
                      <p className="text-black16 font-outfit font-semibold text-lg leading-7">
                        Drag and drop your file here
                      </p>
                      <p className="text-gray30 font-outfit font-normal text-base leading-6 mb-4 mt-2">
                        or click to browse from your computer
                      </p>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                      />
                      <Buttons href="#" className="text-black16! hover:text-white! font-outfit font-medium text-sm leading-5 border border-solid border-gray32 bg-lightblue12 h-10 w-31.75!">Browse Files</Buttons>
                    </label>
                    <ul className="flex items-center gap-3 mt-4">
                      <li><span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">PDF</span></li>
                      <li><span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">JPG</span></li>
                      <li><span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">PNG</span></li>
                      <li><span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">Max 10MB</span></li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="mb-8">
                      <label className="text-black17 font-inter font-normal text-sm leading-3.5 block w-full mb-1.5">Name of Landloard <span className="text-red12">*</span></label>
                      <input type="text" className="text-gray-1400 placeholder:text-gray-1400 font-normal w-full font-inter text-sm leading-normal border border-solid border-gray-1300 bg-gray34 h-10 rounded-[10px] px-3.5" placeholder="Usman" />
                    </div>
                    <div className="">
                      <label className="text-black17 font-inter font-normal text-sm leading-3.5 block w-full mb-1.5">Address <span className="text-red12">*</span></label>
                      <input type="text" className="text-gray-1400 placeholder:text-gray-1400 font-normal w-full font-inter text-sm leading-normal border border-solid border-gray-1300 bg-gray34 h-10 rounded-[10px] px-3.5" placeholder="Marché d'Aligre" />
                    </div>
                  </div>
                  <div className="bg-gray33 rounded-2xl mt-8 flex items-start gap-3 p-4">
                    <span className="flex items-center justify-center w-5 h-5"><img src="../images/sheild-green.svg" alt="" /> </span>
                    <p className="flex-1 w-full text-gray30 font-outfit font-normal text-sm leading-5">
                      You only need to upload one document. Documents are encrypted and deleted after
                      verification.
                    </p>
                  </div>
                  <div className="mt-8">
                    <ul className="flex items-center justify-between">
                      <li>
                        <Link href={'#'} className="flex items-center justify-center text-gray30 font-outfit font-medium text-base leading-4">Cancel</Link>
                      </li>
                      <li>
                        <Buttons onClick={() => setIsOpenVerify(false)} href="#" className="h-11 inline-flex px-8">
                          Continue
                        </Buttons>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden">
                  <div className="text-center">
                    <span className="bg-green14/10 w-20 h-20 flex items-center justify-center rounded-full mx-auto"><img src="/images/check-icon2.svg" alt="" className="h-12" /></span>
                    <h4 className="text-black16 font-outfit font-bold text-2xl leading-8 mt-6 mb-3">Verification Complete!</h4>
                    <p className="text-gray30 font-outfit font-normal text-base leading-6 mb-8 max-w-md w-full mx-auto">
                      Your property has been successfully verified. You've earned the
                      "Verified Property" badge.
                    </p>
                    <Link href={'#'} className="text-blue18 font-semibold font-outfit text-base leading-6 flex items-center justify-center gap-2 rounded-full bg-blue18/10 w-46.25 h-10 mx-auto"><img src="../images/badge-icon.svg" alt="" /> Verified Property</Link>
                  </div>

                  <div className="mt-16">
                    <ul className="flex items-center justify-center gap-4">
                      <li>
                        <Buttons onClick={() => setIsOpenVerify(false)} href="#" className="h-11 inline-flex px-8">
                          View My Property
                        </Buttons>
                      </li>
                      <li>
                        <Link href={'#'} className="inline-flex items-center justify-center rounded-[10px] bg-lightblue12 border border-solid border-gray32 h-11 text-black16 font-outfit font-medium text-sm leading-5 px-8">Cancel</Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
