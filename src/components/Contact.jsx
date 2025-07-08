import React from "react";
import "./contact.css";

const Contact = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Contact Me</h2>
        <br></br>
        <p>Email: cabeltes.jayson7@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
