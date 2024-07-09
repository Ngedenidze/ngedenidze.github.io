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
    projectOverview: "The admin portal for Redhawk Research was developed to enhance security and administrative efficiency. It features a user-friendly interface and robust data handling capabilities.",
    keyFeatures: [
      "Integrated Core Backend Functionality",
      "Enhanced Security Measures",
      "Streamlined Administrative Tasks",
      "User-Friendly Interface",
      "Staff User Authentication and Permission Inspection",
      "30+ Custom GraphQL Queries and Mutations",
      "Control of 25+ Tables in PostgreSQL"
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "SCSS"],
      Backend: ["Node.js", "Express", "GraphQL", "PostgreSQL"]
    }
  },
  {
    title: "Products Page for AeroDefense",
    description:
      "Engineered the Products Page for AeroDefense's main website, which resulted in a 40% increase in user engagement and a 25% boost in conversion rates. The project involved designing a responsive and visually appealing layout, optimizing page performance, and ensuring seamless integration with the existing website infrastructure.",
    image: require("../../assets/products.png"),
    projectOverview: "The Products Page for AeroDefense was designed to increase user engagement and boost conversion rates with a responsive and visually appealing layout.",
    keyFeatures: [
      "Responsive Design",
      "Increased User Engagement",
      "Optimized Page Performance",
      "Seamless Integration",
      "Embedded Customer Reviews",
      "Testimonial Subpages",
      "Enhanced Product Listing Accuracy",
      "SEO Optimization"
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "SCSS"],
      Backend: ["Node.js", "Express"]
    }
  },
  {
    title: "Optimized Convolutional Neural Networks (CNNs)",
    description:
      "Conducted extensive research on Convolutional Neural Networks (CNNs) and developed optimized techniques to reduce AI training times significantly. This project involved deep learning, data analysis, and algorithm optimization, contributing to advancements in AI efficiency and performance.",
    image: require("../../assets/research.png"),
    projectOverview: "This project focused on optimizing Convolutional Neural Networks to reduce AI training times, involving deep learning, data analysis, and algorithm optimization.",
    keyFeatures: [
      "Reduced AI Training Times",
      "Deep Learning Techniques",
      "Data Analysis",
      "Algorithm Optimization",
      "Layer Freezing Schedules",
      "Transfer Learning with Frozen Backpropagation",
      "Improved Model Interpretability"
    ],
    techStack: {
      Frontend: [],
      Backend: ["Python", "TensorFlow", "Keras"]
    }
  },
  {
    title: "React Native Mobile Application",
    description:
      "This project highlights my proficiency in developing complex mobile applications with a focus on user experience, performance, and security. The combination of React Native and TypeScript allowed for a robust and scalable codebase, while SCSS ensured a responsive and visually appealing UI. The integration of various technologies such as GraphQL, JWT, and Amazon S3 demonstrates my ability to work with a diverse tech stack to deliver comprehensive solutions.",
    image: require("../../assets/gastro.png"),
    projectOverview:
      "I developed a comprehensive mobile application using React Native, SCSS, and TypeScript. This application was designed to provide a seamless and efficient user experience with a variety of features tailored to modern needs.",
    keyFeatures: [
      "Secure login and registration system using JWT for authentication.",
      "Personalized user profiles with customizable settings.",
      "Easy and fast media upload capabilities integrated with Amazon S3 for storage.",
      "Inventory Updates & Low Stock Alerts: Real-time tracking of inventory levels with automated low stock notifications.",
      "Push notifications to keep users informed and engaged.",
      "Detailed analytics for monitoring application usage and performance."
    ],
    techStack: {
      Frontend: ["React Native", "TypeScript", "SCSS", "Material-UI"],
      Backend: ["Node.js", "Express", "PostgreSQL", "JWT", "Amazon S3", "GraphQL"]
    }
  },
  {
    title: "GraphQL Backend Integration",
    description:
      "Constructed a backend system using GraphQL, enhancing the data query efficiency and security. This project included setting up robust authentication mechanisms, implementing secure data transactions, and creating scalable APIs for efficient data management.",
    image: require("../../assets/adminpg.png"),
    projectOverview: "The GraphQL Backend Integration project aimed to enhance data query efficiency and security through robust authentication mechanisms and scalable APIs.",
    keyFeatures: [
      "Enhanced Data Query Efficiency",
      "Robust Authentication Mechanisms",
      "Secure Data Transactions",
      "Scalable APIs",
      "Improved System Interoperability",
      "Control of Multiple Data Tables"
    ],
    techStack: {
      Frontend: [],
      Backend: ["Node.js", "GraphQL", "PostgreSQL", "JWT"]
    }
  }
];



const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState("");
  const [modalData, setModalData] = useState(null);


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

  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  if (isLoading) {
    return <Loader type="ball-grid-pulse" color="#339ecc" />;
  }
  <script src="http://localhost:8097"></script>

  return (
    <div className={`projects-page ${fadeClass} `}>
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
              <div className="button-container">
                <button
                  className="project-button"
                  onClick={() => handleCardClick(project)}
                >
                  View Details
                </button>
              </div>
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
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-main-content">
              <div className="modal-text-zone">
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
                    Technologies and Tools:
                  </span>
                </h1>
                <div className="stage-cube">
                  {Object.keys(modalData.techStack).map((category, index) => (
                    <div className="main-column">
                      <h2>{category}</h2>
                      <div key={index} className="cube-column">
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
