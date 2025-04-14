import React from 'react';
import { Award } from 'lucide-react';
import { awards, successStories } from '../data/achievementsData.js';

export default function Impact() {
    return (
        <div className="bg-light py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6">Our Impact & Recognition</h2>
                    <p className="lead text-muted">Celebrating our achievements and continued commitment</p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {awards.map((award) => (
                        <div key={award.title} className="col">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <Award className="text-warning mb-3" style={{ height: "2rem", width: "2rem" }} />
                                    <p className="text-success fw-semibold small">{award.year}</p>
                                    <h3 className="h5 fw-bold">{award.title}</h3>
                                    <p className="text-muted">{award.organization}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {successStories.map((story, index) => (
                    <div key={index} className="card mt-5 shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-6">
                                <img
                                    src={story.image}
                                    alt="Success story"
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3 className="h5 fw-bold mb-4">Success Story Spotlight</h3>
                                    <blockquote className="blockquote text-muted">
                                        <p className="mb-0">"{story.quote}"</p>
                                    </blockquote>
                                    <footer className="blockquote-footer mt-3">
                                        <strong>{story.name}</strong>, {story.role}
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}