import React from 'react';
import { skills } from '../data/skills';
import '../styles/components/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming & Frameworks</h3>
            <div className="skill-tags">
              {skills.programming.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Machine Learning</h3>
            <div className="skill-tags">
              {skills.machineLearning.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Data Engineering & Cloud</h3>
            <div className="skill-tags">
              {skills.dataEngineering.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Visualization & BI Tools</h3>
            <div className="skill-tags">
              {skills.visualization.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              {skills.databases.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Business Tools</h3>
            <div className="skill-tags">
              {skills.businessTools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages</h3>
          <div className="languages-grid">
            {skills.languages.map((lang, index) => (
              <div key={index} className="language-item">
                <strong>{lang.language}:</strong> {lang.level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;