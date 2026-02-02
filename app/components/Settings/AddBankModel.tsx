'use client';
import InputField from '@/app/ui/InputField';
import PrimaryLink from '@/app/ui/PrimaryLink';
import ToggleSwitch from '@/app/ui/ToggleSwitch';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useState } from 'react';

interface AddBankModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onSuccess?: (bankData: BankFormData) => void;
}

interface BankFormData {
    name: string;
    bank: string;
    IBAN: string;
    SWIFT: string;
    country: string;
    primaryAccount: boolean;
}

interface FormErrors {
    [key: string]: string;
}

export const AddBankModal = ({ isOpen, setIsOpen, onSuccess }: AddBankModalProps) => {
    const [steps, setSteps] = useState(0);
    const [primaryAccount, setPrimaryAccount] = useState(false);
    const [selectedBank, setSelectedBank] = useState<'manual' | 'open-banking' | null>(null);
    const [searchBank, setSearchBank] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const [formData, setFormData] = useState<Partial<BankFormData>>({
        name: '',
        bank: '',
        IBAN: '',
        SWIFT: '',
        country: '',
        primaryAccount: false,
    });

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name?.trim()) {
            newErrors.name = 'Account holder name is required';
        }

        if (!formData.bank?.trim()) {
            newErrors.bank = 'Bank name is required';
        }

        if (!formData.IBAN?.trim()) {
            newErrors.IBAN = 'IBAN/Account number is required';
        } else if (!/^[A-Z0-9]{15,34}$/.test(formData.IBAN.toString().toUpperCase())) {
            newErrors.IBAN = 'IBAN must be 15-34 alphanumeric characters';
        }

        if (!formData.SWIFT?.trim()) {
            newErrors.SWIFT = 'SWIFT/Routing number is required';
        } else if (!/^[A-Z0-9]{8,11}$/.test(formData.SWIFT.toString().toUpperCase())) {
            newErrors.SWIFT = 'SWIFT must be 8-11 alphanumeric characters';
        }

        if (!formData.country) {
            newErrors.country = 'Country is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

const handleSelectBank = (bankType: 'manual' | 'open-banking') => {
        setSelectedBank(bankType);
        setErrors({});
    };

 const handleContinue = () => {
        setSteps(prev => prev + 1);
        };


    const handleCancel = () => {
        setIsOpen(false);
        setFormData({
            name: '',
            bank: '',
            IBAN: '',
            SWIFT: '',
            country: '',
            primaryAccount: false,
        });
        setSteps(0);
        setSelectedBank(null);
        setErrors({});
        setSearchBank('');
    };

   const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const submitData: BankFormData = {
            ...(formData as BankFormData),
            primaryAccount,
            };

            console.log('Form submitted with data:', submitData);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            onSuccess?.(submitData);

            handleCancel(); 
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ submit: 'Failed to save bank account. Please try again.' });
        } finally {
            setIsLoading(false);
        }
        };


    const maxWidth =
  steps === 2 ? 'max-w-[510px]' : 'max-w-[448px]';

    const isStep1Valid = formData.name && formData.bank && formData.IBAN && formData.SWIFT && formData.country && !Object.values(errors).some((e) => e);

    return (
        <Dialog open={isOpen} onClose={() => {setIsOpen(false); handleCancel()}} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" />

            <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-auto">
                <DialogPanel className={`w-full ${maxWidth} relative sm:p-6 px-4 py-6 max-h-[95vh] overflow-y-auto scroll-hide rounded-xl bg-white data-closed:scale-95 data-closed:opacity-0`}>
                    <button onClick={() => {setIsOpen(false); handleCancel()}} className="absolute cursor-pointer top-4 right-4 z-10">
                        <img src="/images/cross-icon.svg" className="w-4" alt="Close" />
                    </button>

                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        {/* Step 0: Bank Selection */}
                        {steps === 0 && (
                            <div className="w-full space-y-4">
                                <h2 className="text-xl text-center font-bold text-black16 mb-1">
                                    Add a Bank Account
                                </h2>
                                <p className="text-sm text-center text-gray-1000">
                                    Choose how you want to connect your bank
                                </p>

                                <label className={` ${selectedBank === "manual" ? "bg-gray-1200" : "bg-white hover:bg-gray-50"} p-5 shadow1 rounded-xl border border-gray-1100 flex items-center cursor-pointer transition`}>
                                    <input
                                        type="radio"
                                        name="bankMethod"
                                        value="manual"
                                        checked={selectedBank === 'manual'}
                                        onChange={() => handleSelectBank('manual')}
                                        className="w-4 h-4 cursor-pointer hidden"
                                    />
                                    <div className="flex-1 flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-lightgray flex items-center justify-center flex-shrink-0">
                                            <img src="/icons/add-icon-1.svg" alt="Manual" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-base font-inter mb-0.5 text-black-1000 font-bold">
                                                Add Manually
                                            </h4>
                                            <p className="text-sm text-gray-1000">
                                                Enter your bank details manually
                                            </p>
                                        </div>
                                    </div>
                                </label>

                                <label className={` ${selectedBank === "open-banking" ? "bg-gray-1200" : "bg-white hover:bg-gray-50"} p-5 shadow1 rounded-xl border border-gray-1100 flex items-center cursor-pointer transition`}>
                                    <input
                                        type="radio"
                                        name="bankMethod"
                                        value="open-banking"
                                        checked={selectedBank === 'open-banking'}
                                        onChange={() => handleSelectBank('open-banking')}
                                        className="w-4 h-4 cursor-pointer hidden"
                                    />
                                    <div className="flex-1 flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-lightgray flex items-center justify-center flex-shrink-0">
                                            <img src="/icons/secure-icon-1.svg" alt="Secure" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex-1 flex items-center gap-4 mb-0.5">
                                                <h4 className="text-base font-inter text-black-1000 font-bold">
                                                    Connect via Open Banking
                                                </h4>
                                                <span className="text-green-1100 text-xs bg-green-1000 rounded-full px-2 py-0.5">
                                                    Secure
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-1000">
                                                Securely connect using your bank login
                                            </p>
                                            <p className="text-blue-1200 text-xs mt-2">Recommended</p>
                                        </div>
                                    </div>
                                </label>
                                <div className="w-full mt-6">
                                <PrimaryLink
                                    variant={selectedBank ? "primary" : "disabled"}
                                    disabled={!selectedBank}
                                    onClick={() => {
                                        if (selectedBank) {
                                           handleContinue()
                                        }
                                    }}>
                                    Continue
                                </PrimaryLink>
                                </div>
                            </div>
                        )}

                        {/* Step 1: Manual Bank Details */}
                        {steps === 1 && (
                            <div className="w-full space-y-5">
                                <div className="w-full">
                                    <h2 className="text-xl font-bold text-black16 mb-1">Add Bank Account</h2>
                                    <p className="text-sm text-gray-1000">
                                        Enter your bank account details below
                                    </p>
                                </div>

                                {errors.submit && (
                                    <div className="w-full p-3 bg-red-100 border border-red-300 rounded-xl">
                                        <p className="text-sm text-red-700">{errors.submit}</p>
                                    </div>
                                )}

                                <div className="w-full space-y-5">
                                    <div>
                                        <InputField
                                            label="Account Holder Name"
                                            type="input"
                                            placeholder="John Doe"
                                            value={formData.name || ''}
                                            onChange={handleChange}
                                            id="name"
                                            name="name"
                                            className="h-11! rounded-xl!"
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <InputField
                                            label="Bank Name"
                                            type="input"
                                            placeholder="Chase Bank"
                                            value={formData.bank || ''}
                                            onChange={handleChange}
                                            id="bank"
                                            name="bank"
                                            className="h-11! rounded-xl!"
                                        />
                                        {errors.bank && (
                                            <p className="text-red-600 text-xs mt-1">{errors.bank}</p>
                                        )}
                                    </div>

                                    <div>
                                        <InputField
                                            label="Account Number / IBAN"
                                            type="text"
                                            placeholder="1234567890"
                                            value={formData.IBAN || ''}
                                            onChange={handleChange}
                                            id="IBAN"
                                            name="IBAN"
                                            className="h-11! rounded-xl!"
                                        />
                                        {errors.IBAN && (
                                            <p className="text-red-600 text-xs mt-1">{errors.IBAN}</p>
                                        )}
                                    </div>

                                    <div>
                                        <InputField
                                            label="Routing Number / SWIFT"
                                            type="text"
                                            placeholder="021000021"
                                            value={formData.SWIFT || ''}
                                            onChange={handleChange}
                                            id="SWIFT"
                                            name="SWIFT"
                                            className="h-11! rounded-xl!"
                                        />
                                        {errors.SWIFT && (
                                            <p className="text-red-600 text-xs mt-1">{errors.SWIFT}</p>
                                        )}
                                    </div>

                                    <div>
                                        <InputField
                                            label="Country"
                                            fieldType="select"
                                            placeholder="Select country"
                                            value={formData.country || ''}
                                            onChange={handleChange}
                                            name="country"
                                            options={[
                                                { label: 'Select a country', value: '' },
                                                { label: 'Pakistan', value: 'pk' },
                                                { label: 'India', value: 'in' },
                                                { label: 'USA', value: 'us' },
                                                { label: 'China', value: 'cn' },
                                                { label: 'Russia', value: 'ru' },
                                                { label: 'Palestine', value: 'ps' },
                                                { label: 'Israel', value: 'il' },
                                            ]}
                                            className="bg-gray-1600!"
                                        />
                                        {errors.country && (
                                            <p className="text-red-600 text-xs mt-1">{errors.country}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full flex items-center justify-between bg-lightgray rounded-xl px-4 py-3">
                                    <div className="flex-1">
                                        <h4 className="text-sm text-black-1000 font-medium">
                                            Set as primary account
                                        </h4>
                                        <p className="text-xs text-gray-1000">
                                            This account will be used for all payouts
                                        </p>
                                    </div>
                                    <div>
                                        <ToggleSwitch
                                            setEnabled={() => setPrimaryAccount((pre) => !pre)}
                                            enabled={primaryAccount}
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <PrimaryLink
                                        disabled={!isStep1Valid || isLoading}
                                        onClick={handleContinue}
                                        className={!isStep1Valid ? 'opacity-50 cursor-not-allowed' : ''}
                                    >
                                {isLoading ? 'Saving...' : 'Save Bank Account'}
                                    </PrimaryLink>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Open Banking Bank Selection */}
                        {steps === 2 && (
                            <div className="w-full space-y-5">
                                <div className="w-full text-center flex items-center justify-center flex-col">
                                    <img src="/icons/connect-bank-icon.svg" alt="" />
                                    <h2 className="text-xl text-center font-bold mt-3 text-black16 mb-1">
                                        Connect via Open Banking
                                    </h2>
                                    <p className="text-sm text-center text-gray-1000">
                                        Securely link your bank account using your online banking
                                        credentials
                                    </p>
                                </div>

                                <div className="w-full">
                                    <InputField
                                        label=""
                                        type="input"
                                        placeholder="Search for your bank..."
                                        value={searchBank}
                                        onChange={(e) => setSearchBank(e.target.value)}
                                        id="search-bank"
                                        name="search-bank"
                                        className="h-11! rounded-xl!"
                                        leftIconSrc="/images/search-icon.svg"
                                    />
                                </div>

                                <div className="w-full max-h-[240px] overflow-auto">
                                    <ul className="grid grid-cols-2 gap-3">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                            <li key={item}>
                                                <label className="border border-gray-1100 p-3 flex rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                                    <div className="flex-1 flex items-center gap-2">
                                                        <img
                                                            src={`/images/bank-img-${item > 4 ? 4 : item}.png`}
                                                            alt="Bank"
                                                        />
                                                        <p className="text-sm text-black-1000">Chase</p>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        id={`bank-${item}`}
                                                        name="bankSelection"
                                                        className="cursor-pointer"
                                                    />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full p-3 flex items-start gap-2 bg-green-1000 rounded-xl">
                                    <img src="/icons/sheild-icon-2.svg" alt="Secure" />
                                    <p className="text-green-1100 text-sm">
                                        We use bank-level encryption and never store your banking
                                        credentials
                                    </p>
                                </div>

                                <div className="w-full">
                                    <PrimaryLink onClick={handleContinue} disabled={isLoading}>
                                        {isLoading ? 'Connecting...' : 'Continue to Bank'}
                                    </PrimaryLink>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Success */}
                        {steps === 3 && (
                            <div className="w-full space-y-5">
                                <div className="w-full text-center flex items-center justify-center flex-col">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-2000">
                                        <img src="/icons/check-icon-3.svg" alt="Success" />
                                    </div>
                                    <h2 className="text-xl text-center font-bold mt-3 text-black16 mb-1">
                                        {selectedBank === 'manual'
                                            ? 'Bank Account Saved'
                                            : 'Connecting Successfully'}
                                    </h2>
                                    <p className="text-sm text-center text-gray-1000">
                                        {selectedBank === 'manual'
                                            ? 'Your bank account has been saved successfully'
                                            : 'Your bank account will be connected'}
                                    </p>
                                </div>

                                <div className="w-full p-3 flex items-start gap-2 bg-green-1000 rounded-xl">
                                    <img src="/icons/sheild-icon-2.svg" alt="Secure" />
                                    <p className="text-green-1100 text-sm">
                                        We use bank-level encryption and never store your banking
                                        credentials
                                    </p>
                                </div>

                                <PrimaryLink
                                    onClick={handleCancel}
                                    className="bg-blue20!"
                                >
                                    Done
                                </PrimaryLink>
                            </div>
                        )}
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
};