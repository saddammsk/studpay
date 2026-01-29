
import NotificationsTabs from "@/app/components/NotificationsTabs";
import Link from "next/link";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Notifications() {

  return (
    <DashboardLayout className="bg-gray-1900" title="Notifications" showWallet={false}>
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
      </DashboardLayout>
  );
}
