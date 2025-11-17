'use client'

import AOS from "aos"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Slide1, Slide2, Slide3, Slide4 } from "./slide1";
import FloatingSquaresBackground from "./bgStyle";



function Home_carousal() {

  return (

    <section className=' h-screen'>
      <Swiper className="mySwiper "
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
        <SwiperSlide >
          <FloatingSquaresBackground>
            <Slide1 />
          </FloatingSquaresBackground>

        </SwiperSlide>
        <SwiperSlide >
          <FloatingSquaresBackground>
            <Slide2 />
          </FloatingSquaresBackground>
        </SwiperSlide>
        <SwiperSlide >
          <FloatingSquaresBackground>
            <Slide3 />
          </FloatingSquaresBackground>
        </SwiperSlide>
        <SwiperSlide >
          <FloatingSquaresBackground>
            <Slide4 />
          </FloatingSquaresBackground>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Home_carousal