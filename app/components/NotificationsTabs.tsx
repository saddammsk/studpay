"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

/* ================= TYPES ================= */

type Notification = {
      id: number;
      category: string;
      status: "Application" | "Payment" | "Lease";
      title: string;
      description: string;
      location: string;
      person: string;
      time: string;
      icon: string;
      clock: string;
};

type Category = {
      name: string;
      number: string;
      items: Notification[];
};

/* ================= DATA ================= */

const notifications: Notification[] = [
      {
            id: 1,
            category: "Application",
            status: "Application",
            title: "New application received",
            description:
                  "Thomas Martin has submitted an application for Studio 23B. Documents are pending verification.",
            location: "Studio 23B, Paris 11e",
            person: "Thomas Martin",
            time: "2 min ago",
            icon: "/images/file-icon.svg",
            clock: "/images/clock-yellow.svg",
      },
      {
            id: 2,
            category: "Payment",
            status: "Payment",
            title: "Rent payment received",
            description:
                  "Monthly rent payment has been successfully processed and credited to your wallet.",
            location: "2BR Apt, Lyon 3e €620.00",
            person: "Sophie Bernard",
            time: "15 min ago",
            icon: "/images/payment.svg",
            clock: "/images/check-icon2.svg",
      },
      {
            id: 3,
            category: "Lease",
            status: "Lease",
            title: "Lease signed successfully",
            description: "The lease agreement for Studio 12A has been signed by all parties. Move-in date confirmed.",
            location: "Studio 12A, Marseille 6e",
            person: "Lucas Petit",
            time: "1 hour ago",
            icon: "/images/edit-icon.svg",
            clock: "/images/clock-yellow.svg",
      },
      {
            id: 4,
            category: "Application",
            status: "Application",
            title: "Application under review",
            description:
                  "Emma Leroy's application is being reviewed. Income verification in progress.",
            location: "1BR, Paris 20e",
            person: "Emma Leroy",
            time: "2 hours ago",
            icon: "/images/file-icon.svg",
            clock: "/images/file-icon.svg",
      },
      {
            id: 5,
            category: "Payment",
            status: "Payment",
            title: "Payment failed",
            description:
                  "The scheduled rent payment could not be processed. Please contact the tenant.",
            location: "Studio 8C, Bordeaux €620.00",
            person: "Marc Dubois",
            time: "3 hours ago",
            icon: "/images/payment.svg",
            clock: "/images/error-icon.svg",
      },
      {
            id: 6,
            category: "Lease",
            status: "Lease",
            title: "Lease renewal pending",
            description: "The lease for Apartment 5A is expiring in 30 days. Renewal documents have been sent.",
            location: "Apt 5A, Toulouse",
            person: "Claire Fontaine",
            time: "5 hours ago",
            icon: "/images/edit-icon.svg",
            clock: "/images/clock-yellow.svg",
      },
      {
            id: 7,
            category: "Application",
            status: "Application",
            title: "Application approved",
            description:
                  "Julie Moreau's application has been approved. Lease generation in progress.",
            location: "Studio 15D, Nice",
            person: "Julie Moreau",
            time: "Yesterday",
            icon: "/images/file-icon.svg",
            clock: "/images/check-icon2.svg",
      },
      {
            id: 8,
            category: "Payment",
            status: "Payment",
            title: "Deposit received",
            description:
                  "Security deposit payment has been received and held in escrow.",
            location: "Studio 8C, Bordeaux €620.00",
            person: "Antoine Blanc",
            time: "Yesterday",
            icon: "/images/payment.svg",
            clock: "/images/check-icon2.svg",
      },
      {
            id: 9,
            category: "Lease",
            status: "Lease",
            title: "Move-in reminder",
            description: "Scheduled move-in for Pierre Laurent is tomorrow. Key handover at 10:00 AM.",
            location: "Studio 7B, Lille",
            person: "Pierre Laurent",
            time: "2 days ago",
            icon: "/images/edit-icon.svg",
            clock: "/images/file-icon.svg",
      },
];

/* ================= CATEGORY LOGIC ================= */

