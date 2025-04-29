import React from "react";
import { Link } from "react-router-dom"; // Changed import
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import NGOL from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar sticky-top">
      <div className="container">
        {/* Logo with hover effect */}
        <Link className="navbar-brand" to="/">
          <span className="logo-container">
            <img src={NGOL} alt="NGO Logo" className="logo-img" />
            <span className="brand-name">Hirvankur</span>
          </span>
        </Link>

        {/* Hamburger Menu for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/achievements">Achievements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teams">Teams</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-contribute" to="/contribute">Contribute</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;