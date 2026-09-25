import React from 'react';
import useReveal from '../hooks/useReveal';
import Icon from './Icon';
import '../styles/components/Contact.css';

const Contact = () => {
  const ref = useReveal();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card reveal" ref={ref}>
          <div className="contact-glow" aria-hidden="true" />
          <p className="section-eyebrow">Let's Connect</p>
          <h2>
            Have a problem hiding in <span className="serif">your data?</span>
          </h2>
          <p className="contact-lead">
            I'm actively looking for data science, ML and GenAI roles in any industry. Feel free to reach out by email
            or connect with me on LinkedIn.
          </p>

          <div className="contact-buttons">
            <a href="mailto:kevinrioharris@gmail.com" className="btn accent">
              <Icon name="mail" /> kevinrioharris@gmail.com
            </a>
            <a href="https://linkedin.com/in/kevinrioharristyando/" target="_blank" rel="noopener noreferrer" className="btn secondary">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a href="https://github.com/kevinrioharris" target="_blank" rel="noopener noreferrer" className="btn github-btn">
              <Icon name="github" /> GitHub
            </a>
          </div>

          <p className="contact-meta">
            <span><Icon name="map-pin" /> Jakarta, ID</span>
            <span><Icon name="phone" /> (+62) 82136276405</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
