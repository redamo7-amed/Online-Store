import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";


const HeroSlider = () => {
  return (
    <>
      <div className="hero relative mb-[80px] pt-5 ">
        <div className="container">
          <Swiper
          loop={true}
           autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            pagination={true}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >

            <SwiperSlide>
                <div className="content ">
                    <h4>Introdducing the new</h4>
                    <h3>Microsoft xbox <br /> 360 controller</h3>
                    <p>Windows Xp/10/8/7 Ps3, Tv Box</p>
                    <Link to="/" className='btn'>Shop Now</Link>

                </div>
                <img src="/src/img/banner_Hero1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <div className="content">
                    <h4>Introdducing the new</h4>
                    <h3>Microsoft xbox <br /> 360 controller</h3>
                    <p>Windows Xp/10/8/7 Ps3, Tv Box</p>
                    <Link to="/" className='btn'>Shop Now</Link>

                </div>
                <img src="/src/img/banner_Hero2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <div className="content">
                    <h4>Introdducing the new</h4>
                    <h3>Microsoft xbox <br /> 360 controller</h3>
                    <p>Windows Xp/10/8/7 Ps3, Tv Box</p>
                    <Link to="/" className='btn'>Shop Now</Link>
                </div>
                <img src="/src/img/banner_Hero3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
