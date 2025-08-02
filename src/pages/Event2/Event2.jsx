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
import Kille3 from "../Event2/Assets/Kille/win.JPG"


import Balak1 from "../Event2/Assets/Balak Palak/1.jpg";
import Balak2 from "../Event2/Assets/Balak Palak/14847.jpg";
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
        description: "Educational program focusing on digital literacy for underprivileged children in rural areas. The initiative provided tablets and digital learning resources to 200+ students. Through interactive workshops and hands-on training sessions, we equipped young minds with essential digital skills necessary for the modern world. Our dedicated team of volunteers worked closely with local teachers to ensure sustainable learning outcomes. The program also included career guidance sessions and mentorship opportunities to inspire students towards higher education and professional development.",
        images: [Balak1, Balak2, Balak3],
        govtRecognized: true,
        recognitionId: "EDU/MAH/2022/056",
        impact: "200+ students | 15 schools covered"
    }

    , {

        id: 2,
        title: "Vidyarthi Dashetun Harith Sanskar",
        category: "Environmental Education Program",
        description: "To instill environmental awareness and sustainability principles in students, promoting eco-friendly practices and responsible citizenship. Empowering students with green values to foster a sustainable future. This comprehensive program includes tree plantation drives, waste management workshops, and environmental conservation seminars. Students learn practical skills like composting, recycling, and renewable energy concepts through engaging activities. Our initiative aims to create environmental ambassadors who will lead change in their communities and inspire others to adopt sustainable lifestyles.",
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
        description: "Vrukshotsav 2023 is an exhibition that provides hands-on knowledge to the general public, especially students. This grand celebration of nature featured interactive displays showcasing various tree species, their ecological benefits, and conservation techniques. Participants engaged in seedling preparation workshops, learned about native flora, and participated in mass plantation drives. The event also included cultural performances, environmental awareness campaigns, and expert talks by renowned botanists and environmentalists. Through this initiative, we successfully promoted the importance of forest conservation and sustainable living practices among diverse communities.",
        images: [Vruksh1, Vruksh2],
        govtRecognized: true,
        recognitionId: "VRU/MAH/2021/089",
        impact: "100+ volunteers | 4000+ Vruksha Utsave"
    },
    {
        id: 4,
        title: "Vruksh Dattak sankalpana",
        date: "2024-11-22",
        location: "Jamner",
        district: "Jalgaon",
        state: "Maharashtra",
        category: "Cultural Art Exhibition",
        description: "The 'Vriksha Dattak' concept aims to create awareness that a tree is more precious than a child, fostering love and appreciation for trees. This unique initiative encourages individuals and families to adopt trees as their own children, taking responsibility for their growth and well-being. Participants received training on proper tree care, watering techniques, and protection methods. The program includes regular monitoring visits, community workshops on tree maintenance, and seasonal care guidelines. Through this emotional bonding approach, we have successfully increased tree survival rates and created a network of dedicated tree guardians across multiple communities.",
        images: [Dattak1, Dattak2, Dattak3, Dattak4],
        govtRecognized: true,
        recognitionId: "Dattak/MAH/2021/142",
        impact: "22 artisans | 4,000+ visitors"
    },

    {
        id: 5,
        title: "Jal Mandir",
        date: "2024-08-22",
        location: "Khed",
        district: "Pune",
        state: "Maharashtra",
        category: "Water Conservation",
        description: "Jal Mandir aims to conserve and recharge groundwater through rainwater harvesting, promoting sustainable water management practices. This innovative project involves constructing traditional and modern rainwater harvesting structures in strategic locations. Our team worked with local communities to build check dams, percolation tanks, and recharge wells to maximize water retention during monsoons. The initiative also includes water quality testing, community education programs on water conservation, and maintenance training for local residents. Through scientific approach and community participation, we have successfully improved groundwater levels and ensured water security for rural households.",
        images: [jal1, jal2, jal3, jal4],
        govtRecognized: true,
        recognitionId: "WATER/MAH/2024/089",
        impact: "500+ families | 25 villages benefited"
    },




    {
        id: 6,
        title: "Kille Banva Kille Jagva",
        date: "2022-03-15",
        location: "Dhule Municipal School",
        district: "Dhule",
        state: "Maharashtra",
        category: "Cultural Heritage Program",
        description: "We organized a competition for making different forts of Shivaji Maharaj all over Maharashtra in November 2021 during the pandemic. This unique cultural initiative aimed to preserve our rich Marathi heritage while engaging students in creative learning during challenging times. Participants researched historical facts, architectural details, and strategic importance of various forts before creating detailed models. The competition included virtual presentations, storytelling sessions about Maratha history, and interactive workshops on fort architecture. Through this program, we successfully connected young minds with their cultural roots and inspired pride in Maharashtra's glorious past.",
        images: [Kille1, Kille2, Kille3],
        govtRecognized: true,
        recognitionId: "CULT/MAH/2021/078",
        impact: "75+ students | 15 schools covered"
    }

    ,
    {
        id: 7,
        title: "Seed Collection",
        date: "2022-03-15",
        location: "Manchar Municipal School",
        district: "Pune",
        state: "Maharashtra",
        category: "Environmental Conservation",
        description: "A comprehensive seed collection initiative focused on preserving indigenous plant varieties and promoting biodiversity conservation. This program engaged local communities in identifying, collecting, and storing native seeds for future plantation drives. Participants learned about seed classification, proper storage techniques, and germination testing methods through hands-on workshops. We established community seed banks in multiple villages, providing farmers with access to drought-resistant and locally adapted crop varieties. The initiative also included training sessions on organic farming, sustainable agriculture practices, and the importance of genetic diversity in ensuring food security for future generations.",
        images: [Seed1, Seed2, Seed3],
        govtRecognized: true,
        recognitionId: "ENV/MAH/2022/134",
        impact: "300+ farmers | 50 seed varieties collected"
    }


    ,
    {
        id: 8,
        title: "Seed Ball Event",
        date: "2022-03-15",
        location: "Manchar Municipal School",
        district: "Pune",
        state: "Maharashtra",
        category: "Environmental Restoration",
        description: "A) Transforming barren landscapes into lush green ecosystems, promoting biodiversity, and creating a beautiful environment through efficient afforestation. B) The Seed Balls Event aims to sow seeds of change, greening barren lands and boosting biodiversity. This innovative approach involves creating clay-covered seed balls containing native tree and plant seeds that can survive harsh conditions without human intervention. Volunteers participated in seed ball preparation workshops, learning about soil composition, seed selection, and optimal throwing techniques. The initiative targeted degraded lands, roadside areas, and abandoned plots, where traditional plantation methods are challenging. Through aerial seeding and community distribution, we successfully initiated natural regeneration processes across vast areas.",
        images: [Seedball1, Seedball2, Seedball3, Seedball4],
        govtRecognized: true,
        recognitionId: "FOREST/MAH/2022/089",
        impact: "10,000+ seed balls | 500 acres covered"
    }


    ,


    {
        id: 9,
        title: "Water Saving Ranala",
        date: "2024-06-10",
        location: "Ranala Village",
        district: "Pune",
        state: "Maharashtra",
        category: "Water Conservation Project",
        description: "This comprehensive project addressed the critical water shortage problem at Ranala village through systematic geological surveys and community-driven solutions. We conducted detailed land assessments and cleaned the existing pond which was severely polluted and filled with garbage accumulated over years. Our team implemented innovative rainwater harvesting systems, constructed check dams, and established proper drainage channels to maximize water retention during monsoons. The project involved two months of continuous community engagement, technical implementation, and environmental restoration work. Through collaborative efforts with local residents, we successfully transformed the area's water scenario, ensuring sustainable water availability and significantly reducing the community's water-related challenges for the long term.",
        images: [Water1, Water2, Water3, Water4, Water5],
        govtRecognized: true,
        recognitionId: "WATER/MAH/2024/167",
        impact: "2,000+ villagers | 1 village transformed"
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



            <div className="container-fluid container-md position-relative content-wrapper px-2 px-md-3">
                {/* Background overlay for better text readability */}
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: '1rem',
                    padding: 'clamp(1rem, 3vw, 3rem)',
                    margin: '1rem'
                }}>
                    {/* Continuous typing effect title */}
                    <div className="text-center mb-4 mb-md-5 pt-3 pt-md-4 px-2">
                        <h1
                            ref={titleRef}
                            className="typing-effect display-5 display-md-4 fw-bold text-white"
                            style={{
                                minHeight: '2.5rem',
                                opacity: 0,
                                transform: 'scale(0.9)',
                                color: '#B17F59',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                fontSize: 'clamp(1.5rem, 4vw, 3rem)'
                            }}
                        >
                            {typingText}
                            <span className={`blinking-cursor ${isTypingComplete ? 'fade-out' : ''}`}>|</span>
                        </h1>
                        {isTypingComplete && (
                            <div className="fade-in mt-2 mt-md-3">
                                <p className="lead text-white fs-5 fs-md-4 px-2">Government Recognized Initiatives Making Real Impact</p>
                            </div>
                        )}
                    </div>

                    {/* Filter Section */}
                    <div className="row mb-4 mb-md-5 justify-content-center g-3">
                        <div className="col-12 col-md-4 mb-2 mb-md-3 filter-item" style={{ opacity: 0 }}>
                            <div className="input-group glassmorphism-filter">
                                <span className="input-group-text bg-eco-green text-white d-none d-sm-flex">
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                <select
                                    className="form-select border-start-0 border-eco-green shadow-sm fs-6"
                                    value={filters.district}
                                    onChange={e => setFilters({ ...filters, district: e.target.value })}
                                >
                                    <option value="All">📍 All Districts</option>
                                    {maharashtraDistricts.map(district => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-2 mb-md-3 filter-item" style={{ opacity: 0 }}>
                            <div className="input-group glassmorphism-filter">
                                <span className="input-group-text bg-eco-green text-white d-none d-sm-flex">
                                    <i className="bi bi-tag"></i>
                                </span>
                                <select
                                    className="form-select border-start-0 border-eco-green shadow-sm fs-6"
                                    value={filters.category}
                                    onChange={e => setFilters({ ...filters, category: e.target.value })}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            🏷️ {category === 'All' ? 'All Categories' : category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-2 mb-md-3 filter-item" style={{ opacity: 0 }}>
                            <div className="input-group glassmorphism-filter">
                                <span className="input-group-text bg-eco-green text-white d-none d-sm-flex">
                                    <i className="bi bi-award"></i>
                                </span>
                                <select
                                    className="form-select border-start-0 border-eco-green shadow-sm fs-6"
                                    value={filters.govtRecognized}
                                    onChange={e => setFilters({ ...filters, govtRecognized: e.target.value })}
                                >
                                    <option value="All">🏆 All Recognition Status</option>
                                    <option value="Yes">✅ Government Recognized</option>
                                    <option value="No">❌ Not Recognized</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Display filtered events */}
                    <div ref={containerRef}>
                        {filteredEvents.length > 0 ? (
                            <div className="mt-5">
                                {filteredEvents.map((event, index) => (
                                    <EventSection key={event.id} data={event} index={index} />
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
        </div>
    );
};

// Reusable Event Section Component
const EventSection = ({ data, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            const image = cardRef.current.querySelector('.initiative-image');
            const text = cardRef.current.querySelector('.initiative-text');

            anime({
                targets: image,
                translateX: [index % 2 === 0 ? -50 : 50, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutExpo',
                delay: 200
            });

            anime({
                targets: text,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutExpo',
                delay: 400
            });
        }
    }, [index]);

    return (
        <div
            ref={cardRef}
            className={`row align-items-center g-3 g-md-4 mb-4 mb-md-5 initiative-section ${index % 2 === 0 ? '' : 'flex-md-row-reverse'}`}
            style={{
                padding: 'clamp(1rem, 3vw, 2rem)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                margin: '0 0.5rem'
            }}
        >
            {/* Images column */}
            <div className="col-12 col-md-6 initiative-image">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="rounded shadow-sm h-100"
                    style={{ width: "100%" }}
                >
                    {data.images.map((img, idx) => (
                        <SwiperSlide key={idx} className="h-100">
                            <div className="image-container" style={{
                                width: "100%",
                                height: "clamp(250px, 40vw, 330px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#f0f0f0"
                            }}>
                                <img
                                    src={img}
                                    alt={`${data.title} - ${idx + 1}`}
                                    className="img-fluid"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain"
                                    }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentNode.innerHTML = '<div class="d-flex align-items-center justify-content-center bg-light border w-100 h-100"><i class="bi bi-image text-muted fs-1"></i></div>';
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Information column */}
            <div className="col-12 col-md-6 initiative-text mt-3 mt-md-0">
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 gap-sm-3 mb-3">
                    <h3 className="h5 h-md-4 fw-bold text-dark mb-0" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                        {data.title}
                    </h3>
                    {data.govtRecognized && (
                        <span className="badge bg-success fs-6 px-2 py-1">
                            <i className="bi bi-award-fill me-1"></i>
                            <span className="d-none d-sm-inline">Govt. Recognized</span>
                            <span className="d-inline d-sm-none">Recognized</span>
                        </span>
                    )}
                </div>

                <div className="d-flex flex-wrap gap-1 gap-sm-2 mb-3">
                    {data.date && (
                        <span className="badge bg-light text-dark border fs-6 fs-sm-6 px-2 py-1" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem) !important' }}>
                            <i className="bi bi-calendar me-1"></i>
                            <span className="d-none d-sm-inline">
                                {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="d-inline d-sm-none">
                                {new Date(data.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })}
                            </span>
                        </span>
                    )}
                    {data.location && (
                        <span className="badge bg-light text-dark border fs-6 px-2 py-1" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem) !important' }}>
                            <i className="bi bi-geo-alt me-1"></i>
                            <span className="d-none d-sm-inline">{data.location}</span>
                            <span className="d-inline d-sm-none">{data.location.split(' ')[0]}</span>
                        </span>
                    )}
                    {data.district && (
                        <span className="badge bg-light text-dark border fs-6 px-2 py-1" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem) !important' }}>
                            <i className="bi bi-pin-map me-1"></i> {data.district}
                        </span>
                    )}
                    <span className="badge bg-primary fs-6 px-2 py-1" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem) !important' }}>
                        <i className="bi bi-tag me-1"></i>
                        <span className="d-none d-md-inline">{data.category}</span>
                        <span className="d-inline d-md-none">{data.category.split(' ')[0]}</span>
                    </span>
                </div>

                <p className="text-dark mb-3" style={{
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    lineHeight: '1.6'
                }}>
                    {data.description}
                </p>

                {data.impact && (
                    <div className="alert alert-info d-flex align-items-start p-2 p-sm-3">
                        <i className="bi bi-graph-up me-2 mt-1" style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}></i>
                        <div>
                            <strong style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>Impact: </strong>
                            <span style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>{data.impact}</span>
                        </div>
                    </div>
                )}

                {data.govtRecognized && data.recognitionId && (
                    <div className="mt-2 p-2 bg-light rounded">
                        <small className="text-muted d-block" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                            <i className="bi bi-file-earmark-text me-1"></i>
                            <span className="d-none d-sm-inline">Recognition ID: </span>
                            <span className="d-inline d-sm-none">ID: </span>
                            <strong>{data.recognitionId}</strong>
                        </small>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Event2;