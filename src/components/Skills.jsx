// src/components/Skills.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Cpu, Terminal, Code, HardDrive, Layout } from 'lucide-react';

const skills = [
  { name: "MongoDB", fullName: "MongoDB / SQL", level: 90, icon: <Database size={28} className="text-emerald-500" />, color: "from-emerald-400 to-teal-500", desc: "NoSQL & SQL databases" },
  { name: "Express", fullName: "Node.js / Express", level: 80, icon: <Server size={28} className="text-[#a8b2d1] dark:text-gray-300" />, color: "from-green-400 to-emerald-500", desc: "API framework" },
  { name: "React", fullName: "React.js / Next.js", level: 85, icon: <Cpu size={28} className="text-cyan-400" />, color: "from-cyan-400 to-blue-500", desc: "Frontend interfaces" },
  { name: "Node", fullName: "Node.js / Express", level: 80, icon: <Terminal size={28} className="text-green-500" />, color: "from-green-400 to-emerald-500", desc: "Javascript runtime" },
  { name: "Python", fullName: "Python / Django", level: 75, icon: <Code size={28} className="text-yellow-400" />, color: "from-yellow-400 to-orange-500", desc: "Backend & scripting" },
  { name: "MySQL", fullName: "MySQL / Database", level: 80, icon: <HardDrive size={28} className="text-blue-400" />, color: "from-blue-400 to-indigo-500", desc: "Relational data" },
  { name: "HTML/CSS", fullName: "HTML/CSS / Tailwind", level: 100, icon: <Layout size={28} className="text-pink-400" />, color: "from-pink-400 to-rose-500", desc: "Responsive styling" }
];

const Skills = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#050810] relative overflow-hidden transition-colors duration-300">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container-custom relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.6)",
                  boxShadow: "0px 15px 30px rgba(6, 182, 212, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="interactive-card group relative p-6 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 backdrop-blur-md shadow-lg cursor-pointer flex flex-col justify-center h-44 overflow-hidden"
              >
                {/* Subtle ambient glow behind the card on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl bg-gradient-to-r ${skill.color} pointer-events-none`}></div>

                <AnimatePresence mode="wait">
                  {!isHovered ? (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col items-center text-center justify-center h-full w-full z-10"
                    >
                      {/* Animated Icon Container */}
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" }}
                        className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/40 mb-3 border border-gray-200/50 dark:border-white/5 shadow-inner"
                      >
                        {skill.icon}
                      </motion.div>

                      <h3 className="font-bold text-lg text-gray-800 dark:text-white tracking-tight">
                        {skill.name}
                      </h3>

                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                        {skill.desc}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hovered"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col justify-between h-full z-10 w-full text-left"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-black text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                            Expertise
                          </h4>
                          <span className="text-2xl font-black text-gray-900 dark:text-white">
                            {skill.level}%
                          </span>
                        </div>
                        <h3 className="font-bold text-base text-gray-800 dark:text-white leading-tight">
                          {skill.fullName}
                        </h3>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full mt-4">
                        <div className="w-full bg-gray-100 dark:bg-[#0f1629] rounded-full h-3 border border-gray-200 dark:border-white/5 overflow-hidden shadow-inner relative">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;