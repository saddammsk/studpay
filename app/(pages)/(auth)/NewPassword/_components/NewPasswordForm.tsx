'use client'
import InputField from '@/app/ui/InputField';
import PrimaryLink from '@/app/ui/PrimaryLink';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export const NewPasswordForm = () => {

    const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

     const router = useRouter();

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
               const response = await fetch('/api/reset-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password })
               });

               if (response.ok) {
                    console.log('Password changed successfully');
                    router.push('/PasswordSuccess');
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
    <div className='w-full'>
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
  )
}
