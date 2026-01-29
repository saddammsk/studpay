"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Buttons from "@/app/ui/Buttons";

export const PropertyMediaTrust = () => {

      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Media & Trust </Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Upload & Organize Photos  </li>
                  </ul>
                  <div className="flex items-start gap-3 my-6">
                        <span className='bg-blue-1100 rounded-xl w-10 h-10 flex items-center justify-center'>
                              <Image src="../images/camera-white.svg" alt="receipt Image" width={20} height={20} />
                        </span>
                        <div className="relative flex-1 w-full">
                              <h4 className="font-medium font-inter sm:mb-2 mb-1 sm:text-xl text-lg sm:leading-9 leading-6 text-black24">Media – Upload & Organize Photos</h4>
                              <p className='text-gray40 font-inter font-normal sm:text-sm text-xs leading-6'>Upload, organize, and optimize your property photos for the best listing experience.</p>
                        </div>
                  </div>
                  <div className="">
                        <div className="flex sm:flex-row flex-col lg:items-center items-start sm:gap-4 gap-2 border border-solid border-gray39 bg-gray44/50 rounded-xl p-3">
                              <span className="text-gray43 font-normal font-inter text-xs leading-4 tracking-[0.3px] uppercase">AI Features</span>
                              <ul className="flex lg:flex-nowrap flex-wrap items-center gap-3 flex-1 w-full">
                                    <li className="text-gray43 font-normal font-inter text-xs leading-4 flex items-center gap-1.5"> <Image src="../images/light-blue.svg" alt="Image" width={14} height={14} /> Auto compression</li>
                                    <li className="text-gray43 font-normal font-inter text-xs leading-4 flex items-center gap-1.5"> <Image src="../images/eyes-blue.svg" alt="Image" width={14} height={14} /> Blur detection</li>
                                    <li className="text-gray43 font-normal font-inter text-xs leading-4 flex items-center gap-1.5"> <Image src="../images/Lightanalysis.svg" alt="Image" width={14} height={14} /> Light analysis</li>
                                    <li className="text-gray43 font-normal font-inter text-xs leading-4 flex items-center gap-1.5"> <Image src="../images/Duplicate-icon.svg" alt="Image" width={14} height={14} /> Duplicate detection</li>
                                    <li className="text-gray43 font-normal font-inter text-xs leading-4 flex items-center gap-1.5"> <Image src="../images/sorting-icon.svg" alt="Image" width={14} height={14} /> Smart ordering</li>
                              </ul>
                        </div>
                        <div className="mt-6 flex lg:flex-row flex-col items-start gap-6">
                              <div className="flex-1 w-full">
                                    <label htmlFor="file-upload"
                                          className="group flex flex-col items-center justify-center w-full py-12 px-4 border-2 border-dashed border-gray39 bg-gray-1600 hover:border-green234/50 hover:bg-gray44/30 rounded-2xl cursor-pointer transition-colors"
                                    >
                                          <span className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-1000/10">
                                                <Image src="../images/camera-blue.svg" alt="receipt Image" width={32} height={32} />
                                          </span>
                                          <h4 className="text-black25 font-bold font-inter sm:text-lg text-base leading-7 mt-4 mb-1">Drag & drop your photos here or browse</h4>
                                          <p className="text-gray43 font-inter font-normal text-sm leading-5 mb-4">
                                                Minimum 3 photos · Maximum 30 · JPG / PNG
                                          </p>
                                          <Buttons href="#" className="h-10 sm:w-auto! w-full! inline-flex px-4 gap-4 bg-blue12 text-white">
                                                <Image src="../images/upload-icon.svg" alt="Image" width={16} height={16} className="brightness-2000" />
                                                Browse files
                                          </Buttons>

                                          <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                          />

                                    </label>
                              </div>
                              <div className="lg:max-w-65.5 max-w-full w-full border border-solid border-gray39 bg-white shadow-22xl rounded-xl p-6.25">
                                    <h4 className="text-black25 font-Plus-Jakarta-Sans font-bold text-base leading-6 tracking-[-0.4px]">Organize by rooms</h4>
                                    <ul className="mt-3">
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/sofa-icon.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Living room</p> </Link>
                                          </li>
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/bedroom-icon.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Bedroom 1</p> </Link>
                                          </li>
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/bedroom-icon.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Bedroom 2</p> </Link>
                                          </li>
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/Kitchen.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Kitchen</p> </Link>
                                          </li>
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/bath-icon.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Bathroom</p> </Link>
                                          </li>
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/Exterior.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Exterior</p> </Link>
                                          </li>
                                          <li className="mb-1">
                                                <Link href={"#"} className="flex items-center gap-2 p-2 hover:bg-gray44/50 rounded-xl"> <span className="bg-gray44 rounded-xl flex items-center justify-center w-8 h-8"><Image src="../images/Component.svg" alt="Image" width={16} height={16} /></span><p className="text-gray43 font-normal font-inter text-s leading-5 flex-1 w-full">Building</p> </Link>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="p-4 flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between mt-6 border border-solid border-gray39 bg-white rounded-xl">
                              <ul className="flex sm:flex-row flex-col items-center gap-3 sm:w-auto w-full">
                                    <li className="sm:w-auto w-full">
                                          <Link href={"#"} className="sm:w-auto w-full group inline-flex items-center justify-center text-black25 font-normal font-inter text-sm leading-5 gap-2 h-10 border border-solid border-gray39 bg-gray-1600 rounded-[10px] px-4 hover:bg-blue132 hover:text-green235">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path className="group-hover:stroke-green235" d="M9.66732 2.66602H6.33398L4.66732 4.66602H2.66732C2.3137 4.66602 1.97456 4.80649 1.72451 5.05654C1.47446 5.30659 1.33398 5.64573 1.33398 5.99935V11.9993C1.33398 12.353 1.47446 12.6921 1.72451 12.9422C1.97456 13.1922 2.3137 13.3327 2.66732 13.3327H13.334C13.6876 13.3327 14.0267 13.1922 14.2768 12.9422C14.5268 12.6921 14.6673 12.353 14.6673 11.9993V5.99935C14.6673 5.64573 14.5268 5.30659 14.2768 5.05654C14.0267 4.80649 13.6876 4.66602 13.334 4.66602H11.334L9.66732 2.66602Z" stroke="#14181F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                      <path className="group-hover:stroke-green235" d="M8 10.666C9.10457 10.666 10 9.77059 10 8.66602C10 7.56145 9.10457 6.66602 8 6.66602C6.89543 6.66602 6 7.56145 6 8.66602C6 9.77059 6.89543 10.666 8 10.666Z" stroke="#14181F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                Take a photo
                                          </Link>
                                    </li>
                                    <li className="sm:w-auto w-full">
                                          <Link href={"#"} className="group sm:w-auto w-full inline-flex items-center justify-center text-black25 font-normal font-inter text-sm leading-5 gap-2 h-10 border border-solid border-gray39 bg-gray-1600 rounded-[10px] px-4 hover:bg-blue132 hover:text-green235">

                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path className="group-hover:stroke-green235" d="M14 5.33359C13.9998 5.09978 13.938 4.87013 13.821 4.6677C13.704 4.46527 13.5358 4.29717 13.3333 4.18026L8.66667 1.51359C8.46397 1.39657 8.23405 1.33496 8 1.33496C7.76595 1.33496 7.53603 1.39657 7.33333 1.51359L2.66667 4.18026C2.46418 4.29717 2.29599 4.46527 2.17897 4.6677C2.06196 4.87013 2.00024 5.09978 2 5.33359V10.6669C2.00024 10.9007 2.06196 11.1304 2.17897 11.3328C2.29599 11.5353 2.46418 11.7034 2.66667 11.8203L7.33333 14.4869C7.53603 14.604 7.76595 14.6656 8 14.6656C8.23405 14.6656 8.46397 14.604 8.66667 14.4869L13.3333 11.8203C13.5358 11.7034 13.704 11.5353 13.821 11.3328C13.938 11.1304 13.9998 10.9007 14 10.6669V5.33359Z" stroke="#1D2530" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                      <path className="group-hover:stroke-green235" d="M2.2002 4.66699L8.0002 8.00033L13.8002 4.66699" stroke="#1D2530" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                      <path className="group-hover:stroke-green235" d="M8 14.6667V8" stroke="#1D2530" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                Generate 3D tour
                                                <span className="text-blue-1100 font-bold font-inter text-xs leading-4 inline-flex items-center justify-center h-5 rounded-full px-2.5 bg-linear-to-r from-green234/20 to-blue132/20">Premium</span>
                                          </Link>
                                    </li>
                              </ul>
                              <div className="flex items-center gap-3">
                                    <p className="text-gray43 font-normal font-inter text-sm leading-5">0 / 30 photos</p>
                                    <span className="text-red-1000 border border-solid border-red-1000 h-5.5 font-bold font-inter text-xs leading-4 inline-flex items-center justify-center gap-1.5 px-2.5 rounded-full"><Image src="../images/star3.svg" alt="Image" width={12} height={12} />Quality: Poor</span>
                              </div>
                        </div>


                  </div>

            </div>
      )
}
