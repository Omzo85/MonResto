import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <div className="Navbar">
        <button onClick={toggleMenu} className="menu-toggle">
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className="NomDuRestaurant">
          <i className="fas fa-utensils"></i>
          Chez Khadija
        </Link>
        <div className="header-icons">
          <Link to="/login" className="profile-icon">
            <i className="fas fa-user"></i>
          </Link>
          <a href="#panier" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </a>
        </div>
      </div>
      
      <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={toggleMenu}><i className="fas fa-home"></i> Accueil</Link>
        <Link to="/login" onClick={toggleMenu}><i className="fas fa-user"></i> Connexion</Link>
        <a href="#panier" onClick={toggleMenu}><i className="fas fa-shopping-cart"></i> Panier</a>
        <a href="#contact" onClick={toggleMenu}><i className="fas fa-envelope"></i> Contact</a>
      </div>
    </header>
  );
}

export default Header;