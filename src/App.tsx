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
      {/* Floating orange & amber ambient glow backdrops */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FF5A09]/5 dark:bg-[#FF5A09]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#FF9900]/5 dark:bg-[#FF9900]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-[#F3843E]/5 dark:bg-[#F3843E]/10 blur-[100px] pointer-events-none" />

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
