"use client";
import * as React from "react"
import { useState } from "react";
import { GeneralStep } from "@/app/components/NewPropertySteps/GeneralStep";
import { PropertyDetailsStep } from "@/app/components/NewPropertySteps/PropertyDetailsStep";
import { PropertyCharacteristicsStep } from "@/app/components/NewPropertySteps/PropertyCharacteristicsStep";
import { PropertyEnergyPerformanceStep } from "@/app/components/NewPropertySteps/PropertyEnergyPerformanceStep";
import { PropertyFinancialConditions } from "@/app/components/NewPropertySteps/PropertyFinancialConditions";
import { PropertyFinancialDeposit } from "@/app/components/NewPropertySteps/PropertyFinancialDeposit";
import { PropertyTenantCriteria } from "@/app/components/NewPropertySteps/PropertyTenantCriteria";
import { PropertyProfileRequirements } from "@/app/components/NewPropertySteps/PropertyProfileRequirements";
import { PropertyMediaTrust } from "@/app/components/NewPropertySteps/PropertyMediaTrust";
import { PropertyMediaVirtualTour } from "@/app/components/NewPropertySteps/PropertyMediaVirtualTour";
import { PropertyMediaUploadVideo } from "@/app/components/NewPropertySteps/PropertyMediaUploadVideo";
import { PropertyMediaStudpayTool } from "@/app/components/NewPropertySteps/PropertyMediaStudpayTool";
import { PropertyMediaBoostCredibility } from "@/app/components/NewPropertySteps/PropertyMediaBoostCredibility";
import { PropertyVisibilityBoost } from "@/app/components/NewPropertySteps/PropertyVisibilityBoost";
import { Progress } from "@/app/ui/progress"
import Link from "next/link";


