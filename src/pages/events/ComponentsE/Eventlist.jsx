import React, { useState, useEffect, useMemo } from "react";
import anime from "animejs";
import "../ComponentsE/eventlist.css";
import IM1 from "../assets/equalstock-XsFx-4FX5gY-unsplash (2).jpg";
import IM2 from "../assets/nayan-gavli-BeQDYGrOo_g-unsplash.jpg";
import IM3 from "../assets/IMG-20210613-WA0277.jpg";
import Tree from "../assets/Tree.jpg";
import Court from "../assets/Court.jpg";
import BG from "../assets/5d31ba71-319b-49ac-8031-2055a707c113.jpeg";
// import './fonts.css'; // Removed import for Google Fonts

const Eventlist = () => {
    const maharashtraDistricts = [
        "Mumbai", "Pune", "Nagpur", "Thane", "Nashik",
        "Aurangabad", "Solapur", "Amravati", "Kolhapur",
        "Ratnagiri", "Sindhudurg", "Satara", "Sangli",
        "Raigad", "Ahmednagar", "Latur", "Jalna", "Beed"
    ];

    const [selectedDistrict, setSelectedDistrict] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedEventDetails, setSelectedEventDetails] = useState(null);

    const events = useMemo(() => [
        {
            id: 1,
            title: "Indian Air force Borgad",
            date: "2024-11-01",
            location: "Nashik, Maharashtra",
            district: "Nashik",
            category: "Environment",
            description: "Massive cleanup drive targeting plastic waste in the Government-supported initiative.",
            image: IM3
        },
        {
            id: 2,
            title: "Tree Plantation Drive",
            date: "2024-08-15",
            location: "Nashik, Maharashtra",
            district: "Nashik",
            category: "Environment",
            description: "Join us in planting 5000+ saplings to create a greener environment. Government-recognized initiative with participant certificates.",
            image: Tree
        },
        {
            id: 3,
            title: "Tree Plantation ",
            date: "2024-09-22",
            location: "Pune, Maharashtra",
            district: "Pune",
            category: "Clean Water",
            description: "Educating students about water conservation techniques & installing water filters in rural schools.",
            image: Court
        },
        {
            id: 4,
            title: "Govt. Approved Curriculum Launch",
            date: "2024-10-05",
            location: "Mumbai, Maharashtra",
            district: "Mumbai",
            category: "Education",
            description: "Launching our new government-recognized syllabus focusing on environmental education and civic responsibility.",
            image: IM2
        },
        {
            id: 5,
            title: "Godavari River Cleanup",
            date: "2024-11-01",
            location: "Nashik, Maharashtra",
            district: "Nashik",
            category: "Environment",
            description: "Massive cleanup drive targeting plastic waste in the Godavari river. Government-supported initiative.",
            image: IM1
        },



        {
            id: 6,
            title: "Educational",
            date: "2024-11-01",
            location: "Nashik, Maharashtra",
            district: "dhule",
            category: "Environment",
            description: "Massive cleanup drive targeting plastic waste in the Godavari river. Government-supported initiative.",
            image: IM1
        }
    ], []);

    useEffect(() => {
        anime({
            targets: '.event-card-wrapper',
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.9, 1],
            duration: 1000,
            easing: 'easeOutElastic(1, .5)',
            delay: anime.stagger(100)
        });

        anime({
            targets: '.section-header',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo'
        });
    }, []);

    const handleImageHover = (e) => {
        anime({
            targets: e.currentTarget,
            scale: 1.05,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    };

    const handleImageLeave = (e) => {
        anime({
            targets: e.currentTarget,
            scale: 1,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    };

    const handleCardClick = (event) => {
        setSelectedEventDetails(event);
        anime({
            targets: '.event-details-modal',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 500,
            easing: 'easeOutQuad',
            display: 'block'
        });
    };

    const closeEventDetails = () => {
        anime({
            targets: '.event-details-modal',
            opacity: [1, 0],
            translateY: [0, 50],
            duration: 500,
            easing: 'easeOutQuad',
            complete: () => setSelectedEventDetails(null)
        });
    };

    const filteredEvents = useMemo(() =>
        events.filter(event =>
            (selectedDistrict === "All" || event.district === selectedDistrict) &&
            (selectedCategory === "All" || event.category === selectedCategory)
        ),
        [selectedDistrict, selectedCategory, events]
    );

    return (
        <section className="events-section py-5" aria-label="Upcoming Events" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
                <div className="section-header mb-5 text-center">
                    <h1 className="fw-bold text-success mb-3 header-font">
                        Our Initiatives & Events
                        <sup className="badge bg-success ms-2 government-badge">Government Recognized</sup>
                    </h1>

                    <div className="filters row g-3 mt-3 justify-content-center">
                        <div className="col-md-4">
                            <select
                                id="district-filter"
                                className="form-select filter-font"
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                                value={selectedDistrict}
                            >
                                <option value="All">All Districts</option>
                                {maharashtraDistricts.map((district) => (
                                    <option key={district} value={district} className="filter-font">
                                        {district}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select
                                id="category-filter"
                                className="form-select filter-font"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                value={selectedCategory}
                            >
                                <option value="All">All Categories</option>
                                <option value="Education" className="filter-font">Education</option>
                                <option value="Environment" className="filter-font">Environment</option>
                                <option value="Clean Water" className="filter-font">Clean Water</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 equal-height-cards">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="col">
                            <article className="card h-100 shadow-lg border-0 event-card-wrapper overflow-hidden" onClick={() => handleCardClick(event)}>
                                <figure className="image-container m-0">
                                    <img
                                        src={event.image}
                                        className="card-img-top event-image"
                                        alt={`Visual representation of ${event.title}`}
                                        onMouseEnter={handleImageHover}
                                        onMouseLeave={handleImageLeave}
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="card-body d-flex flex-column">
                                    <span className="badge bg-success text-white mb-2 category-badge" style={{ height: '25px', lineHeight: '18px' }}>
                                        {event.category}
                                    </span>
                                    <h2 className="card-title h5 fw-bold card-title-font">{event.title}</h2>
                                    <p className="card-text flex-grow-1 card-text-font">{event.description}</p>
                                    <div className="event-meta mt-3 meta-font">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <time className="text-muted" dateTime={event.date}>
                                                <i className="bi bi-calendar-event me-2"></i>
                                                {new Date(event.date).toLocaleDateString('en-IN')}
                                            </time>
                                            <span className="badge bg-info meta-badge">
                                                <i className="bi bi-geo-alt me-2"></i>
                                                {event.district}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="achievement-banner mt-5 p-4 bg-success text-white rounded-3 text-center banner-font">
                    <h2 className="h4 mb-3">
                        <i className="bi bi-award-fill me-2" aria-hidden="true"></i>
                        Recipient of Maharashtra Government's "Green Education Award" 2023
                    </h2>
                    <p className="mb-0">
                        Recognized for excellence in environmental education and community service
                    </p>
                </div>
            </div>
            {selectedEventDetails && (
                <div className="event-details-modal">
                    <div className="modal-content modal-font">
                        <span className="close-btn" onClick={closeEventDetails}>&times;</span>
                        <img src={selectedEventDetails.image} alt={selectedEventDetails.title} className="modal-image" />
                        <h2 className="modal-title-font">{selectedEventDetails.title}</h2>
                        <p className="modal-date meta-font"><i className="bi bi-calendar-event me-2"></i>{new Date(selectedEventDetails.date).toLocaleDateString('en-IN')}</p>
                        <p className="modal-location meta-font"><i className="bi bi-geo-alt me-2"></i>{selectedEventDetails.location}</p>
                        <p className="modal-description card-text-font">{selectedEventDetails.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Eventlist;