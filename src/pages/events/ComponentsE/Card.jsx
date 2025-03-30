import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import "../ComponentsE/Card.css";

const Card = () => {


    const NGOEvents = [
        {
            title: "Tree Plantation Drive",
            date: "15 August 2024",
            location: "Nashik, Maharashtra",
            description: "Join us in planting 5000+ saplings to create a greener environment. Government-recognized initiative with participant certificates.",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            type: "environment"
        },
        {
            title: "Clean Water Workshop",
            date: "22 September 2024",
            location: "School Partnerships",
            description: "Educating students about water conservation techniques & installing water filters in rural schools.",
            // Updated image URL
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            type: "education"
        },
        {
            title: "Govt. Approved Curriculum Launch",
            date: "5 October 2024",
            location: "Hirvankur HQ",
            description: "Launching our new government-recognized syllabus focusing on environmental education and civic responsibility.",
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            type: "education"
        }
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-5 ngo-title" data-aos="fade-down">
                Hirvankur Events & Initiatives
                <small className="d-block mt-2 subtitle">Government Recognized NGO - Nashik, Maharashtra</small>
            </h2>

            <div className="row g-4">
                {NGOEvents.map((event, index) => (
                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="card event-card h-100 border-0">
                            <div className="image-wrapper">
                                <img
                                    src={event.image}
                                    className="card-img-top"
                                    alt={event.title}
                                />
                                <div className="date-badge">
                                    <span className="bg-primary text-white px-3 py-2">{event.date}</span>
                                </div>
                            </div>

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary mb-3">{event.title}</h5>
                                <p className="text-muted location mb-3">
                                    <i className="fas fa-map-marker-alt me-2"></i>{event.location}
                                </p>
                                <p className="card-text mb-4">{event.description}</p>
                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                    <button className="btn btn-outline-primary btn-sm">
                                        More Details
                                    </button>
                                    <button className="btn btn-gradient btn-sm">
                                        <i className="fas fa-hand-holding-heart me-2"></i>Contribute
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;