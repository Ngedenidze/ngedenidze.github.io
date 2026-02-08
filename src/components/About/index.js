import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Loader from 'react-loaders';

// Icons for timeline events
import { FaDatabase, FaServer, FaBrain } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const experience = [
  {
    date: 'Sep 2024 – Present',
    icon: <FaServer />,    
    role: 'Back‑end Developer Intern',
    company: 'Mazi Restaurants LLC',
    bullets: [
      'Saved 40+ hrs/mo by automating inventory tasks with .NET Core & EF',
      'Reduced manual stock updates by 80% via T‑SQL triggers',
      'Optimized REST API calls, improving data retrieval by 25%'
    ]
  },
  {
    date: 'May 2024 – Sep 2024',
    icon: <FaDatabase />,    
    role: 'Software Engineering Intern',
    company: 'Redhawk Research LLC',
    bullets: [
      'Boosted GraphQL query speed by 40% in full‑stack admin portal',
      'Achieved 75% test coverage with Jest, reducing deployment bugs',
      'Containerized with Docker & deployed on Google Cloud Run'
    ]
  },
  {
    date: 'Mar 2022 – May 2024',
    icon: <FaBrain />,    
    role: 'AI Research Assistant',
    company: 'Interdisciplinary Center for Quantitative Research',
    bullets: [
      'Optimized CNN training on 150K+ images via transfer learning',
      'Designed 100+ model architectures improving accuracy',
      'Built Matplotlib visualizations for non‑technical stakeholders'
    ]
  }
];

const skills = [
  { name: 'Node.js', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Python', level: 80 },
  { name: 'GraphQL', level: 75 },
  { name: 'Docker', level: 70 },
  { name: 'TensorFlow', level: 65 }
];

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-cyan-900 z-50">
        <Loader type="ball-grid-pulse" color="#FFFFFF" />
      </div>
    );
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-indigo-50 to-white text-gray-900 overflow-auto">
      {/* Intro & Bio */}
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
       <h1 className="text-4xl md:text-5xl font-bold">
  Nika Gedenidze — Backend Software Engineer & AI Researcher
</h1>
<p className="text-lg md:text-xl">
  Experienced in building scalable backend systems, cloud deployments, and advancing convolutional neural network models.
</p>
        <a
          href="/NGedenidze.pdf"
          className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition"
        >
          Download Résumé
        </a>
      </motion.div>

      {/* Professional Timeline */}
      <motion.div
        className="mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <VerticalTimeline>
          {experience.map((exp, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={exp.date}
              iconStyle={{ background: 'rgb(38, 138, 199)', color: '#fff' }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-4xl font-semibold text-cyan-800">
                {exp.role}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mb-4 text-2xl italic my-2 text-indigo-600">
                {exp.company}
              </h4>
              <ul className="list-disc list-inside space-y-1 ">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-2xl text-gray-600">{b}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Core Competencies */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-6">Core Competencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={i}>
              <label className="font-medium">{s.name}</label>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
                <div
                  className="bg-cyan-500 h-4 rounded-full"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
