"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type Studio = {
      id: number;
      title: string;
      image: string;
      status: string;
      location: string;
      applications: number;
      views: string;
      likes: string;
      price: string;
};

const studios: Studio[] = [
      {
            id: 1,
            title: "Studio Montmartre",
            image: "/images/Studio-Montmartre.jpg",
            status: "Active",
            location: "15 Rue des Abbesses, 75018 Paris",
            applications: 28,
            views: "2.5K",
            likes: "1.2K",
            price: "€890/mo",
      },
      {
            id: 2,
            title: "T2 Marais",
            image: "/images/T2Marais.jpg",
            status: "Boosted",
            location: "42 Rue de Rivoli, 75004 Paris",
            applications: 28,
            views: "2.5K",
            likes: "1.2K",
            price: "€1,450/mo",

      },
      {
            id: 3,
            title: "Coliving Saint-Denis",
            image: "/images/ColivingSaint-Denis.jpg",
            status: "Draft",
            location: "8 Avenue du Président Wilson, 93200 Saint-Denis",
            applications: 0,
            views: "",
            likes: "",
            price: "€650/mo",

      },
      {
            id: 4,
            title: "Appartement Bastille",
            image: "/images/AppartementBastille.jpg",
            status: "Active",
            location: "23 Rue de la Roquette, 75011 Paris",
            applications: 28,
            views: "2.5K",
            likes: "1.2K",
            price: "€1,200/mo",

      },
      {
            id: 5,
            title: "Studio Nation",
            image: "/images/StudioNation.jpg",
            status: "Active",
            location: "5 Place de la Nation, 75012 Paris",
            applications: 28,
            views: "2.5K",
            likes: "1.2K",
            price: "€780/mo",

      },
      {
            id: 6,
            title: "Loft République",
            image: "/images/LoftRepublique.jpg",
            status: "Boosted",
            location: "18 Boulevard du Temple, 75011 Paris",
            applications: 28,
            views: "2.5K",
            likes: "1.2K",
            price: "€1,850/mo",
      },
];

const statusColors: Record<string, { bg: string; text: string }> = {
      Active: { bg: "bg-green13", text: "text-darkgreen" },
      Boosted: { bg: "bg-white", text: "text-blue-1200" },
      Draft: { bg: "bg-lightgray", text: "text-gray24" },
};

interface StudioCardsProps {
      view: "grid" | "list";
      searchQuery?: string;
      statusFilter?: string;
}

export default function StudioCards({ view, searchQuery = "", statusFilter = "all" }: StudioCardsProps) {
      const filteredStudios = useMemo(() => {
            let filtered = studios;

            if (statusFilter && statusFilter !== "all") {
                  filtered = filtered.filter((studio) => 
                        studio.status.toLowerCase() === statusFilter.toLowerCase()
                  );
            }

            if (searchQuery.trim()) {
                  const query = searchQuery.toLowerCase();
                  filtered = filtered.filter((studio) => {
                        return (
                              studio.title.toLowerCase().includes(query) ||
                              studio.location.toLowerCase().includes(query) ||
                              studio.status.toLowerCase().includes(query) ||
                              studio.price.toLowerCase().includes(query)
                        );
                  });
            }

            return filtered;
      }, [searchQuery, statusFilter]);

      if (filteredStudios.length === 0) {
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
                  {filteredStudios.map((studio) => {
                        const colors = statusColors[studio.status] || {
                              bg: "bg-gray-200",
                              text: "text-gray-600",
                        };

                        return (
                              <div key={studio.id} className="group hover:shadow-15xl transition-all duration-500 ease-in-out bg-white shadow-14xl border-gray17 rounded-xl">
                                    <Link href={"ListingsDetail"} className={view === "grid" ? "" : "flex flex-row gap-6"}>
                                          <div className={`relative flex flex-col overflow-hidden ${view === "grid" ? "rounded-t-xl " : "rounded-xl md:w-2/5 w-full"}`}>
                                                <Image width={520} height={320}
                                                      src={studio.image}
                                                      alt={studio.title}
                                                      className="w-full object-cover rounded-t-xl max-h-[320px] group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                                                />
                                                <ul className="flex items-center justify-between absolute top-0 left-0 w-full px-3 py-3.25">
                                                      <li>
                                                            <span className={`inline-flex items-center justify-center rounded-full h-6 px-2.5 font-normal text-xs leading-4 ${colors.bg} ${colors.text}`}>
                                                                  {studio.status}
                                                            </span>
                                                      </li>
                                                      <li>
                                                            <span className="flex items-center justify-center bg-white rounded-[10px] w-8 h-8">
                                                                  <img src={"/images/dots-icon.svg"} alt="options" />
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="p-4 flex-1 flex flex-col justify-between">
                                                <h4 className="text-black-1100 font-bold text-lg leading-7">
                                                      {studio.title}
                                                </h4>
                                                <div className="w-full">
                                                <p className="text-gray24 font-normal text-sm leading-5 gap-1.5 flex items-center mt-1.75">
                                                      <img src={"/images/location.svg"} alt="" />
                                                      {studio.location}
                                                </p>
                                                <div className="pt-3 mt-3 border-t border-solid border-gray-1200 4xl:gap-0 gap-4 flex 4xl:flex-row lg:flex-col sm:flex-row flex-col 4xl:items-center lg:items-start sm:items-center items-start justify-between">
                                                      <ul className="flex items-center gap-3">
                                                            <li className="flex items-center gap-1.5">
                                                                  <span>
                                                                   <img src={"/images/user-icon.svg"} alt="Property" />
                                                                  </span>
                                                                  <p className="text-gray24 font-inter font-normal text-sm leading-5 flex items-center gap-1.5">
                                                                        <span className="text-black-1100 flex">{studio.applications}</span>
                                                                        applications
                                                                  </p>
                                                            </li>
                                                            <li className="flex items-center gap-3">
                                                                  <span>
                                                                      <img src={"/images/eyes-icon.svg"} alt="Property" />
                                                                  </span>
                                                                  <p className="text-black14 font-inter font-semibold text-xs leading-normal tracking-[-0.24px] flex items-center gap-1.5">
                                                                        {studio.views}
                                                                  </p>
                                                            </li>
                                                            <li className="flex items-center gap-3">
                                                                  <span>
                                                                        <img src={"/images/heart-icon.svg"} alt="Property" />
                                                                  </span>
                                                                  <p className="text-black14 font-inter font-semibold text-xs leading-normal tracking-[-0.24px] flex items-center gap-1.5">
                                                                        {studio.likes}
                                                                  </p>
                                                            </li>
                                                      </ul>
                                                      <h5 className="text-black-1100 text-lg font-bold leading-7 font-inter">
                                                            {studio.price}
                                                      </h5>
                                                </div>
                                                </div>
                                          </div>
                                    </Link>
                              </div>
                        );
                  })}
            </div>
      );
}