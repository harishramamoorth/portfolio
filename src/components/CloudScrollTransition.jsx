// src/components/CloudScrollTransition.jsx
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

/**
 * CloudScrollTransition component
 * Creates a ultra-smooth, slow, cinematic 3-layer cloud scroll transition overlay
 * that gracefully covers and opens across the website on section scrolling.
 */
const CloudScrollTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(0);
  const isAnimating = useRef(false);
  const scrollTimeout = useRef(null);

  // Motion controls for each layer
  const topCloudControls = useAnimation();
  const bottomCloudControls = useAnimation();
  const sideCloudControls = useAnimation();
  const centerGlowControls = useAnimation();

  // Ultra-luxurious, slow, dreamlike easing curve
  const slowEase = [0.12, 1, 0.2, 1];

  const triggerCloudTransition = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);

    const isDown = direction === 'down';

    // Phase 1: Majestic slow cloud curtain closure toward center (0.9 seconds)
    topCloudControls.start({
      y: '0%',
      x: isDown ? '-3%' : '3%',
      rotate: isDown ? -1.5 : 1.5,
      opacity: 1,
      transition: { duration: 0.9, ease: slowEase }
    });

    bottomCloudControls.start({
      y: '0%',
      x: isDown ? '3%' : '-3%',
      rotate: isDown ? 1.5 : -1.5,
      opacity: 1,
      transition: { duration: 0.9, ease: slowEase }
    });

    sideCloudControls.start({
      scale: 1.18,
      opacity: 0.75,
      x: isDown ? '5%' : '-5%',
      transition: { duration: 1.0, ease: slowEase }
    });

    centerGlowControls.start({
      scale: [0.3, 1.8, 0],
      opacity: [0, 0.9, 0],
      transition: { duration: 1.5, ease: "easeInOut" }
    });

    // Phase 2: Gentle hold & slow cinematic cloud separation reveal (1.3 seconds)
    setTimeout(() => {
      topCloudControls.start({
        y: '-125%',
        x: isDown ? '-8%' : '8%',
        rotate: 0,
        opacity: 0,
        transition: { duration: 1.3, ease: slowEase }
      });

      bottomCloudControls.start({
        y: '125%',
        x: isDown ? '8%' : '-8%',
        rotate: 0,
        opacity: 0,
        transition: { duration: 1.3, ease: slowEase }
      });

      sideCloudControls.start({
        scale: 1.35,
        opacity: 0,
        x: '0%',
        transition: { duration: 1.4, ease: slowEase }
      });

      setTimeout(() => {
        isAnimating.current = false;
        setIsTransitioning(false);
      }, 1350);
    }, 600);
  };

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // Trigger transition on meaningful scroll movement
      if (Math.abs(delta) > 90 && !isAnimating.current) {
        const direction = delta > 0 ? 'down' : 'up';
        setScrollDir(direction);
        triggerCloudTransition(direction);
        lastScrollY.current = currentScrollY;
      } else {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          lastScrollY.current = window.scrollY;
        }, 150);
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none transition-opacity duration-500 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Central Pulsing Radiant Light Glow */}
      <motion.div
        animate={centerGlowControls}
        initial={{ opacity: 0, scale: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-cyan-400/50 via-blue-500/40 to-purple-600/40 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Layer 3: Atmospheric Background Cloud Frame (Only visible during scroll transition) */}
      <motion.img
        src="/Scroll effect/cloud_bg_clean.png"
        alt="Atmospheric Cloud Frame"
        animate={sideCloudControls}
        initial={{ opacity: 0, scale: 1.05 }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter dark:brightness-[0.6] dark:contrast-125 dark:hue-rotate-[185deg]"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Layer 1: Top Paper-Cut Clouds (True Transparent Cutout) */}
      <motion.div
        animate={topCloudControls}
        initial={{ y: '-120%', opacity: 0 }}
        className="absolute top-0 left-0 right-0 w-full h-[65vh] pointer-events-none flex justify-center items-start"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/Scroll effect/cloud_top_clean.png"
          alt="Top Transparent Clouds"
          className="w-full h-full object-cover object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)] dark:brightness-[0.55] dark:contrast-125 dark:hue-rotate-[185deg]"
        />
      </motion.div>

      {/* Layer 2: Bottom Paper-Cut Clouds (True Transparent Cutout) */}
      <motion.div
        animate={bottomCloudControls}
        initial={{ y: '120%', opacity: 0 }}
        className="absolute bottom-0 left-0 right-0 w-full h-[65vh] pointer-events-none flex justify-center items-end"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/Scroll effect/cloud_bottom_clean.png"
          alt="Bottom Transparent Clouds"
          className="w-full h-full object-cover object-top filter drop-shadow-[0_-20px_35px_rgba(0,0,0,0.2)] dark:brightness-[0.55] dark:contrast-125 dark:hue-rotate-[185deg]"
        />
      </motion.div>
    </div>
  );
};

export default CloudScrollTransition;

