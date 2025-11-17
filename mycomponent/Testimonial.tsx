"use client";

import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Testimonial() {
    return (
        <div className="h-full text-white bg-[url('/assets/test1_bg.jpg')] bg-cover text-black" >
            <div className='bg-violet-300/90 backdrop-blur-none'>
                <div className='flex items-center gap-5 justify-center pt-18'>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                    <div className='text-5xl'> Testimonial </div>
                    <Image src={'/assets/BlueArrow.png'} alt='bluearrow' height={24} width={40} />
                </div>
                <div className='text-xl text-center my-12 px-18'>
                    We have worked for several innovator companies who have interesting task for us. Here is what our clients have to say about the magic we create.
                </div>
                <div className='flex relative justify-center h-[75vh]'>
                   
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
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
                        <SwiperSlide className='bg-white backdrop-blur-none'>Slide 1</SwiperSlide>
                        <SwiperSlide className='bg-white backdrop-blur-none'>Slide 2</SwiperSlide>
                        <SwiperSlide className='bg-white backdrop-blur-none'>Slide 3</SwiperSlide>
                        <SwiperSlide className='bg-white backdrop-blur-none'>Slide 4</SwiperSlide>
                        
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Testimonial