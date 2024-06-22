import "./index.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loaders";
import IconLogoAppleAr from "./IconLogoAppleAr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconChevronRight from "./IconCehvronRight";
import GLTFModel from "../Animated Laptop/GLTFModel";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const Home = () => {
  const navigation = useNavigate();
  const [letterClass, setLetterClass] = useState("text-animate");
  const handleClick = () => {
    navigation("/projects");
  };
    const handleClickContact = () => {
    navigation("/contact");
    };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);
  useEffect(() => {
    if (!customElements.get("spline-viewer")) {
      loadScript(
        "https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js"
      )
        .then(() => {
          console.log("Spline viewer script loaded");
        })
        .catch((error) => {
          console.error("Error loading spline viewer script:", error);
        });
    } else {
      console.log("Spline viewer script already loaded");
    }
  }, []);

  return (
    <>
      <div className="container home-page">
        {/* <img src={pic2} alt="" className="home-page-pic"></img> */}
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _1`}>Hey, </span>
            <span className={`${letterClass} _2`}>I'm </span>
            {/* <img src={logo2} alt=""></img> */}
            <span className={`${letterClass} _3`}>Nika </span>
            <span className={`${letterClass} _4`}>Gedenidze </span>
            <br />
          </h1>
          <h2>
          <span className={`${letterClass} _5`}>Crafting Innovative Solutions with Full-Stack Development and AI
          Expertise</span>
            
          </h2>
          <div className="buttonContainer">
            <button class="btnProject" onClick={handleClick}>
            <span class="text">PROJECTS</span>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <IconLogoAppleAr />
              </svg>


            </button>
            <button class="btnContact" onClick={handleClickContact}>
            <span class="text">Let's Talk</span>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <IconChevronRight />
              </svg>
              
            </button>
          </div>
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
        <div className="animation-zone">
        <GLTFModel modelPath="/public/office.glb" />
        </div>

       
      </div>
      <Loader type="ball-grid-pulse" color="#339ecc" />
    </>
  );
};

export default Home;
