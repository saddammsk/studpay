"use client";
import React from "react";

interface OnboardingLeftColProps {
  mainImage?: string;
  mobileImage?: string;
}

export const OnboardingLeftCol: React.FC<OnboardingLeftColProps> = ({
  mainImage = "/images/login-img.png",
  mobileImage = "/images/mobile-img.png",
}) => {
  return (
    <div className="w-1/2 lg:block hidden">
      <div className="bg-[url(/images/login-bg.png)] overflow-hidden relative h-screen bg-cover bg-no-repeat flex flex-col justify-between items-center">
        <div className="w-full flex items-center justify-center h-full">
          <div className="relative">
            <img
              src={mainImage}
              className="2xl:h-[63vh] xl:h-[52vh] h-[40vh]"
              alt="Onboarding"
            />

            <div className="bg-white rounded-full shadow1 absolute top-0 right-[-130px] text-xs font-medium leading-4 py-2 px-4 text-black-1000">
              🔒 Secure Partner Access
            </div>

            <div className="absolute -bottom-[36%] z-10 -right-full">
              <img
                src={mobileImage}
                className="2xl:h-[40vh] xl:h-[32vh] h-[26vh]"
                alt="Mobile Preview"
              />
            </div>
          </div>
        </div>

        <div className="p-10 w-full">
          <h4 className="text-lg font-medium leading-7 text-black-1000 mb-2">
            Simplify your property payments
          </h4>
          <p className="text-sm font-normal leading-5 text-gray-1000 max-w-[378px]">
            Manage rent collection, deposits, and financial reporting in one
            unified platform.
          </p>
        </div>
      </div>
    </div>
  );
};
