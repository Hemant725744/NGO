import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faVimeo, faFacebook } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import "./TeamPage.css";

const teamMembers = [
    {
        img: "https://cdn.easyfrontend.com/pictures/team/team_13_1.jpg",
        name: "KHAN SAHEB",
        designation: "HR, LATO",
        socialLinks: [
            { icon: faTwitter, href: "#!" },
            { icon: faFacebook, href: "#!" },
            { icon: faVimeo, href: "#!" },
        ],
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/team/team_13_2.jpg",
        name: "Ali Akbar",
        designation: "HR, PIT",
        socialLinks: [
            { icon: faTwitter, href: "#!" },
            { icon: faFacebook, href: "#!" },
            { icon: faVimeo, href: "#!" },
        ],
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/team/team_13_3.jpg",
        name: "Sadab Bean",
        designation: "HR, INCA",
        socialLinks: [
            { icon: faTwitter, href: "#!" },
            { icon: faFacebook, href: "#!" },
            { icon: faVimeo, href: "#!" },
        ],
    },
];

const TeamMemberItem = ({ member }) => (
    <div className="col-12 col-lg-4 ezy__team12-each-features">
        <div className="ezy__team12-features-inner position-relative">
            <img src={member.img} alt="Our Team Member" className="img-fluid w-100" />
            <div className="ezy__team12-features-content text-center">
                <h3 className="ezy__team12-title mb-1">{member.name}</h3>
                <p className="ezy__team12-sub-title">{member.designation}</p>
                <div className="ezy__team12-social-icon-area mt-1">
                    <ul className="ezy__team12-social-icon d-flex justify-content-center align-items-center">
                        {member.socialLinks.map((item, i) => (
                            <li key={i}>
                                <a href={item.href}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const TeamPage = () => {
    return (
        <section className="ezy__team12 light">
            <Container>
                <Row className="ezy__team12-separator text-center">
                    <div>
                        <h3 className="ezy__team12-heading">Our Team</h3>
                        <p className="ezy__team12-sub-heading mt-3 mb-5">
                            Meet the talented individuals who make our vision a reality through innovation, dedication, and exceptional expertise.
                        </p>
                    </div>
                    <Row>
                        {teamMembers.map((member, i) => (
                            <TeamMemberItem member={member} key={i} />
                        ))}
                    </Row>
                </Row>
            </Container>
        </section>
    );
};

export default TeamPage;