import React from 'react';
import { projects } from '../data/projects';
import useReveal from '../hooks/useReveal';
import { highlightMetrics } from '../utils/highlight';
import Icon from './Icon';
import '../styles/components/Projects.css';

// Deterministic mini sparkline per project so each cover looks different
const sparkline = (seed) => {
  const pts = [];
  for (let i = 0; i <= 24; i += 1) {
    const y = 50 + Math.sin(i * 0.55 + seed) * 16 + Math.sin(i * 1.7 + seed * 2) * 8;
    pts.push(`${(i / 24) * 200},${y.toFixed(1)}`);
  }
  return `M${pts.join(' L')}`;
};

const ProjectCard = ({ project, index }) => {
  const revealRef = useReveal();
  const featured = index === 0;
  const hasLink = project.link && project.link !== '#';

  return (
    <article
      ref={revealRef}
      className={`project-card kind-${project.className} ${featured ? 'is-featured' : ''} reveal reveal-delay-${Math.min((index % 3) + 1, 5)}`}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <svg className="project-spark" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
              <path d={sparkline(project.id * 1.3)} />
            </svg>
            <span className="project-icon"><Icon name={project.icon} /></span>
          </div>
        )}
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{highlightMetrics(project.description)}</p>
        <div className="technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        {hasLink ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project <Icon name="arrow-up-right" />
          </a>
        ) : (
          <span className="project-note">Internal · enterprise deployment</span>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-eyebrow">Selected Work</p>
        <h2>Models in production, <span className="serif">not just notebooks</span>.</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
