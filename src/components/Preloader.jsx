import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  // Wait 2.0 seconds for the preloader text and line reveal animation before triggering the smooth exit
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const name = "HARISH";

  // Ultra-smooth cinematic container exit animation
  const containerVariants = {
    hidden: { opacity: 1, scale: 1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      scale: 1.06,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  // Avatar reveal & smooth zoom exit
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.0,
        delay: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 1.15,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Text & loading line exit animation
  const textWrapperVariants = {
    hidden: { opacity: 1, y: 0 },
    show: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.35, ease: "easeIn" }
    }
  };

  // Staggered 3D letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  // Subtitle reveal
  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" }
    }
  };

  // Ambient Glow aura fade out on exit
  const glowVariants = {
    hidden: { opacity: 0.12, scale: 1 },
    show: { opacity: 0.22, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] overflow-hidden select-none transform-gpu"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Subtle Pulsing Background Glow */}
      <motion.div
        variants={glowVariants}
        className="absolute w-[320px] h-[320px] bg-cyan-500 rounded-full blur-[120px] pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Center Profile Picture Avatar */}
      <motion.div
        variants={avatarVariants}
        className="relative w-28 h-28 mb-6 rounded-full border-2 border-cyan-400/80 overflow-hidden z-20 shadow-[0_0_30px_rgba(6,182,212,0.5)] transform-gpu"
      >
        <img
          src="/IMG_7255.png"
          alt="Harish"
          className="w-full h-full object-cover object-top"
        />

        {/* Inner Ring Glow Flare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-500/20 pointer-events-none rounded-full" />
      </motion.div>

      {/* Text & Loader Content Block */}
      <motion.div
        variants={textWrapperVariants}
        className="flex flex-col items-center z-10"
      >
        {/* Staggered 3D Name Reveal */}
        <div className="flex space-x-1 sm:space-x-2" style={{ perspective: "1000px" }}>
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle Reveal */}
        <motion.p
          variants={subtitleVariants}
          className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-gray-300 drop-shadow-md"
        >
          <span className="text-cyan-400">MERN Stack</span> Developer
        </motion.p>

        {/* Shimmering Loading Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "220px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className="mt-8 h-[2px] bg-white/10 rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;



