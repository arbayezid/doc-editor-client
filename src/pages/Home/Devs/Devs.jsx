
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Devs.css';

import joy from "../../../assets/DevsImg/joydev.jpg"
import asish from "../../../assets/DevsImg/asish.png"
import bayezid from "../../../assets/DevsImg/bayezid.jpg"
import choyon from "../../../assets/DevsImg/Chayon-adhikary.png"
import ataullah from "../../../assets/DevsImg/Ataullah Mesbah.png"
import mehjabin from "../../../assets/DevsImg/mehjabin.png"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Devs() {
    return (
        <div className='pb-20'>
        <h2 className='text-3xl font-serif  text-center	 '>Our Contributor</h2>
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
                <div className="container">
                        <div className="content">
                            <div className="content-overlay"></div>
                            <img src={bayezid} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Abdur Rahman Bayezid</h3>
                                <p className="content-text">MERN Stack Developer</p>
                                <button className="btn hover:outline-white btn-info text-white my-2 ">Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="content">
                            <div className="content-overlay"></div>
                            <img src={ataullah} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Ataullah Mesbah</h3>
                                <p className="content-text">MERN Stack Developer</p>
                                <button className="btn hover:outline-white btn-info text-white my-2 ">Details</button>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="container">
                        <div className="content">
                            <div className="content-overlay"></div>
                            <img src={asish} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Himaloy Asish</h3>
                                <p className="content-text">MERN Stack Developer</p>
                                <button className="btn hover:outline-white btn-info text-white my-2 ">Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container">
                        <div className="content">
                            <div className="content-overlay"></div>
                            <img src={joy} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Joy Sutradhar</h3>
                                <p className="content-text">MERN Stack Developer</p>
                                <button className="btn hover:outline-white btn-info text-white my-2 ">Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container">
                        <div className="content">
                            <div className="content-overlay"></div>
                            <img src={choyon} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Chayon Adhikary</h3>
                                <p className="content-text">MERN Stack Developer</p>
                                <button className="btn hover:outline-white btn-info text-white my-2 ">Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container">
                        <div className="content">
                            <div className="content-overlay"></div>
                            <img src={mehjabin} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Mehjabin Mou</h3>
                                <p className="content-text">MERN Stack Developer</p>
                                <button className="btn hover:outline-white btn-info text-white my-2 ">Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
