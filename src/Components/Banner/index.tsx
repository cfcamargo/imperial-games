import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
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
              <p className='text-light-yellow'>A melhor mesa de cash game da fronteira</p>
              <h2 className='text-dark-yellow text-5xl font-bold'>A SORTE ESTA AQUI</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh_-_80px)] flex justify-center items-center bg-slide2 bg-cover bg-center'>
            <div className='w-full h-full bg-black bg-opacity-80 flex items-center justify-center flex-col'>
              <div className="containeer flex items-start justify-center flex-col gap-4">
                <h2 className='text-dark-yellow text-5xl font-bold'>AS MÁQUINAS MAIS DESEJADAS</h2>
                <p className='text-light-yellow'>Contamos com um vasta gama de maquinas, e sempre buscamos trazer novidades.</p>
                <p className='text-light-yellow'>Venha testar sua sorte</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-[calc(100vh_-_80px)] flex justify-center items-center bg-slide3 bg-cover bg-center'>
            <div className='w-full h-full bg-black bg-opacity-80 flex items-center justify-center flex-col gap-4'>
              <div className="containeer flex items-start justify-center flex-col gap-4">
                <h2 className='text-dark-yellow text-5xl font-bold'>A Melhor mesa de poker da Fronteira</h2>
                <p className='text-light-yellow'>Pra voce amante de um bom poker
                  todos os dias temos mesas de poker no casino, onde varios jogadores se juntam em busca do premio da noite. Venha prestigiar a melhor mesa da fronteira</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}