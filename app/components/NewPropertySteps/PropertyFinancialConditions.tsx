"use client";


import Link from "next/link";
import Image from 'next/image'


export const PropertyFinancialConditions = () => {
      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Financial Terms</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Rent & Charges</li>
                  </ul>
                  <div className="flex items-center gap-3 mb-6 mt-7">
                        <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                              <Image src="../images/euro-sign.svg" alt="receipt Image" width={20} height={20} />
                        </span>
                        <div className="relative">
                              <h4 className="font-bold font-inter text-blue-black17 text-xl leading-7 mb-1 tracking-[-0.5px] text-black17">Financial conditions</h4>
                              <p className='text-gray-1400 font-inter font-normal text-sm leading-5'>Rent and charges</p>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray27 rounded-xl shadow-20xl mb-6">
                        <div className="bg-lightgray/30 border-b border-solid border-gray27 px-6 py-4 gap-3 flex items-center">
                              <span className="bg-blue-1000/10 rounded-xl w-8 h-8 flex items-center justify-center">
                                    <Image src="../images/euro-sign-blue.svg" alt="receipt Image" width={16} height={16} />
                              </span>
                              <h4 className="text-black24 font-bold text-base leading-6">Basic rent</h4>
                        </div>
                        <div className="p-6">
                              <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
                                    <div className="">
                                          <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex gap-2 mb-1.5">Rent excluding charges<span className="text-red12">*</span></label>
                                          <div className="relative">
                                                <input type="text" className="border border-solid border-gray27 pr-10 bg-gray41 rounded-[10px] h-10 w-full px-3.5 text-gray40 placeholder:text-gray40 outline-0 font-medium font-inter text-sm leading-normal" placeholder="0" />
                                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray40 font-inter font-medium text-base leading-5 block">€</span>
                                          </div>
                                          <p className="text-gray40 font-inter font-normal text-xs leading-4 mt-2">Amount excluding taxes and additional charges</p>
                                    </div>
                                    <div className="">
                                          <label className="text-black24 font-inter font-medium text-sm leading-3.5 flex gap-2 mb-1.5">Provisions for monthly expenses<span className="text-red12">*</span></label>
                                          <div className="relative">
                                                <input type="text" className="border border-solid border-gray27 pr-10 bg-gray41 rounded-[10px] h-10 w-full px-3.5 text-gray40 placeholder:text-gray40 outline-0 font-medium font-inter text-sm leading-normal" placeholder="0" />
                                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray40 font-inter font-medium text-base leading-5 block">€</span>
                                          </div>
                                          <p className="text-gray40 font-inter font-normal text-xs leading-4 mt-2">Total monthly recoverable charges</p>
                                    </div>
                              </div>
                              <div className="charges-bg border border-solid border-blue131/20 rounded-xl mt-6 p-6 shadow-21xl">
                                    <h4 className="text-gray40 font-medium font-inter text-sm leading-5 tracking-[0.35px] flex items-center gap-2">
                                          <Image src="../images/calculator-icon.svg" alt="receipt Image" width={20} height={20} />
                                          Total rent including charges</h4>
                                    <div className="flex items-end gap-1.5 mt-3">
                                          <h3 className="text-blue-1100 text-[36px] font-inter font-bold leading-10 flex items-end">0,00<span className="text-xl">€</span></h3>
                                          <span className="text-gray40 font-normal font-inter text-base leading-6 block">/mois</span>
                                    </div>
                              </div>

                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray27 rounded-xl shadow-20xl mb-6">
                        <div className="bg-lightgray/30 border-b border-solid border-gray27 px-6 py-4 gap-3 flex items-center">
                              <span className="bg-blue-1000/10 rounded-xl w-8 h-8 flex items-center justify-center">
                                    <Image src="../images/receipt.svg" alt="receipt Image" width={16} height={16} />
                              </span>
                              <h4 className="text-black24 font-bold text-base leading-6 font-inter flex items-center gap-2">Details of charges <span className="text-gray40 font-normal text-xs leading-4 bg-lightgray rounded-full h-5 px-2 flex items-center justify-center">Optional</span></h4>
                        </div>
                        <div className="p-6">
                              <div className="relative">
                                    <select className="border border-solid border-gray-1300 pr-10 bg-gray34 rounded-xl h-12 w-full px-3.5 text-black24 outline-0 font-normal font-inter text-sm leading-normal appearance-none">
                                          <option>Details of charges</option>
                                    </select>
                                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 block"><img src="../images/down-arrow.svg" alt="" /> </span>
                              </div>
                        </div>
                  </div>
                  <div className="bg-white border border-solid border-gray27 rounded-xl shadow-20xl">
                        <div className="bg-lightgray/30 border-b border-solid border-gray27 px-6 py-4 gap-3 flex items-center">
                              <span className="bg-blue-1000/10 rounded-xl w-8 h-8 flex items-center justify-center">
                                    <Image src="../images/indicators-icon.svg" alt="Another Image" width={16} height={16} />
                              </span>
                              <h4 className="text-black24 font-bold text-base leading-6 font-inter flex items-center gap-2">Market indicators</h4>
                        </div>
                        <div className="p-6">
                              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="bg-lightgray/50 border border-solid border-gray27 rounded-xl p-4">
                                          <span className="text-gray40 font-inter font-medium text-xs leading-4 flex items-center gap-2 tracking-[0.3px]">
                                                <Image src="../images/price-up.svg" alt="Another Image" width={16} height={16} />
                                                Average rent in this area
                                          </span>
                                          <h4 className="text-black24 font-inter font-bold sm:text-lg text-base leading-7 mt-1">750 €/month</h4>
                                    </div>
                                    <div className="bg-lightgray/50 border border-solid border-gray27 rounded-xl p-4">
                                          <span className="text-gray40 font-inter font-medium text-xs leading-4 flex items-center gap-2 tracking-[0.3px]">
                                                <Image src="../images/square-icon.svg" alt="Another Image" width={16} height={16} />
                                                Price per square meter
                                          </span>
                                          <h4 className="text-black24 font-inter font-bold sm:text-lg text-base leading-7 mt-1">in line with the market average</h4>
                                    </div>
                              </div>
                              <p className="text-gray40 font-inter font-normal text-xs leading-4 flex items-center gap-2 mt-4">
                                    <Image src="../images/dataBase-icon.svg" alt="Another Image" width={12} height={12} />
                                    Based on StudPay market data
                              </p>
                        </div>
                  </div>

            </div>
      )
}
