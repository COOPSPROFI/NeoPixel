import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carusel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


export default function  Carusel() {
    return (
        <div>
            <div className='grid grid-cols-1 place-items-center laptop:place-items-start gap-5  mx-auto text-white laptop:flex laptop:gap-12 laptop:justify-around laptop:max-w-7xl laptop:mx-auto'>
                <Swiper effect={"coverflow"} grabCursor={true} centeredSlides={true} slidesPerView={"auto"} loop={true} loopFillGroupWithBlank={true} coverflowEffect={{   rotate: 50,   stretch: 0,   depth: 100,   modifier: 1,   slideShadows: true, }} pagination={true} modules={[EffectCoverflow, Pagination]} className="mySwiper">
                    <SwiperSlide>
                    <div className='p-3 laptop:p-7  shadow-2xl laptop:shadow-2xl bg-[#1E1F21] '>
                        <img className=' mx-auto laptop:w-[250px] laptop:h-[250px]' src={require('../../assets/printers/firstPrinter.png')} alt="p1" />
                        <h1 className='text-[25px] leading-[27px] mt-2 laptop:mt-8'>Ruby (R Lite / R Pro)</h1>
                        <div className='flex items-center justify-between text-[18px] leading-[22px] mt-4 laptop:mt-10'>
                            <div className='underline cursor-pointer'>Подробнее</div>
                            <button className='px-5 py-1 hover:bg-[#26AAE1] border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='p-3 laptop:p-7  shadow-2xl  laptop:shadow-2xl bg-[#1E1F21] '>
                        <img className='w-[89px] h-[146px] mx-auto laptop:w-[250px] laptop:h-[400px]' src={require('../../assets/printers/secondPrinter.png')} alt="p2" />
                        <h1 className='text-[22px] leading-[27px] mt-2 laptop:mt-8'>Sapphire (S Lite / S Pro)</h1>
                        <div className='flex items-center justify-between text-[18px] leading-[22px] mt-4 laptop:mt-10'>
                            <div className='underline cursor-pointer'>Подробнее</div>
                            <button className='px-5 py-1 hover:bg-[#26AAE1] border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='p-3 laptop:p-7 shadow-2xl  laptop:hadow-2xl bg-[#1E1F21] '>
                        <img className=' mx-auto ' src={require('../../assets/printers/thirdPrinter.png')} alt="p3" />
                        <h1 className='text-[22px] leading-[27px] mt-2 laptop:mt-8'>Heliodorus (H Lite / H Pro)</h1>
                        <div className='flex items-center justify-between text-[18px] leading-[22px] mt-4 laptop:mt-10'>
                            <div className='underline cursor-pointer'>Подробнее</div>
                            <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer hover:bg-[#26AAE1] '>Заказать</button>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
         </div>
    )
}