import MonthDropdown from "@/app/components/MonthDropdown";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import PaymentsTable from "@/app/components/PaymentsTable";


const statsCards = [
     {
          id: 1,
          cardClass: "card-bg1",
          iconBg: "bg-blue-1000/[10%]",
          icon: "/images/dollar-sign.svg",
          rightText: "+12.5%",
          rightIcon: "/images/green-arrow.svg",
          amount: "€45,280",
          title: "Total Revenue",
          subtitle: "vs last month",
     },
     {
          id: 2,
          cardClass: "bg-green-1500/[15%] border border-blue-1000/[10%]",
          isTextHeader: true,
          headerText: "Blocked Deposits",
          rightIcon: "/images/right-arrow.svg",
          amount: "€12,300",
          infoIcon: "/images/shield-green.svg",
          infoText: "Secure & Guaranteed",
          subtitle: "Remunerated by StudPay",
     },
     {
          id: 3,
          cardClass: "card-bg3",
          iconBg: "bg-yellow-1100/[10%]",
          icon: "/images/timer-yellow.svg",
          rightText: "3 pending",
          rightIcon: "/images/green-arrow.svg",
          rotateIcon: true,
          amount: "€8,450",
          title: "Pending Payments",
          subtitle: "awaiting payment",
     },
     {
          id: 4,
          cardClass: "card-bg4",
          iconBg: "bg-green-1300/[10%]",
          icon: "/images/tick-cricle.svg",
          rightText: "+8.2%",
          rightIcon: "/images/green-arrow.svg",
          amount: "€12,800",
          title: "Paid This Month",
          subtitle: "vs last month",
     },
     {
          id: 5,
          cardClass: "card-bg5",
          iconBg: "bg-green-1300/[10%]",
          icon: "/images/info-icon2.svg",
          rightText: "2 overdue",
          rightIcon: "/images/drop-arrow2.svg",
          amount: "€2,150",
          title: "Overdue Amount",
          subtitle: "requires action",
     },
];

