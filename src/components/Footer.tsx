import React from "react";
import { Laptop, Linkedin, Mail, Phone, Calendar, ArrowUp, Github } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-[#0B0B0C] text-slate-400 py-12 sm:py-16 border-t border-neutral-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic vertical splits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-neutral-900">
          
          {/* Brand/Credentials statement column */}
          <div className="md:col-span-5 text-left space-y-3.5">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] flex items-center justify-center font-bold text-base shadow-xs text-white">
                Y
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Blending advanced Deep Learning computer vision research with solid full-stack engineering to build highly resilient digital solutions.
            </p>
          </div>

          {/* Academic & work references column */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-mono text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-3 select-none">
              Academic Citations
            </h4>
            <ul className="space-y-1.5 pl-0">
              <li className="text-xs flex items-center gap-1.5 text-neutral-400">
                <span className="w-1.5 h-1.5 bg-[#FF5A09] rounded-full" />
                Huazhong University of Science and Tech. (HUST)
              </li>
              <li className="text-xs flex items-center gap-1.5 text-neutral-400">
                <span className="w-1.5 h-1.5 bg-[#FF5A09] rounded-full" />
                American College of Technology (ACT)
              </li>
              <li className="text-xs flex items-center gap-1.5 text-neutral-400">
                <span className="w-1.5 h-1.5 bg-[#FF5A09] rounded-full" />
                Jigjiga University Software Engineering
              </li>
            </ul>
          </div>

          {/* Action column links */}
          <div className="md:col-span-3 text-left md:text-right space-y-4">
            <div className="flex justify-start md:justify-end gap-3.5">
              <a
                id="footer-social-link-github"
                href="https://github.com/yosephawoke"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF5A09] hover:bg-[#FF5A09]/10 hover:text-[#FF5A09] flex items-center justify-center transition-colors shadow-xs"
                title="GitHub Profile"
              >
                <Github size={19} />
              </a>
              <a
                id="footer-social-link-linkedin"
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF5A09] hover:bg-[#FF5A09]/10 hover:text-[#FF5A09] flex items-center justify-center transition-colors shadow-xs"
                title="LinkedIn Link"
              >
                <Linkedin size={19} />
              </a>
              <a
                id="footer-social-link-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF5A09] hover:bg-[#FF5A09]/10 hover:text-[#FF5A09] flex items-center justify-center transition-colors shadow-xs"
                title="Email Link"
              >
                <Mail size={19} />
              </a>
              <a
                id="footer-social-link-phone"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF5A09] hover:bg-[#FF5A09]/10 hover:text-[#FF5A09] flex items-center justify-center transition-colors shadow-xs"
                title="Phone Link"
              >
                <Phone size={19} />
              </a>
            </div>

            <button
              id="footer-scroll-top-trigger"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white hover:underline cursor-pointer bg-neutral-900/50 hover:bg-neutral-900 px-3.5 py-1.5 rounded-xl border border-neutral-800"
            >
              Scroll to Top
              <ArrowUp size={11} />
            </button>
          </div>

        </div>

        {/* Copy lines bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>
            &copy; {currentYear !== 2026 ? "2026 - Present" : "2026"} {PERSONAL_INFO.name}. All Rights Reserved.
          </span>
          <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest flex items-center gap-1.5">
            <Laptop size={11} />
            Built in Addis Ababa, Ethiopia
          </span>
        </div>

      </div>
    </footer>
  );
}
