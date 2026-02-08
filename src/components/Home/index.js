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

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/projects");

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-12 min-h-screen w-full bg-gradient-to-br from-indigo-700 to-cyan-900 px-6 md:px-12 box-border"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dynamic background canvas */}
      <FluidCanvas className="absolute inset-0 -z-10" />

      {/* Text Section */}
      <motion.div
        className="relative flex flex-col justify-center space-y-6 z-10"
        variants={itemVariants}
      >
        <motion.h1
          className="text-white text-5xl md:text-8xl font-extrabold leading-tight"
          variants={itemVariants}
        >
          Hey,<br />
          I am <span className="text-cyan-400">Nika!</span>
        </motion.h1>

        <motion.h2
          className="text-cyan-300 font-semibold text-2xl md:text-4xl"
          variants={itemVariants}
        >
          <AnimatedTitles />
        </motion.h2>

        <motion.p
          className="text-white text-lg md:text-3xl leading-relaxed max-w-xl"
          variants={itemVariants}
        >
          Crafting innovative solutions in Full-Stack Development and AI.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <button
            onClick={handleClick}
            className="bg-cyan-600/70 text-white font-medium py-3 px-10 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            PROJECTS
            <span className="ml-2 inline-block w-6 h-6">
              <IconLogoAppleAr className="w-full h-full" />
            </span>
          </button>

          <a
            href="/NGedenidze.pdf"
            download
            className="bg-white text-cyan-600 font-medium py-3 px-10 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            RESUME
            <span className="ml-2 inline-block w-6 h-6">
              <IconChevronRight className="w-full h-full" />
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
         <motion.img
        src={backImage}
        alt="Hero background"
        className="hidden md:block h-[80vh] w-[18vw] object-contain relative z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      />
    </motion.div>
  );
}
