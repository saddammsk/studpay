"use client";

import { useState } from "react";
import InputField from "@/app/ui/InputField";
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";
import { useRouter } from "next/navigation";

function ForgetPasswordPage() {

     const [email, setEmail] = useState("");
     const [errors, setErrors] = useState<Record<string, string>>({});
     const [isSubmitting, setIsSubmitting] = useState(false);
     const route = useRouter();

const validateForm = () => {
     const newErrors: Record<string, string> = {};

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!email) {
          newErrors.email = 'Email is required';
     } else if (!emailRegex.test(email)) {
          newErrors.email = 'Invalid email format';
     }

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     
     if (!validateForm()) {
          return;
     }
     
     setIsSubmitting(true);
     
     try {
          // Your API call here
          const response = await fetch('/api/send-verification-code', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ email })
          });
          
          if (response.ok) {
               console.log('Verification code sent to:', email);
               route.push('/');
          } else {
               setErrors({ email: 'Failed to send verification code' });
          }
     } catch (error) {
          setErrors({ email: 'Error sending verification code' });
     } finally {
          setIsSubmitting(false);
     }
};


     return (
          <div className='flex font-dm-sans h-screen overflow-hidden'>
             <OnboardingLeftCol/>
               <div className='lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto scroll-hide'>
                    <div className="h-screen flex items-center justify-center">
                         <div className='w-full max-w-[448px]'>
                              <div>
                                   <div className="text-center mb-6">
                                        <img className="inline-block" src="/images/logo.svg" alt="" />
                                        <h6 className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Partner Portal</h6>
                                   </div>
                                   <div className='mt-[34px]  rounded-2xl p-8 shadow1'>
                                        <ul className="flex items-center justify-center gap-2">
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
                                             <li>
                                                  <span className="block w-8 h-0.5 rounded-full bg-gray-1500"></span>
                                             </li>
                                             <li>
                                                  <span className="block w-2 h-2 rounded-full bg-gray-1500"></span>
                                             </li>
                                        </ul>
                                        <div className="text-center mt-[35px]">
                                             <h4 className='text-xl font-medium leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>Reset your password</h4>
                                             <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Enter your email address and {"we'll"} send you a verification
                                                  code</p>
                                        </div>
                                         <form onSubmit={handleSubmit} className='mt-6'>
                                        <div className="mb-5">
                                             <InputField
                                                  label="Email address"
                                                  placeholder="you@company.com"
                                                  value={email}
                                                  onChange={(e) => {
                                                       setEmail(e.target.value);
                                                       if (errors.email) {
                                                            setErrors((prev) => ({ ...prev, email: "" }));
                                                       }
                                                  }}
                                                  leftIconSrc="/images/msg-icon.svg"
                                                  id="email"
                                                  name="email"
                                             />
                                             {errors.email && (
                                                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                             )}
                                        </div>
                                        <PrimaryLink 
                                             type="submit"
                                             variant={ email && !isSubmitting ? "primary": "disabled" }
                                             disabled={!email || isSubmitting}
                                        >
                                             {isSubmitting ? 'Sending...' : 'Send verification code'}
                                        </PrimaryLink>
                                   </form>
                                         <Link href="/Login" className="text-sm group mt-6 font-dm-sans flex items-center justify-center gap-2 font-normal leading-5 text-gray-1000">
                                                  <img src="/images/left-arrow.svg" className="group-hover:-translate-x-1 transition duration-300" alt="" />Back to sign in</Link>
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
          </div>
     )
}

export default ForgetPasswordPage
