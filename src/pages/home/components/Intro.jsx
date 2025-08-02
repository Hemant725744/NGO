import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import introImage from "../assets/intro.png";
// import missionVideo from "../assets/mission.mp4"; // Uncomment later
import missionBg from "../assets/Missionbg.png";

import "../styles/intro.css";

function Intro() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Empowering Communities", "Transforming Lives"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      {/* Intro Section */}
      <section
        className="intro-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${introImage})`,
          color: "#e8f5e9",
        }}
      >
        {/* Dark overlay */}
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <motion.h1
            className="fw-bold mb-3 intro-heading text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to{" "}
            <span className="highlighted-text">
              Hirvankur Foundation
            </span>
          </motion.h1>

          {/* Animated text effect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWordIndex}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="intro-animated-text"
            >
              {words[currentWordIndex]}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="intro-btn-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button className="intro-btn intro-btn-dark me-2 me-md-3 px-3 px-md-4 py-2 shadow-sm rounded-pill">
              Get Involved
            </Button>
            <Button className="intro-btn intro-btn-outline px-3 px-md-4 py-2 shadow-sm rounded-pill">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        className="mission-section"
        style={{ backgroundImage: `url(${missionBg})`, position: "relative" }}
      >
        {/* Overlay without blur */}
        <div className="mission-overlay"></div>

        {/* Responsive animated heading */}
        <motion.h2
          className="mission-heading fw-bold display-2 mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Mission
        </motion.h2>

        {/* Content Row */}
        <Row
          className="align-items-center justify-content-center mx-auto mission-content-row"
        >
          {/* Left Content */}
          <Col md={6} sm={12} className="mb-4 mb-md-0">
            <motion.div
              className="mission-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                At Hirvankur, our mission is to restore and preserve the natural balance of our planet
                through sustainable action. We are committed to water and land conservation, promoting organic
                farming, and nurturing environmental awareness from a young age. By empowering communities and
                educating future generations, we aim to make <b>Mother Earth clean, green, and water-rich again</b> —
                thriving, resilient, and full of life.
                <br />
                <br />
                Join us in our mission to light up lives and build a better tomorrow.
                Together, we can make a difference!
              </p>
            </motion.div>
          </Col>

          {/* Right Video */}
          <Col md={6} sm={12} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mission-video-wrapper"
            >
              <video
                // src={missionVideo} // Uncomment later
                autoPlay
                muted
                loop
                controls
                className="mission-video"
              />
            </motion.div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Intro;
