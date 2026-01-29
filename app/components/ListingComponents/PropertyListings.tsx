"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchListings, filterByStatus, searchListings } from "@/store/slices/listingsSlice";
import { StudioCardSkeletonGrid } from "./StudioCardSkeleton";
import ListingItemDropdown from "./ListingItemDropdown";

interface PropertyListingsProps {
  view: "grid" | "list";
  searchQuery?: string;
  statusFilter?: string;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  active: { bg: "bg-green13", text: "text-darkgreen" },
  boosted: { bg: "bg-white", text: "text-blue-1200" },
  draft: { bg: "bg-lightgray", text: "text-gray24" },
};

export default function PropertyListings({ view, searchQuery = "", statusFilter = "all" }: PropertyListingsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredItems, loading } = useSelector((state: RootState) => state.listings);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterByStatus(statusFilter));
  }, [statusFilter, dispatch]);

  useEffect(() => {
    dispatch(searchListings(searchQuery));
  }, [searchQuery, dispatch]);

  if (loading) {
    return <StudioCardSkeletonGrid view={view} count={6} />;
  }

  if (filteredItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <img 
          src="/images/search-icon.svg" 
          alt="No results" 
          className="w-16 h-16 opacity-30 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No properties found
        </h3>
        <p className="text-gray-500 text-center">
          Try adjusting your filters to find what {"you're"} looking for
        </p>
      </div>
    );
  }

  return (
<div className={view === "grid" ? "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6" : "flex flex-col gap-6"}>
  {filteredItems.map((studio: typeof filteredItems[number]) => {

      const colors: { bg: string; text: string } = statusColors[studio.status] || { bg: "bg-gray-200", text: "text-gray-600" };
      return (
        <div key={studio.id} className="group hover:shadow-15xl transition-all duration-500 ease-in-out bg-white shadow-14xl border-gray17 rounded-xl">
            <div className={view === "grid" ? "" : "flex flex-row gap-6"}>
              <div className={`relative flex flex-col overflow-hidden ${view === "grid" ? "rounded-t-xl" : "rounded-xl md:w-2/5 w-full"}`}>
              <Link href={`/Listings/${studio.id}`}>
              <Image
                  width={520}
                  height={320}
                  src={typeof studio.image === "string" && studio.image !== "" ? studio.image : "/images/building-dialog.png"}
                  alt={String(studio.title ?? "Property")}
                  className="w-full object-cover h-[320px] rounded-t-xl group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                  />
              </Link>

                  <ul className="flex items-center justify-between absolute top-0 left-0 w-full px-3 py-3.25">
                    <li>
                        <span className={`inline-flex items-center justify-center rounded-full h-6 px-2.5 font-normal text-xs leading-4 ${colors.bg} ${colors.text}`}>
                          {studio.status}
                        </span>
                    </li>
                    <li>
                        <ListingItemDropdown/>

                    </li>
                  </ul>
              </div>
              <Link href={`/Listings/${studio.id}`}>
              <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-black-1100 font-bold text-lg leading-7">{studio.title}</h4>
                  <div className="w-full">
                    <p className="text-gray24 font-normal text-sm leading-5 gap-1.5 flex items-center mt-1.75">
                        <img src={"/images/location.svg"} alt="" />
                        {studio.address}
                    </p>
                    <div className="pt-3 mt-3 border-t border-solid border-gray-1200 4xl:gap-0 gap-4 flex 4xl:flex-row lg:flex-col sm:flex-row flex-col 4xl:items-center lg:items-start sm:items-center items-start justify-between">
                        <ul className="flex items-center gap-3">
                          <li className="flex items-center gap-1.5">
                              <span><img src={"/icons/user-icon-2.svg"} alt="Property" /></span>
                              <p className="text-gray24 font-inter font-normal text-sm leading-5 flex items-center gap-1.5">
                                <span className="text-black-1100 flex">{studio.applications}</span>
                                applications
                              </p>
                          </li>
                          <li className="flex items-center gap-3">
                              <span><img src={"/images/eyes-icon.svg"} alt="Property" /></span>
                              <p className="text-black14 font-inter font-semibold text-xs leading-normal tracking-[-0.24px] flex items-center gap-1.5">
                                {studio.views}
                              </p>
                          </li>
                          <li className="flex items-center gap-3">
                              <span><img src={"/images/heart-icon.svg"} alt="Property" /></span>
                              <p className="text-black14 font-inter font-semibold text-xs leading-normal tracking-[-0.24px] flex items-center gap-1.5">
                                {studio.likes}
                              </p>
                          </li>
                        </ul>
                        <h5 className="text-black-1100 text-lg font-bold leading-7 font-inter">{studio.price}</h5>
                    </div>
                  </div>
              </div>
              </Link>
            </div>
        </div>
      );
  })}
</div>
  );
}
