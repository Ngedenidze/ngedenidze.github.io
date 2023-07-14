import "./index.scss";
import { useEffect, useState } from 'react'
import logo from "../../assets/logo.png";
import pic2 from "../../assets/pic23.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['i', 'k', 'a', ' ','g', 'e', 'd', 'e', 'n', 'i', 'd', 'z', 'e'];
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e',' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timerId);
    }, []);
    useEffect(() => {
        if (!customElements.get('spline-viewer')) {
            loadScript('https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js')
                .then(() => {
                    console.log('Spline viewer script loaded');
                })
                .catch((error) => {
                    console.error('Error loading spline viewer script:', error);
                });
        } else {
            console.log('Spline viewer script already loaded');
        }
    }, []);

    
    
    return (
        <>
        <div className="container home-page">
        {/* <img src={pic2} alt="" className="home-page-pic"></img> */}
            <div className="text-zone">
            
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={logo} alt=""></img>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <span> </span>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={28} 
                />
                </h1>
                <h2>I'm upcoming machine learning engineer</h2>     
                
                <Link to="/projects" className="flat-button">PROJECTS</Link>
            </div>
            <div className="animation-container">
            {/* <spline-viewer loading-anim url="https://prod.spline.design/gd0yFiBUrhcBhMRu/scene.splinecode"></spline-viewer> */}
               <img src="./snapshot.png" alt="" className="home-page-pic"></img>
            </div>
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )
}


export default Home