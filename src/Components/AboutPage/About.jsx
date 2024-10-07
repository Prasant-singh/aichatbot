import React from "react";
import { Divider, Typography, Carousel } from "antd";
// import Cards from "../Cards/CardsPage";

import "./About.css";
const { Title, Paragraph } = Typography;


const App = () => (
  <div className="about-us-container">
    <div className="about-us-content">
      {/* <Cards /> */}
      <Title level={1} className="about-us-title rrr">
        About Us
      </Title>

      <Paragraph className="about-us-text">
        Anti AI is an AI research and development company. Our mission is to
        ensure that the threat from artificial general intelligence are
        mitigated even before they arise.
      </Paragraph>
      <Paragraph className="about-us-text">
        We believe that humanity should benefit from AI, and we're developing
        our own first-in-class Anti AI software to ensure safe usage.
      </Paragraph>

      <p className="about-us-title">
        We are building safe and smart solutions against AGI, but will also
        consider our mission fulfilled if our work aids others to achieve this
        outcome.
      </p>
      <Paragraph className="about-us-text">
        We're a small team of passionate people working together to make a dream
        come true, a dream of making AI safe and accessible for everyone. Our
        motto is
      </Paragraph>
      <Title level={3} className="about-us-title tr">
        अन्ते सत्यं विजयते।
      </Title>
      <Divider />

      <Paragraph className="about-us-text">
        We are always looking for talented & stubborn individuals to join our
        team. If you are passionate about our goal enough and have a strong
        interest, you can visit our careers page.
      </Paragraph>
    </div>
  </div>
);

export default App;
