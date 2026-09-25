import React from 'react';
import Icon from './Icon';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Kevin Rio Harristyando · Data Scientist · ML &amp; GenAI</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/kevinrioharristyando/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href="https://github.com/kevinrioharris" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="github" />
          </a>
          <a href="mailto:kevinrioharris@gmail.com" aria-label="Email">
            <Icon name="mail" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
