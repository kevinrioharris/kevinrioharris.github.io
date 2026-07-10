import React, { useRef } from 'react';
import { projects } from '../data/projects';
import useReveal from '../hooks/useReveal';
import '../styles/components/Projects.css';

const ProjectCard = ({ project, index }) => {
  const revealRef = useReveal();
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div
      ref={(node) => {
        revealRef.current = node;
        cardRef.current = node;
      }}
      className={`project-card reveal reveal-delay-${Math.min(index + 1, 5)}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className={`project-placeholder ${project.className}`}>
            <span>{project.icon}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects Experience</h2>
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
