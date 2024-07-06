import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';

const projectData = [
  {
    title: "Admin Portal for Redhawk Research",
    description: "Developed an admin portal with integrated core backend functionality using GraphQL. This project significantly enhanced security and administrative efficiency by 30%. The portal's design focused on user-friendly interfaces and secure data handling, streamlining administrative tasks and improving overall operational workflow.",
    image: require('../../assets/adminpg.png')
  },
  {
    title: "Products Page for AeroDefense",
    description: "Engineered the Products Page for AeroDefense's main website, which resulted in a 40% increase in user engagement and a 25% boost in conversion rates. The project involved designing a responsive and visually appealing layout, optimizing page performance, and ensuring seamless integration with the existing website infrastructure.",
    image: require('../../assets/products.png')
  },
  {
    title: "Optimized Convolutional Neural Networks (CNNs)",
    description: "Conducted extensive research on Convolutional Neural Networks (CNNs) and developed optimized techniques to reduce AI training times significantly. This project involved deep learning, data analysis, and algorithm optimization, contributing to advancements in AI efficiency and performance.",
    image: require('../../assets/research.png')
  },
  {
    title: "GraphQL Backend Integration",
    description: "Constructed a backend system using GraphQL, enhancing the data query efficiency and security. This project included setting up robust authentication mechanisms, implementing secure data transactions, and creating scalable APIs for efficient data management.",
    image: require('../../assets/adminpg.png')
  },
  {
    title: "Main Website Development",
    description: "Designed and developed the main website for AeroDefense, focusing on creating an intuitive user experience and optimizing site performance. This project included front-end development, UI/UX design, and ensuring the website's compatibility across various devices and browsers.",
    image: require('../../assets/gastro.png')
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
    <div className={`projects-page ${fadeClass} ${isBlurred ? 'blur' : ''}`}>
      <h1>
        <span className={`${letterClass} _1`}>On going/Finished Projects</span>
      </h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index} onClick={() => handleCardClick(project)}>
            <div className="text-area">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <button className="project-button" onClick={() => handleCardClick(project)}>View Details</button>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
  
      {modalData && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={modalData.image} alt={modalData.title} className="modal-image" />
            <h3>{modalData.title}</h3>
            <p>{modalData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default Projects;
