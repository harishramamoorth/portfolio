// src/components/LiquidGlassCard.jsx
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const LiquidGlassCard = ({ children, className = "", ...props }) => {
  const ref = useRef(null);

  // Mouse tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth return
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D Tilt Transformations
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Mouse Spotlight Template
  const spotlightX = useSpring(useMotionValue(0), springConfig);
  const spotlightY = useSpring(useMotionValue(0), springConfig);
  const background = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(6, 182, 212, 0.15), transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Calculate normalized coordinates (-0.5 to 0.5) for tilt
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);

    // Update spotlight coordinates
    spotlightX.set(clientX);
    spotlightY.set(clientY);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-shadow hover:shadow-cyan-500/20 overflow-hidden ${className}`}
      {...props}
    >
      {/* Moving Spotlight Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background }}
      />

      {/* Content wrapper pushed forward slightly in 3D space */}
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default LiquidGlassCard;