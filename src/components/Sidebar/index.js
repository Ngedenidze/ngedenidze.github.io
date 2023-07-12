import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faRocket} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

// Side Bar component
const Sidebar = () => {
    return <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
        </Link>
        {/* Navigation Bar */}
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faRocket} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            
            
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ngedenidze/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4de"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/Ngedenidze/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4de"/>
                </a>
            </li>
            
        </ul>
    </div>
}

export default Sidebar   