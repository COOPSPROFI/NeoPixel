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

export default function Events() {
	const sliderRefText = useRef(null);
    const sliderRefImage = useRef(null);

    const windowWidth = window.innerWidth;

    const handlePrev = useCallback(() => {
        sliderRefText.current.swiper.slidePrev();
        sliderRefImage.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        sliderRefText.current.swiper.slideNext();
        sliderRefImage.current.swiper.slideNext();
    }, []);
	const events = [
		{},
		{},
		{}
	]
	return (
		<div className='bg-[#171616] py-[50px] laptop:py-[100px]'>
			<div className="max-w-[1400px] mx-auto">
				<div className='uppercase text-white flex max-w-[1400px] mx-auto laptop:mb-[140px] mb-[40px] border-b-4 border-white-600 p-[10px] text-2xl place-content-between'>
						<div>Галерея</div>
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
				<div className="flex h-[600px]">
				{/* ЦИКЛ */}
					<div className="textplace">
						<Swiper ref={sliderRefText} slidesPerView={3} spaceBetween={30} slidesPerGroup={1} direction={"vertical"} loop={true} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[]} allowTouchMove={false} className="myTextEventSwiper">
							{events.map((char, index) =>
								<SwiperSlide className="block">
									<div>id: 0</div>
									<div>date: 25.09.2021,</div>
									<div>title: Фестиваль,  isActual</div>
									<div>description: Презентация разработок,</div>
									<div>img: https://api.neopixel.ru/img/events/6124878524.png</div>
								</SwiperSlide>
							)}
							test
						</Swiper>
					</div>

					<div className="imageplace">
						<Swiper ref={sliderRefImage} slidesPerView={1} spaceBetween={0} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[]} allowTouchMove={false} className="myImageEventSwiper">
							<SwiperSlide><img src={require('../assets/events/image 43pic1.png')} alt="" /></SwiperSlide>
							<SwiperSlide><img src={require('../assets/events/image 44pic2.png')} alt="" /></SwiperSlide>
							<SwiperSlide><img src={require('../assets/events/image 45pic3.png')} alt="" /></SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}