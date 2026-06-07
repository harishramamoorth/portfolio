import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  // Wait exactly 2.5 seconds before signaling the app to show the main content
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const name = "HARISH";

  // Controls the whole screen sliding up when it exits
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  // Gives the letters a 3D flip and slide-up effect
  const letter = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Subtitle animation variant matching parent lifecycle
  const subtitle = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.0, ease: "easeOut" }
    }
  };


  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Subtle Pulsing Background Glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Staggered 3D Text Reveal */}
      <div className="flex space-x-1 sm:space-x-2 z-10" style={{ perspective: "1000px" }}>
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* New: Subtitle Reveal */}
      <motion.p
        variants={subtitle}
        className="mt-4 z-10 text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-gray-300 drop-shadow-md"
      >
        <span className="text-cyan-400">MERN Stack</span> Developer
      </motion.p>

      {/* Shimmering Loading Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
        className="mt-8 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
