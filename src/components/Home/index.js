import "./index.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loaders";
import IconLogoAppleAr from "./IconLogoAppleAr";
import IconChevronRight from "./IconChevronRight";
import GLTFModel from "../Animated Laptop/GLTFModel";
import TypingEffect from "../Typing/TypingEffect"; // Import the TypingEffect component

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
        <div className="animation-zone">
          <div className="text-zone">
            <h1>
              <span className={`${letterClass} _1`}>Hey, </span>
              <span className={`${letterClass} _2`}>I am </span>
              <span className={`${letterClass} _3`}>Nika</span>
              <span className={`${letterClass} _4`}></span>
              <br />
            </h1>
            <h1 className="title">
              <TypingEffect
                textArray={[
                  "Full-Stack Developer",
                  "AI Researcher",
                  "Software Developer",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delay={2000}
              />
            </h1>
            <h2>
              <span className={`${letterClass} _5`}>
                Crafting Innovative Solutions with Full-Stack Development and AI
                Expertise
              </span>
            </h2>
            <div className="buttonContainer">
              <button className="btnProject" onClick={handleClick}>
                <span className="text">PROJECTS</span>
                <svg
                  height="24"
                  width="24"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  id="Layer_1"
                  className="sparkle"
                >
                  <IconLogoAppleAr />
                </svg>
              </button>
              <a href="/resume.pdf" download className="btnContact">
                <span className="text">RESUME</span>
                <svg
                  height="24"
                  width="24"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  id="Layer_1"
                  className="sparkle"
                >
                  <IconChevronRight />
                </svg>
              </a>
            </div>
          </div>
          <div>
          <img src={require("./back.png")} alt="" className="home-page-pic" />
          </div>
         
        </div>
      </div>
      <Loader type="ball-grid-pulse" color="#339ecc" />
    </>
  );
};

export default Home;
