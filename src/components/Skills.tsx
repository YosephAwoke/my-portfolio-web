import React from "react";
import { Cpu, Terminal, Layers, Database, ShieldCheck, Compass, GitMerge } from "lucide-react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";

export default function Skills() {
  // Mapping categories to nice matching icons using the brand-orange and brand-peach theme
  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes("Artificial")) return <Cpu size={22} className="text-[#FF5A09]" />;
    if (categoryName.includes("Frameworks")) return <Layers size={22} className="text-[#F3843E]" />;
    if (categoryName.includes("Programming")) return <Terminal size={22} className="text-[#FF9900]" />;
    if (categoryName.includes("Databases")) return <Database size={22} className="text-[#FF5A09]" />;
    if (categoryName.includes("Branding")) return <Compass size={22} className="text-[#F3843E]" />;
    return <GitMerge size={22} className="text-[#FF9900]" />;
  };

  const getBorderColor = (categoryName: string) => {
    if (categoryName.includes("Artificial")) return "hover:border-[#FF5A09]/40";
    if (categoryName.includes("Frameworks")) return "hover:border-[#F3843E]/40";
    if (categoryName.includes("Programming")) return "hover:border-[#FF9900]/40";
    if (categoryName.includes("Databases")) return "hover:border-[#FF5A09]/40";
    if (categoryName.includes("Branding")) return "hover:border-[#F3843E]/40";
    return "hover:border-[#FF9900]/40";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-transparent transition-colors relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,90,9,0.015),transparent)] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16 sm:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20 px-3.5 py-1.5 rounded-full shadow-xs">
            Expertise Matrix
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            Technical Skillset Breakdown
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] rounded mt-3" />
        </div>

        {/* Categories bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className={`p-6 sm:p-8 rounded-3xl border border-neutral-200/80 dark:border-brand-gray-dark/50 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 shadow-xs hover:shadow-sm transition-all duration-300 ${getBorderColor(
                category.name
              )}`}
            >
              {/* Card Header with customized icons */}
              <div className="flex items-center gap-3 mb-6 text-left">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-neutral-950/60 border border-slate-100 dark:border-neutral-850">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-neutral-100 leading-tight">
                  {category.name}
                </h3>
              </div>

              {/* Skills Tags inside the card */}
              <div className="flex flex-wrap gap-2 text-left">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 rounded-xl font-sans text-[11px] font-bold text-neutral-600 dark:text-neutral-400 bg-slate-50 hover:bg-orange-50/40 dark:bg-neutral-950/60 dark:hover:bg-neutral-950 border border-slate-100/80 dark:border-neutral-850 hover:border-brand-orange/40 hover:text-brand-orange dark:hover:text-amber-400 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional summary ticker board bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-3xl border border-neutral-200/70 dark:border-brand-gray-dark/50 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 flex flex-col sm:flex-row items-center gap-5 justify-between max-w-4xl mx-auto shadow-xs"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl text-brand-orange shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                Strict Quality & High Security-Oriented Coding
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-neutral-500 mt-0.5">
                Applying HUST research principles to robust enterprise architectures.
              </p>
            </div>
          </div>
          <span className="font-mono text-[9px] font-extrabold text-slate-400 dark:text-neutral-500 border border-slate-200 dark:border-neutral-800 px-3 py-1 rounded-full uppercase tracking-widest select-none bg-slate-50/50 dark:bg-neutral-950 pointer-events-none">
            R&D Validated
          </span>
        </motion.div>

      </div>
    </section>
  );
}
