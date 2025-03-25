import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../ComponentsE/Swipper.css";
import IM1 from "../assets/images (1).jpeg"
import IM2 from "../assets/images (2).jpeg"

import IM3 from "../assets/images (3).jpeg"
import IM4 from "../assets/images.jpeg"

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Swipper() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                loop={true}
                slidesPerView={'auto'}
            >
                {[IM1, IM2, IM3, IM4].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <img src={img} alt={`Event ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}