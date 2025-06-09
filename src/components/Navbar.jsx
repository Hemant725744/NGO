import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import NGOL from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    anime({
      targets: ['.logo-img', '.nav-item', '.btn-contribute'],
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo'
    });
  }, []);

  const handleHover = (e) => {
    anime({
      targets: e.target,
      scale: 1.05,
      duration: 200,
      easing: 'easeOutExpo'
    });
  };

  const handleHoverEnd = (e) => {
    anime({
      targets: e.target,
      scale: 1,
      duration: 150,
      easing: 'easeOutExpo'
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <span className="logo-container">
            <img
              src={NGOL}
              alt="NGO Logo"
              className="logo-img"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
            <span
              className="brand-name"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              Hirvankur
            </span>
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['/', '/about', '/events', '/achievements', '/contact'].map((path) => (
              <li className="nav-item" key={path} onClick={() => setIsMenuOpen(false)}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
            <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to="/contribute"
                className={({ isActive }) =>
                  `btn btn-contribute ${isActive ? 'active' : ''}`
                }
                // Removed hover handlers here
              >
                Contribute
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;