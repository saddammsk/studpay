"use client";
import { useState } from "react";
import TenantsPaymentTable from "@/app/components/TenantsPaymentTable";
import Image from 'next/image'
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
const tabs = ["Overview", "Lease Details", "Payments", "Documents", "Messages"];


export default function ListingReviewPublish() {
      const [activeTab, setActiveTab] = useState("Payments");

      return (
            <div className="lg:p-6 p-4">
                  <div className="bg-white rounded-[15px]">
                        <div className="border-b border-solid border-gray-1100 md:p-6 p-4">
                              <div className="">
                                    <h4 className="text-black-1200 font-inter font-bold md:text-[30px] text-2xl leading-9 mb-1">Payments</h4>
                                    <p className="text-gray-1400 font-inter font-normal xl:text-base text-sm leading-6">Rent, deposit and escrow payment history</p>
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
                              <div className="lg:mt-8 mt-6 grid lg:grid-cols-3 grid-cols-1 2xl:gap-48.75 lg:gap-12 gap-6">
                                    <div className="flex items-start justify-between shadow-31xl bg-white rounded-xl p-6">
                                          <div className="">
                                                <p className="text-gray-2200 font-normal mb-1 text-sm leading-5 flex items-center">Monthly Rent</p>
                                                <h4 className="text-black15 font-bold text-2xl mb-1 leading-8 font-inter">€850.00</h4>
                                                <span className="text-greenlight font-normal text-sm font-inter leading-5 block">Paid</span>
                                          </div>
                                          <span className="bg-blue12/10 rounded-xl w-12 h-12 flex items-center justify-center">
                                                <Image src="/images/wallet.svg"
                                                      alt="Image"
                                                      width={24}
                                                      height={24}
                                                />
                                          </span>
                                    </div>
                                    <div className="flex items-start justify-between shadow-31xl bg-white rounded-xl p-6">
                                          <div className="">
                                                <p className="text-gray-2200 font-normal mb-1 text-sm leading-5 flex items-center">Escrow Balance</p>
                                                <h4 className="text-black15 font-bold text-2xl mb-1 leading-8 font-inter">€1,700.00</h4>
                                                <span className="text-gray-2200 font-normal text-sm font-inter leading-5 block">Release: Aug 15, 2025</span>
                                          </div>
                                          <span className="bg-blue12/10 rounded-xl w-12 h-12 flex items-center justify-center">
                                                <Image src="/images/clock-blue.svg"
                                                      alt="Image"
                                                      width={24}
                                                      height={24}
                                                />
                                          </span>
                                    </div>
                                    <div className="flex items-start justify-between shadow-31xl bg-white rounded-xl p-6">
                                          <div className="">
                                                <p className="text-gray-2200 font-normal mb-1 text-sm leading-5 flex items-center">Next Payout</p>
                                                <h4 className="text-black15 font-bold text-2xl mb-1 leading-8 font-inter">€850.00</h4>
                                                <span className="text-yellow-1100 font-normal text-sm font-inter leading-5 block">Jan 5, 2025</span>
                                          </div>
                                          <span className="bg-blue12/10 rounded-xl w-12 h-12 flex items-center justify-center">
                                                <Image src="/images/right-icon-blue.svg"
                                                      alt="Image"
                                                      width={24}
                                                      height={24}
                                                      className="-rotate-50"
                                                />
                                          </span>
                                    </div>
                              </div>
                              <div className="bg-blue12/5 border border-solid border-blue12/10 rounded-xl px-4 pt-6 pb-4 flex items-start gap-4 mt-6">
                                    <span className="flex items-center justify-center bg-blue12/10 rounded-xl w-9 h-9">
                                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3337 8.66664C13.3337 12 11.0003 13.6666 8.22699 14.6333C8.08177 14.6825 7.92402 14.6802 7.78033 14.6266C5.00033 13.6666 2.66699 12 2.66699 8.66664V3.99997C2.66699 3.82316 2.73723 3.65359 2.86225 3.52857C2.98728 3.40355 3.15685 3.33331 3.33366 3.33331C4.66699 3.33331 6.33366 2.53331 7.49366 1.51997C7.6349 1.39931 7.81456 1.33301 8.00033 1.33301C8.18609 1.33301 8.36576 1.39931 8.50699 1.51997C9.67366 2.53997 11.3337 3.33331 12.667 3.33331C12.8438 3.33331 13.0134 3.40355 13.1384 3.52857C13.2634 3.65359 13.3337 3.82316 13.3337 3.99997V8.66664Z" stroke="#0A91FF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </span>
                                    <div className="flex-1 w-full">
                                          <p className="text-black15 font-inter font-normal mb-2 text-sm leading-5">All payments are processed securely via <Link href={"#"} className="text-blue12 font-bold">StudPay escrow</Link>. Your funds are protected until the agreed release date.
                                          </p>
                                          <Link href={"#"} className="text-blue12 font-inter font-sm font-normal leading-5 flex items-center gap-1">
                                                View Escrow Details
                                                <Image
                                                      src="../images/expend-icon.svg"
                                                      alt=""
                                                      width={14}
                                                      height={14}
                                                />
                                          </Link>
                                    </div>
                              </div>
                              <div className="bg-white rounded-xl shadow-31xl">
                                    <TenantsPaymentTable></TenantsPaymentTable>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
