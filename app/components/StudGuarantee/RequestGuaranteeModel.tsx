'use client';
import InputField from '@/app/ui/InputField';
import PrimaryLink from '@/app/ui/PrimaryLink';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

interface RequestGuaranteeModelProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const RequestGuaranteeModel = ({isOpen, setIsOpen}: RequestGuaranteeModelProps) => {

      const [formData, setFormData] = useState({
              property: "",
              tenant: "",
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
                tenant: "",
                coveragePeriod: "",
                monthlyRentAmount: "",
            });
        }

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            
            console.log('Form submitted with data:', formData);
            
            if (!formData.property || !formData.tenant || !formData.coveragePeriod || !formData.monthlyRentAmount) {
                alert('Please fill in all fields');
                return;
            }
            
          
            alert('Guarantee request submitted successfully!');
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
                        w-full max-w-120 max-h-[95vh] overflow-y-auto scroll-hide rounded-xl bg-white sm:p-6 px-4 py-6
                        transition-all duration-300
                        data-closed:scale-95 data-closed:opacity-0
                      "
                      >
                          <DialogTitle className="text-xl mb-6 leading-9 font-bold text-black16">
                            Request a guarantee
                          </DialogTitle>
                        <form onSubmit={handleSubmit} className='w-full space-y-5'>
                              <InputField
                                label="Select property"
                                fieldType="select"
                                placeholder="Choose a property"
                                value={formData.property}
                                onChange={handleChange}
                                name="property"
                                options={[
                                    { label: "123 Main St, New York", value: "property_ny" },
                                    { label: "456 Oak Ave, Chicago", value: "property_ch" },
                                    { label: "789 Pine Rd, Los Angeles", value: "property_la" },
                                    { label: "321 Elm St, Miami", value: "property_mi" },
                                    { label: "654 Maple Dr, Seattle", value: "property_se" },
                                ]}
                                className="bg-gray-1600! h-10!"
                             />

                               <InputField
                                label="Select tenant"
                                fieldType="select"
                                placeholder="Choose a tenant"
                                value={formData.tenant}
                                onChange={handleChange}
                                name="tenant"
                                options={[
                                    { label: "John Smith", value: "tenant_js" },
                                    { label: "Emma Johnson", value: "tenant_ej" },
                                    { label: "Michael Brown", value: "tenant_mb" },
                                    { label: "Sarah Davis", value: "tenant_sd" },
                                    { label: "David Wilson", value: "tenant_dw" },
                                ]}
                                className="bg-gray-1600! h-10!"
                             />

                                <InputField
                                label="Coverage period"
                                fieldType="select"
                                placeholder="Choose a coverage period"
                                value={formData.coveragePeriod}
                                onChange={handleChange}
                                name="coveragePeriod"
                                options={[
                                    { label: "6 months", value: "6_months" },
                                    { label: "12 months", value: "12_months" },
                                    { label: "18 months", value: "18_months" },
                                    { label: "24 months", value: "24_months" },
                                    { label: "36 months", value: "36_months" },
                                ]}
                                className="bg-gray-1600! h-10!"
                             />

                               <InputField
                                label="Monthly rent amount"
                                type="input"
                                placeholder="Enter monthly rent amount"
                                value={formData.monthlyRentAmount}
                                onChange={handleChange}
                                rightarrowSrc="/icons/euro-icon.svg"
                                id="monthlyRentAmount"
                                name="monthlyRentAmount"
                                
                        />



                    <div className="w-full border border-blue-1000/20 rounded-lg bg-blue-1000/5 px-4 py-3 flex items-center gap-2 mt-5 mb-6">
                        <img className='w-5' src="/icons/expired-icon-1.svg" alt="info" />
                        <p className='text-gray-2200 text-sm font-inter'>This guarantee protects you against unpaid rent.</p>
                    </div>

                    <div className="w-full flex items-center justify-end gap-3 pt-4">
                    <PrimaryLink 
                        type="button"
                        variant='cancel'
                        onClick={handleCancel} 
                        className="w-fit! h-10!"
                    >
                     Cancel
                    </PrimaryLink>     

                    <PrimaryLink 
                        type="submit"
                        className="w-fit! h-10!"
                    >
                     Submit request
                    </PrimaryLink>

                    </div>
                    </form>
                      
                      </DialogPanel>
                    </div>
          </Dialog>
  )
}