export default function FinancesPage() {

     return (
     <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
          <div className="flex items-center sm:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between mb-10">
               <div>
                    <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Finance</h4>
                    <p className="text-base font-inter font-normal leading-6 text-gray-2200">Financial overview and performance</p>
               </div>
               <div className="flex items-center gap-3">
                    <MonthDropdown></MonthDropdown>
                    <button className="text-sm rounded-[10px] font-normal cursor-pointer font-inter leading-5 text-black flex items-center justify-center gap-2 py-[9px] px-[14px] bg-gray-2500 border border-gray-2400">
                         <img src="/images/export-arrow.svg" alt="" /> Export</button>
               </div>
          </div>
          <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-5">
               {statsCards.map((item) => (
                    <div
                         key={item.id}
                         className={`rounded-xl p-5 shadow-6xl ${item.cardClass}`}
                    >
                         <div className="flex mb-4 items-start justify-between">
                              {item.isTextHeader ? (
                                   <p className="text-base font-inter font-normal leading-6 text-gray-2200">
                                        {item.headerText}
                                   </p>
                              ) : (
                                   <div
                                        className={`w-10 h-10 flex items-center justify-center rounded-[12px] ${item.iconBg}`}
                                   >
                                        <img src={item.icon} alt="" />
                                   </div>
                              )}

                              <div className="flex items-center gap-1.5 text-sm font-normal font-inter leading-5 text-green-1300">
                                   <img
                                        src={item.rightIcon}
                                        alt=""
                                        className={item.rotateIcon ? "rotate-[90deg]" : ""}
                                   />
                                   {item.rightText}
                              </div>
                         </div>

                         <h4 className="text-[30px] font-inter font-bold leading-9 mb-1 text-black">
                              {item.amount}
                         </h4>

                         {item.infoText ? (
                              <>
                                   <div className="flex items-center gap-1.5 mb-1">
                                        <img src={item.infoIcon} alt="" />
                                        <h6 className="4xl:text-sm text-xs font-inter font-normal leading-5 text-green-1400">
                                             {item.infoText}
                                        </h6>
                                   </div>
                                   <span className="text-xs font-inter font-normal leading-4 text-gray24/[70%]">
                                        {item.subtitle}
                                   </span>
                              </>
                         ) : (
                              <>
                                   <h6 className="text-sm font-inter font-normal leading-5 text-gray24">
                                        {item.title}
                                   </h6>
                                   <span className="text-xs font-inter font-normal leading-4 text-gray24/[70%]">
                                        {item.subtitle}
                                   </span>
                              </>
                         )}
                    </div>
               ))}
          </div>
          <div className="flex lg:flex-nowrap flex-wrap gap-6 my-8">
               <div className="lg:w-[31%] w-full">
                    <div className="shadow-6xl rounded-xl p-5">
                         <h6 className="text-base font-inter font-bold leading-6 text-black mb-4">Quick Actions</h6>
                         <div className="space-y-2">
                              <button type="button" className="text-sm font-inter font-normal leading-5 text-black flex items-center gap-3 py-3 px-4 bg-gray-2500 border border-gray-2400 rounded-[10px] w-full group transition-all ease-in-out duration-500 hover:bg-blue-1000 hover:text-white cursor-pointer"><img src="/images/file-icon3.svg" className="group-hover:invert-[1]" alt="" />Invoice</button>
                              <button type="button" className="text-sm font-inter font-normal leading-5 text-black flex items-center gap-3 py-3 px-4 bg-gray-2500 border border-gray-2400 rounded-[10px] w-full group transition-all ease-in-out duration-500 hover:bg-blue-1000 hover:text-white cursor-pointer"><img src="/images/wallet-icon3.svg" className="group-hover:invert-[1]" alt="" />Payment</button>
                              <button type="button" className="text-sm font-inter font-normal leading-5 text-black flex items-center gap-3 py-3 px-4 bg-gray-2500 border border-gray-2400 rounded-[10px] w-full group transition-all ease-in-out duration-500 hover:bg-blue-1000 hover:text-white cursor-pointer"><img src="/images/wallet-icon3.svg" className="group-hover:invert-[1]" alt="" />Payment</button>
                              <button type="button" className="text-sm font-inter font-normal leading-5 text-black flex items-center gap-3 py-3 px-4 bg-gray-2500 border border-gray-2400 rounded-[10px] w-full group transition-all ease-in-out duration-500 hover:bg-blue-1000 hover:text-white cursor-pointer"><img src="/images/send-icon.svg" className="group-hover:invert-[1]" alt="" />Send Reminder</button>
                         </div>
                    </div>
               </div>
               <div className="lg:w-[69%] w-full">
                    <div className="shadow-6xl rounded-xl p-5">
                         <div className="flex items-center justify-between mb-4">
                              <h6 className="text-base font-inter font-bold leading-6 text-black mb-4">Revenue by Property</h6>
                              <Link href="/" className="flex items-center py-2 px-3 gap-1.5 text-sm font-inter font-normal leading-5 text-blue-1000">View Details <img src="/images/arrow-blue.svg" alt="" /></Link>
                         </div>
                         <div className="space-y-4">
                              <div>
                                   <div className="flex items-center justify-between mb-2">
                                        <h6 className="text-black font-inter text-sm leading-5 font-normal">Paris Properties</h6>
                                        <h6 className="text-gray24 font-inter text-sm leading-5 font-normal">€18,500 (41%)</h6>
                                   </div>
                                   <div className="bg-gray-2600 w-full overflow-hidden h-2 block rounded-full">
                                        <div className="bg-blue-1000 w-[41%] h-full block"></div>
                                   </div>
                              </div>
                              <div>
                                   <div className="flex items-center justify-between mb-2">
                                        <h6 className="text-black font-inter text-sm leading-5 font-normal">Lyon Properties</h6>
                                        <h6 className="text-gray24 font-inter text-sm leading-5 font-normal">€12,200 (27%)</h6>
                                   </div>
                                   <div className="bg-gray-2600 w-full overflow-hidden h-2 block rounded-full">
                                        <div className="bg-blue-1000 w-[27%] h-full block"></div>
                                   </div>
                              </div>
                              <div>
                                   <div className="flex items-center justify-between mb-2">
                                        <h6 className="text-black font-inter text-sm leading-5 font-normal">Bordeaux Properties</h6>
                                        <h6 className="text-gray24 font-inter text-sm leading-5 font-normal">€8,500 (19%)</h6>
                                   </div>
                                   <div className="bg-gray-2600 w-full overflow-hidden h-2 block rounded-full">
                                        <div className="bg-blue-1000 w-[19%] h-full block"></div>
                                   </div>
                              </div>
                              <div>
                                   <div className="flex items-center justify-between mb-2">
                                        <h6 className="text-black font-inter text-sm leading-5 font-normal">Marseille Properties</h6>
                                        <h6 className="text-gray24 font-inter text-sm leading-5 font-normal">€6,080 (13%)</h6>
                                   </div>
                                   <div className="bg-gray-2600 w-full overflow-hidden h-2 block rounded-full">
                                        <div className="bg-blue-1000 w-[13%] h-full block"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="p-5 rounded-xl shadow-6xl">
               <h6 className="text-base font-inter font-bold leading-6 text-black mb-0.5">Reports</h6>
               <p className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Generate and download financial reports</p>
               <div className="grid 2xl:grid-cols-4 md:grid-cols-2 mt-5 gap-4">
                    <div className="rounded-xl p-5 shadow-6xl border border-blue-1000/[10%] card-bg1">
                         <div className="flex mb-4 items-start justify-between">
                              <div className="w-10 h-10 flex items-center justify-center bg-blue-1000/[10%] rounded-[12px]">
                                   <img src="/images/grapgh-icon2.svg" alt="" />
                              </div>
                         </div>
                         <h6 className="text-base font-inter font-normal leading-6 mb-1 text-black">Income Statement</h6>
                         <p className="text-xs font-inter font-normal leading-5 mb-3 text-gray24">Monthly revenue breakdown</p>
                         <Link href="/" className="flex items-center  gap-1.5 text-sm font-inter font-normal leading-5 text-blue-1000">Generate <img src="/images/arrow-blue.svg" alt="" /></Link>
                    </div>
                    <div className="rounded-xl p-5 shadow-6xl card-bg4">
                         <div className="flex mb-4 items-start justify-between">
                              <div className="w-10 h-10 flex items-center justify-center bg-green-1300/[10%] rounded-[12px]">
                                   <img src="/images/tick-cricle.svg" alt="" />
                              </div>
                         </div>
                         <h6 className="text-base font-inter font-normal leading-6 mb-1 text-black">Payment History</h6>
                         <p className="text-xs font-inter font-normal leading-5 mb-3 text-gray24">All completed transactions</p>
                         <Link href="/" className="flex items-center  gap-1.5 text-sm font-inter font-normal leading-5 text-green-1300">Generate <img src="/images/green-arrow.svg" alt="" /></Link>
                    </div>
                    <div className="rounded-xl p-5 shadow-6xl card-bg3">
                         <div className="flex mb-4 items-start justify-between">
                              <div className="w-10 h-10 flex items-center justify-center bg-yellow-1100/[10%] rounded-[12px]">
                                   <img src="/images/timer-yellow.svg" alt="" />
                              </div>
                         </div>
                         <h6 className="text-base font-inter font-normal leading-6 mb-1 text-black">Outstanding Dues</h6>
                         <p className="text-xs font-inter font-normal leading-5 mb-3 text-gray24">Pending & overdue amounts</p>
                         <Link href="/" className="flex items-center  gap-1.5 text-sm font-inter font-normal leading-5 text-yellow-1100">Generate <img src="/images/yellow-arrow.svg" alt="" /></Link>

                    </div>
                    <div className="rounded-xl p-5 shadow-6xl card-bg6">
                         <div className="flex mb-4 items-start justify-between">
                              <div className="w-10 h-10 flex items-center justify-center bg-gray-2600 rounded-[12px]">
                                   <img src="/images/grapgh-icon3.svg" alt="" />
                              </div>
                         </div>
                         <h6 className="text-base font-inter font-normal leading-6 mb-1 text-black">Tax Summary</h6>
                         <p className="text-xs font-inter font-normal leading-5 mb-3 text-gray24">Annual tax documentation</p>
                         <Link href="/" className="flex items-center  gap-1.5 text-sm font-inter font-normal leading-5 text-gray24">Generate <img src="/images/arrow-2.svg" alt="" /></Link>

                    </div>
               </div>
          </div>
          <div className="p-5 mt-[14px] rounded-xl shadow-6xl">
               <TabGroup>
                    <div className="flex sm:flex-nowrap flex-wrap sm:gap-0 gap-5 items-center mb-6 justify-between">
                         <div>
                              <h6 className="text-base font-inter font-bold leading-6 text-black mb-0.5">Recent Transactions</h6>
                              <p className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Track all payment activities</p>
                         </div>
                         <TabList className="bg-gray-2600/[50%] rounded-[10px] p-1">
                              <Tab className="text-sm font-inter leading-5 text-gray24 data-selected:text-black data-selected:bg-gray-2500 rounded-lg data-selected:shadow-6xl cursor-pointer inline-block py-1.5 px-3">All</Tab>
                              <Tab className="text-sm font-inter leading-5 text-gray24 data-selected:text-black data-selected:bg-gray-2500 rounded-lg data-selected:shadow-6xl cursor-pointer inline-block py-1.5 px-3">Paid</Tab>
                              <Tab className="text-sm font-inter leading-5 text-gray24 data-selected:text-black data-selected:bg-gray-2500 rounded-lg data-selected:shadow-6xl cursor-pointer inline-block py-1.5 px-3">Pending</Tab>
                              <Tab className="text-sm font-inter leading-5 text-gray24 data-selected:text-black data-selected:bg-gray-2500 rounded-lg data-selected:shadow-6xl cursor-pointer inline-block py-1.5 px-3">Overdue</Tab>
                         </TabList>
                    </div>
                    <TabPanels>
                         <TabPanel>
                              <form action="" className="flex sm:flex-nowrap flex-wrap items-center gap-3">
                                   <div className="relative w-full sm:flex-1">
                                        <input type="text" placeholder="Search by student or property..." className="bg-gray-2500 border border-gray-2400 rounded-[10px] w-full text-sm font-inter font-normal h-10 pl-9 text-gray24 placeholder:text-gray24" />
                                        <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                             <img src="/images/search-icon.svg" alt="" />
                                        </div>
                                   </div>
                                   <Menu>
                                        <MenuButton className="bg-gray-2500 w-fit border border-gray-2400 rounded-[10px] flex items-center text-sm font-inter font-normal px-3 h-10 text-gray24">
                                             <img src="/images/filter-icon.svg" alt="" />  <span className="pl-3 pr-1.5"> All Status</span> <img src="/images/droparrow.svg" alt="" />
                                        </MenuButton>

                                        <MenuItems
                                             transition
                                             anchor="bottom end"
                                             className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                                        >
                                             <MenuItem>
                                                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                                       Edit
                                                       <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘E</kbd>
                                                  </button>
                                             </MenuItem>
                                             <MenuItem>
                                                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                                       Duplicate
                                                       <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
                                                  </button>
                                             </MenuItem>
                                             <div className="my-1 h-px bg-white/5" />
                                             <MenuItem>
                                                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                                       Archive
                                                       <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘A</kbd>
                                                  </button>
                                             </MenuItem>
                                             <MenuItem>
                                                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                                       Delete
                                                       <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
                                                  </button>
                                             </MenuItem>
                                        </MenuItems>
                                   </Menu>
                              </form>
                              <PaymentsTable></PaymentsTable>
                         </TabPanel>
                         <TabPanel>Content 2</TabPanel>
                         <TabPanel>Content 3</TabPanel>
                    </TabPanels>
               </TabGroup>

          </div>
     </div>
     );
}
