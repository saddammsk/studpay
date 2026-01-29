"use client";

import { Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

import PrimaryLink from "@/app/ui/PrimaryLink";
const plans = [
     {
          checkboximg: '/images/building-icon.svg', name: 'I already have properties', des: 'Add your existing properties now and start managing them right away'
     },
     {
          checkboximg: '/images/timer.svg', name: 'I want to add properties later', des: 'Skip this step for now and explore the platform first'
     },
]
function page() {
     let [selected, setSelected] = useState(plans[0])

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
                                        <h6 className="text-sm font-normal font-inter leading-5 text-gray-1400">Step 2 of 4</h6>
                                        <h6 className="text-sm font-normal font-inter leading-5 text-gray-1400">50%</h6>
                                   </div>
                                   <div className="bg-gray-1500 rounded-full h-2 w-full mt-2 mb-8 overflow-hidden block">
                                        <div className="bg-blue-1000 h-full w-1/2 block"></div>
                                   </div>
                                   <div className="text-center">
                                        <h4 className='text-2xl font-bold leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>Property Setup</h4>
                                        <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>How would you like to get started?</p>
                                   </div>
                                   <form action="" className='mt-9'>
                                        <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="mb-8 space-y-2">
                                             {plans.map((plan) => (
                                                  <Radio
                                                       key={plan.name}
                                                       value={plan}
                                                       className="group relative flex border border-gray-1300 cursor-pointer rounded-[12px] bg-gray-1600 p-4 transition focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
                                                  >
                                                       <div className="flex w-full items-start gap-4 justify-between">
                                                            <div className="flex items-start flex-1 gap-4">
                                                                 <div className='w-10 h-10 flex items-center justify-center rounded-[12px] bg-gray-1500'>
                                                                      <img src={plan.checkboximg} alt="" />
                                                                 </div>
                                                                 <div className="flex-1">
                                                                      <div className='text-sm font-inter leading-6 mb-1 text-black-1000'>{plan.name}</div>
                                                                      <div className='font-inter text-xs leading-5 text-gray-1400'>{plan.des}</div>
                                                                 </div>
                                                            </div>
                                                            <div className="transition flex items-center justify-center group-data-checked:opacity-100 w-5 h-5 rounded-full border-2 border-gray-1400/[30%]">
                                                                 <div className='w-3 h-3 opacity-0  group-data-checked:opacity-100 rounded-full bg-blue-1000'></div>
                                                            </div>
                                                       </div>
                                                  </Radio>
                                             ))}
                                        </RadioGroup>
                                        <PrimaryLink href="/login" className="opacity-50 pointer-events-none" variant="primary">
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
