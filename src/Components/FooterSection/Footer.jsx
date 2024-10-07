// Footer.js
import React from "react";

import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const CustomFooter = () => (
  <Footer
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "white",
      padding: "40px 60px",
      backdropFilter: "blur(5px)",
    
    }}
  >
    <Row justify="space-between" gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Title level={4} style={{ color: "white" }}>
              Company
            </Title>

            <Text style={{ color: "white" }}>
              <a href="/home">Home</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <a href="/about">About Us</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <a href="/career">Careers</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <a href="/contact">Contact Us</a>
            </Text>
            <br />
          </Col>
          <Col span={12}>
            <Title level={4} style={{ color: "white" }}>
              Follow Us
            </Title>
            <Space size="middle">
              <Link
                href="https://www.instagram.com/antiai.ltd/"
                target="_blank"
              >
                <InstagramFilled style={{ fontSize: "24px", color: "white" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/anti-ai"
                target="_blank"
              >
                <LinkedinFilled style={{ fontSize: "24px", color: "white" }} />
              </Link>
            </Space>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
          <Col span={24}>
            <Title level={4} style={{ color: "white" }}>
              Contact Us
            </Title>
            <Text style={{ color: "white" }}>
              <PhoneOutlined />{" "}
              <a href="tel:+919116665513">Call Us: +91 91166-65513</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <MailOutlined />{" "}
              <a href="mailto:support@antiai.ltd">support@antiai.ltd</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <HomeOutlined />{" "}
              <a href="https://maps.app.goo.gl/7VRT7azuBhhv1eci8">
              70, Kesar Vihar, near Railway Colony, Vidhyadhar Nagar, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017
              </a>
            </Text>
            <br />
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={12}>
        <Title level={4} style={{ color: "white" }}>
          Our Location
        </Title>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.355374046712!2d75.847298!3d26.828647000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94f19a88eff%3A0xc380c0998cdeea1c!2sWORKD-%20A%20Co-Working%20Zone!5e0!3m2!1sen!2sin!4v1727938846580!5m2!1sen!2sin"
          width="100%"
          height="300"
          border-radius="5px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: "20px" }}>
      <Text style={{ color: "white" }}>&copy; Anti AI Private limited.</Text>
    </Row>
  </Footer>
);

export default CustomFooter;
