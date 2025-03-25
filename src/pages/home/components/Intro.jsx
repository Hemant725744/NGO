import React from "react";
import "../styles/Intro.css";
import { Button } from "react-bootstrap";
import introImage from "../assests/intro.png"; // Import the image

function Intro() {
  const sectionStyle = {
    backgroundImage: `url(${introImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="intro-section" style={sectionStyle}>
      <div className="intro-content">
        <h1>Welcome to Hirvankur Foundation</h1>
        <p>Empowering Communities, Transforming Lives</p>
        <div className="cta-buttons">
          <Button variant="primary" className="me-3">
            Get Involved
          </Button>
          <Button variant="outline-light">Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
