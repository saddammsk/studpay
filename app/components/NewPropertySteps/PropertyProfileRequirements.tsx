"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { Checkbox } from '@headlessui/react'


const plans = [
      { img: "/images/calendar2.svg", name: "Physical visits only", dis: "Schedule in-person property viewings" },
      { img: "/images/video-icon.svg", name: "Virtual visits accepted", dis: "Tenants can view the property remotely" },
      { img: "/images/light-dark.svg", name: "Booking without visit allowed", Popular: "Popular among students", dis: "Tenants can book directly without a visit" },
]

const plansaccept = [
      {
            img: "/images/home-icon.svg",
            arrow: "/images/increase-arrow.svg",
            name: "Eligible for housing aid (APL / ALS)",
            attr: "+40% attractiveness",
            dis: "Increases listing attractiveness by up to 40% among student applicants",
      },
];
/***** CHECKBOK ****/
const options = [
      {
            img: "/images/card-dark.svg",
            heading: "ID document",
            dp: "Passport, ID card, or residence permit",
      },
      {
            img: "/images/payslips.svg",
            heading: "Last 3 payslips",
            dp: "Proof of regular income",
      },
      {
            img: "/images/file-dark.svg",
            heading: "Tax notice",
            dp: "Most recent tax assessment",
      },
      {
            img: "/images/user-icon.svg",
            heading: "Guarantor documents",
            dp: "Required if student applicant",
      },
      {
            img: "/images/plus-dark.svg",
            heading: "Other",
            dp: "Specify additional requirements",
      },
]



