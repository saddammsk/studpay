"use client";
import { useState } from "react";  
import MessageDropdownMenu from "@/app/ui/MessageDropdownMenu";
import ToggleSwitch from "@/app/ui/ToggleSwitch";
import Image from "next/image";
import Link from "next/link"; 
import PrimaryLink from "@/app/ui/PrimaryLink";

const tabs = ["Overview", "Lease Details", "Payments", "Documents", "Messages"];

const StatusMenuItems = [
  { label: "Active" },
  { label: "Ending Soon" },
  { label: "Ended" },
];


export default function ListingReviewPublish() { 

  const [activeTab, setActiveTab] = useState("Messages");
  const [switch1, setSwitch1] = useState(false);

  

  return (
    <>
      <div className="lg:p-6 p-4">
        <div className="bg-white rounded-[15px]">
          <div className="border-b border-solid border-gray-1100 md:p-6 p-4">
            <div className="">
              <h4 className="text-black-1200 font-inter font-bold md:text-[30px] text-2xl leading-9 mb-1">
                Messages
              </h4>
              <p className="text-gray-1400 font-inter font-normal xl:text-base text-sm leading-6">
                Communication history with this tenant
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
          <div className="mt-6">
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
            <div className="mt-8">
              <div className="flex relative overflow-hidden">
                <div className="xl:static absolute -left-full top-0 xl:h-auto h-full 2xl:max-w-85 xl:max-w-70 max-w-full w-full bg-white z-1 border-r border-solid border-gray45">
                  <div className="p-4 border-b border-solid border-gray45">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-black font-inter font-semibold text-lg leading-7">
                        Inbox
                      </h4>
                      <span className="text-white font-semibold font-inter text-xs leading-4 rounded-full flex items-center justify-center bg-blue-1000 w-6 h-6">
                        4
                      </span>
                    </div>
                    <div className="relative mb-4">
                      <input
                        type=""
                        className="text-gray37 placeholder:text-gray37 font-normal text-sm leading-normal bg-gray-1500/50 rounded-2xl h-10 pl-9 w-full"
                        placeholder="Search conversations"
                      />
                      <span className="flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2">
                        <Image
                          src="../images/search-icon.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                    </div>
                    <MessageDropdownMenu
                      label={"All conversations"}
                      items={StatusMenuItems}
                    />
                  </div>
                  <div className="bg-blue-1000/5 flex items-start gap-3 border-l-[3px] border-solid border-blue-1000 p-4">
                    <span className="flex items-center w-11 h-11">
                      <Image
                        src="/images/user.png"
                        alt=""
                        width={44}
                        height={44}
                        className="rounded-full shadow-32xl"
                      />
                    </span>
                    <div className="flex-1 w-full">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-black font-inter font-bold text-sm leading-5">
                          Sarah Mitchell
                        </h4>
                        <span className="text-gray37 font-normal font-inter text-[11px] leading-4 block">
                          about 2 hours
                        </span>
                      </div>
                      <p className="text-gray37 font-normal font-inter text-xs leading-4 block">
                        Studio Belleville • Paris
                      </p>
                      <div className="flex items-center justify-between my-2">
                        <Link
                          href={"#"}
                          className="text-white font-inter font-medium text-[10px] leading-3.75 rounded-full bg-purple20 inline-flex items-center justify-center px-2 h-5.25"
                        >
                          Proposal received
                        </Link>
                        <span className="text-white font-semibold font-inter text-[10px] leading-4 rounded-full flex items-center justify-center bg-blue-1000 w-5 h-5">
                          2
                        </span>
                      </div>
                      <h4 className="text-black font-medium text-xs leading-4 line-clamp-1">
                        Hello! I am very interested in your studio.…
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-col bg-blue138 flex-1 w-full">
                  <div className="w-full border-b border-solid border-gray45 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center w-10 h-10">
                        <Image
                          src="/images/user.png"
                          alt=""
                          width={40}
                          height={40}
                          className="rounded-full shadow-32xl"
                        />
                      </span>
                      <div className="flex-1 w-full">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-black font-inter font-semibold text-base leading-6">
                            Sarah Mitchell
                          </h4>
                          <span className="text-gray37 font-normal font-inter text-xs leading-4 block">
                            about 2 hours
                          </span>
                        </div>
                        <p className="text-gray37 font-normal font-inter text-xs leading-4 block">
                          Studio Belleville • Paris
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-1 p-4">
                    <div className="mb-4">
                      <span className="text-gray37 gap-1.5 flex items-center font-normal font-inter text-[10px] leading-3.75">
                        <Image
                          src="/images/global-icon.svg"
                          alt=""
                          width={12}
                          height={12}
                        />
                        Message in English
                      </span>
                      <div className="bg-gray562 rounded-2xl inline-flex flex-col py-3 px-4">
                        <h4 className="text-black font-normal font-inter text-sm leading-[22.8px]">
                          Hello! I am very interested in your studio. Is it
                          still available for February?
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray37 font-inter font-normal text-[10px] leading-3.75 block">
                            18:12
                          </span>
                          <span className="text-gray37 font-inter font-normal text-[10px] leading-3.75 block">
                            EN
                          </span>
                        </div>
                      </div>
                      <Link
                        href={"#"}
                        className="text-blue-1000 mt-1 p-2 gap-3 flex items-center font-medium font-inter text-xs leading-4"
                      >
                        <Image
                          src="/images/global-blue.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Translate to French
                      </Link>
                    </div>
                    <div className="mb-4">
                      <span className="text-gray37 gap-1.5 flex items-center font-normal font-inter text-[10px] leading-3.75">
                        <Image
                          src="/images/global-icon.svg"
                          alt=""
                          width={12}
                          height={12}
                        />
                        Message in English
                      </span>
                      <div className="bg-gray562 rounded-2xl inline-flex flex-col py-3 px-4">
                        <h4 className="text-black font-normal font-inter text-sm leading-[22.8px]">
                          I am a graduate student at Sorbonne University and I
                          am looking for accommodation for the next academic
                          year.
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray37 font-inter font-normal text-[10px] leading-3.75 block">
                            18:42
                          </span>
                          <span className="text-gray37 font-inter font-normal text-[10px] leading-3.75 block">
                            EN
                          </span>
                        </div>
                      </div>
                      <Link
                        href={"#"}
                        className="text-blue-1000 mt-1 p-2 gap-3 flex items-center font-medium font-inter text-xs leading-4"
                      >
                        <Image
                          src="/images/global-blue.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Translate to French
                      </Link>
                    </div>
                    <div className="mb-4 flex items-center justify-end">
                      <div className="bg-blue139 rounded-2xl inline-flex flex-col py-3 px-4">
                        <h4 className="text-black font-normal font-inter text-sm leading-[22.8px]">
                          Bonjour Sarah, oui le studio est toujours disponible.
                          Je serais ravi de vous le faire visiter.{" "}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray37 font-inter font-normal text-[10px] leading-3.75 block">
                            19:12
                          </span>
                          <span className="text-blue-1000 bg-blue-1000/10 rounded-sm w-6.25 h-4.75 flex items-center justify-center font-inter font-normal text-[10px] leading-3.75 ">
                            FR
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full ">
                    <div className="bg-white/50 flex items-center justify-between border-t border-b border-solid border-gray45 py-2 px-4">
                      <div className="flex items-center gap-2">
                        <ToggleSwitch
                          enabled={switch1}
                          setEnabled={setSwitch1}
                        />
                        <p className="text-gray37 font-inter font-medium text-xs leading-4">
                          Auto-translate all messages
                        </p>
                      </div>
                      <Link href={"#"} className="flex items-center w-6 h-6">
                        <Image
                          src="/images/info-round.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-4">
                      <Link
                        href={"#"}
                        className="flex items-center justify-center w-10 h-10"
                      >
                        <Image
                          src="/images/attachment.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </Link>
                      <div className="w-full flex-1 flex items-center gap-2">
                        <input
                          type="text"
                          className="text-gray37 placeholder:text-gray37 font-normal font-inter text-sm px-3 bg-gray-1500/50 rounded-xl h-11 w-full"
                          placeholder="Write a message…"
                        />
                        <Link
                          href={"#"}
                          className="flex items-center justify-center w-11 h-11 bg-blue-1000 opacity-50 rounded-xl"
                        >
                          <Image
                            src="/images/send.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:static absolute -right-full 2xl:max-w-[320px] lg:max-w-70 max-w-full w-full lg:h-auto h-full border-r border-l bg-white z-10 border-solid border-gray45">
                  <div className="p-4 border-b border-solid border-gray45">
                    <div className="border border-solid border-gray45 rounded-xl">
                      <div className="">
                        <Image
                          src="/images/T2Marais.jpg"
                          alt=""
                          width={284}
                          height={144}
                          className="w-full rounded-t-xl object-cover object-center"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-black font-inter font-semibold text-base leading-6 mb-1">
                          Studio Belleville
                        </h4>
                        <p className="text-gray37 font-normal text-sm leading-5">
                          45 Rue de Belleville, 75020 Paris
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <strong className="text-blue-1000 font-bold font-inter text-lg leading-7 block">
                            850€
                          </strong>
                          <span className="text-gray37 font-normal text-sm leading-5">
                            / month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-solid border-gray45">
                    <h4 className="uppercase mb-4 text-gray37 font-semibold font-inter text-xs leading-4">
                      Reservation Details
                    </h4>
                    <div className="flex items-center xl:gap-3 gap-2 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-1000/10">
                        <Image
                          src="../images/calendar-blue.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                      <div className="">
                        <span className="text-gray37 font-normal font-inter text-xs leading-4 block">
                          Move-in date
                        </span>
                        <h5 className="text-black font-inter font-medium text-sm leading-5">
                          February 1, 2026
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center xl:gap-3 gap-2 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-1000/10">
                        <Image
                          src="../images/clock-blue.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                      <div className="">
                        <span className="text-gray37 font-normal font-inter text-xs leading-4 block">
                          Duration
                        </span>
                        <h5 className="text-black font-inter font-medium text-sm leading-5">
                          12 months
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center xl:gap-3 gap-2 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-1000/10">
                        <Image
                          src="../images/euro-blue.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                      <div className="">
                        <span className="text-gray37 font-normal font-inter text-xs leading-4 block">
                          Deposit
                        </span>
                        <h5 className="text-black font-inter font-medium text-sm leading-5">
                          1700€
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center xl:gap-3 gap-2 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-1100/10">
                        <Image
                          src="../images/sheild-green2.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                      <div className="">
                        <span className="text-gray37 font-normal font-inter text-xs leading-4 block">
                          StudGuarantee
                        </span>
                        <h5 className="text-black font-inter font-medium text-sm leading-5">
                          Covered
                        </h5>
                      </div>
                    </div>
                    <div className="text-yellow-1100 font-medium text-sm leading-5 rounded-xl flex items-center gap-2 border border-solid border-yellow-1100/2 bg-yellow-1100/10 p-3">
                      <Image
                        src="../images/time.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      1 day left to respond
                    </div>
                  </div>
                  <div className="p-4 border-b border-solid border-gray45">
                    <Link
                      href={"#"}
                      className="flex mb-2 items-center justify-center rounded-[10px] bg-green-1100 hover:bg-green-1100/90 h-11 transition-all duration-500 ease-in-out text-white font-medium text-sm leading-5 gap-4"
                    >
                      <Image
                        src="../images/check-white-rounded.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Accept
                    </Link>
                    <Link
                      href={"#"}
                      className="group mb-2 hover:text-white flex items-center justify-center rounded-[10px] border border-solid border-gray45 bg-blue138 hover:bg-blue-1000 h-11 transition-all duration-500 ease-in-out text-black font-medium text-sm leading-5 gap-4"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2532_12520)">
                          <path
                            d="M8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
                            className="group-hover:stroke-white"
                            stroke="black"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6L6 10"
                            className="group-hover:stroke-white"
                            stroke="black"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L10 10"
                            className="group-hover:stroke-white"
                            stroke="black"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2532_12520">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Refuse
                    </Link>
                    <Link
                      href={"#"}
                      className="flex mb-2 items-center justify-center rounded-[10px] hover:bg-blue-1000/5 h-11 transition-all duration-500 ease-in-out text-blue-1000 font-blue-1000 text-sm leading-5 gap-4"
                    >
                      <Image
                        src="../images/send-blue.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Propose reservation
                    </Link>
                  </div>
                  <div className="p-4">
                    <Link
                      href={"#"}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <p className="flex items-center gap-4 text-gray37 font-medium font-inter text-sm leading-5">
                        <Image
                          src="../images/file-gray.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        View tenant file
                      </p>
                      <span className="flex items-center justify-center">
                        <Image
                          src="../images/expend-gray.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                    </Link>
                    <div className="bg-green-1100/5 border border-solid border-green-1100/20 p-3 rounded-xl mt-3">
                      <h4 className="text-green-1100 font-medium text-sm leading-5 flex items-center gap-2">
                        <Image
                          src="../images/sheild-green2.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Rent with confidence
                      </h4>
                      <p className="text-gray37 font-inter font-normal text-xs leading-6 mt-1">
                        All payments are secured through StudPay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
