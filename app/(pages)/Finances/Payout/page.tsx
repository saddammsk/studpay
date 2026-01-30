import PrimaryLink from "@/app/ui/PrimaryLink";
import PayoutsTable from "@/app/components/PayoutTable";


export default function PayoutPage() {
  

     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <div className="flex items-center xl:flex-nowrap flex-wrap mb-4 xl:gap-0 gap-5 sm:gap-0 gap-4 justify-between ">
                    <div>
                         <h4 className="text-2xl font-bold leading-9 text-black-1200 mb-1">Payouts</h4>
                         <p className="text-sm font-inter font-normal leading-6 text-gray-2200">Manage and track your payout transactions</p>
                    </div>
                    <div className="flex-1 w-full max-w-[192px]">
                         <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5" variant="bluebtn">
                              <img src="/images/arrow-2.svg" className="brightness-[6]" alt="" />  Request Payout
                         </PrimaryLink>
                    </div>
               </div>
               <div className="grid lg:grid-cols-2 xl:gap-[60px] mb-4 gap-4">
                    <div className="border-l-4 border-black-1300 flex items-start justify-between py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                         <div>
                              <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Available Balance</span>
                              <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">$8,270.00</h4>
                              <p className="font-inter text-xs font-normal leading-4 text-gray-1400">Ready for withdrawal</p>
                         </div>
                         <div className="bg-black-1300/[10%] w-12 h-12 rounded-full flex items-center justify-center">
                              <img src="/images/dollar-black.svg" alt="" />
                         </div>
                    </div>
                    <div className="flex items-start justify-between  py-[17px] px-5 bg-white rounded-[10px] shadow-12xl">
                         <div>
                              <span className="block text-sm font-inter font-normal leadig-5 text-gray-1400">Next Payout Date</span>
                              <h4 className="font-inter text-2xl font-bold leading-8 mt-1 mb-0.5 text-black-1000">Dec 22, 2024</h4>
                              <p className="font-inter text-xs font-normal leading-4 text-gray-1400">Automatic scheduled payout</p>
                         </div>
                         <div className="bg-black-1300/[10%] w-12 h-12 rounded-full flex items-center justify-center">
                              <img src="/images/calendar2.svg" alt="" />
                         </div>
                    </div>
               </div>
               <PayoutsTable></PayoutsTable>
          </div>
     );
}
