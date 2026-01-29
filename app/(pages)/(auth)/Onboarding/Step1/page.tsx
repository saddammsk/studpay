"use client";

import { useState } from "react";
import InputField from "@/app/ui/InputField";
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";

function page() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     return (
          <div className='flex font-dm-sans h-screen overflow-hidden'>
               <div className='w-1/2 lg:block hidden'>
                    <div className='bg-[url(/images/login-bg.png)] overflow-hidden relative h-screen bg-cover bg-no-repeat flex flex-col justify-between items-center'>

                         <div className='w-full flex  items-center justify-center h-full'>
                              <div className='relative'>
                                   <img src="/images/login-img.png" className='2xl:h-[63vh] xl:h-[52vh] h-[40vh]' alt="" />
                                   <div className='bg-white rounded-full shadow1 absolute top-0 right-[-130px] text-xs font-medium leading-4 py-2 px-4 text-black-1000'>
                                        🔒 Secure Partner Access
                                   </div>
                                   <div className='absolute -bottom-[36%] z-10 -right-full'>
                                        <img src="/images/mobile-img.png" className='2xl:h-[40vh] xl:h-[32vh] h-[26vh]' alt="" />
                                   </div>
                              </div>
                         </div>
                         <div className='p-10 w-full'>
                              <h4 className='text-lg font-medium leading-7 text-black-1000 mb-2'>Simplify your property payments</h4>
                              <p className='text-sm font-normal leading-5 text-gray-1000 max-w-[378px]'>Manage rent collection, deposits, and financial reporting in
                                   one unified platform.</p>
                         </div>
                    </div>
               </div>
               <div className='lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto scroll-hide'>
                    <div className="h-screen flex items-center justify-center">
                         <div className='w-full max-w-[448px]'>
                              <div className="border border-gray-1300/[50%] rounded-[12px] p-8 pb-10 shadow1">
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-sm font-normal font-inter leading-5 text-gray-1400">Step 1 of 4</h6>
                                        <h6 className="text-sm font-normal font-inter leading-5 text-gray-1400">25%</h6>
                                   </div>
                                   <div className="bg-gray-1500 rounded-full h-2 w-full mt-2 mb-8 overflow-hidden block">
                                        <div className="bg-blue-1000 h-full w-4/12 block"></div>
                                   </div>
                                   <h4 className='text-2xl font-bold leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>Basic information</h4>
                                   <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Tell us a bit about yourself to get started.</p>
                                   <form action="" className='mt-9'>
                                        <InputField
                                             label="Company / Individual name"
                                             placeholder="Enter your name"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             id="email"
                                             name="email"
                                             variant="filled"
                                        />
                                        <InputField
                                             label="Country"
                                             fieldType="select" variant="filled"
                                             placeholder="Select country"
                                             options={[
                                                  { label: "Pakistan", value: "pk" },
                                                  { label: "USA", value: "us" },
                                             ]}
                                        />
                                        <InputField
                                             label="Country"
                                             placeholder="+1 (555) 000-0000"
                                             value={email}
                                             variant="filled"
                                             onChange={(e) => setEmail(e.target.value)}
                                             id="email2"
                                             name="email2"
                                        />
                                        <PrimaryLink href="/login" variant="primary">
                                             Continue
                                        </PrimaryLink>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
