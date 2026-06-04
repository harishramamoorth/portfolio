
import { ExternalLink, Github, Star, Sparkles, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Online Car Accessories Portal",
    company: "Personal Project",
    tech: ["Python", "MySQL", "HTML/CSS", "JS"],
    desc: "Full-featured e‑commerce platform with product management, reviews, secure checkout, and customer support.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "#",
    stars: 4,
    image: "/project/car.png",
    theme: "blue",
    glow: "group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
    border: "group-hover:border-blue-500/30"
  },
  {
    title: "Investor Analysis Platform",
    company: "MRG Engineering",
    tech: ["Python", "MongoDB", "Express", "React"],
    desc: "Real‑time investment tracking, interactive dashboards, and secure user authentication for enterprise clients.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://investor.mrgengg.com/investors",
    stars: 5,
    image: "/project/Investor.png",
    theme: "emerald",
    glow: "group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    border: "group-hover:border-emerald-500/30"
  },
  {
    title: "FireSafety E‑commerce",
    company: "Fire Safety Company",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    desc: "Full‑featured e‑commerce platform for fire safety equipment with educational resources and equipment analysis tools.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://fire-safety-rosy.vercel.app/projects",
    stars: 5,
    image: "/project/firesafety.png",
    theme: "orange",
    glow: "group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]",
    border: "group-hover:border-orange-500/30"
  },
  {
    title: "MRG Logistics Smart Platform",
    company: "MRG Logistics",
    tech: ["React", "Express", "PostgreSQL", "Leaflet"],
    desc: "Real‑time truck tracking, load matching, route optimization, and transparent shipment tracking for logistics.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://logistic-delta-ecru.vercel.app",
    stars: 5,
    image: "/project/logistic.png",
    theme: "cyan",
    glow: "group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]",
    border: "group-hover:border-cyan-500/30"
  },
   {
    title: " E‑commerce Bookstore",
    company: "Personal Project",
    tech: ["React", "Vite", "Razorpay", "Tailwind CSS"],
    desc: "Modern e‑commerce platform for authentic  literature, featuring multilingual support, secure checkout, and scholarly‑verified publications.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "https://www.ift-mrg.shop/",
    stars: 5,
    image: "/project/ecommer-bookstore.jpg",
    theme: "purple",
    glow: "group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]",
    border: "group-hover:border-purple-500/30"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#050810] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/5 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Real‑world solutions I've built – from e‑commerce to logistics and investment platforms.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col rounded-[2rem] bg-white dark:bg-[#0a0f1c] border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${proj.glow} ${proj.border}`}
            >
              
              {/* Premium Browser Window Wrapper for Image */}
              <div className="p-3 md:p-4 bg-gray-100/50 dark:bg-[#111827] border-b border-gray-200 dark:border-white/5">
                
                {/* Browser Controls (Red, Yellow, Green dots) */}
                {/* <div className="flex gap-1.5 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full bg-red-400/90 dark:bg-red-500/80 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/90 dark:bg-yellow-500/80 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/90 dark:bg-green-500/80 shadow-sm"></div>
                </div> */}

                {/* Actual Image Container */}
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200/50 dark:border-white/5 bg-gray-200 dark:bg-gray-800">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    // Object-top ensures the header of your app is always visible. 
                    // Scale-105 is a very subtle zoom that won't ruin the image visibility.
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  
                  {/* Rating Badge floating safely in the corner, not blocking UI */}
                  <div className="absolute bottom-3 right-3 z-30 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    {[...Array(proj.stars)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                </div>
              </div>

              {/* Card Body - Text and Buttons */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {proj.title}
                  </h3>
                </div>
                
                {proj.company && (
                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                    <FolderGit2 size={16} /> {proj.company}
                  </p>
                )}

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-base md:text-lg">
                  {proj.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-3 py-1.5 bg-gray-50 dark:bg-[#161f33] border border-gray-200 dark:border-white/5 rounded-lg text-xs font-mono font-semibold text-gray-700 dark:text-gray-300 group-hover:border-cyan-500/30 transition-colors duration-300 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold transition-all border border-gray-200 dark:border-white/5"
                  >
                    <Github size={18} /> Code
                  </a>
                  
                  {proj.live === "#" ? (
                    <div className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 dark:bg-[#0f1629] text-gray-400 dark:text-gray-500 font-bold border border-dashed border-gray-300 dark:border-gray-700 cursor-not-allowed">
                      In Progress
                    </div>
                  ) : (
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;