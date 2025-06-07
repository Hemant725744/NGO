import React from 'react';
import "../ComponentsE/ShimmerCard.css.css"

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-content">
                <div className="shimmer-line title"></div>
                <div className="shimmer-line location"></div>
                <div className="shimmer-line description-short"></div>
                <div className="shimmer-line description-medium"></div>
                <div className="shimmer-buttons">
                    <div className="shimmer-button details"></div>
                    <div className="shimmer-button contribute"></div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerCard;