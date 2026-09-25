import React from 'react';
import { professionalExperience, organizationExperience } from '../data/experience';
import { projects } from '../data/projects';
import { education } from '../data/education';
import { skills } from '../data/skills';
import { certifications } from '../data/certifications';
import '../styles/components/Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-content">
          {/* Header Section */}
          <header className="resume-header">
            <h1>Kevin Rio Harristyando</h1>
            <h2>Data Scientist | Machine Learning &amp; GenAI</h2>
            <div className="contact-info-resume">
              <p>Jakarta, ID | (+62) 82136276405 | kevinrioharris@gmail.com</p>
              <p>linkedin.com/in/kevinrioharristyando/ | https://kevinrioharris.github.io/</p>
            </div>
            <a
              href="/Kevin_Rio_Harristyando_CV.pdf"
              className="btn primary download-button"
              download
            >
              Download Resume PDF
            </a>
          </header>

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="highlighted">Professional Summary</h3>
            <p>
              Data Scientist who builds ML, analytics and GenAI systems that solve real business problems end to end, from predictive
              models to autonomous agents. Delivered a real-time predictive maintenance system saving an estimated
              $10K/hour in downtime, and a GenAI agent (Microsoft Copilot Studio + Databricks Genie) that automated
              natural-language analytics for non-technical teams. Full-stack across the ML lifecycle: PyTorch,
              Databricks, Airflow, FastAPI, React.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="resume-section">
            <h3 className="highlighted">Professional Experience</h3>
            {professionalExperience.map(exp => (
              <div key={exp.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h4>{exp.position}</h4>
                    <h5>{exp.company} | {exp.location}</h5>
                  </div>
                  <span className="resume-period">{exp.period}</span>
                </div>
                <ul className="resume-achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="resume-section">
            <h3 className="highlighted">Selected Projects</h3>
            {projects.map(project => (
              <div key={project.id} className="resume-item">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="technologies-resume">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </div>
                {project.link && project.link !== '#' && (
                  <div className="project-link-resume">
                    <strong>Project Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="highlighted">Education</h3>
            {education.map(edu => (
              <div key={edu.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution} | {edu.location}</h5>
                  </div>
                  <span className="resume-period">{edu.period}</span>
                </div>
                {edu.details.score && <p><strong>{edu.details.score}</strong></p>}
                {edu.details.gpa && <p><strong>{edu.details.gpa}</strong></p>}
                {edu.details.thesis && <p><strong>Thesis:</strong> {edu.details.thesis}</p>}
              </div>
            ))}
          </div>

          {/* Organization Experience */}
          <div className="resume-section">
            <h3 className="highlighted">Organization Experience</h3>
            {organizationExperience.map(org => (
              <div key={org.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h4>{org.position}</h4>
                    <h5>{org.organization}</h5>
                  </div>
                  <span className="resume-period">{org.period}</span>
                </div>
                <ul className="resume-achievements">
                  {org.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h3 className="highlighted">Skills</h3>
            <div className="skills-resume">
              <div className="skill-category-resume">
                <strong>Machine Learning:</strong> {skills.machineLearning.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>GenAI & Agents:</strong> {skills.genAI.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Data Engineering:</strong> {skills.dataEngineering.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Full Stack Development:</strong> {skills.fullStack.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Analytics:</strong> {skills.analytics.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Programming Languages:</strong> {skills.programming.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Languages:</strong> {skills.languages.map(lang => `${lang.language} (${lang.level})`).join(', ')}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h3 className="highlighted">Licenses & Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">{cert.name} — {cert.issuer}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
