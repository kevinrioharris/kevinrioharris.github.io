import React from 'react';
import { certifications } from '../data/certifications';
import useReveal from '../hooks/useReveal';
import Icon from './Icon';
import '../styles/components/Certifications.css';

const CertCard = ({ cert, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`cert-card reveal reveal-delay-${Math.min(index + 1, 5)}`}>
      <div className="cert-icon"><Icon name="medal" /></div>
      <h4>{cert.name}</h4>
      <p>{cert.issuer}</p>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <p className="section-eyebrow">Credentials</p>
        <h2>Licenses &amp; <span className="serif">certifications</span></h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <CertCard cert={cert} index={index} key={cert.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
