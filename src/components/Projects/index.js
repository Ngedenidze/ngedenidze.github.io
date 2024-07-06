import React, { useEffect, useState } from "react";
import "./index.scss";
import {
  SiPython,
  SiSaaS,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiGooglecloud,
  SiMongoose,
  SiReact,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiHeroku,
  SiGit,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiVirtualbox,
  SiUnity,
  SiTypescript,
  SiSass,
  SiApplearcade,
  SiRedis,
  SiAmazonaws,
  SiJsonwebtokens,
} from "react-icons/si";
import Loader from "react-loaders";
import { m } from "framer-motion";

const projectData = [
  {
    title: "Admin Portal for Redhawk Research",
    description:
      "Developed an admin portal with integrated core backend functionality using GraphQL. This project significantly enhanced security and administrative efficiency by 30%. The portal's design focused on user-friendly interfaces and secure data handling, streamlining administrative tasks and improving overall operational workflow.",
    image: require("../../assets/adminpg.png"),
    moreInfo: "",
  },
  {
    title: "Products Page for AeroDefense",
    description:
      "Engineered the Products Page for AeroDefense's main website, which resulted in a 40% increase in user engagement and a 25% boost in conversion rates. The project involved designing a responsive and visually appealing layout, optimizing page performance, and ensuring seamless integration with the existing website infrastructure.",
    image: require("../../assets/products.png"),
  },
  {
    title: "Optimized Convolutional Neural Networks (CNNs)",
    description:
      "Conducted extensive research on Convolutional Neural Networks (CNNs) and developed optimized techniques to reduce AI training times significantly. This project involved deep learning, data analysis, and algorithm optimization, contributing to advancements in AI efficiency and performance.",
    image: require("../../assets/research.png"),
  },

  {
    title: "React Native Mobile Application",
    description:
      "This project highlights my proficiency in developing complex mobile applications with a focus on user experience, performance, and security. The combination of React Native and TypeScript allowed for a robust and scalable codebase, while SCSS ensured a responsive and visually appealing UI. The integration of various technologies such as GraphQL, JWT, and Amazon S3 demonstrates my ability to work with a diverse tech stack to deliver comprehensive solutions.",
    image: require("../../assets/gastro.png"),
    projectOverview:
      "I developed a comprehensive mobile application using React Native, SCSS, and TypeScript. This application was designed to provide a seamless and efficient user experience with a variety of features tailored to modern needs.",
    keyFeatures: [
      "User Authentication: Secure login and registration system using JWT for authentication.",
      "User Profiles: Personalized user profiles with customizable settings.",
      "Media Uploads: Easy and fast media upload capabilities integrated with Amazon S3 for storage.",
      "Real-time Chat: Instant messaging feature for real-time communication.",
      "Inventory Updates & Low Stock Alerts: Real-time tracking of inventory levels with automated low stock notifications.",
      "Barcode Scanning: Integrated barcode scanning for efficient inventory management.",
      "Supplier Management: Comprehensive supplier management system for streamlined operations.",
      "Mobile Notifications: Push notifications to keep users informed and engaged.",
      "Analytics: Detailed analytics for monitoring application usage and performance.",
    ],
    techStack: {
      Frontend: ["React Native", "TypeScript", "SCSS", "Material-UI"],
      Backend: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT", "Amazon S3", "GraphQL"]
    },
  },
  {
    title: "GraphQL Backend Integration",
    description:
      "Constructed a backend system using GraphQL, enhancing the data query efficiency and security. This project included setting up robust authentication mechanisms, implementing secure data transactions, and creating scalable APIs for efficient data management.",
    image: require("../../assets/adminpg.png"),
  },
];

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState("");
  const [modalData, setModalData] = useState(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const letterTimerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    const loaderTimerId = setTimeout(() => {
      setIsLoading(false);
      setFadeClass("fade-in");
    }, 500);

    return () => {
      clearTimeout(letterTimerId);
      clearTimeout(loaderTimerId);
    };
  }, []);

  const handleCardClick = (project) => {
    setModalData(project);
    setIsBlurred(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setIsBlurred(false);
  };

  if (isLoading) {
    return <Loader type="ball-grid-pulse" color="#339ecc" />;
  }

  return (
    <div className={`projects-page ${fadeClass} ${isBlurred ? "blur" : ""}`}>
      <h1>
        <span className={`${letterClass} _1`}>On going/Finished Projects</span>
      </h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => handleCardClick(project)}
          >
            <div className="text-area">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <button
                className="project-button"
                onClick={() => handleCardClick(project)}
              >
                View Details
              </button>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalData.title}</h3>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal-main-content">
              <div className="modal-text-zone">
                  <h1>Project Overview:</h1>
                  <p>{modalData.projectOverview}</p>
                  <h1>Key Features:</h1>
                  <ul>
                    {modalData.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
              </div>
              <div className="stage-cube-cont">
                <h1>
                  <span className={`${letterClass} _1`}>
                    Technologies and Tools
                  </span>
                </h1>
                <div className="stage-cube">
                {Object.keys(modalData.techStack).map((category, index) => (
                  <div key={index} className="cube-column">
                    <h2>{category}</h2>
                    <div className="tech-grid">
                      {modalData.techStack[category].map((tech, index) => {
                        switch (tech) {
                          case "React Native":
                            return (
                              <div className="tech-item" key={index}>
                                <SiReact size={50} />
                                <span>React Native</span>
                              </div>
                            );
                          case "TypeScript":
                            return (
                              <div className="tech-item" key={index}>
                                <SiTypescript size={50} />
                                <span>TypeScript</span>
                              </div>
                            );
                          case "SCSS":
                            return (
                              <div className="tech-item" key={index}>
                                <SiSass size={50} />
                                <span>SCSS</span>
                              </div>
                            );
                          case "Node.js":
                            return (
                              <div className="tech-item" key={index}>
                                <SiNodedotjs size={50} />
                                <span>Node.js</span>
                              </div>
                            );
                          case "Express":
                            return (
                              <div className="tech-item" key={index}>
                                <SiExpress size={50} />
                                <span>Express.js</span>
                              </div>
                            );
                          case "GraphQL":
                            return (
                              <div className="tech-item" key={index}>
                                <SiGraphql size={50} />
                                <span>GraphQL</span>
                              </div>
                            );
                          case "PostgreSQL":
                            return (
                              <div className="tech-item" key={index}>
                                <SiPostgresql size={50} />
                                <span>PostgreSQL</span>
                              </div>
                            );
                          case "Redis":
                            return (
                              <div className="tech-item" key={index}>
                                <SiRedis size={50} />
                                <span>Redis</span>
                              </div>
                            );
                          case "JWT":
                            return (
                              <div className="tech-item" key={index}>
                                <SiJsonwebtokens size={50} />
                                <span>JWT</span>
                              </div>
                            );
                          case "Amazon S3":
                            return (
                              <div className="tech-item" key={index}>
                                <SiAmazonaws size={50} />
                                <span>Amazon S3</span>
                              </div>
                            );

                          default:
                            return (
                              <div className="tech-item" key={index}>
                                <SiApplearcade size={50} />
                                <span>{tech}</span>
                              </div>
                            );
                        }
                      })}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
