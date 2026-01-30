import PrimaryLink from "@/app/ui/PrimaryLink";
import Link from "next/link";
import DashboardLayout from "@/layouts/DashboardLayout";
import SyncAPI from "./components/SyncAPI";

export default async function DashboardPage() {

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mock-api/partner-api.json`);
   const userId = "user_001";
    const data = await res.json()

    const userData = data.users.find((user: { id: string; }) => user.id === userId);
    const balance = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(userData.dashboard.financialOverview.walletBalance);

    const pendingPayouts = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(userData.dashboard.financialOverview.pendingPayouts);

    const LastPayouts = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(userData.dashboard.financialOverview.lastPayout.amount);


    const activityIcons = {
      "application": "/icons/new-application-icon.svg",
      "lease": "/icons/edit-icon.svg",
      "upcoming-move-in": "/icons/calendar.svg",
    }

    const recentActivity = userData.dashboard.recentActivity;

    

  return (
  <DashboardLayout>

      <div className="xl:p-6 pb-32! p-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
          <div className="bg-white border border-solid border-gray-1100 rounded-xl p-6.25">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-1000/10 rounded-lg w-10 h-10 flex items-center justify-center">
                <img src="/icons/listings-icon.svg" alt="" />
              </span>
              <p className="text-green12 font-medium text-sm leading-5">{userData.dashboard.stats.activeListings.change}</p>
            </div>
            <h4 className="text-black-1000 text-2xl font-semibold leading-8 mb-1">{userData.dashboard.stats.activeListings.count}</h4>
            <p className="text-gray-1000 font-normal text-sm leading-5">Active Listings</p>
          </div>
          <div className="bg-white border border-solid border-gray-1100 rounded-xl p-6.25">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-1000/10 rounded-lg w-10 h-10 flex items-center justify-center">
                   <img src="/icons/occupancy-icon.svg" alt="" />
              </span>
              <p className="text-green12 font-medium text-sm leading-5">{userData.dashboard.stats.occupancyRate.change}</p>
            </div>
            <h4 className="text-black-1000 text-2xl font-semibold leading-8 mb-1">{userData.dashboard.stats.occupancyRate.percentage}%</h4>
            <p className="text-gray-1000 font-normal text-sm leading-5">Occupancy Rate</p>
          </div>
          <div className="bg-white border border-solid border-gray-1100 rounded-xl p-6.25">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-1000/10 rounded-lg w-10 h-10 flex items-center justify-center">
                   <img src="/icons/applications-icon.svg" alt="" />
              </span>
              <p className="text-red12 font-medium text-sm leading-5">{userData.dashboard.stats.pendingApplications.alert}</p>
            </div>
            <h4 className="text-black-1000 text-2xl font-semibold leading-8 mb-1">{userData.dashboard.stats.pendingApplications.count}</h4>
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
                <h4 className="text-black-1000 font-semibold text-[30px] leading-9">{balance}</h4>
              </div>
              <div className="xl:p-6 p-4">
                <ul className="mb-4">
                  <li className="flex items-center justify-between mb-4">
                    <span className="text-gray-1000 font-normal xl:text-sm text-xs leading-5 flex items-center gap-2"><img src="../images/clock-icon.svg" alt="" /> Pending Payouts</span>
                    <p className="text-black-1000 font-medium xl:text-base text-sm leading-6">{pendingPayouts}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-1000 font-normal xl:text-sm text-xs leading-5 flex items-center gap-2"><img src="../images/price-arrow.svg" alt="" /> Last Payout</span>
                    <div className="">
                      <p className="text-black-1000 font-medium xl:text-base text-sm leading-6 mb-1.25">{LastPayouts}</p>
                      <span className="text-gray-1000 font-normal text-xs block text-right">Dec 20, 2025</span>
                    </div>
                  </li>
                </ul>
                <PrimaryLink href="/Finances" className="h-10">
                  Request Payout
                </PrimaryLink>
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
                {recentActivity
                  .sort((a: { time: string | number | Date; }, b: { time: string | number | Date; }) => new Date(b.time).getTime() - new Date(a.time).getTime())
                  .slice(0, 5)
                  .map((activity: { id: string  ; type: string; title: string; property: string; time: string; }) => (
                    <div key={activity.id} className="border-b border-solid border-gray-1100 p-4 flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <span className={`w-9 h-9 flex items-center justify-center rounded-lg ${activity.type === 'application' ? 'bg-green13' : activity.type === 'lease' ? 'bg-green13' : activity.type === 'upcoming-move-in' ? 'bg-purple12' : ''}`}>
                          <img src={activityIcons[activity.type as keyof typeof activityIcons]} alt="" />
                        </span>
                        <div className="">
                          <h4 className="text-black-1000 font-medium text-sm leading-5">{activity.title}</h4>
                          <p className="text-sm font-normal leading-5 text-gray-1000">{activity.property}</p>
                        </div>
                      </div>
                      <span className="text-gray-1000 font-normal text-xs leading-4 block">{activity.time}</span>
                    </div>
                  ))}
          
              </div>
            </div>
          </div>
        </div>
        <SyncAPI/>
      
      </div>
    </DashboardLayout>
  );
}
