import { useState } from 'react';
import { Github, Linkedin, Download, MapPin, Phone, Maximize2, Minimize2, ExternalLink, Briefcase } from 'lucide-react';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function for smooth scrolling to projects
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-[#070b14] overflow-hidden pt-20 pb-12 lg:py-0 transition-colors duration-300">
      
      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 dark:bg-purple-900/20 blur-[100px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container-custom relative z-10 w-full animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1 relative z-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wide mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1] mb-6 text-gray-900 dark:text-white tracking-tighter">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-500">
                Harish
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-500">
                .R
              </span>
            </h1>

            {/* Subheading */}
            <div className="flex items-center flex-wrap gap-3 text-xl md:text-2xl mb-6 font-bold tracking-tight">
              <span className="text-gray-800 dark:text-gray-200">Full-Stack Developer</span>
              <span className="text-gray-400 dark:text-gray-600 hidden sm:inline">|</span> 
              <span className="text-cyan-600 dark:text-cyan-400">MCA Graduate</span>
            </div>

            {/* Improved Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
              A results-driven <span className="text-gray-900 dark:text-white font-bold">MERN Stack Developer</span> with expertise in <span className="text-gray-900 dark:text-white font-bold">Python</span> and <span className="text-gray-900 dark:text-white font-bold">DevOps</span>. I build robust, scalable web architectures and transform complex requirements into seamless digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a 
                href="#projects" 
                onClick={scrollToProjects}
                className="group flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                View Projects <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a 
  href="/Harish_Resume.pdf"   // ✅ Changed from "/Harish.R_resume.pdf"
  download 
  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#1e2436] hover:bg-gray-50 dark:hover:bg-[#2a324a] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-sm"
>
  Resume <Download size={20} />
</a>
            </div>

            {/* Connection Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 w-full pt-8 border-t border-gray-200 dark:border-white/5">
              <div className="flex items-center gap-4">
                <a href="https://github.com/harishramamoorthy" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white rounded-xl transition-all hover:-translate-y-1">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/harishramamoorthy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white rounded-xl transition-all hover:-translate-y-1">
                  <Linkedin size={22} />
                </a>
              </div>
              
              <div className="flex items-center gap-6 text-sm font-bold tracking-wide">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin size={18} className="text-cyan-500" /> Thanjavur, IN
                </span>
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Phone size={18} className="text-cyan-500" /> +91 9344508260
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Expanding Profile Box */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full mb-8 lg:mb-0">
            <div 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`group relative w-full max-w-[420px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-center lg:origin-right
                ${isExpanded 
                  ? 'aspect-[3/4] sm:aspect-[2/3] scale-100 sm:scale-110 lg:scale-[1.25] z-50 bg-[#0a1936] rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.8)]' 
                  : 'aspect-square sm:aspect-[4/5] lg:aspect-square xl:aspect-[4/4.5] bg-[#1a4b9c] rounded-[3rem] shadow-2xl hover:-translate-y-3 hover:shadow-cyan-500/20'
                } overflow-hidden`}
            >
              <img 
                src="/IMG_7255.png" 
                alt="Harish.R" 
                className={`w-full h-full object-top transition-all duration-700
                  ${isExpanded 
                    ? 'object-contain scale-100' 
                    : 'object-cover group-hover:scale-105'
                  }
                `}
              />
              
              {/* Interaction Overlays */}
              {!isExpanded && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-transparent to-transparent z-20 flex flex-col justify-end items-center pb-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <Maximize2 size={18} />
                    <span className="text-sm font-bold uppercase tracking-widest">Click to View Full</span>
                  </div>
                </div>
              )}
              
              {isExpanded && (
                <div className="absolute top-6 right-6 z-30 transition-opacity duration-500 delay-200">
                  <div className="p-3 bg-black/50 backdrop-blur-md text-white rounded-2xl border border-white/10 shadow-2xl">
                    <Minimize2 size={24} />
                  </div>
                </div>
              )}
              
              {/* Premium Glow Border */}
              <div className={`absolute inset-0 border-2 pointer-events-none transition-all duration-500
                ${isExpanded ? 'border-cyan-400/30 rounded-[2rem]' : 'border-white/10 rounded-[3rem] group-hover:border-cyan-500/50'}
              `}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;