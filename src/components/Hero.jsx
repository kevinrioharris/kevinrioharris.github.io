import React, { useEffect, useState } from 'react';
import { scrollToId } from '../utils/scroll';
import '../styles/components/Hero.css';

const ROLES = [
  'Data Scientist',
  'Industrial Machine Learning',
  'GenAI & Agents Builder'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  const handleAnchorClick = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = currentRole.slice(0, text.length + 1);
        setText(next);
        if (next === currentRole) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = currentRole.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      <div className="container">
        <div className="hero-content">
          <span className="open-to-work">
            <span className="pulse-dot"></span>
            Open to new opportunities
          </span>
          <p className="hero-eyebrow">Hi, I'm</p>
          <h1>Kevin Rio Harristyando</h1>
          <h2 className="typewriter">
            <span>{text}</span>
            <span className="cursor">|</span>
          </h2>
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
              <a href="/" onClick={handleAnchorClick('projects')} className="btn primary">View My Projects</a>
              <a href="/resume" className="btn secondary">View My Resume</a>
            </div>
            <div className="bottom-button">
              <a href="/" onClick={handleAnchorClick('contact')} className="btn tertiary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
      <a href="/" onClick={handleAnchorClick('about')} className="scroll-cue" aria-label="Scroll to About section">
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
