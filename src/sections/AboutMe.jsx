import React, { useEffect, useRef } from "react";
import "./aboutme.css";

// Import skill icons
import pythonIcon from "../assets/python.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import xamppIcon from "../assets/xampp.png";
import cloudIcon from "../assets/cloud.png";
import djangoIcon from "../assets/django.png";
import iotIcon from "../assets/iot.png";
import mobileIcon from "../assets/mobile.png";
import phpIcon from "../assets/php.png";

// Icon list
const skillIcons = [reactIcon, jsIcon, xamppIcon, cloudIcon, pythonIcon, djangoIcon, iotIcon, mobileIcon, phpIcon];

const AboutMe = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationTimeout;

    const stopAnimation = () => {
      marquee.classList.add("paused");
      clearTimeout(animationTimeout);
    };

    const startAnimation = () => {
      clearTimeout(animationTimeout);
      animationTimeout = setTimeout(() => {
        marquee.classList.remove("paused");
      }, 1500);
    };

    const handleScroll = () => {
      stopAnimation();
      startAnimation();
    };

    marquee.addEventListener("wheel", handleScroll);

    return () => {
      marquee.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="aboutme-section" id="aboutme">
      {/* Centered Section Heading */}
      <h2 className="aboutme-heading">About Me</h2>

      <div className="aboutme-container">
        {/* Left - Bio */}
        <div className="aboutme-left">
          <h3 className="section-title">Bio</h3>
          <p className="bio-description">
            Dedicated B.S.I.T. student at the University of Science and Technology of Southern 
            Philippines, recognized as a Cum Laude and a Master God-Supported Programmer, 
            seeking a job to apply my skills in IT, including programming, database management, 
            and system administration while gaining practical experience in the IT industry.
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

        {/* Right - Certificates */}
        <div className="aboutme-right">
          <h3 className="section-title">Certificates</h3>
          <div className="certificates-wrapper">
            {/* 🖼️ Replace these divs with <img src="..." /> later */}
            <div className="certificate-box">Certificate 1</div>
            <div className="certificate-box">Certificate 2</div>
            <div className="certificate-box">Certificate 3</div>
            <div className="certificate-box">Certificate 4</div>
          </div>
        </div>
      </div>

      {/* Bottom - Skills Bar */}
      <div className="skills-section">
        <h3 className="section-title center-text">Skills</h3>
        {/* Marquee Container */}
        <div className="skills-marquee-container" ref={marqueeRef}>
          <div className="skills-marquee-track">
            {[...skillIcons, ...skillIcons].map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`skill-${index}`}
                className="skill-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
