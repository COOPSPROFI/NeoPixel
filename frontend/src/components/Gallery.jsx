
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Gallery() {
    return (
        <div className='bg-[#1E1F21] py-[200px]'>
            <div className='text-white flex max-w-7xl mx-auto mb-[140px] border-b-4 border-white-600 p-[10px] text-2xl place-content-between'>
                <div>Gallery</div>
                <div>----</div>
                <div class="swiper-button-next">Next</div>
                <div class="swiper-button-prev">Prev</div>
            </div>
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../assets/events/event1.jpg')} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};