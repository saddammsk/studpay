
import Link from "next/link";
import DonutChart from "@/app/components/DonutChart";
import MovementsTable from "@/app/components/MovementsTable";


export default function BlockedDepositePage() {
     const data = [
          { label: "45 Rue Vauvenargues", value: 800, color: "#3399FF", percentage: 6.4 },
          { label: "12 Avenue Foch", value: 1200, color: "#00B74F", percentage: 9.6 },
          { label: "8 Boulevard Haussmann", value: 2500, color: "#FFA500", percentage: 20.1 },
          { label: "23 Rue de Rivoli", value: 3200, color: "#8000FF", percentage: 25.7 },
          { label: "67 Avenue Montaigne", value: 4750, color: "#FF4C65", percentage: 38.2 },
     ];

     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <div className="header-bg md:mb-[68px] mb-5 md:gap-0 gap-5 flex-wrap rounded-xl p-5 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-white/[20%] flex items-center justify-center">
                              <img src="/images/trendup-white.svg" alt="" />
                         </div>
                         <div>
                              <h6 className="text-white text-lg font-inter font-bold leading-7">Make your deposits work for you</h6>
                              <p className="text-sm font-inter font-normal leading-5 text-white/[80%]">Earn 2.5% annual interest with StudSafe Yield – guaranteed and secure</p>
                         </div>
                    </div>
                    <Link href="/" className="flex items-center gap-2 font-inter text-base leading-6 font-normal py-2.5 px-4 rounded-xl bg-white  text-blue-1100">
                         <img src="/images/info-icon.svg" alt="" />Learn more <img src="/images/right-icon-blue.svg" alt="" />
                    </Link>
               </div>
               <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-2700 rounded-[10px] flex items-start justify-between gap-5 p-6 shadow-6xl">
                         <div>
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Total Blocked Deposits</h6>
                              <span className="block text-[30px] leading-9 font-inter font-bold text-black-1000 mb-2">€12,450</span>
                              <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1100">
                                   <img src="/images/grapgh-line.svg" alt="" />+€800 this month
                              </div>
                         </div>
                         <img src="/images/wallet.svg" className="w-5" alt="" />
                    </div>
                    <div className="border border-gray-2700 rounded-[10px] flex items-start justify-between gap-5 p-6 shadow-6xl">
                         <div>
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Active Properties</h6>
                              <span className="block text-[30px] leading-9 font-inter font-bold text-black-1000 mb-2">€45.30</span>
                              <div className="py-0.5 px-2.5 bg-green-1100/[10%] rounded-full inline-block text-xs font-dm-sans font-medium text-green-1100">
                                   +2.5% annualized
                              </div>
                         </div>
                         <img src="/images/trend-icon2.svg" alt="" />
                    </div>
                    <div className="border border-gray-2700 rounded-[10px] flex items-start justify-between gap-5 p-6 shadow-6xl">
                         <div>
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Avg. Occupancy</h6>
                              <span className="block text-[30px] leading-9 font-inter font-bold text-black-1000 mb-2">€320.50</span>
                              <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                                   vs €260 in 2023
                              </div>
                         </div>
                         <img src="/images/calendar3.svg" alt="" />
                    </div>
                    <div className="border border-gray-2700 rounded-[10px] flex items-start justify-between gap-5 p-6 shadow-6xl">
                         <div>
                              <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Revenue per Unit</h6>
                              <span className="block text-[30px] leading-9 font-inter font-bold text-black-1000 mb-2">2.7%</span>
                         </div>
                         <ul className="flex items-center gap-2">
                              <li>
                                   <img src="/images/info-gray.svg" alt="" />
                              </li>
                              <li>
                                   <img src="/images/per-blue.svg" alt="" />
                              </li>
                         </ul>
                    </div>
               </div>
               <div className="grid lg:grid-cols-2 grid-cols-1 4xl:gap-6 gap-3">
                    <div className="border border-gray-1300 rounded-[10px]  4xl:p-6 p-4 shadow-9xl">
                         <h6 className="text-lg font-bold leading-7 text-black-1000 font-inter">Blocked Deposits by Property</h6>
                         <DonutChart data={data}></DonutChart>
                    </div>
                    <div>
                         <div className="border border-gray-1300 rounded-[10px]  4xl:p-6 p-4 shadow-9xl">
                              <div className="flex items-center mb-7 justify-between">
                                   <h6 className="text-lg font-bold leading-7 text-black-1000 font-inter">Recent Movements</h6>
                                   <Link href="/" className="text-sm font-inter font-normal leading-5 text-blue-1100">View all</Link>
                              </div>
                              <MovementsTable></MovementsTable>
                         </div>
                    </div>
               </div>
          </div>
     );
}
