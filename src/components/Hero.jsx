import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Kevin Rio Harristyando</h1>
          <h2>Data Scientist & Machine Learning Enthusiast</h2>
          <div className="contact-info">
            <p>Jakarta, ID | (+62) 82136276405 | kevinrioharris@gmail.com</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/kevinrioharristyando/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>•</span>
              <a href="https://kevinrioharris.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a>
              <span>•</span>
              <a href="https://github.com/kevinrioharris" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-buttons">
            <div className="top-buttons">
              <a href="#projects" className="btn primary">View My Projects</a>
              <a href="/resume" className="btn secondary">View My Resume</a>
            </div>
            <div className="bottom-button">
              <a href="#contact" className="btn tertiary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;