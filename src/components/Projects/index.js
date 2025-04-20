import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
  SiPython, SiExpress, SiNodedotjs, SiPrisma, SiGooglecloud,
  SiMongoose, SiReact, SiHtml5, SiCss3, SiVisualstudiocode,
  SiGithub, SiJavascript, SiTailwindcss, SiMongodb, SiHeroku,
  SiGit, SiFirebase, SiMysql, SiPostgresql, SiGraphql,
  SiDocker, SiTensorflow, SiKeras, SiJupyter, SiVirtualbox,
  SiUnity, SiTypescript, SiSass, SiAmazonaws, SiJsonwebtokens
} from 'react-icons/si';
import Loader from 'react-loaders';

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Data sample (import from separate file or API)
const projectData = [
  {
    title: "Admin Portal for Redhawk Research",
    description:
      "Developed an admin portal with integrated core backend functionality using GraphQL. This project significantly enhanced security and administrative efficiency by 30%. The portal's design focused on user-friendly interfaces and secure data handling, streamlining administrative tasks and improving overall operational workflow.",
    image: require("../../assets/adminpg.png"),
    projectOverview: "The admin portal for Redhawk Research was developed to enhance security and administrative efficiency. It features a user-friendly interface and robust data handling capabilities.",
    keyFeatures: [
      "Integrated Core Backend Functionality",
      "Enhanced Security Measures",
      "Streamlined Administrative Tasks",
      "User-Friendly Interface",
      "Staff User Authentication and Permission Inspection",
      "30+ Custom GraphQL Queries and Mutations",
      "Control of 25+ Tables in PostgreSQL"
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "SCSS"],
      Backend: ["Node.js", "Express", "GraphQL", "PostgreSQL"]
    }
  },
  {
    title: "Products Page for AeroDefense",
    description:
      "Engineered the Products Page for AeroDefense's main website, which resulted in a 40% increase in user engagement and a 25% boost in conversion rates. The project involved designing a responsive and visually appealing layout, optimizing page performance, and ensuring seamless integration with the existing website infrastructure.",
    image: require("../../assets/products.png"),
    projectOverview: "The Products Page for AeroDefense was designed to increase user engagement and boost conversion rates with a responsive and visually appealing layout.",
    keyFeatures: [
      "Responsive Design",
      "Increased User Engagement",
      "Optimized Page Performance",
      "Seamless Integration",
      "Embedded Customer Reviews",
      "Testimonial Subpages",
      "Enhanced Product Listing Accuracy",
      "SEO Optimization"
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "SCSS"],
      Backend: ["Node.js", "Express"]
    }
  },
  {
    title: "Optimized Convolutional Neural Networks (CNNs)",
    description:
      "Conducted extensive research on Convolutional Neural Networks (CNNs) and developed optimized techniques to reduce AI training times significantly. This project involved deep learning, data analysis, and algorithm optimization, contributing to advancements in AI efficiency and performance.",
    image: require("../../assets/research.png"),
    projectOverview: "This project focused on optimizing Convolutional Neural Networks to reduce AI training times, involving deep learning, data analysis, and algorithm optimization.",
    keyFeatures: [
      "Reduced AI Training Times",
      "Deep Learning Techniques",
      "Data Analysis",
      "Algorithm Optimization",
      "Layer Freezing Schedules",
      "Transfer Learning with Frozen Backpropagation",
      "Improved Model Interpretability"
    ],
    techStack: {
      Frontend: [],
      Backend: ["Python", "TensorFlow", "Keras"]
    }
  },
  {
    title: "React Native Mobile Application",
    description:
      "This project highlights my proficiency in developing complex mobile applications with a focus on user experience, performance, and security. The combination of React Native and TypeScript allowed for a robust and scalable codebase, while SCSS ensured a responsive and visually appealing UI. The integration of various technologies such as GraphQL, JWT, and Amazon S3 demonstrates my ability to work with a diverse tech stack to deliver comprehensive solutions.",
    image: require("../../assets/gastro.png"),
    projectOverview:
      "I developed a comprehensive mobile application using React Native, SCSS, and TypeScript. This application was designed to provide a seamless and efficient user experience with a variety of features tailored to modern needs.",
    keyFeatures: [
      "Secure login and registration system using JWT for authentication.",
      "Personalized user profiles with customizable settings.",
      "Easy and fast media upload capabilities integrated with Amazon S3 for storage.",
      "Inventory Updates & Low Stock Alerts: Real-time tracking of inventory levels with automated low stock notifications.",
      "Push notifications to keep users informed and engaged.",
      "Detailed analytics for monitoring application usage and performance."
    ],
    techStack: {
      Frontend: ["React Native", "TypeScript", "SCSS", "Material-UI"],
      Backend: ["Node.js", "Express", "PostgreSQL", "JWT", "Amazon S3", "GraphQL"]
    }
  },
  {
    title: "GraphQL Backend Integration",
    description:
      "Constructed a backend system using GraphQL, enhancing the data query efficiency and security. This project included setting up robust authentication mechanisms, implementing secure data transactions, and creating scalable APIs for efficient data management.",
    image: require("../../assets/adminpg.png"),
    projectOverview: "The GraphQL Backend Integration project aimed to enhance data query efficiency and security through robust authentication mechanisms and scalable APIs.",
    keyFeatures: [
      "Enhanced Data Query Efficiency",
      "Robust Authentication Mechanisms",
      "Secure Data Transactions",
      "Scalable APIs",
      "Improved System Interoperability",
      "Control of Multiple Data Tables"
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
    const t1 = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(t1);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-cyan-900 z-50">
        <Loader type="ball-grid-pulse" color="#FFFFFF" />
      </div>
    );
  }

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-700 to-cyan-900 text-white min-h-screen">
      {/* Blurred Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse delay-300" />
      </div>

      <m.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <m.h1
          className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
          variants={fadeItem}
        >
          Projects
        </m.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((proj, i) => (
            <m.div
              key={i}
              variants={fadeItem}
              className="bg-white bg-opacity-10 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition p-6 flex flex-col"
              onClick={() => setSelected(proj)}
            >
              <h2 className="text-2xl font-semibold mb-4">{proj.title}</h2>
              <p className="flex-grow text-base leading-relaxed mb-6">
                {proj.description}
              </p>
              <button className="mt-auto self-start bg-cyan-400 text-indigo-900 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-300 transition">
                View Details
              </button>
            </m.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <m.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <m.div
                className="bg-white rounded-2xl p-8 max-w-3xl w-full text-gray-900 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>
                <h3 className="text-3xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc list-inside mb-6">
                  {selected.keyFeatures.map((f, idx) => (
                    <li key={idx} className="mb-2">{f}</li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(selected.techStack).map(([cat, items]) => (
                    <div key={cat}>
                      <h4 className="font-semibold mb-2">{cat}</h4>
                      <div className="flex flex-wrap gap-3">
                        {items.map((tech, j) => {
                          // choose appropriate icon
                          const Icon = {
                            'React': SiReact, 'TypeScript': SiTypescript,
                            'SCSS': SiSass, 'Node.js': SiNodedotjs,
                            'Express': SiExpress, 'GraphQL': SiGraphql,
                            'PostgreSQL': SiPostgresql, 'JWT': SiJsonwebtokens,
                            'Amazon S3': SiAmazonaws
                          }[tech] || SiApplearcade;
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
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </section>
  );
}
