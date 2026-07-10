import React from 'react';
import { skills } from '../data/skills';
import useReveal from '../hooks/useReveal';
import '../styles/components/Skills.css';

const SkillCategory = ({ title, items, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`skill-category reveal reveal-delay-${Math.min(index + 1, 5)}`}>
      <h3>{title}</h3>
      <div className="skill-tags">
        {items.map((skill, i) => (
          <span key={i} className="skill-tag" style={{ '--i': i }}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    { title: 'Machine Learning', items: skills.machineLearning },
    { title: 'GenAI & Agents', items: skills.genAI },
    { title: 'Data Engineering', items: skills.dataEngineering },
    { title: 'Full Stack Development', items: skills.fullStack },
    { title: 'Analytics', items: skills.analytics },
    { title: 'Programming Languages', items: skills.programming }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-eyebrow">Toolkit</p>
        <h2>Skills</h2>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <SkillCategory title={cat.title} items={cat.items} index={index} key={cat.title} />
          ))}
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
