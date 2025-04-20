import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = ["Full-Stack Developer", "AI Researcher", "Software Developer"];

const fadeVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function AnimatedTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-0 mb-0 h-[2.5rem] md:h-[3rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={titles[index]}
          variants={fadeVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute text-cyan-300 font-semibold text-3xl md:text-4xl"
        >
          {titles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
