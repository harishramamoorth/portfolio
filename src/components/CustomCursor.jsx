// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [hoverState, setHoverState] = useState('default'); // 'default', 'link', 'text'
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Track raw mouse/touch position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Ultra-smooth spring physics for the trailing plasma aura
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleTouchMove = (e) => {
            if (e.touches && e.touches[0]) {
                cursorX.set(e.touches[0].clientX);
                cursorY.set(e.touches[0].clientY);
                setIsVisible(true);
            }
        };

        const handleTouchStart = (e) => {
            if (e.touches && e.touches[0]) {
                cursorX.set(e.touches[0].clientX);
                cursorY.set(e.touches[0].clientY);
                setIsVisible(true);
            }
        };

        const handleTouchEnd = () => {
            setIsVisible(false);
        };

        const handleMouseOver = (e) => {
            const target = e.target;

            // Detect if hovering over clickable elements
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setHoverState('link');
            }
            // Detect if hovering over standard paragraphs/headings for a text-select feel
            else if (
                target.tagName.toLowerCase() === 'p' ||
                target.tagName.toLowerCase() === 'h1' ||
                target.tagName.toLowerCase() === 'h2' ||
                target.tagName.toLowerCase() === 'h3'
            ) {
                setHoverState('text');
            }
            else {
                setHoverState('default');
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Core Dot: Adapts completely to Light/Dark mode */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-gray-900 dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: hoverState === 'text' ? "4px" : "8px",
                    height: hoverState === 'text' ? "24px" : "8px",
                    borderRadius: hoverState === 'text' ? "2px" : "50%",
                    scale: hoverState === 'link' ? 0 : (isClicking ? 0.5 : 1),
                    opacity: isVisible ? (hoverState === 'link' ? 0 : 1) : 0
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Trailing Plasma Aura: Changes colors based on theme */}
            <motion.div
                className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999] overflow-hidden backdrop-blur-[2px] bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 border-violet-500/30 dark:from-cyan-400/20 dark:to-blue-600/20 dark:border-cyan-400/30 border"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: hoverState === 'link' ? "80px" : "40px",
                    height: hoverState === 'link' ? "80px" : "40px",
                    scale: isClicking ? 0.8 : 1,
                    backgroundColor: hoverState === 'link'
                        ? "rgba(139, 92, 246, 0.1)"
                        : "rgba(0, 0, 0, 0)",
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Rotating Inner Mesh Pattern */}
                <motion.div
                    className="absolute inset-0 opacity-30 dark:opacity-50"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, currentColor 1px, transparent 1px)`,
                        backgroundSize: '4px 4px',
                        color: hoverState === 'link' ? 'inherit' : 'transparent'
                    }}
                    animate={{ rotate: isClicking ? 90 : (hoverState === 'link' ? 45 : 0) }}
                    transition={{ duration: 0.5 }}
                />

                {/* View Label (Only visible on links) */}
                <motion.span
                    className="absolute text-[10px] font-black tracking-widest text-gray-900 dark:text-white uppercase drop-shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: hoverState === 'link' ? 1 : 0,
                        scale: hoverState === 'link' ? 1 : 0
                    }}
                    transition={{ duration: 0.2, delay: hoverState === 'link' ? 0.1 : 0 }}
                >
                    Explore
                </motion.span>
            </motion.div>
        </>
    );
};

export default CustomCursor;
