import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { Brain, Code, Cpu, Database, Layers, Server, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  // Theme state persisted across user sessions in localStorage
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    // High-contrast, sleek premium dark mode looks supreme for researchers!
    return true; 
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const ambientTechIcons = [
    { Icon: Brain, top: "16%", side: "left-[4%]", size: 38, delay: 0, color: "text-[#FF5A09]" },
    { Icon: Code, top: "28%", side: "right-[5%]", size: 42, delay: 0.8, color: "text-[#FF9900]" },
    { Icon: Cpu, top: "42%", side: "left-[6%]", size: 40, delay: 1.4, color: "text-[#F3843E]" },
    { Icon: Database, top: "55%", side: "right-[6%]", size: 39, delay: 2.1, color: "text-[#FF5A09]" },
    { Icon: Layers, top: "68%", side: "left-[5%]", size: 41, delay: 2.8, color: "text-[#FF9900]" },
    { Icon: Server, top: "80%", side: "right-[4%]", size: 43, delay: 3.4, color: "text-[#F3843E]" },
    { Icon: Terminal, top: "91%", side: "left-[7%]", size: 37, delay: 4.1, color: "text-[#FF5A09]" },
  ];

  // Synchronize document elements directly to activate dark / light classes correctly
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen theme-bg theme-text-primary transition-colors duration-300 w-full relative font-sans overflow-hidden">
      {/* Alternating ambient gradient washes across the long page */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(105deg,rgba(255,90,9,0.08),transparent_22%,transparent_72%,rgba(255,153,0,0.08)),linear-gradient(245deg,transparent_18%,rgba(243,132,62,0.045)_45%,transparent_70%)] dark:bg-[linear-gradient(105deg,rgba(255,90,9,0.18),transparent_24%,transparent_70%,rgba(255,153,0,0.16)),linear-gradient(245deg,transparent_12%,rgba(243,132,62,0.09)_45%,transparent_76%)]" />
      <div className="absolute top-[24%] right-[-12%] h-[34rem] w-[42rem] rotate-[-18deg] bg-gradient-to-l from-[#FF9900]/12 via-[#FF5A09]/6 to-transparent dark:from-[#FF9900]/22 dark:via-[#FF5A09]/13 dark:to-transparent blur-[72px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-14%] h-[34rem] w-[44rem] rotate-[16deg] bg-gradient-to-r from-[#FF5A09]/11 via-[#F3843E]/6 to-transparent dark:from-[#FF5A09]/22 dark:via-[#F3843E]/13 dark:to-transparent blur-[72px] pointer-events-none" />
      <div className="absolute top-[74%] right-[-15%] h-[32rem] w-[44rem] rotate-[-14deg] bg-gradient-to-l from-[#F3843E]/11 via-[#FF9900]/6 to-transparent dark:from-[#F3843E]/22 dark:via-[#FF9900]/13 dark:to-transparent blur-[72px] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {ambientTechIcons.map(({ Icon, top, side, size, delay, color }) => (
          <motion.div
            key={`${top}-${side}`}
            className={`absolute ${side} ${color} opacity-[0.11] dark:opacity-[0.23] hidden md:block`}
            style={{ top }}
            initial={{ y: 0, rotate: -4 }}
            animate={{ y: [0, -18, 0], rotate: [-4, 5, -4], opacity: [0.12, 0.24, 0.12] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Icon size={size} strokeWidth={1.45} />
          </motion.div>
        ))}
        <motion.div
          className="absolute right-[9%] top-[36%] text-[#FF9900] opacity-[0.14] dark:opacity-[0.28] hidden lg:block"
          animate={{ scale: [1, 1.18, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={48} strokeWidth={1.35} />
        </motion.div>
      </div>

      {/* Dynamic Header & Sticky glass navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Single Page Sections Deck */}
      <main className="w-full">
        {/* Landing Hero frame containing rotating titles & portrait */}
        <Hero />

        {/* Narrative & timeline Education roadmap panel */}
        <About />

        {/* Categorized responsive skills grid */}
        <Skills />

        {/* Selected cases and filtering mechanism + study overlays */}
        <Projects />

        {/* Real-world PMO Unity Park/Techin work timelines */}
        <Experience />

        {/* Functional FormSubmit forwarding and input validators */}
        <Contact />
      </main>

      {/* Footer with email links and location logs */}
      <Footer />

      {/* Floating interactive virtual AI representative */}
      <Chatbot />
    </div>
  );
}
