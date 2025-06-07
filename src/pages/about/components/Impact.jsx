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
            <div className="impact-stat-number">1.4cr litre</div>
            <p className="impact-stat-label">Water saved</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">18.3 lakh</div>
            <p className="impact-stat-label">Trees planted</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">1.9 lakh +</div>
            <p className="impact-stat-label">Seed ball collection and plantation</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">350+ acre</div>
            <p className="impact-stat-label">Organic Conversion of land (1416401 sq.mt)</p>
          </div>
          <div className="impact-stat-card">
            <div className="impact-stat-number">39+</div>
            <p className="impact-stat-label">Percolation pits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
