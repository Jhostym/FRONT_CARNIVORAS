import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const HeroSlider = () => {
  return (
    <section className="relative w-full h-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="hidden lg:block">
            <a href="#" target="_blank">
              <img src="img/slider/slider.jpg" alt="Slider Image" className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:hidden">
            <a href="#" target="_blank">
              <img src="img/slider/slider.jpg" alt="Slider Image" className="w-full h-full object-cover" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="hidden lg:block">
            <a href="#" target="_blank">
              <img src="img/slider/slider_tranporteJ.jpg" alt="Slider Image" className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:hidden">
            <a href="#" target="_blank">
              <img src="img/slider/slider_tranporteJ.jpg" alt="Slider Image" className="w-full h-full object-cover" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="hidden lg:block">
            <a href="#" target="_blank">
              <img src="img/slider/slider_tranportej2.jpg" alt="Slider Image" className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:hidden">
            <a href="#" target="_blank">
              <img src="img/slider/slider_tranportej2.jpg" alt="Slider Image" className="w-full h-full object-cover" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 swiper-button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 swiper-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 swiper-pagination"></div>
    </section>
  );
};

export default HeroSlider;
