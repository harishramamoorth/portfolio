// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Zap } from 'lucide-react';

const skills = [
  { name: "React.js / Next.js", level: 85, icon: <Zap size={22} />, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js / Express", level: 80, icon: <Server size={22} />, color: "from-green-400 to-emerald-500" },
  { name: "Python / Django", level: 75, icon: <Code size={22} />, color: "from-yellow-400 to-orange-500" },
  { name: "MongoDB / SQL", level: 90, icon: <Database size={22} />, color: "from-emerald-400 to-teal-500" },
  { name: "HTML/CSS / Tailwind", level: 100, icon: <Layout size={22} />, color: "from-pink-400 to-rose-500" },
];

const Skills = () => {
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 60 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 backdrop-blur-md shadow-lg transition-all duration-300 cursor-default"
            >
              
              {/* Subtle ambient glow behind the card on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-gradient-to-r ${skill.color} pointer-events-none`}></div>
 
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    {/* Icon Container with infinite floating animation */}
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md`}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-500 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Percentage Number */}
                  <span className="text-2xl font-black text-gray-800 dark:text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.level}%
                  </span>
                </div>
 
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-100 dark:bg-[#0f1629] rounded-full h-3.5 border border-gray-200 dark:border-white/5 overflow-hidden shadow-inner relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative shadow-[0_0_10px_rgba(255,255,255,0.3)]`} 
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full blur-[2px] opacity-60"></div>
                  </motion.div>
                </div>
              </div>
 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Skills;