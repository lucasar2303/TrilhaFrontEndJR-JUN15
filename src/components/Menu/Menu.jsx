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
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#gostos">Gostos Pessoais</a>
        <a href="#motivacoes">Motivações</a>
        <button className="btn-download">Download CV</button>
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
