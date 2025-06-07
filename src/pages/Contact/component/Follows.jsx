import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import anime from 'animejs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Follows.css';

const Follows = () => {
    const iconsRef = useRef([]);

    useEffect(() => {
        anime({
            targets: iconsRef.current,
            scale: [0, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });
    }, []);

    const handleHover = (index) => {
        anime({
            targets: iconsRef.current[index],
            translateY: -15,
            scale: 1.15,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    };

    const handleHoverEnd = (index) => {
        anime({
            targets: iconsRef.current[index],
            translateY: 0,
            scale: 1,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    };

    const socialMedia = [
        { icon: <FaInstagram />, name: 'Instagram', color: '#E1306C', url: '#' },
        { icon: <FaYoutube />, name: 'YouTube', color: '#FF0000', url: '#' },
        { icon: <FaTwitter />, name: 'Twitter', color: '#1DA1F2', url: '#' },
        { icon: <FaLinkedin />, name: 'LinkedIn', color: '#0077B5', url: '#' }
    ];

    return (
        <div className="follows-container">
            <div className="container py-5">
                <h2 className="section-title text-center mb-5">Connect With Us</h2>
                <div className="row justify-content-center g-4">
                    {socialMedia.map((item, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card d-flex flex-column align-items-center justify-content-center"
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHoverEnd(index)}
                                ref={el => iconsRef.current[index] = el}
                            >
                                <div className="icon-wrapper mb-3" style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <span className="social-name">{item.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Follows;