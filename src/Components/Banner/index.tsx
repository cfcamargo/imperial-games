
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { FormattedMessage } from 'react-intl';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function Banner() {
  return (
    <div className='z-20' id="banner">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full h-[calc(100vh_-_80px)] flex justify-center items-center bg-slide1 bg-cover bg-center'>
            <div className='w-full h-full bg-black bg-opacity-80 flex items-center justify-center flex-col gap-4'>
              <p className='text-light-yellow xs:text-sm md:text-lg'><FormattedMessage id="banner1-text"/></p>
              <h2 className='text-dark-yellow xs:text-3xl md:text-5xl font-bold uppercase'><FormattedMessage id="banner1-title"/></h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh_-_80px)] flex justify-center items-center bg-slide2 bg-cover bg-center'>
            <div className='w-full h-full bg-black bg-opacity-80 flex items-center justify-center flex-col'>
              <div className="containeer flex xs:items-center md:items-start justify-center flex-col gap-4">
                <h2 className='text-dark-yellow xs:text-2xl md:text-5xl font-bold uppercase'><FormattedMessage id="banner2-title"/></h2>
                <p className='text-light-yellow xs:text-sm md:text-lg'><FormattedMessage id="banner2-text"/></p>
                <p className='text-light-yellow xs:text-sm md:text-lg'><FormattedMessage id="banner2-text2"/></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh_-_80px)] flex justify-center items-center bg-slide3 bg-cover bg-center'>
            <div className='w-full h-full bg-black bg-opacity-80 flex items-center justify-center flex-col gap-4'>
              <div className="containeer flex xs:items-center md:items-end justify-center flex-col gap-4">
                <h2 className='text-dark-yellow xs:text-2xl md:text-5xl font-bold uppercase '><FormattedMessage id="banner3-title"/></h2>
                <p className='text-light-yellow xs:text-center md:text-right xs:max-w-[300px] md:max-w-[600px] xs:text-sm md:text-lg'><FormattedMessage id="banner3-text"/></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh_-_80px)] flex justify-center items-center bg-slide4 bg-cover bg-center'>
            <div className='w-full h-full bg-black bg-opacity-80 flex items-center justify-center flex-col gap-4'>
              <div className="containeer flex items-center justify-center flex-col gap-4">
                <h2 className='text-dark-yellow xs:text-2xl md:text-5xl font-bold uppercase'><FormattedMessage id="banner4-title"/></h2>
                <p className='text-light-yellow xs:text-sm md:text-lg'><FormattedMessage id="banner4-text"/></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}