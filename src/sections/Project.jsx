import React, { useState, useRef } from "react";
import "./project.css";
import arrowRight from "../assets/arrow-right.png"
import arrowLeft from "../assets/arrow-left.png";
import projIot from "/capstonemob.png";
import projBfp from "/bfpecert.png";
import projPortfolio from "/portfolio.png";
import projMobWeb from "/webmob.png";

const projects = [
  {
    title: "IoT-Based River Water Quality Monitoring System",
    image: projIot,
    position: "Back-End & IoT Developer",
    description: "To develop an IoT-based River Water Quality Monitoring System that uses sensors to measure water quality parameters, and employs mobile applications to visualize the data and provide alerts for necessary responses."
  },
  {
    title: "BFP E-Certificate",
    image: projBfp,
    position: "Front-End & Back-End Developer",
    description: "Developed an E-Certificate system for the Bureau of Fire Protection, digitizing the certificate issuance process and enhancing accessibility."
  },
  {
    title: "Portfolio Website",
    image: projPortfolio,
    position: "Full-Stack Developer",
    description: "Designed and deployed a personal portfolio using React, Vite, and GitHub Pages."
  },
  {
    title: "PAGSIDLAK E-commerce Platform",
    image: projMobWeb,
    position: "Back-End Developer",
    description: "Designed and implemented a mobile-friendly e-commerce platform and an admin web-access for managing products, orders, and users."
  },
];

const Project = () => {
  const [centerIdx, setCenterIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(null);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null);

  // Navigation logic
  const handlePrev = () => setCenterIdx(centerIdx === 0 ? projects.length - 1 : centerIdx - 1);
  const handleNext = () => setCenterIdx(centerIdx === projects.length - 1 ? 0 : centerIdx + 1);

  // Modal logic
  const openModal = (idx) => {
    setModalIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalIdx(null);
  };

  // Indices for carousel
  const leftIdx = centerIdx === 0 ? projects.length - 1 : centerIdx - 1;
  const rightIdx = centerIdx === projects.length - 1 ? 0 : centerIdx + 1;

  // Touch/swipe logic for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = null;
  };

  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">Projects</h2>
      <div className="carousel-wrapper">
        <button className="arrow arrow-left" onClick={handlePrev} aria-label="Previous Project">
          <img src={arrowLeft} alt="Previous" className="arrow-icon" />
        </button>
        <div
          className="carousel"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="carousel-item small left"
            style={{ backgroundImage: `url(${projects[leftIdx].image})` }}
            tabIndex={0}
            aria-label={projects[leftIdx].title}
            onClick={() => setCenterIdx(leftIdx)} // Only navigates, does NOT open modal
          >
            <span className="carousel-label">{projects[leftIdx].title}</span>
          </div>
          <div
            className="carousel-item center"
            style={{ backgroundImage: `url(${projects[centerIdx].image})` }}
            tabIndex={0}
            aria-label={projects[centerIdx].title}
            onClick={() => openModal(centerIdx)} // Only center opens modal
          >
            <span className="carousel-label">{projects[centerIdx].title}</span>
          </div>
          <div
            className="carousel-item small right"
            style={{ backgroundImage: `url(${projects[rightIdx].image})` }}
            tabIndex={0}
            aria-label={projects[rightIdx].title}
            onClick={() => setCenterIdx(rightIdx)} // Only navigates, does NOT open modal
          >
            <span className="carousel-label">{projects[rightIdx].title}</span>
          </div>
        </div>
        <button className="arrow arrow-right" onClick={handleNext} aria-label="Next Project">
          <img src={arrowRight} alt="Previous" className="arrow-icon" />
        </button>
      </div>
      {/* Modal */}
      {modalOpen && modalIdx !== null && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3>{projects[modalIdx].title}</h3>
            <img src={projects[modalIdx].image} alt={projects[modalIdx].title} className="modal-img" />
            <p><strong>Position:</strong> {projects[modalIdx].position}</p>
            <p>{projects[modalIdx].description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;