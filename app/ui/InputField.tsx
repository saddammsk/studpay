"use client";

import Image from "next/image";
import React, { useState } from "react";

type InputVariant = "default" | "filled" | "filled2" | "filled3" | "filled4";

type FieldType = "input" | "select";
type LabelVariant = "default" | "required";
interface SelectOption {
     label: string;
     value: string;
}

interface InputFieldProps {
     label: string;
     fieldType?: FieldType;
     type?: React.HTMLInputTypeAttribute;
     placeholder?: string;
     value?: string;
     onChange?: (
          e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
     ) => void;
     leftIconSrc?: string;
     rightIconSrc?: string;
     name?: string;
     id?: string;
     variant?: InputVariant;
     labelVariant?: LabelVariant; 
     required?: boolean;         
     rightarrowSrc?: string;
     options?: SelectOption[];
     className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
     label,
     fieldType = "input",
     type = "text",
     placeholder,
     value,
     onChange,
     leftIconSrc,
     rightIconSrc,
     rightarrowSrc,
     name,
     id,
     variant = "default",
     options = [],
     labelVariant,
     required = false,
     className,
}) => {
     const [showPassword, setShowPassword] = useState(false);
     const isPassword = type === "password";
     const resolvedLabelVariant: LabelVariant =
          labelVariant ?? (required ? "required" : "default");

     const labelVariants: Record<LabelVariant, string> = {
          default: "font-medium text-black",
          required: "font-semibold text-black",
     };

     const starClass = "text-red12";
     const variantClasses: Record<InputVariant, string> = {
          default:
               "bg-white border border-gray-1100 text-gray-1000 placeholder:text-gray-1000",
          filled:
               "bg-cream-1000 border border-gray-1200 text-gray-1000 placeholder:text-gray-1000 !px-[13px]",
          filled2:
               "bg-gray-1600 border border-gray-1300 !h-10 text-black-1200 placeholder:text-black-1200 !px-3",
          filled3:
               "bg-white border border-gray-1300 !h-10 text-black-1200 placeholder:text-gray24 rounded-[10px]",
          filled4:
               "bg-gray35 border border-gray36 !h-10 text-black-1200 placeholder:text-gray24 rounded-[10px]",
     };

     const commonClasses = `
    text-sm font-normal leading-normal w-full block h-12 rounded-lg
    transition-all duration-300 focus:ring-2 outline-0! focus:ring-blue-1000
    ${variantClasses[variant]}
    ${leftIconSrc ? "pl-[45px]" : "pl-4"}
    ${rightIconSrc ? "pr-[45px]" : "pr-4"}
     ${className || ""}
  `;

     return (
          <div className="w-full">
               <label
                    htmlFor={id}
                    className={`block text-sm font-medium leading-5 mb-2.5 text-black-1000 ${labelVariants[resolvedLabelVariant]}`}
               >
                    {label}
                    {required && <span className={starClass}>*</span>}
               </label>

               <div className="relative">
                    {leftIconSrc && (
                         <div className="absolute top-1/2 -translate-y-1/2 left-4">
                              <Image src={leftIconSrc} alt="" width={20} height={20} />
                         </div>
                    )}
                    {rightarrowSrc && (
                         <div className="absolute top-1/2 -translate-y-1/2 right-4">
                              <Image src={rightarrowSrc} alt="" width={12} height={8} />
                         </div>
                    )}

                    {fieldType === "select" ? (
                         <select
                              id={id}
                              name={name}
                              value={value}
                              onChange={onChange}
                              className={commonClasses}
                         >
                              {placeholder && (
                                   <option value="" disabled>
                                        {placeholder}
                                   </option>
                              )}

                              {options.map((opt) => (
                                   <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                   </option>
                              ))}
                         </select>
                    ) : (
                         <input
                              id={id}
                              name={name}
                              type={isPassword && showPassword ? "text" : type}
                              value={value}
                              onChange={onChange}
                              placeholder={placeholder}
                              className={commonClasses}
                         />
                    )}

                    {rightIconSrc && isPassword && fieldType === "input" && (
                         <button
                              type="button"
                              onClick={() => setShowPassword((prev) => !prev)}
                              className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-4"
                         >
                              {showPassword ?
                              <Image src="/icons/eye-off-icon.svg" alt="" width={20} height={20} />
                             : 
                              <Image src={rightIconSrc} alt="" width={20} height={20} />
                              }
                         </button>
                    )}
               </div>
          </div>
     );
};


export default InputField;
