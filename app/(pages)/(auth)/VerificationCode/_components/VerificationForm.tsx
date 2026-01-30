'use client';
import InputField from '@/app/ui/InputField';
import PrimaryLink from '@/app/ui/PrimaryLink';
import Link from 'next/link';
import React, { useState } from 'react'

export const VerificationForm = () => {

     const [code, setCode] = useState("");
     const [error, setError] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const value = (e.target as HTMLInputElement).value.replace(/\s/g, ""); 
          
          if (value && !/^\d*$/.test(value)) {
               return;
          }
          
          if (value.length <= 6) {
               setCode(value);
               setError("");
          }
     };

     const validateForm = () => {
          if (code.length !== 6) {
               setError("Please enter all 6 digits");
               return false;
          }
          
          return true;
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          
          if (!validateForm()) {
               return;
          }
          
          setIsSubmitting(true);
          
          try {
               const response = await fetch('/api/verify-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code })
               });
               
               if (response.ok) {
                    console.log('Verification successful:', code);
                    // router.push('/reset-password');
               } else {
                    setError('Invalid verification code. Please try again.');
                    setCode("");
               }
          } catch (error) {
               setError('Error verifying code. Please try again.');
               setCode("");
          } finally {
               setIsSubmitting(false);
          }
     };

     const isCodeComplete = code.length === 6;



  return (
    <div className='w-full'>
   <form onSubmit={handleSubmit} className='mt-6'>
            <div className="mb-5">
                <InputField
                    label="Verification Code"
                    placeholder="678964"
                    value={code}
                    onChange={handleChange}
                    id="code"
                    name="code"
                    type="text"
                />
                {error && (
                    <p className="text-red-500 text-xs mt-1">{error}</p>
                )}
            </div>
            <PrimaryLink
                type="submit"
                variant={ isCodeComplete && !isSubmitting ? "primary": "disabled" }
                disabled={!isCodeComplete || isSubmitting}
            >
                {isSubmitting ? 'Verifying...' : 'Next'}
            </PrimaryLink>
            <Link href="/Login" className="text-sm group mt-6 font-dm-sans flex items-center justify-center gap-2 font-normal leading-5 text-gray-1000">
                <img src="/images/left-arrow.svg" className="group-hover:-translate-x-1 transition duration-300" alt="" />Back to sign in</Link>
            </form>
    </div>
  )
}
