import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Header component for the ItaliaGusto blog.
 * Contains the site logo, navigation, and responsive menu functionality.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">🍝</span>
          <span className="logo-text">ItaliaGusto</span>
        </div>
        
        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/regions" className="nav-link">Regions</a></li>
            <li className="nav-item"><a href="/recipes" className="nav-link">Recipes</a></li>
            <li className="nav-item"><a href="/traditions" className="nav-link">Traditions</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
