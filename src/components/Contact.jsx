import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Globe, ArrowUpRight, Copy, Check } from 'lucide-react';

const contactMethods = [
  { 
    id: "email",
    icon: <Mail size={22} />, 
    title: "Email", 
    value: "harishramu9344@gmail.com", 
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=harishramu9344@gmail.com",
    copyValue: "harishramu9344@gmail.com",
    theme: "from-red-400 to-rose-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.4)]"
  },
  { 
    id: "linkedin",
    icon: <Linkedin size={22} />, 
    title: "LinkedIn", 
    value: "/in/harishramamoorthy", 
    href: "https://www.linkedin.com/in/harishramamoorthy/",
    copyValue: "https://www.linkedin.com/in/harishramamoorthy/",
    theme: "from-blue-400 to-blue-600",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]"
  },
  { 
    id: "github",
    icon: <Github size={22} />, 
    title: "GitHub", 
    value: "harishramamoorthy", 
    href: "https://github.com/harishramamoorthy",
    copyValue: "https://github.com/harishramamoorthy",
    theme: "from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-600",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(107,114,128,0.4)]"
  },
  { 
    id: "phone",
    icon: <Phone size={22} />, 
    title: "Phone", 
    value: "+91 9344508260", 
    href: "tel:+919344508260", // This native tel link triggers the phone dialer
    copyValue: "+919344508260",
    theme: "from-emerald-400 to-teal-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
  },
  { 
    id: "location",
    icon: <MapPin size={22} />, 
    title: "Location", 
    value: "Thanjavur, India", 
    href: null,
    copyValue: null, 
    theme: "from-orange-400 to-amber-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]"
  }
];

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);

  // Handles copying text securely
  const handleCopy = (e, text, id) => {
    e.preventDefault(); 
    e.stopPropagation(); // Stops the card's native link from opening when you click 'copy'
    
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
      
      {/* Deep Space Background Pattern & Orbs */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 dark:bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[8s]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[10s] delay-700"></div>

      <div className="container-custom relative z-10">
        
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Connect</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Have a project in mind or looking for a developer? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-stretch">
          
          {/* Left Column: Contact Methods Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {contactMethods.map((item) => (
              <div 
                key={item.id}
                className={`group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 ${item.glow}`}
              >
                {/* Glowing Border effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                {/* Invisible link overlay covering the card */}
                {item.href && (
                  <a 
                    href={item.href} 
                    target={item.href.startsWith('http') ? "_blank" : "_self"} 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-10 cursor-pointer"
                    aria-label={`Go to ${item.title}`}
                  ></a>
                )}

                {/* Inner Card */}
                <div className="relative z-0 h-full flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#080d1a] overflow-hidden">
                  
                  {/* Hover Glare */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-2xl"></div>

                  {/* Icon Box */}
                  <div className={`relative z-0 p-3 rounded-xl bg-gradient-to-br ${item.theme} text-white shadow-md transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {item.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0 relative z-0">
                    <h3 className="font-bold text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
                      {item.title}
                    </h3>
                    <p className="font-semibold text-gray-900 dark:text-white truncate transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-500 dark:group-hover:from-white dark:group-hover:to-gray-300">
                      {item.value}
                    </p>
                  </div>

                  {/* Action Icons (Right side) */}
                  <div className="flex items-center gap-1 relative z-20">
                    
                    {/* Copy Button (Only renders if copyValue exists) */}
                    {item.copyValue && (
                      <button 
                        onClick={(e) => handleCopy(e, item.copyValue, item.id)}
                        title="Copy to clipboard"
                        className="p-2 rounded-lg text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      >
                        {copiedId === item.id ? (
                          <Check size={18} className="text-emerald-500 animate-[scale-in_0.2s_ease-out]" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </button>
                    )}

                    {/* Navigation Arrow */}
                    {item.href && (
                      <div className="p-2 text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 pointer-events-none">
                        <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column: CTA Card */}
          <div className="lg:col-span-2 relative p-[1px] rounded-[2rem] bg-gradient-to-b from-cyan-400 to-purple-600 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] transition-transform duration-700 hover:-translate-y-2">
            
            <div className="relative h-full p-8 md:p-10 flex flex-col items-center justify-center text-center rounded-[2rem] bg-white dark:bg-[#080d1a] overflow-hidden">
              
              {/* Internal ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-8 relative z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Available for Work</span>
              </div>

              <div className="relative p-4 rounded-full bg-gray-50 dark:bg-[#151f38] mb-6 z-10 border border-gray-100 dark:border-white/5 shadow-inner">
                <Globe className="w-12 h-12 text-cyan-500" />
              </div>
              
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 z-10">Let's Work Together</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 z-10 text-lg leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
              </p>
              
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=harishramu9344@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-1 relative overflow-hidden z-10"
              >
                {/* Shimmer Light Ray */}
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] group-hover/btn:animate-[shimmer_1.5s_infinite] transition-all z-0"></div>
                
                <Send size={20} className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" /> 
                <span className="relative z-10 tracking-wide">Send an Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden animate-fade-up" style={{ animationDelay: '1s' }}>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harishramu9344@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group/mobile flex items-center justify-center w-full gap-3 py-4 rounded-2xl shadow-[0_10px_40px_rgba(6,182,212,0.4)] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold backdrop-blur-md transition-all hover:scale-[1.02] overflow-hidden relative border border-white/20"
        >
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] animate-[shimmer_2s_infinite] transition-all z-0"></div>
          <Send size={20} className="relative z-10" /> 
          <span className="relative z-10">Let's Connect</span>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
        @keyframes scale-in {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Contact;