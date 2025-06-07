import React, { useEffect, useRef, useState } from 'react';
import { Heart, Sprout, Brain, Droplet } from 'lucide-react';
import achievementsData from '../data/achievementsData.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


gsap.registerPlugin(ScrollTrigger);

export default function Initiatives() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {

        ScrollTrigger.create({
            trigger: headingRef.current,
            start: 'top 80%', // Trigger when the top of the heading reaches 80% of viewport
            onEnter: () => setIsVisible(true),
            onLeaveBack: () => setIsVisible(false), // Reset animation when scrolling back up
        });

        const sections = containerRef.current.querySelectorAll('.initiative-section');



        sections.forEach((section) => {
            const image = section.querySelector('.initiative-image');
            const text = section.querySelector('.initiative-text');

            gsap.fromTo(
                image,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            gsap.fromTo(
                text,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);



    return (
        <div
            className="bg-light py-5"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/1721554/pexels-photo-1721554.jpeg?auto=compress&cs=tinysrgb&w=600')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container py-5 text-white bg-dark bg-opacity-75 rounded-3 p-5" ref={containerRef}>
                <div className="text-center mb-5" ref={headingRef}>
                    <h2 className="fw-bold display-4">
                        {"Our Key Initiatives".split('').map((char, index) => (
                            <span
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `opacity 0.5s ease, transform 0.5s ease`,
                                    transitionDelay: `${index * 0.03}s`,
                                    color: '#B17F59', // Warm gold color
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)' // Optional: adds subtle shadow for better readability
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h2>
                </div>

                <div className="mt-5">
                    {achievementsData.map((initiative, index) => (
                        <div
                            key={initiative.title}
                            className={`row align-items-center g-4 initiative-section ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                        >
                            <div className="col-md-6 initiative-image">
                                {/* Swiper for multiple images */}
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    className="rounded shadow-sm h-100"
                                    style={{ width: "100%" }}
                                >
                                    {initiative.images.map((img, idx) => (
                                        <SwiperSlide key={idx} className="h-100">
                                            <div className="image-container" style={{
                                                width: "100%",
                                                height: "330px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "#f0f0f0" // Light background for empty space
                                            }}>
                                                <img
                                                    src={img}
                                                    alt={`${initiative.title} - ${idx + 1}`}
                                                    className="img-fluid"
                                                    style={{
                                                        maxWidth: "100%",
                                                        maxHeight: "100%",
                                                        objectFit: "contain"
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="col-md-6 initiative-text mt-3 mt-md-0">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <h3 className="h4 fw-bold">{initiative.title}</h3>
                                </div>
                                <p className="text-white fs-5">{initiative.description}</p>
                                {initiative.points && (
                                    <ul className="mt-3 ps-3 text-white fs-5">
                                        {initiative.points.map((point, idx) => (
                                            <li key={idx} className="mb-2">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}