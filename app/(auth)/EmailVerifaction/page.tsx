'use client'
import Link from "next/link";
import Buttons from "@/app/ui/Buttons";
import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";
import { useState, useEffect } from "react";



function EmailVerifaction() {
     const [emailVerification, setEmailVerification] = useState<string | null>(null);
     const [isLoading, setIsLoading] = useState(false);
     const [countdown, setCountdown] = useState(0);

     useEffect(() => {
          if (countdown > 0) {
               const timer = setTimeout(() => {
                    setCountdown(countdown - 1);
               }, 1000);
               return () => clearTimeout(timer);
          }
     }, [countdown]);

     const handleSendEmail = async () => {
          setEmailVerification(null);
          setIsLoading(true);
          
          try {
               const response = await fetch('/api/send-verification-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ /* your data */ })
               });
               
               if (response.ok) {
                    setEmailVerification('Email sent successfully!');
                    setCountdown(60);
               } else {
                    setEmailVerification('Failed to send email');
               }
          } catch (error) {
               setEmailVerification('Error sending email');
          } finally {
               setIsLoading(false);
          }
     }



     return (
          <div className='flex font-dm-sans h-screen overflow-hidden'>
               <OnboardingLeftCol/>
      
               <div className='lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto scroll-hide'>
                    <div className="h-screen flex items-center justify-center">
                         <div className='w-full max-w-[448px]'>
                              <div className="border border-gray-1300/[50%] rounded-[12px] pt-12 px-8 pb-10 shadow1 text-center">
                                   <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center relative">
                                        <img src="/icons/verify-email-icon.svg" alt="" />
                                   </div>
                                   <h4 className="text-2xl leading-8 font-bold mt-8 mb-3 text-black-1000 font-inter">Verify your email</h4>
                                   <h6 className="text-sm font-normal leading-6 mb-2 text-gray-1400">{"We've"} sent a verification link to</h6>
                                   <span className="block text-base font-normal leading-6 text-black-1000">user@example.com</span>
                                   <div className="my-12 p-4 bg-gray-1500/50 rounded-lg">
                                        <p className="text-[13px] font-normal leading-5 text-gray-1400">Click the link in your email to verify your account. If you
                                             {"don't"} see it, check your spam folder.</p>
                                   </div>
                                   {emailVerification && (
                                        <div className={`mb-4 p-3 rounded-lg text-sm ${
                                             emailVerification.includes('success') 
                                                  ? 'bg-green-100 text-green-700' 
                                                  : 'bg-red-100 text-red-700'
                                        }`}>
                                             {emailVerification}
                                        </div>
                                   )}
                                   <Buttons 
                                        onClick={handleSendEmail} 
                                        variant="primary" 
                                        disabled={isLoading || countdown > 0}
                                   >
                                        {isLoading 
                                             ? 'Sending...' 
                                             : countdown > 0 
                                                  ? `Resend email (${countdown}s)` 
                                                  : 'Resend email'
                                        }
                                   </Buttons>
                                   <Link href="/SignUp" className="flex transition hover:opacity-80 group items-center justify-center mt-4 text-gray-1400 gap-2 text-sm font-normal leading-5">
                                        <img src="/images/left-arrow.svg" className="group-hover:-translate-x-1 transition" alt="" />
                                        Change email address
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default EmailVerifaction