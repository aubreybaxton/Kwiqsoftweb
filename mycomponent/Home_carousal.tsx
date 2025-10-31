'use client'

import AOS from "aos"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Slide1, Slide2, Slide3, Slide4 } from "./slide1";



function Home_carousal() {

  return (

    <div className='top-18 '>
      <Swiper className="mySwiper"
        modules={[Autoplay, Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => {
          AOS.refreshHard()
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          }
        }}
      >
        <SwiperSlide ><Slide1 /></SwiperSlide>
        <SwiperSlide ><Slide2 /></SwiperSlide>
        <SwiperSlide ><Slide3 /></SwiperSlide>
        
        <SwiperSlide ><Slide4 /></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Home_carousal