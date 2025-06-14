import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../ComponentsE/Card.css";
import IM1 from "../assets/syahrin-seth-WhWYV0nQJGc-unsplash.jpg";
import IM2 from "../assets/liz-martin-9M8J7JvW_nc-unsplash.jpg";
import ShimmerCard from "../ComponentsE/ShimmerCard";

const Card = () => {




    return (
        <div className="card-background">
            <div className="container py-5">
                <h2 className="text-center  ngo-title ">
                    <span className="f">Hirvankur Events & Initiatives</span>
                    <small className="d-block mt-2 subtitle">Government Recognized NGO - Nashik, Maharashtra</small>
                </h2>
            </div>
        </div>
    );
};

export default Card;