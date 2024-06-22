import { useEffect, useState } from 'react'
import {
    faJava,
    faCss3,
    faPython,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <>
            <div className="about-page">
                <div className="text-zone">
                    <h1>
                     <span className={`${letterClass} _1`}>About Me</span>
                    </h1>
                    <p>
                    &emsp;&emsp;Welcome to my portfolio! I am Nika Gedenidze, a Computer Science undergraduate from Caldwell University, with a strong passion for using technology to drive innovative solutions. Throughout my academic journey, I have cultivated a diverse skill set, excelling in programming languages such as Java, Python, C++, and JavaScript.
                    </p>
                    <p align="LEFT">
                    &emsp;&emsp;During my academic journey, I specialized in Artificial Intelligence, conducting extensive research on Convolutional Neural Networks (CNNs). This research experience enriched my understanding of AI and led to the development of an optimized CNN technique, significantly reducing AI training times.</p>
                    <p>
                    &emsp;&emsp;In the professional realm, I have completed impactful internships. At Redhawk Research, I constructed an admin portal with integrated core backend functionality using GraphQL, enhancing security and administrative efficiency by 30%. At AeroDefense, I engineered the Products Page for the main website, increasing user engagement by 40% and conversion rates by 25%. </p>
                    <p>
                    &emsp;&emsp;Beyond the world of coding, I have a vibrant life filled with music production, vinyl record collection, and skateboarding. Avid reading and movie watching are also on my list of favorite pastimes. 
                    These hobbies not only provide a creative outlet but also stimulate fresh perspectives that I can bring into my professional endeavors. </p>
                    <p>
                    &emsp;&emsp;I look forward to leveraging my academic and professional skills, combined with my creativity and passion, to make a meaningful impact in future roles. I am excited to explore opportunities that allow me to merge my love for technology with my other interests.</p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faPython} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-grid-pulse"  color="#339ecc"  />
        </>
    )
}

export default About