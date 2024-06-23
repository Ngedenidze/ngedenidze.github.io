import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faRocket} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import 'normalize.css'

// Side Bar component
const Sidebar = () => {
    return <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
        </Link>
        {/* Navigation Bar */}
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
                <FontAwesomeIcon icon={faEnvelope}/>
                <span>Contact</span>
            </NavLink>
            
        </nav>
        <div className="social-links">
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ngedenidze/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/Ngedenidze/"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
              </li>
            </ul>
        </div>
        
    </div>
}

export default Sidebar   