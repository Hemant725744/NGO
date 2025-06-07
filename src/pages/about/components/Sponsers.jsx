import React from 'react';
import Slider from 'react-slick';
import '../styles/Sponsers.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Sponsor1 from '../assets/hariyali logo proper.png';
import Sponsor2 from '../assets/Sonkul agro.jpeg';
import Sponsor3 from '../assets/Indumati Green Plast Logo_page-0001.jpg';
import Sponsor4 from '../assets/Winjit_logo_JPG.jpg';
import Sponsor5 from '../assets/prabhattea logo.jpg';

const sponsorImages = [Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5];

const Sponsors = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="sponsors-section">
      <h2 className="sponsors-title">Proudly Supported By</h2>
      <Slider {...settings} className="sponsors-slider">
        {sponsorImages.map((img, index) => (
          <div key={index}>
            <div className="sponsor-card">
              <img src={img} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sponsors;
