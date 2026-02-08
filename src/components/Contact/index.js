import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Loader from 'react-loaders';

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef();

  useEffect(() => {
    const t1 = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
    const t2 = setTimeout(() => setIsLoading(false), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!window.customElements?.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js';
      script.type = 'module';
      document.body.appendChild(script);
      return () => document.body.removeChild(script);
    }
  }, []);

  const sendEmail = async e => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage('');
    try {
      await emailjs.sendForm('gmail', 'template_YeJhZkgb', formRef.current, 'your-token');
      setStatusMessage('✅ Message sent successfully!');
      formRef.current.reset();
    } catch {
      setStatusMessage('❌ Sending failed. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-700 to-cyan-900">
        <Loader type="ball-grid-pulse" color="#FFF" />
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 text-gray-900 text-base md:text-lg"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center text-cyan-600 mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className={`${letterClass} inline-block`}>Get In Touch</span>
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
          noValidate
        >
          {[
            { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Brief subject' }
          ].map(field => (
            <motion.div key={field.id} variants={fieldVariants}>
              <label htmlFor={field.id} className="block text-base font-medium text-gray-700">
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:ring-cyan-500 focus:border-cyan-500"
                placeholder={field.placeholder}
              />
            </motion.div>
          ))}

          <motion.div variants={fieldVariants}>
            <label htmlFor="message" className="block text-base font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="How can I help you?"
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <button
              type="submit"
              disabled={submitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.div>

          {statusMessage && (
            <motion.p
              className="text-base text-center text-gray-600 mt-2"
              variants={fadeUp}
            >
              {statusMessage}
            </motion.p>
          )}
        </motion.form>

        {/* Info Card & 3D Viewer */}
        <motion.div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg space-y-6 text-base"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.img
            src={require('./../../assets/logo-2.png')}
            alt="Avatar"
            className="w-32 h-32 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          />
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-center">Nika Gedenidze</h3>
            <p className="text-base text-gray-600 text-center">Software Engineer</p>
            <div className="mt-2 text-base text-gray-500 text-center space-y-1">
              <p>Caldwell, NJ 07006</p>
              <p>+1 (717) 775-0711</p>
              <p>ngedenidze@outlook.com</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
