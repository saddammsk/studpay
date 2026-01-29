"use client";

import { useState } from "react";
import InputField from "@/app/ui/InputField";
import Link from "next/link";
import Buttons from "@/app/ui/Buttons";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";


function SignUpPage() {

     const [enabled, setEnabled] = useState(false);
     const route = useRouter();
   
     const [formData, setFormData] = useState({
               name: "",
               email: "",
               password: "",
               password2: "",
               
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
          }
     };
     
     
        const validateForm = () => {
          const newErrors: Record<string, string> = {};

          if (!formData.name.trim()) {
          newErrors.name = "Full name is required";
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!formData.email) {
          newErrors.email = "Email is required";
          } else if (!emailRegex.test(formData.email)) {
          newErrors.email = "Invalid email format";
          }

          if (!formData.password) {
          newErrors.password = "Password is required";
          } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
          }

          if (!formData.password2) {
          newErrors.password2 = "Confirm your password";
          } else if (formData.password !== formData.password2) {
          newErrors.password2 = "Passwords do not match";
          }

          if (!enabled) {
          newErrors.tos = "You must accept the terms";
          }

          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
          };

     
          const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
               e.preventDefault();
               setSubmitSuccess(false);

               if (!validateForm()) return;

               setIsSubmitting(true);

               setTimeout(() => {
               console.log("Form submitted:", formData);

               setIsSubmitting(false);
               setSubmitSuccess(true);

               setFormData({
                    name: "",
                    email: "",
                    password: "",
                    password2: "",
               });

               setEnabled(false);
               route.push("/EmailVerifaction");

               }, 1500);
               };


     return (
          <div className="flex font-dm-sans h-screen overflow-hidden">
               {/* Left side */}
              <OnboardingLeftCol />
            

               {/* Right side */}
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

                                      <form
                                        onSubmit={handleSubmit}
                                        className="mt-9 border space-y-5 border-gray-1300 rounded-2xl p-8 pb-6"
                                        >
                                        <InputField
                                        label="Full name"
                                        variant="filled"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        id="name"
                                        name="name"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs -mt-4">{errors.name}</p>}

                                        <InputField
                                        label="Email"
                                        variant="filled"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        id="email"
                                        name="email"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs -mt-4">{errors.email}</p>}

                                        <InputField
                                        label="Password"
                                        type="password"
                                        variant="filled"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        id="password"
                                        name="password"
                                        rightIconSrc="/images/eye-icon.svg"
                                        />
                                        {errors.password && <p className="text-red-500 text-xs -mt-4">{errors.password}</p>}

                                        <InputField
                                        label="Confirm password"
                                        type="password"
                                        variant="filled"
                                        placeholder="Confirm your password"
                                        value={formData.password2}
                                        onChange={handleChange}
                                        id="password2"
                                        name="password2"
                                        rightIconSrc="/images/eye-icon.svg"
                                        />
                                        {errors.password2 && <p className="text-red-500 text-xs -mt-4">{errors.password2}</p>}

                                        <RadioGroup value={enabled} onChange={setEnabled}>
                                        <RadioGroup.Option value={true} className="flex items-center gap-2 cursor-pointer">
                                             {({ checked }) => (
                                             <>
                                                  <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${checked ? "border-blue-1000" : "border-blue-500"}`}>
                                                  {checked && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                                                  </span>
                                                  <span className="text-[13px] text-gray-1400">
                                                  I agree to the <Link href="/" className="text-blue-1000">Terms</Link> &{" "}
                                                  <Link href="/" className="text-blue-1000">Privacy Policy</Link>
                                                  </span>
                                             </>
                                             )}
                                        </RadioGroup.Option>
                                        </RadioGroup>
                                        {errors.tos && <p className="text-red-500 text-xs -mt-4">{errors.tos}</p>}

                                        <Buttons
                                        type="submit"
                                        variant={!enabled ? "disabled" : "primary"}
                                        disabled={isSubmitting || !enabled}
                                        >
                                        {isSubmitting ? "Create account" : "Create account"}
                                        </Buttons>
                                        </form>


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
          </div>
     );
}

export default SignUpPage;
