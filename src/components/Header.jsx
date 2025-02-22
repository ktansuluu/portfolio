import React, { useState } from "react";
import "../styles/Header.css";
import { FiSun } from "react-icons/fi";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Левая часть - Бургер-меню и логотип */}
        <div className="left-side">
          <div className="burger-container" onClick={toggleMenu}>
            <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </div>
          <h1 className="logo">{`{ dev.tansuluu.co }`}</h1>
        </div>

        {/* Правая часть - Темная тема и резюме */}
        <div className="right-buttons">
          <div className="theme-container">
            <button className="theme-button">
              <FiSun size={20} />
            </button>
          </div>
          <button className="resume-button">RESUME</button>
        </div>
      </div>

      {/* ВЫПАДАЮЩЕЕ МЕНЮ */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>SOLVES</li>
            <li>CERTIFICATE</li>
            <li>EXPERIENCE</li>
            <li>GET IN TOUCH</li>
          </ul>

          <div className="logos-container">
            <a href="mailto:someone@example.com" className="logo-item">
              <FaEnvelope size={20} />
            </a>
            <a href="https://github.com/yourusername" className="logo-item">
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/yourusername/"
              className="logo-item"
            >
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/yourphonenumber" className="logo-item">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
