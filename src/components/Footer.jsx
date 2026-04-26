import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, ChevronRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#020617] pt-20 pb-8 overflow-hidden transition-colors duration-300">
      
      {/* 1px Glowing Top Border Edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-[1px]"></div>
      
      {/* Deep Space Ambient Bottom Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/5 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container-custom relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 max-w-6xl mx-auto">
          
          {/* Column 1: Brand & Status */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div 
              onClick={scrollToTop}
              className="cursor-pointer text-3xl font-black mb-4 tracking-tight group"
            >
              Harish<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-purple-400 group-hover:to-pink-500 transition-colors duration-500">.R</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed max-w-sm">
              Architecting high-performance digital solutions with a focus on scalable web applications, clean code, and exceptional user experiences.
            </p>

            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-500 mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Connect */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6">Connect</h4>
            
            <div className="flex flex-col gap-3">
              <a 
                href="https://github.com/harishramamoorthy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-1 rounded-xl bg-gray-50 dark:bg-[#0a0f1c] border border-gray-200 dark:border-white/5 overflow-hidden transition-all hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-2.5 rounded-lg bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white transition-colors group-hover:bg-gray-800 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900">
                  <Github size={18} />
                </div>
                <span className="relative font-bold text-sm text-gray-700 dark:text-gray-300">GitHub</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/harishramamoorthy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-1 rounded-xl bg-gray-50 dark:bg-[#0a0f1c] border border-gray-200 dark:border-white/5 overflow-hidden transition-all hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-2.5 rounded-lg bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white transition-colors group-hover:bg-[#0a66c2] group-hover:text-white">
                  <Linkedin size={18} />
                </div>
                <span className="relative font-bold text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</span>
              </a>

              <a 
                href="mailto:harishramu9344@gmail.com" 
                className="group relative flex items-center gap-3 p-1 rounded-xl bg-gray-50 dark:bg-[#0a0f1c] border border-gray-200 dark:border-white/5 overflow-hidden transition-all hover:border-red-500/30 hover:shadow-md hover:shadow-red-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-2.5 rounded-lg bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white transition-colors group-hover:bg-red-500 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <span className="relative font-bold text-sm text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors">harishramu9344@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-white/10 max-w-6xl mx-auto">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Harish.R
            </p>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
              Built with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-bold shadow-sm"
          >
            Back to Top 
            <div className="p-1 rounded-full bg-gray-200 dark:bg-white/10 group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;