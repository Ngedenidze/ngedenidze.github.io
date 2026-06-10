import { motion } from 'framer-motion'

/**
 * Scroll-triggered entrance. Replaces the old IntersectionObserver `.fade-in`.
 * Respects reduced-motion via Framer Motion's built-in handling.
 */
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.7, ease: [0, 0, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
