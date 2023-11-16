import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';

import {Cars} from "../mockData/mockData";
import slide_img from "../assets/model.jpg";

export default function CarouselSearch() {

    const images=[{photo:slide_img, id: "0"},{photo:slide_img, id: "1"},{photo:slide_img, id: "2"}, {photo:slide_img, id: "3"}];

    return (
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        direction='horizontal'
        effect = {'coverflow'}
        grabCursor = {true}
        centeredSlides = {true}
        loop = {true}
        spaceBetween={-100}
        slidesPerView = {2}
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
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        >

            {Object.keys(images).map((category) => (
                    <>
                    <SwiperSlide className='images'>
                        <img src={images[category].photo} alt="slide_image"/>
                        <div className="carousel_hoaver">
                            <h1 className="card-title">Teste</h1>
                            <p>teste de texto e ver</p>
                            <button className="card-btn">Ver modelo</button>
                        </div>
                    </SwiperSlide>
                  </>
            ))}

            
            
            <div className="slider_controller">
                <div className="swiper_button_prev slide slide_arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper_button_next slide slide_arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div> 
            </div>
        </Swiper>
);
}