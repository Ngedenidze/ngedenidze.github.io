import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiExpress, SiNodedotjs, SiPrisma, SiGooglecloud,
  SiMongoose, SiReact, SiHtml5, SiCss3, SiVisualstudiocode,
  SiGithub, SiJavascript, SiTailwindcss, SiMongodb, SiHeroku,
  SiGit, SiFirebase, SiMysql, SiPostgresql, SiGraphql,
  SiDocker, SiTensorflow, SiKeras, SiJupyter, SiVirtualbox,
  SiUnity,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Loader from "react-loaders";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
    [SiUnity, "Unity"],
  ];

  return (
    <section className="relative h-screen flex items-center px-6 md:px-20 bg-gradient-to-br from-indigo-100 to-white text-gray-800">
      {/* animated blurred blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-3xl opacity-50 animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-purple-500 rounded-full filter blur-2xl opacity-40 animate-pulse delay-600" />
      </div>

      <motion.div
        className="relative w-full max-w-8xl mx-auto grid gap-16 md:grid-cols-2 items-start h-full z-10 pt-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Left */}
        <motion.div variants={fadeInUp} className="space-y-14 align-top justify-start content-start items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-cyan-700">
              About Me
            </h2>
            <div className="w-20 h-1 bg-cyan-700 rounded mb-6" />
            <p className="text-3xl md:text-3xl leading-relaxed text-gray-950">
              I’m <span className="font-semibold">Nika Gedenidze</span>, a
              Computer Science graduate (’24) from Caldwell University. As a
              Back‑end Developer Intern at Mazi Restaurants, I built a
              .NET Core inventory management system that cut 40+ hours of
              manual work each month and automated stock updates by 80%.
            </p>
            <p className="mt-6 text-3xl md:text-3xl leading-relaxed text-gray-950">
              Previously at Redhawk Research, I architected a full‑stack admin
              portal with GraphQL, Prisma & Docker on Google Cloud Run—boosting
              query speeds by 40% and achieving 75% test coverage with Jest.
              In academia, I led CNN transfer‑learning research on 150K+
              images, improving accuracy and training time.
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-cyan-700">
              Hobbies
            </h2>
            <div className="w-20 h-1 bg-cyan-700 rounded mb-6" />
            <p className="text-3xl md:text-3xl leading-relaxed text-gray-950">
              Off‑duty, I produce electronic music, collect vinyl records, and
              skateboard. I’m also a film buff and avid reader—passions that
              keep my creative edge sharp.
            </p>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-cyan-700">
            Tech & Tools
          </h2>
          <div className="w-20 h-1 bg-cyan-700 rounded mb-6" />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
            {tech.map(([Icon, name], i) => (
              <div
                key={i}
                className="flex flex-col items-center p-5 w-full bg-indigo-800 bg-opacity-60 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
              >
                <Icon size={56} className="text-cyan-300 mb-3 pt-2 pb-2 pr-2 pl-2" />
                <span className="text-base md:text-lg font-medium text-white whitespace-nowrap">
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
