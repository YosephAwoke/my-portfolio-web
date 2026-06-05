import React from "react";
import { GraduationCap, Calendar, Award, MapPin, Sparkles, BookOpen, Layers } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO, EDUCATION_LIST } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-transparent transition-colors relative h-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,90,9,0.02),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16 sm:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20 px-3.5 py-1.5 rounded-full shadow-xs">
            Core Expertise
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight animate-fade-in">
            Full-Stack Engineering & AI Research
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] rounded mt-3" />
        </div>

        {/* Bento Grid layout style - lg:cols-12 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Giga Biography narrative box (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A09] to-[#FF9900] font-extrabold flex items-center gap-1.5">
                <Layers size={14} className="text-[#FF5A09]" />
                THE PROFESSIONAL PROFILE
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight leading-snug text-left">
                Bridging Custom Full-Stack (MERN) Ecosystems with Advanced Deep Learning.
              </h3>
              
              <div className="space-y-4 text-slate-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed text-left font-sans">
                <p>
                  I am a versatile, results-oriented <strong>Senior Software Engineer and Computer Vision Researcher</strong>. My core expertise is anchored in designing ultra-performant <strong>MERN Stack (MongoDB, Express, React, Node.js) deployments</strong> alongside high-fidelity user interfaces, advanced graphic designs, and intelligent microservices.
                </p>
                <p>
                  During my key tenures, including engineering national-grade systems under the <strong>Prime Minister's Office of Ethiopia</strong>, I have unified robust, secure backends with fluid visual graphics and state-of-the-art biological classification models. I prioritize clean MVC layers, highly responsive layouts, and production-grade edge executions.
                </p>
              </div>
            </div>

            {/* Quick stats grid inside Bento Card 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200/50 dark:border-neutral-800/80">
              <div className="flex gap-3 text-left">
                <div className="w-12 h-12 rounded-xl bg-orange-100/70 dark:bg-orange-950/40 text-[#FF5A09] dark:text-orange-400 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-neutral-100 uppercase tracking-tight">
                    Double MSc Scholar
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 mt-1">
                    ICE & Computer Science Focus
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <div className="w-12 h-12 rounded-xl bg-orange-100/70 dark:bg-orange-950/40 text-[#FF5A09] dark:text-[#FF9900] flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-neutral-100 uppercase tracking-tight">
                    Avg GPA: 3.84 / 4.0
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 mt-1">
                    Honors Academic Scholar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Right-hand timeline container box (col-span-6) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 dark:bg-neutral-950/60 border border-slate-100 dark:border-neutral-800 rounded-xl text-[#FF5A09] dark:text-[#FF9900]">
                  <BookOpen size={18} />
                </div>
                <h3 className="font-display font-black text-xl text-slate-950 dark:text-white tracking-tight">
                  Academic Credentials Registry
                </h3>
              </div>

              <div className="relative border-l-2 border-slate-200 dark:border-neutral-800 pl-6 space-y-8 py-2">
                {EDUCATION_LIST.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative group text-left"
                  >
                    {/* Tiny nodes alignment */}
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#FF5A09] border-4 border-white dark:border-neutral-900 group-hover:scale-125 transition-transform" />

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[10px] md:text-xs font-bold text-[#FF5A09] dark:text-[#FF9900] uppercase tracking-wider">
                          {edu.duration}
                        </span>
                        <span className="px-2 py-0.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 font-mono text-[10px] md:text-xs font-extrabold text-[#FF5A09] border border-[#FF5A09]/25">
                          GPA: {edu.gpa}
                        </span>
                      </div>

                      <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-neutral-100 group-hover:text-[#FF5A09] dark:group-hover:text-[#FF9900] transition-colors">
                        {edu.school}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 leading-normal">
                        {edu.degree} · <span className="text-slate-700 dark:text-neutral-200 font-bold">{edu.major}</span>
                      </p>

                      {edu.school.includes("HUST") && (
                        <div className="mt-3 p-3 bg-white/75 dark:bg-neutral-950/60 rounded-xl border border-slate-100 dark:border-neutral-800/80">
                          <p className="text-xs text-slate-500 dark:text-neutral-455 italic leading-relaxed">
                            <strong className="text-[10px] font-mono uppercase not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A09] to-[#FF9900] block mb-1 font-bold">MSc Thesis R&D Focus:</strong>
                            "Deep Learning–Based Image Classification of Traditional Ethiopian Botanical Specimen."
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom geographical stamp matching outer patterns */}
            <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-neutral-800/60 flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-neutral-455 font-mono">
              <MapPin size={14} className="text-[#FF5A09] dark:text-[#FF9900] animate-pulse" />
              <span>Addis Ababa, Ethiopia — Available for remote & onsite global roles</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
