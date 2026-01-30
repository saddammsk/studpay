'use client'
import InputField from '@/app/ui/InputField';
import PrimaryLink from '@/app/ui/PrimaryLink';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export const ForgetPasswordForm = () => {

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
  )
}
