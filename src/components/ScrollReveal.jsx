// src/components/ScrollReveal.jsx
import { motion } from 'framer-motion';

/**
 * Reusable ScrollReveal component for clean, customizable scroll-triggered animations.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be animated
 * @param {'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale' | 'blur' | 'cloud-float'} [props.variant='fade-up'] - Animation preset
 * @param {number} [props.delay=0] - Animation delay in seconds
 * @param {number} [props.duration=0.7] - Animation duration in seconds
 * @param {boolean} [props.once=true] - Whether animation triggers only once when entering viewport
 * @param {number} [props.staggerChildren=0] - Stagger delay for child motion elements
 * @param {string} [props.className=""] - Additional CSS classes
 * @param {Object} [props.hoverEffect] - Optional hover motion properties (e.g. { scale: 1.03, y: -5 })
 */
const variantsMap = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  'scale': {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 }
  },
  'blur': {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 25 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
  },
  'cloud-float': {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }
};

export const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  once = true,
  staggerChildren = 0,
  className = '',
  hoverEffect = null,
  ...props
}) => {
  const selectedVariant = variantsMap[variant] || variantsMap['fade-up'];

  const containerVariants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // Smooth cubic-bezier spring feel
        ...(staggerChildren > 0 && {
          staggerChildren,
          delayChildren: delay,
        })
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={containerVariants}
      whileHover={hoverEffect || undefined}
      transition={hoverEffect ? { type: "spring", stiffness: 300, damping: 20 } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Reusable ScrollItem component to wrap child elements inside a ScrollReveal container.
 */
export const ScrollItem = ({
  children,
  variant = 'fade-up',
  className = '',
  hoverEffect = null,
  ...props
}) => {
  const itemVariants = variantsMap[variant] || variantsMap['fade-up'];

  return (
    <motion.div
      variants={itemVariants}
      transition={{ type: "spring", stiffness: 100, damping: 16 }}
      whileHover={hoverEffect || undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
