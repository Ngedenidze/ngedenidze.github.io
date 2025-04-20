import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from 'react-loaders';
import {
  SiReact, SiTypescript, SiSass, SiNodedotjs, SiExpress,
  SiGraphql, SiPostgresql, SiJsonwebtokens, SiAmazonaws,
  SiKeras, SiTensorflow, SiPython, SiDocker
} from 'react-icons/si';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
  }
};
const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const projectData = [
  {
    // Sep 2024
    title: "Admin Portal for Redhawk Research",
    description:
      "Developed an admin portal with integrated core backend functionality using GraphQL. This project significantly enhanced security and administrative efficiency by 30%. The portal's design focused on user-friendly interfaces and secure data handling, streamlining administrative tasks and improving overall operational workflow.",
    image: require("../../assets/adminpg.png"),
    projectOverview: "Admin portal enhancing security and efficiency with GraphQL, Prisma, and Docker on cloud.",
    keyFeatures: [
      "Integrated Core Backend Functionality",
      "Enhanced Security Measures",
      "Streamlined Administrative Tasks",
      "User-Friendly Interface",
      "Staff Authentication & Permissions",
      "30+ Custom GraphQL Queries & Mutations",
      "Control of 25+ PostgreSQL Tables"
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "SCSS"],
      Backend: ["Node.js", "Express", "GraphQL", "PostgreSQL"]
    }
  },
  {
    // May 2024
    title: "Optimized Convolutional Neural Networks (CNNs)",
    description:
      "Conducted research optimizing CNN training workflows on 150K+ images via transfer learning, reducing training time and improving accuracy.",
    image: require("../../assets/research.png"),
    projectOverview: "AI research project on CNN optimization using Python, TensorFlow, Keras for faster, more accurate models.",
    keyFeatures: [
      "Reduced Training Times",
      "Layer Freezing Schedules",
      "Transfer Learning Strategies",
      "Algorithm Optimization",
      "Improved Model Interpretability"
    ],
    techStack: {
      Frontend: [],
      Backend: ["Python", "TensorFlow", "Keras"]
    }
  },
  {
    // Dec 2023
    title: "Wordle Game App",
    description:
      "Built a multi-platform Wordle-inspired game using JavaScript, React, MongoDB, and Express—optimized for performance and deployed via Firebase.",
    image: require("../../assets/wordle.png"),
    projectOverview: "A Wordle clone featuring caching, optimized DB queries, and Firebase Hosting for fast, reliable play across devices.",
    keyFeatures: [
      "NYT-style Game Mechanics",
      "Indexed MongoDB Queries (40% faster)",
      "Redis Caching Mechanism",
      "Firebase Hosting & Functions Deployment"
    ],
    techStack: {
      Frontend: ["JavaScript", "React", "HTML5", "CSS3"],
      Backend: ["MongoDB", "Express", "Redis", "Firebase"]
    }
  },
  {
    // React Native App
    title: "React Native Mobile Application",
    description:
      "Developed a cross-platform mobile app in React Native & TypeScript, featuring JWT auth, S3 media storage, real-time inventory alerts, and analytics.",
    image: require("../../assets/gastro.png"),
    projectOverview:
      "A robust mobile solution focusing on UX, performance, and security, integrating AWS S3, JWT, and PostgreSQL.",
    keyFeatures: [
      "JWT Authentication System",
      "Customizable User Profiles",
      "Amazon S3 Media Upload",
      "Real-time Inventory Alerts",
      "Push Notifications",
      "In-app Analytics Dashboard"
    ],
    techStack: {
      Frontend: ["React Native", "TypeScript", "SCSS", "Material-UI"],
      Backend: ["Node.js", "Express", "PostgreSQL", "JWT", "Amazon S3", "GraphQL"]
    }
  },
  {
    // AeroDefense "
    title: "Products Page for AeroDefense",
    description:
      "Engineered the Products Page for AeroDefense's main site—boosted engagement by 40% and conversion by 25% with responsive, SEO-optimized design.",
    image: require("../../assets/products.png"),
    projectOverview: "AeroDefense product showcase with SEO, testimonials, and embedded reviews for higher conversions.",
    keyFeatures: [
      "Responsive Design",
      "SEO Optimization",
      "Embedded Reviews & Testimonials",
      "Performance Tuning",
      "Accurate Product Listings"
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "SCSS"],
      Backend: ["Node.js", "Express"]
    }
  },
  {
    // GraphQL integration
    title: "GraphQL Backend Integration",
    description:
      "Built a scalable GraphQL API with robust auth, secure data flows, and efficient queries to support multiple frontends.",
    image: require("../../assets/adminpg.png"),
    projectOverview: "GraphQL service layer with JWT, PostgreSQL, and optimized resolvers for fast data access.",
    keyFeatures: [
      "Secure JWT Authentication",
      "Optimized Query Efficiency",
      "Scalable API Design",
      "Role-based Data Access"
    ],
    techStack: {
      Frontend: [],
      Backend: ["Node.js", "GraphQL", "PostgreSQL", "JWT"]
    }
  }
];

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);

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

  return (
    <motion.section
      className="relative px-6 bg-gradient-to-br from-indigo-700 to-cyan-900 text-white min-h-screen pt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse delay-300" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center"
          variants={fadeItem}
        >
          Projects
        </motion.h1>

        {/* Carousel on mobile, grid on larger screens */}
        <div className="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-wrap sm:overflow-visible px-4 sm:px-0 snap-x snap-mandatory">
          {projectData.map((proj, idx) => (
            <motion.div
              key={idx}
              className="snap-start flex-shrink-0 sm:flex-shrink sm:flex-grow w-80 sm:w-auto bg-white bg-opacity-10 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition p-6 flex flex-col"
              variants={fadeItem}
              onClick={() => setSelected(proj)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-md mb-4 object-cover h-48 w-full overflow-hidden"
              />
              <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
              <p className="flex-grow text-base leading-relaxed mb-4">
                {proj.description}
              </p>
              <button className="mt-auto self-start bg-cyan-400 text-indigo-900 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-300 transition">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-3xl w-full text-gray-900 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={e => e.stopPropagation()}
                variants={fadeItem}
              >
                <button
                  className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>
                <h3 className="text-3xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc list-inside mb-6">
                  {selected.keyFeatures.map((feat, i) => (
                    <li key={i} className="mb-2">{feat}</li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(selected.techStack).map(([cat, items]) => (
                    <div key={cat}>
                      <h4 className="font-semibold mb-2">{cat}</h4>
                      <div className="flex flex-wrap gap-3">
                        {items.map((tech, j) => {
                          const IconMap = {
                            React: SiReact,
                            TypeScript: SiTypescript,
                            SCSS: SiSass,
                            'Node.js': SiNodedotjs,
                            Express: SiExpress,
                            GraphQL: SiGraphql,
                            PostgreSQL: SiPostgresql,
                            JWT: SiJsonwebtokens,
                            'Amazon S3': SiAmazonaws,
                            TensorFlow: SiTensorflow,
                            Keras: SiKeras,
                            Python: SiPython,
                            Docker: SiDocker
                          };
                          const Icon = IconMap[tech] || SiReact;
                          return (
                            <div key={j} className="flex items-center gap-2">
                              <Icon size={28} className="text-cyan-500" />
                              <span>{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
