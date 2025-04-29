import React, { useState, useEffect } from 'react';
import '../styles/Layout.css';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from "../assets/sample1.jpg";
import image2 from "../assets/sample2.jpg";
import image3 from "../assets/sample3.jpeg";
import image4 from "../assets/sample4.jpg";
import image5 from "../assets/sample5.jpeg";

const content1 = "From Early Childhood Education to Elementary Education, Pratham identifies education-related gaps and opportunities in each segment and develops context-based solutions. We collaborate with children, schools, families, families, and communities through direct programs and government partnerships.";
const content2 = "Content for the second slide. This describes another initiative or program.";
const content3 = "Content for the third slide. Details about a different campaign or project.";
const content4 = "Content for the fourth slide. Information on the fourth program.";

const slideData = [
    { image: image1, heading: "Our Programs", content: content1, link: "/education" },
    { image: image2, heading: "Program Two", content: content2, link: "/program-two" },
    { image: image3, heading: "Program Three", content: content3, link: "/program-three" },
    { image: image4, heading: "Program Four", content: content4, link: "/program-four" },
];

const programsData = [
    { title: 'Second Chance', image: image1, link: '/second-chance' },
    { title: 'Vocational Training', image: image2, link: '/vocational-training' },
    { title: 'Annual Status of Education Report', image: image3, link: '/aser-report' },
    { title: 'Pratham Council For Vulnerable Children', image: image4, link: '/vulnerable-children' },
];

const Layout = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = slideData[currentSlide];

    const leftImageAnimationProps = isMounted ? {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeInOut" },
        viewport: { once: true },
    } : {};

    const rightHeadingAnimationProps = isMounted ? {
        initial: { y: -30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
        viewport: { once: true },
    } : {};

    const rightOverviewAnimationProps = isMounted ? {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.4 },
        viewport: { once: true }
    } : {};

    const gridAnimationProps = isMounted ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.6 },
        viewport: { once: true },
    } : {};

    const cardAnimationProps = (index) =>
        isMounted
            ? {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.4, delay: index * 0.15 },
                viewport: { once: true },
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
            }
            : {};

    return (
        <motion.div
            className="programs-page"
            style={{ backgroundColor: "rgba(144, 240, 251, 0.29)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="programs-container">
                <motion.div className="left-image" {...leftImageAnimationProps}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current.image}
                            src={current.image}
                            alt={current.heading}
                            className="main-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                    </AnimatePresence>
                </motion.div>

                <div className="right-content">
                    <motion.h2 className="programs-heading" {...rightHeadingAnimationProps}  style={{ background: "linear-gradient(90deg,rgb(3, 85, 88) 0%,rgb(71, 83, 242) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",}} >
                        
                        {current.heading}
                    </motion.h2>
                    <motion.div className="education-overview" {...rightOverviewAnimationProps}>
                        <p>{current.content}</p>
                        <motion.a
                            href={current.link}
                            className="read-more-link"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Learn More ›
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div className="programs-grid" {...gridAnimationProps}>
                    {programsData.map((program, index) => (
                        <motion.div
                            key={index}
                            className="program-card"
                            {...cardAnimationProps(index)}
                            onClick={() => window.location.href = program.link}
                        >
                            <img src={program.image} alt={program.title} className="program-card-image" />
                            <div className="program-card-title">{program.title}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Layout;
