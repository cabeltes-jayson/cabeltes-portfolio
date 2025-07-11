import React from "react";
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
import cert1 from "/cert1.png";

const AboutMe = () => {
  return (
    <section className="aboutme-section" id="aboutme">
      {/* Centered Section Heading */}
      <h2 className="aboutme-heading">About Me</h2>

      <div className="aboutme-container">
        {/* TopLeft - Bio */}
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

        {/* TopRight - Certificates */}
        <div className="aboutme-right">
          <h3 className="section-title">Certificates</h3>
          <div className="certificates-wrapper">
            {/* 🖼️ Replace these divs with <img src="..." /> later */}
            <img src={cert1} alt="cert1" />
            <div className="certificate-box">Certificate 2</div>
            <div className="certificate-box">Certificate 3</div>
            <div className="certificate-box">Certificate 4</div>
          </div>
        </div>
      </div>

      {/* Bottom - Skills and Experiences Section */}
      <div className="aboutme-lower-container">
        {/* Left - Skills */}
        <div className="aboutme-left">
          <h3 className="section-title">Skills</h3>

          <div className="scroller" data-speed="fast" data-animated="true" data-direction="left">
            <ul className="tag-list inside-scroll">
              <li>Python</li>
              <li>Javascript</li>
              <li>IoT</li>
              <li>React</li>
              <li>PHP</li>
              <li>Django</li>
              <li>Cloud</li>
              <li>XAMPP</li>

              <li>Python</li>
              <li>Javascript</li>
              <li>IoT</li>
              <li>React</li>
              <li>PHP</li>
              <li>Django</li>
              <li>Cloud</li>
              <li>XAMPP</li>
            </ul>
          </div>

          {/* ICONS */}
          <div className="scroller" data-speed="fast" data-animated="true" data-direction="right">
            <div className="tag-list inside-scroll">
              <img src={pythonIcon} alt="Django" />
              <img src={jsIcon} alt="Javascript" />
              <img src={reactIcon} alt="React" />
              <img src={xamppIcon} alt="XAMPP" />
              <img src={cloudIcon} alt="Cloud" />
              <img src={djangoIcon} alt="Django" />
              <img src={iotIcon} alt="IoT" />
              <img src={mobileIcon} alt="Mobile" />
              <img src={phpIcon} alt="PHP" />

              <img src={pythonIcon} alt="Django" />
              <img src={jsIcon} alt="Javascript" />
              <img src={reactIcon} alt="React" />
              <img src={xamppIcon} alt="XAMPP" />
              <img src={cloudIcon} alt="Cloud" />
              <img src={djangoIcon} alt="Django" />
              <img src={iotIcon} alt="IoT" />
              <img src={mobileIcon} alt="Mobile" />
              <img src={phpIcon} alt="PHP" />
            </div>
          
          </div>

        </div>

        {/* Right - Experiences */}
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
    </section>
  );
};

export default AboutMe;