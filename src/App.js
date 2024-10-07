import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThreeScene from "./Components/Background/ThreeScene";
import Container from "./Components/ChatbotComponents/Container";
import Navbar from "./Components/NavbarSection/Navbar";
import Career from "./Components/CareersPage/Career";
import About from "./Components/AboutPage/About";
import Footer from "./Components/FooterSection/Footer";
import Contact from "./Components/ContactSection/Contact";
import Projects from "./Components/ImageSection/Image";
import JobListing from "./Components/Joblist/JobListing";
import Service from "./Components/ServicePage/Service";
import AIservices from "./Components/SpecificService/Ai";
import AppDevelopment from "./Components/SpecificService/appdev";
import InteractiveDashboards from "./Components/SpecificService/webd";
import CloudServices from "./Components/SpecificService/cloud";
import AiContact from "./Components/SpecificContactPage/aiservicepage";
import Appcontact from "./Components/SpecificContactPage/appcontact";
import Cloud from "./Components/SpecificContactPage/cloudcontact";
import Webser from "./Components/SpecificContactPage/webcontact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ThreeScene />} />
        <Route path="/home" element={<ThreeScene />} />
        <Route path="/Career" element={<JobListing />} />
        <Route path="/services" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Job" element={<Career />} />
        <Route path="/AIservices" element={<AIservices />} />
        <Route path="/AppDevelopment" element={<AppDevelopment />} />
        <Route
          path="/InteractiveDashboards"
          element={<InteractiveDashboards />}
        />
        <Route path="/CloudServices" element={<CloudServices />} />
        <Route path="/AiContact" element={<AiContact />} />
        <Route path="/Appcontact" element={<Appcontact />} />
        <Route path="/Cloud" element={<Cloud />} />

        <Route path="/Webser" element={<Webser />} />
      </Routes>
      {/* <Container /> */}
      <Footer />
    </Router>
  );
}

export default App;
