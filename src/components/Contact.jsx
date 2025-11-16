import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or connect with me on LinkedIn</p>
        
        <div className="contact-buttons">
          <a href="mailto:kevinrioharris@gmail.com" className="btn primary">Email Me</a>
          <a href="https://linkedin.com/in/kevinrioharristyando/" target="_blank" rel="noopener noreferrer" className="btn secondary">LinkedIn</a>
          <a href="https://github.com/kevinrioharris" target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;