import React, { useState } from "react";
import { motion } from "framer-motion";

import Nilaybabu from "../assets/Mr.Nilaybabu.png";
import Manoj from "../assets/Mr.Manoj.png";
import Chetan from "../assets/Chetan.png";
import Rakhi from "../assets/Rakhi.png";
import Nalini from "../assets/Nalini.png";
import Kinjal from "../assets/Kinjal.png";
import Ajit from "../assets/Ajit.jpg";
import Rajendra from "../assets/Rajendra.png";
import Pankajsingh from "../assets/Pankajsingh.png";
import Praddyumna from "../assets/Praddyumna.png";

import Haiderali from "../assets/Haiderali.png";

import Mayank from "../assets/mayank.png";
import Milind from "../assets/Milind.png";
import Manjusha from "../assets/Manjusha.png";
import Prashant from "../assets/Prashant.png";
import Sandip from "../assets/Sandip.png";
import Avinash from "../assets/Avinash.png";
import Mahesh from "../assets/Mahesh.png";
import Madhur from "../assets/Madhur.png";
import Amol from "../assets/Amol.png";
import Narendra from "../assets/Narendra.png";
import Vitthal from "../assets/Vitthal.png";
import Mukesh from "../assets/Mukesh.png";
import Rishabh from "../assets/Rishabh.png";
import Nishant from "../assets/Nishant.png";
import Vijaykumar from "../assets/Vijaykumar.jpg";
import Vivek from "../assets/Vivek.jpg";

import Taiyyab from "../assets/Taiyyab.png";
import Anisa from "../assets/Anisa.png";

import Sonali from "../assets/Sonali.png";
import Anil from "../assets/Anil.png";

import "../styles/People.css";

const bodyTeam = [
  { name: "Mr.Nilaybabu Bhalchandra Shah Jain", role: "President", image: Nilaybabu },
  { name: "Mr.Manoj Dharamchand Patni Jain", role: "Vice President", image: Manoj },
  { name: "Mr.Chetan Ajit Bagmar Jain", role: "Secretary", image: Chetan },
  { name: "Mrs.Rakhi N.Shah Jain", role: "Vice Secretary", image: Rakhi },
  { name: "Mrs.Nalini Nilaybabu Shah Jain", role: "Treasurer", image: Nalini },
  { name: "Ar Kinjal Nilaybabu Shah Jain", role: "Trustee", image: Kinjal },
  { name: "Mr.Ajit Rothas Meharolia", role: "Trustee", image: Ajit },
  { name: "Cpt. Dr. Rajendra Raghunath Rajput", role: "Trustee", image: Rajendra },
  { name: "Mr.Pankajsingh Babansingh Chauhan", role: "Trustee", image: Pankajsingh },
  { name: "Mr. Praddyumna Anil Pandit", role: "Trustee", image: Praddyumna },
];

const ourVisionaryTorchbearer = [
  { name: "Haiderali Kutubali Noorani", image: Haiderali },
];

const nasikDistrictCore = [
  { name: "Ar.Mayank Nilaybabu Shah Jain", image: Mayank },
  { name: "Mr.Milind Arvind Patki", image: Milind },
  { name: "Mrs. Manjusha Milind Patki", image: Manjusha },
  { name: "Mr.Prashant Dagaji Deore", image: Prashant },
  { name: "Mr.Sandip Dagaji Deore", image: Sandip },
  { name: "Ad. Avinash Janardan Bhide", image: Avinash },
  { name: "Mr.Mahesh Nanikram Chawla", image: Mahesh },
  { name: "Mr.Madhur Gopaldas Agrawal", image: Madhur },
  { name: "Mr.Amol Ahire", image: Amol },
  { name: "CA. Narendra Nandkumar Zadge", image: Narendra },
  { name: "Mr Vitthal Sonu Chaudhary", image: Vitthal },
  { name: "Mr.Mukesh Surana", image: Mukesh },
  { name: "Dr Rishabh Kamlesh Gundecha", image: Rishabh },
  { name: "Mr.Nishant Vijay Shah", image: Nishant },
];

const greenGaurdian = [
  { name: "Dr.Vijaykumar Munde", image: Vijaykumar },
  { name: "Mr.Vivek Bhadane", image: Vivek },
];

const nandurbarCoreCommittee = [
  { name: "Taiyyab Haiderali Noorani", image: Taiyyab },
  { name: "Anisa Taiyyab Noorani", image: Anisa },
];

const jalgaonCoreCommittee = [
  { name: "Mrs.Sonali Rajendra Rajput", image: Sonali },
  { name: "CA Mr.Anil Shah", image: Anil }, 
];

const sections = [
  { label: "Our Visionary Torchbearer", key: "ourVisionaryTorchbearer", members: ourVisionaryTorchbearer },
  { label: "Core Committee", key: "coreComittee", members: nasikDistrictCore },
  { label: "Green Guardian", key: "greenGaurdian", members: greenGaurdian },
  { label: "Nandurbar Core Committee", key: "nandurbarCoreCommittee", members: nandurbarCoreCommittee },
  { label: "Jalgaon Core Committee", key: "jalgaonCoreCommittee", members: jalgaonCoreCommittee },
];

const People = () => {
  const [openSection, setOpenSection] = useState(null);

  return (
    <section className="people-section">
      <h2 className="team-heading">Meet The Team</h2>

      {/* Body Members always shown */}
      <div className="body-section-wrapper">
        <h3 className="body-section-heading">Body Members</h3>
        <motion.div
          className="people-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {bodyTeam.map((member, index) => (
            <motion.div
              key={index}
              className="member-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={member.image} alt={member.name} />
              <div className="member-overlay">
                <p className="member-name">{member.name}</p>
                {member.role && <p className="member-role">{member.role}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section buttons row */}
      <div className="section-buttons-row">
        {sections.map(({ label, key }) => (
          <button
            key={key}
            className={`section-toggle-btn ${openSection === key ? "active" : ""}`}
            onClick={() => setOpenSection(openSection === key ? null : key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Selected section content */}
      {sections.map(({ key, members }) => (
        openSection === key && (
          <motion.div
            key={key}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden", marginTop: "1.5rem" }}
          >
            <motion.div
              className="people-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  className="member-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <p className="member-name">{member.name}</p>
                    {member.role && <p className="member-role">{member.role}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )
      ))}
    </section>
  );
};

export default People;
