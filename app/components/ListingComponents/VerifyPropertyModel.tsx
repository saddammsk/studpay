import PrimaryLink from '@/app/ui/PrimaryLink'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link'
import PropertyRadio from '../PropertyRadio'
import { useState } from 'react';

    interface FormData {
  documentType: string;
  landlordName: string;
  address: string;
  file: File | null;
}


const VerifyPropertyModel = ({ isOpenVerify, setIsOpenVerify }: { isOpenVerify: boolean; setIsOpenVerify: (isOpen: boolean) => void }) => {
  
  

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    documentType: "",
    landlordName: "",
    address: "",
    file: null,
  });

  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const [errors, setErrors] = useState({
    documentType: "",
    landlordName: "",
    address: "",
    file: "",
  });

  const handleDocumentTypeChange = (value: string) => {
    setFormData({ ...formData, documentType: value });
    setErrors({ ...errors, documentType: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      setErrors({ ...errors, file: "Please upload a PDF, JPG, or PNG file" });
      return;
    }

    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      setErrors({ ...errors, file: "File size must be less than 10MB" });
      return;
    }

    setFormData({ ...formData, file });
    setFileName(file.name);
    setErrors({ ...errors, file: "" });
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, file: null });
    setFileName("");
  };

  const handleRemoveDocumentType = () => {
    setFormData({ ...formData, documentType: "" });
  };

  const validateStep1 = () => {
    if (!formData.documentType) {
      setErrors({ ...errors, documentType: "Please select a document type" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const newErrors = {
      documentType: "",
      landlordName: "",
      address: "",
      file: "",
    };

    if (!formData.file) {
      newErrors.file = "Please upload a document";
    }
    if (!formData.landlordName.trim()) {
      newErrors.landlordName = "Landlord name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return !newErrors.file && !newErrors.landlordName && !newErrors.address;
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        console.log("Form submitted:", formData);
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
         handleCancel()
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    setFormData({
      documentType: "",
      landlordName: "",
      address: "",
      file: null,
    });
    setFileName("");
    setCurrentStep(1);
    setIsOpenVerify(false);
    setErrors({
      documentType: "",
      landlordName: "",
      address: "",
      file: "",
    });
  };

  const steps = [
    { number: 1, title: "Choose document" },
    { number: 2, title: "Upload" },
    { number: 3, title: "Done" },
  ];

  
  
    return (
      <Dialog
            open={isOpenVerify}
            onClose={() => setIsOpenVerify(false)}
                className="relative z-50"
              >
                <DialogBackdrop
                  className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
                />
        
                <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-auto">
                  <DialogPanel
                    className="
                    w-full max-w-2xl max-h-[95vh] overflow-y-auto scroll-hide rounded-4xl bg-white sm:p-10 px-4 py-6
                    transition-all duration-300
                    data-closed:scale-95 data-closed:opacity-0
                  "
                  >
                    <div className="text-center">
                      <DialogTitle className="sm:text-[30px] text-2xl font-outfit leading-9 font-bold text-black16">
                        Verify this property
                      </DialogTitle>
        
                      <p className="text-gray30 font-normal font-outfit sm:text-base text-sm leading-6 mt-2">
                        {`Increase your credibility and get the "Verified Property" badge`}
                      </p>
                    </div>
                  <form className="pt-8" onSubmit={(e) => {e.preventDefault(); e.stopPropagation();}}>
                        {/* Step Indicator */}
                        <div className="">
                            <ul className="flex items-center justify-center sm:gap-22 gap-13.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-5 after:w-[50%] after:h-0.5 after:bg-gray31">
                            {steps.map((step) => (
                                <li key={step.number} className="bg-white relative z-50 sm:px-3 px-1.5">
                                <span
                                    className={`flex items-center justify-center font-semibold rounded-full sm:w-10 w-8 sm:h-10 h-8 mx-auto transition-colors ${
                                    currentStep >= step.number
                                        ? "bg-blue18 text-white"
                                        : "bg-gray31 text-gray30"
                                    }`}
                                >
                                    {step.number}
                                </span>
                                <h4
                                    className={`font-medium font-outfit sm:text-sm text-xs leading-5 mt-2 transition-colors ${
                                    currentStep >= step.number ? "text-black16" : "text-gray30"
                                    }`}
                                >
                                    {step.title}
                                </h4>
                                </li>
                            ))}
                            </ul>
                        </div>

                        <div className="mt-10">
                            {/* Step 1: Choose Document */}
                            {currentStep === 1 && (
                            <div className="">
                                <h4 className="text-black16 font-outfit font-semibold sm:text-lg text-base leading-7">
                                Choose a document to verify your property
                                </h4>
                                <div className="">
                                <PropertyRadio
                                    value={formData.documentType}
                                    onChange={handleDocumentTypeChange}
                                />
                                {errors.documentType && (
                                    <p className="text-red-500 text-sm mt-2">{errors.documentType}</p>
                                )}
                                </div>
                                <div className="bg-gray33 rounded-2xl mt-8 flex items-start gap-3 p-4">
                                <span className="flex items-center justify-center w-5 h-5">
                                    <img src="../images/sheild-green.svg" alt="" />
                                </span>
                                <p className="flex-1 w-full text-gray30 font-outfit font-normal text-sm leading-5">
                                    You only need to upload one document. Documents are encrypted and deleted
                                    after verification.
                                </p>
                                </div>
                                <div className="mt-8">
                                <ul className="flex items-center justify-between">
                                    <li>
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="flex items-center justify-center text-gray30 font-outfit font-medium text-base leading-4 hover:text-gray-700"
                                    >
                                        Cancel
                                    </button>
                                    </li>
                                    <li>
                                    <PrimaryLink
                                        onClick={handleContinue}
                                        className="h-11 inline-flex px-8"
                                    >
                                        Continue
                                    </PrimaryLink>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            )}

                            {currentStep === 2 && (
                            <div className="">
                                <h4 className="text-black16 font-outfit font-semibold sm:text-lg text-base leading-7">
                                Upload your property tax document
                                </h4>

                                <div className="bg-blue19 border border-solid border-blue18/20 mt-4 rounded-2xl flex items-center gap-3 p-4">
                                <div className="flex items-center flex-1 w-full gap-4">
                                    <span className="bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center">
                                    <img src="../images/document-blue.svg" alt="" />
                                    </span>
                                    <div className="flex-1 w-full">
                                    <h4 className="font-semibold font-outfit text-base leading-6 text-black16">
                                        Property tax document
                                    </h4>
                                    <p className="text-gray30 font-outfit font-normal text-sm leading-5">
                                        Selected document type
                                    </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleRemoveDocumentType}
                                    className="flex items-center justify-center w-7 h-7 hover:opacity-70"
                                >
                                    <img src="../images/cross-icon.svg" alt="" />
                                </button>
                                </div>

                                <div className="flex flex-col items-center justify-center pt-4 pb-8">
                                {!formData.file ? (
                                    <>
                                    <label
                                        htmlFor="file-upload"
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`flex flex-col items-center justify-center w-full sm:p-8 p-4 border-2 border-dashed rounded-2xl cursor-pointer transition-colors ${
                                        isDragging
                                            ? "border-blue18 bg-blue18/10"
                                            : "border-blue18/30 bg-blue18/5"
                                        }`}
                                    >
                                        <div className="flex items-center mb-4 justify-center bg-blue18/10 rounded-full w-16 h-16">
                                        <img src="../images/upload.svg" alt="" />
                                        </div>
                                        <p className="text-black16 font-outfit font-semibold text-lg leading-7">
                                        Drag and drop your file here
                                        </p>
                                        <p className="text-gray30 font-outfit font-normal text-base leading-6 mb-4 mt-2">
                                        or click to browse from your computer
                                        </p>
                                        <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        />
                                        <PrimaryLink
                                        className="text-black16! pointer-events-none hover:text-white! font-outfit font-medium text-sm leading-5 border border-solid border-gray32 bg-lightblue12 h-10 w-31.75!"
                                        >
                                        Browse Files
                                        </PrimaryLink>
                                    </label>
                                    {errors.file && (
                                        <p className="text-red-500 text-sm mt-2">{errors.file}</p>
                                    )}
                                    </>
                                ) : (
                                    <div className="w-full bg-blue18/10 border border-blue18/20 rounded-2xl p-4 flex items-center gap-3">
                                    <div className="bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center">
                                        <img src="../images/document-blue.svg" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold font-outfit text-base leading-6 text-black16">
                                        {fileName}
                                        </h4>
                                        <p className="text-gray30 font-outfit font-normal text-sm leading-5">
                                        Uploaded successfully
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleRemoveFile}
                                        className="flex items-center justify-center w-7 h-7 hover:opacity-70"
                                    >
                                        <img src="../images/cross-icon.svg" alt="" />
                                    </button>
                                    </div>
                                )}

                                <ul className="flex items-center gap-3 mt-4">
                                    <li>
                                    <span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">
                                        PDF
                                    </span>
                                    </li>
                                    <li>
                                    <span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">
                                        JPG
                                    </span>
                                    </li>
                                    <li>
                                    <span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">
                                        PNG
                                    </span>
                                    </li>
                                    <li>
                                    <span className="inline-flex items-center justify-center text-gray30 font-outfit font-normal text-sm leading-5 bg-gray33 h-7 rounded-full px-3">
                                        Max 10MB
                                    </span>
                                    </li>
                                </ul>
                                </div>

                                <div className="">
                                <div className="mb-8">
                                    <label className="text-black17 font-inter font-normal text-sm leading-3.5 block w-full mb-1.5">
                                    Name of Landlord <span className="text-red12">*</span>
                                    </label>
                                    <input
                                    type="text"
                                    name="landlordName"
                                    value={formData.landlordName}
                                    onChange={handleInputChange}
                                    className={`text-gray-1400 placeholder:text-gray-1400 font-normal w-full font-inter text-sm leading-normal border border-solid bg-gray34 h-10 rounded-[10px] px-3.5 ${
                                        errors.landlordName ? "border-red-500" : "border-gray-1300"
                                    }`}
                                    placeholder="Usman"
                                    />
                                    {errors.landlordName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.landlordName}</p>
                                    )}
                                </div>
                                <div className="">
                                    <label className="text-black17 font-inter font-normal text-sm leading-3.5 block w-full mb-1.5">
                                    Address <span className="text-red12">*</span>
                                    </label>
                                    <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={`text-gray-1400 placeholder:text-gray-1400 font-normal w-full font-inter text-sm leading-normal border border-solid bg-gray34 h-10 rounded-[10px] px-3.5 ${
                                        errors.address ? "border-red-500" : "border-gray-1300"
                                    }`}
                                    placeholder="Marché d'Aligre"
                                    />
                                    {errors.address && (
                                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                                    )}
                                </div>
                                </div>

                                <div className="bg-gray33 rounded-2xl mt-8 flex items-start gap-3 p-4">
                                <span className="flex items-center justify-center w-5 h-5">
                                    <img src="../images/sheild-green.svg" alt="" />
                                </span>
                                <p className="flex-1 w-full text-gray30 font-outfit font-normal text-sm leading-5">
                                    You only need to upload one document. Documents are encrypted and deleted
                                    after verification.
                                </p>
                                </div>

                                <div className="mt-8">
                                <ul className="flex items-center justify-between">
                                    <li>
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex items-center justify-center text-gray30 font-outfit font-medium text-base leading-4 hover:text-gray-700"
                                    >
                                        Back
                                    </button>
                                    </li>
                                    <li>
                                    <PrimaryLink
                                        onClick={handleContinue}
                                        className="h-11 inline-flex px-8"
                                    >
                                        Upload & Continue
                                    </PrimaryLink>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            )}

                            {currentStep === 3 && (
                            <div className="">
                                <div className="text-center">
                                <span className="bg-green14/10 w-20 h-20 flex items-center justify-center rounded-full mx-auto">
                                    <img src="/images/check-icon2.svg" alt="" className="h-12" />
                                </span>
                                <h4 className="text-black16 font-outfit font-bold text-2xl leading-8 mt-6 mb-3">
                                    Verification Complete!
                                </h4>
                                <p className="text-gray30 font-outfit font-normal text-base leading-6 mb-8 max-w-md w-full mx-auto">
                                    {`Your property has been successfully verified. You've earned the "Verified Property" badge.`}
                                </p>
                                <Link
                                    href={"#"}
                                    className="text-blue18 font-semibold font-outfit text-base leading-6 flex items-center justify-center gap-2 rounded-full bg-blue18/10 w-46.25 h-10 mx-auto hover:bg-blue18/20"
                                >
                                    <img src="../images/badge-icon.svg" alt="" /> Verified Property
                                </Link>
                                </div>

                                <div className="mt-16">
                                <ul className="flex items-center justify-center gap-4">
                                    <li>
                                    <PrimaryLink onClick={handleContinue} className="h-11 inline-flex px-8">
                                        View My Property
                                    </PrimaryLink>
                                    </li>
                                    <li>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpenVerify(false)}
                                        className="inline-flex items-center justify-center rounded-[10px] bg-lightblue12 border border-solid border-gray32 h-11 text-black16 font-outfit font-medium text-sm leading-5 px-8 hover:bg-gray-100"
                                    >
                                        Close
                                    </button>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            )}
                        </div>
                        </form>
                  </DialogPanel>
                </div>
              </Dialog>
  )
}

export default VerifyPropertyModel