import React from 'react';
import { professionalExperience, organizationExperience } from '../data/experience';
import useReveal from '../hooks/useReveal';
import '../styles/components/Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const ref = useReveal();
  return (
    <div
      key={exp.id}
      ref={ref}
      className={`experience-item reveal reveal-delay-${Math.min(index + 1, 5)}`}
    >
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
        {exp.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

const OrgCard = ({ org, index }) => {
  const ref = useReveal();
  return (
    <div
      key={org.id}
      ref={ref}
      className={`org-item reveal reveal-delay-${Math.min(index + 1, 5)}`}
    >
      <div className="org-header">
        <h4>{org.position}</h4>
        <span className="org-period">{org.period}</span>
      </div>
      <p className="org-name">{org.organization}</p>
      <ul className="org-achievements">
        {org.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-eyebrow">Career Journey</p>
        <h2>Professional Experience</h2>

        <div className="experience-timeline">
          {professionalExperience.map((exp, index) => (
            <ExperienceCard exp={exp} index={index} key={exp.id} />
          ))}
        </div>

        <h3 className="section-subtitle">Organization Experience</h3>
        <div className="organization-experience">
          {organizationExperience.map((org, index) => (
            <OrgCard org={org} index={index} key={org.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
