import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../assets/aboutSlider/img1.png'
import img2 from '../../assets/aboutSlider/img2.png'
import img3 from '../../assets/aboutSlider/img3.png'
import img4 from '../../assets/aboutSlider/img4.png'
import img5 from '../../assets/aboutSlider/img5.png'
import img6 from '../../assets/aboutSlider/img6.png'
import img7 from '../../assets/aboutSlider/img7.png'
import img8 from '../../assets/aboutSlider/img8.png'
import img9 from '../../assets/aboutSlider/img9.png'

import "./slide.css";

import { Pagination, Navigation } from "swiper";

const sliderImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9
]

export function AboutSlider() {
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
        {
          sliderImages.map((image)=>{
            return (
              <SwiperSlide>
                <div className="h-[500px] flex justify-center items-center object-cover">
                  <img src={image}/>
                </div>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </div>
  )
}