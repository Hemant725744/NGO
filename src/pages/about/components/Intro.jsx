import React from 'react';
import '../styles/Intro.css'; // make sure this path matches your folder structure
// import intro from "../assets/intro.mp4"; // uncomment later

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1>
            Making a <span className="highlight-purple">Difference</span>
            <br />
            <span className="highlight-lavender">Together</span>
          </h1>
          <p>
            GivingHands is dedicated to creating lasting change through compassion,
            innovation, and community partnership. Since 2010, we've been committed
            to improving lives around the world.
          </p>
        </div>
        <div className="intro-video">
          <video
            // src={intro}  // Uncomment later
            autoPlay
            // loop
            unmuted
            controls
            auto
            
            playsInline
         
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
