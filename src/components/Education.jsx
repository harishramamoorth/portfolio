
import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Eye,
  Download,
  ExternalLink,
  X,
  FileCheck
} from 'lucide-react';

const education = [
  { 
    degree: "Master of Computer Applications (MCA)", 
    institution: "Bishop Heber College, Trichy", 
    period: "2023 - 2025", 
    percent: "70.08%",
    type: "Postgraduate",
    theme: "from-cyan-400 via-blue-500 to-indigo-600",
    borderGlow: "group-hover:from-cyan-400 group-hover:to-blue-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]",
    attestation: {
      isAttested: true,
      title: "Officially Attested Degree",
      subtitle: "Attested by Ministry of External Affairs (India) & Ministry of Foreign Affairs (UAE)",
      fileUrl: "/Scroll%20effect/MCA-MOFA.pdf",
      fileName: "MCA-MOFA-Attested-Degree.pdf",
      stamps: [
        { name: "MEA (India)", flag: "🇮🇳", authority: "Ministry of External Affairs, India" },
        { name: "MOFA (UAE)", flag: "🇦🇪", authority: "Ministry of Foreign Affairs, UAE" }
      ]
    }
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
  const [activeModalDoc, setActiveModalDoc] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalDoc(null);
      }
    };
    if (activeModalDoc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalDoc]);

  return (
    <section id="education" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      
      {/* Deep Space Background Pattern & Orbs */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 dark:bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[8s]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[10s] delay-700"></div>

      <div className="container-custom relative z-10">
        
        {/* Premium Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-up">
          <div className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 sm:mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Education</span>
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto"></div>
        </div>
        
        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Main Glowing Vertical Track */}
          <div className="hidden sm:block absolute left-[39px] top-8 bottom-8 w-1.5 bg-gray-200 dark:bg-[#0f1629] rounded-full overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-emerald-400 via-orange-400 to-purple-500 opacity-50 dark:opacity-80"></div>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
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
                  <div className={`relative p-[1px] rounded-2xl sm:rounded-[2rem] bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 ${edu.borderGlow} ${edu.shadow} ${isHighest ? 'md:translate-x-2' : ''}`}>
                    
                    {/* Inner Glass Card */}
                    <div className="relative h-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] bg-white dark:bg-[#080d1a] overflow-hidden">
                      
                      {/* Diagonal Glass Glare */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl sm:rounded-[2rem]"></div>
                      
                      {/* Ambient corner glow */}
                      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${edu.theme} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 rounded-full`}></div>

                      {/* Content Container */}
                      <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
                        
                        {/* Header & Metrics row */}
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:justify-between lg:items-start">
                          
                          {/* Text Details */}
                          <div className="flex-1 min-w-0">
                            
                            {/* Top Badges */}
                            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                              {isHighest && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-cyan-500/30">
                                  <Sparkles size={12} className="animate-pulse" /> Highest Degree
                                </span>
                              )}
                              <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-[#151f38] border border-gray-200 dark:border-white/5 rounded-full text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest shadow-sm">
                                {edu.type}
                              </span>
                            </div>

                            <h3 className={`text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight break-words transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${edu.theme}`}>
                              {edu.degree}
                            </h3>
                            
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-600 dark:text-gray-400 flex items-center gap-1.5 sm:gap-2 break-words">
                              <ChevronRight size={18} className="text-cyan-500 hidden sm:block shrink-0" /> 
                              <span>{edu.institution}</span>
                            </p>
                          </div>

                          {/* Metric Cards (Year & Marks) */}
                          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
                            
                            {/* Calendar Metric */}
                            <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 dark:bg-[#0f1629] border border-gray-200 dark:border-white/5 rounded-xl shadow-sm transition-colors group-hover:border-cyan-500/30">
                              <div className="p-1.5 sm:p-2 rounded-lg bg-gray-200/50 dark:bg-black/30 shrink-0">
                                <Calendar size={16} className="text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200">{edu.period}</span>
                            </div>

                            {/* Marks Metric */}
                            <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 dark:bg-[#0f1629] border border-gray-200 dark:border-white/5 rounded-xl shadow-sm transition-colors group-hover:border-yellow-500/30 relative overflow-hidden">
                              {/* Sweeping shine on marks card */}
                              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[25deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                              
                              <div className="p-1.5 sm:p-2 rounded-lg bg-gray-200/50 dark:bg-black/30 relative z-10 shrink-0">
                                <Award size={16} className="text-yellow-500" />
                              </div>
                              <div className="relative z-10 flex flex-col min-w-0">
                                <span className="text-[9px] sm:text-[10px] font-black text-gray-500 uppercase tracking-wider">Score</span>
                                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">{edu.percent}</span>
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Special Attestation Section for MCA Degree */}
                        {edu.attestation?.isAttested && (
                          <div className="mt-1 pt-4 border-t border-gray-100 dark:border-white/10">
                            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 dark:from-emerald-500/10 dark:via-cyan-500/10 dark:to-blue-500/10 border border-emerald-500/20 dark:border-emerald-500/30 backdrop-blur-sm">
                              
                              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
                                
                                {/* Attestation Info & Badges */}
                                <div className="space-y-2 min-w-0">
                                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] sm:text-xs font-black uppercase tracking-wider border border-emerald-500/30">
                                      <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                                      <span>{edu.attestation.title}</span>
                                    </span>

                                    {/* Country Stamp Badges */}
                                    {edu.attestation.stamps.map((stamp, sIdx) => (
                                      <span 
                                        key={sIdx}
                                        title={stamp.authority}
                                        className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/80 dark:bg-black/40 text-gray-800 dark:text-gray-200 text-[10px] sm:text-xs font-bold border border-gray-200 dark:border-white/10 shadow-sm"
                                      >
                                        <span>{stamp.flag}</span>
                                        <span>{stamp.name}</span>
                                      </span>
                                    ))}
                                  </div>

                                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 flex items-start sm:items-center gap-1.5 leading-snug">
                                    <FileCheck size={15} className="text-cyan-500 shrink-0 mt-0.5 sm:mt-0" />
                                    <span>Verified by <strong>Ministry of External Affairs (India)</strong> & <strong>Ministry of Foreign Affairs (UAE)</strong></span>
                                  </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-2.5 shrink-0 pt-1 lg:pt-0 w-full sm:w-auto">
                                  {/* View Button */}
                                  <button
                                    onClick={() => setActiveModalDoc(edu.attestation)}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
                                  >
                                    <Eye size={16} />
                                    <span>View Document</span>
                                  </button>

                                  {/* Download Button */}
                                  <a
                                    href={edu.attestation.fileUrl}
                                    download={edu.attestation.fileName}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-gray-100 dark:hover:bg-white/20 text-gray-800 dark:text-white border border-gray-200 dark:border-white/15 text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
                                  >
                                    <Download size={16} />
                                    <span>Download</span>
                                  </a>
                                </div>

                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PDF View Modal Overlay */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
          
          {/* Backdrop Blur Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setActiveModalDoc(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-[#0b1329] border border-gray-200 dark:border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-scale-up">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-[#0f1833] border-b border-gray-200 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white truncate">
                    MCA Degree Attestation Document
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Verified</span>
                    <span>•</span>
                    <span>🇮🇳 MEA (India) & 🇦🇪 MOFA (UAE)</span>
                  </div>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeModalDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-800 dark:text-white text-xs font-bold transition-colors"
                  title="Open in new window"
                >
                  <ExternalLink size={14} />
                  <span>Open Tab</span>
                </a>

                <a
                  href={activeModalDoc.fileUrl}
                  download={activeModalDoc.fileName}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md transition-all hover:scale-105"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  onClick={() => setActiveModalDoc(null)}
                  className="p-2 rounded-xl bg-gray-200 dark:bg-white/10 hover:bg-rose-500 hover:text-white text-gray-700 dark:text-gray-300 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: PDF Viewer Iframe */}
            <div className="flex-1 bg-gray-100 dark:bg-[#070b18] relative">
              <iframe
                src={`${activeModalDoc.fileUrl}#toolbar=1`}
                className="w-full h-full border-none"
                title="Attested Degree PDF Document"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-gray-50 dark:bg-[#0f1833] border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official MEA India & MOFA UAE Stamped Copy
              </span>
              <span className="hidden sm:inline">Press Esc or click outside to close</span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Education;