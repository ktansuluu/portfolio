import React from "react";
import "../styles/Header.css";
import { FiSun } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Левая часть - Бургер-меню и логотип */}
        <div className="left-side">
          <div className="burger-container">
            <div className="burger-menu">
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
    </header>
  );
}
