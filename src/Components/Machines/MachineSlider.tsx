import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../assets/machinesSlider/img1.png'
import img2 from '../../assets/machinesSlider/img2.png'
import img3 from '../../assets/machinesSlider/img3.png'
import img4 from '../../assets/machinesSlider/img4.png'
import img5 from '../../assets/machinesSlider/img5.png'
import img6 from '../../assets/machinesSlider/img6.png'
import img8 from '../../assets/machinesSlider/img8.png'
import img9 from '../../assets/machinesSlider/img9.png'
import img10 from '../../assets/machinesSlider/img10.png'

import "./slide.css";


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img8,
  img9,
  img10
]

import { Pagination, Navigation } from "swiper";
export function MachineSlider() {
  return (
    <div>
      <Swiper
      breakpoints={{
        360: {
          width: 360,
          slidesPerView: 1,
          slidesPerGroup : 1,
        },
        768: {
          width: 768,
          slidesPerView: 3,
          slidesPerGroup : 3
        },
        1100: {
          width: 1100,
          slidesPerView: 3,
          slidesPerGroup : 3
        },
      }}
        spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
       {
        images.map((image)=>{
          return  (
            <SwiperSlide className="bg-[#091C1A]" key={image}>
              <div className="h-[400px] flex justify-center items-center object-cover bg-dark-green">
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