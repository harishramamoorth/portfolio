// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [hoverState, setHoverState] = useState('default'); // 'default', 'hovered'
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 40, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.interactive-card')
            ) {
                setHoverState('hovered');
            } else {
                setHoverState('default');
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10000] mix-blend-difference border-2 border-cyan-500 bg-transparent hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: hoverState === 'hovered' ? 2.5 : 1,
                backgroundColor: hoverState === 'hovered' ? "rgb(6, 182, 212)" : "rgba(6, 182, 212, 0)",
                borderColor: "rgb(6, 182, 212)",
                opacity: isVisible ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
    );
};

export default CustomCursor;
