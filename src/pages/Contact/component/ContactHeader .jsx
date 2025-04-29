import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/ContactHeader.css' // Import your CSS file

const ContactHeader = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Join Hirvankur";
    const textRef = useRef(null);

    useEffect(() => {
        let charIndex = 0;
        let typingInterval;

        const startTyping = () => {
            typingInterval = setInterval(() => {
                if (charIndex <= fullText.length) {
                    setDisplayText(fullText.substring(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(startReverseTyping, 1500);
                }
            }, 150);
        };

        const startReverseTyping = () => {
            charIndex = fullText.length;
            typingInterval = setInterval(() => {
                if (charIndex >= 0) {
                    setDisplayText(fullText.substring(0, charIndex));
                    charIndex--;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(startTyping, 1000);
                }
            }, 80);
        };

        startTyping();

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        if (displayText === fullText) {
            anime({
                targets: textRef.current,
                opacity: [0.5, 1],
                duration: 1500,
                easing: 'easeOutQuad',
            });
        }
    }, [displayText]);

    return (
        <div className="container text-center py-5 contact-header-container">
            <h2 ref={textRef} className="display-4 text-success font-weight-bold contact-header-title">
                {displayText}
            </h2>
            <p className="lead text-muted contact-header-subtitle">
                We will take you to the greener side .
            </p>
        </div>
    );
};

export default ContactHeader;