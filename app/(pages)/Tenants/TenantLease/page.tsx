"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
const tabs = ["Overview", "Lease Details", "Payments", "Documents", "Messages"];

export default function ListingReviewPublish() {
  const [activeTab, setActiveTab] = useState("Lease Details");

  return (
    <>
      <div className="lg:p-6 p-4">
        <div className="bg-white rounded-[15px]">
          <div className="border-b border-solid border-gray-1100 md:p-6 p-4">
            <div className="">
              <h4 className="text-black-1200 font-inter font-bold md:text-[30px] text-2xl leading-9 mb-1">
                Tenant Lease
              </h4>
              <p className="text-gray-1400 font-inter font-normal xl:text-base text-sm leading-6">
                Complete tenant information and lease overview
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 mt-3 bg-white">
          <div className="flex 2xl:flex-row flex-col 2xl:gap-0 gap-6 items-start justify-between border border-solid border-gray54 bg-white shadow-6xl lg:px-6 px-4 pt-8 pb-6 rounded-xl">
            <div className="flex sm:flex-row flex-col items-start lg:gap-6 gap-4">
              <span className="bg-blue-1000/10 w-20 h-20 rounded-full flex items-center justify-center text-blue-1000 font-normal font-inter text-xl leading-7">
                SJ
              </span>
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-black-1200 font-inter font-bold text-2xl leading-8">
                    Sarah Johnson
                  </h4>
                  <span className="px-2.5 h-5.5 w-fit rounded-full flex border border-solid items-center text-xs font-medium font-inter border-green239 bg-green241 text-green238">
                    Active
                  </span>
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
                    <Link
                      href={"mailto:sarah.johnson@email.com"}
                      className="text-gray-1400 font-normal text-sm leading-5"
                    >
                      sarah.johnson@email.com
                    </Link>
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
                    <Link
                      href={"tel:+1 (555) 123-4567"}
                      className="text-gray-1400 font-normal text-sm leading-5"
                    >
                      +1 (555) 123-4567
                    </Link>
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
                  <p className="flex items-center gap-2 text-black-1200 font-inter font-normal text-sm leading-5">
                    Unit 204
                  </p>
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
                    <p className="text-gray-1400 font-normal text-sm leading-5">
                      Move-in: Jan 15, 2024
                    </p>
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
                    <p className="text-gray-1400 font-normal text-sm leading-5">
                      Move-out: Jan 14, 2025
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:w-auto w-full">
              <ul className="flex sm:flex-row flex-col sm:w-auto w-full items-center gap-3">
                <li className="sm:w-auto w-full">
                  <Link
                    href={"#"}
                    className="text-black245 xl:px-4 px-2 font-inter font-medium sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-gray-1100 rounded-xl h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out"
                  >
                    <Image
                      src="/images/sms.svg"
                      alt="Image"
                      width={16}
                      height={16}
                      className="brightness-0"
                    />{" "}
                    Message Tenant
                  </Link>
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
                  <Link
                    href={"#"}
                    className="text-black245 px-4 font-inter font-medium sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-gray-1100 rounded-xl h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out"
                  >
                    <Image
                      src="/images/card-dark.svg"
                      alt="Image"
                      width={16}
                      height={16}
                      className="brightness-0"
                    />{" "}
                    View Payments
                  </Link>
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
                                                                        ${
                                                                          activeTab ===
                                                                          tab
                                                                            ? "bg-white text-black-1200 shadow-6xl"
                                                                            : "text-black-1200 hover:bg-white hover:shadow-6xl"
                                                                        }`}
                  >
                    {tab}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="border border-solid border-gray54 rounded-xl xl:p-6 p-4">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-black15 font-inter font-bold text-lg leading-7 tracking-[-0.6px]">
                    Lease Summary
                  </h4>
                  <span className="px-2.5 h-5.5 w-fit rounded-full flex border border-solid items-center text-xs font-medium font-inter border-green239 bg-green241 text-green238">
                    Active
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-4 sm:gap-3 gap-4">
                  <div className="flex items-start xl:gap-3 gap-2">
                    <span className="flex items-center justify-center w-5.5 h-5.5">
                      <Image
                        src="../images/calendar-blue.svg"
                        alt=""
                        width={20}
                        height={22}
                      />
                    </span>
                    <div className="">
                      <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                        Start Date
                      </span>
                      <h5 className="text-black-1200 font-inter font-medium xl:text-base text-sm leading-6">
                        September 1, 2024
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-start xl:gap-3 gap-2">
                    <span className="flex items-center justify-center w-5.5 h-5.5">
                      <Image
                        src="../images/calendar-blue.svg"
                        alt=""
                        width={20}
                        height={22}
                      />
                    </span>
                    <div className="">
                      <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                        End Date
                      </span>
                      <h5 className="text-black-1200 font-inter font-medium xl:text-base text-sm leading-6">
                        August 31, 2025
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-start xl:gap-3 gap-2">
                    <span className="flex items-center justify-center w-5.5 h-5.5">
                      <Image
                        src="../images/clock-blue.svg"
                        alt=""
                        width={20}
                        height={22}
                      />
                    </span>
                    <div className="">
                      <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                        Duration
                      </span>
                      <h5 className="text-black-1200 font-inter font-medium xl:text-base text-sm leading-6">
                        12 months
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-start xl:gap-3 gap-2">
                    <span className="flex items-center justify-center w-5.5 h-5.5">
                      <Image
                        src="../images/doller-blue.svg"
                        alt=""
                        width={20}
                        height={22}
                      />
                    </span>
                    <div className="">
                      <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                        Monthly Rent
                      </span>
                      <h5 className="text-black-1200 font-inter font-medium xl:text-base text-sm leading-6">
                        €1,200.00
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-start xl:gap-3 gap-2">
                    <span className="flex items-center justify-center w-5.5 h-5.5">
                      <Image
                        src="../images/doller-blue.svg"
                        alt=""
                        width={20}
                        height={22}
                      />
                    </span>
                    <div className="">
                      <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                        Security Deposit
                      </span>
                      <h5 className="text-black-1200 font-inter font-medium xl:text-base text-sm leading-6">
                        €2,400.00
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-start xl:gap-3 gap-2">
                    <span className="flex items-center justify-center w-5.5 h-5.5">
                      <Image
                        src="../images/clock-blue.svg"
                        alt=""
                        width={20}
                        height={22}
                      />
                    </span>
                    <div className="">
                      <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                        Payment Frequency
                      </span>
                      <h5 className="text-black-1200 font-inter font-medium text-base leading-6">
                        Monthly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-gray54 rounded-xl lg:p-6 p-4">
                <div className="flex items-center gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 8.66664C13.3337 12 11.0003 13.6666 8.22699 14.6333C8.08177 14.6825 7.92402 14.6802 7.78033 14.6266C5.00033 13.6666 2.66699 12 2.66699 8.66664V3.99997C2.66699 3.82316 2.73723 3.65359 2.86225 3.52857C2.98728 3.40355 3.15685 3.33331 3.33366 3.33331C4.66699 3.33331 6.33366 2.53331 7.49366 1.51997C7.6349 1.39931 7.81456 1.33301 8.00033 1.33301C8.18609 1.33301 8.36576 1.39931 8.50699 1.51997C9.67366 2.53997 11.3337 3.33331 12.667 3.33331C12.8438 3.33331 13.0134 3.40355 13.1384 3.52857C13.2634 3.65359 13.3337 3.82316 13.3337 3.99997V8.66664Z"
                      stroke="#0A91FF"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="text-black15 font-inter font-bold text-lg leading-7 tracking-[-0.6px]">
                    Fund Security
                  </h4>
                </div>
                <div className="mt-6">
                  <div className="bg-blue137 rounded-xl p-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-5 h-5">
                        <Image
                          src="../images/lock.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </span>
                      <div className="">
                        <h4 className="text-black-1200 font-inter font-medium text-base leading-6">
                          Deposit Escrow
                        </h4>
                        <p className="text-gray-1400 font-inter font-normal text-sm leading-5">
                          Security deposit status
                        </p>
                      </div>
                    </div>
                    <span className="text-yellow22 font-medium text-sm leading-5 inline-flex items-center h-7.5 bg-yellow23 border border-solid border-yellow42 rounded-full px-3">
                      Locked
                    </span>
                  </div>
                  <div className="bg-blue137 rounded-xl p-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-5 h-5">
                        <Image
                          src="../images/check-darkgreen.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </span>
                      <div className="">
                        <h4 className="text-black-1200 font-inter font-medium text-base leading-6">
                          First Rent Escrow
                        </h4>
                        <p className="text-gray-1400 font-inter font-normal text-sm leading-5">
                          Initial payment status
                        </p>
                      </div>
                    </div>
                    <span className="text-green238 font-medium text-sm leading-5 inline-flex items-center h-7.5 bg-green241 border border-solid border-green239 rounded-full px-3">
                      Released
                    </span>
                  </div>
                  <div className="bg-blue-1000/5 border border-solid border-blue-1000/10 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-4 h-4">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 8.66664C13.3337 12 11.0003 13.6666 8.22699 14.6333C8.08177 14.6825 7.92402 14.6802 7.78033 14.6266C5.00033 13.6666 2.66699 12 2.66699 8.66664V3.99997C2.66699 3.82316 2.73723 3.65359 2.86225 3.52857C2.98728 3.40355 3.15685 3.33331 3.33366 3.33331C4.66699 3.33331 6.33366 2.53331 7.49366 1.51997C7.6349 1.39931 7.81456 1.33301 8.00033 1.33301C8.18609 1.33301 8.36576 1.39931 8.50699 1.51997C9.67366 2.53997 11.3337 3.33331 12.667 3.33331C12.8438 3.33331 13.0134 3.40355 13.1384 3.52857C13.2634 3.65359 13.3337 3.82316 13.3337 3.99997V8.66664Z"
                            stroke="#0A91FF"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-1400 font-inter font-normal text-sm leading-5">
                        Funds are secured by StudPay until lease conditions are
                        met.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-gray54 rounded-xl lg:p-6 p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="../images/file-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <h4 className="text-black15 font-inter font-bold text-lg leading-7 tracking-[-0.6px]">
                    Digital Contract
                  </h4>
                </div>
                <div className="mt-6">
                  <div className="bg-blue137 rounded-xl p-4 flex items-center justify-between mb-4">
                    <div className="">
                      <h4 className="text-black-1200 font-inter font-medium text-base leading-6 mb-1">
                        Lease_Agreement_2024.pdf
                      </h4>
                      <p className="text-gray-1400 font-inter font-normal text-sm leading-5">
                        Signed on August 25, 2024
                      </p>
                    </div>
                  </div>
                  <ul>
                    <li className="flex items-center justify-between mb-3">
                      <p className="text-gray-1400 font-normal font-inter text-sm leading-5">
                        Landlord Signature
                      </p>
                      <span className="text-green238 font-inter font-medium text-sm leading-5 flex items-center gap-2">
                        <Image
                          src="../images/check-darkgreen.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Signed
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <p className="text-gray-1400 font-normal font-inter text-sm leading-5">
                        Tenant Signature
                      </p>
                      <span className="text-green238 font-inter font-medium text-sm leading-5 flex items-center gap-2">
                        <Image
                          src="../images/check-darkgreen.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Signed
                      </span>
                    </li>
                  </ul>
                  <ol className="grid grid-cols-2 gap-3 mt-6">
                    <li>
                      <PrimaryLink className="rounded-xl! h-10 xl:gap-4 gap-2">
                        <Image
                          src="../images/eye-icon2.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="brightness-[3000]"
                        />
                        View Contract
                      </PrimaryLink>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="text-black245 xl:px-4 px-2 font-inter font-medium sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-gray-1100 rounded-xl h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out"
                      >
                        <Image
                          src="/images/download-icon.svg"
                          alt="Image"
                          width={16}
                          height={16}
                          className="brightness-0"
                        />{" "}
                        Download PDF
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="border border-solid border-gray54 rounded-xl lg:p-6 p-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-black15 font-inter font-bold text-lg leading-7 tracking-[-0.6px]">
                    Additional Details
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="">
                    <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                      Renewal Option
                    </span>
                    <h5 className="text-black-1200 font-inter font-medium text-base leading-6">
                      Yes
                    </h5>
                  </div>
                  <div className="">
                    <span className="text-gray-1400 font-normal font-inter text-sm leading-5 block">
                      Notice Period
                    </span>
                    <h5 className="text-black-1200 font-inter font-medium text-base leading-6">
                      2 months
                    </h5>
                  </div>
                </div>
                <div className="relative mt-4">
                  <select className="text-black-1200 font-medium appearance-none w-full text-base leading-7 bg-blue137 rounded-xl h-14 px-4">
                    <option>Special Clauses</option>
                  </select>
                  <span className="flex items-center justify-center w-4 h-4 absolute top-1/2 -translate-y-1/2 right-2.5 outline-0 focus:outline-0 focus:ring-0">
                    <Image
                      src="/images/down-arrow.svg"
                      alt="Image"
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
