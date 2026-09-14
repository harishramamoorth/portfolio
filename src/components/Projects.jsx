import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, StarHalf, FolderGit2, FileText, ArrowUpRight } from 'lucide-react';
import LiquidGlassCard from './LiquidGlassCard';

const projects = [
  {
    title: "StaffIn",
    company: "Multi-Tenant HRMS SaaS Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Hostinger"],
    desc: "Developed a multi-tenant HRMS SaaS platform using React.js, Node.js, Express.js, and MongoDB for employee, attendance, payroll, task, leave, and notification management. Implemented authentication, REST APIs, responsive dashboards, employee tracking, task management, and admin/staff access workflows.",
    github: "https://github.com/harishramamoorth/Workemployee.git",
    live: "https://staffin.online/",
    caseStudy: "/Worksample/Harish-Staffin-WorkSample.pdf",
    caseStudyTitle: "View Case Study",
    caseStudySubtitle: "Detailed project documentation • PDF",
    stars: 5,
    image: "/project/staffin.png",
  },
  {
    title: "MRG Investor Platform",
    company: "MRG ENGINEERING",
    tech: ["React.js", "Node.js", "MongoDB", "Render"],
    desc: "A live portfolio web application automating investment purchases and profit sharing. Engineered complex backend logic to calculate yearly returns and distribute real-time ROI metrics to investors via secure RESTful APIs and responsive dashboards.",
    github: "https://github.com/harishramamoorth/Investment-management.git",
    live: "https://investor.mrgengg.com/investors",
    stars: 5,
    image: "/project/Investor.png",
  },
  {
    title: "Business Building Company (BBC)",
    company: "Personal Project",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    desc: "A modern business networking and collaboration platform that connects professionals and companies seamlessly. Built with a full-stack React.js and Node.js architecture for real-time interactions.",
    github: "https://github.com/harishramamoorth/Biznex.1.git",
    live: "https://www.businessbuilding.co.in/",
    caseStudy: "/Worksample/Harish_BBC_WorkSample.pdf",
    caseStudyTitle: "View Case Study",
    caseStudySubtitle: "Detailed project documentation • PDF",
    stars: 4,
    image: "/project/binzux.jpg",
  },
  {
    title: "E-Commerce Bookstore",
    company: "IfT",
    tech: [
      "React.js", "Node.js", "Express.js", "MongoDB",
      "JWT", "AWS(S3)"
    ],
    desc:
      "Developed a full-stack e-commerce platform from scratch enabling users to browse and purchase physical books, e-books, and audiobooks with cart, checkout, and order management. Built responsive UI components, RESTful APIs, JWT authentication, and deployed on AWS.",
    github: "https://github.com/harishramamoorth/E-commerce-Bookstore.git",
    live: "https://iftchennai.in/",
    caseStudy: "/Worksample/Harish_E-commerce-WorkSample.pdf",
    caseStudyTitle: "View Case Study",
    caseStudySubtitle: "Detailed project documentation • PDF",
    stars: 5,
    image: "/project/ecommer-bookstore.jpg",
  },
  {
    title: "FireSafety E‑commerce",
    company: "Personal Project",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    desc: "Full‑featured e‑commerce platform for fire safety equipment with educational resources and equipment analysis tools.",
    github: "https://github.com/harishramamoorth/fire-safety-project.git",
    live: "https://fire-safety-rosy.vercel.app/projects",
    stars: 4.5,
    image: "/project/firesafety.png",
  },
  {
    title: "Logistics Smart Platform",
    company: "Personal Project",
    tech: ["React", "Express", "PostgreSQL", "Leaflet"],
    desc: "Real‑time truck tracking, load matching, route optimization, and transparent shipment tracking for logistics.",
    github: "https://github.com/harishramamoorth/Logistics-Smart-Platform.git",
    live: "https://logistic-delta-ecru.vercel.app",
    stars: 4.5,
    image: "/project/logistic.png",
  },
  {
    title: "Online Car Accessories Portal",
    company: "Personal Project",
    tech: ["Python", "MySQL", "HTML/CSS", "JS"],
    desc: "Full-featured e‑commerce platform with product management, reviews, secure checkout, and customer support.",
    github: "https://github.com/harishramamoorth?tab=repositories",
    live: "#",
    stars: "In Progress",
    image: "/project/car.png",
  }
];

