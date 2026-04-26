import React from 'react';
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
    shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" // Persistent shadow for active role
  },
  {
    title: "React.js Developer Intern",
    company: "SSS Smart Tech Company",
    location: "Chennai, India",
    period: "Sep 2025 - Mar 2026",
    description: "Working on real-time projects involving the development of web applications using React.js for Service Request Management and Recruitment & Opportunity Tracking Systems.",
    highlights: ["Real-time React.js projects", "Service Request Management", "Recruitment tracking systems"],
    color: "from-purple-400 to-pink-500",
    shadow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]"
  },
  {
    title: "Web Development Intern",
    company: "GAO Tek Inc.",
    location: "Hybrid, India",
    period: "Jun 2025 - Sep 2025",
    description: "Developed and maintained websites using WordPress, including theme customization, plugin integration, and content updates.",
    highlights: ["WordPress development", "Theme & Plugin customization", "Content management"],
    color: "from-orange-400 to-yellow-500",
    shadow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#050810] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/5 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/5 dark:bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">
            Work Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </div>
        
        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-[21px] md:left-[27px] top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 rounded-full opacity-30 dark:opacity-50"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isActive = idx === 0; // The first item is the "Present" working role

              return (
                <div key={idx} className="relative pl-14 md:pl-20 group cursor-default">
                  
                  {/* Animated Timeline Dot */}
                  <div className="absolute left-0 top-1 md:top-2 flex items-center justify-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${exp.color} p-[2px] shadow-lg z-10 transition-all duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-125 group-hover:rotate-6'}`}>
                      <div className="w-full h-full bg-white dark:bg-[#0f1629] rounded-full flex items-center justify-center transition-colors">
                        <Briefcase size={20} className={`transition-all duration-300 ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500' : 'text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-pink-500'}`} />
                      </div>
                    </div>
                    {/* Ping animation effect - ALWAYS ON for active role, hover for others */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} z-0 ${isActive ? 'animate-ping opacity-50' : 'opacity-0 group-hover:animate-ping group-hover:opacity-30'}`}></div>
                  </div>

                  {/* Experience Card Wrapper (For glowing border effect) */}
                  <div className={`relative rounded-2xl p-[1px] transition-all duration-500 ease-out 
                    ${isActive 
                      ? `bg-gradient-to-br ${exp.color} ${exp.shadow} translate-x-1 md:translate-x-2` // Active styling
                      : `bg-gradient-to-br from-gray-200 to-gray-100 dark:from-white/10 dark:to-white/5 group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:from-purple-400 group-hover:to-pink-500 ${exp.shadow}` // Past styling
                    }
                  `}>
                    
                    {/* Inner Card */}
                    <div className="relative p-6 md:p-8 rounded-[15px] bg-white dark:bg-[#0a0f1c] h-full overflow-hidden">
                      
                      {/* Active "Current Role" Badge */}
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

                      {/* Subtle Corner Glow inside the card */}
                      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${exp.color} blur-3xl transition-opacity duration-500 rounded-full ${isActive ? 'opacity-15' : 'opacity-0 group-hover:opacity-10'}`}></div>

                      <div className="relative z-10">
                        {/* Card Header (Title & Date) */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5 pt-2">
                          <div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1 tracking-tight flex items-center gap-2">
                              {exp.title}
                              {isActive && <Sparkles size={20} className="text-cyan-500 animate-pulse hidden md:block" />}
                            </h3>
                            <p className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                              {exp.company}
                            </p>
                          </div>
                          
                          {/* Date Badge */}
                          <span className={`inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap shadow-sm transition-colors px-4 py-2 rounded-full border 
                            ${isActive 
                              ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50' 
                              : 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-white/10 border-gray-200 dark:border-white/10 group-hover:border-purple-500/30'
                            }
                          `}>
                            <Calendar size={14} className={isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-purple-600 dark:text-purple-400'} /> {exp.period}
                          </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                          <MapPin size={16} className={isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-400'} /> {exp.location}
                        </div>

                        {/* Main Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Highlights / Duties */}
                        <div className={`rounded-xl p-5 border transition-colors duration-500
                          ${isActive 
                            ? 'bg-cyan-50/50 dark:bg-cyan-900/10 border-cyan-100 dark:border-cyan-900/30' 
                            : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5 group-hover:bg-gray-100 dark:group-hover:bg-white/10'
                          }
                        `}>
                          <h4 className="text-xs font-black text-gray-900 dark:text-white mb-3 uppercase tracking-widest opacity-80">Key Highlights</h4>
                          <ul className="space-y-3">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
                                <CheckCircle2 size={18} className={`${isActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-purple-500'} mt-0.5 flex-shrink-0 transition-colors`} />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;