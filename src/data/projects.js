export const projects = [
  {
    id: 1,
    title: "Early Sheet Break Detection with Explainable AI",
    description: "Built and compared PyTorch neural network and XGBoost models on time-series sensor data to predict sheet breaks 30 minutes in advance. Applied SHAP for model explainability, giving operators interpretable, feature-level reasoning behind each alert instead of a black-box prediction. Result: enabled proactive intervention, reducing unplanned downtime losses (~$10K/hour).",
    technologies: ["PyTorch", "XGBoost", "SHAP", "Time Series", "Explainable AI"],
    link: "#",
    icon: "zap",
    className: "sheet-break",
    category: "Predictive Maintenance"
  },
  {
    id: 2,
    title: "Anomaly Prediction for Equipment",
    description: "Built an LSTM Autoencoder to detect anomalies in industrial equipment sensor time-series, flagging early deviations from normal operating patterns before failure. Result: earlier detection of abnormal equipment behavior, supporting proactive maintenance decisions.",
    technologies: ["PyTorch", "LSTM Autoencoder", "Anomaly Detection", "Time Series"],
    link: "#",
    icon: "trending-up",
    className: "anomaly",
    category: "Anomaly Detection"
  },
  {
    id: 3,
    title: "Auto Loop Monitoring System (RGE Group-Wide)",
    description: "Built an automated loop monitoring system deployed across all mills within RGE — APRIL, APR, Asia Symbol, and Bracell — spanning operations across Indonesia, China, and Brazil. Enabled live monitoring and control of production loops, giving operators real-time visibility across business units and countries. Result: standardized loop monitoring across four business units, replacing manual, mill-by-mill tracking.",
    technologies: ["PI Web API", "PI SDK", "Python", "Real-Time Monitoring"],
    link: "#",
    icon: "refresh",
    className: "loop-monitoring",
    category: "Real-Time Monitoring"
  },
  {
    id: 4,
    title: "Wood Supply-Demand Dashboard with Harvesting Simulation",
    description: "Built a dashboard tracking wood supply and demand end-to-end, from plantation harvesting through to mill delivery, with simulation capability to forecast harvesting scenarios and supply availability. Result: adopted by 30+ active users across multiple departments for planning and decision-making.",
    technologies: ["Python", "FastAPI", "React", "Simulation"],
    link: "#",
    icon: "tree",
    className: "wood-dashboard",
    category: "Simulation & Dashboards"
  },
  {
    id: 5,
    title: "GenAI Reporting Agents Across Business Units",
    description: "Built GenAI agents (Copilot Studio, Databricks Genie, AWS Bedrock) enabling natural-language querying of internal documents and production data, including an agent that automated monthly reporting across 4 business units. Result: cut ad-hoc reporting requests and reduced monthly reporting time from 10 hours to just 10 minutes.",
    technologies: ["Copilot Studio", "Databricks Genie", "AWS Bedrock", "GenAI"],
    link: "#",
    icon: "bot",
    className: "genai-agents",
    category: "GenAI Agents"
  },
  {
    id: 6,
    title: "Hotel Booking Cancellation Prediction",
    description: "Built classification models on cancellation drivers, shipped as a Streamlit app for single/batch predictions with Tableau executive dashboards for business insights.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Tableau"],
    link: "https://github.com/kevinrioharris/Hotel_Booking_Demand",
    image: "/hotel-pic.jpeg",
    className: "hotel",
    category: "Classification"
  },
  {
    id: 7,
    title: "Bachelor's Thesis: Fault Diagnosis for Chemical Process",
    description: "Developed a PCA + Fisher Discriminant Analysis system for online fault diagnosis in chemical processes, improving detection accuracy by 13.09%. Published in the Fault Diagnosis Journal.",
    technologies: ["PCA", "Fisher Discriminant Analysis", "Fault Diagnosis"],
    link: "https://etd.repository.ugm.ac.id/penelitian/detail/214425",
    icon: "graduation-cap",
    className: "thesis",
    category: "Research"
  }
];
