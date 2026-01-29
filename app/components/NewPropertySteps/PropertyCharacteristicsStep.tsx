"use client";
import { useState } from "react";
import Link from "next/link";
import InputField from "@/app/ui/InputField";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import RadioGroupInput from "@/app/components/PropertyBasicRadio";


const plans = ['Yes', 'No']

const plansHeating = [
      { value: 'central', label: 'Central heating', recommended: true },
      { value: 'included', label: 'Hot water included', recommended: true },
      { value: 'elevator', label: 'Elevator' },
]
const plansAppliances = [
      { value: 'Washing', label: 'Washing machine', recommended: true },
      { value: 'Dishwasher', label: 'Dishwasher', },
      { value: 'Oven', label: 'Oven', recommended: true },
      { value: 'Refrigerator', label: 'Refrigerator / freezer', recommended: true },
]
const plansMultimedia = [
      { value: 'WiFi', label: 'Wi-Fi included', recommended: true },
      { value: 'Television', label: 'Television', },
]
const plansLinen = [
      { value: 'Bed', label: 'Bed linen provided'},
      { value: 'towels', label: 'Bath towels provided', },
      { value: 'Optional', label: 'Optional cleaning service', },
]
const plansSecurity = [
      { value: 'Intercom', label: 'Intercom'},
      { value: 'Keypad', label: 'Keypad access', },
      { value: 'Secured', label: 'Secured parking', },
]
export const PropertyCharacteristicsStep = () => {
      const [email, setEmail] = useState("");
      const [selected1, setSelected1] = useState<string>(plans[0]);
      const [selected, setSelected] = useState(plansHeating[0].value)
      const [selected2, setSelected2] = useState(plansAppliances[0].value)
      const [selected3, setSelected3] = useState(plansMultimedia[0].value)
      const [selected4, setSelected4] = useState(plansLinen[0].value)
      const [selected5, setSelected5] = useState(plansSecurity[0].value)

      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Add Property</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Amenities & Services</li>
                  </ul>
                  <div className="flex items-center gap-3 my-8">
                        <span className='bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center'>
                              <img src="../images/home-icon.svg" alt='' className="filter-img" />
                        </span>
                        <div className="relative">
                              <h4 className="font-bold font-inter text-blue-black17 text-xl leading-7 mb-1 tracking-[-0.5px] text-black17">Property Characteristics</h4>
                              <p className='text-gray-1400 font-inter font-normal text-sm leading-5'>Select all amenities and services included with your property</p>
                        </div>
                  </div>
                  <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between border border-solid border-gray-1300 rounded-2xl bg-gray33 p-4">
                        <div className="amenities-form w-full lg:max-w-[320px] sm:max-w-67.5 max-w-full">
                              <InputField
                                    label={""}
                                    placeholder="Search amenities..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    leftIconSrc="/images/search-icon.svg"
                                    id="email"
                                    name="email"
                                    variant="filled3"
                              />
                        </div>
                        <div className="text-gray-1400 font-inter font-normal text-sm leading-5 bg-blue-1000/10 rounded-full h-12 sm:w-auto w-full sm:mt-0 mt-4 inline-flex items-center gap-2 px-4">
                              <span className="text-blue-1100 font-bold text-2xl leading-6">0</span>  / 15 amenities selected
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray-1300 rounded-2xl mt-6">
                        <div className="rounded-t-2xl bg-gray33/30 border-b border-solid border-gray-1300 py-4 px-5">
                              <h4 className="text-black17 font-bold text-base leading-6 flex items-center gap-3">Basic Amenities <span className="text-blue-1100 bg-blue-1000/10 rounded-full px-2 h-5 font-inter font-normal text-xs leading-4 flex items-center">Required</span></h4>
                        </div>
                        <div className="bg-white p-5 rounded-b-2xl">
                              <div className="bg-gray33/30 border border-solid border-gray-1300 px-4 pb-4 pt-5 rounded-2xl">
                                    <h4 className="text-black-1000 font-normal font-inter text-sm leading-5 flex items-center gap-1 mb-1.25">Is the property furnished? <span className="text-red-1100">*</span></h4>
                                    <p className="text-gray-1400 font-normal font-inter text-xs leading-4">Furnished includes bed, table, chair, and wardrobe</p>
                                    <RadioGroup value={selected1} onChange={setSelected1} aria-label="Server size" className="flex items-center gap-6 mt-3">
                                          {plans.map((plan) => (
                                                <Field key={plan} className="flex items-center gap-2">
                                                      <Radio
                                                            value={plan}
                                                            className="group flex w-4  h-4 cursor-pointer items-center justify-center rounded-full border border-solid border-blue-1100 bg-white data-checked:bg-blue-400 focus:outline-0"
                                                      >
                                                            <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                                                      </Radio>
                                                      <Label className="text-black-1000 font-inter cursor-pointer font-normal text-sm leading-3.5 block">{plan}</Label>
                                                </Field>
                                          ))}
                                    </RadioGroup>
                              </div>
                              <div className="pt-4">
                                    <RadioGroupInput
                                          options={plansHeating}
                                          value={selected}
                                          onChange={setSelected}
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray-1300 rounded-2xl mt-6">
                        <div className="rounded-t-2xl bg-gray33/30 border-b border-solid border-gray-1300 py-4 px-5">
                              <h4 className="text-black17 font-bold text-base leading-6 flex items-center gap-3">Appliances </h4>
                        </div>
                        <div className="bg-white p-5 rounded-b-2xl">
                              <div className="">
                                    <RadioGroupInput
                                          options={plansAppliances}
                                          value={selected2}
                                          onChange={setSelected2}
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray-1300 rounded-2xl mt-6">
                        <div className="rounded-t-2xl bg-gray33/30 border-b border-solid border-gray-1300 py-4 px-5">
                              <h4 className="text-black17 font-bold text-base leading-6 flex items-center gap-3">Multimedia & Internet </h4>
                        </div>
                        <div className="bg-white p-5 rounded-b-2xl">
                              <div className="">
                                    <RadioGroupInput
                                          options={plansMultimedia}
                                          value={selected3}
                                          onChange={setSelected3}
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray-1300 rounded-2xl mt-6">
                        <div className="rounded-t-2xl bg-gray33/30 border-b border-solid border-gray-1300 py-4 px-5">
                              <h4 className="text-black17 font-bold text-base leading-6 flex items-center gap-3">Linen & Cleaning </h4>
                        </div>
                        <div className="bg-white p-5 rounded-b-2xl">
                              <div className="">
                                    <RadioGroupInput
                                          options={plansLinen}
                                          value={selected4}
                                          onChange={setSelected4}
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray-1300 rounded-2xl mt-6">
                        <div className="rounded-t-2xl bg-gray33/30 border-b border-solid border-gray-1300 py-4 px-5">
                              <h4 className="text-black17 font-bold text-base leading-6 flex items-center gap-3">Security & Access </h4>
                        </div>
                        <div className="bg-white p-5 rounded-b-2xl">
                              <div className="">
                                    <RadioGroupInput
                                          options={plansSecurity}
                                          value={selected5}
                                          onChange={setSelected5}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      )
}
