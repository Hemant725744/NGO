// src/components/Event2/Event2.js
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import anime from 'animejs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Event2.css';

// Import images
import Seed1 from "../Event2/Assets/Seed Collection/IMG20210923102935.jpg";
import Seed2 from "../Event2/Assets/Seed Collection/IMG20221029180312.jpg";
import Seed3 from "../Event2/Assets/Seed Collection/IMG20230402094011.jpg"



import Kille1 from "../Event2/Assets/Kille/UDY_8287.JPG";
import Kille2 from "../Event2/Assets/Kille/IMG20211117161911 (1).jpg";
import Kille3  from "../Event2/Assets/Kille/win.JPG"


import Balak1 from "../Event2/Assets/Balak Palak/1.jpg" ; 
import Balak2 from "../Event2/Assets/Balak Palak/14847.jpg" ; 
import Balak3 from "../Event2/Assets/Balak Palak/IMG-20210926-WA0068.jpg"


import Vidyarthi1 from "../Event2/Assets/Vidyarti/IMG-20220917-WA0031.jpg"
import Vidyarthi2 from "../Event2/Assets/Vidyarti/IMG-20220917-WA0036.jpg"
import Vidyarthi3 from "../Event2/Assets/Vidyarti/IMG-20220917-WA0036.jpg"



import Dattak1 from "../Event2/Assets/Dattak/all talukas court part 1.jpg"
import Dattak2 from "../Event2/Assets/Dattak/Hon Judge P B Joshi.jpg"
import Dattak3 from "../Event2/Assets/Dattak/all talukas court part 2.jpg"
import Dattak4 from "../Event2/Assets/Dattak/Hon Judge Y P Marulkar.jpg"








import Vruksh1 from "../Event2/Assets/Vruksha/Vruskha Utsav 2023  (1)_page-0001.jpg"
import Vruksh2 from "../Event2/Assets/Vruksha/Vruskha Utsav 2023  (1)_page-0002.jpg"


import jal1 from "../Event2/Assets/Jal/3.jpeg"
import jal2 from "../Event2/Assets/Jal/5.jpeg"
import jal3 from "../Event2/Assets/Jal/6.jpeg"
import jal4 from "../Event2/Assets/Jal/7.jpeg"



import Seedball1 from "../Event2/Assets/BallSeed/IMG-20211016-WA0011.jpg"
import Seedball2 from "../Event2/Assets/BallSeed/IMG-20211023-WA0119.jpg"
import Seedball3 from "../Event2/Assets/BallSeed/IMG-20211023-WA0122.jpg"
import Seedball4 from "../Event2/Assets/BallSeed/WhatsApp Image 2022-08-07 at 11.20.09 AM (1).jpeg"



import Water1 from "../Event2/Assets/Ranal/Water3.jpg"

import Water2 from "../Event2/Assets/Ranal/WhatsApp Image 2024-06-10 at 7.52.24 PM (1).jpeg"

import Water3 from "../Event2/Assets/Ranal/WhatsApp Image 2024-06-10 at 7.52.25 PM.jpeg";

import Water4 from "../Event2/Assets/Ranal/WhatsApp Image 2024-10-20 at 9.13.34 PM (1).jpeg"

import Water5 from "../Event2/Assets/Ranal/WhatsApp Image 2024-10-20 at 9.13.55 PM.jpeg"


import BackgroundImage from "../Event2/Assets/Background Image/5d31ba71-319b-49ac-8031-2055a707c113.jpeg";

