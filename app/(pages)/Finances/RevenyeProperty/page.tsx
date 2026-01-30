import Link from "next/link";
import MonthDropdown from "@/app/components/MonthDropdown";
import PropertyTable from "@/app/components/PropertyTable";


export default function RevenyePropertyPage() {

     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <Link href="/Finances" className="flex items-center gap-2 text-sm font-inter font-medium leading-5 text-gray-1000 py-2 mb-2.5" ><img src="/images/left-arrow.svg" alt="" /> Back to Applications</Link>
               <div className="flex items-center sm:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between ">
                    <div>
                         <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Revenue by Property</h4>
                         <p className="text-base font-inter font-normal leading-6 text-gray-2200">Detailed breakdown of rental revenue across all properties</p>
                    </div>
                    <div className="flex items-center gap-3">
                         <button className="text-sm rounded-[10px] font-normal cursor-pointer font-inter leading-5 text-black flex items-center justify-center gap-2 py-[9px] px-[14px] bg-transparent border border-gray-2400">
                              <img src="/images/export-arrow.svg" alt="" /> Export</button>
                    </div>
               </div>
               <div className="w-fit my-2.5">
                    <MonthDropdown></MonthDropdown>
               </div>
               <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                    <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                         <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Total Revenue</h6>
                         <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">€138,800</span>
                         <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                              <img src="/images/grapgh-line.svg" alt="" />+9.2% vs last period
                         </div>
                    </div>
                    <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                         <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Active Properties</h6>
                         <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">6</span>
                         <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                              <img src="/images/building-icon.svg" alt="" />Generating revenue
                         </div>
                    </div>
                    <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                         <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Avg. Occupancy</h6>
                         <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">89%</span>
                         <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                              <img src="/images/per-icon.svg" alt="" />Across all units
                         </div>
                    </div>
                    <div className="border border-gray-2700 rounded-[10px] p-6 shadow-6xl">
                         <h6 className="font-dm-sans font-medium text-sm leading-5 text-gray-2200 mb-2">Revenue per Unit</h6>
                         <span className="block text-2xl leading-8 font-dm-sans font-bold text-black-1400 mb-2">€2,892</span>
                         <div className="flex items-center gap-1 text-xs font-dm-sans font-medium text-green-1400">
                              <img src="/images/grapgh-line.svg" alt="" />+5.2% efficiency
                         </div>
                    </div>
               </div>
               <PropertyTable></PropertyTable>
          </div>
     );
}
