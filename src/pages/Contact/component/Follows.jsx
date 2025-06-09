import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Follows = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const iconsRef = useRef([]);
    const socialCardsRef = useRef([]);

    // Initialize ref arrays properly
    iconsRef.current = [];
    socialCardsRef.current = [];

    // Use layout effect to ensure DOM is ready
    useLayoutEffect(() => {
        // Create a context for GSAP animations
        let ctx = gsap.context(() => {
            // Container animation
            gsap.from(containerRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            // Title animation
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out"
            });

            // Subtitle animation
            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out"
            });

            // Icons animation
            socialCardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.from(card, {
                    opacity: 0,
                    y: 40,
                    scale: 0.9,
                    duration: 0.7,
                    delay: 0.5 + (index * 0.15),
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, containerRef); // Scope selector

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();

        return () => ctx.revert(); // Cleanup
    }, []);

    const handleHover = (index, isHover) => {
        if (!iconsRef.current[index] || !socialCardsRef.current[index]) return;
        
        gsap.to(iconsRef.current[index], {
            y: isHover ? -10 : 0,
            scale: isHover ? 1.15 : 1,
            duration: 0.3,
            ease: "power2.out"
        });

        const nameElement = socialCardsRef.current[index].querySelector('.social-name');
        if (nameElement) {
            gsap.to(nameElement, {
                y: isHover ? -3 : 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }

        gsap.to(socialCardsRef.current[index].querySelector('.icon'), {
            color: isHover ? socialMedia[index].hoverColor : socialMedia[index].color,
            duration: 0.3,
            ease: "power2.out"
        });
        
        // Card hover effect
        gsap.to(socialCardsRef.current[index], {
            y: isHover ? -10 : 0,
            boxShadow: isHover 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)' 
                : '0 4px 20px rgba(0, 0, 0, 0.05)',
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const socialMedia = [
        {
            icon: <FaInstagram className="icon" />,
            name: 'Instagram',
            color: '#c13584',
            hoverColor: '#e1306c',
            url: '#'
        },
        {
            icon: <FaYoutube className="icon" />,
            name: 'YouTube',
            color: '#cd201f',
            hoverColor: '#ff0000',
            url: '#'
        },
        {
            icon: <FaTwitter className="icon" />,
            name: 'Twitter',
            color: '#1da1f2',
            hoverColor: '#1da1f2',
            url: '#'
        },
        {
            icon: <FaLinkedin className="icon" />,
            name: 'LinkedIn',
            color: '#0077b5',
            hoverColor: '#00a0dc',
            url: '#'
        },
    ];

    return (
        <section 
            className="follows-section py-5" 
            ref={containerRef} 
            style={styles.section}
        >
            <div className="container">
                <h2
                    className="section-title text-center mb-4 fw-bold"
                    ref={titleRef}
                    style={styles.title}
                >
                    Connect With Us
                    <span style={styles.titleUnderline}></span>
                </h2>
                <p
                    className="section-subtitle text-center mb-5"
                    ref={subtitleRef}
                    style={styles.subtitle}
                >
                    Join our growing community and stay updated with the latest news
                </p>

                <div className="row justify-content-center g-4 g-lg-5">
                    {socialMedia.map((item, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card d-flex flex-column align-items-center text-decoration-none"
                                ref={el => socialCardsRef.current[index] = el}
                                onMouseEnter={() => handleHover(index, true)}
                                onMouseLeave={() => handleHover(index, false)}
                                style={styles.socialCard}
                            >
                                <div
                                    className="mb-3"
                                    ref={el => iconsRef.current[index] = el}
                                >
                                    {React.cloneElement(item.icon, {
                                        style: {
                                            ...styles.icon,
                                            color: item.color
                                        }
                                    })}
                                </div>
                                <span className="social-name fw-medium" style={styles.socialName}>
                                    {item.name}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Inline styles for this component */}
            <style jsx>{`
                .follows-section {
                    position: relative;
                    overflow: hidden;
                }
                
                .social-card {
                    transition: all 0.3s ease;
                }
                
                .social-card:hover .social-name {
                    color: #27ae60;
                }
                
                @media (min-width: 768px) {
                    .follows-section .section-title {
                        font-size: 3.5rem !important;
                    }
                    
                    .follows-section .section-subtitle {
                        font-size: 1.3rem !important;
                    }
                    
                    .follows-section .icon {
                        font-size: 4.5rem !important;
                    }
                    
                    .follows-section .social-name {
                        font-size: 1.3rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .follows-section .section-title {
                        font-size: 2.3rem !important;
                    }
                    
                    .follows-section .icon {
                        font-size: 3rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

// Inline styles remain the same as before
const styles = {
    section: {
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        padding: '5rem 0',
    },
    title: {
        fontSize: '2.8rem',
        color: '#2d3748',
        position: 'relative',
        fontWeight: '700',
        marginBottom: '1.5rem',
        display: 'inline-block',
    },
    titleUnderline: {
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #27ae60, #2ecc71)',
        borderRadius: '4px'
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#718096',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: '1.6',
    },
    icon: {
        fontSize: '3.5rem',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    },
    socialCard: {
        padding: '1.5rem 1rem',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
    },
    socialName: {
        fontSize: '1.15rem',
        fontWeight: '500',
        color: '#4a5568',
        transition: 'all 0.3s ease',
        position: 'relative',
        letterSpacing: '0.5px',
    }
};




export default Follows;