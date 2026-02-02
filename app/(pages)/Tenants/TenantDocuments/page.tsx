"use client";
import { useState } from "react"; 
import { TenantDocuments } from "@/app/components/TenantDocuments";
import Image from 'next/image'
import Link from "next/link"; 
import PrimaryLink from "@/app/ui/PrimaryLink";
const tabs = ["Overview", "Lease Details", "Payments", "Documents", "Messages"];


export default function ListingReviewPublish() { 
      const [activeTab, setActiveTab] = useState("Documents");

      return (
            <div className="lg:p-6 p-4">
                  <div className="bg-white rounded-[15px]">
                        <div className="border-b border-solid border-gray-1100 md:p-6 p-4">
                              <div className="">
                                    <h4 className="text-black-1200 font-inter font-bold md:text-[30px] text-2xl leading-9 mb-1">Documents</h4>
                                    <p className="text-gray-1400 font-inter font-normal xl:text-base text-sm leading-6">Tenant and lease-related documents</p>
                              </div>
                        </div>
                  </div>
                  <div className="p-3 mt-3 bg-white">
                        <div className="flex 2xl:flex-row flex-col 2xl:gap-0 gap-6 items-start justify-between border border-solid border-gray54 bg-white shadow-6xl lg:px-6 px-4 pt-8 pb-6 rounded-xl">
                              <div className="flex sm:flex-row flex-col items-start lg:gap-6 gap-4">
                                    <span className="bg-blue-1000/10 w-20 h-20 rounded-full flex items-center justify-center text-blue-1000 font-normal font-inter text-xl leading-7">SJ</span>
                                    <div className="flex-1 w-full">
                                          <div className="flex items-center gap-3 mb-3">
                                                <h4 className="text-black-1200 font-inter font-bold text-2xl leading-8">Sarah Johnson</h4>
                                                <span className="px-2.5 h-5.5 w-fit rounded-full flex border border-solid items-center text-xs font-medium font-inter border-green239 bg-green241 text-green238">Active</span>
                                          </div>
                                          <ul className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-6 gap-4">
                                                <li className="flex items-center gap-2">
                                                      <span className="flex items-center justify-center w-4 h-4">
                                                            <Image
                                                                  src="../images/envelope.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                                  className="group-hover:brightness-0"
                                                            />
                                                      </span>
                                                      <Link href={'mailto:sarah.johnson@email.com'} className="text-gray-1400 font-normal text-sm leading-5">sarah.johnson@email.com</Link>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                      <span className="flex items-center justify-center w-4 h-4">
                                                            <Image
                                                                  src="../images/phone-icon.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                                  className="group-hover:brightness-0"
                                                            />
                                                      </span>
                                                      <Link href={'tel:+1 (555) 123-4567'} className="text-gray-1400 font-normal text-sm leading-5">+1 (555) 123-4567</Link>
                                                </li>
                                          </ul>
                                          <div className="flex items-center gap-2 my-3">
                                                <p className="flex items-center gap-2 text-black-1200 font-inter font-medium text-sm leading-5">
                                                      <span className="flex items-center justify-center w-4 h-4">
                                                            <Image
                                                                  src="../images/location-icon.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                                  className="group-hover:brightness-0"
                                                            />
                                                      </span>
                                                      Sunset Apartments
                                                </p>
                                                <span className="bg-gray-1400 w-1.25 h-1.25 flex items-center rounded-full"></span>
                                                <p className="flex items-center gap-2 text-black-1200 font-inter font-normal text-sm leading-5">Unit 204</p>
                                          </div>
                                          <ul className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-6 gap-4">
                                                <li className="flex items-center gap-2">
                                                      <span className="flex items-center justify-center w-4 h-4">
                                                            <Image
                                                                  src="../images/calendargray.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                                  className="group-hover:brightness-0"
                                                            />
                                                      </span>
                                                      <p className="text-gray-1400 font-normal text-sm leading-5">Move-in: Jan 15, 2024</p>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                      <span className="flex items-center justify-center w-4 h-4">
                                                            <Image
                                                                  src="../images/calendargray.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                                  className="group-hover:brightness-0"
                                                            />
                                                      </span>
                                                      <p className="text-gray-1400 font-normal text-sm leading-5">Move-out: Jan 14, 2025</p>
                                                </li>
                                          </ul>

                                    </div>
                              </div>
                              <div className="sm:w-auto w-full">
                                    <ul className="flex sm:flex-row flex-col sm:w-auto w-full items-center gap-3">
                                          <li className="sm:w-auto w-full">
                                                <Link href={"#"} className="text-black245 xl:px-4 px-2 font-inter font-medium sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-gray-1100 rounded-xl h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out"><Image src="/images/sms.svg" alt="Image" width={16} height={16} className="brightness-0" /> Message Tenant</Link>
                                          </li>
                                          <li className="sm:w-auto w-full">
                                                <PrimaryLink className="gap-2 h-10 rounded-xl lg:px-4 px-3 font-medium!">
                                                      <Image
                                                            src="../images/file-white.svg"
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                      />
                                                      View Lease
                                                </PrimaryLink>
                                          </li>
                                          <li className="sm:w-auto w-full">
                                                <Link href={"#"} className="text-black245 px-4 font-inter font-medium sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-gray-1100 rounded-xl h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out"><Image src="/images/card-dark.svg" alt="Image" width={16} height={16} className="brightness-0" /> View Payments</Link>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="mt-7">
                              <ul className="px-1 py-0.75 inline-flex sm:flex-nowrap flex-wrap items-center border border-gray54 bg-blue-1000/5 rounded-[10px]">
                                    {tabs.map((tab) => (
                                          <li key={tab}>
                                                <Link
                                                      href="#"
                                                      onClick={() => setActiveTab(tab)}
                                                      className={`flex items-center justify-center font-medium font-inter text-sm leading-5 rounded-xl h-8 px-3 transition
                                                            ${activeTab === tab
                                                                  ? "bg-white text-black-1200 shadow-6xl"
                                                                  : "text-black-1200 hover:bg-white hover:shadow-6xl"
                                                            }`}
                                                >
                                                      {tab}
                                                </Link>
                                          </li>
                                    ))}
                              </ul>
                              <div className="lg:mt-8 mt-6">
                                          <TenantDocuments></TenantDocuments>
                              </div>

                        </div>
                  </div>
            </div>
      );
}
