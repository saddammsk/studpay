"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/thumbs";



export const MediaTourImport = () => {
      const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
      const paginationRef = useRef(null);
      const [progress, setProgress] = useState(0);

      // function to update progress
      const handleSlideChange = (swiper: SwiperType) => {
            const totalSlides = swiper.slides.length;
            const currentIndex = swiper.realIndex + 1; // realIndex ignores loop duplicates
            setProgress((currentIndex / totalSlides) * 100);
      };


      return (
            <div className="flex lg:flex-row flex-col gap-6">
                  <div className="flex-1 w-full border border-solid border-gray-1100/50 bg-white p-6 rounded-xl">
                        <div className="text-center">
                              <h4 className="text-black-1000 font-bold text-xl leading-7 font-PlayfairDisplay mb-2">Import Your Property Photos</h4>
                              <p className="text-gray-1000 font-inter font-normal sm:text-base text-sm leading-6">Drag and drop your photos or click to browse. We support JPG, PNG, and HEIC.</p>
                        </div>
                        <label htmlFor="file-upload"
                              className="group flex flex-col mt-6 items-center justify-center w-full py-8 px-4 border-2 border-dashed border-gray47 bg-white hover:border-yellow-1100/50 hover:bg-yellow-1100/5 rounded-xl cursor-pointer transition-colors"
                        >
                              <span className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-1000/10">
                                    <Image src="../images/upload-blue.svg" alt="receipt Image" width={20} height={20} />
                              </span>
                              <h4 className="text-black25 font-medium font-inter sm:text-base text-sm text-center leading-6 mt-4 mb-1">Drop photos here or click to upload</h4>
                              <p className="text-gray-1000 font-inter font-normal sm:text-sm text-xs leading-5">Maximum 50 photos, up to 10MB each</p>
                              <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                              />

                        </label>
                  </div>
                  <div className="lg:max-w-97.25 w-full bg-white border border-solid border-gray-1100 rounded-xl">
                        <div className="flex items-center justify-between border-b border-solid border-gray-1100 px-4 py-5">
                              <h4 className="text-black-1000 font-PlayfairDisplay font-bold text-base leading-6 flex items-center gap-2"><Image src="../images/eyes-blue.svg" alt="receipt Image" width={20} height={20} /> Live Preview</h4>
                              <ul className="flex items-center gap-2">
                                    <li><Link href={"#"} className="flex items-center justify-center w-8 h-8"><Image src="../images/mute-icon.svg" alt="Image" width={16} height={16} /> </Link></li>
                                    <li><Link href={"#"} className="flex items-center justify-center w-8 h-8"><Image src="../images/resize-icon.svg" alt="Image" width={16} height={16} /> </Link></li>
                              </ul>
                        </div>
                        <div className="p-4">
                              <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    loop={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                     onSlideChange={handleSlideChange} 
                                    className="mySwiper2"
                              >
                                    <SwiperSlide>
                                          <div className="bg-linear-to-b from-black-1000 to-black28 rounded-2xl">
                                                <Image
                                                      src="/images/LivingRoom.png"
                                                      alt="Image"
                                                      width={355.34}
                                                      height={235.86}
                                                      className="w-full rounded-t-2xl"
                                                />
                                                <div className="text-center p-3 pb-4">
                                                      <span className="inline-flex items-center justify-center text-white font-inter font-medium text-sm leading-5 bg-black/50 backdrop-blur-[2px] rounded-full px-4 h-9">Living Room</span>
                                                </div>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-linear-to-b from-black-1000 to-black28 rounded-2xl">
                                                <Image
                                                      src="/images/LivingRoom.png"
                                                      alt="Image"
                                                      width={355.34}
                                                      height={235.86}
                                                      className=" rounded-t-2xl"
                                                />
                                                <div className="text-center p-3 pb-4">
                                                      <span className="inline-flex items-center justify-center text-white font-inter font-medium text-sm leading-5 bg-black/50 backdrop-blur-[2px] rounded-full px-4 h-9">Living Room</span>
                                                </div>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-linear-to-b from-black-1000 to-black28 rounded-2xl">
                                                <Image
                                                      src="/images/LivingRoom.png"
                                                      alt="Image"
                                                      width={355.34}
                                                      height={235.86}
                                                      className=" rounded-t-2xl"
                                                />
                                                <div className="text-center p-3 pb-4">
                                                      <span className="inline-flex items-center justify-center text-white font-inter font-medium text-sm leading-5 bg-black/50 backdrop-blur-[2px] rounded-full px-4 h-9">Living Room</span>
                                                </div>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-linear-to-b from-black-1000 to-black28 rounded-2xl">
                                                <Image
                                                      src="/images/LivingRoom.png"
                                                      alt="Image"
                                                      width={355.34}
                                                      height={235.86}
                                                      className=" rounded-t-2xl"
                                                />
                                                <div className="text-center p-3 pb-4">
                                                      <span className="inline-flex items-center justify-center text-white font-inter font-medium text-sm leading-5 bg-black/50 backdrop-blur-[2px] rounded-full px-4 h-9">Living Room</span>
                                                </div>
                                          </div>
                                    </SwiperSlide>
                              </Swiper>
                        </div>
                        <div className="border-t border-solid border-gray-1100 p-4">
                              <div className="max-w-37 w-full">
                                    <Swiper
                                          onSwiper={setThumbsSwiper}
                                          spaceBetween={8}
                                          slidesPerView={2}
                                          watchSlidesProgress={true}
                                          modules={[FreeMode, Pagination, Navigation, Thumbs]}
                                          pagination={{
                                                el: paginationRef.current,
                                                type: "fraction",
                                                renderFraction: function (currentClass, totalClass) {
                                                      return `Step <span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
                                                },
                                          }}
                                          className="mySwiper"
                                    >
                                          <SwiperSlide>
                                                <Image
                                                      src="/images/LivingRoomThumb1.png"
                                                      alt="Image"
                                                      width={64}
                                                      height={48}
                                                      className=" rounded-2xl opacity-60 cursor-pointer border-2 border-solid  border-transparent"
                                                />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <Image
                                                      src="/images/LivingRoomThumb2.png"
                                                      alt="Image"
                                                      width={64}
                                                      height={48}
                                                      className=" rounded-2xl opacity-60 cursor-pointer border-2 border-solid  border-transparent"
                                                />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <Image
                                                      src="/images/LivingRoomThumb2.png"
                                                      alt="Image"
                                                      width={64}
                                                      height={48}
                                                      className=" rounded-2xl opacity-60 cursor-pointer border-2 border-solid  border-transparent"
                                                />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <Image
                                                      src="/images/LivingRoomThumb2.png"
                                                      alt="Image"
                                                      width={64}
                                                      height={48}
                                                      className=" rounded-2xl opacity-60 cursor-pointer border-2 border-solid  border-transparent"
                                                />
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                              <div className="relative flex items-center gap-2 pt-4">
                                    <div className="flex items-center gap-2">
                                          <Image
                                                src="/images/refresh-icon.svg"
                                                alt="Image"
                                                width={16}
                                                height={16}
                                          />
                                          <div ref={paginationRef} className="swiper-pagination static! w-auto! text-gray-1000! font-normal  text-sm leading-5"></div>
                                    </div>
                                    <div className="flex-1  progress relative bg-lightgray rounded-full h-1 w-full">
                                          <div className="progressbar absolute top-0 left-0 w-[25%] h-full bg-blue-1100 rounded-l-full" style={{ width: `${progress}%` }}></div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      )
}
