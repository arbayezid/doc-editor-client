
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import asish from './../assets/DevsImg/asish.png'
import bayzid from './../assets/DevsImg/bayzid.jpg'
import choyon from './../assets/DevsImg/choyon.jpg'
import joy from './../assets/DevsImg/joydev.jpg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Developer = () => {


    return (
        < div className='px-12'>
            <h2 className='text-4xl text-center'>Developer</h2>

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                
                autoplay={{ delay: 2500}}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Autoplay,Navigation]}
                
                className="mySwiper "
            >

                
                <SwiperSlide className='swiper-slide'>

                    <div className='swiper-msg z-10 shadow-lg mb-6 '>

                        <FaQuoteLeft className='left' ></FaQuoteLeft>
                        <p>

                            Mahejabin: Im in the way to be an independent women..Who loves to cherish her dream
                        </p>
                        {/* <FaQuoteRight className='right' ></FaQuoteRight> */}
                    </div>
                    <div className='grid grid-cols-2 swiper-data'>

                        <figure>
                            <img src="https://i.ibb.co/HDpbVRZ/mypic.jpg" alt="" />
                        </figure>
                        <div className='swiper-details '>
                            <p >Mahejabin</p>
                            <p className='text-gray-400' >Front-end developer</p>
                        </div>
                    </div>


                </SwiperSlide>


                <SwiperSlide>
                    <div className='swiper-msg z-10 shadow-lg mb-6'>

                        <FaQuoteLeft className='left' ></FaQuoteLeft>
                        <p>

                        Himalay Bala Asish : Im in the way to be an independent men..Who loves to cherish her dream
                        </p>
                        {/* <FaQuoteRight className='right' ></FaQuoteRight> */}
                    </div>
                    <div className='grid grid-cols-2 swiper-data'>

                        <figure>
                            <img src={asish} alt="" />
                        </figure>
                        <div className='swiper-details '>
                            <p >Himalay Bala Ashis </p>
                            <p className='text-gray-400' >Front-end developer</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swiper-msg z-10 shadow-lg mb-6'>

                        <FaQuoteLeft className='left' ></FaQuoteLeft>
                        <p className=''>

                        Bayzid Rahman: Im in the way to be an independent men..Who loves to cherish her dream
                        </p>
                        {/* <FaQuoteRight className='right' ></FaQuoteRight> */}
                    </div>
                    <div className='grid grid-cols-2 swiper-data'>

                        <figure>
                            <img src={bayzid} alt="" />
                        </figure>
                        <div className='swiper-details '>
                            <p>Bayzid Rahman</p>
                            <p className='text-gray-400' >Front-end developer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-msg z-10 shadow-lg mb-6'>

                        <FaQuoteLeft className='left' ></FaQuoteLeft>
                        <p className=''>

                        Choyon Adhikari: Im in the way to be an independent men..Who loves to cherish her dream
                        </p>
                        {/* <FaQuoteRight className='right' ></FaQuoteRight> */}
                    </div>
                    <div className='grid grid-cols-2 swiper-data'>

                        <figure>
                            <img src={choyon} alt="" />
                        </figure>
                        <div className='swiper-details '>
                            <p >Choyon Adhikari</p>
                            <p className='text-gray-400' >Front-end developer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-msg z-10 shadow-lg mb-6'>

                        <FaQuoteLeft className='left' ></FaQuoteLeft>
                        <p className=''>

                        Joy Shutradhar: Im in the way to be an independent men..Who loves to cherish her dream
                        </p>
                        {/* <FaQuoteRight className='right' ></FaQuoteRight> */}
                    </div>
                    <div className='grid grid-cols-2 swiper-data'>

                        <figure>
                            <img src={joy} alt="" />
                        </figure>
                        <div className='swiper-details '>
                            <p >Joy Shutradhar</p>
                            <p className='text-gray-400' >Front-end developer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-msg z-10 shadow-lg mb-6'>

                        <FaQuoteLeft className='left' ></FaQuoteLeft>
                        <p className=''>

                        Ataullah mesbah: Im in the way to be an independent men..Who loves to cherish her dream
                        </p>
                        {/* <FaQuoteRight className='right' ></FaQuoteRight> */}
                    </div>
                    <div className='grid grid-cols-2 swiper-data'>

                        <figure>
                            <img src="https://i.ibb.co/DfvxzCq/anjum.jpg" alt="" />
                        </figure>
                        <div className='swiper-details '>
                            <p >Ataullah mesbah</p>
                            <p className='text-gray-400' >Front-end developer</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Developer;