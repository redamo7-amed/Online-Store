import React from "react";
import Product from "./Product";
import "./SlideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const SlideProduct = ({title,data}) => {
  return (
    <>
      <div className="slide-products slide">
        <div className="container">
          <div className="top-slides  ">
            <h2 className="text-[30px] text-main mb-[10px] ">
              {title}
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, obcaecati.
            </p>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation,Autoplay]}

            className="mySwiper"
          >

            {data.map((item)=>{
              return(
            <SwiperSlide>
              <Product item={item} />

            </SwiperSlide>

              )
            })}
   
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SlideProduct;
