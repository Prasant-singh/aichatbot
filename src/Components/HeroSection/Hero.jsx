import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
// import Container from "../ChatbotComponents/Container"


const HeroSection = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroContent = heroContentRef.current;
      const heroHeight = document.querySelector(".hero").offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > heroHeight) {
        heroContent.style.opacity = 1 - (scrollPosition - heroHeight) / 200;
      } else {
        heroContent.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <div className="text-wrapper">
            <h1>We're Anti AI,</h1>
            <h1 className="typewriter-wrapper">
              <Typewriter
                words={[
                  "An Innovation Powerhouse.",
                  "Driving the Future of AI.",
                  "Making AI Safe.",
                  "Protecting Humanity.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p className="hero-p">
              We're An Innovative Software Company. Protecting Humanity from the{" "}
              uncontrolled rise of Artificial Intelligence, Safeguarding people
              across the globe through our Innovative Software solutions.
            </p>
            <button className="apple-button">
              <a href="/About" className="button-link">See More</a>
            </button>
          </div>
          {/* <Container /> */}

        </div>
      </section>
    </div>
  );
};

export default HeroSection;
