import React from "react";
import CustomerResponse from "../components/CustomerResponse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <>
      <style>
        {`
  .mySwiper {
    padding: 40px;
  }
  .swiper-button-next, .swiper-button-prev {
    color: black; 
    ru
    top: 50%; 
    transform: translateY(-50%);
    width : 100px;
  }
  .swiper-button-next {
    right: 130px; 
    
  }
  .swiper-button-prev {
    left: 130px; 
   
  }
  .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    
  }
  .swiper-pagination-bullet-active {
    background-color: black; 
  }
`}
      </style>
      <div className="text-center mt-5">
        <h2 className="mb-3">Testimonials</h2>
        <p className="text-center mb-5">
          We take pride in the satisfaction of our customers.
          <br /> Their positive feedback and continued trust in our products are
          the greatest testaments to our commitment to excellence.
        </p>

        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CustomerResponse
              imageSrc="/images/testimonal1.jpg"
              Feedback="Decorosophy exceeded my expectations with their stylish and elegant decor solutions. My home now feels like a true reflection of my personality and taste."
              name="Marie-Morgane LE BRAS"
              position="VP of Marketing"
              company="ARC Document Solutions"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerResponse
              imageSrc="/images/t2.jpg"
              Feedback="Thanks to Decorosophy, my office has never looked more professional! The transformation was incredible, and the new decor has greatly enhanced the ambiance of my workspace. Highly recommend their services!"
              name="Jony Wick"
              position="Assistant Professor"
              company="Engage Rocket"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
