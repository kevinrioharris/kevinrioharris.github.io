import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { scrollToId } from '../utils/scroll';
import '../styles/components/Navbar.css';

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSectionClick = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToId(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="nav-brand" aria-label="Kevin Rio Harristyando, home">
          <span className="nav-brand-mark">KR</span>
          <span className="nav-brand-name">Kevin Rio</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {SECTION_LINKS.map((link) => (
            <li key={link.id}>
              <a href={`/#${link.id}`} onClick={handleSectionClick(link.id)}>{link.label}</a>
            </li>
          ))}
          <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
