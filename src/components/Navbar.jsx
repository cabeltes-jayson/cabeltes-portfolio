import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = ({ onContactClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-10}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-10}
            spy={true}
            activeClass="active"
          >
            About Me
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-10}
            spy={true}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
      </ul>
      <button className="contact-btn" onClick={onContactClick}>
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
