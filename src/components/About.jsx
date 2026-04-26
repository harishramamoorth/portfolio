import React from 'react';
import { 
  Quote, Cloud, Server, Code2, Globe, 
  Target, GraduationCap, MapPin, Activity, Layers 
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <GraduationCap size={20} />, label: "Education", value: "MCA Graduate", color: "text-emerald-500 bg-emerald-500/10" },
    { icon: <Code2 size={20} />, label: "Stack", value: "Python & MERN", color: "text-orange-500 bg-orange-500/10" },
    { icon: <MapPin size={20} />, label: "Location", value: "Thanjavur, IN", color: "text-blue-500 bg-blue-500/10" },
    { icon: <Globe size={20} />, label: "Web Ops", value: "AWS & Cloud", color: "text-cyan-500 bg-cyan-500/10" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[grid-white_1px] [background-size:30px_30px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-black tracking-widest uppercase mb-6">
            Professional Identity
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Digital Future</span>
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Story Card */}
          <div className="lg:col-span-8 group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent transition-all duration-500">
            <div className="relative h-full bg-white dark:bg-[#080d1a] rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-transparent dark:border-white/5 shadow-xl flex flex-col justify-center">
              <Quote className="absolute -top-6 -left-6 w-32 h-32 text-gray-100 dark:text-white/[0.02] -rotate-12 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
                  Building high-performance <br />
                  <span className="text-cyan-500">Full-Stack Ecosystems.</span>
                </h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                  <p>
                    I am <span className="text-gray-900 dark:text-white font-bold">Harish.R</span>, a MERN Stack Specialist and MCA Graduate. I focus on the entire lifecycle of a product—from writing secure backend logic in <span className="text-gray-900 dark:text-white font-bold">Python</span> to crafting responsive interfaces in <span className="text-gray-900 dark:text-white font-bold">React</span>.
                  </p>
                  <p>
                    My goal is to translate complex business challenges into scalable, cloud-native applications that are optimized for speed, security, and a global user base.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                   {['Full-Stack', 'Cloud-Native', 'Scalable', 'Secure Ops'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {tag}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Impact Card */}
          <div className="lg:col-span-4 group relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 transition-all duration-500">
            <div className="relative h-full bg-gradient-to-br from-cyan-500 to-blue-700 rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden">
               <Cloud className="absolute -bottom-10 -right-10 w-48 h-48 opacity-20 transform rotate-12" />
               <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md w-fit">
                 <Layers size={28} />
               </div>
               <div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-70">Infrastructure</h4>
                 <p className="text-2xl font-black leading-tight mb-4">Cloud & DevOps</p>
                 <p className="text-sm font-bold opacity-90 leading-relaxed">
                   Mastering AWS Deployment and hosting pipelines to ensure high-availability for enterprise solutions.
                 </p>
               </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-6 group relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-all duration-500 hover:shadow-xl">
            <div className="relative h-full bg-white dark:bg-[#080d1a] rounded-[2.5rem] p-10 flex flex-col justify-center border border-transparent dark:border-white/5">
              <div className="flex items-start gap-6">
                 <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500">
                    <Target size={32} className="animate-pulse" />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">The Mission</h4>
                    <p className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white italic leading-tight">
                      "To deliver precise, scalable, and secure digital architectures that solve real-world problems through technical innovation."
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="group/stat relative p-[1px] rounded-3xl bg-gray-200 dark:bg-white/5 transition-all duration-500 hover:bg-cyan-500/20">
                <div className="h-full bg-white dark:bg-[#080d1a] p-6 rounded-[23px] flex items-center gap-4 border border-transparent dark:border-white/5">
                  <div className={`p-3 rounded-xl ${stat.color} transition-transform group-hover/stat:scale-110`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{stat.label}</h4>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;