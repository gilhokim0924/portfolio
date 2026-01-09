import React from 'react';
import '../css/NavBar.css';
import { IoClose, IoMenu } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';

// Contact Modal 
type NavBarProps = {onContactClick: () => void};


const NavBar = ({onContactClick} : NavBarProps) => {
  // Navbar state for mobile environment
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  // Auto Scroll
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({behavior: 'auto'});
      }
    }
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-logo-menu-container">
          <div onClick={() => {scrollToSection('profile'); closeMenu()}}
            className="navbar-logo">
            Gilho Kim
          </div>
          {/* Mobile Menu Button */}
          <div className="navbar-menu-icon" 
           onClick={toggleMenu}> {menuOpen ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <div onClick={() => {scrollToSection('about'); closeMenu()}} 
            className="nav-links">About</div>
          </li>
          <li className="nav-item">
            <div onClick={() => {scrollToSection('experience'); closeMenu()}} 
              className="nav-links">Experience</div>
          </li>
          <li className="nav-item">
            <div onClick={() => {scrollToSection('projects'); closeMenu()}}
              className="nav-links">Projects</div>
          </li>
          <li className="nav-item">
            <div onClick={() => { 
                closeMenu(); 
                onContactClick();
                if (location.pathname !== '/') {
                  navigate('/');
                }
              }}
              className="nav-links">Contact</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;