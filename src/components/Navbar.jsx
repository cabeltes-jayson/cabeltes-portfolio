import React from "react";
import "./navbar.css";

const Navbar = ({ onContactClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About Me</li>
        <li className="navbar-item">Projects</li>
      </ul>
      <button className="contact-btn" onClick={onContactClick}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