export default function Listing() {
      const [progress, setProgress] = React.useState(100)
      React.useEffect(() => {
            const timer = setTimeout(() => setProgress(16), 500)
            return () => clearTimeout(timer)
      }, [])

      return (
            <div className="bg-gray15 font-dm-sans xl:pl-64 md:pl-50 pt-16">
        
                  <div className="pl-3 xl:pr-9 pr-3 py-6">
                        <div className="max-w-6xl w-full mx-auto">
                              <div className="mb-6">
                                    <h4 className="text-black font-outfit font-bold text-2xl leading-8 mb-2">Add New Property</h4>
                                    <p className="text-gray24 font-outfit font-normal text-base leading-6">Step 1 of 6 — General Information</p>
                              </div>
                              <div className="">
                                    <div className="overflow-x-auto">
                                          <div className="xl:w-auto w-250 xl:pb-0 pb-1">
                                                <ul className="flex items-center justify-between relative z-0 after:absolute after:content='' after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:w-full after:h-0.5 after:bg-gray31">
                                                      <li>
                                                            <Link href={"#"} className="bg-blue-1000 relative z-20 text-white font-outfit font-medium 2xl:text-sm text-xs leading-5 flex items-center justify-center rounded-xl h-10 px-3 gap-2"><span className="flex items-center justify-center bg-white/20 rounded-full 2xl:w-6 w-4.5 2xl:h-6 h-4.5 text-white">1</span>General</Link>
                                                      </li>
                                                      <li>
                                                            <Link href={"#"} className="bg-gray15 relative z-20 text-gray24 font-outfit font-medium 2xl:text-sm text-xs leading-5 flex items-center justify-center rounded-xl h-10 px-3 gap-2"><span className="flex items-center justify-center bg-gray35 rounded-full 2xl:w-6 w-4.5 2xl:h-6 h-4.5 text-gray24">2</span>Property Details</Link>
                                                      </li>
                                                      <li>
                                                            <Link href={"#"} className="bg-gray15 relative z-20 text-gray24 font-outfit font-medium 2xl:text-sm text-xs leading-5 flex items-center justify-center rounded-xl h-10 px-3 gap-2"><span className="flex items-center justify-center bg-gray35 rounded-full 2xl:w-6 w-4.5 2xl:h-6 h-4.5 text-gray24">3</span>Financial Terms</Link>
                                                      </li>
                                                      <li>
                                                            <Link href={"#"} className="bg-gray15 relative z-20 text-gray24 font-outfit font-medium 2xl:text-sm text-xs leading-5 flex items-center justify-center rounded-xl h-10 px-3 gap-2"><span className="flex items-center justify-center bg-gray35 rounded-full 2xl:w-6 w-4.5 2xl:h-6 h-4.5 text-gray24">4</span>Tenant Criteria</Link>
                                                      </li>
                                                      <li>
                                                            <Link href={"#"} className="bg-gray15 relative z-20 text-gray24 font-outfit font-medium 2xl:text-sm text-xs leading-5 flex items-center justify-center rounded-xl h-10 px-3 gap-2"><span className="flex items-center justify-center bg-gray35 rounded-full 2xl:w-6 w-4.5 2xl:h-6 h-4.5 text-gray24">5</span>Media & Trust</Link>
                                                      </li>
                                                      <li>
                                                            <Link href={"#"} className="bg-gray15 relative z-20 text-gray24 font-outfit font-medium 2xl:text-sm text-xs leading-5 flex items-center justify-center rounded-xl h-10 px-3 gap-2"><span className="flex items-center justify-center bg-gray35 rounded-full 2xl:w-6 w-4.5 2xl:h-6 h-4.5 text-gray24">6</span>Visibility & Boost</Link>
                                                      </li>
                                                </ul>
                                                <Progress value={progress} className="w-full mt-3" />
                                          </div>
                                    </div>
                                    <form>
                                          <div className="">
                                                <GeneralStep />
                                          </div>
                                          <div className="hidden">
                                                <PropertyDetailsStep />
                                          </div>
                                          <div className="hidden">
                                                <PropertyCharacteristicsStep />
                                          </div>
                                          <div className="hidden">
                                                <PropertyEnergyPerformanceStep />
                                          </div>
                                          <div className="hidden">
                                                <PropertyFinancialConditions />
                                          </div>
                                          <div className="hidden">
                                                <PropertyFinancialDeposit />
                                          </div>
                                          <div className="hidden">
                                                <PropertyTenantCriteria />
                                          </div>
                                          <div className="hidden">
                                                <PropertyProfileRequirements />
                                          </div>
                                          <div className="hidden">
                                                <PropertyMediaTrust />
                                          </div>
                                          <div className="">
                                                <div className="hidden">
                                                      <PropertyMediaVirtualTour />
                                                </div>
                                                <div className="hidden">
                                                      <PropertyMediaUploadVideo />
                                                </div>
                                                <div className="hidden">
                                                      <PropertyMediaStudpayTool />
                                                </div>
                                          </div>
                                          <div className="hidden">
                                                <PropertyMediaBoostCredibility />
                                          </div>
                                          <div className="hidden">
                                                <PropertyVisibilityBoost />
                                          </div>
                                          <div className="bg-white rounded-2xl shadow-14xl p-4 flex sm:flex-row flex-col items-center justify-between mt-6">
                                                <div className="flex items-center gap-2">
                                                      <span className="bg-green15 rounded-full w-2 h-2 flex items-center"></span>
                                                      <span className="flex items-center gap-2 text-gray24 text-sm leading-5 font-normal font-outfit"><img src="../images/save-icon.svg" alt="" /> Auto-saved</span>
                                                </div>
                                                <ul className="sm:flex grid grid-cols-2 sm:w-auto w-full items-center gap-3 sm:mt-0 mt-4">
                                                      <li>
                                                            <Link href={'#'} className="inline-flex items-center justify-center bg-gray35 border border-solid border-gray36 rounded-[10px] h-10 px-4 text-black font-outfit font-medium text-sm leading-4 sm:w-auto w-full">Save & Exit</Link>
                                                      </li>
                                                      <li>
                                                            <Link href="#" className="h-10 sm:w-auto! w-full! inline-flex px-8 bg-blue12 text-white">
                                                                  Continue
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>

      );
}
