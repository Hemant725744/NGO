// src/components/Mission.jsx
import React from 'react';
import { Heart, Users, Globe, Award } from 'react-feather';
import '../styles/Mission.css';

const features = [
  {
    title: 'Compassion',
    description: 'We lead with empathy and understanding, recognizing the dignity of every person we serve.',
    icon: <Heart size={20} />
  },
  {
    title: 'Community',
    description: 'We build strong partnerships with local communities to ensure sustainable impact.',
    icon: <Users size={20} />
  },
  {
    title: 'Global Reach',
    description: 'Our initiatives span across continents, addressing diverse needs with culturally sensitive approaches.',
    icon: <Globe size={20} />
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, maximizing our impact with efficiency.',
    icon: <Award size={20} />
  }
];

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-header">
          <p className="mission-subtitle">OUR MISSION</p>
          <h2 className="mission-title">Creating Sustainable Change</h2>
          <p className="mission-description">
            We believe in empowering communities to create lasting solutions that address poverty and inequality.
          </p>
        </div>
        <div className="mission-grid">
          {features.map((feature, index) => (
            <div key={index} className="mission-card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
