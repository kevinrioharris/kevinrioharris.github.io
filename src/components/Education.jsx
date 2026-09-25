import React from 'react';
import { education } from '../data/education';
import useReveal from '../hooks/useReveal';
import '../styles/components/Education.css';

const EducationCard = ({ edu, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`education-item reveal reveal-delay-${Math.min(index + 1, 5)}`}>
      <div className="education-header">
        <div className="education-title">
          <h3>{edu.degree}</h3>
          <h4>{edu.institution}</h4>
        </div>
        <div className="education-meta">
          <span className="location">{edu.location}</span>
          <span className="period">{edu.period}</span>
        </div>
      </div>

      <div className="education-details">
        {edu.details.score && <p className="score">{edu.details.score}</p>}
        {edu.details.gpa && <p className="gpa">{edu.details.gpa}</p>}

        {edu.details.competencies && (
          <div className="competencies">
            <h5>Key Competencies:</h5>
            <ul>
              {edu.details.competencies.map((competency, i) => (
                <li key={i}>{competency}</li>
              ))}
            </ul>
          </div>
        )}

        {edu.details.coursework && (
          <div className="coursework">
            <h5>Relevant Coursework:</h5>
            <div className="coursework-tags">
              {edu.details.coursework.map((course, i) => (
                <span key={i} className="course-tag">{course}</span>
              ))}
            </div>
          </div>
        )}

        {edu.details.thesis && (
          <div className="thesis">
            <h5>Thesis:</h5>
            <p>{edu.details.thesis}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <p className="section-eyebrow">Background</p>
        <h2>Trained as an <span className="serif">engineer</span> first.</h2>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <EducationCard edu={edu} index={index} key={edu.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
