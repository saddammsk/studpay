'use client'
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import CircularProgress from "@/app/components/CircularProgress";
import ProgressBar from "@/app/ui/ProgressBar";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InputField from "@/app/ui/InputField";
import { Checkbox } from '@headlessui/react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from "next/link";



type Requirement = {
     id: number;
     label: string;
};


type Reject = {
     id: number;
     label: string;
};

const cardData = [
     {
          title: "Payment History",
          icon: "/images/trend-down.svg",
          score: 15,
          scoreColor: "text-green-1300",
          progress: "25%",
          description: "No late payments in rental or credit history",
          weight: "30%",
     },
     {
          title: "Income Verification",
          icon: "/images/trend-down.svg",
          score: 22,
          scoreColor: "text-green-1300",
          progress: "34%",
          description: "Income meets 2.8x rent requirement with co-signer",
          weight: "25%",
     },
     {
          title: "Credit Score",
          icon: "/images/minus-icon.svg",
          score: 35,
          scoreColor: "text-yellow-1100",
          progress: "40%",
          description: "Limited credit history typical for students",
          weight: "20%",
     },
     {
          title: "Identity Verification",
          icon: "/images/trend-down.svg",
          score: 8,
          scoreColor: "text-green-1300",
          progress: "34%",
          description: "All documents verified and valid",
          weight: "15%",
     },
     {
          title: "Enrollment Status",
          icon: "/images/trend-down.svg",
          score: 12,
          scoreColor: "text-green-1300",
          progress: "34%",
          description: "Full-time enrollment confirmed through 2025",
          weight: "12%",
     },
];

const documentsData = [
     {
          title: "Identification",
          verifiedCount: "2/2 verified",
          files: [
               { name: "Passport.pdf", status: "verified" },
               { name: "Driver_License.jpg", status: "verified" },
          ],
     },
     {
          title: "School Certificate",
          verifiedCount: "2/3 verified",
          files: [
               { name: "Passport.pdf", status: "verified" },
               { name: "Driver_License.jpg", status: "pending" },
               { name: "Passport.pdf", status: "verified" },
          ],
     },
     {
          title: "Guarantor Documents",
          verifiedCount: "1/3 verified",
          files: [
               { name: "Passport.pdf", status: "verified" },
               { name: "Driver_License.jpg", status: "pending" },
               { name: "Passport.pdf", status: "verified" },
          ],
     },
];

type ItemStatus = "ok" | "issue" | null;


interface ChecklistItem {
     id: number;
     label: string;
     status: ItemStatus;
}

