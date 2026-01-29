"use client";

import Buttons from "@/app/ui/Buttons";
import Link from 'next/link';

function page() {

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
                         <div className='w-full max-w-[415px]'>
                              <div className="text-center mb-10">
                                   <img src="/images/checkbox-icon.svg" className="inline-block mb-8" alt="" />
                                   <h4 className='text-[36px] font-medium leading-10 mb-2 text-black-1000 tracking-[-0.5px]'>You're all set!</h4>
                                   <p className='mt-1 text-base font-normal leading-6 text-gray-1400'>Your account is ready. Start managing your properties with ease.</p>
                              </div>
                              <Buttons href="/login" className="" variant="primary">
                                   Go to Dashboard
                              </Buttons>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
