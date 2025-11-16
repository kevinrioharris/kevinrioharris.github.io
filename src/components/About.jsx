import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-photo">
            <img src="/kevin-profile.jpeg" alt="Kevin Rio Harristyando" />
          </div>
          <div className="about-text">
            <h2>Professional Summary</h2>
            <p>
              Data Scientist with hands-on experience in machine learning, Explainable AI (XAI), data engineering, and applied analytics. 
              Served as part of the Analytics Center of Excellence (ACoE), building end-to-end ML systems including an early sheet-break detection model with XAI insights 
              that helped prevent unplanned downtime valued at $10,000 per hour and creating automated Databricks ETL pipelines processing 10k+ daily records. 
            </p>
            <p>
              Skilled in developing production-ready models, deploying apps on Streamlit and GCP, and translating complex model outputs into clear, actionable insights. 
              Passionate about solving operational challenges with scalable, data-driven solutions.
            </p>
            
            <div className="quick-stats">
              <div className="stat">
                <h3>$5,000+</h3>
                <p>Cost savings per incident</p>
              </div>
              <div className="stat">
                <h3>10k+</h3>
                <p>Daily records processed</p>
              </div>
              <div className="stat">
                <h3>80%</h3>
                <p>Reduction in manual errors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;