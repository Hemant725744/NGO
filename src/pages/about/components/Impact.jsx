import React from "react";
import "../styles/Impact.css";

const Impact = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-header">
          <h2 className="impact-heading">Our Impact</h2>
          <p className="impact-subheading">
            Through partnerships and dedicated work, we've achieved meaningful results.
          </p>
        </div>
        <div className="impact-stats-grid">
          <div className="impact-stat-card">
            <div className="impact-stat-number">120+</div>
            <p className="impact-stat-label">Projects Completed</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">20</div>
            <p className="impact-stat-label">Countries Served</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">500K+</div>
            <p className="impact-stat-label">Lives Improved</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">85%</div>
            <p className="impact-stat-label">Funds to Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;