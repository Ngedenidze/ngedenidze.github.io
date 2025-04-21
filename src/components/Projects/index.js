import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from 'react-loaders';
import {
  SiReact, SiTypescript, SiSass, SiNodedotjs, SiExpress,
  SiGraphql, SiPostgresql, SiJsonwebtokens, SiAmazonaws,
  SiKeras, SiTensorflow, SiPython, SiDocker, SiMicrosoft, SiMysql,
  SiDotnet
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
  /* Back‑end Inventory Management System */
  {
    title: 'Inventory Management System',
    images: [
      require('../../assets/gastro.png'),
      require('../../assets/gastro2.JPG'),
      require('../../assets/gastro3.JPG')
    ],
    description: 'Engineered the backend of a .NET Core & Entity Framework Inventory Management System at Mazi Restaurants LLC, reducing 40+ manual hours/month and automating 80% of stock updates via T‑SQL triggers.',
    keyFeatures: [
      '.NET Core + Entity Framework (Code‑First)',
      'Repository pattern for optimized MSSQL REST API calls (+25% efficiency)',
      'T‑SQL stored procedures & triggers automating stock updates (‑80% manual)',
      'Swagger‑documented endpoints for interactive API integration'
    ],
    techStack: {
      Backend: ['C#', '.NET Core', 'Entity Framework', 'T‑SQL', 'Swagger'],
      Tools: ['MSSQL', 'Git', 'Azure']
    }
  },
  /* Redhawk Research Admin Portal */
  {
    title: 'Admin Portal for Redhawk Research',
    images: [require('../../assets/admin.png')],
    description: 'Built a full‑stack admin portal with Prisma, Apollo Server, and GraphQL; containerized with Docker Compose on Google Cloud Run, boosting query speed by 40% and test coverage to 75%.',
    keyFeatures: [
      'Prisma ORM + Apollo GraphQL Server',
      '30+ custom queries & mutations for user data',
      'Jest unit/integration tests (75% coverage)',
      'Docker Compose → Google Cloud Run deployment'
    ],
    techStack: {
      Frontend: ['React', 'TypeScript', 'SCSS'],
      Backend: ['Node.js', 'Prisma', 'Apollo Server', 'GraphQL', 'PostgreSQL'],
      DevOps: ['Docker Compose', 'Google Cloud Run']
    }
  },
  /* CNN Optimization Research */
  {
    title: 'CNN Optimization Research',
    images: [require('../../assets/research.png')],
    description: 'Led AI research at Caldwell Interdisciplinary Center, optimizing CNN training on 150K+ images via transfer learning and custom layer‑freezing schedules, improving accuracy and reducing training time.',
    keyFeatures: [
      'Transfer learning with frozen backpropagation',
      '100+ model architectures tested for performance',
      'Matplotlib visualizations for non‑technical stakeholders'
    ],
    techStack: {
      Backend: ['Python', 'TensorFlow', 'Keras'],
      Tools: ['NumPy', 'Pandas', 'Matplotlib']
    }
  },
  /* Wordle Game App */
  {
    title: 'Wordle Clone',
    images: [require('../../assets/wrodle.jpg')],
    description: 'Developed a multi‑platform Wordle‑inspired game with React, MongoDB, and Express, optimizing performance with Redis caching and Firebase hosting.',
    keyFeatures: [
      'NYT‑style gameplay mechanics',
      'Indexed MongoDB & aggregation performance (+40%)',
      'Redis cache layer (‑30% response time)',
      'Firebase Hosting & Functions deployment'
    ],
    techStack: {
      Frontend: ['JavaScript', 'React', 'HTML5', 'CSS3'],
      Backend: ['Express', 'MongoDB', 'Redis'],
      Deployment: ['Firebase Hosting', 'Firebase Functions']
    }
  },
  /* React Native Mobile Application */

  /* Products Page for AeroDefense */
  {
    title: 'AeroDefense Products Page',
    images: [require('../../assets/products.png')],
    description: 'Engineered AeroDefense’s products page with responsive design, SEO optimization, and embedded testimonials, driving +40% engagement & +25% conversions.',
    keyFeatures: [
      'Responsive layouts & performance tuning',
      'SEO best practices & metadata',
      'Embedded customer reviews & testimonials'
    ],
    techStack: {
      Frontend: ['React', 'TypeScript', 'SCSS'],
      Backend: ['Node.js', 'Express']
    }
  },
  /* GraphQL Backend Integration */
  {
    title: 'GraphQL Backend Integration',
    images: [require('../../assets/adminpg.png')],
    description: 'Constructed a scalable GraphQL API with JWT auth, optimized resolvers, and role‑based access for seamless data management across clients.',
    keyFeatures: [
      'Secure JWT authentication',
      'Optimized query resolvers',
      'Role‑based data access'
    ],
    techStack: {
      Backend: ['Node.js', 'GraphQL', 'PostgreSQL', 'JWT']
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
  useEffect(() => {
  document.body.classList.toggle('modal-open', !!selected);
}, [selected]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-cyan-900 z-50">
        <Loader type="ball-grid-pulse" color="#FFFFFF" />
      </div>
    );
  }

  return (
    <motion.section
    className="relative px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950  text-white min-h-screen pt-10 "
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <div className="relative z-10 max-w-6xl mx-auto space-y-12">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center"
        variants={fadeItem}
      >
        Projects
      </motion.h1>

      <div className="overflow-x-auto grid grid-flow-col gap-6 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 snap-x snap-mandatory px-4">

        {projectData.map((proj, idx) => (
          <motion.div
            key={idx}
            className="snap-start flex-shrink-0 sm:flex-shrink sm:flex-grow w-80 sm:w-auto bg-white bg-opacity-10 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition p-6 flex flex-col"
            variants={fadeItem}
            onClick={() => setSelected(proj)}
          >
           <img
  src={proj.images[0]}
  alt={proj.title}
  className="rounded-md mb-4 object-cover h-80 w-full overflow-hidden"
/>
            <h2 className="text-4xl font-semibold mb-2">{proj.title}</h2>
            <p className="flex-grow text-xl leading-relaxed mb-4">
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
            <motion.div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>

              <motion.div className="bg-white rounded-2xl p-8 max-w-screen-2xl h-1/2 w-full text-gray-900 relative flex flex-col md:flex-row gap-6"
                initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={e => e.stopPropagation()} variants={fadeItem}>

                <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={() => setSelected(null)}>×</button>

                {/* Modal Images */}
                <div className="hidden md:flex md:space-x-4 md:w-3/5 md:h-full h-full border-x-slate-700">
                  {selected.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`${selected.title} screenshot ${idx+1}`} className="rounded-lg h-full w-full flex-1 object-scale-down border-2" />
                  ))}
                </div>

                {/* Details Column */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl font-bold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside mb-6">
                    {selected.keyFeatures.map((feat, i) => <li key={i} className="mb-2">{feat}</li>)}
                  </ul>
                  <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selected.techStack).map(([cat, items]) => (
                      <div key={cat}>
                        <h4 className="font-semibold mb-2">{cat}</h4>
                        <div className="flex flex-wrap gap-3">
                          {items.map((tech, j) => {
                            const IconMap = { React: SiReact, TypeScript: SiTypescript, SCSS: SiSass, 'Node.js': SiNodedotjs, Express: SiExpress, GraphQL: SiGraphql, PostgreSQL: SiPostgresql, JWT: SiJsonwebtokens, 'Amazon S3': SiAmazonaws, TensorFlow: SiTensorflow, Keras: SiKeras, Python: SiPython, Docker: SiDocker, '.NET Core': SiDotnet, 'Entity Framework': SiMicrosoft, MSSQL: SiMysql };
                            const Icon = IconMap[tech] || SiReact;
                            return <div key={j} className="flex items-center gap-2"><Icon size={28} className="text-cyan-500"/><span>{tech}</span></div>;
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}