import React from 'react';
import {
    FiInstagram, FiYoutube, FiTwitter, FiLinkedin,
    FiFacebook, FiMail, FiPhone
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
    const navigate = useNavigate();

    const leafVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const socialLinks = [
        { icon: <FiInstagram size={36} />, url: 'https://www.instagram.com/hirvankur_foundation_nsk?igsh=MXBid3l4aXhkdmEyNw==', color: '#E1306C', label: 'Instagram' },
        { icon: <FiYoutube size={36} />, url: 'https://www.youtube.com/@hirvankurfoundationnashiki4930', color: '#FF0000', label: 'YouTube' },
     
        { icon: <FiLinkedin size={36} />, url: '#', color: '#0077B5', label: 'LinkedIn' },
        { icon: <FiFacebook size={36} />, url: 'https://www.facebook.com/share/1Cgcy5PpZM/', color: '#1877F2', label: 'Facebook' }
    ];

    const footerLinks = [
        {
            title: "Our Initiatives",
            titleLink: "/events",
            links: [
                { name: "Tree Plantation" },
                { name: "Seed Distribution" },
                { name: "Eco Education" },
                { name: "Forest Conservation" },
                { name: "Urban Greening" }
            ]
        }
    ];

    const handleSectionClick = (url) => {
        navigate(url);
        window.scrollTo(0, 0); // Optional scroll to top
    };

    return (
        <footer className="footer-container">
            <div className="leaf-background">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="leaf"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${Math.random() * 20 + 10}px`,
                            rotate: `${Math.random() * 360}deg`
                        }}
                        variants={leafVariants}
                        animate="animate"
                    >
                        {i % 3 === 0 ? '🍃' : i % 3 === 1 ? '🌿' : '🍀'}
                    </motion.div>
                ))}
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <motion.div
                        className="logo-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="logo">Hirvankur</div>
                        <div className="tagline">Nature Conservation NGO</div>
                    </motion.div>

                    <motion.p
                        className="mission"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <b>  Dedicated to restoring Earth's green cover through sustainable plantation
                        initiatives and environmental education.</b>
                    </motion.p>

                    <div className="social-container">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                aria-label={social.label}
                                className="social-icon"
                                style={{ color: social.color }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.1 * index,
                                    type: "spring",
                                    stiffness: 300
                                }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="links-container  "  style={{fontWeight: 'bold'}}>
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={index}
                            className="links-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <h4
                                onClick={() => handleSectionClick(section.titleLink)}
                                style={{ cursor: 'pointer' }}
                            >
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={linkIndex}
                                        onClick={() => handleSectionClick(section.titleLink)}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className="link-icon">→</span>
                                        {link.name}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="contact-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h4>Contact Us</h4>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FiMail size={24} className="contact-icon" />
                            <span>contact@hirvankur.org</span>
                        </div>
                        <div className="contact-item">
                            <FiPhone size={24} className="contact-icon" />
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="copyright"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="copyright-content">
                    <p>&copy; {new Date().getFullYear()} Hirvankur Environmental Foundation. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                        <span>•</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
