"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import UserDropMenu from "@/app/components/UserDropMenu";
import NotificationsTabs from "@/app/components/NotificationsTabs";
import Link from "next/link";

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
      <div className="xl:pl-12 xl:pr-6 p-4 xl:py-14 py-7">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-gray17 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center rounded-xl bg-blue-1200/10 w-11 h-11"><img src="../images/notification-bell.svg" alt="" /> </span>
            <div className="">
              <h4 className="text-black-1100 font-bold text-2xl leading-8 font-inter">Notifications</h4>
              <p className="text-gray24 font-normal font-inter text-sm leading-5">You have 3 unread notifications</p>
            </div>
          </div>
          <div className="flex items-center sm:gap-2 sm:w-auto w-full">
            <span className="text-black-1100 text-sm leading-5 font-normal sm:flex-none flex-1 sm:w-auto w-full font-inter flex items-center justify-center gap-2 bg-blue-1300 border border-solid border-gray17 rounded-[10px] px-3 py-1.75"><img src="../images/check-icon.svg" alt="" /> Mark all as read</span>
            <Link href={"/"} className="flex items-center justify-center w-10 h-10"><img src="../images/setting-icon.svg" alt="" /> </Link>
          </div>
        </div>
        <div className="mt-6">
          <NotificationsTabs />
          <p className="text-gray24 font-normal text-xs leading-4 text-center mt-6">Click on a notification to mark it as read</p>
        </div>

      </div>
    </div>
  );
}
