import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faCode, faBook, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    const footerRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 800,
                        delay: index * 150,
                        easing: 'easeOutExpo'
                    });
                }
            });
        }, { threshold: 0.1 });

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <footer className="footer-glass" ref={footerRef}>
            <div className="footer-gradient"></div>
            <div className="container py-5">
                <div className="row g-5">
                    {/* Academy Section */}
                    <div className="col-md-4" ref={el => sectionsRef.current[0] = el}>
                        <h5 className="footer-heading mb-4">
                            <FontAwesomeIcon icon={faCode} className="me-2" />
                            CodeMasters Academy
                        </h5>
                        <p className="footer-text">
                            Empowering developers through immersive coding education and real-world projects.
                        </p>
                        <div className="social-links mt-4">
                            <a href="https://facebook.com" className="social-icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://github.com" className="social-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://youtube.com" className="social-icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>

                    {/* Learning Paths */}
                    <div className="col-md-2" ref={el => sectionsRef.current[1] = el}>
                        <h5 className="footer-heading mb-4">Learning Paths</h5>
                        <ul className="footer-links">
                            <li><NavLink to="/web-dev">Full-Stack Web</NavLink></li>
                            <li><NavLink to="/mobile-dev">Mobile Development</NavLink></li>
                            <li><NavLink to="/ai-ml">AI/ML Engineering</NavLink></li>
                            <li><NavLink to="/devops">DevOps & Cloud</NavLink></li>
                            <li><NavLink to="/blockchain">Blockchain</NavLink></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-md-2" ref={el => sectionsRef.current[2] = el}>
                        <h5 className="footer-heading mb-4">Resources</h5>
                        <ul className="footer-links">
                            <li><NavLink to="/blog">Tech Blog</NavLink></li>
                            <li><NavLink to="/projects">Project Hub</NavLink></li>
                            <li><NavLink to="/careers">Career Portal</NavLink></li>
                            <li><NavLink to="/webinars">Live Webinars</NavLink></li>
                            <li><NavLink to="/community">Forum</NavLink></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-4" ref={el => sectionsRef.current[3] = el}>
                        <h5 className="footer-heading mb-4">Stay Updated</h5>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Enter your email"
                            />
                            <button className="btn btn-gradient w-100">
                                Subscribe to Newsletter
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-divider my-5"></div>

                {/* Bottom Footer */}
                <div className="row" ref={el => sectionsRef.current[4] = el}>
                    <div className="col-md-6">
                        <ul className="legal-links">
                            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms">Terms of Service</NavLink></li>
                            <li><NavLink to="/code-conduct">Code of Conduct</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="copyright-text">
                            © {new Date().getFullYear()} CodeMasters Academy. Crafted with ❤️ by OpenSource Community
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;