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
      <div className="navbar-container">
        <Link to="/" onClick={closeMenu} className="navbar-logo">
          Gilho Kim
        </Link>

        {/* Mobile Menu Button */}
        <div className="navbar-menu-icon" onClick={toggleMenu}> 
          {menuOpen ? "x" : "☰"}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/about" onClick={closeMenu} className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/education" onClick={closeMenu} className="nav-links">Education</Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" onClick={closeMenu} className="nav-links">Experience</Link>
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