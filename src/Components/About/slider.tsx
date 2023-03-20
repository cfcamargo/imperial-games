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

  let slider_per_vier = 3

  window.addEventListener('resize', function () {
    var largura = window.innerWidth;
    console.log(largura)
    console.log(slider_per_vier)
    if(largura > 1200){
      slider_per_vier = 3
    } else if(largura < 760) {
      slider_per_vier = 2
    } else if(largura < 360) {
      slider_per_vier = 1
    }
  });

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
        spaceBetween={25}
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
              <SwiperSlide className="bg-[#091C1A] flex justify-center" key={image}>
                <div className="h-[500px] flex justify-center items-center object-cover">
                  <img src={image} />
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}