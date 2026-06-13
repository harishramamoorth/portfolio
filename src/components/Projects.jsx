// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, FolderGit2 } from 'lucide-react';
import LiquidGlassCard from './LiquidGlassCard';

const projects = [
  {
    title: "Online Car Accessories Portal",
    company: "Personal Project",
    tech: ["Python", "MySQL", "HTML/CSS", "JS"],
    desc: "Full-featured e‑commerce platform with product management, reviews, secure checkout, and customer support.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "#",
    stars: 4,
    image: "/project/car.png",
  },
  {
    title: "Investor Analysis Platform",
    company: "MRG Engineering",
    tech: ["Python", "MongoDB", "Express", "React"],
    desc: "Real‑time investment tracking, interactive dashboards, and secure user authentication for enterprise clients.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://investor.mrgengg.com/investors",
    stars: 5,
    image: "/project/Investor.png",
  },
  {
    title: "FireSafety E‑commerce",
    company: "Fire Safety Company",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    desc: "Full‑featured e‑commerce platform for fire safety equipment with educational resources and equipment analysis tools.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://fire-safety-rosy.vercel.app/projects",
    stars: 5,
    image: "/project/firesafety.png",
  },
  {
    title: "MRG Logistics Smart Platform",
    company: "MRG Logistics",
    tech: ["React", "Express", "PostgreSQL", "Leaflet"],
    desc: "Real‑time truck tracking, load matching, route optimization, and transparent shipment tracking for logistics.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://logistic-delta-ecru.vercel.app",
    stars: 5,
    image: "/project/logistic.png",
  },
  {
    title: "E‑commerce Bookstore",
    company: "Personal Project",
    tech: ["React", "Vite", "Razorpay", "Tailwind CSS"],
    desc: "Modern e‑commerce platform for authentic literature, featuring multilingual support, secure checkout, and scholarly‑verified publications.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://www.ift-mrg.shop/",
    stars: 5,
    image: "/project/ecommer-bookstore.jpg",
  }
];

const Projects = () => {
  // Container orchestrates the staggered reveal of the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Cards enter with a 3D tilt and spring bounce
  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
    }
  };

  // Tech pills pop in sequentially inside the card
  const techVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#050810] relative overflow-hidden transition-colors duration-300">

      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Real‑world solutions I've built – from e‑commerce to logistics and investment platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto perspective-1000"
        >
          {projects.map((proj, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full transform-style-3d">
              {/* Inherits the 3D mouse tracking from LiquidGlassCard */}
              <LiquidGlassCard
                className="interactive-card h-full flex flex-col p-0 group border border-gray-200/50 dark:border-white/5"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(6, 182, 212, 0.6)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >

                {/* Premium Browser Window Wrapper for Image */}
                <div className="p-3 md:p-4 bg-gray-100/50 dark:bg-[#111827] border-b border-gray-200 dark:border-white/5 rounded-t-[2rem]">
                  <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200/50 dark:border-white/5 bg-gray-200 dark:bg-gray-800">

                    {/* Image with continuous slow pan and hover zoom */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>

                    {/* Animated Shimmer Overlay on Image Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] -translate-x-[150%] skew-x-[25deg] pointer-events-none z-10" />

                    <div className="absolute bottom-3 right-3 z-30 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      {[...Array(proj.stars)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -45 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                        >
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                    {proj.title}
                  </h3>

                  {proj.company && (
                    <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                      <FolderGit2 size={16} /> {proj.company}
                    </p>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-base md:text-lg">
                    {proj.desc}
                  </p>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {proj.tech.map(t => (
                      <motion.span
                        variants={techVariants}
                        key={t}
                        className="px-3 py-1.5 bg-gray-50 dark:bg-[#161f33] border border-gray-200 dark:border-white/5 rounded-lg text-xs font-mono font-semibold text-gray-700 dark:text-gray-300 group-hover:border-cyan-500/30 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-white/10 relative z-20">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-trigger flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold transition-all border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md"
                    >
                      <Github size={18} /> Code
                    </motion.a>

                    {proj.live === "#" ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 dark:bg-[#0f1629] text-gray-400 dark:text-gray-500 font-bold border border-dashed border-gray-300 dark:border-gray-700 cursor-not-allowed"
                      >
                        In Progress
                      </motion.div>
                    ) : (
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px rgba(6, 182, 212, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-trigger flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 relative overflow-hidden group/btn"
                      >
                        {/* Shimmer sweep effect inside button */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[25deg] group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                        <ExternalLink size={18} className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}} />
    </section>
  );
};

export default Projects;