import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

import slide_img from "../assets/model.jpg";

export default function CarouselSearch() {
    return (
        <div className="container" >
        <Swiper
        direction='horizontal'
        effect = {'coverflow'}
        grabCursor = {true}
        centeredSlides = {true}
        loop = {true}
        slidesPerView = {'auto'}
        coverflowEffect = {
            {
                rotate: 0,
                stretch:0,
                depth:100,
                modifier:2.5  
            }
        }
        pagination={{el:'.swiper-pagination', clickable:true}}
        navigation={
            {
                
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable: true,
            
            }
        }
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        >
            <SwiperSlide className='images'>
                <img src={slide_img} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide className='images'>
                <img src={slide_img} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide className='images'>
                <img src={slide_img} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide className='images'>
                <img src={slide_img} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide className='images'>
                <img src={slide_img} alt="slide_image"/>
            </SwiperSlide>
            <div className="slider_controller">
                <div className="swiper_button_prev slide slide_arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper_button_next slide slide_arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div> 
            </div>
        </Swiper>
    </div>
);
}