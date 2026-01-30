
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { VerificationForm } from "./_components/VerificationForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Verification Code - Partner Portal',
  description: 'Manage rent collection, deposits, and financial reporting in one unified platform.',
}


function VerificationCodePage() {


     return (
          <AuthLayout>
               <div className='lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto scroll-hide'>
                    <div className="h-screen flex items-center justify-center">
                         <div className='w-full max-w-[448px]'>
                              <div>
                                   <div className="text-center mb-6">
                                        <img className="inline-block" src="/images/logo.svg" alt="" />
                                        <h6 className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Partner Portal</h6>
                                   </div>
                                   <div className='mt-[34px] rounded-2xl p-8 shadow1'>
                                        <ul className="flex items-center justify-center gap-2">
                                             <li>
                                                  <span className="block w-2 h-2 rounded-full bg-blue-1000"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-8 h-0.5 rounded-full bg-gray-1500"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-2 h-2 rounded-full bg-blue-1000"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-8 h-0.5 rounded-full bg-gray-1500"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-2 h-2 rounded-full bg-gray-1500"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-8 h-0.5 rounded-full bg-gray-1500"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-2 h-2 rounded-full bg-gray-1500"></span>
                                             </li>
                                        </ul>
                                        <div className="text-center mt-[35px]">
                                             <h4 className='text-xl font-medium leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>Reset your password</h4>
                                             <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Enter your verification code in 6-digits</p>
                                        </div>

                                        <VerificationForm/>
                                  
                                   </div>
                                   <div className="text-center mt-[34px]">
                                        <div className="flex items-center mb-10 justify-center gap-3">
                                             <img src="/images/shield-icon.svg" className="h-[18px]" alt="" />
                                             <h6 className="text-xs font-dm-sans font-normal leading-5 text-gray-1000">Your connection is secured with 256-bit SSL encryption.</h6>
                                        </div>
                                        <p className="text-xs font-normal leading-4 text-gray-1000">Need help?  <Link href="/" className="text-blue-1000 hover:underline">Contact support</Link></p>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </AuthLayout>
     )
}

export default VerificationCodePage