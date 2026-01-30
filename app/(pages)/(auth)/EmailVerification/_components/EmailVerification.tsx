"use client"
import PrimaryLink from '@/app/ui/PrimaryLink';
import React, { useEffect, useState } from 'react'

export const EmailVerification = () => {
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
           <div className="w-full">
                {emailVerification && (
                    <div className={`mb-4 p-3 rounded-lg text-sm ${
                        emailVerification.includes('success') 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-red-100 text-red-700'
                    }`}>
                        {emailVerification}
                    </div>
                )}
                <PrimaryLink 
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
                </PrimaryLink>
            </div>
  )
}
