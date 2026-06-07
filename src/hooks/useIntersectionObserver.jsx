// src/hooks/useIntersectionObserver.jsx
import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.unobserve(ref.current); };
  }, []);
  
  return [ref, isVisible];
};