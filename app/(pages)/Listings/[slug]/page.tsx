"use client"
import VerifyPropertyModel from '@/app/components/ListingComponents/VerifyPropertyModel'
import PrimaryLink from '@/app/ui/PrimaryLink'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ListingDetailPage = () => {

      const [isOpenVerify, setIsOpenVerify] = useState(false);


  return (
        <div className="flex-1">
         <div className="pl-3 xl:pr-9 pr-3 py-6">
          <div className="flex items-center justify-between">
            <div className="">
              <h4 className="text-black-1100 font-inter font-bold sm:text-2xl text-lg sm:leading-8 leading-6 mb-0.5">Property Listings</h4>
              <ul className="flex items-center gap-2 mt-0.5">
                <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"/Listings"}>My Listings</Link> </li>
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
                  <PrimaryLink onClick={()=>setIsOpenVerify(true)} className="h-10 w-auto! inline-flex hover:gap-2 transition-all duration-500 ease-in-out gap-1.5 px-4 bg-blue15 text-white">
                    Verify now <img src="../images/right-arrow.svg" alt="" />
                  </PrimaryLink>
                </div>
                <div className="rounded-xl border border-solid border-gray27 mt-5">
                  <div className="flex flex-col relative">
                    <div className="w-full">
                    <Image width={718} height={400} src="/images/apartment-bg.jpg" alt="" className="rounded-t-xl w-full" />
                    </div>
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
                    <p className="text-blue17 font-inter font-medium text-sm leading-5 gap-2">{`Get the "Verified Property" badge`}</p>
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
                    className="h-11 flex items-center justify-center rounded-lg hover:gap-3 gap-2 w-full px-4 bg-blue15 transition-all duration-500 ease-in-out text-white text-sm leading-5 font-semibold font-inter hover:shadow-3xl hover:bg-blue-1000/90">
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

        <VerifyPropertyModel isOpenVerify={isOpenVerify} setIsOpenVerify={setIsOpenVerify} />
        </div>
  )
}

export default ListingDetailPage