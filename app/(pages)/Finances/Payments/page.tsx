import { useState } from "react";
import InputField from "@/app/ui/InputField";
import PaymentsTable2 from "@/app/components/PaymentsTable2";



export default function PaymentsPage() {
     const [name, setName] = useState("");
     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <div className="flex items-center xl:flex-nowrap flex-wrap mb-4 xl:gap-0 gap-5 sm:gap-0 gap-4 justify-between ">
                    <div>
                         <h4 className="text-2xl font-bold leading-9 text-black-1200 mb-1">Payments</h4>
                         <p className="text-sm font-inter font-normal leading-6 text-gray-2200">Manage and track all student payment transactions</p>
                    </div>
                    <div className="flex-1 w-full max-w-[320px]">
                         <InputField className="pl-10! h-10!"
                              label=""
                              placeholder="Search by student or invoice..."
                              value={name}
                              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setName(e.target.value)}
                              leftIconSrc="/images/search-icon.svg"
                              id="email"
                              name="email"
                         />
                    </div>
               </div>
               <div className="grid lg:grid-cols-3 xl:gap-[60px] mb-4 gap-4">
                    <div className="border-l-4 border-green-1100 py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                         <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Total Received</span>
                         <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$8,270.00</h4>
                         <p className="font-inter text-xs font-normal leading-4 text-gray-1400">6 payments</p>
                    </div>
                    <div className="border-l-4 border-yellow-1100 py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                         <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Pending</span>
                         <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$2,180.00</h4>
                         <p className="font-inter text-xs font-normal leading-4 text-gray-1400">2 payments</p>
                    </div>
                    <div className="border-l-4 border-red-1000 py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                         <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Failed</span>
                         <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$1,350.00</h4>
                         <p className="font-inter text-xs font-normal leading-4 text-gray-1400">1 payment</p>
                    </div>
               </div>
               <PaymentsTable2></PaymentsTable2>
          </div>
     );
}
