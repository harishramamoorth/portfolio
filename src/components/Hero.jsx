// src/components/Hero.jsx
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Download, MapPin, Phone, Briefcase, VolumeX, Volume2 } from 'lucide-react';

const Hero = ({ isLoading }) => {
  // Parallax tracking for background orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMoveOrbs = (e) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveOrbs);
    return () => window.removeEventListener("mousemove", handleMouseMoveOrbs);
  }, []);

  // Subtle reverse movement for background orbs
  const bgX1 = useTransform(mouseX, [-500, 500], [20, -20]);
  const bgY1 = useTransform(mouseY, [-500, 500], [20, -20]);
  const bgX2 = useTransform(mouseX, [-500, 500], [-30, 30]);
  const bgY2 = useTransform(mouseY, [-500, 500], [-30, 30]);

  // Mouse tracking values for the 3D tilt effect on portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement with a spring
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position to rotation angles (max tilt is 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMovePortrait = (e) => {
    // If hovering the sound overlay button, reset tilt to flat
    // to guarantee click events fire successfully without browser cancellation.
    const isButton = e.target.closest('button');
    if (isButton) {
      x.set(0);
      y.set(0);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the center of the container (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    const xPct = mX / width - 0.5;
    const yPct = mY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeavePortrait = () => {
    // Reset to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  // Video Audio controls
  const [isMuted, setIsMuted] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isLoading && videoRef.current) {
      setIsMuted(false);
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay unmuted blocked, falling back to muted:", err);
        setIsMuted(true);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.log("Muted autoplay blocked:", e));
        }
      });
    }
  }, [isLoading]);

  const handleVideoEnded = () => {
    setPlayCount(prev => {
      const nextCount = prev + 1;
      if (nextCount >= 2) {
        setIsMuted(true);
        if (videoRef.current) {
          videoRef.current.muted = true;
        }
      }
      if (videoRef.current) {
        videoRef.current.play().catch(err => console.log("Loop play error:", err));
      }
      return nextCount;
    });
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(prev => {
      const nextMute = !prev;
      if (videoRef.current) {
        videoRef.current.muted = nextMute;
        if (!nextMute) {
          videoRef.current.play().catch(err => console.log("Play error on unmute:", err));
        }
      }
      return nextMute;
    });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Staggered Text Variants
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-[#070b14] overflow-hidden pt-20 pb-12 lg:py-0 transition-colors duration-300">

      {/* Dynamic Parallax Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div style={{ x: bgX1, y: bgY1 }} className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-900/20 blur-[120px] rounded-full" />
        <motion.div style={{ x: bgX2, y: bgY2 }} className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 dark:bg-purple-900/20 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & Content */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left order-2 lg:order-1 relative z-10"
          >
            <motion.div variants={textItem} className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wide mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Full-Time Roles
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1] mb-6 text-gray-900 dark:text-white tracking-tighter" style={{ perspective: "1000px" }}>
              <motion.div variants={textItem}>Hi, I'm</motion.div>
              <motion.div variants={textItem} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-500">
                Harish.R
              </motion.div>
            </h1>

            <motion.div variants={textItem} className="flex items-center flex-wrap gap-3 text-xl md:text-2xl mb-6 font-bold tracking-tight">
              <span className="text-gray-800 dark:text-gray-200">MERN Stack Developer</span>
              <span className="text-gray-400 dark:text-gray-600 hidden sm:inline">|</span>
              <span className="text-cyan-600 dark:text-cyan-400">MCA Graduate</span>
            </motion.div>

            <motion.p variants={textItem} className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
              Architecting high-performance digital solutions with a focus on scalable web applications, clean code, and exceptional user experiences using Python and modern Javascript frameworks.
            </motion.p>

            <motion.div variants={textItem} className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" onClick={scrollToProjects} className="group flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold transition-all shadow-xl shadow-cyan-500/20">
                View Projects <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/Harish_Resume.pdf" download className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#1e2436] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl font-bold transition-all shadow-sm">
                Resume <Download size={20} />
              </motion.a>
            </motion.div>

            <motion.div variants={textItem} className="flex flex-col sm:flex-row sm:items-center gap-8 w-full pt-8 border-t border-gray-200 dark:border-white/5">
              <div className="flex items-center gap-4">
                <a href="https://github.com/harishramamoorth?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-cyan-500 rounded-xl transition-all hover:-translate-y-1"><Github size={22} /></a>
                <a href="https://www.linkedin.com/in/harishramamoorthy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-500 rounded-xl transition-all hover:-translate-y-1"><Linkedin size={22} /></a>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold tracking-wide">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><MapPin size={18} className="text-cyan-500" /> Trichy, IN</span>
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><Phone size={18} className="text-cyan-500" /> +91 9344508260</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 2.5D Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center relative perspective-[1000px] order-1 lg:order-2 w-full mb-8 lg:mb-0"
          >
            {/* Ambient Glow Backing */}
            <div className="absolute w-80 h-80 sm:w-[32rem] sm:h-[32rem] bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-[90px] opacity-20 dark:opacity-30 animate-pulse pointer-events-none" />

            {/* 3D Tilt Container */}
            <motion.div
              onMouseMove={handleMouseMovePortrait}
              onMouseLeave={handleMouseLeavePortrait}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="interactive-card relative w-96 h-96 sm:w-[32rem] sm:h-[32rem] lg:w-[36rem] lg:h-[36rem] cursor-crosshair z-10 flex items-center justify-center rounded-[2rem]"
            >
              {/* The Video with a continuous floating breathing effect */}
              <motion.video
                ref={videoRef}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                autoPlay
                muted={isMuted}
                playsInline
                preload="auto"
                onEnded={handleVideoEnded}
                src="/this_goog_remove_the_typing_so-Picsart-BackgroundRemover.webm"
                style={{
                  transform: "translateZ(50px) scale(1.35)",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }}
                className="drop-shadow-[0_20px_20px_rgba(6,182,212,0.4)]"
              />

              {/* Sound overlay controls */}
              <motion.button
                onClick={handleToggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 z-30 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-full border border-white/20 shadow-lg cursor-pointer"
                style={{ transform: "translateZ(60px)" }}
              >
                {isMuted ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold px-1">
                    <VolumeX size={16} className="text-red-400" />
                    <span>Click to unmute</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-bold px-1">
                    <Volume2 size={16} className="text-cyan-400 animate-bounce" />
                    <span>Audio playing</span>
                  </div>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;