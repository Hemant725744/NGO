import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import introImage from "../assests/intro.png"; // Import the image

function Intro() {
  return (
    <>
      {/* Intro Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "60vh",
          backgroundImage: `url(${introImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 className="fw-bold">Welcome to Hirvankur Foundation</h1>
          <p className="fs-4">Empowering Communities, Transforming Lives</p>
          <div className="mt-3">
            <Button variant="primary" className="me-3 px-4 py-2">
              Get Involved
            </Button>
            <Button variant="outline-light" className="px-4 py-2">
              Learn More
            </Button>
          </div>
        </div>
        {/* Dark overlay */}
        <div
          style={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      </section>

      {/* Our Mission Section (Increased height & transparent background) */}
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "50vh" , backgroundColor: "rgba(255, 210, 142, 0.99)"}} // Increased height
      >
        <h2 className="text-success fw-bold display-4 mb-4">Our Mission</h2>
        <Row className="justify-content-center w-100">
          <Col md={8}>
            <p
              className="text-white px-5 py-4"
              style={{
                backgroundColor: "rgba(228, 162, 62, 0.89)", // Transparent orange background
                borderRadius: "20px",
                fontSize: "1.4rem",
                lineHeight: "1.8",
                width: "100%",
                minHeight: "150px", // Larger vertical space
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              We strive to create a positive impact in society by empowering
              communities, supporting education, and driving sustainable change.
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Intro;
