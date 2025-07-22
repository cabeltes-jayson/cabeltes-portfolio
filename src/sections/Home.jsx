import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import profileImg from "../assets/profile1.jpg";
import pixelBg from "../assets/pixel-background.gif";

const roles = [
  "Full-Stack Developer",
  "IoT Developer",
  "Web Developer"
];

// You can adjust the typing and erasing speed here:
const TYPING_SPEED = 50; // ms per character (typing)
const ERASING_SPEED = 50; // ms per character (erasing, increase for slower backspace)
const DELAY_BETWEEN = 1000;

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  // const [displayed, setDisplayed] = useState("");
  // const [typing, setTyping] = useState(true);
  // const [fade, setFade] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2000); // Flip every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Typing/fading animation
  // useEffect(() => {
  //   let timeout;
  //   if (typing) {
  //     if (displayed.length < roles[roleIdx].length) {
  //       timeout = setTimeout(() => {
  //         setDisplayed(roles[roleIdx].slice(0, displayed.length + 1));
  //       }, TYPING_SPEED);
  //     } else {
  //       setTimeout(() => setFade(true), DELAY_BETWEEN);
  //     }
  //   } else {
  //     if (displayed.length > 0) {
  //       timeout = setTimeout(() => {
  //         setDisplayed(displayed.slice(0, -1));
  //       }, ERASING_SPEED);
  //     } else {
  //       setFade(false);
  //       setRoleIdx((roleIdx + 1) % roles.length);
  //       setTyping(true);
  //     }
  //   }
  //   return () => clearTimeout(timeout);
  // }, [displayed, typing, roleIdx]);

  // useEffect(() => {
  //   if (fade) {
  //     setTimeout(() => setTyping(false), 400);
  //   }
  // }, [fade]);

  // You can adjust the zoom of the pixel background by changing the bgZoom value below:
  const bgZoom = 1; // <-- Increase this value to zoom in, decrease to zoom out

  const sectionStyle = {
    background: `url(${pixelBg}) center center/${bgZoom * 100}% ${bgZoom * 100}% no-repeat, linear-gradient(120deg, #232526 0%, #1a2980 100%)`,
    backgroundBlendMode: 'lighten',
    backgroundSize: `${bgZoom * 100}% ${bgZoom * 100}%, cover`,
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundAttachment: 'scroll',
    transition: 'background-position 0.2s',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    position: 'relative',
    minHeight: '85vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2.5rem 1rem',
  };

  return (
    <section id="home" className="home-section code-bg" ref={bgRef} style={sectionStyle}>
      <div className="home-content">
        <div className="home-left">
          <h1 className="home-title hover-shine">Welcome to my Portfolio!</h1>
          <h2 className="home-subtitle hover-shine">I am Jayson B. Cabeltes,</h2>
          {/* <div className={`typing-role large-typing hover-shine`}>
            I am a <span className={fade ? "fade" : ""}>{displayed}</span>
          </div> */}
          <div className="flip-role hover-shine">
            I am a <span key={roleIdx}>{roles[roleIdx]}</span>
          </div>
        </div>
        <div className="home-right">
          <div className="profile-img-wrapper">
            <img src={profileImg} alt="Profile" className="profile-img hover-profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
