import React from 'react';
import { Leaf, Droplets, Users, BookOpen } from 'lucide-react';

export default function Hero() {
    return (
        <div className="bg-light py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold hero-title">
                        <span className="d-block">Transforming Lives,</span>
                        <span className="d-block text-success">Preserving Nature</span>
                    </h1>
                    <p className="lead text-muted mt-3 hero-subtitle">
                        The Hirvankur Foundation's journey of environmental stewardship and community empowerment
                    </p>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-5">
                    <StatCard
                        icon={<Leaf className="text-success" style={{ height: "2rem", width: "2rem" }} />}
                        title="Seed Bank"
                        value="10,000+"
                        description="Native species preserved"
                        bgImage="https://images.pexels.com/photos/41959/food-grains-bread-wheat-cereals-41959.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <StatCard
                        icon={<Droplets className="text-primary" style={{ height: "2rem", width: "2rem" }} />}
                        title="Water Harvested"
                        value="1M+"
                        description="Liters annually"
                        bgImage="https://images.pexels.com/photos/66346/pexels-photo-66346.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <StatCard
                        icon={<Users className="text-warning" style={{ height: "2rem", width: "2rem" }} />}
                        title="Lives Impacted"
                        value="50,000+"
                        description="Community members"
                        bgImage="https://images.pexels.com/photos/3066025/pexels-photo-3066025.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <StatCard
                        icon={<BookOpen className="text-purple" style={{ height: "2rem", width: "2rem" }} />}
                        title="Students Reached"
                        value="5,000+"
                        description="Through education programs"
                        bgImage="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, title, value, description, bgImage }) {
    return (
        <div className="col">
            <div
                className="card h-100 position-relative shadow-sm"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white", // Adjust text color for better contrast
                }}
            >
                <div className="card-body p-4">
                    <div className="position-absolute top-0 end-0 p-3">
                        {icon}
                    </div>
                    <p className="small text-muted  mb-1">{title}</p>
                    <h2 className="fw-bold">{value}</h2>
                    <p className="small text-muted">{description}</p>
                </div>
            </div>
        </div>
    );
}