// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "MRG Engineering Company",
    location: "Deira, Dubai, UAE",
    period: "August 2025 – August 2026",
    description: "Developed and deployed full-stack web applications using React.js, Node.js, Express.js, MongoDB, and AWS EC2, implementing responsive dashboards, secure authentication, REST APIs, database workflows, and production deployments.",
    highlights: ["Full-stack web apps using MERN & AWS EC2", "Responsive dashboards, REST APIs & database workflows", "Secure authentication & production deployments"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "React.js Developer Intern",
    company: "SSS Smart Tech",
    location: "Chennai, India",
    period: "May 2025 – Jul 2025",
    description: "Developed frontend web applications using React.js for two major projects: a Service Request Management tool and a Recruitment & Opportunity Tracking System. Built responsive user interfaces and implemented real-time features for seamless user experiences.",
    highlights: ["Service Request Management tool", "Recruitment & Opportunity Tracking System", "Responsive user interfaces & real-time features"],
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Web Development Intern",
    company: "GAO Tek Inc.",
    location: "Hybrid, India",
    period: "Jan 2025 – Mar 2025",
    description: "Developed and maintained websites using WordPress, including theme customization, plugin integration, and content updates.",
    highlights: ["WordPress development", "Theme & Plugin customization", "Content management"],
    color: "from-orange-400 to-yellow-500",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6">Work Journey</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">

          {/* Animated Central Timeline Line */}
          <div className="absolute left-[18px] sm:left-[21px] md:left-[27px] top-6 bottom-6 w-1 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isActive = idx === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-12 sm:pl-16 md:pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 md:top-2 flex items-center justify-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${exp.color} p-[2px] shadow-lg z-10 ${isActive ? 'scale-105 sm:scale-110' : ''}`}>
                      <div className="w-full h-full bg-white dark:bg-[#0f1629] rounded-full flex items-center justify-center">
                        <Briefcase size={18} className={isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500' : 'text-gray-400'} />
                      </div>
                    </div>
                    {isActive && <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} z-0 animate-ping opacity-50`}></div>}
                  </div>

                  {/* Glass Card Container */}
                  <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 dark:from-white/10 dark:to-white/5 transition-transform duration-300 hover:translate-y-[-2px]`}>
                    <div className="relative p-4 sm:p-6 md:p-8 rounded-[15px] bg-white dark:bg-[#0a0f1c] h-full overflow-hidden shadow-xl">

                      {isActive && (
                        <div className="mb-3 sm:mb-0 sm:absolute sm:top-0 sm:right-0">
                          <div className="inline-flex sm:flex bg-gradient-to-r sm:bg-gradient-to-bl from-cyan-500 to-blue-600 text-white text-[10px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest py-1 px-3 sm:py-1.5 sm:px-4 rounded-full sm:rounded-none sm:rounded-bl-2xl shadow-md items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Current Role
                          </div>
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 sm:gap-4 mb-4 sm:mb-5 pt-1 sm:pt-2">
                          <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1 tracking-tight flex items-center gap-2 break-words">
                              {exp.title} {isActive && <Sparkles size={18} className="text-cyan-500 animate-pulse hidden md:block shrink-0" />}
                            </h3>
                            <p className={`text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color} break-words`}>{exp.company}</p>
                          </div>
                          <span className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border shrink-0 w-fit ${isActive ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200' : 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-white/10'}`}>
                            <Calendar size={14} /> {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{exp.description}</p>

                        <div className={`rounded-xl p-3.5 sm:p-5 border ${isActive ? 'bg-cyan-50/50 dark:bg-cyan-900/10 border-cyan-100 dark:border-cyan-900/30' : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5'}`}>
                          <h4 className="text-[10px] sm:text-xs font-black text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-widest opacity-80">Key Highlights</h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base">
                                <CheckCircle2 size={16} className={`${isActive ? 'text-cyan-500' : 'text-gray-400'} mt-0.5 flex-shrink-0`} />
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