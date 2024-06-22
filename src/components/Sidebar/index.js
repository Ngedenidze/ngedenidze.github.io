import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faRocket} from '@fortawesome/free-solid-svg-icons'


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
        
    </div>
}

export default Sidebar   