const Projects = () => {
  // Container orchestrates the staggered reveal of the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Cards enter with a 3D tilt and spring bounce
  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
    }
  };

  // Tech pills pop in sequentially inside the card
  const techVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">

      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            My Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 sm:mb-6"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Real‑world solutions I've built – from e‑commerce to logistics and investment platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto perspective-1000"
        >
          {projects.map((proj, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full transform-style-3d">
              {/* Inherits 3D mouse tracking & glass aesthetic */}
              <LiquidGlassCard
                className="interactive-card h-full flex flex-col p-3 sm:p-4 group border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-[2rem] bg-white dark:bg-[#080d1a] shadow-xl"
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  borderColor: "rgba(6, 182, 212, 0.6)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >

                {/* Top Image Box */}
                <div className="relative h-52 sm:h-60 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shrink-0">
                  {/* Image with hover zoom */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Animated Shimmer Overlay on Image Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] -translate-x-[150%] skew-x-[25deg] pointer-events-none z-10" />

                  {/* Star rating pill badge at bottom right */}
                  <div className="absolute bottom-3 right-3 z-30 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    {typeof proj.stars === 'number' ? (
                      <>
                        {[...Array(Math.floor(proj.stars))].map((_, i) => (
                          <motion.div
                            key={`full-${i}`}
                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1), type: "spring" }}
                          >
                            <Star size={12} className="text-amber-400 fill-amber-400" />
                          </motion.div>
                        ))}
                        {proj.stars % 1 !== 0 && (
                          <motion.div
                            key="half"
                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3 + (Math.floor(proj.stars) * 0.1), type: "spring" }}
                          >
                            <StarHalf size={12} className="text-amber-400 fill-amber-400" />
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <span className="text-xs font-bold text-gray-300 px-1">{proj.stars}</span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow relative z-10">
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-2 break-words">
                    {proj.title}
                  </h3>

                  {/* Subtitle Company/Category Badge */}
                  {proj.company && (
                    <p className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <FolderGit2 size={16} /> {proj.company}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-sm sm:text-base font-medium">
                    {proj.desc}
                  </p>

                  {/* Tech Pills */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {proj.tech.map(t => (
                      <motion.span
                        variants={techVariants}
                        key={t}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-[#131c31] border border-gray-200 dark:border-white/10 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:border-cyan-500/40 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Divider Line */}
                  <div className="w-full h-[1px] bg-gray-200 dark:bg-white/10 mb-6"></div>

                  {/* Action Buttons: 2 Columns Side by Side on Desktop */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-auto relative z-20">
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-[#182035] hover:bg-gray-200 dark:hover:bg-[#222b45] text-gray-900 dark:text-white text-sm font-bold transition-all border border-gray-200 dark:border-white/10 shadow-sm"
                    >
                      <Github size={18} /> <span>Code</span>
                    </motion.a>

                    {proj.live === "#" ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 dark:bg-[#0f1629] text-gray-400 dark:text-gray-500 text-sm font-bold border border-dashed border-gray-300 dark:border-gray-700 cursor-not-allowed"
                      >
                        <span>In Progress</span>
                      </motion.div>
                    ) : (
                      <motion.a
                        whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(6, 182, 212, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/25 relative overflow-hidden group/btn"
                      >
                        {/* Shimmer sweep effect inside button */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[25deg] group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                        <ExternalLink size={18} className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </motion.a>
                    )}
                  </div>

                  {/* Case Study / Work Sample Button */}
                  {proj.caseStudy && (
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 relative z-20">
                      <a
                        href={proj.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cs flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-purple-500/20 border border-cyan-500/30 dark:border-cyan-500/30 transition-all shadow-sm hover:shadow-cyan-500/20"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover/cs:scale-110 transition-transform shrink-0">
                            <FileText size={18} />
                          </div>
                          <div className="flex flex-col min-w-0 text-left">
                            <span className="text-xs sm:text-sm font-black text-gray-900 dark:text-white flex items-center gap-1.5 group-hover/cs:text-cyan-500 dark:group-hover/cs:text-cyan-400 transition-colors">
                              {proj.caseStudyTitle || "View Case Study"}
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 truncate">
                              {proj.caseStudySubtitle || "Detailed project documentation • PDF"}
                            </span>
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover/cs:translate-x-1 transition-transform shrink-0">
                          <ArrowUpRight size={16} />
                        </div>
                      </a>
                    </div>
                  )}

                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}} />
    </section>
  );
};

export default Projects;