// JSON Configuration Data
const Event2Data = [
    {
        id: 1,
        title: "Balak Palak Initiative",
        date: "2022-03-15",
        location: "Dhule Municipal School",
        district: "Dhule",
        state: "Maharashtra",
        category: "Child Education Program",
        description: "Educational program focusing on digital literacy for underprivileged children in rural areas. The initiative provided tablets and digital learning resources to 200+ students.",
        images: [Balak1, Balak2, Balak3],
        govtRecognized: true,
        recognitionId: "EDU/MAH/2022/056",
        impact: "200+ students | 15 schools covered"
    }

    , {

        id: 2,
        title: "Vidyarthi Dashetun Harith Sanskar",
        category: `environmentl Education Program",
        description: " To instill environmental awareness and sustainability principles in students, promoting eco-friendly practices 
and responsible citizenship.Empowering students with green values to foster a sustainable future`  ,
        images: [Vidyarthi1, Vidyarthi2, Vidyarthi3],

        govtRecognized: true,
        recognitionId: "EDU/NSHK/2023/056",
        impact: "200+ students | 10 schools covered"

    }

    , {
        id: 3,
        title: "Vruksha Utsave 2023",
        date: "2023-05-16",
        location: "Nashik Ozar",
        district: "Nashik",
        state: "Maharashtra",
        category: "Vruksha Utsave",
        description: ` Vrukshotsav 2023 is an exhibition that provides hands-on knowledge to the general public, especially students `,
        images: [Vruksh1, Vruksh2],
        govtRecognized: true,
        recognitionId: "VRU/MAH/2021/089",
        impact: "100+ volunteers | 4000  + Vruksha Utsave"
    },
    {
        id: 4,
        title: "Vruksh Dattak sankalpana",
        date: "2024-11-22",
        location: "Jamner",
        district: "Jalgaon",
        state: "Maharashtra",
        category: "Cultural Art Exhibition",
        description: ` The "Vriksha Dattak" concept aims to create awareness that a tree is more precious than a child, fostering love 
          and appreciation for trees`,
        images: [Dattak1, Dattak2, Dattak3, Dattak4],
        govtRecognized: true,
        recognitionId: "Dattak/MAH/2021/142",
        impact: "22 artisans | 4,000+ visitors"
    },

    {
        id: 5,
        title: "Jal Mandir ",
        date: "2024-08-22",
        location: "khed",
        district: "Pune",
        state: "Maharashtra",
        category: "Cultural Art Exhibition",
        description: `Jal Mandir" aims to conserve and recharge groundwater through rainwater harvesting, promoting sustainable water `,
        images: [jal1, jal2, jal3 , jal4 ,],
        govtRecognized: true,
        recognitionId: "Dattak/MAH/2021/142",
        impact: "22 artisans | 4,000+ visitors"
    },




    {
        id: 6,
        title: " Kille banva kille jagva",
        date: "2022-03-15",
        location: "Dhule Municipal School",
        district: "Dhule",
        state: "Maharashtra",
        category: "Child Education Program",
        description: `We had competition  for making different fort of shivaji maharaj all over Maharashtra in the month of November 2021 
during pandemic`,
        images: [Kille1, Kille2, Kille3],
        govtRecognized: true,
        recognitionId: "EDU/MAH/2022/056",
        impact: "75+ students | 15 schools covered"
    }

    ,
    {
        id: 7,
        title: "Seed Collection",
        date: "2022-03-15",
        location: "Manchar Municipal School",
        district: "pune",
        state: "Maharashtra",
        category: "Child Education Program",
        description: "Educational program focusing on digital literacy for underprivileged children in rural areas. The initiative provided tablets and digital learning resources to 200+ students.",
        images: [Seed1, Seed2, Seed3],
        govtRecognized: true,
        recognitionId: "EDU/MAH/2022/056",
        impact: "200+ students | 15 schools covered"
    }


    ,
    {
        id: 8,
        title: "Seed ball Event ",
        date: "2022-03-15",
        location: "Manchar Municipal School",
        district: "pune",
        state: "Maharashtra",
        category: "Child Education Program",
        description: `A) Transforming barren landscapes into lush green ecosystems, promoting biodiversity, and creating a beautiful 
environment through efficient afforestation.

B) The Seed Balls Event aims to sow seeds of change, greening barren lands and boosting biodiversity.`,
        images: [Seedball1, Seedball2, Seedball3, Seedball4],
        govtRecognized: true,
        recognitionId: "EDU/MAH/2022/056",
        impact: "200+ students | 15 schools covered"
    }


    ,


    {
        id: 8,
        title: "Water Saving Ranala  ",
        date: "2022-03-15",
        location: "Manchar Municipal School",
        district: "pune",
        state: "Maharashtra",
        category: "Child Education Program",
        description: `he project consist of solving the problem of water at Ranala gaon.
We did a geological survey of the land and cleaned the existing pond which was in very bad condition and filled with 
garbage etc. And made changes to the way water was filled in ground through rain water harvesting. 
Even the pond was usable again. This project took 2monts of constant working. 
Now the place has very less problem of water after last year. 
`,
        images: [Water1, Water2, Water3, Water4, Water5],
        govtRecognized: true,
        recognitionId: "EDU/MAH/2022/056",
        impact: "200+ students | 15 schools covered"
    }






];

