import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/intro.png";
import image2 from "../assets/sample1.jpg";
import image3 from "../assets/sample2.jpg";
import image4 from "../assets/sample3.jpeg";
import image5 from "../assets/sample4.jpg";
import image6 from "../assets/sample5.jpeg";

const testimonials = [
  {
    quote: 'Thanks to EcoVision NGO, I can attend school and have a brighter future.',
    author: 'Amina, Student',
    image: image2,
  },
  {
    quote: 'The trees we planted have brought back wildlife and beauty to our community.',
    author: 'James, Volunteer',
    image: image3,
  },
  {
    quote: 'Clean water has changed our lives. We are healthier and happier now.',
    author: 'Fatima, Community Leader',
    image: image4,
  },
  {
    quote: 'Their support for sustainable farming has transformed our village.',
    author: 'Carlos, Farmer',
    image: image5,
  },
  {
    quote: 'I learned so much about conservation through their workshops.',
    author: 'Priya, Participant',
    image: image6,
  },
  {
    quote: 'The eco-friendly initiatives are making a real difference.',
    author: 'David, Resident',
    image: image1,
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: true },
      },
    ],
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What People Say</h2>
      <Slider {...settings} className="custom-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card-wrapper">
            <div className="testimonial-card">
            <div className="testimonial-img-wrapper">
  <img src={testimonial.image} alt={testimonial.author} className="testimonial-img" />
</div>
<p className="testimonial-author">- {testimonial.author}</p>
<div className="testimonial-content">
  <p className="testimonial-quote">"{testimonial.quote}"</p>
</div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
