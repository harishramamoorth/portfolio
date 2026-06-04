
import { GraduationCap, Calendar, Award, BookOpen, Sparkles, ChevronRight } from 'lucide-react';

const education = [
  { 
    degree: "Master of Computer Applications (MCA)", 
    institution: "Bishop Heber College, Trichy", 
    period: "2023 - 2025", 
    percent: "70.08%",
    type: "Postgraduate",
    theme: "from-cyan-400 via-blue-500 to-indigo-600",
    borderGlow: "group-hover:from-cyan-400 group-hover:to-blue-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]"
  },
  { 
    degree: "Bachelor of Science in Physics", 
    institution: "St. Joseph's College, Trichy", 
    period: "2020 - 2023", 
    percent: "75.01%",
    type: "Undergraduate",
    theme: "from-emerald-400 via-teal-500 to-cyan-600",
    borderGlow: "group-hover:from-emerald-400 group-hover:to-teal-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
  },
  { 
    degree: "Higher Secondary (12th)", 
    institution: "Little Scholars School, Thanjavur", 
    period: "2019 - 2020", 
    percent: "62.00%",
    type: "Board Examination",
    theme: "from-orange-400 via-amber-500 to-yellow-600",
    borderGlow: "group-hover:from-orange-400 group-hover:to-amber-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)]"
  },
  { 
    degree: "SSLC (10th Standard)", 
    institution: "Don Bosco Boys Matric Hr. Sec. School, Thanjavur", 
    period: "2017 - 2018", 
    percent: "66.20%",
    type: "Board Examination",
    theme: "from-purple-400 via-pink-500 to-rose-600",
    borderGlow: "group-hover:from-purple-400 group-hover:to-pink-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.4)]"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
      
      {/* Deep Space Background Pattern & Orbs */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 dark:bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[8s]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[10s] delay-700"></div>

      <div className="container-custom relative z-10">
        
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            Academic Background
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto"></div>
        </div>
        
        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Main Glowing Vertical Track */}
          <div className="hidden sm:block absolute left-[39px] top-8 bottom-8 w-1.5 bg-gray-200 dark:bg-[#0f1629] rounded-full overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-emerald-400 via-orange-400 to-purple-500 opacity-50 dark:opacity-80"></div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {education.map((edu, idx) => {
              const isHighest = idx === 0;

              return (
                <div key={idx} className="relative pl-0 sm:pl-24 group">
                  
                  {/* Timeline Node / Avatar */}
                  <div className="hidden sm:flex absolute left-0 top-6 w-20 h-20 items-center justify-center z-20">
                    {/* Pulsing ring for highest degree */}
                    {isHighest && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${edu.theme} animate-ping opacity-30`}></div>
                    )}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.theme} p-[2px] shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-125 group-hover:rotate-6`}>
                      <div className="w-full h-full bg-white dark:bg-[#080d1a] rounded-[14px] flex items-center justify-center">
                        {idx <= 1 ? (
                          <GraduationCap size={28} className="text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-400 transition-colors" />
                        ) : (
                          <BookOpen size={28} className="text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-400 transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Glass Card 1px Wrapper (For Glowing Edge Effect) */}
                  <div className={`relative p-[1px] rounded-[2rem] bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 ${edu.borderGlow} ${edu.shadow} ${isHighest ? 'md:translate-x-2' : ''}`}>
                    
                    {/* Inner Glass Card */}
                    <div className="relative h-full p-6 md:p-8 rounded-[2rem] bg-white dark:bg-[#080d1a] overflow-hidden">
                      
                      {/* Diagonal Glass Glare */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-[2rem]"></div>
                      
                      {/* Ambient corner glow */}
                      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${edu.theme} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 rounded-full`}></div>

                      {/* Content Container */}
                      <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center">
                        
                        {/* Text Details */}
                        <div className="flex-1">
                          
                          {/* Top Badges */}
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            {isHighest && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-cyan-500/30">
                                <Sparkles size={12} className="animate-pulse" /> Highest Degree
                              </span>
                            )}
                            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-[#151f38] border border-gray-200 dark:border-white/5 rounded-full text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest shadow-sm">
                              {edu.type}
                            </span>
                          </div>

                          <h3 className={`text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${edu.theme}`}>
                            {edu.degree}
                          </h3>
                          
                          <p className="text-base sm:text-lg font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <ChevronRight size={18} className="text-cyan-500 hidden sm:block" /> {edu.institution}
                          </p>
                        </div>

                        {/* Metric Cards (Year & Marks) */}
                        <div className="flex flex-row lg:flex-col gap-3 shrink-0 mt-4 lg:mt-0">
                          
                          {/* Calendar Metric */}
                          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#0f1629] border border-gray-200 dark:border-white/5 rounded-xl shadow-sm transition-colors group-hover:border-cyan-500/30">
                            <div className="p-2 rounded-lg bg-gray-200/50 dark:bg-black/30">
                              <Calendar size={18} className="text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{edu.period}</span>
                          </div>

                          {/* Marks Metric */}
                          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#0f1629] border border-gray-200 dark:border-white/5 rounded-xl shadow-sm transition-colors group-hover:border-yellow-500/30 relative overflow-hidden">
                            {/* Sweeping shine on marks card */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[25deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            
                            <div className="p-2 rounded-lg bg-gray-200/50 dark:bg-black/30 relative z-10">
                              <Award size={18} className="text-yellow-500" />
                            </div>
                            <div className="relative z-10 flex flex-col">
                              <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Score</span>
                              <span className="text-sm font-bold text-gray-900 dark:text-white">{edu.percent}</span>
                            </div>
                          </div>

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

export default Education;