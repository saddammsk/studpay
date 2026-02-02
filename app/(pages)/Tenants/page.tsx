import TenantsTable from "@/app/components/TenantsTable";
import PrimaryLink from "@/app/ui/PrimaryLink";
import Image from 'next/image' 


export default function ListingReviewPublish() {

      return (
            <div className="pl-3 xl:pr-9 pr-3 py-6">
                  <div className="bg-white rounded-[15px]">
                        <div className="border-b border-solid border-gray-1100 md:p-6 p-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-3 justify-between">
                              <div className="">
                                    <h4 className="text-black-1200 font-inter font-bold text-2xl leading-8  mb-1">Tenants</h4>
                                    <p className="text-gray-1400 font-inter font-normal xl:text-base text-[13px] leading-6">Manage API access and bulk import your property data</p>
                              </div>
                              <PrimaryLink className="h-10 rounded-xl w-auto! gap-4 px-4"><Image src="../images/plus-icon.svg" alt="Image" width={16} height={16} /> Add Tenant</PrimaryLink>
                        </div>
                    <div className=""> 
                        <TenantsTable></TenantsTable>
                     </div>
                  </div>
            </div>
      );
}
