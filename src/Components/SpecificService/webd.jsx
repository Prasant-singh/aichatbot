import React from 'react';
import './webd.css';

const InteractiveDashboards = () => {
  return (
    <div className="interactive-dashboards-container">
      <h1>Web Support Services</h1>
      <div className="content">
        <div className="column left-column">
          <ServiceItem
            title="Enhanced Data Visualization"
            description={
              <>
                <strong>Real-Time Insights:</strong> Dashboards provide real-time data visualization, allowing for immediate insights and timely decision-making.<br />
                <strong>Interactive Elements:</strong> Features like filters, drill-downs, and dynamic charts enable users to explore data intuitively.
              </>
            }
            icon="📊"
          />
          <ServiceItem
            title="Improved Decision Making"
            description={
              <>
                <strong>Actionable Insights:</strong> Dashboards consolidate data from various sources, presenting a unified view that aids in making informed decisions.<br />
                <strong>Performance Tracking:</strong> Monitor key performance indicators (KPIs) and metrics to track progress and identify areas for improvement.
              </>
            }
            icon="📈"
          />
        </div>
        <div className="column center-column">
        <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="devops" className="central-image" />
          
        </div>
        <div className="column right-column">
          <ServiceItem
            title="Increased Accessibility"
            description={
              <>
                <strong>User-Friendly Interfaces:</strong> Interactive dashboards are designed to be accessible and easy to use, catering to users with varying technical expertise.<br />
                <strong>Mobile Access:</strong> Responsive designs ensure dashboards are accessible on various devices, including smartphones and tablets.
              </>
            }
            icon="📱"
          />
          <ServiceItem
            title="Collaboration and Reporting"
            description={
              <>
                <strong>Shared Insights:</strong> Dashboards facilitate collaboration by allowing users to share insights and reports easily.<br />
                <strong>Customizable Reports:</strong> Generate customized reports tailored to specific needs, enhancing the relevance and impact of the data presented.
              </>
            }
            icon="🤝"
          />
        </div>
      </div>

      <h1>How Interactive Dashboards Are Implemented By Us</h1>
      <div className="content">
        <div className="column left-column">
          <ServiceItem
            title="Data Integration and Management"
            description={
              <>
                <strong>Data Sources:</strong> Connect to various data sources such as databases, APIs, and spreadsheets.<br />
                <strong>Data Processing:</strong> Use ETL (Extract, Transform, Load) processes to clean and prepare data for analysis.
              </>
            }
            icon="🔗"
          />
          <ServiceItem
            title="Backend Development"
            description={
              <>
                <strong>Data Storage:</strong> Implement databases like PostgreSQL, MySQL, or MongoDB to store and manage data.<br />
                <strong>API Development:</strong> Use frameworks like Flask, Django, or FastAPI to develop APIs that serve data to the frontend.
              </>
            }
            icon="💾"
          />
              <ServiceItem
            title="Monitoring and Maintenance"
            description={
              <>
                <strong>Performance Monitoring:</strong> Use monitoring tools to track the performance and usage of the dashboards.<br />
                <strong>Regular Updates:</strong> Continuously update and improve the dashboards based on user feedback and changing requirements.
              </>
            }
            icon="🔍"
          />
        </div>
        <div className="column center-column">
        <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="devops" className="central-image" />
          
          </div>
        <div className="column right-column">
          <ServiceItem
            title="Frontend Development"
            description={
              <>
                <strong>Visualization Libraries:</strong> Use libraries like D3.js, Chart.js, or Plotly to create interactive charts and graphs.<br />
                <strong>Frameworks:</strong> Implement frontend frameworks like React, Angular, or Vue.js for building responsive and dynamic user interfaces.
              </>
            }
            icon="🖥️"
          />
          <ServiceItem
            title="Dashboard Design and User Experience"
            description={
              <>
                <strong>Design Principles:</strong> Follow design principles to create intuitive and user-friendly interfaces.<br />
                <strong>Interactivity:</strong> Incorporate interactive elements such as filters, tooltips, and drill-downs to enhance user engagement.
              </>
            }
            icon="🎨"
          />
          <ServiceItem
            title="Deployment and Hosting"
            description={
              <>
                <strong>Hosting Services:</strong> Use cloud services like AWS, Azure, or Google Cloud to deploy and host the dashboards.<br />
                <strong>CI/CD Pipelines:</strong> Implement continuous integration and continuous deployment (CI/CD) pipelines to automate the deployment process.
              </>
            }
            icon="☁️"
          />
      
        </div>
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5IjPB3xM5RSaqrEw5gxC4FBaVM4xz5BISJ0cZxX-UP8fO0w/viewform" className='button-connect'>Get Service</a>
    </div>
  );
};  

const ServiceItem = ({ title, description, icon }) => (
  <div className="service-item">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default InteractiveDashboards;
