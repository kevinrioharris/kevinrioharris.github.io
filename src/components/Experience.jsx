import React from 'react';
import { professionalExperience, organizationExperience } from '../data/experience';
import '../styles/components/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        
        <div className="experience-timeline">
          {professionalExperience.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="location">{exp.location}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="section-subtitle">Organization Experience</h3>
        <div className="organization-experience">
          {organizationExperience.map(org => (
            <div key={org.id} className="org-item">
              <div className="org-header">
                <h4>{org.position}</h4>
                <span className="org-period">{org.period}</span>
              </div>
              <p className="org-name">{org.organization}</p>
              <ul className="org-achievements">
                {org.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;