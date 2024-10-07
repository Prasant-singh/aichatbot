import React, { useEffect } from "react";
import "./Image.css";

const ImageComponent = ({
  imageUrl,
  description,
  title,
  reverse,
  keywords1,
  keywords2,
  keywords3,
  keywords4,
  keywords5,
  keywords6,
}) => {
  return (
    <div className={`image-container ${reverse ? "reverse" : ""}`}>
      <div className="image-wrapper">
        <img src={imageUrl} alt="Project" />
      </div>
      <div className="description-wrapper">
        <h1 className="card-logo">{title}</h1>
        <p>{description}</p>
        <ul>
          <li>{keywords1}</li>
          <li>{keywords2}</li>
          <li>{keywords3}</li>
        </ul>
        <ul>
          <li>{keywords4}</li>
          <li>{keywords5}</li>
          <li>{keywords6}</li>
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1567422252597-bd99bc6a0c29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ANTI.Q- Music Player",
      description:
        "ANTI.Q is our flagship, one-of-a-kind music player, designed to revive the charm of retro entertainment. It delivers a serverless, uninterrupted audio experience, reminiscent of a bygone era. With ANTI.Q, you can relive the nostalgia of vinyl records and cassette tapes in a modern format. This unique music player blends vintage aesthetics with cutting-edge technology.",
      keywords1: "Serverless",
      keywords2: "Retro",
      keywords3: "Nostalgia",
      keywords4: "Music player",
      keywords5: "Uninterrupted",
      keywords6: "Vintage",
      reverse: false,
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/01/25/00/25/ai-8530787_1280.jpg",
      title: "ANTI.0",
      description:
        "ANTI.0 is our pioneering Anti AI Software, specifically crafted to combat the influence of Artificial Intelligence. This innovative solution is under active development by our expert team of developers. Designed to safeguard user autonomy, ANTI.0 offers robust protection against AI-driven intrusions. Stay ahead with ANTI.0, your defense against the growing power of AI.",
      keywords1: "ANTI.0",
      keywords2: "Security",
      keywords3: "Future Proof",
      reverse: true,
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg",
      title: "ANTI.1",
      description:
        "ANTI.1 represents our groundbreaking Concept Artificial Intelligence Project, aimed at disrupting the AI industry with a novel approach. Currently in the developmental phase, ANTI.1 is being meticulously crafted by our dedicated team of researchers and developers. It seeks to redefine AI capabilities by offering innovative features and functionalities not seen before.",
      keywords1: "ANTI.1",
      keywords2: "Innovative",
      keywords3: "Ethical AI",
      reverse: false,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".image-container");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageWrapper = entry.target.querySelector(".image-wrapper img");
          const descriptionWrapper = entry.target.querySelector(".description-wrapper");
          
          if (entry.target.classList.contains("reverse")) {
            imageWrapper.classList.add("fade-in-right");
            descriptionWrapper.classList.add("fade-in-left");
          } else {
            imageWrapper.classList.add("fade-in-left");
            descriptionWrapper.classList.add("fade-in-right");
          }
          entry.target.style.opacity = 1; // Ensure the container itself is visible
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <ImageComponent
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          keywords1={project.keywords1}
          keywords2={project.keywords2}
          keywords3={project.keywords3}
          keywords4={project.keywords4}
          keywords5={project.keywords5}
          keywords6={project.keywords6}
          description={project.description}
          reverse={project.reverse}
        />
      ))}
    </div>
  );
};

export default Projects;
