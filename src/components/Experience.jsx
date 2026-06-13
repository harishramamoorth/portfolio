// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "MRG Engineering Company",
    location: "Thanjavur, India",
    period: "Dec 2025 - Present",
    description: "Developed and deployed a full-stack web application using the MERN stack, handling both frontend and backend, and gaining hands-on experience in building end-to-end projects.",
    highlights: ["Full-stack web apps using MERN", "Frontend & backend integration", "Database optimization & security"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "React.js Developer Intern",
    company: "SSS Smart Tech Company",
    location: "Chennai, India",
    period: "Sep 2025 - Mar 2026",
    description: "Working on real-time projects involving the development of web applications using React.js for Service Request Management and Recruitment & Opportunity Tracking Systems.",
    highlights: ["Real-time React.js projects", "Service Request Management", "Recruitment tracking systems"],
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Web Development Intern",
    company: "GAO Tek Inc.",
    location: "Hybrid, India",
    period: "Jun 2025 - Sep 2025",
    description: "Developed and maintained websites using WordPress, including theme customization, plugin integration, and content updates.",
    highlights: ["WordPress development", "Theme & Plugin customization", "Content management"],
    color: "from-orange-400 to-yellow-500",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#050810] relative overflow-hidden">
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">Work Journey</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated Central Timeline Line */}
          <div className="absolute left-[21px] md:left-[27px] top-6 bottom-6 w-1 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               viewport={{ once: true, margin: "-100px" }}
               className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
             />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isActive = idx === 0;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-14 md:pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 md:top-2 flex items-center justify-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${exp.color} p-[2px] shadow-lg z-10 ${isActive ? 'scale-110' : ''}`}>
                      <div className="w-full h-full bg-white dark:bg-[#0f1629] rounded-full flex items-center justify-center">
                        <Briefcase size={20} className={isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500' : 'text-gray-400'} />
                      </div>
                    </div>
                    {isActive && <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} z-0 animate-ping opacity-50`}></div>}
                  </div>

                  {/* Glass Card Container */}
                  <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 dark:from-white/10 dark:to-white/5 transition-transform duration-300 hover:translate-x-2`}>
                    <div className="relative p-6 md:p-8 rounded-[15px] bg-white dark:bg-[#0a0f1c] h-full overflow-hidden shadow-xl">
                      
                      {isActive && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-gradient-to-bl from-cyan-500 to-blue-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-bl-2xl shadow-md flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Current Role
                          </div>
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5 pt-2">
                          <div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1 tracking-tight flex items-center gap-2">
                              {exp.title} {isActive && <Sparkles size={20} className="text-cyan-500 animate-pulse hidden md:block" />}
                            </h3>
                            <p className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>{exp.company}</p>
                          </div>
                          <span className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border ${isActive ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200' : 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-white/10'}`}>
                            <Calendar size={14} /> {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">{exp.description}</p>

                        <div className={`rounded-xl p-5 border ${isActive ? 'bg-cyan-50/50 dark:bg-cyan-900/10 border-cyan-100 dark:border-cyan-900/30' : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5'}`}>
                          <h4 className="text-xs font-black text-gray-900 dark:text-white mb-3 uppercase tracking-widest opacity-80">Key Highlights</h4>
                          <ul className="space-y-3">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
                                <CheckCircle2 size={18} className={`${isActive ? 'text-cyan-500' : 'text-gray-400'} mt-0.5 flex-shrink-0`} />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;