import React from 'react';
import { professionalExperience, organizationExperience } from '../data/experience';
import { projects } from '../data/projects';
import { education } from '../data/education';
import { skills } from '../data/skills';
import '../styles/components/Resume.css';

const Resume = () => {
  const certifications = [
    "Data Analyst Associate – Datacamp (2024)",
    "Google Data Analytics Certificate – Google (2024)",
    "Google Business Intelligence – Google (2024)",
    "Microsoft Power BI Data Analyst – Microsoft (2024)",
    "Mathematics for Machine Learning – Imperial College London (2024)",
    "DeepLearning.AI TensorFlow Developer – Coursera (2024)",
    "Machine Learning Specialization – University of Washington (2024)",
    "Machine Learning Specialization – Stanford University & DeepLearning.AI (2023)",
    "IBM Data Science – IBM (2023)",
    "Data Scientist Professional with Python – Datacamp (2023)",
    "Machine Learning Scientist with Python – Datacamp (2023)",
    "Data Scientist with Python – Datacamp (2023)",
    "Data Analyst in SQL – Datacamp (2023)",
    "Data Analyst in Tableau – Datacamp (2023)",
    "Deep Learning in Python – Datacamp (2023)",
    "Artificial Intelligence (AI) Fundamentals – Datacamp (2023)",
    "English Proficiency (C2 Level) – EF SET (2024)",
    "UNHCR Delegate, Asia Youth International MUN – Putrajaya, Malaysia (2019)"
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-content">
          {/* Header Section */}
          <header className="resume-header">
            <h1>Kevin Rio Harristyando</h1>
            <h2>Data Scientist & Machine Learning Enthusiast</h2>
            <div className="contact-info-resume">
              <p>Jakarta, ID | (+62) 82136276405 | kevinrioharris@gmail.com</p>
              <p>linkedin.com/in/kevinrioharristyando/ | https://kevinrioharris.github.io/</p>
            </div>
            <a 
              href="https://drive.usercontent.google.com/download?id=1xRkqdhdLy81mDHqTBhoGz_qYmnPoqkwx&export=download&authuser=0&confirm=t&uuid=abe89357-a4ca-4b88-895c-f2be7a71c800&at=ALoNOglqid_1VAGrYfkJNa9M6jlb:1746781970908" 
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
              Data Scientist with hands-on experience in machine learning, Explainable AI (XAI), data engineering, and applied analytics. 
              Built end-to-end ML systems, including an early sheet-break detection model with XAI insights that reduced downtime losses by $5,000 per incident, 
              and automated ETL pipelines processing 10k+ daily records. Skilled in developing production-ready models, deploying apps on Streamlit and GCP, 
              and translating complex model outputs into clear, actionable insights. Passionate about solving operational challenges with scalable, data-driven solutions.
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

          {/* Projects Experience */}
          <div className="resume-section">
            <h3 className="highlighted">Projects Experience</h3>
            {projects.map(project => (
              <div key={project.id} className="resume-item">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="technologies-resume">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </div>
                {project.link !== "#" && (
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
                <strong>Programming & Frameworks:</strong> {skills.programming.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Machine Learning:</strong> {skills.machineLearning.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Data Engineering & Cloud:</strong> {skills.dataEngineering.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Visualization & BI Tools:</strong> {skills.visualization.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Databases:</strong> {skills.databases.join(', ')}
              </div>
              <div className="skill-category-resume">
                <strong>Business Tools:</strong> {skills.businessTools.join(', ')}
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
                <div key={index} className="certification-item">{cert}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;