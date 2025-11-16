import React from 'react';
import { education } from '../data/education';
import '../styles/components/Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        
        <div className="education-timeline">
          {education.map(edu => (
            <div key={edu.id} className="education-item">
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
                      {edu.details.competencies.map((competency, index) => (
                        <li key={index}>{competency}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {edu.details.coursework && (
                  <div className="coursework">
                    <h5>Relevant Coursework:</h5>
                    <div className="coursework-tags">
                      {edu.details.coursework.map((course, index) => (
                        <span key={index} className="course-tag">{course}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;