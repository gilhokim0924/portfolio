import React from 'react';
import { Link } from "react-router-dom";
import '../css/NavBar.css';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className={`navbar-container ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-logo-menu-container">
          <a href="/#profile" onClick={closeMenu} className="navbar-logo">
            Gilho Kim
          </a>
          {/* Mobile Menu Button */}
          <div className="navbar-menu-icon" onClick={toggleMenu}> 
            {menuOpen ? "x" : "☰"}
          </div>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a href="/#about" onClick={closeMenu} 
            className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="/#experience" onClick={closeMenu} className="nav-links">Experience</a>
          </li>
          <li className="nav-item">
            <Link to="/projects" onClick={closeMenu} className="nav-links">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeMenu} className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;