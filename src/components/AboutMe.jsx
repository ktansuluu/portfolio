import React from "react";
import "../styles/AboutMe.css";
import portrait from "../assets/image/portrait.png";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="text-section">
        <h1>
          <span className="gradient-text">Frontend Engineer</span>
        </h1>
        <p>
          Frontend Engineer with expertise in HTML, CSS, JavaScript, TypeScript,
          React, and Next.js. Skilled in creating responsive, user-friendly
          interfaces and building scalable web applications. Can assist in
          developing robust front-end solutions for both web and mobile
          platforms.
        </p>
        <button className="resumee-button">Open Resume</button>
      </div>
      <div className="image-section">
        <div className="image-border"></div>
        <div className="profile-image-container">
          <img src={portrait} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
