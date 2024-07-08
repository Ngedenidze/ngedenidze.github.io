import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/logo-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faRocket, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSwipeable } from 'react-swipeable';
import 'normalize.css';
import './index.scss'; // make sure you import your SCSS

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setIsBlurred(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setDrawerOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="nav-bar" {...handlers} >
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faRocket} />
          <span>Projects</span>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </NavLink>
      </nav>
      <div className="social-links">
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ngedenidze/">
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/Ngedenidze/">
              <FontAwesomeIcon icon={faGithub} color="white" />
            </a>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={toggleDrawer}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''} `}>
       
        <button className="close-button" onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <NavLink exact="true" activeclassname="active" to="/" onClick={toggleDrawer}>
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about" onClick={toggleDrawer}>
          About
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects" onClick={toggleDrawer}>
          Projects
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact" onClick={toggleDrawer}>
          Contact
        </NavLink>
        <div className="social-links">
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ngedenidze/">
                <FontAwesomeIcon icon={faLinkedin} color="white" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.github.com/Ngedenidze/">
                <FontAwesomeIcon icon={faGithub} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
