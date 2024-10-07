import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Image from "../ImageSection/Image";
import CardsPage from "../CardsSection/CardsPage"
import Hero from "../HeroSection/Hero"
import CustomFooter from "../FooterSection/Footer"
import Contact from "../ContactSection/Contact"
import { Footer } from "antd/es/layout/layout";

// import Contact from "../ContactSection/Contact";
import Container from "../ChatbotComponents/Container";

const ThreeScene = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1,
      scaleMobile: 1.0,
      color: 0xf5f5f5,
      maxDistance: 24.0,
      spacing: 18.0,
      backgroundColor: 0x0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "auto",
          backgroundColor: "transparent",
          /* Hide scrollbar for Chrome, Safari, and Opera */
          "::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        }}
      >
        <div
          ref={vantaRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <Hero />
        {/* <CardsPage /> */}

        <h1
          style={{
            fontSize: "30px",
            textAlign: "center",
            boxShadow:"2px 2px 2px black",
            fontWeight: "600",

            textTransform: "uppercase",
            letterSpacing: "2px",
            marginLeft:"12%",
          
           
          }}
        >
          Our  Projects
        </h1>

        <Image />
        {/* <CardsPage /> */}
        <Contact />
     
     <Container />

        {/* <Contact /> */}

          

      </div>
    </>
  );
};

export default ThreeScene;
