"use client";

import { useState } from "react";
import InputField from "@/app/ui/InputField";
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
import { useRouter } from "next/navigation";
import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";

function Login() {
     const route = useRouter();
     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });
     const [errors, setErrors] = useState<Record<string, string>>({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitSuccess, setSubmitSuccess] = useState(false);

  

  const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => {
     const { name, value } = e.target;

     setFormData((prev) => ({
     ...prev,
     [name]: value,
     }));

     if (errors[name as keyof typeof errors]) {
     setErrors((prev) => ({...prev,[name]: "",}));
     }};


     const validateForm = () => {
     const newErrors: Record<string, string> = {};

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setSubmitSuccess(false);
     if (!validateForm()) {
           return;
     }
     setIsSubmitting(true);
           
     setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true); 
     route.push('/Onboarding');

      setFormData({
        email: '',
        password: '',
      });
    }, 1500);


     };

     return (
          <div className="flex font-dm-sans h-screen overflow-hidden">
               {/* Left Side */}
               <OnboardingLeftCol />

               {/* Right Side */}
               <div className="lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto">
                    <div className="h-screen flex items-center justify-center">
                         <div className="w-full max-w-[448px]">
                              <div>
                                   <img src="/images/logo.svg" alt="" />
                                   <h6 className="mt-1 text-sm font-normal leading-5 text-gray-1000">
                                        Partner Portal
                                   </h6>
                                   <div className="mt-[34px]">
                                        <h4 className="text-xl font-medium leading-7 mb-2 text-black-1000 tracking-[-0.5px]">
                                             Welcome back
                                        </h4>
                                        <p className="mt-1 text-sm font-normal leading-5 text-gray-1000">
                                             Sign in to access your partner dashboard
                                        </p>

                                        <form onSubmit={handleSubmit} className="mt-9">
                                             <div className="w-full mb-5">
                                             <InputField
                                                  label="Email address"
                                                  placeholder="you@company.com"
                                                  value={formData.email}
                                                  onChange={handleChange}
                                                  leftIconSrc="/images/msg-icon.svg"
                                                  id="email"
                                                  name="email"
                                             />
                                             {errors.email && (
                                                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                             )}
                                             
                                             </div>

                                              <div className="w-full mb-5">
                                             <InputField
                                                  label="Password"
                                                  type="password"
                                                  placeholder="Enter your password"
                                                  value={formData.password}
                                                  onChange={handleChange}
                                                  leftIconSrc="/images/lock-icon.svg"
                                                  rightIconSrc="/images/eye-icon.svg"
                                                  id="password"
                                                  name="password"
                                             />
                                             {errors.password && (
                                                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                             )}
                                             </div>

                                             <div className="text-end">
                                                  <Link
                                                       href="/ForgetPassword"
                                                       className="text-sm mb-5 font-normal text-blue-1000 hover:underline transition-all ease-in-out duration-500 block hover:text-blue-1000"
                                                  >
                                                       Forgot password?
                                                  </Link>
                                             </div>

                                             <PrimaryLink type="submit" variant="primary">
                                               {isSubmitting ? 'Please wait...' : 'Login'}
                                             </PrimaryLink>

                                             <div className="bg-gray-1200 rounded-lg my-[34px] p-4 flex items-start gap-3">
                                                  <img src="/images/shield.svg" alt="" />
                                                  <div>
                                                       <p className="text-sm font-normal leading-5 text-gray-1000">
                                                            Your connection is secured with 256-bit SSL encryption. We
                                                            never share your data with third parties.
                                                       </p>
                                                  </div>
                                             </div>

                                             <PrimaryLink href="/SignUp" variant="secondary">
                                                  Sign up
                                             </PrimaryLink>

                                             <div className="text-center mt-[34px]">
                                                  <p className="text-xs font-normal leading-4 text-gray-1000">
                                                       Need help?{" "}
                                                       <Link href="/" className="text-blue-1000 hover:underline">
                                                            Contact support
                                                       </Link>
                                                  </p>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Login;
