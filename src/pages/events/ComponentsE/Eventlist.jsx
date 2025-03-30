import React, { useState } from 'react';
import "../ComponentsE/eventlist.css";

const Eventlist = () => {
    const maharashtraDistricts = [
        'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik',
        'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur',
        'Ratnagiri', 'Sindhudurg', 'Satara', 'Sangli',
        'Raigad', 'Ahmednagar', 'Latur', 'Jalna', 'Beed'
    ];

    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const events = [
        {
            id: 1,
            title: 'Tree Plantation Drive',
            date: '2023-11-15',
            district: 'Pune',
            category: 'Environment',
            description: 'Join us in planting 5000 saplings across Pune district schools',
            image: 'https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Students planting trees
        },
        {
            id: 2,
            title: 'Water Conservation Workshop',
            date: '2023-11-20',
            district: 'Mumbai',
            category: 'Clean Water',
            description: 'Interactive sessions on water management for school students',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHMlMjB3YXRlciUyMGNvbnNlcnZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D' // Indian students with water model
        },
        {
            id: 3,
            title: 'Eco-Education Seminar',
            date: '2023-11-25',
            district: 'Nagpur',
            category: 'Education',
            description: 'Training teachers on new environmental curriculum',
            image: 'https://images.pexels.com/photos/5211437/pexels-photo-5211437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Teacher training session
        },
        {
            id: 4,
            title: 'River Cleanup Campaign',
            date: '2023-12-01',
            district: 'Nashik',
            category: 'Clean Water',
            description: 'Godavari river cleanup drive with local communities',
            image: 'https://images.pexels.com/photos/4471314/pexels-photo-4471314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // River cleanup activity
        },
        {
            id: 5,
            title: 'School Green Curriculum',
            date: '2023-12-05',
            district: 'Thane',
            category: 'Education',
            description: 'Implementing eco-friendly syllabus in municipal schools',
            image: 'https://images.unsplash.com/photo-1588072432904-843af35f02cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwc2Nob29sfGVufDB8fDB8fHww' // Indian classroom
        }
    ];

    const filteredEvents = events.filter(event =>
        (selectedDistrict === 'All' || event.district === selectedDistrict) &&
        (selectedCategory === 'All' || event.category === selectedCategory)
    );

    return (
        <section className="events-section py-5">
            <div className="container">
                <div className="section-header mb-5 text-center">
                    <h2 className="display-5 fw-bold text-primary mb-3">
                        Our Initiatives & Events
                        <span className="badge bg-success ms-3">Govt. Recognized</span>
                    </h2>
                    <div className="filters row g-3 mt-3">
                        <div className="col-md-6">
                            <select
                                className="form-select"
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                            >
                                <option value="All">All Districts</option>
                                {maharashtraDistricts.map(district => (
                                    <option key={district} value={district}>{district}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <select
                                className="form-select"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="All">All Categories</option>
                                <option value="Education">Education</option>
                                <option value="Environment">Environment</option>
                                <option value="Clean Water">Clean Water</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filteredEvents.map(event => (
                        <div key={event.id} className="col">
                            <div className="card h-100 shadow-lg border-0">
                                <img
                                    src={event.image}
                                    className="card-img-top event-image"
                                    alt={event.title}
                                />
                                <div className="card-body">
                                    <div className="badge bg-warning text-dark mb-2">
                                        {event.category}
                                    </div>
                                    <h5 className="card-title fw-bold">{event.title}</h5>
                                    <p className="card-text">{event.description}</p>
                                    <div className="event-meta mt-auto">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted">
                                                <i className="bi bi-calendar-event me-2"></i>
                                                {new Date(event.date).toLocaleDateString()}
                                            </span>
                                            <span className="badge bg-info">
                                                <i className="bi bi-geo-alt me-2"></i>
                                                {event.district}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="achievement-banner mt-5 p-4 bg-success text-white rounded-3 text-center">
                    <h4 className="mb-3">
                        <i className="bi bi-award-fill me-2"></i>
                        Recipient of Maharashtra Government's "Green Education Award" 2023
                    </h4>
                    <p className="mb-0">
                        Recognized for excellence in environmental education and community service
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Eventlist;