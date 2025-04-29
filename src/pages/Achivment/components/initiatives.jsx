import React from 'react';
import { Heart, Sprout, Brain, Droplet } from 'lucide-react';
import achievementsData from '../data/achievementsData.js';

export default function Initiatives() {
    // Map icons to initiatives based on titles
    const getIconForTitle = (title) => {
        if (title.includes("Seed Bank")) return <Sprout className="text-success" style={{ height: "1.5rem", width: "1.5rem" }} />;
        if (title.includes("Tree Plantation")) return <Sprout className="text-success" style={{ height: "1.5rem", width: "1.5rem" }} />;
        if (title.includes("Community") || title.includes("Educational")) return <Brain className="text-primary" style={{ height: "1.5rem", width: "1.5rem" }} />;
        if (title.includes("Water Conservation")) return <Droplet className="text-primary" style={{ height: "1.5rem", width: "1.5rem" }} />;
        return <Heart className="text-danger" style={{ height: "1.5rem", width: "1.5rem" }} />; // Default icon
    };

    return (
        <div className="bg-light py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6">Our Key Initiatives</h2>
                    <p className="lead text-muted">Making a difference through targeted programs</p>
                </div>

                <div className="mt-5">
                    {achievementsData.map((initiative, index) => (
                        <div
                            key={initiative.title}
                            className={`row align-items-center g-4 mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                        >
                            <div className="col-md-6">
                                <img
                                    src={initiative.image}
                                    alt={initiative.title}
                                    className="img-fluid rounded shadow-sm"
                                    style={{ width: "100%", height: "300px", objectFit: "cover" }} // Ensures uniform size
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    {getIconForTitle(initiative.title)}
                                    <h3 className="h5 fw-bold">{initiative.title}</h3>
                                </div>
                                <p className="text-muted">{initiative.description}</p>
                                {initiative.points && (
                                    <ul className="mt-3 ps-3 text-muted">
                                        {initiative.points.map((point, idx) => (
                                            <li key={idx} className="mb-2">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}