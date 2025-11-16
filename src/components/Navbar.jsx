import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;