import React, { useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sphers() {
    const sliderRef = useRef(null);

    console.log(window)
    const windowWidth = window.innerWidth;

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className='bg-[#1E1F21] laptop:py-[200px] py-[50px] '>
            <div className="max-w-[1400px] mx-auto">
                <div className='uppercase text-white flex max-w-[1400px] mx-auto laptop:mb-[140px] mb-[40px] border-b-4 border-white-600 p-[10px] text-2xl place-content-between'>
                    <div>Сферы применения</div>
                    <div className="flex items-center gap-3">
                        <div onClick={handlePrev}>
                            <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM33 7L1 7V9L33 9V7Z" fill="white" />
                            </svg>
                        </div>
                        <div onClick={handleNext}>
                            <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928933C25.9526 0.538409 25.3195 0.538409 24.9289 0.928933C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM-4.37114e-08 9L32 9L32 7L4.37114e-08 7L-4.37114e-08 9Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper ref={sliderRef} slidesPerView={windowWidth > 420 ? 3 : 1} spaceBetween={windowWidth > 420 ? 30 : 0} slidesPerGroup={windowWidth > 420 ? 3 : 1} loop={true} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                    <SwiperSlide><img src={require('../assets/events/image 43pic1 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Ювелирное дело</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 44pic2 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Стоматология</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 45pic3 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Машиностроение</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 43pic4 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Медицина</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 44pic5 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Автомобилестроение</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 45pic6 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Архитектура</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 43pic7 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Прототипирование</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 44pic8 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Текстильная промышленность</div></SwiperSlide>
                    <SwiperSlide><img src={require('../assets/events/image 45pic9 (1).png')} alt="" /><div className="absolute text-white text-md bottom-[55px] left-[20px]">Обувная промышленность</div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};