import React, { useState } from "react";
import "../styles/Header.css";
import { FiSun } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left-side">
          <div className="burger-container" onClick={toggleMenu}>
            {isMenuOpen ? (
              <RxCross1 size={25} color="#7778a4" />
            ) : (
              <div className="burger-menu" style={{ gap: "5px" }}>
                <div className="line line1" style={{ height: "3px" }}></div>
                <div className="line line2" style={{ height: "3px" }}></div>
                <div className="line line3" style={{ height: "3px" }}></div>
              </div>
            )}
          </div>
          <h1 className="logo">{`{ dev.tansuluu.co }`}</h1>
        </div>

        <div className="right-buttons">
          <div className="theme-container">
            <button className="theme-button">
              <FiSun size={20} />
            </button>
          </div>
          <button className="resume-button">RESUME</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            {[
              "SERVICES",
              "ABOUT",
              "SKILLS",
              "PROJECTS",
              "SOLVES",
              "CERTIFICATE",
              "EXPERIENCE",
              "GET IN TOUCH",
            ].map((item, index) => (
              <li
                key={index}
                className="menu-item"
                style={{ fontFamily: "Roboto Condensed, sans-serif" }}
              >
                <span className="menu-line"></span>
                {item}
              </li>
            ))}
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
          <div className="code">
            <ul>Coded by Tansuluu Karybekova</ul>
          </div>
        </div>
      )}
    </header>
  );
}
