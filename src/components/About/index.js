import { useEffect, useState } from "react";
import {
  SiPython,
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import Loader from "react-loaders";
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
    return <Loader type="ball-grid-pulse" color="#339ecc" />;
  }

  return (
    <>
      <div className={`about-page ${fadeClass}`}>
        <div className="text-zone">
          <div className="info-card">
            <h1>
              <span className={`${letterClass} _1`}>A Bit About Me</span>
            </h1>
            <p>
              Welcome to my portfolio! I am Nika Gedenidze, a Computer Science
              alumni from Caldwell University, with a passion for technology and
              innovation. Throughout my academic journey, I have excelled in
              programming languages such as Java, Python, C++, and JavaScript.
            </p>
            <br />
            <p align="LEFT">
              I specialized in Artificial Intelligence, conducting extensive
              research on Convolutional Neural Networks (CNNs). This research
              enriched my understanding of AI and led to the development of
              optimized CNN techniques.
            </p>
            <br />
            <p>
              In my professional experiences, I've completed impactful
              internships. At Redhawk Research, I work as an Software
              Engineering intern, constructing an admin portal using GraphQL,
              enhancing security and administrative efficiency by 30%. At
              AeroDefense, I work as a front-end web developer, engineering the
              Products Page for the main website, boosting user engagement by
              40% and conversion rates by 25%.
            </p>
            <br />
          </div>
          <div className="info-card">
            <h1>
              <span className={`${letterClass} _1`}>Hobbies</span>
            </h1>
            <p>
              Beyond coding, I enjoy music production, collecting vinyl records,
              and skateboarding. I also love reading and watching movies, which
              provide fresh perspectives that I bring into my professional
              endeavors.
            </p>
            <br />
            <p>
              I look forward to leveraging my skills and creativity to make a
              meaningful impact in future roles. I am excited to explore
              opportunities that allow me to merge my love for technology with
              my other interests.
            </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="info-card">
            <h1>
              <span className={`${letterClass} _1`}>
                Technologies and Tools
              </span>
            </h1>
            <div className="tech-grid">
              <div className="tech-item">
                <SiJavascript size={50} />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <SiPython size={50} />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <FaJava size={50} />
                <span>Java</span>
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
                <SiNodedotjs size={50} />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <SiExpress size={50} />
                <span>Express.js</span>
              </div>
              <div className="tech-item">
                <SiReact size={50} />
                <span>React</span>
              </div>
              <div className="tech-item">
                <SiReact size={50} />
                <span>React Native</span>
              </div>
              <div className="tech-item">
                <SiKeras size={50} />
                <span>Keras</span>
              </div>
              <div className="tech-item">
                <SiTensorflow size={50} />
                <span>TensorFlow</span>
              </div>
              <div className="tech-item">
                <SiPostgresql size={50} />
                <span>PostgreSQL</span>
              </div>
              <div className="tech-item">
                <SiPrisma size={50} />
                <span>Prisma</span>
              </div>
              <div className="tech-item">
                <SiGraphql size={50} />
                <span>GraphQL</span>
              </div>
              <div className="tech-item">
                <SiMongodb size={50} />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <SiGooglecloud size={50} />
                <span>Google Cloud SQL</span>
              </div>
              <div className="tech-item">
                <SiMongoose size={50} />
                <span>Mongoose</span>
              </div>
              <div className="tech-item">
                <SiFirebase size={50} />
                <span>Firebase Hosting</span>
              </div>
              <div className="tech-item">
                <SiFirebase size={50} />
                <span>Firebase Functions</span>
              </div>
              <div className="tech-item">
                <SiGooglecloud size={50} />
                <span>Google Cloud Run</span>
              </div>
              <div className="tech-item">
                <SiDocker size={50} />
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <SiVisualstudiocode size={50} />
                <span>VS Code</span>
              </div>
              <div className="tech-item">
                <SiGithub size={50} />
                <span>GitHub</span>
              </div>
              <div className="tech-item">
                <SiJupyter size={50} />
                <span>Jupyter Notebook</span>
              </div>
              <div className="tech-item">
                <SiVirtualbox size={50} />
                <span>Oracle VM VirtualBox</span>
              </div>
              <div className="tech-item">
                <SiUnity size={50} />
                <span>Unity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
