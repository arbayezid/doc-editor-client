
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Devs.css';

import joy from "../assets/DevsImg/joydev.jpg"
import asish from "../assets/DevsImg/asish.jpg"
import bayzid from "../assets/DevsImg/bayzid.jpg"
import choyon from "../assets/DevsImg/choyon.jpg"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bayzid} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={choyon} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={asish} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={joy} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={joy} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
