import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';

import {Cars} from "../mockData/mockData";

export default function CarouselSearch() {

    const images=[{photo:Cars[0].photo, id: "0"},{photo:Cars[1].photo, id: "1"},{photo:Cars[2].photo, id: "2"}, {photo:Cars[3].photo, id: "3"}, {photo:Cars[4].photo, id: "4"}];

    return (
        <div>
            <h1 className="header">Os mais visitados</h1>
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
                            <h1 className="card-title">{Cars[images[category].id].brand}</h1>
                            <h2 className="card-subtitle">{Cars[images[category].id].model}</h2>
                           <p style={{paddingRight:"20px"}}>MOtor</p>
                            <button className="card-btn" style={{paddingRight:"20px"}}>VER MODELO</button>
                        </div>
                    </SwiperSlide>
                  </>
            ))}

            
            
            <div className="slider-controller">
                <div className="swiper-button-prev slide slide-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slide slide-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div> 
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
        </div>
);
}