import React from 'react';
import '../css/NavBar.css';
import { IoClose, IoMenu } from "react-icons/io5";

// Contact Modal 
type NavBarProps = {onContactClick: () => void};


const NavBar = ({onContactClick} : NavBarProps) => {
  // Navbar state for mobile environment
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
            {menuOpen ? <IoClose /> : <IoMenu />}
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
            <a href="/#projects" onClick={closeMenu} className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/#contacts" onClick={() => { closeMenu(); onContactClick(); }} className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;