export default function ApplicationReviewPage() {


     const [items, setItems] = useState<ChecklistItem[]>([
          { id: 1, label: "Sofa & Cushions", status: null },
          { id: 2, label: "TV & Electronics", status: null },
          { id: 3, label: "Flooring & Carpet", status: null },
          { id: 4, label: "Windows & Curtains", status: null },
     ]);


     const [notes, setNotes] = useState("");

     const updateStatus = (id: number, status: ItemStatus) => {
          setItems((prev) =>
               prev.map((item) =>
                    item.id === id ? { ...item, status } : item
               )
          );
     };

     const [name, setName] = useState("");
     const [requestChecked, setRequestChecked] = useState<number[]>([]);
     const [rejectChecked, setRejectChecked] = useState<number[]>([]);


     const toggleRequest = (id: number) => {
          setRequestChecked((prev) =>
               prev.includes(id)
                    ? prev.filter((i) => i !== id)
                    : [...prev, id]
          );
     };

     const toggleReject = (id: number) => {
          setRejectChecked((prev) =>
               prev.includes(id)
                    ? prev.filter((i) => i !== id)
                    : [...prev, id]
          );
     };

     const requirements: Requirement[] = [
          { id: 1, label: "Proof of income (last 3 months)" },
          { id: 2, label: "Employment verification letter" },
          { id: 3, label: "Previous landlord reference" },
          { id: 4, label: "Guarantor documentation" },
     ];
     const rejects: Reject[] = [
          { id: 1, label: "Insufficient credit score" },
          { id: 2, label: "Income below requirement" },
          { id: 3, label: "Negative references" },
          { id: 4, label: "Failed document verification" },
          { id: 5, label: "Other (specify below)" },
     ];


     return (
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4 font-inter">
               <div className="mb-6">
                    <Link href="/Applications" className="flex items-center gap-3 text-sm font-inter font-medium text-gray-1000 py-2.5 px-3"><img src="/images/left-arrow.svg" alt="" /> Back to Applications</Link>
                    <h4 className="text-2xl font-bold leading-8 text-black-1200 mb-1 mt-1.5">Applications</h4>
                    <p className="text-base font-inter font-normal leading-6 text-gray-2200">Review and manage student rental applications with AI-powered risk assessment</p>
               </div>
               <TabGroup>
                    <TabList className="border w-fit border-gray-3300 rounded-[10px] bg-blue-1000/[5%] p-1">
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Overview</Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Documents </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Actions  </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Lease  </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Signature  </Tab>
                         <Tab className="text-sm cursor-pointer font-inter font-medium leading-5 text-gray-1400 py-1.5 px-3 inline-block data-selected:bg-white data-selected:shadow-6xl rounded-lg data-selected:text-black-1200">Inspection      </Tab>
                    </TabList>
                    <TabPanels className="mt-6">
                         <TabPanel>
                              <div className="grid lg:grid-cols-2 gap-6">
                                   <div>
                                        <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
                                             <div className="flex justify-between max-w-[562px] mb-4">
                                                  <div className="flex items-center gap-3">
                                                       <img src="/images/user-img2.png" alt="" />
                                                       <div>
                                                            <h6 className="text-base font-inter font-bold leading-6 text-black">Emma Thompson</h6>
                                                            <span className="text-sm font-inter leading-5 font-normal text-gray-1000">Stanford University</span>
                                                       </div>
                                                  </div>
                                                  <div className="text-xs font-inter font-medium rounded-md leading-4 h-fit text-blue-1600 bg-blue-1600/[10%] py-1 px-2.5 inline-block">
                                                       In Review
                                                  </div>
                                             </div>
                                             <ul className="space-y-3">
                                                  <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                                                       <img src="/images/mail-icon2.svg" alt="" />emma.t@university.edu
                                                  </li>
                                                  <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                                                       <img src="/images/call-icon.svg" alt="" />+1 (555) 123-4567
                                                  </li>
                                                  <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                                                       <img src="/images/cap-icon.svg" alt="" />Computer Science • Class of 2025
                                                  </li>
                                                  <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                                                       <img src="/images/location3.svg" alt="" />456 College Ave, Palo Alto, CA
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
                                             <div className="flex items-center gap-2 font-inter text-base font-medium leading-6 text-black mb-3">
                                                  <img src="/images/file-icon3.svg" alt="" />  Property Details
                                             </div>
                                             <ul className="max-w-[562px] space-y-2">
                                                  <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                                                       Property <span className="text-black">Maple Heights</span>
                                                  </li>
                                                  <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                                                       Address <span className="text-black">123 University Ave, Unit 4B</span>
                                                  </li>
                                                  <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                                                       Monthly Rent <span className="text-black">$1,850</span>
                                                  </li>
                                                  <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                                                       Move-in Date <span className="text-black">Feb 1, 2024</span>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
                                             <div className="flex items-center gap-2 font-inter text-base font-medium leading-6 text-black mb-3">
                                                  <img src="/images/calendar2.svg" alt="" /> Application Timeline
                                             </div>
                                             <ul className="space-y-8 ">
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-1300/[10%] w-8 h-8 rounded-full flex items-center justify-center"><img src="/images/tick-icon2.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Application Submitted</h6>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Initial application received with all required documents</span>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Jan 15, 2024</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-1300/[10%]  w-8 h-8 rounded-full flex items-center justify-center"><img src="/images/tick-icon2.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Documents Verified</h6>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">ID, enrollment verification, and income proof validated</span>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Jan 16, 2024</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-1300/[10%]  w-8 h-8 rounded-full flex items-center justify-center"><img src="/images/tick-icon2.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">AI Risk Assessment</h6>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Automated risk analysis completed</span>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Jan 16, 2024</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                                                       <div className=" bg-blue-1600/[10%]  w-8 h-8 rounded-full flex items-center justify-center"><img src="/images/timer-blue.svg" className="w-4 h-4" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Manual Review <span className="text-xs font-inter font-medium leading-4 text-blue-1600 inline-block py-0.5 px-2 rounded-full bg-blue-1600/[10%]">Current</span></h6>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Application pending property manager review</span>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">In Progress</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4">
                                                       <div className=" bg-lightgray  w-8 h-8 rounded-full flex items-center justify-center"><img src="/images/info-icon3.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Final Decision </h6>
                                                            <span className="block text-xs font-normal leading-4 text-gray-1000">Approval or rejection pending</span>
                                                            <span className="block text-xs font-normal leading-4 text-gray-3000">Pending</span>
                                                       </div>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div>
                                        <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
                                             <div className="flex items-center gap-2 mb-4">
                                                  <div className="bg-blue-1600/[10%] rounded-lg w-8 h-8 flex items-center justify-center">
                                                       <img src="/images/star.svg" alt="" />
                                                  </div>
                                                  <div className="">
                                                       <h6 className="text-base font-inter font-bold leading-6 text-black">AI Risk Assessment</h6>
                                                       <span className="block  text-xs font-inter font-normal leading-4 text-gray-1000">Powered by RentFlow AI</span>
                                                  </div>
                                             </div>
                                             <div className="flex items-center gap-6">
                                                  <CircularProgress value={28} max={100} />
                                                  <div className="">
                                                       <div className="py-2 px-3 w-fit flex items-center gap-1.5 text-sm mb-2 font-inter font-medium text-green-1300 bg-green-1300/[10%] rounded-full"><img src="/images/shield-tick.svg" alt="" /> Low Risk</div>
                                                       <p className="text-sm font-inter font-normal leading-5 text-gray-1000">This applicant shows low risk indicators based on payment history,
                                                            verified income, and enrollment status.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="bg-blue-1600/[5%] mb-6 border border-blue-1600/[20%] rounded-lg p-4 flex items-start gap-3">
                                             <img src="/images/info-blue.svg" alt="" />
                                             <div>
                                                  <h6 className="text-sm font-black font-medium text-black mb-1">AI Confidence: 94%</h6>
                                                  <p className="text-xs font-inter font-normal leading-4 text-gray-1000">High confidence based on complete documentation and verified data sources</p>
                                             </div>
                                        </div>
                                        <h4 className="text-base font-medium leading-6 text-black mb-3">Risk Factor Breakdown</h4>
                                        <div className="space-y-3">
                                             {cardData.map((card, index) => (
                                                  <div key={index} className="border border-gray-1100 rounded-lg p-4">
                                                       <div className="max-w-[570px]">
                                                            <div className="flex items-center justify-between mb-2">
                                                                 <div className="flex items-center gap-2 text-sm font-inter font-medium leading-5 text-black">
                                                                      {card.title} <img src={card.icon} alt="" />
                                                                 </div>
                                                                 <h6 className="text-xs flex items-center gap-1.5 font-inter font-normal leading-4 text-gray-1000">
                                                                      <span className={`font-bold ${card.scoreColor}`}>{card.score}</span>/ 100
                                                                 </h6>
                                                            </div>
                                                            <ProgressBar width={card.progress} bgColor={card.scoreColor.replace("text", "bg")} />
                                                            <h6 className="text-xs mt-2 font-inter mb-2 font-normal leading-4 text-gray-1000">{card.description}</h6>
                                                            <h6 className="text-xs font-inter font-normal leading-4 text-gray-1000">Weight: {card.weight}</h6>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                        <ul className="flex items-center my-8 justify-center gap-3 max-w-[604px] mx-auto">
                                             <li className="w-1/2">
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5 bg-green-1300!" variant="primary">
                                                       Approve Application
                                                  </PrimaryLink>
                                             </li>
                                             <li className="w-1/2">
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5 bg-transparent! border border-red-1100 text-red-1100!" variant="primary">
                                                       Reject Application
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                        <p className="text-sm font-inter text-center font-medium leading-5 text-gray-1000">Request Additional Information</p>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="flex flex-wrap gap-2 items-center justify-between">
                                   <ul className="flex gap-6 items-center">
                                        <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black"><span className="w-2 h-2 rounded-full block bg-green-1800"></span> 5 <span className="text-gray-1000">Verified</span></li>
                                        <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black"><span className="w-2 h-2 rounded-full block bg-yellow-1200"></span> 2 <span className="text-gray-1000">Pending</span></li>
                                        <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black"><span className="w-2 h-2 rounded-full block bg-red12"></span> 1 <span className="text-gray-1000">Rejected</span></li>
                                   </ul>
                                   <h6 className="text-sm font-inter font-normal leading-5 text-black"> <span className="text-gray-1000">Total:</span> 8 documents</h6>
                              </div>
                              <div className="my-6">
                                   <form action="">
                                        <div className="flex items-end flex-wrap gap-3">
                                             <div className="w-full max-w-[448px]">
                                                  <InputField
                                                       label=""
                                                       placeholder="Search documents..."
                                                       value={name}
                                                       className="pl-10! !h-10"
                                                       onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setName(e.target.value)}
                                                       leftIconSrc="/images/search-icon.svg"
                                                       id="email"
                                                       name="email"
                                                       variant="default"
                                                  />
                                             </div>
                                             <PrimaryLink type="submit" className="px-4 mb-5 !py-2 w-fit! gap-2.5  border border-gray-1100!" variant="default">
                                                  <img src="/images/filter-icon.svg" alt="" /> Filter
                                             </PrimaryLink>
                                             <PrimaryLink type="submit" className="px-4 mb-5 !py-2 w-fit! gap-2.5 " variant="primary">
                                                  <img src="/images/upload-icon.svg" className="brightness-[36]" alt="" /> Upload Document
                                             </PrimaryLink>
                                        </div>
                                        <div className="space-y-6">
                                             {documentsData.map((section, i) => (
                                                  <div key={i} className="border border-gray-1100 rounded-lg md:p-6 p-3">
                                                       {/* Header */}
                                                       <div className="flex max-w-[1183px] mb-4 items-center justify-between">
                                                            <h6 className="text-lg font-inter font-semibold leading-7 text-black">
                                                                 {section.title}
                                                            </h6>
                                                            <div className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-gray-1000">
                                                                 <img src="/images/checkgreen.svg" alt="" />
                                                                 {section.verifiedCount}
                                                            </div>
                                                       </div>

                                                       {/* Files */}
                                                       <div className="space-y-3">
                                                            {section.files.map((file, index) => (
                                                                 <div
                                                                      key={index}
                                                                      className="border border-gray-1100 rounded-lg flex items-center justify-between md:p-4 p-2.5"
                                                                 >
                                                                      <div className="flex items-center flex-1 gap-4">
                                                                           <div className="bg-lightgray rounded-lg w-10 h-10 flex items-center justify-center">
                                                                                <img src="/images/file-icon3.svg" alt="" />
                                                                           </div>
                                                                           <div className="flex-1">
                                                                                <h4 className="text-base font-inter leading-6 text-black">
                                                                                     {file.name}
                                                                                </h4>
                                                                                <p className="text-sm font-inter font-normal leading-5 text-gray-1000">
                                                                                     PDF • 2.4 MB • Dec 15, 2024
                                                                                </p>
                                                                           </div>
                                                                      </div>

                                                                      <div className="flex items-center gap-3">
                                                                           <div
                                                                                className={`text-xs font-inter font-medium leading-4 py-0.5 px-2.5 rounded-full border bg-lightgray ${file.status === "verified"
                                                                                     ? "text-green-1900 border-green-2000"
                                                                                     : "text-orange-1000 border-orange-1100"
                                                                                     }`}
                                                                           >
                                                                                {file.status}
                                                                           </div>
                                                                           <Link href="">
                                                                                <img src="/images/eye-icon.svg" alt="" />
                                                                           </Link>
                                                                           <Link href="">
                                                                                <img src="/images/export-icon3.svg" alt="" />
                                                                           </Link>
                                                                      </div>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>

                                   </form>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="bg-white border border-gray-1100 rounded-lg shadow-6xl p-6">
                                   <h6 className="text-base font-black font-medium leading-6 text-black mb-4">Application Summary</h6>
                                   <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-between">
                                        <div className="flex items-center gap-3">
                                             <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
                                                  <img src="/images/user-icon5.svg" className="w-4" alt="" />
                                             </div>
                                             <div>
                                                  <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Applicant</h4>
                                                  <p className="text-sm font-medium leading-5 text-black">Sarah Johnson</p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
                                                  <img src="/images/building-icon.svg" className="w-4" alt="" />
                                             </div>
                                             <div>
                                                  <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Property</h4>
                                                  <p className="text-sm font-medium leading-5 text-black">123 Oak Street, Apt 4B</p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
                                                  <img src="/images/calendar4.svg" className="w-4" alt="" />
                                             </div>
                                             <div>
                                                  <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Applied</h4>
                                                  <p className="text-sm font-medium leading-5 text-black">Dec 15, 2024</p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
                                                  <img src="/images/mail-icon3.svg" className="w-4" alt="" />
                                             </div>
                                             <div>
                                                  <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Contact</h4>
                                                  <p className="text-sm font-medium leading-5 text-black">sarah.j@email.com</p>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-6">
                                   <div className="bg-white border border-gray-1100 rounded-lg shadow-6xl pt-6 pb-[30px] px-5">
                                        <div className="flex gap-2 mb-6 items-center justify-center">
                                             <div className="w-8 h-8 rounded-lg bg-orange-1200 flex items-center justify-center">
                                                  <img src="/images/file-icon4.svg" alt="" />
                                             </div>
                                             <div>
                                                  <h6 className="text-base font-medium font-inter leading-6 text-black">Request Documents</h6>
                                                  <span className="text-xs font-inter font-normal leading-4 text-gray-1000">Ask for missing information</span>
                                             </div>
                                        </div>
                                        <form action="" className="w-fit mx-auto ">
                                             <div className="space-y-3 border-b border-gray-1100 pb-4 mb-4">
                                                  {requirements.map((item) => (
                                                       <div key={item.id} className="flex gap-3 items-center">
                                                            <Checkbox
                                                                 checked={requestChecked.includes(item.id)}
                                                                 onChange={() => toggleRequest(item.id)}
                                                                 className="group rounded bgtransparent border border-blue-1600 overflow-hidden w-4 h-4"
                                                            >
                                                                 <div className="hidden w-full h-full group-data-checked:flex items-center justify-center group-data-checked:bg-blue-1600">
                                                                      <img src="/images/check-icon.svg" className="brightness-[40] w-3" />
                                                                 </div>
                                                            </Checkbox>

                                                            <h6 className="text-sm font-inter font-normal text-black">
                                                                 {item.label}
                                                            </h6>
                                                       </div>
                                                  ))}
                                             </div>
                                             <label className="text-xs font-normal leading-4 block text-gray-1000 mb-2.5">Additional notes (optional)</label>
                                             <textarea name="" id="" placeholder="Add context for the applicant..." className="text-sm font-inter mb-1 font-normal leading-5 text-gray-1000 placeholder:text-gray-1000 w-full px-[13px] py-[9px] h-20 rounded-md border border-gray-1100"></textarea>
                                             <PrimaryLink type="submit" className="px-4 !py-2.5 font-medium gap-2.5 !text-black opacity-50 border border-gray-1100!" variant="default">
                                                  <img src="/images/msg-icon.svg" alt="" /> Send Request
                                             </PrimaryLink>
                                        </form>
                                   </div>
                                   <div className="bg-white border border-gray-1100 rounded-lg shadow-6xl pt-6 pb-[30px] px-5">
                                        <div className="flex gap-2 mb-6 items-center justify-center">
                                             <div className="w-8 h-8 rounded-lg bg-gray-3400 flex items-center justify-center">
                                                  <img src="/images/cross-circle-icon.svg" alt="" />
                                             </div>
                                             <div>
                                                  <h6 className="text-base font-medium font-inter leading-6 text-black">Reject Application</h6>
                                                  <span className="text-xs font-inter font-normal leading-4 text-gray-1000">Decline this application</span>
                                             </div>
                                        </div>
                                        <form action="" className="max-w-[302px] mx-auto ">
                                             <div className="space-y-3 border-b border-gray-1100 pb-4 mb-4">
                                                  {rejects.map((item) => (
                                                       <div key={item.id} className="flex gap-3 items-center">
                                                            <Checkbox
                                                                 checked={rejectChecked.includes(item.id)}
                                                                 onChange={() => toggleReject(item.id)}
                                                                 className="group rounded bgtransparent border border-blue-1600 overflow-hidden w-4 h-4"
                                                            >
                                                                 <div className="hidden w-full h-full group-data-checked:flex items-center justify-center group-data-checked:bg-blue-1600">
                                                                      <img src="/images/check-icon.svg" className="brightness-[40] w-3" />
                                                                 </div>
                                                            </Checkbox>

                                                            <h6 className="text-sm font-inter font-normal text-black">
                                                                 {item.label}
                                                            </h6>
                                                       </div>
                                                  ))}
                                             </div>

                                             <label className="text-xs font-normal leading-4 block text-gray-1000 mb-2.5">Internal notes (required)</label>
                                             <textarea name="" id="" placeholder="Add context for the applicant..." className="text-sm font-inter mb-1 font-normal leading-5 text-gray-1000 placeholder:text-gray-1000 w-full px-[13px] py-[9px] h-20 rounded-md border border-gray-1100"></textarea>
                                             <PrimaryLink type="submit" className="px-4 !py-2.5 font-medium gap-2.5 !text-red-1200 opacity-50 border border-red-1300!" variant="default">
                                                  <img src="/images/caution-icon.svg" alt="" /> Reject Application
                                             </PrimaryLink>
                                        </form>
                                   </div>
                                   <div className="bg-white shadow-13xl border border-gray-1100 rounded-lg shadow-6xl pt-6 pb-[30px] px-5">
                                        <div className="max-w-[360px] mx-auto">
                                             <div className="flex gap-2 mb-6 items-center justify-center">
                                                  <div className="w-8 h-8 rounded-lg bg-blue-1600/[10%] flex items-center justify-center">
                                                       <img src="/images/tick-icon-circle.svg" alt="" />
                                                  </div>
                                                  <div>
                                                       <h6 className="text-base font-medium font-inter leading-6 text-black">Accept Application</h6>
                                                       <span className="text-xs font-inter font-normal leading-4 text-gray-1000">Approve and propose lease</span>
                                                  </div>
                                             </div>
                                             <div className="bg-lightgray/[50%] mb-4 rounded-lg p-4 space-y-3">
                                                  <div className="flex items-center justify-between">
                                                       <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Monthly Rent</h6>
                                                       <h6 className="text-sm font-medium leading-5 font-inter text-black">$1,850</h6>
                                                  </div>
                                                  <div className="flex items-center justify-between">
                                                       <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Security Deposit</h6>
                                                       <h6 className="text-sm font-medium leading-5 font-inter text-black">$1,850</h6>
                                                  </div>
                                                  <div className="flex items-center justify-between">
                                                       <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Lease Term</h6>
                                                       <h6 className="text-sm font-medium leading-5 font-inter text-black">12 months</h6>
                                                  </div>
                                                  <div className="flex items-center justify-between">
                                                       <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">Move-in Date</h6>
                                                       <h6 className="text-sm font-medium leading-5 font-inter text-black">Jan 1, 2025</h6>
                                                  </div>
                                             </div>
                                             <div className="border border-orange-1300 mb-4 bg-gray-3400 rounded-lg flex items-start gap-2 p-3">
                                                  <img src="/images/tick-green.svg" alt=""></img>
                                                  <div>
                                                       <h6 className="font-inter font-medium text-sm leading-5 text-green-2100">Ready for approval</h6>
                                                       <p className="text-xs font-inter leading-4 text-green12"> All verification checks passed</p>
                                                  </div>
                                             </div>
                                             <PrimaryLink type="submit" className="px-4 !py-2.5 font-medium gap-2.5 !text-white " variant="primary">
                                                  <img src="/images/tick-icon3.svg" alt="" />Accept & Send Lease
                                             </PrimaryLink>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="flex items-center flex-wrap gap-5 justify-between mb-8">
                                   <div className="">
                                        <div className="flex items-center mb-2 gap-3">
                                             <h4 className="text-2xl font-bold font-inter leading-8 text-black-1600">Lease Proposal</h4>
                                             <div className="text-xs font-inter font-normal leading-4 text-blue-1700 flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-1800"><span className="w-1.5 h-1.5 rounded-full block bg-blue-1700"></span> Pending Review</div>
                                        </div>
                                        <p className="text-base font-inter font-normal leading-6 text-gray-3500">Reference: LP-2024-00847 • Created Dec 29, 2024</p>
                                   </div>
                                   <div className="w-fit">
                                        <PrimaryLink type="submit" className="px-4 !py-2.5 font-medium gap-2" variant="primary">
                                             <img src="/images/pencile.svg" alt="" /> Generate Lease
                                        </PrimaryLink>
                                   </div>
                              </div>
                              <div className="flex xl:flex-nowrap flex-wrap gap-4">
                                   <div className="xl:w-8/12 w-full">
                                        <div className="rounded-xl mb-6 border border-gray-3600 overflow-hidden shadow-5xl">
                                             <div className="bg-[url(/images/bg-img.png)] bg-cover bg-no-repeat min-h-[192px] p-4 flex items-end justify-start">
                                                  <div>
                                                       <h4 className="text-lg font-inter font-bold leading-7 text-white mb-1">1250 Market Street, Unit 4B</h4>
                                                       <div className="text-sm font-inter font-normal leading-5 text-white/[80%] flex items-center gap-1.5">
                                                            <img src="/images/map-icon.svg" alt="" />San Francisco, CA 94102
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="grid grid-cols-2">
                                                  <div className="flex items-center justify-center gap-2 py-3 border-r border-gray-3600">
                                                       <img src="/images/home-icon.svg" className="w-4" alt="" />  2BR Apartment
                                                  </div>
                                                  <div className="flex items-center pl-4 gap-2 py-3 border-r border-gray-3600">
                                                       <img src="/images/sqaure-icon.svg" className="w-4" alt="" />  1,200 sq ft
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/dollar-icon2.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Monthly Rent</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">$3,850.00</span>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Due on the 1st of each month</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/shield-icon4.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Security Deposit</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">$7,700.00</span>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Equivalent to 2 months rent</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/calendar-icon2.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Lease Start</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">February 1, 2025</span>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="border border-gray-3600 rounded-xl p-4">
                                                  <div className="flex items-start gap-4">
                                                       <div className="bg-blue-1800 rounded-xl w-10 h-10 flex items-center justify-center">
                                                            <img src="/images/timer-icon3.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h6 className="text-sm leading-5 text-gray-3500">Lease End</h6>
                                                            <span className="block text-lg font-bold font-inter text-black-1600">January 31, 2026</span>
                                                            <h6 className="text-sm leading-5 text-gray-3500">12-month term</h6>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="xl:w-4/12 w-full">
                                        <div className="border border-gray-3600 mb-6 rounded-xl shadow-5xl p-6">
                                             <h4 className="text-lg font-inter font-bold leading-7  text-black-1600">Summary</h4>
                                             <div className="flex items-center mb-3 justify-between">
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-gray-3500">First Month's Rent</h6>
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-black-1600">$3,850.00</h6>
                                             </div>
                                             <div className="flex items-center mb-3 pb-3 border-b border-gray-3600  justify-between">
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-gray-3500">Security Deposit</h6>
                                                  <h6 className="text-sm font-inter font-normal leading-5 text-black-1600">$7,700.00</h6>
                                             </div>
                                             <div className="flex items-center  justify-between">
                                                  <h6 className="text-base font-inter font-normal leading-5 text-black-1600">Total Due at Signing</h6>
                                                  <h6 className="text-lg font-inter font-bold leading-5 text-black-1600">$7,700.00</h6>
                                             </div>
                                        </div>
                                        <div className="border border-gray-3600 mb-6 rounded-xl shadow-5xl p-6">
                                             <h4 className="text-lg font-inter font-bold leading-7  text-black-1600">Parties</h4>
                                             <div className="mb-3 pb-3 border-b border-gray-3600">
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">Landlord</h6>
                                                  <h6 className="text-base font-inter font-normal leading-5 text-black-1600">Bay Area Properties LLC</h6>
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">contact@bayareaproperties.com</h6>
                                             </div>
                                             <div className="">
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">Tenant</h6>
                                                  <h6 className="text-base font-inter font-normal leading-5 text-black-1600">Sarah Chen</h6>
                                                  <h6 className="text-xs font-inter mb-1 font-normal leading-5 text-gray-3500">sarah.chen@email.com</h6>
                                             </div>
                                        </div>
                                        <PrimaryLink type="submit" className="px-4 !py-2.5  gap-2.5 " variant="primary">
                                             <img src="/images/send-icon.svg" className="invert-[1]" alt="" /> Send for Signature
                                        </PrimaryLink>
                                        <ul className="flex gap-3 mt-3">
                                             <li className="w-1/2">
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/pencile-icon-black.svg" alt="" /> Edit Proposal
                                                  </PrimaryLink>
                                             </li>
                                             <li className="w-1/2">
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/export-arrow.svg" alt="" />Download PDF
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className=" xl:-ml-8 hidden 4xl:-mr-10 xl:-mx-4 mx-4">
                                   <div className="flex items-center flex-wrap bg-white justify-between py-4 md:px-10 px-4">
                                        <ul className="flex gap-3 mt-3">
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/pdf-icon.svg" alt="" />Save Draft
                                                  </PrimaryLink>
                                             </li>
                                             <li >
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/recycle-icon2.svg" alt="" /> Reset
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                        <ul className="flex flex-wrap gap-3 mt-3">
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/eye-icon2.svg" alt="" /> Preview
                                                  </PrimaryLink>
                                             </li>
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  border border-gray-1100!" variant="default">
                                                       <img src="/images/export-arrow.svg" alt="" />Download PDF
                                                  </PrimaryLink>
                                             </li>
                                             <li>
                                                  <PrimaryLink type="submit" className="px-4 !py-2.5 gap-2.5  " variant="primary">
                                                       <img src="/images/send-icon.svg" className="invert-[1]" alt="" />Send for Signature
                                                  </PrimaryLink>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="lg:flex">
                                        <div className="lg:w-[288px] w-full">
                                             <div className="bg-white">
                                                  <div className="p-4 border-b border-gray-3600">
                                                       <h5 className="text-base font-inter font-bold leading-6 mb-1 text-black-1600">Lease Summary</h5>
                                                       <p className="text-xs font-inter font-normal leading-4 text-gray-3500">Click highlighted fields in the document to edit</p>
                                                  </div>
                                                  <div className="p-2 space-y-1 mb-6">
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/file-icon.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Document</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Type</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Residential Lease</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Reference</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">LP-2024-00847</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Status</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Draft</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/user-icon6.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Parties</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Landlord</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Bay Area Properties…</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Tenant</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">Sarah Chen</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/home-icon2.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Property</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Address</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">1250 Market Street, …</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/dollar-sign.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Financial</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Monthly Rent</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">$3,850.00</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Security Deposit</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">$7,700.00</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="p-3 flex items-start gap-2">
                                                            <div>
                                                                 <img src="/images/calendar3.svg" className="w-4 h-4" alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-inter mb-2 text-sm font-normal leadig-5 text-black-1600">Term</h4>
                                                                 <div className="space-y-2">
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Duration</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">12 months</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">Start</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">February 1, 2025</h6>
                                                                      </div>
                                                                      <div className="flex items-center justify-between">
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-gray-3500">End</h6>
                                                                           <h6 className="text-xs font-inter font-normal leading-4 text-black-1600">January 31, 2026</h6>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="px-4">
                                                       <div className="border border-blue-1000/[20%] bg-blue-1000/[5%] rounded-xl p-4 flex items-start gap-2">
                                                            <img src="/images/info-blue.svg" alt="" />
                                                            <div className="flex-1">
                                                                 <h4 className="text-xs font-inter font-normal leading-4 text-black-1600 mb-1">Editable Fields</h4>
                                                                 <p className="text-xs font-inter font-normal leading-4 text-gray-3500">Fields highlighted in blue can be
                                                                      clicked and edited directly in the
                                                                      document preview.</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="lg:w-[calc(100%_-_288px)] w-full ml-auto bg-gray-3700/[50%] p-8 text-center">
                                             <img src="/images/pdf-img.png" className="inline-block" alt="" />
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="flex lg:flex-nowrap flex-wrap gap-4">
                                   <div className="2xl:w-9/12 lg:w-7/12 w-full">
                                        <h4 className="font-inter font-bold text-lg leading-7 mb-4 text-black-1600">Signers</h4>
                                        <div className="grid 2xl:grid-cols-2 gap-[15px] mb-6">
                                             <div className="border  bg-white border-gray-3600 rounded-xl shadow-6xl md:p-6 p-3">
                                                  <div className="flex items-start justify-between border-b border-gray-3600 pb-4 mb-4">
                                                       <div className="flex items-center gap-3">
                                                            <img src="/images/user-img3.png" alt="" />
                                                            <div>
                                                                 <h6 className="text-xs leading-5 text-gray-3500">Landlord</h6>
                                                                 <span className="block text-base font-bold font-inter text-black-1600">$3,850.00</span>
                                                                 <h6 className="text-sm leading-5 text-gray-3500">Due on the 1st of each month</h6>
                                                            </div>
                                                       </div>
                                                       <div className="py-2 px-3 flex items-center gap-1.5 border border-green-2000 rounded-full text-sm font-normal leading-5 text-green-1900 bg-gray-3700 "><img src="/images/tick-icon4.svg" alt="" /> Signed</div>
                                                  </div>
                                                  <div className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-3500">
                                                       <img src="/images/tick-icon4.svg"></img> Signed on <span className="text-black-1600">Dec 27, 2024 at 2:30 PM</span>
                                                  </div>
                                             </div>
                                             <div className="border  bg-white border-gray-3600 rounded-xl shadow-6xl md:p-6 p-3">
                                                  <div className="flex items-start justify-between border-b border-gray-3600 pb-4 mb-4">
                                                       <div className="flex items-center gap-3">
                                                            <img src="/images/user-img3.png" alt="" />
                                                            <div>
                                                                 <h6 className="text-xs leading-5 text-gray-3500">Student</h6>
                                                                 <span className="block text-base font-bold font-inter text-black-1600">Emily Chen</span>
                                                                 <h6 className="text-sm leading-5 text-gray-3500">emily.chen@university.edu</h6>
                                                            </div>
                                                       </div>
                                                       <div className="py-2 px-3 flex items-center gap-1.5 border border-blue-1000/[20%] rounded-full text-sm font-normal leading-5 text-blue-1000 "><img src="/images/timer-blue.svg" className="w-4 h-4" alt="" /> Pending</div>
                                                  </div>
                                                  <div className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-3500">
                                                       <img src="/images/timer-blue.svg" className="w-4 h-4" alt="" />Expires on <span className="text-black-1600">Jan 3, 2025</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="border border-gray-3600  bg-white rounded-xl shadow-6xl md:p-6 p-3">
                                             <h4 className="text-lg font-inter font-bold leading-7 text-black-1600 mb-6">Signature Timeline</h4>
                                             <ul className="space-y-8 ">
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-green-2300 after:h-full after:w-[2px] after:absolute after:left-5 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-2200 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/tick-icon4.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Document Created</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Lease agreement generated and prepared for signatures</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-green-2300 after:h-full after:w-[2px] after:absolute after:left-5 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-2200 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/tick-icon4.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Sent to Landlord</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Signature request sent to Robert Martinez</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4 relative after:content-[''] after:bg-green-2300 after:h-full after:w-[2px] after:absolute after:left-5 after:-z-10 z-10 after:-bottom-8">
                                                       <div className="bg-green-2200 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/tick-icon4.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Landlord Signed</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Robert Martinez completed their signature</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                                                       <div className=" bg-blue-1000/[10%] w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/pencile-icon2.svg" className="w-4 h-4" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-black-1600">Awaiting Student Signature</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">Waiting for Emily Chen to sign the document</span>
                                                            <span className="text-xs font-inter font-medium leading-4 text-blue-1600 mt-3 w-fit  py-1.5 flex items-center gap-1.5 px-3 rounded-full border border-blue-1000/[20%]"><img src="/images/timer-blue.svg" className="w-[14px]"></img> Awaiting action</span>
                                                       </div>
                                                  </li>
                                                  <li className="flex gap-4 relative">
                                                       <div className="bg-gray-3700 w-10 h-10 rounded-full flex items-center justify-center"><img src="/images/file-tick.svg" alt="" /></div>
                                                       <div>
                                                            <h6 className="text-base font-normal leading-6 text-gray-3500">Document Complete</h6>
                                                            <span className="block text-sm font-normal leading-5 text-gray-3500">All parties will have signed the lease agreement</span>
                                                       </div>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="2xl:w-3/12 lg:w-5/12 w-full">
                                        <div className="border border-gray-3600 mb-6 bg-white rounded-xl shadow-6xl md:p-6 p-3">
                                             <div className="flex items-center justify-between">
                                                  <h4 className="text-lg font-inter font-bold leading-7 text-black-1600">Signing Progress</h4>
                                                  <span className="text-2xl font-bold leading-8 text-blue-1000">1/2</span>
                                             </div>
                                             <div className="bg-gray-3700 mt-4  mb-3 w-full overflow-hidden h-3 block rounded-full">
                                                  <div className="bg-blue-1000 w-[41%] h-full block"></div>
                                             </div>
                                             <h6 className="text-sm font-normal leading-5 text-gray-3500">1 signature remaining</h6>
                                        </div>
                                        <div className="border border-gray-3600 mb-6 bg-white rounded-xl shadow-6xl md:p-6 p-3">
                                             <h4 className="text-lg font-inter font-bold leading-7 text-black-1600 mb-4">Quick Actions</h4>
                                             <div className="space-y-3">
                                                  <div className="border border-gray-3600 rounded-xl py-3 px-4">
                                                       <h6 className="text-base font-normal leading-6 text-black-16000">Resend Invitation</h6>
                                                       <p className="text-sm font-normal leading-5 text-gray-3500">Send another email to pending signers</p>
                                                  </div>
                                                  <div className="border border-gray-3600 rounded-xl py-3 px-4">
                                                       <h6 className="text-base font-normal leading-6 text-black-16000">Download Audit Trail</h6>
                                                       <p className="text-sm font-normal leading-5 text-gray-3500">Get complete signing history</p>
                                                  </div>
                                                  <div className="border border-gray-3600 rounded-xl py-3 px-4">
                                                       <h6 className="text-base font-normal leading-6 text-black-16000">Cancel Document</h6>
                                                       <p className="text-sm font-normal leading-5 text-gray-3500">Void this signature request</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className="grid mb-5 xl:grid-cols-4 md:grid-cols-2 gap-4 justify-between">
                                   <div className="flex items-center gap-3">
                                        <div className="bg-blue-1000/[10%] w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/home-icon2.svg" className="w-5" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Property</h4>
                                             <p className="text-sm font-medium leading-5 text-black">Oceanview Apartment #302</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/location-icon2.png" className="w-4" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Address</h4>
                                             <p className="text-sm font-medium leading-5 text-black">1234 Beach Blvd, Miami FL</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/user-icon3.svg" className="w-4" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Guest</h4>
                                             <p className="text-sm font-medium leading-5 text-black">Sarah Johnson</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                             <img src="/images/calendar2.svg" className="w-4" alt="" />
                                        </div>
                                        <div>
                                             <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Date</h4>
                                             <p className="text-sm font-medium leading-5 text-black">Dec 29, 2024</p>
                                        </div>
                                   </div>
                              </div>
                              <TabGroup>
                                   <TabList className="bg-lightgray rounded-md p-1 w-fit flex items-center">
                                        <Tab className="md:min-w-[230px] px-3 flex items-center justify-center rounded py-1.5 ytext-gray-1000 text-sm font-inter leading-5 data-selected:bg-blue-1000 data-selected:text-white">Check-in Inspection</Tab>
                                        <Tab className="md:min-w-[230px] px-3 flex items-center justify-center rounded py-1.5 ytext-gray-1000 text-sm font-inter leading-5 data-selected:bg-blue-1000 data-selected:text-white">Check-out Inspection</Tab>
                                   </TabList>
                                   <TabPanels className="mt-6">
                                        <TabPanel>
                                             <div className="flex lg:flex-nowrap flex-wrap gap-6 max-w-[1158px] mx-auto">
                                                  <div className="lg:w-8/12 w-full">
                                                       <div className="bg-blue-1000/[5%] border border-blue-1000/[20%] rounded-lg p-4">
                                                            <p className="text-sm font-inter font-normal leading-5 text-black"><strong>Check-in Inspection:</strong> Document the property condition before the guest's stay. Verify all items and note any
                                                                 pre-existing issues.</p>
                                                       </div>
                                                       <div className="space-y-4 mt-4">
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={true}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/bed-icon2.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Living Room</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/bed-icon.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Master Bedroom</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/bathroom.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Bathroom</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                            <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                 <DisclosureButton className="group cursor-pointer pr-16  p-4  flex w-full items-center justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                <img src="/images/kitchen.svg" alt="" />
                                                                           </div>
                                                                           <div className="text-start">
                                                                                <h6 className="text-base font-inter leading-4 text-black">Kitchen</h6>
                                                                                <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                           </div>
                                                                      </div>
                                                                      <div className=" group-data-open:rotate-180">
                                                                           <img src="/images/down-arrow.svg" alt=""></img>
                                                                      </div>
                                                                 </DisclosureButton>
                                                                 <DisclosurePanel className="px-4 pb-4">
                                                                      <div className="border-t border-gray-1100 pt-4">
                                                                           <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                           {/* Checklist */}
                                                                           <div className="space-y-3 mb-6">
                                                                                {items.map((item) => (
                                                                                     <div
                                                                                          key={item.id}
                                                                                          className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                     >
                                                                                          <span className="text-sm font-normal leading-5 text-black">
                                                                                               {item.label}
                                                                                          </span>


                                                                                          <div className="flex gap-2">
                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "ok")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                               </button>


                                                                                               <button
                                                                                                    onClick={() => updateStatus(item.id, "issue")}
                                                                                                    className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                         }`}
                                                                                               >
                                                                                                    <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                ))}
                                                                           </div>
                                                                           {/* Photos */}
                                                                           <div className="space-y-2 mb-2">
                                                                                <div className="flex items-center justify-between">
                                                                                     <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                     <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                </div>
                                                                                <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                     <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                          <img src="/images/plus-icon3.svg" alt="" />
                                                                                     </div>
                                                                                     <span>Drop or click to add</span>
                                                                                     <input type="file" className="hidden" multiple />
                                                                                </label>
                                                                           </div>
                                                                           {/* Notes */}
                                                                           <div className="space-y-2">
                                                                                <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                <textarea
                                                                                     value={notes}
                                                                                     onChange={(e) => setNotes(e.target.value)}
                                                                                     placeholder="Add any notes about this room's condition..."
                                                                                     className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                 </DisclosurePanel>
                                                            </Disclosure>
                                                       </div>
                                                  </div>
                                                  <div className="lg:w-4/12 w-full">
                                                       <div className="border border-gray-1100 bg-white rounded-lg p-4 mb-4">
                                                            <h4 className="text-sm font-normal leading-5 text-black mb-4">Inspection Progress</h4>
                                                            <div className="flex items-center justify-between">
                                                                 <h6 className="text-gray-1000 text-xs font-normal">Completion</h6>
                                                                 <h6 className="text-gray-1000 text-xs font-normal">33%</h6>
                                                            </div>
                                                            <div className="bg-gray-3700 mt-1  mb-3 w-full overflow-hidden h-2 block rounded-full">
                                                                 <div className="bg-blue-1000 w-[41%] h-full block"></div>
                                                            </div>
                                                            <div className="mt-4 grid grid-cols-2 gap-3">
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           <img src="/images/tick-icon4.svg" alt="" />Completed
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">2/6</span>
                                                                 </div>
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           <img src="/images/caution-icon2.svg" alt="" />Issues
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">1</span>
                                                                 </div>
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           📷 Photos
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">5</span>
                                                                 </div>
                                                                 <div className="p-3">
                                                                      <div className="flex items-center gap-2 text-xs font-normal leading-4 text-gray-1000 mb-1">
                                                                           <img src="/images/timer.svg" className="w-4" alt="" />Duration
                                                                      </div>
                                                                      <span className="text-lg font-bold leading-7 text-black">12 min</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="border border-gray-1100 bg-white rounded-lg p-4 mb-4">
                                                            <h4 className="text-sm font-normal leading-5 text-black mb-3">Previous Inspections</h4>
                                                            <div className="py-2 border-b border-gray-1100 flex items-center justify-between">
                                                                 <div>
                                                                      <h6 className="text-sm font-normal leading-5 text-black">Check-in</h6>
                                                                      <span className="text-gray-1000 block text-xs font-normal leading-4">Dec 15, 2024</span>
                                                                 </div>
                                                                 <p className="text-green-1300 text-xs font-normal leading-4">Completed</p>
                                                            </div>
                                                            <div className="py-2  flex items-center justify-between">
                                                                 <div>
                                                                      <h6 className="text-sm font-normal leading-5 text-black">Check-in</h6>
                                                                      <span className="text-gray-1000 block text-xs font-normal leading-4">Dec 15, 2024</span>
                                                                 </div>
                                                                 <p className="text-green-1300 text-xs font-normal leading-4">Completed</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </TabPanel>
                                        <TabPanel>
                                             <div className=" max-w-[1158px] ">

                                                  <div className="flex lg:flex-nowrap flex-wrap gap-6">
                                                       <div className="lg:w-10/12 w-full">
                                                            <div className="border border-gray-2700 bg-white rounded-xl p-6">
                                                                 <div className="flex items-center justify-between flex-wrap gap-5 border-b border-gray-2700 pb-4 mb-4">
                                                                      <div>
                                                                           <h4 className="text-2xl font-dm-sans font-bold leading-8 text-black-1400">Check-out Inspection</h4>
                                                                           <p className="text-base font-dm-sans font-normal text-gray-2200">Document property condition and compare with check-in state</p>
                                                                      </div>
                                                                      <div className="text-xs font-dm-sans font-medium text-blue-1900 py-0.5 px-2.5 rounded-full border border-blue-1900/[20%] bg-gray-3800">
                                                                           In Progress
                                                                      </div>
                                                                 </div>
                                                                 <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-between">
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/location3.svg" className="w-5" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Property</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">742 Evergreen Terrace, Apt
                                                                                     4B</p>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/user-icon3.svg" className="w-4" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Tenant</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">John Mitchell</p>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/calendar2.svg" className="w-4" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Check-in Date</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">Jan 15, 2024</p>
                                                                           </div>
                                                                      </div>
                                                                      <div className="flex items-center gap-3">
                                                                           <div className="bg-lightgray  w-10 h-10 rounded-lg flex items-center justify-center ">
                                                                                <img src="/images/timer.svg" className="w-4" alt="" />
                                                                           </div>
                                                                           <div>
                                                                                <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">Check-in Date</h4>
                                                                                <p className="text-sm font-medium leading-5 text-black">Jan 15, 2024</p>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="space-y-4 mt-4">
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={true}>
                                                                      <DisclosureButton className="group cursor-pointer  p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/bed-icon2.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Living Room</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/caution-yellow.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-yellow-1100">1 issue</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-yellow-1100" width="30%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                      <DisclosureButton className="group cursor-pointer  p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/bed-icon.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Master Bedroom</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/gray-circle.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-gray-2200">Not started</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-gray-2200" width="0%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                      <DisclosureButton className="group cursor-pointer p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/bathroom.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Bathroom</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/check-green.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-green-1400">All OK</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-green-1400" width="40%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                                 <Disclosure as="div" className="border-gray-1100 border rounded-lg  bg-white" defaultOpen={false}>
                                                                      <DisclosureButton className="group cursor-pointer p-4  flex w-full items-center justify-between">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="bg-lightgray w-10 h-10 rounded-lg flex items-center justify-center">
                                                                                     <img src="/images/kitchen.svg" alt="" />
                                                                                </div>
                                                                                <div className="text-start">
                                                                                     <h6 className="text-base font-inter leading-4 text-black">Kitchen</h6>
                                                                                     <span className="text-xs font-normal leading-4 text-gray-1000">0/4 items checked</span>
                                                                                </div>
                                                                           </div>
                                                                           <div className="flex-1 flex items-center justify-end gap-4">
                                                                                <div className="flex items-center gap-1 ">
                                                                                     <img src="/images/caution-yellow.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-normal leading-5 text-yellow-1100">1 issue</h6>
                                                                                </div>
                                                                                <div className="max-w-24 w-full">
                                                                                     <ProgressBar bgColor="bg-yellow-1100" width="30%" />
                                                                                </div>
                                                                                <div className=" group-data-open:rotate-180">
                                                                                     <img src="/images/down-arrow.svg" alt=""></img>
                                                                                </div>
                                                                           </div>
                                                                      </DisclosureButton>
                                                                      <DisclosurePanel className="px-4 pb-4">
                                                                           <div className="border-t border-gray-1100 pt-4">
                                                                                <h6 className="text-sm mb-3 font-normal leading-5 text-black">Condition Check</h6>
                                                                                {/* Checklist */}
                                                                                <div className="space-y-3 mb-6">
                                                                                     {items.map((item) => (
                                                                                          <div
                                                                                               key={item.id}
                                                                                               className="flex items-center justify-between rounded-lg bg-lightgray/[50%] px-3 pt-1 pb-2"
                                                                                          >
                                                                                               <span className="text-sm font-normal leading-5 text-black">
                                                                                                    {item.label}
                                                                                               </span>


                                                                                               <div className="flex gap-2">
                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "ok")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/tick-icon4.svg" alt="" /> OK
                                                                                                    </button>


                                                                                                    <button
                                                                                                         onClick={() => updateStatus(item.id, "issue")}
                                                                                                         className={`flex items-center gap-2 rounded-md bg-white border-gray-1100  border px-3 py-1.5 text-black font-normal text-sm transition ${item.status === "ok"
                                                                                                              }`}
                                                                                                    >
                                                                                                         <img src="/images/caution-black.svg" alt="" /> Issue
                                                                                                    </button>
                                                                                               </div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                                {/* Photos */}
                                                                                <div className="space-y-2 mb-2">
                                                                                     <div className="flex items-center justify-between">
                                                                                          <h3 className="text-sm font-normal text-black">Photos</h3>
                                                                                          <span className="text-xs text-gray-1000 font-normal">0 uploaded</span>
                                                                                     </div>
                                                                                     <label className="flex h-[164px] w-[164px] cursor-pointer flex-col gap-2 items-center justify-center rounded-lg border-2 border-dashed border-gray-1100 text-xs text-gray-1000 hover:bg-gray-50">
                                                                                          <div className="bg-blue-1000/[10%] rounded-full w-10 h-10 flex items-center justify-center">
                                                                                               <img src="/images/plus-icon3.svg" alt="" />
                                                                                          </div>
                                                                                          <span>Drop or click to add</span>
                                                                                          <input type="file" className="hidden" multiple />
                                                                                     </label>
                                                                                </div>
                                                                                {/* Notes */}
                                                                                <div className="space-y-2">
                                                                                     <h3 className="text-sm font-normal text-black">Notes</h3>
                                                                                     <textarea
                                                                                          value={notes}
                                                                                          onChange={(e) => setNotes(e.target.value)}
                                                                                          placeholder="Add any notes about this room's condition..."
                                                                                          className="min-h-20 w-full resize-none rounded-md text-sm font-normal text-gray-1000 placeholder:text-gray-1000 border border-gray-1100 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                     />
                                                                                </div>
                                                                           </div>
                                                                      </DisclosurePanel>
                                                                 </Disclosure>
                                                            </div>
                                                            <div className="grid lg:grid-cols-2 mt-8 gap-6">
                                                                 <div className="border border-gray-2700 bg-white rounded-xl p-6 shadow-6xl">
                                                                      <div className="flex items-center mb-4 gap-2">
                                                                           <img src="/images/caution-icon2.svg" alt="" />
                                                                           <h6 className="text-lg font-bold leading-7 text-black-1400">Damage Summary</h6>
                                                                      </div>
                                                                      <div className="bg-gray-3900/[50%] border border-yellow-1100/[10%] mb-3 rounded-[10px] p-3 flex items-start justify-between">
                                                                           <div>
                                                                                <h4 className="text-sm font-medium leading-5 text-black-1400">Living Room — Flooring</h4>
                                                                                <p className="text-xs font-normal leading-4 text-gray-2200">Deep scratch near window, approximately 8 inches</p>
                                                                           </div>
                                                                           <span className="text-sm font-dm-sans font-bold leading-5 text-golden-1000">$150.00</span>
                                                                      </div>
                                                                      <div className="bg-gray-3900/[50%] border border-yellow-1100/[10%] mb-3 rounded-[10px] p-3 flex items-start justify-between">
                                                                           <div>
                                                                                <h4 className="text-sm font-medium leading-5 text-black-1400">Bathroom — Tiles & Grout</h4>
                                                                                <p className="text-xs font-normal leading-4 text-gray-2200">Cracked tile near shower drain, requires replacement</p>
                                                                           </div>
                                                                           <span className="text-sm font-dm-sans font-bold leading-5 text-golden-1000">$85.00</span>
                                                                      </div>
                                                                      <div className="border-t border-gray-2700 pt-4 mt-4">
                                                                           <div className="flex items-center justify-between mb-3">
                                                                                <div className="flex items-center gap-2">
                                                                                     <img src="/images/dollar-gray.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Estimated Repair Cost</h6>
                                                                                </div>
                                                                                <span className="text-sm font-dm-sans font-bold leading-5 text-black-1400 block">$235.00</span>
                                                                           </div>
                                                                           <div className="flex items-center justify-between mb-3 border-b border-gray-2700 pb-3">
                                                                                <div className="flex items-center gap-2">
                                                                                     <img src="/images/wallet-icon4.svg" alt=""></img>
                                                                                     <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-2200">Security Deposit</h6>
                                                                                </div>
                                                                                <span className="text-sm font-dm-sans font-bold leading-5 text-black-1400 block">$1500.00</span>
                                                                           </div>
                                                                           <div className="flex items-center justify-between mb-3">
                                                                                <h6 className="text-base font-dm-sans font-normal leading-5 text-black-1400">Refund to Tenant</h6>
                                                                                <span className="text-lg font-dm-sans font-bold leading-5 text-green-1400 block">$235.00</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="border border-gray-2700 bg-white h-fit rounded-xl p-6 shadow-6xl">
                                                                      <h6 className="text-lg font-bold leading-7 mb-4 text-black-1400">Actions</h6>
                                                                      <div className="bg-gray-4000 border border-gray-2700 mb-3 rounded-[10px] py-2.5 px-4 flex items-center gap-5">
                                                                           <img src="/images/printer-icon.svg" alt=""></img>
                                                                           <h4 className="text-sm font-medium leading-5 text-black-1400">Save Draft</h4>
                                                                      </div>
                                                                      <div className="bg-gray-4000 border border-gray-2700 mb-3 rounded-[10px] py-2.5 px-4 flex items-center gap-5">
                                                                           <img src="/images/file-icon3.svg" alt=""></img>
                                                                           <h4 className="text-sm font-medium leading-5 text-black-1400">Generate Report</h4>
                                                                      </div>
                                                                      <div className="border-t border-gray-2700 pt-4 mt-4">
                                                                           <p className="text-xs font-normal leading-4 text-gray-2200">By completing this inspection, you confirm that all items have been reviewed and
                                                                                documented accurately. This report will be shared with the tenant for review.</p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </TabPanel>
                                   </TabPanels>
                              </TabGroup>
                         </TabPanel>
                    </TabPanels>
               </TabGroup>
          </div>
     );
}
