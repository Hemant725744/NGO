import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { Modal } from 'bootstrap';
import newspaperData from '../data/newspaperData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const NewsGallery = ({ images = newspaperData, itemsPerPage = 12 }) => {
    const [thumbsSwiper] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const modalRef = useRef(null);
    const imageRefs = useRef([]);
    const modalInstance = useRef(null);

    // Calculate how many pages we need
    const totalPages = Math.ceil(images.length / itemsPerPage);
    // Create page groups of 12 items each
    const pageGroups = Array.from({ length: totalPages }, (_, i) =>
        images.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
    );

    useEffect(() => {
        // Initialize modal
        modalRef.current = document.getElementById('newsModal');
        modalInstance.current = new Modal(modalRef.current);

        return () => {
            if (modalInstance.current) {
                modalInstance.current.dispose();
            }
        };
    }, []);

    const animateItems = () => {
        // Reset the refs array for the new active slide
        imageRefs.current = [];

        // Wait a tiny bit for the DOM to update
        setTimeout(() => {
            // GSAP animation for images in the current visible slide
            gsap.fromTo(
                imageRefs.current,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power2.out"
                }
            );
        }, 100);
    };

    const openModal = (pageIndex, itemIndex) => {
        // Calculate the real index in the original array
        const realIndex = pageIndex * itemsPerPage + itemIndex;
        setActiveImageIndex(realIndex);
        modalInstance.current.show();
    };

    return (
        <div className="news-gallery container py-5">
            <h2 className="text-center mb-5">News Coverage</h2>

            {/* Swiper for Pages */}
            <Swiper
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="news-pages-swiper"
                onSlideChange={(swiper) => animateItems(swiper.el)}
                loop={true}
            >
                {pageGroups.map((pageItems, pageIndex) => (
                    <SwiperSlide key={`page-${pageIndex}`} className="news-page-slide">
                        <div className="row g-4">
                            {pageItems.map((item, itemIndex) => (
                                <div
                                    key={item.id}
                                    className="col-6 col-sm-4 col-md-3 col-lg-3"
                                >
                                    <div
                                        className="news-item"
                                        onClick={() => openModal(pageIndex, itemIndex)}
                                        ref={el => imageRefs.current.push(el)}
                                    >
                                        <div className="card h-100 news-card">
                                            <img
                                                src={item.image}
                                                className="card-img-top"
                                                alt={`News article ${item.id}`}
                                                loading="lazy"
                                            />
                                            <div className="card-overlay">
                                                <span className="view-icon">
                                                    <i className="bi bi-zoom-in"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Lightbox Modal */}
            <div
                className="modal fade"
                id="newsModal"
                tabIndex="-1"
                aria-labelledby="newsModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newsModalLabel">
                                News Article
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-0">
                            <Swiper
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                initialSlide={activeImageIndex}
                                className="news-modal-swiper"
                            >
                                {images.map((item) => (
                                    <SwiperSlide key={`modal-${item.id}`}>
                                        <div className="news-modal-slide">
                                            <img
                                                src={item.image}
                                                alt={`News article ${item.id}`}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for the component */}
            <style jsx>{`
        .news-gallery {
          margin-bottom: 3rem;
        }
        
        .news-page-slide {
          padding: 15px 5px 40px 5px;
        }
        
        .news-card {
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: none;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          height: 100%;
        }
        
        .news-card img {
          transition: transform 0.5s ease;
          height: 200px;
          object-fit: cover;
        }
        
        .news-item {
          height: 100%;
          margin-bottom: 1rem;
        }
        
        .news-item:hover .news-card img {
          transform: scale(1.05);
        }
        
        .news-item:hover .news-card {
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .news-item:hover .card-overlay {
          opacity: 1;
        }
        
        .view-icon {
          color: white;
          font-size: 2rem;
        }
        
        .news-modal-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 70vh;
        }
        
        .news-modal-slide img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        
        .modal-content {
          background-color: #f8f9fa;
        }
        
        .modal-header {
          border-bottom: 1px solid #dee2e6;
        }
        
        /* Swiper pagination styling */
        .swiper-pagination-bullet-active {
          background: #0d6efd;
        }
        
        .swiper-button-next, 
        .swiper-button-prev {
          color: #0d6efd;
        }
        
        /* Page indicator text */
        .news-pages-swiper {
          position: relative;
          padding-bottom: 20px;
        }
        
        /* Auto-swipe indicator */
        .swiper-autoplay-running .swiper-pagination-bullet-active::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(13, 110, 253, 0.3);
          border-radius: 50%;
          animation: pulse 5s linear infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.7; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @media (max-width: 767px) {
          .news-modal-slide {
            height: 50vh;
          }
          
          .news-card img {
            height: 180px;
          }
        }
      `}</style>
        </div>
    );
};

export default NewsGallery;