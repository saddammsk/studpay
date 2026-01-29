import Buttons from "@/app/ui/Buttons";
import Link from "next/link";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Dashboard() {
  
    

  return (
  <DashboardLayout>

      <div className="xl:p-6 p-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
          <div className="bg-white border border-solid border-gray-1100 rounded-xl p-6.25">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-1000/10 rounded-lg w-10 h-10 flex items-center justify-center">
                <img src="/icons/listings-icon.svg" alt="" />
              </span>
              <p className="text-green12 font-medium text-sm leading-5">+3</p>
            </div>
            <h4 className="text-black-1000 text-2xl font-semibold leading-8 mb-1">24</h4>
            <p className="text-gray-1000 font-normal text-sm leading-5">Active Listings</p>
          </div>
          <div className="bg-white border border-solid border-gray-1100 rounded-xl p-6.25">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-1000/10 rounded-lg w-10 h-10 flex items-center justify-center">
                   <img src="/icons/occupancy-icon.svg" alt="" />
              </span>
              <p className="text-green12 font-medium text-sm leading-5">+2%</p>
            </div>
            <h4 className="text-black-1000 text-2xl font-semibold leading-8 mb-1">87%</h4>
            <p className="text-gray-1000 font-normal text-sm leading-5">Occupancy Rate</p>
          </div>
          <div className="bg-white border border-solid border-gray-1100 rounded-xl p-6.25">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-1000/10 rounded-lg w-10 h-10 flex items-center justify-center">
                   <img src="/icons/applications-icon.svg" alt="" />
              </span>
              <p className="text-red12 font-medium text-sm leading-5">5</p>
            </div>
            <h4 className="text-black-1000 text-2xl font-semibold leading-8 mb-1">12</h4>
            <p className="text-gray-1000 font-normal text-sm leading-5">Pending Applications</p>
          </div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap -mx-3 sm:mt-6 mt-4">
          <div className="lg:w-4/12 w-full px-3">
            <div className=" bg-white border border-solid border-gray-1100 rounded-xl">
              <div className="border-b border-solid border-gray-1100 bg-white xl:p-6 p-4 rounded-t-xl">
                <h4 className="text-black-1000 font-semibold text-lg leading-7 tracking-[-0.45px]">Financial Overview</h4>
              </div>
              <div className="bg-gray-1200/50 xl:p-6 p-4">
                <span className="text-gray-1000 font-normal text-sm leading-5 flex items-center gap-3 mb-2"><img src="../images/wallet.svg" alt="" className="h-5" />Wallet Balance</span>
                <h4 className="text-black-1000 font-semibold text-[30px] leading-9">€12 450,00</h4>
              </div>
              <div className="xl:p-6 p-4">
                <ul className="mb-4">
                  <li className="flex items-center justify-between mb-4">
                    <span className="text-gray-1000 font-normal xl:text-sm text-xs leading-5 flex items-center gap-2"><img src="../images/clock-icon.svg" alt="" /> Pending Payouts</span>
                    <p className="text-black-1000 font-medium xl:text-base text-sm leading-6">€3 200,00</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-1000 font-normal xl:text-sm text-xs leading-5 flex items-center gap-2"><img src="../images/price-arrow.svg" alt="" /> Last Payout</span>
                    <div className="">
                      <p className="text-black-1000 font-medium xl:text-base text-sm leading-6 mb-1.25">€8 500,00</p>
                      <span className="text-gray-1000 font-normal text-xs block text-right">Dec 20, 2025</span>
                    </div>
                  </li>
                </ul>
                <Buttons href="/" className="h-10">
                  Request Payout
                </Buttons>
              </div>
            </div>
          </div>
          <div className="lg:w-8/12 w-full px-3">
            <div className="bg-white border border-solid border-gray-1100 rounded-xl lg:mt-0 mt-6">
              <div className="flex items-center justify-between border-b border-solid border-gray-1100 bg-white xl:p-6 p-4 rounded-t-xl">
                <h4 className="text-black-1000 font-semibold text-lg leading-7 tracking-[-0.45px]">Recent Activity</h4>
                <Link href={'#'} className="text-blue-1100 font-normal text-sm leading-5 flex items-center">View all</Link>
              </div>
              <div className="">
                <div className="border-b border-solid border-gray-1100 p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="bg-green13 w-9 h-9 flex items-center justify-center rounded-lg">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5007 1.66675H5.00065C4.55862 1.66675 4.1347 1.84234 3.82214 2.1549C3.50958 2.46746 3.33398 2.89139 3.33398 3.33341V16.6667C3.33398 17.1088 3.50958 17.5327 3.82214 17.8453C4.1347 18.1578 4.55862 18.3334 5.00065 18.3334H15.0007C15.4427 18.3334 15.8666 18.1578 16.1792 17.8453C16.4917 17.5327 16.6673 17.1088 16.6673 16.6667V5.83341L12.5007 1.66675Z" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.666 1.66675V5.00008C11.666 5.44211 11.8416 5.86603 12.1542 6.17859C12.4667 6.49115 12.8907 6.66675 13.3327 6.66675H16.666" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33268 7.5H6.66602" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3327 10.8333H6.66602" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3327 14.1667H6.66602" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="">
                      <h4 className="text-black-1000 font-medium text-sm leading-5">New application received</h4>
                      <p className="text-sm font-normal leading-5 text-gray-1000">Studio - 15 Rue de la Paix, Paris</p>
                    </div>
                  </div>
                  <span className="text-gray-1000 font-normal text-xs leading-4 block">2 min ago</span>
                </div>
                <div className="border-b border-solid border-gray-1100 p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="bg-green13 w-9 h-9 flex items-center justify-center rounded-lg">
                      <img src="../images/edit-icon.svg" alt="" />
                    </span>
                    <div className="">
                      <h4 className="text-black-1000 font-medium text-sm leading-5">Lease signed</h4>
                      <p className="text-sm font-normal leading-5 text-gray-1000">T2 - 8 Avenue Victor Hugo, Lyon</p>
                    </div>
                  </div>
                  <span className="text-gray-1000 font-normal text-xs leading-4 block">1 hour ago</span>
                </div>
                <div className="border-b border-solid border-gray-1100 p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple12 w-9 h-9 flex items-center justify-center rounded-lg">
                      <img src="../images/calendar.svg" alt="" />
                    </span>
                    <div className="">
                      <h4 className="text-black-1000 font-medium text-sm leading-5">Upcoming move-in</h4>
                      <p className="text-sm font-normal leading-5 text-gray-1000">Emma Martin - Tomorrow at 10:00</p>
                    </div>
                  </div>
                  <span className="text-gray-1000 font-normal text-xs leading-4 block">3 hours ago</span>
                </div>
                <div className="border-b border-solid border-gray-1100 p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="bg-green13 w-9 h-9 flex items-center justify-center rounded-lg">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5007 1.66675H5.00065C4.55862 1.66675 4.1347 1.84234 3.82214 2.1549C3.50958 2.46746 3.33398 2.89139 3.33398 3.33341V16.6667C3.33398 17.1088 3.50958 17.5327 3.82214 17.8453C4.1347 18.1578 4.55862 18.3334 5.00065 18.3334H15.0007C15.4427 18.3334 15.8666 18.1578 16.1792 17.8453C16.4917 17.5327 16.6673 17.1088 16.6673 16.6667V5.83341L12.5007 1.66675Z" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.666 1.66675V5.00008C11.666 5.44211 11.8416 5.86603 12.1542 6.17859C12.4667 6.49115 12.8907 6.66675 13.3327 6.66675H16.666" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33268 7.5H6.66602" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3327 10.8333H6.66602" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3327 14.1667H6.66602" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="">
                      <h4 className="text-black-1000 font-medium text-sm leading-5">New application received</h4>
                      <p className="text-sm font-normal leading-5 text-gray-1000">T3 - 22 Boulevard Haussmann, Paris</p>
                    </div>
                  </div>
                  <span className="text-gray-1000 font-normal text-xs leading-4 block">5 hours ago</span>
                </div>
                <div className="p-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="bg-green13 w-9 h-9 flex items-center justify-center rounded-lg">
                      <img src="../images/edit-icon.svg" alt="" />
                    </span>
                    <div className="">
                      <h4 className="text-black-1000 font-medium text-sm leading-5">Lease signed</h4>
                      <p className="text-sm font-normal leading-5 text-gray-1000">Studio - 5 Place Bellecour, Lyon</p>
                    </div>
                  </div>
                  <span className="text-gray-1000 font-normal text-xs leading-4 block">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-solid border-gray-1100 rounded-xl mt-6 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="">
              <h4 className="text-black-1000 font-semibold text-lg leading-7 mb-1 tracking-[-0.45px]">API Sync</h4>
              <p className="text-sm font-normal leading-5 text-gray-1000">Sync listings from your property management system</p>
            </div>
            <span className="bg-green13 w-9 h-9 flex items-center justify-center rounded-lg">
              <img src="../images/clock-green.svg" alt="" />
            </span>
          </div>
          <ul className="mb-4">
            <li className="text-gray-1000 font-normal text-sm leading-5 mb-3 flex items-center justify-between">Status <span className="text-green12 font-medium">All synced</span></li>
            <li className="text-gray-1000 font-normal text-sm leading-5 mb-3 flex items-center justify-between">Synced Listings <span className="text-black-1000 font-medium">24</span></li>
            <li className="text-gray-1000 font-normal text-sm leading-5 flex items-center justify-between">Last Sync <span className="text-black-1000 font-medium">Today at 09:30</span></li>
          </ul>
          <Buttons href="/" className="h-10 gap-4 bg-white border border-solid border-gray-1100 text-black-1000! hover:bg-transparent hover:shadow-none">
            <img src="../images/sync-icon.svg" alt="" /> Sync Now
          </Buttons>
        </div>
      </div>
    </DashboardLayout>
  );
}
