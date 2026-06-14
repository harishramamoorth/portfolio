import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    // Detect if the device has hover capability (supports mouse pointer hover)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHover(mediaQuery.matches);

    const handleChange = (e) => {
      setHasHover(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    // Only hide default cursor on screens supporting hover
    <div className={`bg-white dark:bg-[#020617] transition-colors duration-300 min-h-screen ${hasHover ? 'md:cursor-none' : ''}`}>
      
      {/* 3D Physics Trailing Cursor - only rendered on hover-capable devices */}
      {hasHover && <CustomCursor />}

      {/* AnimatePresence allows the Preloader to play its slide-up exit animation */}
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content (Pre-rendered for butter-smooth transition without mounting stutter) */}
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        <Navbar />
        <main>
          <Hero isLoading={isLoading} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </motion.div>
      
    </div>
  );
}

export default App;