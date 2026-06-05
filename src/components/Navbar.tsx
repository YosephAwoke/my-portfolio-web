import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Terminal, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import josLogo from "../assets/images/Jos-logo.png";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 180; // offset for nav header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      const secId = href.replace("#", "");
      setActiveSection(secId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 bg-white/80 dark:bg-[#0A0A0A]/85 backdrop-blur-md shadow-xs border-b border-slate-100/60 dark:border-neutral-900/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo with clean custom typography */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 group text-slate-950 dark:text-white"
          >
            <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {!logoError ? (
                <img
                  src={josLogo}
                  alt="Jos Logo"
                  className="w-full h-full object-contain [filter:drop-shadow(1px_1px_0px_#000)_drop-shadow(-1px_-1px_0px_#000)_drop-shadow(1px_-1px_0px_#000)_drop-shadow(-1px_1px_0px_#000)] dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.15))]"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] flex items-center justify-center text-white font-black text-xl shadow-md border border-white/10">
                  Y
                </div>
              )}
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-tight text-base sm:text-[20px] leading-tight">
                  Yoseph Awoke
                </span>
                <span className="px-1.5 py-0.5 rounded-md font-mono text-[12px] font-extrabold text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20">
                  jos
                </span>
              </div>
              <span className="font-mono text-[13px] text-slate-500 dark:text-neutral-450 mt-0.5 leading-none">
                full-stack & research
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-1 lg:space-x-1.5 relative z-10">
              {navLinks.map((link) => {
                const isCurrent = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <a
                      id={`nav-link-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative px-3.5 py-2 text-[13px] sm:text-sm font-semibold tracking-wide transition-colors duration-300 rounded-lg block ${
                        isCurrent
                          ? "text-[#FF5A09]"
                          : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Springy Active Highlight Capsule */}
                      {isCurrent && (
                        <motion.span
                          layoutId="navbar-active-capsule"
                          className="absolute inset-0 rounded-lg bg-[#FF5A09]/10 border border-[#FF5A09]/20"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Dark mode switch and Call to Action */}
            <div className="flex items-center gap-4 animate-fade-in">
              <button
                id="theme-toggler"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-slate-705 dark:text-slate-300 transition-colors cursor-pointer border border-transparent dark:border-neutral-800"
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <a
                id="nav-cta"
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center gap-1.5 px-4.5 py-2.5 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] hover:scale-[1.02] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all group cursor-pointer"
              >
                Contact Me
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile responsive triggers */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="theme-toggler-mobile"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 transition-colors"
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-3 overflow-hidden shadow-lg"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isCurrent = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <a
                      id={`mobile-nav-link-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                        isCurrent
                          ? "bg-orange-500/10 text-[#FF5A09]"
                          : "text-slate-705 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="pt-2 px-4">
              <a
                id="mobile-nav-cta"
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center justify-center gap-1.5 w-full py-3.5 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white font-bold rounded-xl text-center shadow-md"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
