import React, { useState } from "react";
import "./aboutme.css";

import pythonIcon from "../assets/python.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import xamppIcon from "../assets/xampp.png";
import cloudIcon from "../assets/cloud.png";
import djangoIcon from "../assets/django.png";
import iotIcon from "../assets/iot.png";
import mobileIcon from "../assets/mobile.png";
import phpIcon from "../assets/php.png";
import cert1 from "/cert1.jpg";

const skillIcons = [
  pythonIcon, jsIcon, reactIcon, xamppIcon, cloudIcon,
  djangoIcon, iotIcon, mobileIcon, phpIcon
];

const certificates = [
  { img: cert1, title: "Python Mastery" },
  { img: cert1, title: "React Specialist" },
  { img: cert1, title: "IoT Innovator" },
  { img: cert1, title: "Cloud Architect" }
];

const AboutMe = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState(null);

  const openModal = (cert) => {
    setModalCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalCert(null);
  };

  return (
    <section className="aboutme-section" id="aboutme">
      <h2 className="aboutme-heading">About Me</h2>

      <div className="aboutme-container">
        {/* Bio */}
        <div className="aboutme-left">
          <h3 className="section-title">Bio</h3>
          <p className="bio-description">
            Dedicated B.S.I.T. student at the University of Science and Technology of Southern Philippines, recognized as a Cum Laude and a Master God-Supported Programmer, seeking a job to apply my skills in IT, including programming, database management, and system administration while gaining practical experience in the IT industry.
          </p>
          <div className="aboutme-info">
            <p><strong>Birthday:</strong> December 27, 2002</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Email:</strong> cabeltes.jayson7@gmail.com</p>
            <p><strong>Degree:</strong> Bachelor of Science in Information Technology</p>
            <p><strong>Phone:</strong> +639 49 577 5852</p>
            <p><strong>Country:</strong> Philippines</p>
            <p><strong>Location:</strong> Misamis Oriental</p>
            <p><strong>City:</strong> Cagayan de Oro City</p>
          </div>
        </div>

        {/* Certificates */}
        <div className="aboutme-right">
          <div className="certificates-section">
            <h3 className="section-title">Certificates</h3>
            <div className="certificates-grid">
              {certificates.map((cert, idx) => (
                <div
                  className="certificate-card"
                  key={idx}
                  onClick={() => openModal(cert)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open ${cert.title}`}
                >
                  <img src={cert.img} alt={cert.title} loading="lazy" />
                  <span className="cert-title">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Experiences */}
      <div className="aboutme-lower-container">
        {/* Skills */}
        <div className="aboutme-left">
          <div className="skills-section">
            <h3 className="section-title">Skills</h3>
            {/* Single seamless infinite scroll */}
            <div className="skills-scroller" data-animated="true">
              <div className="skills-scroll-track">
                {[...skillIcons, ...skillIcons].map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt="Skill Icon"
                    className="skill-icon"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experiences */}
        <div className="aboutme-right">
          <h3 className="section-title">Experiences</h3>
          <div className="experiences-wrapper">
            <div className="experience-box">
              <h4>Bureau of Fire Protection</h4>
              <p>Worked as IT support and developed a website.</p>
            </div>
            <div className="experience-box">
              <h4>Experience Title 2</h4>
              <p>Short description about this experience.</p>
            </div>
            <div className="experience-box">
              <h4>Experience Title 3</h4>
              <p>Short description about this experience.</p>
            </div>
            <div className="experience-box">
              <h4>Experience Title 4</h4>
              <p>Short description about this experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {modalOpen && modalCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal large" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal}>&times;</button>
            <h3 className="cert-modal-title">{modalCert.title}</h3>
            <img src={modalCert.img} alt={modalCert.title} className="cert-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;