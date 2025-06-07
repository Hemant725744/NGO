import React, { useState, useEffect } from 'react';
import '../styles/Layout.css';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from "../assets/sample1.1.jpeg";
import image2 from "../assets/sample1.2.jpeg";
import image3 from "../assets/sample2.1.jpg";
import image4 from "../assets/sample2.2.jpg";
import image5 from "../assets/sample3.1.jpeg";
import image6 from "../assets/sample3.2.jpeg";
import image7 from "../assets/sample4.1.jpeg";
import image8 from "../assets/sample4.2.jpg";

const content1 = "Our program aims to instill environmental awareness and sustainability principles in students, encouraging eco-friendly practices and responsible citizenship. By empowering young minds with green values, we nurture a generation committed to building a sustainable future.";
const content2 = "Vrukshotsav 2023 is a dynamic and engaging exhibition aimed at educating and inspiring both students and the general public about the importance of environmental conservation and sustainable living. The event offers hands-on learning experiences through a wide range of interactive exhibits covering topics such as the significance of trees, the principles of Ayurveda, biodiversity, cleanliness, and rainwater harvesting.";
const content3 = "Jal Mandir – the Temple of Water – is an initiative dedicated to the conservation and recharge of groundwater through effective rainwater harvesting techniques. By promoting sustainable water management practices, Jal Mandir emphasizes the sacred value of every drop of water. This initiative not only addresses the urgent need for water conservation but also inspires communities to adopt responsible, long-term solutions for ensuring water security and sustainability.";
const content4 = "Vriksha Dattak is a unique initiative that encourages individuals to adopt and care for trees, promoting a deep sense of environmental stewardship and responsibility. Rooted in the belief that a tree is as precious if not more so than a child, this concept fosters love, respect, and long-term commitment to nurturing nature. By empowering people to take personal responsibility for green spaces, Vriksha Dattak contributes to a more sustainable and ecologically aware society.";

const slideData = [
    { image: image1, heading: "Vidyarthi Dashetu Harit Sanskar", content: content1, link: "/education" },
    { image: image3, heading: "Vruksh Utsav 2023", content: content2, link: "/program-two" },
    { image: image5, heading: "Jal Mandir", content: content3, link: "/program-three" },
    { image: image7, heading: "Vruksh Dattak Sankalpana.", content: content4, link: "/program-four" },
];

const programsData = [
    { title: 'Vidyarthi Dashetu Harit Sanskar', image: image2, link: '/second-chance' },
    { title: 'Vruksh Utsav 2023', image: image4, link: '/vocational-training' },
    { title: 'Jal Mandir', image: image6, link: '/aser-report' },
    { title: 'Vruksh Dattak Sankalpana.', image: image8, link: '/vulnerable-children' },
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

            <div className='text-center mb-4'>
                <motion.h1
                    className='fw-bold display-2 mb-5 layout-heading'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Our Event
                </motion.h1>
            </div>

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
                    <motion.h2 className="programs-heading gradient-heading" {...rightHeadingAnimationProps}>
                        {current.heading}
                    </motion.h2>

                    <motion.div className="education-overview" {...rightOverviewAnimationProps}>
                        <p>{current.content}</p>
                    </motion.div>
                </div>

                <motion.div className="programs-grid" {...gridAnimationProps}>
                    {programsData.map((program, index) => (
                        <motion.div
                            key={index}
                            className="program-card"
                            {...cardAnimationProps(index)}
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
