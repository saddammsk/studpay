"use client";

import { useState } from "react";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InputField from "@/app/ui/InputField";
import DropdownMenu from "@/app/ui/DropdownMenu";
import DashboardLayout from "@/layouts/DashboardLayout";
import PropertyListings from "@/app/components/ListingComponents/PropertyListings";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Listing() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
    const { filteredItems, loading } = useSelector((state: RootState) => state.listings);
  
  const countItems = filteredItems.length;

   const statusMenuItems = [
            { label: 'All Status', value: 'all' },
            { label: 'Active', value: 'active' },
            { label: 'Boosted', value: 'boosted' },
            { label: 'Draft', value: 'draft' },
      ];

      const handleStatusChange = (value: string) => {
            setStatusFilter(value);
      };

      const handleClearFilters = () => {
            setSearchQuery("");
            setStatusFilter("all");
      };


  return (
    <DashboardLayout title="Listings" showWallet={false} className={"bg-gray-1900"}>
      <div className="pl-3 md:pr-9 pr-3 pt-6 pb-56">
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="text-black-1100 font-inter font-bold sm:text-2xl text-lg sm:leading-8 leading-6 mb-0.5">Property Listings</h4>
            <p className="text-gray24 font-normal text-sm leading-5">Manage your {countItems} properties</p>
          </div>
          <PrimaryLink href="/" className="h-10 w-auto! inline-flex sm:gap-4 gap-2 px-4 bg-blue-1500 text-white">
            <img src="../images/plus-icon.svg" alt="" /> Add Listing
          </PrimaryLink>

        </div>
        <div className="flex z-10 relative sm:flex-no sm:flex-nowrap flex-wrap sm:items-baseline items-start sm:gap-4 gap-0 mt-3.5 md:mb-6 mb-5">
          <form onSubmit={(e) => e.preventDefault()} className="sm:w-full max-w-[384px] w-full h-fit">
            <InputField
              label={""}
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIconSrc="/images/search-icon.svg"
              id="search"
              name="search"
              variant="filled3"
            />
          </form>
          <div className="sm:-mt-3 sm:w-auto sm:flex-0 flex-1 sm:pr-0 pr-3">
            <DropdownMenu label="All Status"
              items={statusMenuItems}
              onSelect={handleStatusChange}
              selectedValue={statusFilter}/>
          </div>
            <ul className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1">
              <li>
                <button
                  onClick={() => setView("grid")}
                  className={`flex items-center  cursor-pointer justify-center w-8 h-8 rounded-[10px] transition
                    ${view === "grid" ? "bg-blue-1300" : "hover:bg-gray-100"}`}
                >
                  <img src="/images/grid-icon.svg" alt="Grid view" />
                </button>
              </li>

              <li>
                <button
                  onClick={() => setView("list")}
                  className={`flex items-center cursor-pointer justify-center w-8 h-8 rounded-[10px] transition
                    ${view === "list" ? "bg-blue-1300" : "hover:bg-gray-100"}`}>
                  <img src="/images/list-icon.svg" alt="List view" />
                </button>
              </li>
            </ul>
        </div>

        <PropertyListings view={view} searchQuery={searchQuery} statusFilter={statusFilter} />
      </div>
    </DashboardLayout>
  );
}