// All districts of Maharashtra
const maharashtraDistricts = [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana",
    "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna",
    "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded",
    "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad",
    "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha",
    "Washim", "Yavatmal"
];

const Event2 = () => {
    const [filters, setFilters] = useState({
        district: 'All',
        category: 'All',
        govtRecognized: 'All'
    });

    const [filteredEvents, setFilteredEvents] = useState(Event2Data);
    const [typingText, setTypingText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const fullText = "Our Initiatives & Events";
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    // Typing effect animation
    useEffect(() => {
        if (typingIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypingText(prev => prev + fullText[typingIndex]);
                setTypingIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setIsTypingComplete(true);
        }
    }, [typingIndex, fullText]);

    // Apply filters
    useEffect(() => {
        let result = Event2Data;

        if (filters.district !== 'All') {
            result = result.filter(event => event.district === filters.district);
        }

        if (filters.category !== 'All') {
            result = result.filter(event => event.category === filters.category);
        }

        if (filters.govtRecognized !== 'All') {
            const isGovtRecognized = filters.govtRecognized === 'Yes';
            result = result.filter(event => event.govtRecognized === isGovtRecognized);
        }

        setFilteredEvents(result);
    }, [filters]);

    // Anime.js animations
    useEffect(() => {
        if (isTypingComplete) {
            // Title animation
            anime({
                targets: titleRef.current,
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo'
            });

            // Filter animations
            anime({
                targets: '.filter-item',
                translateY: [30, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
                duration: 800,
                easing: 'easeOutExpo'
            });
        }
    }, [isTypingComplete]);

    // Card animations when filtered
    useEffect(() => {
        if (containerRef.current) {
            anime({
                targets: containerRef.current.querySelectorAll('.event-card'),
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(200),
                duration: 800,
                easing: 'easeOutExpo'
            });
        }
    }, [filteredEvents]);

    // Get unique categories for filter options
    const categories = ['All', ...new Set(Event2Data.map(event => event.category))];

    return (
        <div className="event2-container">
            {/* Background Image Container */}
            <div className="background-container">
                <img
                    src={BackgroundImage}
                    alt="Eco background"
                    className="background-image"
                />
                <div className="background-overlay"></div>
            </div>

            {/* Eco Stats Banner */}
            <div className="eco-stats-banner">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center gap-4 gap-lg-5">
                        <div className="eco-stat">
                            <div className="stat-number">15,000+</div>
                            <div className="stat-label">Seeds Collected</div>
                        </div>
                        <div className="eco-stat">
                            <div className="stat-number">10,000+</div>
                            <div className="stat-label">Trees Planted</div>
                        </div>
                        <div className="eco-stat">
                            <div className="stat-number">25,000+</div>
                            <div className="stat-label">Lives Impacted</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container position-relative content-wrapper">
                {/* Continuous typing effect title */}
                <div className="text-center mb-5 pt-4">
                    <h1
                        ref={titleRef}
                        className="typing-effect display-4 fw-bold"
                        style={{
                            minHeight: '3rem',
                            opacity: 0,
                            transform: 'scale(0.9)'
                        }}
                    >
                        {typingText}
                        <span className={`blinking-cursor ${isTypingComplete ? 'fade-out' : ''}`}>|</span>
                    </h1>
                    {isTypingComplete && (
                        <div className="fade-in mt-3">
                            <p className="lead text-muted">Government Recognized Initiatives Making Real Impact</p>
                        </div>
                    )}
                </div>

                {/* Filter Section */}
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-4 mb-3 filter-item" style={{ opacity: 0 }}>
                        <div className="input-group glassmorphism-filter">
                            <span className="input-group-text bg-eco-green text-white">
                                <i className="bi bi-geo-alt"></i>
                            </span>
                            <select
                                className="form-select border-start-0 border-eco-green shadow-sm"
                                value={filters.district}
                                onChange={e => setFilters({ ...filters, district: e.target.value })}
                            >
                                <option value="All">All Districts</option>
                                {maharashtraDistricts.map(district => (
                                    <option key={district} value={district}>
                                        {district}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 filter-item" style={{ opacity: 0 }}>
                        <div className="input-group glassmorphism-filter">
                            <span className="input-group-text bg-eco-green text-white">
                                <i className="bi bi-tag"></i>
                            </span>
                            <select
                                className="form-select border-start-0 border-eco-green shadow-sm"
                                value={filters.category}
                                onChange={e => setFilters({ ...filters, category: e.target.value })}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'All' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 filter-item" style={{ opacity: 0 }}>
                        <div className="input-group glassmorphism-filter">
                            <span className="input-group-text bg-eco-green text-white">
                                <i className="bi bi-award"></i>
                            </span>
                            <select
                                className="form-select border-start-0 border-eco-green shadow-sm"
                                value={filters.govtRecognized}
                                onChange={e => setFilters({ ...filters, govtRecognized: e.target.value })}
                            >
                                <option value="All">All Recognition Status</option>
                                <option value="Yes">Government Recognized</option>
                                <option value="No">Not Recognized</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Display filtered events */}
                <div ref={containerRef}>
                    {filteredEvents.length > 0 ? (
                        <div className="row g-4">
                            {filteredEvents.map(event => (
                                <div className="col-lg-6" key={event.id}>
                                    <EventSection data={event} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5 fade-in">
                            <div className="no-results-placeholder glassmorphism-card">
                                <i className="bi bi-search display-1 text-eco-green mb-3"></i>
                                <h3 className="mb-3">No events match your criteria</h3>
                                <button
                                    className="btn btn-eco-green mt-2 pulse px-4 py-2"
                                    onClick={() => setFilters({
                                        district: 'All',
                                        category: 'All',
                                        govtRecognized: 'All'
                                    })}
                                >
                                    <i className="bi bi-arrow-clockwise me-2"></i>
                                    Reset Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Reusable Event Section Component
const EventSection = ({ data }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            anime({
                targets: cardRef.current,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutExpo'
            });
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className="card h-100 shadow-lg overflow-hidden event-card glassmorphism-card"
            style={{
                opacity: 0,
                transform: 'translateY(50px)',
                border: 'none',
                borderRadius: '12px'
            }}
        >
            <div className="card-header py-3 event-card-header">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <h2 className="mb-0 fw-bold fs-3">{data.title}</h2>
                        {data.govtRecognized && (
                            <span className="badge bg-govt mt-2">
                                <i className="bi bi-award-fill me-1"></i> Govt. Recognized
                            </span>
                        )}
                    </div>
                    <div className="d-flex gap-2 mt-2 mt-md-0">
                        <span className="badge bg-category">
                            <i className="bi bi-tag me-1"></i> {data.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="badge bg-light text-dark border">
                        <i className="bi bi-calendar me-1"></i> {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="badge bg-light text-dark border">
                        <i className="bi bi-geo-alt me-1"></i> {data.location}
                    </span>
                    <span className="badge bg-light text-dark border">
                        <i className="bi bi-pin-map me-1"></i> {data.district} District
                    </span>
                    {data.govtRecognized && (
                        <span className="badge bg-light text-dark border">
                            <i className="bi bi-file-earmark-text me-1"></i> ID: {data.recognitionId}
                        </span>
                    )}
                </div>

                <p className="mb-4">{data.description}</p>

                {data.impact && (
                    <div className="impact-badge mb-4">
                        <i className="bi bi-graph-up me-2"></i> {data.impact}
                    </div>
                )}

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    className="event-swiper rounded-3"
                >
                    {data.images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-image-container">
                                <img
                                    src={img}
                                    alt={`${data.title} ${index + 1}`}
                                    className="img-fluid w-100 h-100 object-fit-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentNode.innerHTML = '<div class="d-flex align-items-center justify-content-center bg-light border w-100 h-100"><i class="bi bi-image text-muted fs-1"></i></div>';
                                    }}
                                />
                            </div>
                            <div className="text-center mt-2 text-muted small">
                                <i className="bi bi-image me-1"></i> Image {index + 1} | {data.title}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="card-footer bg-white border-0 pt-0">
                <button className="btn btn-outline-eco-green w-100 py-2 hover-grow">
                    <i className="bi bi-info-circle me-2"></i> View Details
                </button>
            </div>
        </div>
    );
};

export default Event2;