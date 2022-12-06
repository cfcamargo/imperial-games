import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slide.css";

import { Pagination, Navigation } from "swiper";
export function MachineSlider() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}