const categories: Category[] = [
      {
            name: "All",
            number: notifications.length.toString(),
            items: notifications,
      },
      {
            name: "Applications",
            number: notifications.filter((n) => n.category === "Application").length.toString(),
            items: notifications.filter((n) => n.category === "Application"),
      },
      {
            name: "Leases",
            number: notifications.filter((n) => n.category === "Lease").length.toString(),
            items: notifications.filter((n) => n.category === "Lease"),
      },
      {
            name: "Payments",
            number: notifications.filter((n) => n.category === "Payment").length.toString(),
            items: notifications.filter((n) => n.category === "Payment"),
      },

];

/* ================= STYLES ================= */

const statusStyles = {
      Application: "bg-blue-1200/10",
      Payment: "bg-yellow12/10",
      Lease: "bg-green14/10",
};

const categoryStyles: Record<string, string> = {
      Application: "bg-blue-1200/10 text-blue-1200",
      Payment: "bg-yellow12/10 text-yellow12",
      Lease: "bg-green14/10 text-green14",
};

/* ================= COMPONENT ================= */

export default function NotificationsTabs() {
      return (
            <div className="w-full">
                  <TabGroup>
                        
                        <TabList className="overflow-x-auto bg-blue-1300 rounded-xl  p-1">
                              <div className="flex gap-1">
                                    {categories.map((cat) => (
                                          <Tab
                                                key={cat.name}
                                                className="group cursor-pointer flex items-center gap-2 rounded-[10px] px-4 py-2 text-sm text-gray24 focus:outline-none data-selected:bg-white data-selected:text-black-1100"
                                          >
                                                {cat.name}
                                                <span className="flex h-5.25 w-5.25 items-center justify-center rounded-full bg-gray25 text-xs text-gray24 group-data-selected:bg-blue-1200 group-data-selected:text-white">
                                                      {cat.number}
                                                </span>
                                          </Tab>
                                    ))}
                              </div>
                        </TabList>

                         
                        <TabPanels className="mt-3">
                              {categories.map((cat) => (
                                    <TabPanel key={cat.name} className="rounded-xl bg-white border border-gray17">
                                          {cat.items.map((item, index) => {
                                                 
                                                const isActive = cat.name === "All" && index < 3;

                                                return (
                                                      <div key={item.id}
                                                            className={`flex sm:gap-4 gap-2 border-b border-gray17 sm:p-4 p-3 last:border-b-0 ${index === 0 ? "border-t-xl" : ""} relative after:absolute after:content='' after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-blue-1200 after:w-1 after:h-8 after:rounded-r-[9999px] after:opacity-0 ${isActive ? "bg-blue14/30 after:opacity-100" : "" // change bg color for active
                                                                  }`}
                                                      >
                                                            
                                                            <div
                                                                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${statusStyles[item.status]}`}>
                                                                  <img src={item.icon} alt="" />
                                                            </div>

                                                            
                                                            <div className="flex-1">
                                                                  <div className="flex items-center justify-between">
                                                                        <div className="flex items-center gap-2">
                                                                              <span
                                                                                    className={`rounded-full flex items-center justify-center text-xs font-normal px-2 h-5 ${categoryStyles[item.category]
                                                                                          }`}
                                                                              >
                                                                                    {item.category}
                                                                              </span>
                                                                              <div className="flex items-center gap-1">
                                                                                    <img src={item.clock} alt="" className="h-4 w-4" />
                                                                              </div>
                                                                        </div>
                                                                        <span className="text-xs text-gray24 font-normal leading-4">{item.time}</span>
                                                                  </div>

                                                                  <div className="mt-2">
                                                                        <h4
                                                                              className={`text-black-1100 text-sm leading-5 ${isActive ? "font-bold" : "font-normal"
                                                                                    }`}
                                                                        >
                                                                              {item.title}
                                                                        </h4>
                                                                        <p className="text-sm mt-0.5 font-normal leading-5 text-gray24 line-clamp-2">
                                                                              {item.description}
                                                                        </p>

                                                                        <div className="mt-2 flex sm:gap-4 gap-2">
                                                                              <span className="text-gray24 font-normal text-xs leading-4">
                                                                                    📍 {item.location}
                                                                              </span>
                                                                              <span className="text-gray24 font-normal text-xs leading-4">
                                                                                    👤 {item.person}
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                );
                                          })}
                                    </TabPanel>
                              ))}
                        </TabPanels>
                  </TabGroup>
            </div>
      );
}