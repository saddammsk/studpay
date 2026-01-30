'use client';
import InputField from '@/app/ui/InputField';
import PrimaryLink from '@/app/ui/PrimaryLink';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Textarea } from '@headlessui/react';
import { useState } from 'react';

interface ClaimModelProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ClaimModel = ({isOpen, setIsOpen}: ClaimModelProps) => {

      const [formData, setFormData] = useState({
              property: "",
              claimType: "",
              coveragePeriod: "",
              monthlyRentAmount: "",
         });


        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handleCancel = () => {
            setIsOpen(false);
            setFormData({
                property: "",
                claimType: "",
                coveragePeriod: "",
                monthlyRentAmount: "",
            });
        }

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            
            console.log('Form submitted with data:', formData);
            
            if (!formData.property || !formData.claimType || !formData.coveragePeriod || !formData.monthlyRentAmount) {
                alert('Please fill in all fields');
                return;
            }
            
            alert('Claim submitted successfully!');
            handleCancel();
        };

  return (
          <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                    className="relative z-50"
                  >
                    <DialogBackdrop
                      className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
                    />
            
                    <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-auto">
                      <DialogPanel
                        className="
                        w-full max-w-[670px] relative max-h-[95vh] overflow-y-auto scroll-hide rounded-xl bg-white
                        transition-all duration-300
                        data-closed:scale-95 data-closed:opacity-0
                      "
                      >
                          <DialogTitle className="text-xl sm:px-6 px-4 py-4 border-b border-gray-3300 leading-9 font-bold text-black16">
                            Declare a claim
                          </DialogTitle>
                          <button onClick={() => setIsOpen(false)} className="absolute lg:hidden top-4 right-4 z-10">
                            <img src="/images/cross-icon.svg" className='w-5' alt="" />
                          </button>
                          <div className="w-full sm:p-6 px-4 py-6">

                          <div className="w-full bg-gray-2300 rounded-xl p-4 mb-6 mt-1">
                            <p className='text-gray-2200 text-sm '>Guarantee Summary</p>
                            <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-3 mt-3">
                                <div className="">
                                    <p className='text-xs text-gray-2200'>Property</p>
                                    <h4 className='text-sm text-black-1200'>45 Rue de la République</h4>
                                </div>
                                 <div className="">
                                    <p className='text-xs text-gray-2200'>Tenant</p>
                                    <h4 className='text-sm text-black-1200'>Marie Dupont</h4>
                                </div>
                                 <div className="">
                                    <p className='text-xs text-gray-2200'>Status</p>
                                    <h4 className='text-xs text-green-1200 bg-green-1200/10 text-center inline-flex items-center justify-center px-2 rounded-full py-0.5'>Active</h4>
                                </div>

                            </div>

                          </div>
                        <form onSubmit={handleSubmit} className='w-full space-y-5'>
                              <InputField
                                label="Claim type"
                                fieldType="select"
                                placeholder="Select claim type"
                                value={formData.claimType}
                                onChange={handleChange}
                                name="claimType"
                                options={[
                                    { label: "Damage to property", value: "damage_property" },
                                    { label: "Non-payment of rent", value: "non_payment_rent" },
                                    { label: "Legal expenses", value: "legal_expenses" },
                                    { label: "Other", value: "other" },
                          
                                ]}
                                className="bg-gray-1600! h-10!"
                             />

                             <div className="w-full">
                            <label className="text-sm font-medium leading-5 mb-2.5 text-black-1000 block">
                                    Description
                            </label>
                             <Textarea placeholder='Describe the claim details...' className={"w-full transition outline-0 duration-300 focus:ring-2 ring-blue-1000 text-sm p-3 border border-gray-3300 bg-gray34 rounded-[10px] min-h-[120px]"}/>
                                </div>

                                <div className="w-full">
                                    <p className='text-sm font-medium leading-5 mb-2.5 text-black-1000 block'>Supporting documents</p>
                                <label htmlFor='file' className=" text-xs text-gray-2200 text-center font-inter min-h-[152px] flex items-center justify-center flex-col rounded-xl border-2 border-gray-3300 border-dashed bg-gray-1600 font-medium leading-5 mb-2.5">
                                        <img src="/icons/upload-icon-1.svg" className='mb-2' alt="" />
                                        <span>Drop files here or  <span className='text-blue-1000'>browse</span></span>
                                        <span className='text-xs textg-gray-2200 text-center font-inter'>PDF, JPG, PNG up to 10MB</span>
                                        <input hidden id='file' type="file" />
                                </label>

                                </div>


                    <div className="w-full flex items-center justify-end gap-3 pt-4">

                    <PrimaryLink 
                        type="submit"
                    >
                     Submit claim
                    </PrimaryLink>

                    </div>
                    </form>

                    <div className="w-full border-t border-gray-3300 mt-6 pt-4 gap-3">
                        <h4 className='text-gray-2200 text-sm  uppercase mb-3'>Claim Status</h4>
                        <div className="w-full flex items-center gap-2">
                            <div className="inline-flex flex-col items-center justify-center gap-2">
                                <div className="bg-blue-1000 rounded-full w-10 h-10 flex items-center justify-center">
                                    <img src="/icons/checked-icon-2.svg" alt="" />
                                </div>
                                <p className='text-blue-1000 text-center text-xs'>Submitted</p>
                            </div>
                            <div className="bg-gray-3300 h-0.5 flex-1"></div>
                               <div className="inline-flex flex-col items-center justify-center gap-2">
                                <div className="bg-gray-2300 border-2 border-gray-3300 rounded-full w-10 h-10 flex items-center justify-center">
                                    <img src="/icons/review-icon-gray.svg" alt="" />
                                </div>
                                <p className='text-gray-2200 text-center text-xs'>Submitted</p>
                            </div>
                            <div className="bg-gray-3300 h-0.5 flex-1"></div>
                               <div className="inline-flex flex-col items-center justify-center gap-2">
                                <div className="bg-gray-2300 border-2 border-gray-3300 rounded-full w-10 h-10 flex items-center justify-center">
                                    <img src="/icons/approved-icon-gray.svg" alt="" />
                                </div>
                                <p className='text-gray-2200 text-center text-xs'>Submitted</p>
                            </div>

                            
                        </div>

                    </div>

                    </div>

                      
                      </DialogPanel>
                    </div>
          </Dialog>
  )
}