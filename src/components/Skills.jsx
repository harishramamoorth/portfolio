
import { Code, Database, Layout, Server, Zap } from 'lucide-react';

const skills = [
  { name: "React.js / Next.js", level: 85, icon: <Zap size={22} />, color: "from-cyan-400 to-blue-500", glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]" },
  { name: "Node.js / Express", level: 80, icon: <Server size={22} />, color: "from-green-400 to-emerald-500", glow: "group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]" },
  { name: "Python / Django", level: 75, icon: <Code size={22} />, color: "from-yellow-400 to-orange-500", glow: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]" },
  { name: "MongoDB / SQL", level: 78, icon: <Database size={22} />, color: "from-emerald-400 to-teal-500", glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]" },
  { name: "HTML/CSS / Tailwind", level: 90, icon: <Layout size={22} />, color: "from-pink-400 to-rose-500", glow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#050810] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-300"></div>

      <div className="container-custom relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6 transition-colors">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 transition-colors">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className={`group relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:border-gray-300 dark:hover:border-white/10 ${skill.glow}`}
            >
              
              {/* Subtle ambient glow behind the card on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-gradient-to-r ${skill.color} pointer-events-none`}></div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-500 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Percentage Number */}
                  <span className="text-2xl font-black text-gray-800 dark:text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 dark:bg-[#0f1629] rounded-full h-3.5 border border-gray-200 dark:border-white/5 overflow-hidden shadow-inner relative transition-colors duration-300">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative transition-all duration-1000 ease-out`} 
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Glowing dot at the end of the progress bar */}
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full blur-[2px] opacity-60"></div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;