// src/hooks/useScrollAnimation.js
import { useState, useEffect } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Custom reusable hook for tracking page scroll progress and active section state.
 * Returns smoothed scroll progress (0 to 1), scroll direction, and active section ID.
 */
export const useScrollAnimation = (sectionIds = []) => {
  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const [scrollDirection, setScrollDirection] = useState('down');
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = currentScrollY;

      // Detect active section based on offset top
      if (sectionIds.length > 0) {
        const scrollPosition = currentScrollY + 200;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [sectionIds]);

  return {
    scrollYProgress,
    smoothProgress,
    scrollY,
    scrollDirection,
    activeSection,
  };
};

export default useScrollAnimation;
