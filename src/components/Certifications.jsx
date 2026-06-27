
import { Award, FileText, Image as ImageIcon, Eye, Download, ShieldCheck, Building2 } from 'lucide-react';

const certifications = [
  {
    name: "Web Development (HTML, CSS, JS)",
    type: "PDF Document",
    place: "T4TEQ",
    description: "Comprehensive training in frontend architecture, responsive design, and modern web development principles.",
    file: "/cretificate/wed%20development.pdf",
    icon: <FileText size={18} />,
    theme: "from-cyan-400 via-blue-500 to-indigo-600",
    borderGlow: "group-hover:from-cyan-400 group-hover:to-blue-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]",
    btnTheme: "from-cyan-500 to-blue-600 shadow-cyan-500/25"
  },
  {
    name: "Core Java Programming",
    type: "Image Credential",
    place: "Billianz Academy",
    description: "In-depth study of Object-Oriented Programming (OOP), Java fundamentals, and core application development logic.",
    file: "/cretificate/java.jpg",
    icon: <ImageIcon size={18} />,
    theme: "from-orange-400 via-red-500 to-rose-600",
    borderGlow: "group-hover:from-orange-400 group-hover:to-red-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)]",
    btnTheme: "from-orange-500 to-red-600 shadow-orange-500/25"
  },
  {
    name: "Internship Certificate",
    type: "PDF Document",
    place: "SSS Smart Tech",
    description: "Hands-on internship experience in a professional tech environment, gaining practical skills and industry exposure.",
    file: "/cretificate/SSS Smart tech certificate.pdf",
    icon: <FileText size={18} />,
    theme: "from-violet-400 via-purple-500 to-fuchsia-600",
    borderGlow: "group-hover:from-violet-400 group-hover:to-fuchsia-600",
    shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]",
    btnTheme: "from-violet-500 to-fuchsia-600 shadow-violet-500/25"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">

      {/* Deep Space Background Pattern & Orbs */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[10s]"></div>

      <div className="container-custom relative z-10">

        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            Credentials
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {certifications.map((cert, idx) => (

            /* 1px Glowing Edge Wrapper */
            <div
              key={idx}
              className={`group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 ${cert.borderGlow} ${cert.shadow}`}
            >

              {/* Inner Glass Card */}
              <div className="relative h-full p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[#080d1a] overflow-hidden flex flex-col">

                {/* Background Watermark Icon (Gives it a certificate feel) */}
                <Award className="absolute -bottom-10 -right-10 w-64 h-64 text-gray-100 dark:text-white/[0.02] transform -rotate-12 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />

                {/* Diagonal Glass Glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 z-0 rounded-[2rem]"></div>

                {/* Ambient corner glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${cert.theme} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 rounded-full`}></div>

                <div className="relative z-10 flex-grow">

                  {/* Top Row: Icon & Format Badge */}
                  <div className="flex justify-between items-start mb-8">
                    {/* Glowing Icon Box */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.theme} blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>
                      <div className={`relative p-3.5 rounded-2xl bg-gradient-to-br ${cert.theme} text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {cert.icon}
                      </div>
                    </div>

                    {/* Format Type Badge */}
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-[#151f38] border border-gray-200 dark:border-white/5 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest shadow-sm">
                      {cert.type}
                    </span>
                  </div>

                  {/* Title & Details Area */}
                  <div className="mb-8">
                    {/* Verified Seal */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                      <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-[11px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Verified Credential</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-500 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                      {cert.name}
                    </h3>

                    {/* Institution / Place */}
                    <p className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
                      <Building2 size={16} className="text-cyan-500" />
                      {cert.place}
                    </p>

                    {/* 2-Line Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed line-clamp-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-white/10">

                  {/* View Button with Sweeping Shimmer */}
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r text-white font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden ${cert.btnTheme}`}
                  >
                    {/* Shimmer Light Ray */}
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] group-hover/btn:animate-[shimmer_1.5s_infinite] transition-all z-0"></div>

                    <Eye size={18} className="relative z-10" />
                    <span className="relative z-10 tracking-wide">View</span>
                  </a>

                  {/* Download Button */}
                  <a
                    href={cert.file}
                    download
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold transition-all border border-gray-200 dark:border-white/5"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required arbitrary animation block for the button shimmer */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
      `}} />
    </section>
  );
};

export default Certifications;