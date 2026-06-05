import React, { useEffect } from "react";
import { X, CheckCircle, ShieldCheck, Tag, Code, Cpu, Award, Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  
  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      id="case-study-modal-container"
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Backdrop */}
      <motion.div
        id="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/85 dark:bg-slate-950/92 backdrop-blur-md cursor-pointer"
      />

      {/* Sheet Container */}
      <motion.div
        id="modal-sheet"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative w-full max-w-4xl bg-white dark:bg-[#0A0A0A] rounded-3xl border border-neutral-200/80 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden max-h-[85vh] z-10"
      >
        {/* Subtle orange gradient overlay (light & dark) to match site accents */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-[#FF5A09]/6 via-[#F3843E]/4 to-[#FF9900]/6" />
        
        {/* Floating Close Button */}
        <button
          id="modal-close-trigger"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-950/20 hover:bg-slate-950/40 text-white dark:bg-neutral-805 dark:hover:bg-neutral-800 text-slate-800 dark:text-slate-100 backdrop-blur transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          <X size={20} />
        </button>

        {/* Modal Scrollable Core */}
        <div className="overflow-y-auto w-full">
          
          {/* Header Banner Background */}
          <div className="relative h-64 sm:h-76 w-full overflow-hidden bg-slate-100">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-6 sm:p-8" />
            
            {/* Title Inside Banner */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 text-left">
              <span className="font-mono text-[10px] font-bold uppercase text-[#FF9900] bg-orange-950/85 px-2.5 py-1 rounded-md border border-[#FF5A09]/30">
                {project.category === "ai" && "Artificial Intelligence"}
                {project.category === "full-stack" && "Full Stack"}
                {project.category === "ui-ux" && "Interaction UI/UX"}
                {project.category === "aiot" && "Edge AIoT"}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white mt-3 select-all tracking-tight leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Grid Layout of Details */}
          <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 text-left bg-white dark:bg-[#0A0A0A] transition-colors">
            
            {/* Left Column (8-Grid): Overview of Thesis, Specs & Key Features */}
            <div className="md:col-span-8 space-y-6 sm:space-y-8">
              
              {/* Context Block */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-lg text-slate-950 dark:text-slate-100 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-zinc-400" />
                  Technical Case Briefing
                </h4>
                <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed sm:text-base select-all">
                  {project.caseStudy.overview}
                </p>
              </div>

              {/* Functional Attributes List */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-lg text-slate-955 dark:text-slate-100 flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#FF5A09]" />
                  Key Implementations & Features
                </h4>
                
                <ul className="grid grid-cols-1 gap-3.5 pl-0">
                  {project.caseStudy.features.map((feat, index) => (
                    <li
                      key={index}
                      className="p-3.5 rounded-2xl border border-neutral-100 dark:border-neutral-850 bg-slate-50/50 dark:bg-neutral-900/60 flex gap-3 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200"
                    >
                      <span className="text-[#FF5A09] dark:text-[#FF9900] font-bold select-none">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column (4-Grid): Sidebar of Meta Attributes */}
            <div className="md:col-span-4 space-y-5">
              
              {/* Project External Links Shortcut */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="p-4 rounded-2xl border border-neutral-150 dark:border-neutral-850 bg-slate-50 dark:bg-neutral-900/60 space-y-3">
                  <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Repository & Live Demo
                  </span>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-2.5 bg-neutral-900 hover:bg-neutral-850 text-white rounded-xl font-mono text-xs font-bold transition-all border border-neutral-800"
                    >
                      <Github size={14} />
                      <span>Explore GitHub</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-2.5 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white rounded-xl font-mono text-xs font-bold transition-all shadow-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live Deployment</span>
                    </a>
                  )}
                </div>
              )}

              {/* Role block */}
              <div className="p-4 rounded-2xl border border-neutral-155 dark:border-neutral-850 bg-slate-50 dark:bg-neutral-900/60">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  My Focus Role
                </span>
                <span className="font-sans font-bold text-sm text-slate-900 dark:text-white leading-snug block">
                  {project.caseStudy.role}
                </span>
              </div>

              {/* Outcome status block */}
                <div className="p-4 rounded-2xl border border-orange-500/10 dark:border-orange-500/20 bg-[#FF5A09]/5 dark:bg-[#221008]/40">
                <span className="font-mono text-[9px] font-bold text-[#FF5A09] dark:text-[#FF9900] uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Award size={10} />
                  Case Output / Impact
                </span>
                <span className="font-sans font-semibold text-xs text-slate-800 dark:text-slate-200 leading-relaxed block">
                  {project.caseStudy.outcome}
                </span>
              </div>

              {/* Complete technical chips */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Technologies Involved
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-xl font-mono text-[10px] font-bold text-slate-850 dark:text-neutral-200 bg-slate-50 dark:bg-neutral-900/60 border border-slate-150 dark:border-neutral-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Sticky footer close helper */}
          <div className="px-6 sm:px-8 py-5 border-t border-slate-100 dark:border-neutral-850 bg-slate-50/80 dark:bg-[#0A0A0A] flex justify-end gap-3 rounded-b-3xl">
            <button
              id="case-study-bottom-close"
              onClick={onClose}
              className="px-4 py-2 bg-slate-250 hover:bg-slate-300 dark:bg-neutral-805 dark:hover:bg-neutral-800 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl cursor-pointer"
            >
              Exit Case Study
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
