import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../assets/test1.jpg";
import image2 from "../assets/test2.jpg";
import image3 from "../assets/test3.png";
import image4 from "../assets/test4.jpg";
import image5 from "../assets/test5.jpg";
import image6 from "../assets/test6.jpg";
import image7 from "../assets/test7.jpg";
import image8 from "../assets/test8.jpg";

const testimonials = [
  {
    quote: 'Hirvankur – For Nature, With Love Hirvankur is dedicated to restoring nature through tree plantation, adoption drives, and water conservation. With 30 Jalmandirs built across Nashik, the team works tirelessly to revive groundwater levels. Being part of this mission is truly rewarding.',
    author: 'Mrs.Majusha Patki',
    image: image1,
  },
  {
    quote: 'Hirwanakur Foundation Nashik is a public movement to plant, grow and protect the environment which is going to prove as a milestone in human history.',
    author: 'Cap.Dr.Rajendra Rajput',
    image: image2,
  },
  {
    quote:'Fatima, CommunityHonble Minister Shri Dadasaheb Bhuse praised the initiative of tree conservation by NMC and Hirvankur Foundation Nashik, highlighting the importance of native tree species in Ayurveda and their Treasured benefits for human health. He appreciated the students efforts and suggested that such exhibitions should be organized everywhere to promote environmental conservation Leader',
    author: 'कॅबिनेट मंत्री श्री दादासाहेब भुसे',
    image: image3,
  },
  {
    quote: 'Tree Adoption concept by Nashiks Hirwankur Foundation has gained widespread recognition across Maharashtra. Its a valuable step towards mitigating global warming.  Honble Judge Shri D N Chamle, Jamner District Court, expressed confidence that this initiative will spark a revolutionary environmental conservation movement.',
    author: 'जामनेर जज चामले',
    image: image4,
  },
  {
    quote: 'We wholeheartedly appreciate the tree adoption concept. Our team, including legal experts, Pithasan officials, and support staff, will strive together to ensure the success of this noble initiative. Best wishes to each member of "Team Hirvankur"',
    author: 'Hon. PDJ. Shri.Shrivhand Daulatram Jagmalani',
    image: image5,
  },
  {
    quote: 'Hirvankurs innovative approach can bring about holistic prosperity. This initiative is excellent, and with their dedication, nature can truly bloom. Wishing them all the best.',
    author: 'Hon.Shri.M.T.Kharade judge',
    image: image6,
  },
  {
    quote: 'This concept is truly excellent. Its essential for each of us to acknowledge and fulfill our responsibility towards the environment. Heartfelt congratulations to the entire team at Hirvankur Foundation Nashik on this outstanding initiative.',
    author: 'Hon.Shri.Amit S. Koshtikar',
    image: image7,
  },
  {
    quote: 'Team Hirvankurs initiative not only showcases a remarkable commitment to environmental conservation but also fosters a sense of community and civic duty. By involving the judiciary and legal professionals, you have added a valuable dimension to this endeavor, underscoring the importance of collective action in addressing critical issues.',
    author: 'Hon.Shri.J.O.Wankhede',
    image: image8,
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

              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
