import React from "react";
import "./services.css";

const App = () => {
  return (
    <div className="container">
      <Card
        title="AI Services"
        description="AI services including AI chat bots, AI voice assistant, AI sales bot,
          ⁠leverage AI to automate your business and increase efficiency with hasslefree conduction of sales and services."
        route="./AIservices"
      />
      <Card
        title="Web Services"
        description="Our Web Development services provide end-to-end solutions for building robust, scalable,and user-friendly websites and applications, customized to your business needs."
        route="./InteractiveDashboards"
      />
      <Card
        title="App Development"
        description="Transforming ideas into powerful mobile solutions.
        Custom app development tailored to your business needs.
        Expert team delivering seamless iOS and Android experiences"
        route="./AppDevelopment"
      />
      <Card
        title="Cloud Services"
        description="By leveraging cloud services, organizations can enhance their operations,drive growth, and foster innovation.These technologies are doing revolutions in businesses and improving quality of life worldwide."
        route="./CloudServices"
      />
    </div>
  );
};

const Card = ({ title, description, route }) => {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={route}>More Information..</a>
        </div>
      </div>
    </div>
  );
};

export default App;
