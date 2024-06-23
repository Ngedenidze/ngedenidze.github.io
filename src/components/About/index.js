import { useEffect, useState } from "react";
import {
  faJava,
  faCss3,
  faPython,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiC,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiPostman,
  SiDart,
  SiFlutter,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiSass,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiHeroku,
  SiGit,
  SiFirebase,
  SiMysql,
} from "react-icons/si";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState("");

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

  if (isLoading) {
    return <Loader type="ball-grid-pulse" />;
  }

  return (
    <>
      <div className={`about-page ${fadeClass}`}>
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _1`}>A Bit About Me</span>
          </h1>
          <p>
            Welcome to my portfolio! I am Nika Gedenidze, a Computer Science
            undergraduate from Caldwell University, with a passion for
            technology and innovation. Throughout my academic journey, I have
            excelled in programming languages such as Java, Python, C++, and
            JavaScript.
          </p>
          <p align="LEFT">
            I specialized in Artificial Intelligence, conducting extensive
            research on Convolutional Neural Networks (CNNs). This research
            enriched my understanding of AI and led to the development of
            optimized CNN techniques.
          </p>
          <p>
            In my professional experiences, I've completed impactful
            internships. At Redhawk Research, I constructed an admin portal
            using GraphQL, enhancing security and administrative efficiency by
            30%. At AeroDefense, I engineered the Products Page for the main
            website, boosting user engagement by 40% and conversion rates by
            25%.
          </p>
          <h1>
            <span className={`${letterClass} _1`}>Hobbies</span>
          </h1>
          <p>
            Beyond coding, I enjoy music production, collecting vinyl records,
            and skateboarding. I also love reading and watching movies, which
            provide fresh perspectives that I bring into my professional
            endeavors.
          </p>
          <p>
            I look forward to leveraging my skills and creativity to make a
            meaningful impact in future roles. I am excited to explore
            opportunities that allow me to merge my love for technology with my
            other interests.
          </p>
          
        </div>

        <div className="stage-cube-cont">
          <h1>
            <span className={`${letterClass} _1`}>Technologies and Tools</span>
          </h1>
          <div className="tech-grid">
            
            <div className="tech-item">
              <SiC size={50} />
              <span>C Language</span>
            </div>
            <div className="tech-item">
              <SiTypescript size={50} />
              <span>TypeScript</span>
            </div>
            <div className="tech-item">
              <SiExpress size={50} />
              <span>Express</span>
            </div>
            <div className="tech-item">
              <SiNodedotjs size={50} />
              <span>NodeJS</span>
            </div>
            <div className="tech-item">
              <SiPostman size={50} />
              <span>Postman</span>
            </div>
            <div className="tech-item">
              <SiDart size={50} />
              <span>Dart</span>
            </div>
            <div className="tech-item">
              <SiFlutter size={50} />
              <span>Flutter</span>
            </div>
            <div className="tech-item">
              <SiReact size={50} />
              <span>React Native</span>
            </div>
            <div className="tech-item">
              <SiHtml5 size={50} />
              <span>HTML</span>
            </div>
            <div className="tech-item">
              <SiCss3 size={50} />
              <span>CSS</span>
            </div>
            <div className="tech-item">
              <SiBootstrap size={50} />
              <span>Bootstrap</span>
            </div>
            <div className="tech-item">
              <SiRedux size={50} />
              <span>Redux</span>
            </div>
            <div className="tech-item">
              <SiSass size={50} />
              <span>Sass</span>
            </div>
            <div className="tech-item">
              <SiJavascript size={50} />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <SiTailwindcss size={50} />
              <span>Tailwind CSS</span>
            </div>
            <div className="tech-item">
              <SiReact size={50} />
              <span>React</span>
            </div>
            <div className="tech-item">
              <SiMysql size={50} />
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <SiMongodb size={50} />
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <SiHeroku size={50} />
              <span>Heroku</span>
            </div>
            <div className="tech-item">
              <SiGit size={50} />
              <span>Git</span>
            </div>
            <div className="tech-item">
              <SiFirebase size={50} />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
