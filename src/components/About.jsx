import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, Cloud, Server, Code2, Globe, 
  Target, GraduationCap, MapPin, Layers, Zap, Cpu, Wind, Sparkles
} from 'lucide-react';

const About = () => {
  const [activeStat, setActiveStat] = useState(null);

  const stats = [
    { icon: <GraduationCap size={20} />, label: "Education", value: "MCA Graduate", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { icon: <Code2 size={20} />, label: "Stack", value: "Python & MERN", color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    { icon: <MapPin size={20} />, label: "Location", value: "Thanjavur, IN", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { icon: <Globe size={20} />, label: "Web Ops", value: "AWS & Cloud", color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
  ];

  // Staggered Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      }
    }
  };

  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
      
      {/* Dynamic Ambient Cloud Background & Mesh Grids */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[grid-white_1px] [background-size:30px_30px] pointer-events-none"></div>
      
      {/* Continuous Live Floating Cloud Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-purple-600/15 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      {/* Floating Cloud Particle SVGs in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-15, 15, -15], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-12 opacity-10 dark:opacity-20 text-cyan-400"
        >
          <Cloud size={140} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ x: [20, -20, 20], y: [15, -15, 15], rotate: [0, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-16 opacity-10 dark:opacity-20 text-blue-500"
        >
          <Wind size={180} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-black tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <Sparkles size={14} className="animate-spin text-cyan-400" style={{ animationDuration: '6s' }} />
            Professional Identity
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse" style={{ animationDuration: '4s' }}>Digital Future</span>
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          
          {/* Main Story Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-8 group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-gray-200 via-cyan-500/20 to-transparent dark:from-white/15 dark:via-cyan-500/20 dark:to-transparent transition-all duration-500 shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="relative h-full bg-white dark:bg-[#080d1a] rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-transparent dark:border-white/5 flex flex-col justify-center">
              
              {/* Dynamic Floating Background Quote */}
              <motion.div
                animate={{ rotate: [-12, -6, -12], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 pointer-events-none"
              >
                <Quote className="w-36 h-36 text-cyan-500/10 dark:text-cyan-400/[0.04]" />
              </motion.div>
              
              <div className="relative z-10 space-y-6">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight"
                >
                  Building high-performance <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Full-Stack Ecosystems.</span>
                </motion.h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                  <p>
                    I am <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500/40 decoration-2">Harish R</span>, a MERN Stack Specialist and MCA Graduate. I focus on the entire lifecycle of a product—from writing secure backend logic in <span className="text-gray-900 dark:text-white font-bold">Node.js</span> to crafting responsive interfaces in <span className="text-gray-900 dark:text-white font-bold">React</span>.
                  </p>
                  <p>
                    My goal is to translate complex business challenges into scalable, cloud-native applications that are optimized for speed, security, and a global user base.
                  </p>
                </div>
                
                {/* Tech Pills with Stagger Bounce */}
                <div className="flex flex-wrap gap-2.5 pt-4">
                   {['Full-Stack', 'Cloud-Native', 'Scalable', 'Secure Ops'].map((tag) => (
                     <motion.span 
                       key={tag}
                       whileHover={{ scale: 1.1, y: -2 }}
                       whileTap={{ scale: 0.95 }}
                       className="px-3.5 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-xl text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300 cursor-default shadow-sm"
                     >
                        {tag}
                     </motion.span>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cloud & DevOps Live Animated Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="lg:col-span-4 group relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/30 overflow-hidden"
          >
            <div className="relative h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden">
               
               {/* Multi-layered Live Floating Clouds & Cloud Pulse Effect */}
               <div className="absolute inset-0 pointer-events-none overflow-hidden">
                 {/* Live Pulsing Cloud Aura Circle */}
                 <motion.div 
                   animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-cyan-300/30 blur-2xl"
                 />
                 
                 {/* Primary Floating Animated Cloud */}
                 <motion.div 
                   animate={{ 
                     y: [0, -14, 0],
                     x: [0, 8, 0],
                     rotate: [12, 6, 12],
                     scale: [1, 1.06, 1]
                   }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-8 -right-8 opacity-30 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                 >
                   <Cloud className="w-56 h-56" strokeWidth={1.2} />
                 </motion.div>

                 {/* Secondary Floating Cloud (Drifting horizontally) */}
                 <motion.div 
                   animate={{ 
                     x: [-20, 20, -20],
                     y: [0, -8, 0],
                     opacity: [0.15, 0.35, 0.15]
                   }}
                   transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-12 -right-4 text-cyan-200"
                 >
                   <Cloud className="w-32 h-32" strokeWidth={1} />
                 </motion.div>

                 {/* Live Floating Data Nodes / Cloud Signals */}
                 <motion.div 
                   animate={{ y: [-40, -120], opacity: [0, 1, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                   className="absolute bottom-16 right-20 w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_10px_#fff]"
                 />
                 <motion.div 
                   animate={{ y: [-30, -100], opacity: [0, 1, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
                   className="absolute bottom-10 right-36 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#fff]"
                 />
               </div>

               {/* Top Badge Container */}
               <div className="flex items-center justify-between z-10">
                 <motion.div 
                   whileHover={{ rotate: 180, scale: 1.1 }}
                   transition={{ duration: 0.5 }}
                   className="p-3.5 rounded-2xl bg-white/20 backdrop-blur-md w-fit border border-white/30 shadow-lg cursor-pointer"
                 >
                   <Layers size={26} className="text-white" />
                 </motion.div>
                 
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/20">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
                   </span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-cyan-100">Live Infrastructure</span>
                 </div>
               </div>

               {/* Content */}
               <div className="relative z-10 pt-16">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80 text-cyan-100">AWS & CloudOps</h4>
                 <p className="text-3xl font-black leading-tight mb-3 tracking-tight">Cloud & DevOps</p>
                 <p className="text-sm font-semibold opacity-95 leading-relaxed text-blue-50">
                   Mastering AWS Deployment and hosting pipelines to ensure high-availability for enterprise solutions.
                 </p>
               </div>

            </div>
          </motion.div>

          {/* Mission Card with Live Pulsing Radar Rings */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-6 group relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="relative h-full bg-white dark:bg-[#080d1a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center border border-transparent dark:border-white/5 overflow-hidden">
              
              {/* Subtle Animated Background Ripple */}
              <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-6 relative z-10">
                 
                 {/* Target Icon with Continuous Expanding Ripple Rings */}
                 <div className="relative shrink-0">
                    <motion.div 
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-2xl bg-purple-500/30 blur-sm"
                    />
                    <div className="relative p-4 rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                      <Target size={32} className="animate-pulse text-purple-600 dark:text-purple-400" />
                    </div>
                 </div>

                 <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Zap size={14} className="text-purple-500" /> The Mission
                    </h4>
                    <p className="text-xl md:text-2xl font-black text-gray-900 dark:text-white italic leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300">
                      "To deliver precise, scalable, and secure digital architectures that solve real-world problems through technical innovation."
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Stats Grid */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setActiveStat(idx)}
                onMouseLeave={() => setActiveStat(null)}
                className="group/stat relative p-[1px] rounded-3xl bg-gray-200 dark:bg-white/5 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-blue-500/40 hover:shadow-lg shadow-sm cursor-pointer"
              >
                <div className="h-full bg-white dark:bg-[#080d1a] p-5 rounded-[23px] flex items-center gap-4 border border-transparent dark:border-white/5 relative overflow-hidden">
                  
                  {/* Hover ambient background fill */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300`} />

                  <motion.div 
                    animate={activeStat === idx ? { rotate: [0, -10, 10, 0], scale: 1.15 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`p-3 rounded-2xl ${stat.color} border transition-all shadow-sm shrink-0 relative z-10`}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <div className="relative z-10 min-w-0">
                    <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{stat.label}</h4>
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover/stat:text-cyan-600 dark:group-hover/stat:text-cyan-400 transition-colors">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;