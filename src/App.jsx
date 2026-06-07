import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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

  return (
    // 'md:cursor-none' hides the default mouse pointer on desktop screens so CustomCursor takes over
    <div className="bg-white dark:bg-[#020617] transition-colors duration-300 min-h-screen md:cursor-none">
      
      {/* 3D Physics Trailing Cursor */}
      <CustomCursor />

      {/* AnimatePresence allows the Preloader to play its slide-up exit animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {!isLoading && (
        <div className="animate-fade-in">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
      
    </div>
  );
}

export default App;