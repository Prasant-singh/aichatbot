import React from 'react';
import './cloud.css';

const CloudServices = () => {
  return (
    <div className="cloud-services-container">
      <h1>Cloud Support Services</h1>
      <div className="content">
        <div className="column left-column">
          <ServiceItem
            title="Scalability and Flexibility"
            description={
              <>
                <strong>On-Demand Resources:</strong> Cloud services offer scalable resources that can be adjusted based on demand, ensuring efficient use of resources and cost savings.<br />
                <strong>Global Reach:</strong> Organizations can deploy applications globally, reaching customers in different regions with minimal latency.
              </>
            }
            icon="🌍"
          />
          <ServiceItem
            title="Cost Efficiency"
            description={
              <>
                <strong>Pay-As-You-Go Model:</strong> Businesses pay only for the resources they use, reducing capital expenditure on hardware and infrastructure.<br />
                <strong>Reduced Maintenance Costs:</strong> Cloud providers handle maintenance, updates, and security, allowing organizations to focus on their core activities.
              </>
            }
            icon="💰"
          />
          <ServiceItem
            title="Enhanced Collaboration"
            description={
              <>
                <strong>Real-Time Collaboration:</strong> Cloud platforms enable real-time collaboration on projects, allowing teams to work together from different locations.<br />
                <strong>Data Sharing:</strong> Secure and easy data sharing improves productivity and fosters innovation.
              </>
            }
            icon="🤝"
          />
        </div>
        <div className="column center-column">
          <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="Cloud Services" className="central-image" />
          
        </div>
        <div className="column right-column">
          <ServiceItem
            title="Improved Security and Compliance"
            description={
              <>
                <strong>Advanced Security Features:</strong> Cloud providers offer robust security measures, including encryption, access control, and regular audits.<br />
                <strong>Regulatory Compliance:</strong> Many cloud services are designed to comply with industry regulations, making it easier for businesses to meet compliance requirements.
              </>
            }
            icon="🔒"
          />
          <ServiceItem
            title="Data Storage and Management"
            description={
              <>
                <strong>Data Storage:</strong> Use cloud storage solutions like Amazon S3, Google Cloud Storage, or Azure Blob Storage to store vast amounts of data securely and reliably.<br />
                <strong>Database Management:</strong> Implement cloud databases such as Amazon RDS, Google Cloud SQL, or Azure SQL Database for efficient data management.
              </>
            }
            icon="💾"
          />
          <ServiceItem
            title="Centralized Monitoring"
            description={
              <>
                <strong>Monitoring Tools:</strong> Utilize cloud monitoring tools like AWS CloudWatch, Google Cloud Monitoring, or Azure Monitor to keep track of system performance and resource usage.<br />
                <strong>Real-Time Alerts:</strong> Set up real-time alerts for critical issues, enabling prompt response and minimizing downtime.
              </>
            }
            icon="🔍"
          />
        </div>
      </div>

      <h2>How Cloud Services are Implemented by Us</h2>
      <div className="content">
        <div className="column left-column">
          <ServiceItem
            title="Analysis and Reporting"
            description={
              <>
                <strong>Data Analytics:</strong> Use cloud-based analytics services like Amazon Redshift, Google BigQuery, or Azure Synapse Analytics to process and analyze large data sets.<br />
                <strong>Reporting Tools:</strong> Generate detailed reports using tools like AWS QuickSight, Google Data Studio, or Power BI to visualize insights and trends.
              </>
            }
            icon="📊"
          />
          <ServiceItem
            title="Application Development and Deployment"
            description={
              <>
                <strong>Development Platforms:</strong> Leverage platforms like AWS Elastic Beanstalk, Google App Engine, or Azure App Service to develop and deploy applications quickly.<br />
                <strong>CI/CD Pipelines:</strong> Implement continuous integration and continuous deployment (CI/CD) pipelines using tools like AWS CodePipeline, Google Cloud Build, or Azure DevOps to automate the deployment process.
              </>
            }
            icon="🚀"
          />
        </div>
        <div className="column center-column">
          <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="AI and ML" className="central-image" />
          
        </div>
        <div className="column right-column">
          <ServiceItem
            title="Security and Compliance"
            description={
              <>
                <strong>Security Measures:</strong> Implement security best practices using tools like AWS IAM, Google Cloud Identity and Access Management, or Azure Active Directory.
              </>
            }
            icon="🔐"
          />
        
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5IjPB3xM5RSaqrEw5gxC4FBaVM4xz5BISJ0cZxX-UP8fO0w/viewform">Get Service</a>
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

export default CloudServices;
