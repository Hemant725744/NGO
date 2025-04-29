import React from 'react';
import '../styles/Intro.css'; // make sure this path matches your folder structure

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
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Team collaborating"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
