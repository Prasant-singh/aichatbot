import React from 'react';
import './appdev.css';

const AppDevelopment = () => {
  return (
    <div className="app-development-container">
      <section>
        <h1>App Development Support Services</h1>
        <div className="content">
          <div className="column left-column">
            <ServiceItem
              title="User-Centric Design"
              description={
                <>
                  <strong>UI/UX Design:</strong> Focus on creating intuitive and engaging user interfaces and experiences.<br />
                  <strong>User Feedback:</strong> Incorporate user feedback to continuously improve the design and functionality of the app.
                </>
              }
              icon="🎨"
            />
            <ServiceItem
              title="Robust Backend Architecture"
              description={
                <>
                  <strong>Scalable Backend:</strong> Develop a backend that can scale with user growth and application demands.<br />
                  <strong>API Integration:</strong> Seamlessly integrate with third-party APIs and services to enhance app functionality.
                </>
              }
              icon="🔧"
            />
          </div>
          <div className="column center-column">
            <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="app development" className="central-image" />
          </div>
          <div className="column right-column">
            <ServiceItem
              title="Quality Assurance"
              description={
                <>
                  <strong>Automated Testing:</strong> Implement automated testing to ensure code reliability and performance.<br />
                  <strong>Bug Tracking:</strong> Use tools for bug tracking and issue management to maintain high-quality standards.
                </>
              }
              icon="🛠️"
            />
            <ServiceItem
              title="Efficient Deployment"
              description={
                <>
                  <strong>Continuous Deployment:</strong> Utilize CI/CD pipelines for streamlined and automated deployment processes.<br />
                  <strong>Monitoring and Analytics:</strong> Monitor app performance and collect analytics to make data-driven decisions.
                </>
              }
              icon="🚀"
            />
          </div>
        </div>
      </section>

      <section>
        <h1>Our Approach to App Development</h1>
        <div className="content">
          <div className="column left-column">
            <ServiceItem
              title="Agile Development"
              description={
                <>
                  <strong>Iterative Process:</strong> Use Agile methodologies for iterative development and continuous improvement.<br />
                  <strong>Collaboration:</strong> Work closely with stakeholders to align development with business goals.
                </>
              }
              icon="🔄"
            />
            <ServiceItem
              title="Custom Solutions"
              description={
                <>
                  <strong>Tailored Development:</strong> Provide customized solutions that fit specific business needs and requirements.<br />
                  <strong>Flexible Architecture:</strong> Design flexible and adaptable architectures to accommodate future changes.
                </>
              }
              icon="🔧"
            />
            <ServiceItem
              title="Security and Compliance"
              description={
                <>
                  <strong>Data Security:</strong> Implement robust security measures to protect user data and privacy.<br />
                  <strong>Compliance:</strong> Ensure compliance with relevant industry standards and regulations.
                </>
              }
              icon="🔒"
            />
          </div>
          <div className="column center-column">
            <img src="https://www.regexsoftware.com/wp-content/uploads/2024/02/what-we-do.png" alt="App Development Approach" className="central-image" />
          </div>
          <div className="column right-column">
            <ServiceItem
              title="User Support"
              description={
                <>
                  <strong>Customer Support:</strong> Provide ongoing support and assistance to users for a smooth experience.<br />
                  <strong>Documentation:</strong> Create comprehensive documentation and resources to aid users and developers.
                </>
              }
              icon="📞"
            />
            <ServiceItem
              title="Innovation and Growth"
              description={
                <>
                  <strong>Latest Technologies:</strong> Utilize the latest technologies and trends to keep the app innovative.<br />
                  <strong>Continuous Improvement:</strong> Regularly update the app with new features and improvements based on user feedback.
                </>
              }
              icon="📈"
            />
            <ServiceItem
              title="Performance Optimization"
              description={
                <>
                  <strong>Speed Enhancements:</strong> Optimize app performance for faster load times and smoother interactions.<br />
                  <strong>Resource Management:</strong> Efficiently manage resources to ensure optimal app performance.
                </>
              }
              icon="⚡"
            />
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5IjPB3xM5RSaqrEw5gxC4FBaVM4xz5BISJ0cZxX-UP8fO0w/viewform">Get Service</a>
      </section>
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

export default AppDevelopment;
