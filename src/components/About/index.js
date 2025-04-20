import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiExpress, SiNodedotjs, SiPrisma, SiGooglecloud,
  SiMongoose, SiReact, SiHtml5, SiCss3, SiVisualstudiocode,
  SiGithub, SiJavascript, SiTailwindcss, SiMongodb, SiHeroku,
  SiGit, SiFirebase, SiMysql, SiPostgresql, SiGraphql,
  SiDocker, SiTensorflow, SiKeras, SiJupyter, SiVirtualbox,
  SiUnity
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Loader from "react-loaders";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-cyan-900 z-50">
        <Loader type="ball-grid-pulse" color="#FFFFFF" />
      </div>
    );
  }

  const tech = [
    [SiJavascript, "JavaScript"], [SiPython, "Python"], [FaJava, "Java"],
    [SiHtml5, "HTML"], [SiCss3, "CSS"], [SiNodedotjs, "Node.js"],
    [SiExpress, "Express"], [SiReact, "React"], [SiReact, "React Native"],
    [SiKeras, "Keras"], [SiTensorflow, "TensorFlow"], [SiPostgresql, "PostgreSQL"],
    [SiPrisma, "Prisma"], [SiGraphql, "GraphQL"], [SiMongodb, "MongoDB"],
    [SiGooglecloud, "Google Cloud SQL"], [SiMongoose, "Mongoose"],
    [SiFirebase, "Firebase Hosting"], [SiFirebase, "Firebase Functions"],
    [SiGooglecloud, "Cloud Run"], [SiDocker, "Docker"], [SiVisualstudiocode, "VS Code"],
    [SiGithub, "GitHub"], [SiJupyter, "Jupyter"], [SiVirtualbox, "VirtualBox"],
    [SiUnity, "Unity"]
  ];

  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-100 to-white text-gray-800 w-full">
      {/* blurred background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-3xl opacity-50 animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-purple-500 rounded-full filter blur-2xl opacity-40 animate-pulse delay-600" />
      </div>

      <motion.div
        className="relative grid gap-12 md:grid-cols-2 max-w-8xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Left Column */}
        <motion.div variants={fadeInUp} className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-cyan-700 mb-2">
              About Me
            </h2>
            <div className="w-16 h-1 bg-cyan-700 rounded mb-4" />
            <p className="text-base md:text-lg leading-relaxed mb-4">
              I’m <span className="font-semibold">Nika Gedenidze</span>, a Computer Science graduate (’24) from Caldwell University. As a Back‑end Developer Intern at Mazi Restaurants, I built a .NET Core inventory management system that saved 40+ hours of manual work monthly and automated stock updates by 80%.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Previously at Redhawk Research, I architected a full‑stack admin portal with GraphQL, Prisma & Docker on Google Cloud Run—boosting query speeds by 40% and maintaining 75% test coverage. I also led CNN transfer‑learning research on 150K+ images, improving accuracy and training efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-cyan-700 mb-2">
              Hobbies
            </h2>
            <div className="w-16 h-1 bg-cyan-700 rounded mb-4" />
            <p className="text-base md:text-lg leading-relaxed">
              Off‑duty, I produce electronic music, collect vinyl records, and skateboard. I’m also a film buff and avid reader—passions that keep my creativity sharp.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl md:text-4xl font-extrabold text-cyan-700 mb-2">
            Tech & Tools
          </h2>
          <div className="w-16 h-1 bg-cyan-700 rounded mb-6" />

          {/* horizontal scroll on mobile, grid on larger */}
          <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {tech.map(([Icon, name], i) => (
              <div
                key={i}
                className="flex-shrink-0 sm:flex-shrink sm:flex-grow bg-indigo-800 bg-opacity-60 rounded-2xl shadow p-4 flex flex-col items-center text-center min-w-[80px]"
              >
                <Icon size={36} className="text-cyan-300 mb-2" />
                <span className="text-sm md:text-base font-medium text-white whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
