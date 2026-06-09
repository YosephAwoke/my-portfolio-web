import React, { useState, useEffect, useCallback } from "react";
import { Cpu, Brain, Code, Database, Radio, ArrowRight, Sparkles, Server, MapPin, Mail, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

// Background floating icons definition - moved outside to prevent re-allocation
const FLOATING_ICONS = [
  { Icon: Brain, color: "text-indigo-400 dark:text-indigo-500", size: 24, top: "12%", left: "8%", delay: 0, className: "animate-floating" },
  { Icon: Cpu, color: "text-emerald-400 dark:text-emerald-500", size: 20, top: "20%", left: "92%", delay: 1, className: "animate-floating-delayed" },
  { Icon: Code, color: "text-indigo-500 dark:text-indigo-400", size: 26, top: "75%", left: "12%", delay: 2, className: "animate-floating-slow" },
  { Icon: Database, color: "text-emerald-550 dark:text-emerald-400", size: 22, top: "65%", left: "88%", delay: 1.5, className: "animate-floating" },
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [portraitError, setPortraitError] = useState(false);

  // Cycle through different sub-titles beautifully
  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 sm:py-32 flex items-center justify-center overflow-hidden bg-slate-100/10 dark:bg-transparent transition-colors"
    >
      {/* Grid Pattern and Gradients Overlay matching Bento Grid Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Floating Sparkles in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOATING_ICONS.map((item, idx) => (
          <div
            key={idx}
            className={`absolute pointer-events-none ${item.color} ${item.className} opacity-20 dark:opacity-30 hidden md:block`}
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            <item.Icon size={item.size} />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Main Bento Grid layout deck */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Card 1: Giga Welcome Intro Box (col-span-1 md:col-span-8) */}
          <div className="col-span-1 md:col-span-8 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/30 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300">
            
            {/* Top row with status badge and tech watermark icon */}
            <div className="flex justify-between items-start mb-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50/80 dark:bg-neutral-950/80 border border-slate-200/60 dark:border-neutral-850 backdrop-blur"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF5A09] animate-pulse" />
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={11} className="text-[#FF5A09]" />
                  Available for Senior Roles & R&D Projects
                </span>
              </motion.div>
              
              <div className="text-[#FF5A09] dark:text-brand-gray-dark/50 opacity-20 dark:opacity-25 hidden sm:block">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            {/* Middle row details - Giant titles */}
            <div className="space-y-4 mb-8 pt-4 sm:pt-12">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] text-left">
                Yoseph <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900]">{PERSONAL_INFO.name.split(" ")[1]}</span>
              </h1>
              
              {/* Animated titles bar */}
              <div className="h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={subtitleIndex}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.35 }}
                    className="font-mono text-xs sm:text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900]"
                  >
                    🚀 {PERSONAL_INFO.subtitles[subtitleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="max-w-2xl text-slate-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-sans text-left">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Bottom action trigger elements */}
            <div className="flex flex-wrap gap-3.5 pt-4 border-t border-slate-100 dark:border-neutral-800/85">
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo("#projects")}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] hover:opacity-90 text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all group shadow-xs"
              >
                View Selected Works
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-cta-contact"
                onClick={() => handleScrollTo("#contact")}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 dark:bg-neutral-950/65 dark:hover:bg-neutral-900 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-neutral-800/80 font-bold text-xs sm:text-sm rounded-xl cursor-pointer transition-colors"
              >
                Inquire Proposal
              </button>
            </div>

          </div>

          {/* Card 2: Interactive portrait photo Bento Block (col-span-4) */}
          <div className="col-span-1 md:col-span-4 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/30 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl relative group shadow-xs flex flex-col justify-between min-h-[380px] md:min-h-auto">
            
            {/* Ambient behind portrait highlight pool */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FF5A09]/10 via-transparent to-[#FF9900]/10 blur opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none" />

            {/* Tech Skills Floating Badges (Right Top Corner / Glass design floating 50% inside, 50% outside) */}
            <div className="absolute top-4 -right-4 z-30 flex flex-col gap-3 pointer-events-none">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -1, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="px-4 py-2 rounded-full bg-slate-100/80 dark:bg-black/50 border border-[#FF5A09]/40 dark:border-[#FF5A09]/30 backdrop-blur-md shadow-md flex items-center gap-2 text-slate-900 dark:text-orange-200 select-none"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A09] shadow-[0_0_10px_#FF5A09]" />
                <span className="font-mono text-xs font-black tracking-wider uppercase">Full Stack</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  x: [0, -3, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="px-4 py-2 rounded-full bg-slate-100/80 dark:bg-black/50 border border-[#FF9900]/40 dark:border-[#FF9900]/30 backdrop-blur-md shadow-md flex items-center gap-2 text-slate-900 dark:text-amber-200 select-none"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900] shadow-[0_0_10px_#FF9900]" />
                <span className="font-mono text-xs font-black tracking-wider uppercase">AI</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  x: [0, 4, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                className="px-4 py-2 rounded-full bg-slate-100/80 dark:bg-black/50 border border-[#F3843E]/40 dark:border-[#F3843E]/30 backdrop-blur-md shadow-md flex items-center gap-2 text-slate-900 dark:text-orange-100 select-none"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#F3843E] shadow-[0_0_10px_#F3843E]" />
                <span className="font-mono text-xs font-black tracking-wider uppercase">UI/UX</span>
              </motion.div>
            </div>

            {/* Absolute translucent background gradient cover indicator */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10 rounded-3xl pointer-events-none" />

            {/* Main high quality scaled and cropped layout image view */}
            <div className="absolute inset-0 bg-transparent flex items-center justify-center pt-4 px-4 pb-24">
              {!portraitError ? (
                <img
                  id="portrait-image-landing"
                  src={PERSONAL_INFO.portrait}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="max-h-[100%] max-w-[96%] object-contain rounded-2xl transition-all duration-700 ease-out group-hover:scale-[1.03] shadow-md dark:shadow-[#FF5A09]/5"
                  onError={() => setPortraitError(true)}
                />
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#FF5A09]/10 via-[#F3843E]/5 to-[#FF9900]/15 dark:from-[#331100]/50 dark:via-[#220d03]/65 dark:to-[#1a0800]/20 flex items-center justify-center border-2 border-[#FF5A09]/30 relative overflow-hidden backdrop-blur-md shadow-2xl group/avatar transition-all duration-500 hover:border-[#FF5A09]/60">
                  {/* Glowing core orbital effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,9,0.15),transparent_60%)] pointer-events-none animate-pulse" />
                  
                  {/* Decorative modern technical grid lines */}
                  <div className="absolute inset-0 opacity-15 dark:opacity-20 bg-[linear-gradient(rgba(255,90,9,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,90,9,0.25)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  
                  {/* Core Monogram */}
                  <div className="relative flex flex-col items-center justify-center z-10 text-center">
                    <span className="font-display font-black text-5xl sm:text-6xl text-slate-900 dark:text-orange-50 tracking-widest drop-shadow-[0_4px_10px_rgba(255,90,9,0.2)] select-none">
                      YA
                    </span>
                    <span className="font-mono text-[9px] font-black tracking-widest text-[#FF5A09] uppercase mt-2 bg-orange-500/10 dark:bg-[#FF5A09]/20 px-2.5 py-0.5 rounded-full border border-[#FF5A09]/30">
                      R&D Core
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Inner bottom overlay stats badge coordinates */}
            <div className="absolute bottom-5 left-5 right-5 z-20 text-left bg-white/70 dark:bg-neutral-950/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-100 dark:border-neutral-800/80">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF5A09] font-extrabold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#FF5A09] rounded-full animate-ping" />
                Active Developer Workspace
              </span>
              <p className="text-slate-800 dark:text-white font-display font-black text-xs sm:text-sm tracking-tight mt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>

          </div>

          {/* Row 2: Wider compact metrics rail */}
          <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:-mx-10 lg:-mx-16 xl:-mx-24">
            {/* Parallel Metrics Card */}
            <div className="col-span-1 md:col-span-4 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl p-4 flex items-center shadow-xs hover:border-brand-orange/30 transition-all duration-300 gap-4 min-h-[118px] text-left">
              <div className="flex flex-col justify-center shrink-0">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Brain size={14} className="text-[#FF5A09]" />
                  <span className="font-mono text-[9px] font-bold text-[#FF5A09] uppercase tracking-widest bg-orange-500/10 dark:bg-[#FF5A09]/15 px-2 py-0.5 rounded">Duration</span>
                </div>
                <p className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white leading-none whitespace-nowrap">6+ Years</p>
              </div>
              <div className="h-[72%] border-l border-slate-150 dark:border-neutral-800/60 pl-4 flex flex-col justify-center">
                <p className="font-sans text-[11px] sm:text-xs text-slate-700 dark:text-neutral-200 leading-relaxed select-all">
                  Specialized track record in software engineering, deep learning architectures, and scalable full-stack development.
                </p>
              </div>
            </div>

            {/* Graduate Focus + Core Domain */}
            <div className="col-span-1 md:col-span-5 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl p-4 flex flex-col sm:flex-row sm:items-center shadow-xs min-h-[118px] hover:border-brand-orange/30 transition-all duration-300 gap-4 text-left">
              <div className="shrink-0 sm:w-36">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Code size={14} className="text-[#FF5A09]" />
                  <span className="font-mono text-[9px] font-bold text-[#FF5A09] uppercase tracking-widest bg-orange-500/10 dark:bg-[#FF5A09]/15 px-2 py-0.5 rounded">Graduate Core</span>
                </div>
                <h4 className="font-display font-black text-4xl sm:text-[2.6rem] text-slate-950 dark:text-white leading-none tracking-tight whitespace-nowrap">
                  2x MSc
                </h4>
                <p className="mt-1 font-mono text-[10px] font-bold text-slate-600 dark:text-neutral-300 uppercase tracking-wider">
                  CGPA 3.84
                </p>
              </div>

              <div className="sm:border-l border-slate-150 dark:border-neutral-800/60 sm:pl-4 min-w-0 flex-1">
                <p className="font-sans text-[11px] sm:text-xs text-slate-700 dark:text-neutral-200 leading-snug">
                  ICE at Huazhong University of Science and Technology (HUST), and Computer Science at American College of Technology (ACT).
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Deep Learning", "Fine-Grained Vision", "Full-Stack Apps"].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-lg bg-slate-100/90 dark:bg-neutral-950/70 border border-slate-200/80 dark:border-neutral-800/80 text-[10px] font-bold text-slate-700 dark:text-neutral-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Clean Get in Touch */}
            <button
              onClick={() => handleScrollTo("#contact")}
              className="col-span-1 md:col-span-3 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] hover:opacity-95 text-white rounded-3xl p-4 flex flex-col justify-between group cursor-pointer transition-all duration-300 shadow-xs relative overflow-hidden min-h-[118px]"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold text-orange-100 uppercase tracking-widest">Connect Directly</span>
                <Mail size={28} className="text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
              </div>

              <div className="text-left relative z-10 min-w-0">
                <p className="text-[11px] text-orange-100/90 font-medium leading-tight">Inquire for core collaboration:</p>
                <p className="text-[15px] font-black truncate font-bold select-all text-white mt-1 leading-snug" title={PERSONAL_INFO.email}>
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
