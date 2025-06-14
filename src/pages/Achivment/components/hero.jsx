import React, { useEffect, useRef } from 'react';
import { Leaf, Droplets, Users, BookOpen, Book, Tractor, LoaderPinwheel, TreePine } from 'lucide-react';
import Lottie from 'lottie-react';
import leafAnimation from '../assets/leafanimation.json';

import { gsap } from 'gsap';
import { Loader } from 'react-feather';
const stats = [
    {
        icon: <BookOpen className="text-black" style={{ height: "3rem", width: "3rem", border: "none" }} />,
        title: "Students Reached",
        value: "1.5 Million",
        description: ' With the concept of "विद्यार्थी दशेतून हरितसंस्कार" ("Green Impressions through Student Age"), we have connected 3,000 schools and over 15 lakh (1.5 million) students, building a revolutionary movement.',
        bgImage: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        icon: <TreePine className="text-success" style={{ height: "3rem", width: "3rem", border: "none" }} />,
        title: "Trees Planted",
        value: "5.4 lakh",
        description: '5.4 lakh (540,000) trees with the "Balak Palak" initiative.',
        bgImage: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        icon: <LoaderPinwheel className="text-secondary" style={{ height: "3rem", width: "3rem", border: "none" }} />,
        title: "Seed Ball Making",
        value: "1.8 lakh",
        description: "1.8 lakh (180,000) seed balls created and distributed.",
        bgImage: "https://images.pexels.com/photos/41959/food-grains-bread-wheat-cereals-41959.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        icon: <Tractor className="text-warning" style={{ height: "3rem", width: "3rem", border: "none" }} />,
        title: "Organic Farming",
        value: "50,000+",
        description: 'विषमुक्त शेती"  Organic Conversion of Land: 350+ acres (141,6401 sq. mt) converted to organic farming.',
        bgImage: "https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        icon: <Leaf className="text-success" style={{ height: "3rem", width: "3rem", border: "none" }} />,
        title: "Tree Adoption",
        value: "31+ Courts",

        description: '"Tree Adoption" initiative has successfully connected 31+ courts, 100+ judges in Maharashtra, & thousands of lawyers with citizens, fostering a sense of community and environmental responsibility."',
        bgImage: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        icon: <Droplets className="text-primary" style={{ height: "3rem", width: "3rem", border: "none" }} />,
        title: "Jal Mandir",
        value: "1.6 Crore+",
        description: '"Jal Mandir" (Percolation Pits): 35+ pits constructed for water conservation. So Catch The Rain now 1.6 crore (16 million) liters of water saved per year."',
        bgImage: "https://images.pexels.com/photos/66346/pexels-photo-66346.jpeg?auto=compress&cs=tinysrgb&w=600",
    },



];
export default function Hero() {

    const lottieRef = useRef(null);
    useEffect(() => {
        // GSAP animation for the title
        gsap.fromTo(
            ".hero-title span",
            { y: 50, opacity: 0 }, // Start position
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" } // End position
        );

        if (lottieRef.current) {
            // Auto-play is enabled by default, but you can control it:
            //  lottieRef.current.play();
        }
    }, []);

    return (
        <div className="bg-brown py-5 hero-section">
            <div className="container py-5">
                <div className="text-center mb-5 position-relative">
                    {/* Lottie animation positioned as decorative element */}
                    <div className="position-absolute" style={{ top: '-30px', right: '10%', width: '120px', zIndex: 1 }}>
                        <Lottie
                            animationData={leafAnimation}
                            loop={true}
                            ref={lottieRef}
                        />
                    </div>

                    <h1 className="display-4 fw-bold hero-title mt-5">
                        <span className="d-block">Transforming Lives,</span>
                        <span className="d-block text-success">Preserving Nature</span>
                    </h1>
                    <p className="lead text-muted mt-4 mb-5 hero-subtitle">
                        The Hirvankur Foundation's journey of environmental stewardship and community empowerment
                    </p>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4 mt-5 mb-4">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, title, value, description, bgImage }) {
    return (
        <div className="col">
            <div
                className="card h-100 position-relative shadow-sm stat-card-hover"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    overflow: "hidden"
                }}
            >
                <div className="p-4">
                    <div
                        className="position-absolute p-3"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "0.2rem",
                            opacity: 0.8,
                            top: "100px",
                            right: "10px",
                        }}
                    >
                        {icon}
                    </div>
                    <p className="fw-bold fs-5">{title}</p>
                    <h2 className="fw-bold">{value}</h2>

                    {/* Description will be hidden by default and shown on hover */}
                    <div className="description-overlay">
                        <p className="fw-bold description-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}