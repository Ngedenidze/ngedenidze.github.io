import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IconLogoAppleAr from "./IconLogoAppleAr";
import IconChevronRight from "./IconChevronRight";
import AnimatedTitles from "./AnimatedTitle";
import backImage from "./back.png";
import FluidCanvas from "./FluidCanvas";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/projects");

  return (
    <motion.div
    className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-full px-6 md:px-12 bg-gradient-to-br from-indigo-700 to-cyan-900 overflow-hidden box-border h-full"

      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
         <div className="absolute w-full h-full z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-300 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl opacity-60 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-purple-300 rounded-full filter blur-2xl opacity-50 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-yellow-300 rounded-full filter blur-2xl opacity-50 animate-pulse delay-700"></div>   
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-green-300 rounded-full filter blur-2xl opacity-50 animate-pulse delay-900"></div>
        </div>

      {/* Text Section */}
      <motion.div
        className="relative flex flex-col justify-center w-full md:w-1/2 max-w-2xl z-10"
        variants={itemVariants}
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-2"
          variants={itemVariants}
        >
          Hey, <br />
          I am <span className="text-cyan-400">Nika!</span>
        </motion.h1>

        <motion.h2
          className="text-cyan-300 font-semibold text-xl md:text-3xl mb-6"
          variants={itemVariants}
        >
          <AnimatedTitles />
        </motion.h2>

        <motion.p
          className="text-white text-base md:text-lg max-w-xl leading-relaxed mb-8"
          variants={itemVariants}
        >
          Crafting Innovative Solutions with Full-Stack Development and AI Expertise
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.button
            onClick={handleClick}
            className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-medium py-2.5 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            PROJECTS
            <span className="ml-2">
              <IconLogoAppleAr />
            </span>
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            className="bg-white text-cyan-600 font-medium py-2.5 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            RESUME
            <span className="ml-2">
              <IconChevronRight />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.img
        src={backImage}
        alt="Hero background"
        className="hidden md:block h-[80vh] w-[40vw] object-contain relative z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      />
    </motion.div>
  );
};

export default Home;
