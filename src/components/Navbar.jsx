import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.jpg";  // ✅ Adjust if needed


function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-2">
      <Container className="d-flex justify-content-between">
        {/* Left Side: NGO Logo & Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            src={logo}
            alt="Hirvankur"
            width="50"
            height="50"
            className="rounded-circle me-2"
          />
          <span className="fw-bold text-dark">NGO Name</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Right Side: Navbar Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#about" className="text-dark fw-semibold mx-2">
              About
            </Nav.Link>
            <Nav.Link href="#events" className="text-dark fw-semibold mx-2">
              Events
            </Nav.Link>
            <Nav.Link href="#resources" className="text-dark fw-semibold mx-2">
              Resources
            </Nav.Link>
            <Nav.Link href="#contribute" className="text-dark fw-semibold mx-2">
              Contribute
            </Nav.Link>
            <Nav.Link href="#login" className="text-dark fw-semibold mx-2">
              Login
            </Nav.Link>
            {/* Join Button */}
            <Button
              variant="primary"
              className="fw-semibold rounded-pill px-4 ms-3"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSe--19_aVkMmfKWevoMxo_El_KrfsRKcBfc0-Yx3CmxD268kA/viewform",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Join the Club
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
