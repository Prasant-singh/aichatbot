import React from 'react';
import './ai.css';

const AIservices = () => {
  return (
    <div className="ai-services-container">
      <h1>AI Support Services</h1>
      <div className="content">
        <div className="column left-column">
          <AdvantageItem
            title="Enhanced Decision Making"
            description={
              <>
                <strong>Data-Driven Insights:</strong> AI and ML analyze vast amounts of data to provide actionable insights, leading to more informed and accurate decision-making.<br />
                <strong>Predictive Analytics:</strong> These technologies predict future trends and behaviors, helping businesses and organizations plan strategically.
              </>
            }
            icon="📊"
          />
          <AdvantageItem
            title="Automation of Tasks"
            description={
              <>
                <strong>Efficiency and Productivity:</strong> AI and ML automate repetitive and mundane tasks, freeing up human resources for more complex and creative work.<br />
                <strong>Cost Reduction:</strong> Automation reduces operational costs by minimizing human error and increasing efficiency.
              </>
            }
            icon="🤖"
          />
          <AdvantageItem
            title="Solving Complex Problems"
            description={
              <>
                <strong>Scientific Research:</strong> AI and ML contribute to advancements in scientific research by analyzing complex data sets and identifying patterns.<br />
                <strong>Environmental Solutions:</strong> These technologies help in addressing environmental challenges, such as climate change, through data analysis and predictive modeling.
              </>
            }
            icon="🔬"
          />
        </div>
        <div className="column center-column">
          <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="AI and ML" className="central-image" />
        </div>
        <div className="column right-column">
          <AdvantageItem
            title="Enhanced Security"
            description={
              <>
                <strong>Threat Detection:</strong> AI and ML systems detect and respond to security threats in real-time, enhancing cybersecurity measures.<br />
                <strong>Fraud Prevention:</strong> Financial institutions use AI to detect fraudulent activities and mitigate risks.
              </>
            }
            icon="🔒"
          />
          <AdvantageItem
            title="Data Collection and Processing"
            description={
              <>
                <strong>Data Gathering:</strong> AI and ML systems require vast amounts of data to learn and make predictions. This data can come from various sources, including sensors, user interactions, and historical records.<br />
                <strong>Data Cleaning:</strong> Raw data often needs to be cleaned and pre-processed to remove noise and inconsistencies. This step ensures the data is in a suitable format for analysis.
              </>
            }
            icon="📈"
          />
          <AdvantageItem
            title="Centralized Monitoring"
            description="All the collected data is transmitted in real-time to a centralized dashboard. Here, factory managers or authorized personnel can view detailed reports, graphs, and analytics about energy consumption and patterns."
            icon="📊"
          />
        </div>
      </div>

      <h2>How AI/ML Services Implemented By Us</h2>
      <div className="content">
        <div className="column left-column">
          <AdvantageItem
            title="Analysis & Reporting"
            description="The model uses advanced algorithms, possibly integrating AI and data analytics, to process this data. It identifies trends, inefficiencies, and anomalies. This information can be presented in daily, weekly, or monthly reports."
            icon="📉"
          />
          <AdvantageItem
            title="Model Evaluation"
            description={
              <>
                <strong>Metrics:</strong> Evaluating the performance of the model with metrics like accuracy, precision, recall, F1 score, or ROC-AUC.<br />
                <strong>Cross-Validation:</strong> Techniques like cross-validation are performed to ensure the model's robustness and avoid overfitting.
              </>
            }
            icon="📊"
          />
        </div>
        <div className="column center-column">
          <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="AI Implementation" className="central-image" />
        </div>
        <div className="column right-column">
          <AdvantageItem
            title="Model Deployment"
            description={
              <>
                <strong>Deploy Model:</strong> Using frameworks like Flask, Django, or Fast API to create an API for the model. Deploy the API on cloud platforms like AWS, Azure, or Google Cloud.<br />
                <strong>Create Interfaces:</strong> Develop user interfaces using tools like Streamlit or Gradio to allow users to interact with the model.
              </>
            }
            icon="🚀"
          />
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5IjPB3xM5RSaqrEw5gxC4FBaVM4xz5BISJ0cZxX-UP8fO0w/viewform">Get Service</a>
    </div>
  );
};

const AdvantageItem = ({ title, description, icon }) => (
  <div className="advantage-item">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default AIservices;
