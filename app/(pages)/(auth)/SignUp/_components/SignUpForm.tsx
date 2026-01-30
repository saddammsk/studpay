'use client'
import InputField from '@/app/ui/InputField'
import PrimaryLink from '@/app/ui/PrimaryLink'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const SignUpForm = () => {

    
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

                <PrimaryLink
                type="submit"
                variant={!enabled ? "disabled" : "primary"}
                disabled={isSubmitting || !enabled}
                >
                {isSubmitting ? "Create account" : "Create account"}
                </PrimaryLink>
                </form>
            )
}
