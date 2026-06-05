import React, { useState } from "react";
import { Sparkles, Brain, Code, Cpu, Compass, ArrowUpRight, ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { PROJECTS_LIST } from "../data";
import ProjectModal from "./ProjectModal";

type FilterType = "all" | "full-stack" | "ai" | "ui-ux" | "aiot";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter categories map
  const filterTabs = [
    { type: "all", label: "All Projects", Icon: Sparkles },
    { type: "full-stack", label: "Full-Stack", Icon: Code },
    { type: "ai", label: "AI & Deep Learning", Icon: Brain },
    { type: "ui-ux", label: "UI/UX & 3D", Icon: Compass },
    { type: "aiot", label: "AIoT Edge", Icon: Cpu },
  ];

  // Map of categories in projects matching filters
  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-transparent transition-colors relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,90,9,0.015),transparent)] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20 px-3.5 py-1.5 rounded-full shadow-xs">
            Selected Work
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            Advanced Engineering Projects
          </h2>
          <p className="max-w-xl text-slate-500 dark:text-neutral-500 text-sm md:text-base mt-2">
            Browse through functional deployments spanning master's theses research, civic infrastructure automation, and embedded systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] rounded mt-3" />
        </div>

        {/* Filter Tab bar with sliding/flex properties */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.type}
              id={`project-filter-tab-${tab.type}`}
              onClick={() => setActiveFilter(tab.type as FilterType)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.type
                  ? "bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white shadow-xs scale-[1.02] border-none"
                  : "bg-white/80 dark:bg-neutral-950/60 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-neutral-900 border border-neutral-200/80 dark:border-brand-gray-dark/50"
              }`}
            >
              <tab.Icon size={14} className={activeFilter === tab.type ? "text-white" : "text-[#FF5A09] dark:text-[#FF9900]"} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Project Grid layout */}
        <motion.div
          id="projects-deck-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col h-full bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl overflow-hidden shadow-xs hover:shadow-sm hover:border-brand-orange/45 dark:hover:border-brand-orange/45 transition-all duration-300 p-5"
              >
                
                {/* Media frame */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-neutral-950 rounded-2xl cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300" />
                  
                  {/* Floating Category Tag */}
                  <div className="absolute top-3 left-3 pt-0.5">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-white bg-slate-950/70 dark:bg-neutral-900/80 px-2.5 py-1 rounded-md backdrop-blur border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Core contents of card */}
                <div className="pt-5 flex flex-col flex-grow text-left">
                  
                  {/* Card title - clickable */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-black text-base sm:text-[17px] text-slate-950 dark:text-white leading-snug hover:text-[#FF5A09] dark:hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Summary paragraph */}
                  <p className="text-slate-500 dark:text-neutral-400 text-xs sm:text-sm mt-2 flex-grow leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Code/Demo Direct Shortcut links */}
                  <div className="flex items-center gap-4 mt-4 text-xs font-bold font-mono text-slate-600 dark:text-neutral-400 border-t border-slate-100 dark:border-neutral-850/40 pt-3">
                     {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-[#FF5A09] dark:hover:text-orange-400 transition-colors"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-[#FF5A09] dark:hover:text-orange-400 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Skills tags block */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg font-mono text-[9px] font-extrabold text-slate-500 dark:text-neutral-400 bg-slate-50/85 dark:bg-neutral-950 border border-slate-100 dark:border-neutral-850"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="font-mono text-[9px] text-slate-400 dark:text-neutral-555 font-bold self-center px-1">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Dedicated Action Trigger */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-neutral-800/60 flex items-center justify-between">
                    <button
                      id={`project-cta-modal-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A09] to-[#FF9900] cursor-pointer transition-colors group-hover:translate-x-0.5 transition-transform"
                    >
                      Read Technical Case Study
                      <ArrowRight size={13} className="text-[#FF5A09] dark:text-orange-400" />
                    </button>
                    <ArrowUpRight size={15} className="text-slate-300 dark:text-slate-600 group-hover:text-brand-orange transition-colors" />
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Project Case Study overlay portal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
