import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import introImage from "../assets/intro.png"; // Make sure the image is correctly linked
import missionimage from "../assets/mission.jpg";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
      }, 1000); // 1 second delay to show the animation
    }, 4000); // Change words every 4 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      {/* Intro Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "60vh",
          height: "900px",
          backgroundImage: `url(${introImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          color: "#e8f5e9",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.53)",
            zIndex: 0,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>

          <motion.h1
            className="fw-bold mb-3"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "4rem", color: "#f5f5f5" }}
          >
            Welcome to{" "}
            <span style={{ color: "rgb(255, 244, 123)" }}>Hirvankur Foundation</span>
          </motion.h1>
          
          {/* <motion.p
            className="fs-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ color: "#dcdcdc" }}
          >
            Empowering Communities, Transforming Lives
          </motion.p> */}

          {/* Animated text effect */}
          <AnimatePresence mode="wait">
  <motion.div
    key={currentWordIndex}
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.8 }}
    style={{
      fontSize: "clamp(2rem, 5vw, 2.5rem)",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "3rem",
      letterSpacing: "0.05em",
      background: "linear-gradient(90deg, #FF9800 0%, #FFEB3B 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block",
    }}
  >
    {words[currentWordIndex]}
  </motion.div>
</AnimatePresence>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              className="me-3 px-4 py-2 shadow-sm rounded-pill"
              style={{
                backgroundColor: "#222",
                border: "none",
                color: "#c6f6d5",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#222")}
            >
              Get Involved
            </Button>
            <Button
              className="px-4 py-2 shadow-sm rounded-pill"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #c6f6d5",
                color: "#c6f6d5",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#c6f6d5";
                e.target.style.color = "#222";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#c6f6d5";
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "50vh",
          background: "rgba(153, 246, 132, 0.29)",
          padding: "60px 20px",
          
        }}
      >
        <motion.h2
          className="fw-bold display-4 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ background: "linear-gradient(90deg,rgb(9, 71, 6) 0%,rgb(14, 249, 85) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",}} // heading color
        >
          Our Mission
        </motion.h2>
        <Row className="justify-content-center w-100 px-3">
          <Col md={8}>
            <motion.p
              className="px-4 py-4"
              style={{
                backgroundColor: "rgb(141, 255, 147)",
                borderRadius: "20px",
                fontSize: "1.4rem",
                lineHeight: "1.8",
                color: "rgb(7, 63, 24)", //text color
                width: "100%",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We strive to create a positive impact in society by empowering
              communities, supporting education, and driving sustainable change.
              Join us in our mission to light up lives and build a better tomorrow.
            </motion.p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Intro;
