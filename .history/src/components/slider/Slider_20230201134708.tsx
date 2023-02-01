import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "./Slider.scss";

import slider1 from "../../asset/image/slider1.jpg";
import slider2 from "../../asset/image/slider2.jpg";
import slider3 from "../../asset/image/slider3.jpg";
import slider4 from "../../asset/image/slider4.jpg";
import slider5 from "../../asset/image/slider5.jpg";
import slider6 from "../../asset/image/slider6.jpg";
import slider7 from "../../asset/image/slider7.jpg";
import slider8 from "../../asset/image/slider8.jpg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { trailerMovie } from "../../data/Data";
import BuyFastTicket from "../BuyFastTicket/BuyFastTicket";




function Slider() {

   const [number,setNumber] = useState(1)


   const handlePlay = (number: number) =>{
        const container = document.querySelector('.container') as HTMLDivElement;
        const modal = document.querySelector('.modal') as HTMLDivElement;
        const modal2 = document.querySelector('.modal2') as HTMLDivElement;
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
        container.style.top = "50%"
        // container.style.display = "block";
        
        // console.log(container.offsetWidth);
        // if(container.offsetWidth  >= 768 && container.offsetWidth <= 1024){
        //   modal2.style.display = 'block';
        //   container.style.top = "50%"

        // }
        setNumber(number)
   } 



  return (
    <div className="slider">
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        autoplay={{
          delay: 8000,
          reverseDirection: false,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider4} alt="" />
            <div className="play-btn" onClick={()=>{handlePlay(1)}}>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider5} alt="" />
            <div className="play-btn" onClick={()=>{handlePlay(2)}}>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider6} alt="" />
            <div className="play-btn" onClick={()=>{handlePlay(4)}}>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider7} alt="" />
            <div className="play-btn" onClick={()=>{handlePlay(3)}}>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <img src={slider8} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="container">
        <VideoPlayer id={number} datas={trailerMovie} />
      </div>
      <div className="fast-ticket">
        <BuyFastTicket />
      </div>
      <div className="modal"></div>
    </div>
  );
}

export default Slider;
