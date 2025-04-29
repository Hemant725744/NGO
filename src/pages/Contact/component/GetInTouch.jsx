import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import anime from 'animejs';
import '../component/GetInTouch.css';

const GetInTouch = () => {
    const containerRef = useRef(null);
    const contactRefs = useRef([]);
    const [typingText, setTypingText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    const texts = ['Connect With Us', 'Get In Touch', 'Contact Our Team'];
    const typingSpeed = 130;
    const deleteSpeed = 80;
    const pauseTime = 1500;

    // Typing animation
    useEffect(() => {
        const handleType = () => {
            const currentText = texts[loopNum % texts.length];
            const updatedText = isDeleting
                ? currentText.substring(0, typingText.length - 1)
                : currentText.substring(0, typingText.length + 1);

            setTypingText(updatedText);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? deleteSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [typingText, isDeleting, loopNum]);

    // GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each contact card individually using refs
            contactRefs.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { autoAlpha: 0, y: 50 },
                    {
                        duration: 1,
                        autoAlpha: 1,
                        y: 0,
                        delay: 0.3 + index * 0.2,
                        ease: "power2.out",
                        immediateRender: false
                    }
                );
            });

            // Animate gradient borders
            gsap.fromTo(".gradient-border",
                { scale: 0.9, autoAlpha: 0 },
                {
                    duration: 1.5,
                    scale: 1,
                    autoAlpha: 1,
                    ease: "elastic.out(1, 0.5)",
                    stagger: 0.2
                }
            );
        }, containerRef);

        // Background animation
        anime({
            targets: '.bg-particle',
            translateX: () => anime.random(-100, 100),
            translateY: () => anime.random(-100, 100),
            scale: () => anime.random(0.5, 2),
            duration: 8000,
            easing: 'easeInOutQuad',
            loop: true,
            delay: anime.stagger(100),
            backgroundColor: () => [
                'rgba(15, 118, 110, 0.1)',
                'rgba(20, 184, 166, 0.15)'
            ]
        });

        return () => ctx.revert();
    }, []);

    const handleLocationClick = () => {
        const address = "1600+Amphitheatre+Parkway,+Mountain+View,+CA";
        window.open(`https://www.google.com/maps/place/${address}`, '_blank');
    };

    const handleHover = (index) => {
        gsap.to(contactRefs.current[index], {
            duration: 0.5,
            y: -8,
            scale: 1.02,
            ease: "power2.out"
        });
    };

    const handleHoverEnd = (index) => {
        gsap.to(contactRefs.current[index], {
            duration: 0.6,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.5)"
        });
    };

    return (
        <Container fluid className="get-in-touch" ref={containerRef}>
            <div className="background-animation">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="bg-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 20 + 10}px`,
                            height: `${Math.random() * 20 + 10}px`
                        }} />
                ))}
            </div>

            <Row className="justify-content-center py-5">
                <Col xs={12} className="text-center mb-5">
                    <h2 className="section-title">
                        <span className="typing-text">{typingText}</span>
                        <span className="blink-cursor">|</span>
                    </h2>
                    <p className="section-subtitle">Let's collaborate and create something extraordinary</p>
                </Col>

                {[0, 1, 2].map((index) => (
                    <Col key={index} xs={12} md={4} className="my-3 position-relative">
                        <div className="gradient-border"></div>
                        <div
                            className="contact-card"
                            ref={el => contactRefs.current[index] = el}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHoverEnd(index)}
                            onClick={index === 2 ? handleLocationClick : null}
                        >
                            {index === 0 && (
                                <div className="contact-content">
                                    <FaPhone className="contact-icon pulse" />
                                    <h3>Phone Support</h3>
                                    <a href="tel:+911234567890" className="contact-info">
                                        +91 12345 67890
                                        <span className="hover-line"></span>
                                    </a>
                                </div>
                            )}
                            {index === 1 && (
                                <div className="contact-content">
                                    <FaEnvelope className="contact-icon float" />
                                    <h3>Email Us</h3>
                                    <a href="mailto:demo@example.com" className="contact-info">
                                        demo@example.com
                                        <span className="hover-line"></span>
                                    </a>
                                </div>
                            )}
                            {index === 2 && (
                                <div className="contact-content">
                                    <div className="map-pin">
                                        <FaMapMarkerAlt className="contact-icon shake" />
                                        <div className="pulse-ring"></div>
                                    </div>
                                    <h3>Our Location</h3>
                                    <div className="contact-info">
                                        Mountain View, CA
                                        <FaExternalLinkAlt className="ms-2 link-icon" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GetInTouch;