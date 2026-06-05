import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCE_LIST } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-transparent transition-colors relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,90,9,0.015),transparent)] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Title Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16 sm:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20 px-3.5 py-1.5 rounded-full shadow-xs">
            History
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] rounded mt-3" />
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-slate-105 dark:border-neutral-900/40 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {EXPERIENCE_LIST.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group pr-2 text-left"
            >
              {/* Vertical timeline node indicator icon */}
              <div className="absolute -left-[38px] sm:-left-[54px] top-1.5 w-8 h-8 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-brand-gray-dark/50 text-[#FF5A09] dark:text-[#FF9900] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#FF5A09] group-hover:to-[#FF9900] group-hover:border-none flex items-center justify-center shadow-xs transition-colors duration-300">
                <Briefcase size={14} />
              </div>

              {/* Detail content card wrapper */}
              <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200/80 dark:border-brand-gray-dark/50 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 shadow-xs hover:shadow-sm hover:border-brand-orange/45 transition-all duration-300">
                
                {/* Meta details Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 border-b border-slate-200/50 dark:border-neutral-800/80 pb-4">
                  <div>
                    <h3 className="font-display font-black text-base sm:text-xl text-slate-950 dark:text-white tracking-tight leading-tight">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-sm sm:text-base font-bold text-slate-700 dark:text-neutral-300 mt-1 flex items-center gap-1">
                      <span className="text-[#FF5A09] dark:text-[#FF9900] font-extrabold">{exp.company}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start sm:items-end gap-1.5 font-mono text-xs sm:text-[13px] font-extrabold text-slate-600 dark:text-neutral-400">
                    <span className="flex items-center gap-1 bg-white/70 dark:bg-neutral-950/60 px-2.5 py-1 rounded-lg border border-slate-200/40 dark:border-neutral-850">
                      <Calendar size={12} className="text-[#FF5A09] dark:text-[#FF9900]" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 mt-0.5">
                      <MapPin size={12} className="text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Subtasks description list */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-705 dark:text-white text-sm sm:text-[15px] leading-relaxed">
                      <span className="text-[#FF5A09] dark:text-[#FF9900] font-bold select-none mt-0.5">•</span>
                      <span className="dark:text-white">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/40 dark:border-neutral-850 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-xl font-mono text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A09] to-[#FF9900] bg-slate-50 dark:bg-[#121212]/30 border border-slate-200/40 dark:border-brand-gray-dark/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
