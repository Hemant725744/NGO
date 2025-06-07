import React from 'react';
import universityImage from '../assets/sample1.1.jpeg';
import { FaTree, FaTint, FaBicycle, FaRecycle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../styles/Contribute.css';

const Contri = () => {
  const { ref: textRef, inView: textVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="contribute-wrapper">
      <h2 className="contribute-heading">How to Contribute?</h2>

      <div className="contribute-main">
        {/* Image on the left */}
        <div
          className="contribute-image"
          style={{ backgroundImage: `url(${universityImage})` }}
        ></div>

        {/* Content on the right */}
        <div
          ref={textRef}
          className={`contribute-content ${textVisible ? 'in-viewport' : ''}`}
        >
          <div className="text-block">
            <p className="subheading">Get Involved</p>
            <p className="main-tagline">Join the movement for a greener future</p>
          </div>

          <div className="guidelines">
            <h3 className="guidelines-title">Contribution Guidelines</h3>
            <ul className="guidelines-list">
              <li><span>Planting trees</span><FaTree /></li>
              <li><span>Ensuring clean water supply</span><FaTint /></li>
              <li><span>Eco-friendly transportation</span><FaBicycle /></li>
              <li><span>Sustainable waste management</span><FaRecycle /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contri;
