"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import ToggleSwitch from "@/app/ui/ToggleSwitch"


const plans = [
      { img: "/images/home-icon.svg", name: "Entire place" },
      { img: "/images/document-icon.svg", name: "Private room" },
      { img: "/images/tenants.svg", name: "Coliving" },
]

const plansaccept = [
      { name: "Do you accept applications with a guarantor?" },
]

const plansFinancial = [
      { name: "No" },
      { name: "Yes" },
]
export const PropertyTenantCriteria = () => {
      const [selected, setSelected] = useState(plans[0])
      let [selected2, setSelected2] = useState(plansaccept[0])
      let [selected3, setSelected3] = useState(plansFinancial[0])
      const [switch1, setSwitch1] = useState(true)
      const [switch2, setSwitch2] = useState(true)
      const [switch3, setSwitch3] = useState(true)

      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Tenant Criteria</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Profile & Requirements</li>
                  </ul>
                  <div className="flex items-center gap-3 mb-6 mt-7">
                        <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                              <Image src="../images/User-white.svg" alt="receipt Image" width={20} height={20} />
                        </span>
                        <div className="relative">
                              <h4 className="font-medium font-inter  text-xl leading-7 tracking-[-0.5px] text-black24">Tenant Criteria – Profile & Requirements</h4>
                              <p className='text-gray40 font-inter font-normal text-lg leading-7'>Define your ideal tenant profile and requirements to find the perfect match for your property.</p>
                        </div>
                  </div>
                  <div className="">
                        <div className="bg-white rounded-xl border border-solid border-gray39/50 p-6 mb-6">
                              <h4 className="text-black25 font-bold font-inter text-lg leading-7 flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-1000/10 text-blue-1100 font-bold font-inter text-sm leading-5">1</span> Which tenant profile are you looking for?</h4>
                              <div className="mt-4 mb-6">
                                    <RadioGroup by="name" value={selected} onChange={setSelected} className="space-y-3">
                                          {plans.map((plan) => (
                                                <Radio
                                                      key={plan.name}
                                                      value={plan}
                                                      className="group flex cursor-pointer px-4 py-4.5 border border-gray39 rounded-xl data-checked:bg-gray-2300/50 data-checked:border-green234/30"
                                                >
                                                      <div className="flex items-center gap-4">
                                                            <div className="border border-blue-1100 rounded-lg w-5 h-5 flex items-center justify-center group-data-checked:bg-blue-1100">
                                                                  <Image
                                                                        src="../images/check-white.svg"
                                                                        alt=""
                                                                        width={10}
                                                                        height={10}
                                                                        className="opacity-0 group-data-checked:opacity-100"
                                                                  />
                                                            </div>

                                                            <Image
                                                                  src={plan.img}
                                                                  alt={plan.name}
                                                                  width={20}
                                                                  height={20}
                                                            />

                                                            <p className="text-black26 text-base">{plan.name}</p>
                                                      </div>
                                                </Radio>
                                          ))}
                                    </RadioGroup>
                              </div>
                              <div className="border-t border-solid border-gray39 pt-5.5 mt-5">
                                    <RadioGroup value={selected2} onChange={setSelected2} aria-label="Server size">
                                          {plansaccept.map((item) => (
                                                <Field key={item.name} className="flex items-center gap-3">
                                                      <Radio
                                                            value={item.name}
                                                            className="group w-5 h-5 flex items-center justify-center rounded-lg border border-solid border-blue-1100 data-checked:bg-white"
                                                      >
                                                            <span className="invisible size-2 rounded-full bg-blue-1100 group-data-checked:visible" />
                                                      </Radio>
                                                      <Label className="text-black25 font-inter font-normal text-base leading-6">{item.name}</Label>
                                                </Field>
                                          ))}
                                    </RadioGroup>
                              </div>
                        </div>
                        <div className="bg-white rounded-xl border border-solid border-gray39/50 p-6 mb-6">
                              <h4 className="text-black25 font-bold font-inter text-lg leading-7 flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-1000/10 text-blue-1100 font-bold font-inter text-sm leading-5">2</span> Financial Requirements</h4>
                              <div className="mt-4">
                                    <p className="text-black25 font-normal font-inter text-sm">Do you have income requirements?</p>
                                    <RadioGroup value={selected3} onChange={setSelected3} aria-label="Server size" className="flex items-center gap-4 mt-2">
                                          {plansFinancial.map((item) => (
                                                <Field key={item.name} className="">
                                                      <Radio value={item.name} className="group border-2 border-solid border-gray39 px-4 rounded-xl h-13 flex items-center justify-center gap-3 cursor-pointer data-checked:bg-blue-1000/10 data-checked:border-blue-1000"
                                                      >
                                                            <div className="w-4 h-4 rounded-full border border-solid border-blue-1100 flex items-center justify-center">
                                                                  <span className=" w-2.5 h-2.5 flex items-center justify-center rounded-full bg-blue-1100 opacity-0  group-data-checked:opacity-100" />
                                                            </div>
                                                            <Label className="text-black25 font-inter font-normal text-base leading-6 flex items-center justify-center">
                                                                  {item.name}
                                                            </Label>
                                                      </Radio>
                                                </Field>
                                          ))}
                                    </RadioGroup>
                              </div>


                        </div>
                        <div className="bg-white rounded-xl border border-solid border-gray39/50 p-6">
                              <h4 className="text-black25 font-bold font-inter text-lg leading-7 flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-1000/10 text-blue-1100 font-bold font-inter text-sm leading-5">3</span>Lifestyle Rules</h4>
                              <div className="mt-4 mb-3 flex items-center justify-between bg-gray-2300/50 border border-solid border-gray39/50 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-1000/10">
                                                <Image src="../images/smoking.svg" alt="smoking Image" width={20} height={20} />
                                          </span>
                                          <div className="">
                                                <h4 className="text-black25 font-inter font-normal text-base leading-6">Smoking</h4>
                                                <p className="text-gray43 font-inter font-normal text-sm leading-5">Allowed</p>
                                          </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                          <span>🚭</span>
                                          <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                                          <span>✅</span>
                                    </div>
                              </div>
                              <div className="flex mb-3 items-center justify-between bg-gray-2300/50 border border-solid border-gray39/50 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-1000/10">
                                                <Image src="../images/Pets.svg" alt="smoking Image" width={20} height={20} />
                                          </span>
                                          <div className="">
                                                <h4 className="text-black25 font-inter font-normal text-base leading-6">Pets</h4>
                                                <p className="text-gray43 font-inter font-normal text-sm leading-5">Allowed</p>
                                          </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                          <span>🐕</span>
                                          <ToggleSwitch enabled={switch2} setEnabled={setSwitch2} />
                                          <span>✅</span>
                                    </div>
                              </div>
                              <div className="flex items-center justify-between bg-gray-2300/50 border border-solid border-gray39/50 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-1000/10">
                                                <Image src="../images/Parties.svg" alt="smoking Image" width={20} height={20} />
                                          </span>
                                          <div className="">
                                                <h4 className="text-black25 font-inter font-normal text-base leading-6">Parties</h4>
                                                <p className="text-gray43 font-inter font-normal text-sm leading-5">Allowed</p>
                                          </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                          <span>🎉</span>
                                          <ToggleSwitch enabled={switch3} setEnabled={setSwitch3} />
                                          <span>✅</span>
                                    </div>
                              </div>
                              <div className="mt-6">
                                    <h4 className="text-black25 font-normal font-inter text-sm leading-3.5 mb-2">Additional rules (optional)</h4>
                                    <textarea className="text-gray43 placeholder:text-gray43 font-normal outline-0 font-inter text-sm leading-5 px-3.25 py-2.25 w-full bg-white border border-solid border-gray39 rounded-[10px] h-25" placeholder="Example: No loud music after 10 PM..."></textarea>
                              </div>
                        </div>
                  </div>

            </div>
      )
}
