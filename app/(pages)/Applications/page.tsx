"use client";
import { useState } from "react";
import InputField from "@/app/ui/InputField";
import StatusDropdown from "@/app/components/StatusDropdown";
import ApplicationTable from "@/app/components/ApplicationTable";
import DashboardLayout from "@/layouts/DashboardLayout";


export default function ApplicationsPage() {
     const [search, setSearch] = useState("");



     return (
          <DashboardLayout title="Applications" className="bg-gray-1900"  showWallet={false}>
               <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
                    <div className="mb-6">
                         <h4 className="text-2xl font-bold leading-8 text-black-1200 mb-1">Applications</h4>
                         <p className="text-base font-inter font-normal leading-6 text-gray-2200">Review and manage student rental applications with AI-powered risk assessment</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap">
                         <div className="w-full max-w-[320px]">
                              <InputField className="pl-10! h-10!"
                                   label=""
                                   placeholder="Search by student or invoice..."
                                   value={search}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setSearch(e.target.value)}
                                   leftIconSrc="/images/search-icon.svg"
                                   id="search"
                                   name="search"
                              />
                         </div>
                         <div className="flex gap-2">
                              <StatusDropdown
                                   buttonLabel="Status"
                                   buttonClassName="bg-gray-50"
                                   leftIcon="/images/filter-icon.svg"
                                   rightIcon="/images/droparrow.svg"
                                   items={[
                                        { label: 'Edit', shortcut: '⌘E', onClick: () => console.log('Edit') },
                                        { label: 'Duplicate', shortcut: '⌘D', onClick: () => console.log('Duplicate') },
                                        { divider: true },
                                        { label: 'Archive', shortcut: '⌘A', onClick: () => console.log('Archive') },
                                        { label: 'Delete', shortcut: '⌘D', onClick: () => console.log('Delete') },
                                   ]}
                              />
                              <StatusDropdown
                                   buttonLabel="AI Risk"
                                   buttonClassName="bg-gray-50"
                                   leftIcon="/images/star.svg"
                                   rightIcon="/images/droparrow.svg"
                                   items={[
                                        { label: 'Edit', shortcut: '⌘E', onClick: () => console.log('Edit') },
                                        { label: 'Duplicate', shortcut: '⌘D', onClick: () => console.log('Duplicate') },
                                        { divider: true },
                                        { label: 'Archive', shortcut: '⌘A', onClick: () => console.log('Archive') },
                                        { label: 'Delete', shortcut: '⌘D', onClick: () => console.log('Delete') },
                                   ]}
                              />

                         </div>
                    </div>
                    <ApplicationTable></ApplicationTable>
                    <div className="flex items-center justify-between mt-4">
                         <h6 className="text-sm font-inter leading-5 text-gray-1000">Showing 8 of 8 applications</h6>
                         <h6 className="text-sm font-inter leading-5 text-gray-1000">2 pending review</h6>
                    </div>
               </div>
          </DashboardLayout>
     );
}
