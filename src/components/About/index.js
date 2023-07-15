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
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Welcome to my portfolio! I'm a Computer Science undergraduate from Caldwell University, passionate about using technology to create innovative solutions.
                    I've honed a broad set of skills throughout my academic journey, with proficiency in programming languages such as Java, Python, C++, and JS.
                    </p>
                    <p align="LEFT">
                    During my tenure as a Student Researcher, I specialized in Artificial Intelligence, conducting extensive research on Convolutional Neural Networks (CNNs).
                    This experience not only deepened my understanding of AI but also allowed me to contribute to the development of an optimized CNN technique, significantly reducing AI training times.
                    </p>
                    <p>
                    Translating my theoretical knowledge into practical applications, I've embarked on personal projects such as 'Wrodle not Wordle', a web-based game, and 'Employee Database Management', an interactive desktop application.
                    These ventures underscore my ability to leverage various programming languages and tools to architect both front-end and back-end solutions.
                    </p>
                    <p>
                    Beyond the world of coding, I have a vibrant life filled with music production, vinyl record collection, and skateboarding. Avid reading and movie watching are also on my list of favorite pastimes. 
                    These hobbies not only provide a creative outlet but also stimulate fresh perspectives that I can bring into my professional endeavors. </p>
                    <p>
                    I look forward to leveraging my academic and professional skills, coupled with my creativity and passion, to make a meaningful impact in future roles. 
                    I am excited to explore opportunities that allow me to combine my love for technology with my other interests.
                    </p>
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
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default About