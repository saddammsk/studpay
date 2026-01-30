import SelectBox, { SelectOption } from "@/app/components/SelectBox";
import { DatePicker } from "@/app/components/DatePicker";
import MovementsHistoryTable from "@/app/components/MovementsHistoryTable";
import Pagination from "@/app/ui/Pagination";

const propertyOptions: SelectOption[] = [
     { id: 1, name: 'All Properties' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]
const propertyOptions2: SelectOption[] = [
     { id: 1, name: 'All Types' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]
const propertyOptions3: SelectOption[] = [
     { id: 1, name: 'All Status' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]

export default function RecentMovementsPage() {


     return (
               <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
                    <div className="flex items-center sm:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between ">
                         <div>
                              <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Recent Movements</h4>
                              <p className="text-base font-inter font-normal leading-6 text-gray-2200">Complete history of your financial movements</p>
                         </div>
                         <div className="flex items-center gap-3">
                              <button className="text-sm rounded-[10px] font-normal cursor-pointer font-inter leading-5 text-black flex items-center justify-center gap-2 py-[9px] px-[14px] bg-transparent border border-gray-2400">
                                   <img src="/images/export-icon2.svg" alt="" /> Export</button>
                         </div>
                    </div>
                    <div className="xl:mt-[64px] mt-5 border border-gray-1300 bg-white rounded-xl shadow-10xl p-4 flex xl:flex-nowrap flex-wrap gap-3 mb-6">
                         <div className="">
                              <DatePicker></DatePicker>
                         </div>
                         <div className="max-w-[180px] w-full">
                              <SelectBox
                                   options={propertyOptions}
                                   defaultValue={propertyOptions[0]}
                                   onChange={(val) => console.log('Property:', val)}
                              />
                         </div>
                         <div className="max-w-[180px] w-full">
                              <SelectBox
                                   options={propertyOptions2}
                                   defaultValue={propertyOptions[1]}
                                   onChange={(val) => console.log('Property2:', val)}
                              />
                         </div>
                         <div className="max-w-[140px] w-full">
                              <SelectBox
                                   options={propertyOptions3}
                                   defaultValue={propertyOptions[2]}
                                   onChange={(val) => console.log('Property3:', val)}
                              />
                         </div>
                         <div className="relative w-full max-w-[521px]">
                              <input type="text" className="text-sm font-inter pl-9 w-full text-gray-1400 placeholder:text-gray-1400 bg-gray-1600 border border-gray-1300 px-3 h-10 rounded-[10px]" placeholder="Search transactions..." />
                              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                   <img src="/images/search-icon.svg" alt="" />
                              </div>
                         </div>
                    </div>
                    <MovementsHistoryTable></MovementsHistoryTable>
                    <div className="border flex-wrap gap-5 bg-white border-gray-1300 shadow-10xl rounded-xl flex items-center justify-between px-6 py-4">
                         <h6 className="text-sm font-normal leading-5 text-gray-1400">Showing 1 to 10 of 50 transactions</h6>
                         <Pagination></Pagination>
                    </div>
               </div>
     );
}
