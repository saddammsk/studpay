"use client";

import { useState } from "react";
import InputField from "@/app/ui/InputField";
import PrimaryLink from "@/app/ui/PrimaryLink";
import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";
import { Radio, RadioGroup } from "@headlessui/react";


const PropertySetup = [
     {
          checkboximg: '/images/building-icon.svg', name: 'I already have properties', des: 'Add your existing properties now and start managing them right away'
     },
     {
          checkboximg: '/images/timer.svg', name: 'I want to add properties later', des: 'Skip this step for now and explore the platform first'
     },
]

const features = [
     {
          checkboximg: '/images/user-icon.svg', name: 'Tenant Management', des: 'Track tenant information, communication history, and lease details in one place.'
     },
     {
          checkboximg: '/images/wallet-icon.svg', name: 'Online Payments', des: 'Accept rent payments online with automated reminders and instant notifications.'
     },
     {
          checkboximg: '/icons/file-icon.svg', name: 'Lease & Contracts', des: 'Create, sign, and manage lease agreements with built-in e-signature support.'
     },
     {
          checkboximg: '/images/grapgh-icon.svg', name: 'Reports & Analytics', des: 'Get insights on occupancy rates, income trends, and property performance.'
     },
]

function OnboardingPage() {


     const [steps, setSteps] = useState(1);
     const [isProperty, setProperty] = useState<string | null>(null);
     const [isFeatures, setFeatures] = useState<string | null>(null);
     const [errors, setErrors] = useState<Record<string, string>>({});
     const [step2Error, setStep2Error] = useState("");
     const [step3Error, setStep3Error] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitSuccess, setSubmitSuccess] = useState(false);
     
     
     const [formData, setFormData] = useState({
          company: "",
          country: "",
          phone: "",
     });

  const isValidStep1 =
     formData.company.trim() !== "" &&
     formData.country !== "" &&
     /^\+?\d{7,15}$/.test(formData.phone);



    const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => {
          const { name, value } = e.target;

          setFormData((prev) => ({
          ...prev,
          [name]: value,
          }));

          if (errors[name]) {
          setErrors((prev) => ({
               ...prev,
               [name]: "",
          }));
          }
     };


      const validateForm1 = () => {
          const newErrors: Record<string, string> = {};

          if (!formData.company.trim()) {
          newErrors.company = "Company / Individual name is required";
          }

          if (!formData.country) {
          newErrors.country = "Country is required";
          }

          if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
          } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
          newErrors.phone = "Invalid phone number";
          }

          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
          };


     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

            if (!validateForm1()) return;

               setIsSubmitting(true);

               setTimeout(() => {
               console.log("Form submitted:", formData);

               setIsSubmitting(false);
               setSubmitSuccess(true);

          }, 1500);

     }


     const nextStep = () => {
     if (steps === 1) {
     if (!isValidStep1) return;
     }

     if (steps === 2) {
     if (!isProperty) {
          setStep2Error("Please select a property type");
          return;
     }
     setStep2Error("");
     }

     if (steps === 3) {
     if (!isFeatures) {
          setStep3Error("Please select at least one feature");
          return;
     }
     setStep3Error("");
     }
     
     if (steps >= 4) return;
     setSteps((prev) => prev + 1);
     };


     const prevStep = () => {
          if (steps <= 1) return;
          setSteps((prev) => prev - 1);

     }

