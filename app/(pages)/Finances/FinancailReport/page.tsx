
import SelectBox, { SelectOption } from "@/app/components/SelectBox";
import PrimaryLink from "@/app/ui/PrimaryLink";
import CalendarInput from "@/app/components/CalendarInput";
import EarningsTable from "@/app/components/EarningsTable";
import ReportCards from "@/app/components/ReportCards";

const propertyOptions: SelectOption[] = [
     { id: 1, name: 'All Properties' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]
const propertyOptions2: SelectOption[] = [
     { id: 1, name: 'All Reports' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]

export default function FinancailReportPage() {


     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <div className="flex items-center lg:gap-0 gap-5 lg:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between ">
                    <div>
                         <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Financial Reports</h4>
                         <p className="text-base font-inter font-normal leading-6 text-gray-2200">Comprehensive financial analytics and reporting</p>
                    </div>
                    <div className="flex items-center justify-end flex-1 gap-2">
                         <button className="text-sm rounded-[10px] font-normal cursor-pointer font-inter leading-5 text-black flex items-center justify-center gap-2 py-[9px] px-[14px] bg-transparent border border-gray-2400">
                              <img src="/images/export-arrow.svg" alt="" /> Export CSV</button>
                         <div className="w-fit">
                              <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5 bg-blue-1100!" variant="primary">
                                   <img src="/images/file-icon.svg" className="brightness-[28]" alt="" />  Download PDF
                              </PrimaryLink>
                         </div>
                    </div>
               </div>
               <div className="xl:mt-6 mt-5 items-center border border-gray-1300 bg-white rounded-xl shadow-10xl p-4 flex xl:flex-nowrap flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-1400">
                         <img src="/images/filter-icon.svg" alt="" />Filters
                    </div>
                    <div className="md:max-w-[140px]">
                         <CalendarInput label="From" placeholder="From" />
                    </div>
                    <h6 className="font-inter h-fit text-base md:block hidden font-normal text-gray-1400">–</h6>
                    <div className="md:max-w-[140px]">
                         <CalendarInput label="From" placeholder="To" />
                    </div>
                    <div className="md:max-w-[180px] w-full">
                         <SelectBox
                              options={propertyOptions}
                              defaultValue={propertyOptions[0]}
                              onChange={(val) => console.log('Property:', val)}
                         />
                    </div>
                    <div className="md:max-w-[180px] w-full">
                         <SelectBox
                              options={propertyOptions2}
                              defaultValue={propertyOptions[1]}
                              onChange={(val) => console.log('Property2:', val)}
                         />
                    </div>
               </div>
               <ReportCards></ReportCards>
               <div className="border pt-4 mt-4 overflow-hidden border-gray-1300 rounded-[10px] shadow-12xl">
                    <div className="px-4 py-3">
                         <h4 className="font-inter font-bold text-base leading-6 text-black-1000">Property-wise Earnings</h4>
                    </div>
                    <EarningsTable></EarningsTable>
               </div>
          </div>
     );
}
