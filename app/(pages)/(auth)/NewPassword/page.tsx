"use client";

import { useState } from "react";
import InputField from "@/app/ui/InputField";
import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";
import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";

function NewPasswordPage() {
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

     const validatePassword = (pwd: string) => {
          const minLength = 8;
          const hasUpperCase = /[A-Z]/.test(pwd);
          const hasLowerCase = /[a-z]/.test(pwd);
          const hasNumber = /\d/.test(pwd);
          const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

          if (pwd.length < minLength) {
               return `Password must be at least ${minLength} characters long`;
          }
          if (!hasUpperCase) {
               return "Password must contain at least one uppercase letter";
          }
          if (!hasLowerCase) {
               return "Password must contain at least one lowercase letter";
          }
          if (!hasNumber) {
               return "Password must contain at least one number";
          }
          if (!hasSpecialChar) {
               return "Password must contain at least one special character";
          }
          return "";
     };

     const validateForm = () => {
          const newErrors: { password?: string; confirmPassword?: string } = {};

          const passwordError = validatePassword(password);
          if (!password) {
               newErrors.password = "Password is required";
          } else if (passwordError) {
               newErrors.password = passwordError;
          }

          if (!confirmPassword) {
               newErrors.confirmPassword = "Please confirm your password";
          } else if (password !== confirmPassword) {
               newErrors.confirmPassword = "Passwords do not match";
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
               const response = await fetch('/api/reset-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password })
               });

               if (response.ok) {
                    console.log('Password changed successfully');
                    // router.push('/login');
               } else {
                    setErrors({ password: 'Failed to change password. Please try again.' });
               }
          } catch (error) {
               setErrors({ password: 'Error changing password. Please try again.' });
          } finally {
               setIsSubmitting(false);
          }
     };

     const isFormValid = password && confirmPassword && password === confirmPassword;

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
                                                  <span className="block w-2 h-2 rounded-full bg-blue-1000"></span>
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
                                             <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Add Your New Password</p>
                                        </div>
                                        <form onSubmit={handleSubmit} className='mt-6'>
                                             <div className="mb-5">
                                                  <InputField
                                                       label="New Password"
                                                       placeholder="Enter new password"
                                                       type={showPassword ? "text" : "password"}
                                                       value={password}
                                                       onChange={(e) => {
                                                            setPassword(e.target.value);
                                                            if (errors.password) {
                                                                 setErrors((prev) => ({ ...prev, password: "" }));
                                                            }
                                                       }}
                                                       id="password"
                                                       name="password"
                                                       rightIconSrc="/images/eye-icon.svg"
                                                  />
                                                  {errors.password && (
                                                       <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                                  )}
                                             </div>
                                             <div className="mb-5">
                                                  <InputField
                                                       label="Confirm Password"
                                                       placeholder="Confirm new password"
                                                       type={showConfirmPassword ? "text" : "password"}
                                                       value={confirmPassword}
                                                       onChange={(e) => {
                                                            setConfirmPassword(e.target.value);
                                                            if (errors.confirmPassword) {
                                                                 setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                                                            }
                                                       }}
                                                       id="confirmPassword"
                                                       name="confirmPassword"
                                                       rightIconSrc="/images/eye-icon.svg"
                                                  />
                                                  {errors.confirmPassword && (
                                                       <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                                  )}
                                             </div>

                                             {password && (
                                                  <div className="mb-5 p-3 bg-gray-50 rounded-lg text-xs">
                                                       <p className="font-medium mb-2 text-gray-700">Password must contain:</p>
                                                       <ul className="space-y-1">
                                                            <li className={password.length >= 8 ? "text-green-600" : "text-gray-500"}>
                                                                 {password.length >= 8 ? "✓" : "○"} At least 8 characters
                                                            </li>
                                                            <li className={/[A-Z]/.test(password) ? "text-green-600" : "text-gray-500"}>
                                                                 {/[A-Z]/.test(password) ? "✓" : "○"} One uppercase letter
                                                            </li>
                                                            <li className={/[a-z]/.test(password) ? "text-green-600" : "text-gray-500"}>
                                                                 {/[a-z]/.test(password) ? "✓" : "○"} One lowercase letter
                                                            </li>
                                                            <li className={/\d/.test(password) ? "text-green-600" : "text-gray-500"}>
                                                                 {/\d/.test(password) ? "✓" : "○"} One number
                                                            </li>
                                                            <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-600" : "text-gray-500"}>
                                                                 {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "✓" : "○"} One special character
                                                            </li>
                                                       </ul>
                                                  </div>
                                             )}

                                             <PrimaryLink 
                                                  type="submit"
                                                   variant={ isFormValid && !isSubmitting ? "primary": "disabled" }
                                                  disabled={!isFormValid || isSubmitting}
                                             >
                                                  {isSubmitting ? 'Changing Password...' : 'Change Password'}
                                             </PrimaryLink>
                                        </form>
                                   </div>
                                   <div className="text-center mt-[34px]">
                                        <div className="flex items-center mb-10 justify-center gap-3">
                                             <img src="/images/shield-icon.svg" className="h-[18px]" alt="" />
                                             <h6 className="text-xs font-dm-sans font-normal leading-5 text-gray-1000">Your connection is secured with 256-bit SSL encryption.</h6>
                                        </div>
                                        <p className="text-xs font-normal leading-4 text-gray-1000">Need help?  <Link href="/" className="text-blue-1000 hover:underline">Contact support</Link></p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default NewPasswordPage