import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar background trigger
      setScrolled(window.scrollY > 20);

      // 2. Reading progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // 3. Active section detection (Scroll Spy)
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-white/70 dark:bg-[#020617]/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 py-3' 
        : 'bg-transparent py-6'
    }`}>
      
      {/* Top Reading Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-100 dark:bg-white/5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container-custom flex justify-between items-center">
        
        {/* Logo Branding */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')} 
          className="relative z-10 text-2xl font-black tracking-tighter text-gray-900 dark:text-white group"
        >
          <span className="inline-block transition-transform group-hover:-translate-y-0.5">Harish</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-purple-400 group-hover:to-pink-500 transition-colors duration-500">.R</span>
        </a>
        
        {/* Desktop Navigation - Smart Pill Style */}
        <div className="hidden lg:flex items-center relative bg-gray-100/50 dark:bg-white/5 p-1 rounded-full border border-gray-200/50 dark:border-white/5 shadow-inner">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleClick(e, link.href)}
              className={`relative z-10 px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-cyan-600 dark:text-cyan-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {/* This is the inner active background that appears only on the active link */}
              {activeSection === link.id && (
                <div className="absolute inset-0 bg-white dark:bg-[#0f172a] rounded-full shadow-sm -z-10 animate-[scale-in_0.2s_ease-out]" />
              )}
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            {darkMode ? (
              <Sun size={18} className="group-hover:rotate-90 transition-transform duration-500" /> 
            ) : (
              <Moon size={18} className="group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 transition-transform active:scale-90"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop blur */}
        <div className={`absolute inset-0 bg-[#020617]/40 backdrop-blur-sm transition-opacity duration-700 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} onClick={() => setIsOpen(false)} />

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-[#020617] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-24 h-full flex flex-col">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 border-b border-gray-100 dark:border-white/5 pb-4">Navigation</h4>
            
            <div className="flex flex-col gap-1 flex-grow">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleClick(e, link.href)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-xl font-black transition-all ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {link.name}
                  <ChevronRight size={20} className={`transition-all duration-500 ${activeSection === link.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                </a>
              ))}
            </div>

            {/* Bottom Credits */}
            <div className="mt-auto pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400">Harish.R</span>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;