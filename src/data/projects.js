export const projects = [
  {
    id: 1,
    title: "Early Sheet Break Detection with Explainable AI",
    description: "Built and compared PyTorch neural network and XGBoost models on time-series sensor data to predict sheet breaks 30-40 minutes in advance. Applied SHAP for model explainability, giving operators interpretable, feature-level reasoning behind each alert instead of a black-box prediction. Result: enabled proactive intervention, reducing unplanned downtime losses (~$10K/hour).",
    technologies: ["PyTorch", "XGBoost", "SHAP", "Time Series", "Explainable AI"],
    link: "#",
    icon: "⚡",
    className: "sheet-break"
  },
  {
    id: 2,
    title: "Anomaly Prediction for Equipment",
    description: "Built an LSTM Autoencoder to detect anomalies in industrial equipment sensor time-series, flagging early deviations from normal operating patterns before failure. Result: earlier detection of abnormal equipment behavior, supporting proactive maintenance decisions.",
    technologies: ["PyTorch", "LSTM Autoencoder", "Anomaly Detection", "Time Series"],
    link: "#",
    icon: "📈",
    className: "anomaly"
  },
  {
    id: 3,
    title: "Hotel Booking Cancellation Prediction",
    description: "Built classification models on cancellation drivers, shipped as a Streamlit app for single/batch predictions with Tableau executive dashboards for business insights.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Tableau"],
    link: "https://github.com/kevinrioharris/Hotel_Booking_Demand",
    image: "/hotel-pic.jpeg",
    className: "hotel"
  },
  {
    id: 4,
    title: "Bachelor's Thesis: Fault Diagnosis for Chemical Process",
    description: "Developed a PCA + Fisher Discriminant Analysis system for online fault diagnosis in chemical processes, improving detection accuracy by 13.09%. Published in the Fault Diagnosis Journal.",
    technologies: ["PCA", "Fisher Discriminant Analysis", "Fault Diagnosis"],
    link: "#",
    icon: "🎓",
    className: "thesis"
  }
];
