import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import Loader from 'react-loaders';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef();

  useEffect(() => {
    const t1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    const t2 = setTimeout(() => setIsLoading(false), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!customElements.get('spline-viewer')) {
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js';
      s.type = 'module';
      document.body.appendChild(s);
      return () => document.body.removeChild(s);
    }
  }, []);

  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('gmail','template_YeJhZkgb', formRef.current, 'your-token')
      .then(() => alert('Message sent!'), () => alert('Failed.'));  
    e.target.reset();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-cyan-900">
        <Loader type="ball-grid-pulse" color="#FFF" />
      </div>
    );
  }

  return (
    <section id="contact" className="rrelative py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-100 to-white text-gray-800 w-full max-w-8xl">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-cyan-700 text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className={`${letterClass} inline-block`}>Contact</span> Me
      </motion.h2>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-3xl opacity-50 animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-purple-500 rounded-full filter blur-2xl opacity-40 animate-pulse delay-600" />
      </div>

      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 bg-cyan-700 bg-opacity-70 backdrop-blur rounded-xl p-6 text-white h-max"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="flex-1 bg-white bg-opacity-80 backdrop-blur rounded px-4 py-2 placeholder-cyan-800 text-cyan-800 focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="flex-1 bg-white bg-opacity-80 backdrop-blur rounded px-4 py-2 mt-4 sm:mt-0 placeholder-cyan-800 text-cyan-800 focus:outline-none"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full bg-white bg-opacity-80 backdrop-blur rounded px-4 py-2 placeholder-cyan-800 text-cyan-800 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            className="w-full bg-white bg-opacity-80 backdrop-blur rounded px-4 py-2 placeholder-cyan-800 text-cyan-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            SEND
          </button>
        </motion.form>

        {/* Info Card + 3D */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-6"
        >
          <div className="bg-cyan-700 bg-opacity-70 backdrop-blur rounded-xl p-6 text-white">
            <img
              src={require('./../../assets/logo-2.png')}
              alt="Avatar"
              className="w-36 h-36 rounded-full mx-auto mb-4"
            />
            <h3 className="text-3xl font-bold text-center">Nika Gedenidze</h3>
            <p className="text-center text-xl text-white">Software Engineer</p>
            <div className="mt-4 text-center space-y-1 text-2xl">
              <p>Caldwell, NJ 07006</p>
              <p>+1 (717) 775-0711</p>
              <p>ngedenidze@outlook.com</p>
            </div>
          </div>
          <div className="w-full h-64 rounded-xl overflow-hidden">
            <spline-viewer url="https://prod.spline.design/your-scene-url/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}