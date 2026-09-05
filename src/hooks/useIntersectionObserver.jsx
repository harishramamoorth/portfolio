// src/hooks/useIntersectionObserver.jsx
import { useState, useEffect, useRef } from 'react';

/**
 * Reusable Intersection Observer hook to detect when an element enters the viewport.
 * 
 * @param {Object} options - IntersectionObserverInit options (threshold, rootMargin)
 * @param {boolean} triggerOnce - If true, stays true once intersected
 */
export const useIntersectionObserver = (options = { threshold: 0.15, rootMargin: '0px' }, triggerOnce = true) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) {
          observer.unobserve(target);
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [options, triggerOnce]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
