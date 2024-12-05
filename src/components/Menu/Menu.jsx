import React from 'react';
import './menu.css';
import { useState } from 'react';
import logoCoders from '../../assets/logo.webp';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
      setIsOpen(false);
    }
  };

  return (
    <header className="navbar">
      <img src={logoCoders} alt="Logo" className="logo" />

      <nav className={`nav-links ${isOpen ? 'active' : ''}`} onClick={handleNavClick}>
        <a href="#">Home</a>
        <a href="#about">Sobre</a>
        <a href="#interests">Gostos Pessoais</a>
        <a href="#motivation">Motivações</a>
        <a href="../../../public/pdf/Curriculo.pdf" download="Curriculo.pdf" >
          <button className="btn-download">
            Download CV
          </button>
        </a>
      </nav>

      <div className="menu" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'rotate-bar-1' : ''}`}></span>
        <span className={`bar ${isOpen ? 'hide-bar' : ''}`}></span>
        <span className={`bar ${isOpen ? 'rotate-bar-2' : ''}`}></span>
      </div>
    </header>
  );
}

export default Menu;
