import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';

const Projects = () => {
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
    return <Loader type="ball-grid-pulse" color="#339ecc"/>;
  }

  return (
    <div className={`projects-page ${fadeClass}`}>
      <div className="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div className="slides">
          <div id="slide-1">1</div>
          <div id="slide-2">2</div>
          <div id="slide-3">3</div>
          <div id="slide-4">4</div>
          <div id="slide-5">5</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
