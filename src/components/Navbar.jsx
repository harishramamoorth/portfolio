// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Framer Motion hook for reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Credentials', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Circular reveal animation for mobile menu
  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
      transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: {
      clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed left-0 right-0 z-[100] transition-all duration-500 ease-out flex justify-center ${scrolled ? 'top-4 px-4' : 'top-0 px-0'
          }`}
      >
        {/* The Floating Dock */}
        <div className={`relative flex items-center justify-between w-full max-w-6xl transition-all duration-500 bg-white/70 dark:bg-[#020617]/70 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl ${scrolled ? 'rounded-[2rem] py-2 px-4 sm:px-6' : 'rounded-none py-4 px-5 sm:px-8 border-t-0 border-x-0'
          }`}>

          {/* Animated Reading Progress Bar (Attached to bottom of dock) */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
            style={{ width: "100%", scaleX, transformOrigin: "0%" }}
          />

          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="relative z-10 text-xl md:text-2xl font-black tracking-tighter text-gray-900 dark:text-white group flex-shrink-0"
          >
            <span className="inline-block transition-transform group-hover:-translate-y-0.5">Harish</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-purple-400 group-hover:to-pink-500 transition-colors duration-500">.R</span>
          </a>

          {/* Desktop Navigation - Gliding Pill Style */}
          <div className="hidden lg:flex items-center gap-1 relative z-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-[13px] font-bold transition-colors duration-300 ${activeSection === link.id
                    ? 'text-cyan-700 dark:text-cyan-300'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {/* Framer Motion Gliding Active Indicator */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-cyan-50 dark:bg-cyan-500/10 rounded-full border border-cyan-100 dark:border-cyan-500/20 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-3 flex-shrink-0 relative z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 transition-colors duration-300 overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg z-[110]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "open" : "closed"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu (Circular Clip-Path Reveal) */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed inset-0 z-[90] lg:hidden bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl"
      >
        <div className="h-full flex flex-col justify-center px-8 pt-20 pb-12 overflow-y-auto">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-8 border-b border-gray-200 dark:border-white/10 pb-4"
          >
            Navigation
          </motion.h4>

          <div className="flex flex-col gap-4 flex-grow justify-center">
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`group flex items-center justify-between p-4 rounded-2xl text-2xl md:text-3xl font-black transition-all ${activeSection === link.id
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-500/20 shadow-inner'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {link.name}
                <ChevronRight size={24} className={`transition-all duration-300 ${activeSection === link.id ? 'text-cyan-500 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-between"
          >
            <span className="text-sm font-bold text-gray-400">Harish.R</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;