const stepImages: Record<number, string> = {
     1: "/images/onboarding-step-1.png",
     2: "/images/onboarding-step-2.png",
     3: "/images/onboarding-step-3.png",
     4: "/images/onboarding-step-5.png",
     };

 


     return (
          <div className='flex font-dm-sans h-screen overflow-hidden'>

               <OnboardingLeftCol mainImage={stepImages[steps]} />


               <div className='lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto scroll-hide'>
                    <div className="h-screen flex items-center justify-center">
                         <div className='w-full max-w-[672px]'>
                              <div className="w-full">
                                   <div className={`w-full max-w-[448px] mx-auto ${steps=== 4 && 'hidden'}`} >
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-sm font-normal font-inter leading-5 text-gray-1400">Step {steps === 1 ? "1" : steps === 2 ? "2" : steps === 3 ? "3" : "4"} of 4</h6>
                                        <h6 className="text-sm font-normal font-inter leading-5 text-gray-1400">{steps === 1 ? "25%" : steps === 2 ? "50%" : steps === 3 ? "80%" : "100%"}</h6>
                                   </div>
                                   <div className="bg-gray-1500 rounded-full h-2 w-full mt-2 mb-8 overflow-hidden block">
                                        <div className={`bg-blue-1000 transition duration-300 h-full ${steps === 1 ? "w-1/4" : steps === 2 ? "w-2/4" : steps === 3 ? "w-10/12" : "w-full"} block`}></div>
                                   </div>
                                   </div>

                                 
                                   <form onSubmit={handleSubmit} className='mt-9 w-full'>

                                   {steps === 1 &&(
                                   <div className="w-full border border-gray-1300/[50%] mx-auto rounded-[12px] p-8 pb-10 shadow1 max-w-[448px]">
                                    <div className="w-full flex items-center flex-col pb-8">
                                   <h4 className='text-2xl font-bold leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>Basic information</h4>
                                   <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Tell us a bit about yourself to get started.</p>
                                   </div>

                                     <div className="w-full space-y-5">
                                    

                                        <InputField
                                             label="Company / Individual name"
                                             placeholder="Enter your name"
                                             value={formData.company}
                                             onChange={handleChange}
                                             id="company"
                                             name="company"
                                             className="bg-gray-1600!"
                                        />
                                         {errors.company && <p className="text-red-500 text-xs -mt-4">{errors.company}</p>}

                                        <InputField
                                             label="Country"
                                             fieldType="select"
                                             placeholder="Select country"
                                             value={formData.country}
                                             onChange={handleChange}
                                             name="country"
                                             options={[
                                                  { label: "Pakistan", value: "pk" },
                                                  { label: "India", value: "in" },
                                                  { label: "USA", value: "us" },
                                                  { label: "China", value: "cn" },
                                                  { label: "Russia", value: "ru" },
                                                  { label: "Palestine", value: "ps" },
                                                  { label: "Israel", value: "il" },
                                             ]}
                                             className="bg-gray-1600!"
                                        />
                                         {errors.country && <p className="text-red-500 text-xs -mt-4">{errors.country}</p>}

                                        <InputField
                                             label="Phone number"
                                             placeholder="+1 (555) 000-0000"
                                             value={formData.phone}
                                             onChange={handleChange}
                                             id="phone"
                                             name="phone"
                                             type="number"
                                             className="bg-gray-1600!"
                                        />
                                         {errors.phone && <p className="text-red-500 text-xs -mt-4">{errors.phone}</p>}

                                      <PrimaryLink
                                        onClick={nextStep}
                                        disabled={steps === 1 ? !isValidStep1 : !step2Error}
                                        variant={steps === 1 ? (isValidStep1 ? "primary" : "disabled") : (step2Error ? "primary" : "disabled")}
                                        >
                                        Continue
                                     </PrimaryLink>

                                      </div>
                                      </div>
                                      )}

                                   {steps === 2 && (
                                   <div className="w-full border border-gray-1300/[50%] mx-auto rounded-[12px] p-8 pb-10 shadow1 max-w-[448px]">
                                    <div className="w-full flex items-center flex-col pb-8">
                                   <h4 className='text-2xl font-bold leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>Property Setup</h4>
                                   <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>How would you like to get started?</p>
                                   </div>
                                     <div className="w-full space-y-5">
                                        <RadioGroup
                                        value={isProperty}
                                        onChange={(value) => {
                                             setProperty(value);
                                             if (step2Error) setStep2Error("");
                                        }}
                                        aria-label="Server size"
                                        className="mb-8 space-y-2"
                                        >
                                        {PropertySetup.map((Property) => (
                                             <Radio
                                             key={Property.name}
                                             value={Property}
                                             className="group relative flex border border-gray-1300 cursor-pointer rounded-[12px] bg-gray-1600 p-4"
                                             >
                                             <div className="flex w-full items-start gap-4 justify-between">
                                                  <div className="flex items-start flex-1 gap-4">
                                                  <div className="w-10 h-10 flex items-center justify-center rounded-[12px] bg-gray-1500">
                                                  <img src={Property.checkboximg} alt="" />
                                                  </div>
                                                  <div className="flex-1">
                                                  <div className="text-sm font-inter mb-1 text-black-1000">
                                                       {Property.name}
                                                  </div>
                                                  <div className="text-xs font-inter text-gray-1400">
                                                       {Property.des}
                                                  </div>
                                                  </div>
                                                  </div>

                                                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-1400/[30%]">
                                                  <div className="w-3 h-3 opacity-0 group-data-checked:opacity-100 rounded-full bg-blue-1000" />
                                                  </div>
                                             </div>
                                             </Radio>
                                        ))}
                                        </RadioGroup>

                                        {step2Error && (
                                        <p className="text-red-500 text-xs">{step2Error}</p>
                                        )}

                                        <PrimaryLink
                                        onClick={nextStep}
                                        disabled={!isProperty}
                                        variant={!isProperty ? "disabled" : "primary"}
                                        >
                                        Continue
                                        </PrimaryLink>


                                        </div>

                                   </div>
                                      )}

                                   {steps === 3 && (
                                   <div className="w-full  mx-auto max-w-[672px]">
                                    <div className="w-full flex items-center flex-col pb-8">
                                   <h4 className='text-2xl font-bold leading-7 mb-2 text-black-1000 tracking-[-0.5px]'>What features do you need?</h4>
                                   <p className='mt-1 text-sm font-normal leading-5 text-gray-1000'>Select the tools that match your workflow. You can always change these later.</p>
                                   </div>
                                   <div className="w-full">
                                   <RadioGroup value={isFeatures} 
                                     onChange={(value) => {
                                             setFeatures(value);
                                             if (step3Error) setStep3Error("");
                                        }}
                                           aria-label="Server size" className="mb-8 grid md:grid-cols-2 gap-x-2 gap-y-4">
                                        {features.map((item) => (
                                             <Radio
                                                  key={item.name}
                                                  value={item}
                                                  className="group relative border border-gray-1300 cursor-pointer rounded-[12px] bg-white p-4 transition focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
                                             >
                                                  <div className="flex w-full items-start gap-4 justify-between">
                                                       <div className="flex-1">
                                                            <div className='w-11 h-11 mb-3 flex items-center justify-center rounded-[12px] bg-gray-1500'>
                                                                 <img src={item.checkboximg} alt="" />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <div className='text-sm font-inter leading-6 mb-1 text-black-1000'>{item.name}</div>
                                                                 <div className='font-inter text-xs leading-5 text-gray-1400'>{item.des}</div>
                                                            </div>
                                                       </div>
                                                       <div className="transition flex items-center justify-center group-data-checked:opacity-100 w-5 h-5 rounded-full border-2 border-gray-1400/[30%]">
                                                            <div className='w-3 h-3 opacity-0  group-data-checked:opacity-100 rounded-full bg-blue-1000'></div>
                                                       </div>
                                                  </div>
                                             </Radio>
                                        ))}
                                   </RadioGroup>
                                   <h6 className='text-sm font-normal leading-5 text-center text-gray-1400'>Select at least one feature to continue</h6>
                                   <div className='flex mt-12 items-center justify-between'>
                                        <button onClick={prevStep} className="text-sm cursor-pointer px-8 font-normal gap-2 flex items-center leading-5 text-black-1000">
                                             <img src="/images/left-icon.svg" alt="" />    Back
                                        </button>
                                     
                                        <PrimaryLink
                                        onClick={nextStep}
                                        disabled={!isFeatures}
                                        variant={!isFeatures ? "disabled" : "primary"}
                                        className="gap-2 min-w-[148px] !w-fit"
                                        >
                                       Continue <img src="/images/right-icon.svg" alt="" />
                                        </PrimaryLink>

                                   </div>
                                   </div>
                                   </div>
                                      )}

                                   {steps === 4 &&(
                                   <div className="w-full mx-auto max-w-[448px]">
                                     <div className="w-full space-y-5">
                                         <div className="text-center mb-10">
                                        <img src="/images/checkbox-icon.svg" className="inline-block mb-8" alt="" />
                                        <h4 className='text-[36px] font-medium leading-10 mb-2 text-black-1000 tracking-[-0.5px]'>{"You're"} all set!</h4>
                                        <p className='mt-1 text-base font-normal leading-6 text-gray-1400'>Your account is ready. Start managing your properties with ease.</p>
                                        </div>

                                    
                                        <PrimaryLink href="/" >
                                        Go to Dashboard
                                        </PrimaryLink>


                                        </div>
                                   </div>
                                   )} 
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OnboardingPage
