import React from 'react';
import useReveal from '../hooks/useReveal';
import useCountUp from '../hooks/useCountUp';
import '../styles/components/About.css';

const Stat = ({ target, suffix, prefix, label }) => {
  const [ref, value] = useCountUp(target);
  return (
    <div className="stat" ref={ref}>
      <h3>{prefix}{value.toLocaleString()}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
};

const About = () => {
  const revealRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container reveal" ref={revealRef}>
          <div className="about-photo">
            <img src="/kevin-profile.jpeg" alt="Kevin Rio Harristyando" />
          </div>
          <div className="about-text">
            <p className="section-eyebrow">Get To Know Me</p>
            <h2>Professional Summary</h2>
            <p>
              Data Scientist who builds ML and GenAI systems that solve real industrial problems, from predictive
              models to autonomous agents. Delivered a real-time predictive maintenance system saving an estimated
              $10K/hour in downtime, and a GenAI agent (Microsoft Copilot Studio + Databricks Genie) that automated
              natural-language analytics for non-technical teams.
            </p>
            <p>
              Full-stack across the ML lifecycle: PyTorch, Databricks, Airflow, FastAPI, React. Passionate about
              turning complex model outputs into clear, actionable insights that operators and stakeholders can
              trust and act on.
            </p>

            <div className="quick-stats">
              <Stat target={10} prefix="$" suffix="K/hr" label="Downtime cost savings" />
              <Stat target={30} suffix=" min" label="Advance predictive alerts" />
              <Stat target={10000} suffix="+" label="Daily sensor records processed" />
              <Stat target={40} suffix="%" label="Less manual reporting" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
