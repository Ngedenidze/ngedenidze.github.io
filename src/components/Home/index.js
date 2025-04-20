import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IconLogoAppleAr from "./IconLogoAppleAr";
import IconChevronRight from "./IconChevronRight";
import TypingEffect from "../Typing/TypingEffect";
import backImage from "./back.png";
import AnimatedTitles from "./AnimatedTitle";

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
      className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-full pb-40 px-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Text Section */}
      <motion.div
        className="relative flex flex-col justify-center w-full md:w-1/2 max-w-2xl z-10"
        variants={itemVariants}
      >
<motion.h1
  className="text-white text-4xl md:text-6xl font-extrabold leading-tight"
  variants={itemVariants}
>
  Hey, <br />I am <span className="text-cyan-400">Nika!</span>
</motion.h1>

<motion.h2
  className="text-cyan-300 font-semibold text-xl md:text-3xl mb-6"
  variants={itemVariants}
>
  <AnimatedTitles />
</motion.h2>

<motion.p
  className="text-white text-lg md:text-base mt-4 max-w-lg leading-relaxed"
  variants={itemVariants}
>
  Crafting Innovative Solutions with Full-Stack Development and AI Expertise
</motion.p>


        <motion.div
  className="flex flex-col md:flex-row gap-4 mt-8"
  variants={itemVariants}
>
  <motion.button
    onClick={handleClick}
    className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-medium py-2.5 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    PROJECTS
  </motion.button>

  <motion.a
    href="/resume.pdf"
    download
    className="bg-white text-cyan-600 font-medium py-2.5 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    RESUME
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