export const PropertyProfileRequirements = () => {
      const [selected, setSelected] = useState(plans[0])
      let [selected2, setSelected2] = useState(plansaccept[0])
      const [checkedItems, setCheckedItems] = useState(
            Array(options.length).fill(false)
      )

      const handleChange = (index: number) => {
            const updated = [...checkedItems]
            updated[index] = !updated[index]
            setCheckedItems(updated)
      }

      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Tenant Criteria</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Profile & Requirements</li>
                  </ul>
                  <div className="flex md:items-center items-start gap-3 mb-6 mt-7">
                        <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                              <Image src="../images/User-white.svg" alt="receipt Image" width={20} height={20} />
                        </span>
                        <div className="relative flex-1 w-full">
                              <h4 className="font-medium font-inter md:text-xl text-base md:leading-7 leading-6 tracking-[-0.5px] text-black24">Tenant Criteria – Visit & Selection Process</h4>
                              <p className='text-gray40 font-inter font-normal md:text-lg text-sm md:leading-7 leading-6'>Define how visits, reservations, and tenant document validation are handled.</p>
                        </div>
                  </div>
                  <div className="">
                        <div className="bg-white rounded-xl border border-solid border-gray39/50 p-6 mb-6 shadow-22xl">
                              <h4 className="text-black25 font-bold font-Plus-Jakarta-Sans sm:text-lg text-base leading-7 tracking-[-0.45px] flex items-center gap-2">
                                    <Image src="../images/calendar3.svg" alt="receipt Image" width={20} height={20} />
                                    How do you want to organize visits?</h4>
                              <div className="mt-4 mb-6">
                                    <RadioGroup by="name" value={selected} onChange={setSelected} className="space-y-3">
                                          {plans.map((plan, index) => (
                                                <Radio
                                                      key={plan.name}
                                                      value={plan}
                                                      className="group flex cursor-pointer px-4 py-4.5 border border-gray39 rounded-xl data-checked:bg-gray-2300/50 data-checked:border-green234/30"
                                                >
                                                      <div className="flex items-start gap-4">
                                                            <div className="mt-1 border border-blue-1100 rounded-full w-4 h-4 flex items-center justify-center group-data-checked:bg-blue-1100">
                                                                  <Image
                                                                        src="../images/check-white.svg"
                                                                        alt=""
                                                                        width={8}
                                                                        height={8}
                                                                        className="opacity-0 group-data-checked:opacity-100"
                                                                  />
                                                            </div>
                                                            <div className="flex sm:items-center items-start sm:flex-row flex-col gap-4 flex-1 w-full">
                                                                  <span className="bg-gray44 rounded-xl w-10 h-10 flex items-center justify-center">
                                                                        <Image src={plan.img} alt={plan.name} width={20} height={20} />
                                                                  </span>

                                                                  <div className="flex-1 w-full">
                                                                        <h4 className="text-black25 font-normal font-inter text-sm leading-3.5 mb-1 flex sm:items-center items-start sm:flex-row flex-col gap-2">
                                                                              {plan.name}

                                                                              {index === plans.length - 1 && (
                                                                                    <span className="bg-blue132 rounded-full h-5.5 inline-flex items-center px-2.5 text-blue-1100 font-inter font-bold text-xs leading-4">
                                                                                          {plan.Popular}
                                                                                    </span>
                                                                              )}
                                                                        </h4>

                                                                        <p className="text-gray43 text-sm font-normal font-inter leading-5">
                                                                              {plan.dis}
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </Radio>
                                          ))}
                                    </RadioGroup>

                              </div>
                        </div>
                        <div className="bg-white rounded-xl border border-solid border-gray39/50 p-6 mb-6 shadow-22xl">
                              <RadioGroup value={selected2} onChange={setSelected2} aria-label="Server size">
                                    {plansaccept.map((item) => (
                                          <Field key={item.name} className="flex items-start gap-4 w-full">
                                                <Radio value={item.name} className="group flex items-start gap-5 w-full border border-solid border-gray39 rounded-xl bg-white p-4 cursor-pointer data-checked:bg-gray44/30 data-checked:border-green234/30">
                                                      <div className="mt-1 border border-blue-1100 rounded-full w-4 h-4 flex items-center justify-center group-data-checked:bg-blue-1100">
                                                            <Image
                                                                  src="../images/check-white.svg"
                                                                  alt=""
                                                                  width={8}
                                                                  height={8}
                                                                  className="opacity-0 group-data-checked:opacity-100"
                                                            />
                                                      </div>
                                                      <div className="flex sm:flex-row flex-col items-start gap-4 cursor-pointer flex-1 w-full">
                                                            <span className="bg-gray44 rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer">
                                                                  <Image
                                                                        src={item.img}
                                                                        alt={item.name}
                                                                        width={20}
                                                                        height={20} />
                                                            </span>
                                                            <Label className="w-full flex-1 cursor-pointer">
                                                                  <h4 className="text-black25 font-normal font-inter flex sm:flex-row flex-col sm:items-center items-start lg:text-sm md:text-xs text-sm gap-2">
                                                                        {item.name}
                                                                        <span className="bg-blue132/80 rounded-full gap-1 h-5.5 px-2.5 inline-flex items-center justify-center text-blue-1100 font-normal font-inter lg:text-xs text-[10px] leading-4">
                                                                              <Image
                                                                                    src={item.arrow}
                                                                                    alt={item.name}
                                                                                    width={12}
                                                                                    height={12} />
                                                                              {item.attr}
                                                                        </span>
                                                                  </h4>
                                                                  <p className="text-gray43 font-inter font-normal text-sm leading-5">{item.dis}</p>
                                                            </Label>
                                                      </div>
                                                </Radio>

                                          </Field>
                                    ))}
                              </RadioGroup>
                        </div>
                        <div className="bg-white rounded-xl border border-solid border-gray39/50 p-6 mb-6 shadow-22xl">
                              <h4 className="text-black25 font-bold font-Plus-Jakarta-Sans text-lg leading-7 tracking-[-0.45px] flex items-center gap-2">
                                    <Image src="../images/Documents-icon.svg"
                                          alt="receipt Image"
                                          width={20}
                                          height={20}
                                    />
                                    Required Documents
                              </h4>
                              <div className="mt-4">
                                    <div className="space-y-3">
                                          {options.map((item, index) => (
                                                <label
                                                      key={index}
                                                      className="flex items-start"
                                                >
                                                      {/* Checkbox */}
                                                      <Checkbox
                                                            checked={checkedItems[index]}
                                                            onChange={() => handleChange(index)}
                                                            className="group flex items-start w-full gap-4 rounded-xl p-4 border-2 border-solid border-gray39 bg-white cursor-pointer hover:bg-gray44/30 hover:border-green234/30 data-checked:bg-blue-1000/10 data-checked:border-blue-1000 data-checked:shadow-22xl"
                                                      >
                                                            <div className="w-4 h-4 border mt-1.5 border-solid border-blue-1100 rounded-full flex items-center justify-center group-data-checked:bg-blue-500">
                                                                  <svg
                                                                        className="stroke-white opacity-0 group-data-checked:opacity-100"
                                                                        viewBox="0 0 14 14"
                                                                        fill="none"
                                                                  >
                                                                        <path
                                                                              d="M3 8L6 11L11 3.5"
                                                                              strokeWidth={2}
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <div className="flex items-center sm:gap-4 gap-3">
                                                                  <span className="flex items-center justify-center bg-gray44 rounded-xl w-10 h-10 group-data-checked:bg-blue-1100">
                                                                        <Image
                                                                              src={item.img}
                                                                              alt={item.heading}
                                                                              width={20}
                                                                              height={20}
                                                                              className="group-data-checked:brightness-600"
                                                                        />
                                                                  </span>
                                                                  <div>
                                                                        <h3 className="text-black25 font-inter font-normal text-sm mb-1">{item.heading}</h3>
                                                                        <p className="text-gray43 sm:text-sm text-xs leading-5 font-inter font-normal">{item.dp}</p>
                                                                  </div>
                                                            </div>
                                                      </Checkbox>

                                                </label>
                                          ))}
                                    </div>
                                    <div className="border-t border-solid border-gray39/50 pt-4 mt-4">
                                          <label htmlFor="file-upload"
                                                className="group flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-blue-1000/30 bg-gray-1600 hover:border-green234 hover:bg-green234/5 rounded-[10px] cursor-pointer transition-colors"
                                          >

                                                <p className="text-black25 group-hover:text-green235 font-inter font-normal text-sm leading-5 flex items-center sm:gap-4 gap-3">
                                                      <img src="../images/star.svg" alt="" /> Use StudPay document template
                                                </p>

                                                <input
                                                      id="file-upload"
                                                      type="file"
                                                      className="hidden"
                                                />

                                          </label>
                                          <p className="text-gray43 font-normal font-inter text-xs leading-4 text-center mt-2">Automatically requests standardized documents from applicants</p>
                                    </div>
                              </div>
                        </div>

                  </div>

            </div>
      )
}
