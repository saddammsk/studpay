"use client";

import { useEffect, useState } from "react";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InputField from "@/app/ui/InputField";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearMessages, fetchUserProfile, setEmail, setFirstName, setLastName, setPhone, updateUserProfile, uploadProfilePhoto } from "@/store/slices/Profileslice";


export interface ValidationError {
  [key: string]: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.length >= 10;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateProfileForm = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}): ValidationError => {
  const errors: ValidationError = {};

  if (!validateName(formData.firstName)) {
    errors.firstName = 'First name must be between 2 and 50 characters';
  }

  if (!validateName(formData.lastName)) {
    errors.lastName = 'Last name must be between 2 and 50 characters';
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number (at least 10 digits)';
  }

  return errors;
};

export const validateImageFile = (file: File): string | null => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  if (file.size > maxSize) {
    return 'Image size must be less than 5MB';
  }

  if (!allowedTypes.includes(file.type)) {
    return 'Only JPEG, PNG, WebP, and GIF images are allowed';
  }

  return null;
};

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user, loading, error, success, successMessage } = useAppSelector(
    (state) => state.profile
  );

  const [validationErrors, setValidationErrors] = useState<ValidationError>({});
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);
  const [localForm, setLocalForm] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1(555) 123-4567',
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    setLocalForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    });
  }, [user]);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const handleInputChange = (field: keyof typeof localForm, value: string) => {
    setLocalForm((prev) => ({ ...prev, [field]: value }));
    setValidationErrors((prev) => ({ ...prev, [field]: '' }));

    switch (field) {
      case 'firstName':
        dispatch(setFirstName(value));
        break;
      case 'lastName':
        dispatch(setLastName(value));
        break;
      case 'email':
        dispatch(setEmail(value));
        break;
      case 'phone':
        dispatch(setPhone(value));
        break;
    }
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateImageFile(file);
    if (validationError) {
      setValidationErrors({ photo: validationError });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPhotoPreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);

    setIsPhotoLoading(true);
    try {
      await dispatch(uploadProfilePhoto(file)).unwrap();
    } catch (err) {
      console.error('Photo upload failed:', err);
    } finally {
      setIsPhotoLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateProfileForm(localForm);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      await dispatch(
        updateUserProfile({
          firstName: localForm.firstName,
          lastName: localForm.lastName,
          email: localForm.email,
          phone: localForm.phone,
        })
      ).unwrap();
    } catch (err) {
      console.error('Profile update failed:', err);
    }
  };


     return (
          <div className="2xl:w-[calc(100%_-_398px)] lg:w-[calc(100%_-_298px)] ml-auto">
              <div className=" max-w-[830px]">
                    <h4 className="text-2xl font-bold leading-8 text-black-1200">Profile</h4>
                    <p className="text-base font-normal font-inter leading-6 text-gray-1400">Manage your personal information and preferences.</p>
                    <div className="my-6 bg-white rounded-[10px] border border-gray-1300/[50%] shadow-6xl p-6">
                        <h4 className="text-lg font-bold leading-7 text-black-1200">Profile Photo</h4>
                        <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Update your profile picture</p>
                        <div className="mt-6 flex items-center gap-6">
                              <img
                                  src={photoPreview || user.profilePhoto || '/images/profile-img.png'}
                                  alt="Profile"
                                  className="w-24 h-24 rounded-lg object-cover"
                                  />
                              <div>
                                  <label  className="bg-gray-1600 text-sm font-normal leading-5 text-black-1200 border border-gray-1300 rounded-lg flex items-center gap-2 py-2.5 px-4 cursor-pointer">
                                      <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        disabled={isPhotoLoading}
                                        className="hidden"
                                        />
                                        <img src="/images/camera.svg" alt="" />Change Photo
                                  </label>
                                    {validationErrors.photo && (
                                        <p className="text-red-600 text-xs mt-2">{validationErrors.photo}</p>
                                        )}
                              </div>
                        </div>
                    </div>
                    <div className="my-6 bg-white rounded-[10px] border border-gray-1300/[50%] shadow-6xl p-6">
                        <h4 className="text-lg font-bold leading-7 text-black-1200">Personal Information</h4>
                        <p className="text-sm font-normal font-inter leading-6 text-gray-1400">Update your personal details</p>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="flex-1">
                                  <InputField
                                        label="First Name"
                                        placeholder="John"
                                        value={localForm.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        id="name"
                                        name="name"
                                        variant="filled2"
                                  />
                                    {validationErrors.firstName && (
                                        <p className="text-red-600 text-xs mt-1">
                                            {validationErrors.firstName}
                                        </p>
                                        )}
                                  </div>
                                  <div className="flex-1">
                                  <InputField
                                        label="Last Name"
                                        placeholder="Doe"
                                      value={localForm.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        id="name2"
                                        name="name2"
                                        variant="filled2"
                                  />
                                    {validationErrors.lastName && (
                                        <p className="text-red-600 text-xs mt-1">
                                            {validationErrors.lastName}
                                        </p>
                                        )}
                                  </div>
                              </div>
                              <div className="w-full">
                              <InputField
                                  label="Email Address"
                                  placeholder="john.doe@example.com"
                                  value={localForm.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                  id="name2"
                                  name="name2"
                                  variant="filled2"
                              />
                              {validationErrors.email && (
                                  <p className="text-red-600 text-xs mt-1">{validationErrors.email}</p>
                                  )}
                              </div>
                              <div className="w-full">
                              <InputField
                                  label="Phone Number"
                                  placeholder="+1 (555) 123-4567"
                                  value={localForm.phone}
                                  onChange={(e) => handleInputChange('phone', e.target.value)}
                                  id="phone"
                                  name="phone"
                                  variant="filled2"
                              />
                              {validationErrors.phone && (
                                  <p className="text-red-600 text-xs mt-1">{validationErrors.phone}</p>
                                  )}
                              </div>
                              <div className="w-fit min-w-[127px]">
                                  <PrimaryLink type="submit" disabled={loading} className="!py-2.5" variant="primary">
                                        Save Changes
                                  </PrimaryLink>
                              </div>
                        </form>
                    </div>
              </div>
          </div>
     );
}
