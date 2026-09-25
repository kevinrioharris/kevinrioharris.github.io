import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToId } from '../utils/scroll';
import Icon from './Icon';
import SignalPanel from './SignalPanel';
import '../styles/components/Hero.css';

const ROLES = [
  'Data Scientist',
  'ML Engineer',
  'AI Engineer',
  'Data Engineer',
  'Data Analyst'
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
    const doneTyping = !deleting && text === currentRole;
    const speed = doneTyping ? 1400 : deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
      } else if (!deleting) {
        setText(currentRole.slice(0, text.length + 1));
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
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="open-to-work">
            <span className="pulse-dot"></span>
            Open to new opportunities
          </span>

          <h1>
            Kevin Rio
            <br />
            Harristyando
          </h1>

          <p className="hero-tagline">
            I turn <span className="serif">messy data into decisions</span>, from predictive models
            and analytics pipelines to GenAI agents that people actually use, in any industry.
          </p>

          <p className="typewriter" aria-label={`Roles: ${ROLES.join(', ')}`}>
            <span className="typewriter-prompt" aria-hidden="true">$ whoami →</span>
            <span className="typewriter-text" aria-hidden="true">{text}</span>
            <span className="cursor" aria-hidden="true" />
          </p>

          <div className="hero-buttons">
            <a href="#projects" onClick={handleAnchorClick('projects')} className="btn primary">
              View My Projects <Icon name="arrow-right" className="icon-arrow" />
            </a>
            <Link to="/resume" className="btn secondary">View My Resume</Link>
            <a href="#contact" onClick={handleAnchorClick('contact')} className="btn tertiary">Contact Me</a>
          </div>

          <div className="hero-meta">
            <span className="hero-location"><Icon name="map-pin" /> Jakarta, Indonesia</span>
            <span className="hero-meta-divider" aria-hidden="true" />
            <div className="social-links">
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
        </div>

        <div className="hero-visual">
          <SignalPanel />
          <div className="hero-impact">
            <p className="hero-impact-label">Real results from past projects</p>
            <div className="hero-impact-grid">
              <a href="#projects" onClick={handleAnchorClick('projects')} className="impact-card">
                <span className="impact-num">~$10K/hr</span>
                <span className="impact-label">downtime avoided</span>
                <span className="impact-project">Sheet-break detection</span>
              </a>
              <a href="#projects" onClick={handleAnchorClick('projects')} className="impact-card">
                <span className="impact-num">10 hrs → 10 min</span>
                <span className="impact-label">monthly reporting time</span>
                <span className="impact-project">GenAI reporting agents</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" onClick={handleAnchorClick('about')} className="scroll-cue" aria-label="Scroll to About section">
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
