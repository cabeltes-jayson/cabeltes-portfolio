import React from "react";
import "./footer.css";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import facebookIcon from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/cabeltes-jayson/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
      </a>
      <a href="https://github.com/cabeltes-jayson" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img src={githubIcon} alt="GitHub" className="footer-icon" />
      </a>
      <a href="https://www.facebook.com/Cabeltes.Jayson/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img src={facebookIcon} alt="Facebook" className="footer-icon" />
      </a>
    </footer>
  );
};

export default Footer;
