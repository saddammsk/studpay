
import SelectBox, { SelectOption } from "@/app/components/SelectBox";
import { DatePicker } from "@/app/components/DatePicker";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InvoiceTable from "@/app/components/InvoiceTable";

const propertyOptions: SelectOption[] = [
     { id: 1, name: 'All Status' },
     { id: 2, name: 'House' },
     { id: 3, name: 'Apartment' },
]


export default function InvoicePage() {

     return (
         
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <div className="flex items-center sm:flex-nowrap flex-wrap sm:gap-0 gap-4 justify-between ">
                    <div>
                         <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">Invoices</h4>
                         <p className="text-base font-inter font-normal leading-6 text-gray-2200">Manage and track all student invoices</p>
                    </div>
                    <div className="flex items-center gap-3">
                         <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5 bg-blue-1500!" variant="primary">
                              <img src="/images/plus-icon.svg" className="brightness-[28]" alt="" /> Create Invoice
                         </PrimaryLink>
                    </div>
               </div>
               <div className="xl:mt-[30px] mt-5 flex xl:flex-nowrap flex-wrap gap-3 mb-6">
                    <div className="max-w-[140px] w-full">
                         <SelectBox className="bg-white!"
                              options={propertyOptions}
                              defaultValue={propertyOptions[0]}
                              onChange={(val) => console.log('Property:', val)}
                         />
                    </div>
                    <div className="w-60">
                         <DatePicker className="bg-white!"></DatePicker>
                    </div>

               </div>
               <InvoiceTable></InvoiceTable>
               <div className="mt-4">
                    <h6 className="text-sm font-normal leading-5 text-gray-1400">Showing 8 of 8 invoices</h6>
               </div>
          </div>
     );
}
