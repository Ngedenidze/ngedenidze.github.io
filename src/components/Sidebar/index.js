import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faRocket, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSwipeable } from 'react-swipeable';
import LogoS from '../../assets/logo-2.png';

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handlers = useSwipeable({
    onSwipedLeft: () => setDrawerOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-fit" {...handlers}>
  <div className="bg-white/10 backdrop-blur-md px-9 py-6 rounded-2xl shadow-lg flex flex-row items-center justify-center gap-14 text-white text-lg">

    {/* Logo */}
    <img src={LogoS} alt="logo" className="w-16 h-16 rounded-full" />

    {/* Nav Links */}
    <nav className="flex flex-row items-center gap-9">
      <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 flex items-center gap-3 text-xl">
        <FontAwesomeIcon icon={faHome} size="lg" />
        <span>Home</span>
      </button>
      <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 flex items-center gap-3 text-xl">
        <FontAwesomeIcon icon={faUser} size="lg" />
        <span>About</span>
      </button>
      <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 flex items-center gap-3 text-xl">
        <FontAwesomeIcon icon={faRocket} size="lg" />
        <span>Projects</span>
      </button>
      <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 flex items-center gap-3 text-xl">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <span>Contact</span>
      </button>
    </nav>

    {/* Social Links */}
    <div className="flex items-center gap-5 text-xl">
      <a href="https://www.linkedin.com/in/ngedenidze/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="hover:text-cyan-400" size="lg" />
      </a>
      <a href="https://www.github.com/Ngedenidze/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="hover:text-cyan-400" size="lg" />
      </a>
    </div>

    {/* Mobile Drawer Toggle */}
    <div className="md:hidden">
      <button onClick={toggleDrawer} className="text-white ml-4">
        <FontAwesomeIcon icon={drawerOpen ? faTimes : faRocket} size="2x" />
      </button>
    </div>
  </div>

  {drawerOpen && (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col space-y-6 text-xl">
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </div>
  )}
</div>

  );
};

export default Sidebar;
