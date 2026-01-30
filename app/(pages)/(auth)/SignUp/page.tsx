
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { SignUpForm } from "./_components/SignUpForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Sign Up - Partner Portal',
  description: 'Manage rent collection, deposits, and financial reporting in one unified platform.',
}


function SignUpPage() {


     return (
   
          <AuthLayout>
               <div className="lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto scroll-hide">
                    <div className="h-screen flex items-start justify-center">
                         <div className="w-full max-w-[448px] overglow-auto py-6 scroll-hide my-auto">
                              <div className="w-full">
                                   <img src="/images/logo.svg" alt="" />
                                   <h6 className="mt-1 text-sm font-normal leading-5 text-gray-1000">
                                        Partner Portal
                                   </h6>
                                   <div className="mt-[34px]">
                                        <h4 className="text-xl font-medium leading-7 mb-2 text-black-1000 tracking-[-0.5px]">
                                             Create your account
                                        </h4>
                                        <p className="mt-1 text-sm font-normal leading-5 text-gray-1000">
                                             Start managing your rentals today
                                        </p>

                                        <SignUpForm/>

                                        <div className="text-center mt-[34px] cursor-not-allowed">
                                             <p className="text-xs font-normal leading-4 text-gray-1000">
                                                  Already have an account? <Link href="/Login" className="text-blue-1000 hover:underline">Log in</Link>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </AuthLayout>
     );
}

export default SignUpPage;
