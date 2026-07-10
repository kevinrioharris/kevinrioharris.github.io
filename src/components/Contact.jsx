import React from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/components/Contact.css';

const Contact = () => {
  const ref = useReveal();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="section-eyebrow">Let's Connect</p>
          <h2>Contact Me</h2>
          <p>I'm actively looking for new opportunities — feel free to reach out via email or connect with me on LinkedIn</p>

          <div className="contact-buttons">
            <a href="mailto:kevinrioharris@gmail.com" className="btn primary">Email Me</a>
            <a href="https://linkedin.com/in/kevinrioharristyando/" target="_blank" rel="noopener noreferrer" className="btn secondary">LinkedIn</a>
            <a href="https://github.com/kevinrioharris" target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;