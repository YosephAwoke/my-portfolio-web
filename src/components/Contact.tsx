import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address.";
    
    if (!formData.subject.trim()) return "Please enter a subject.";
    if (!formData.message.trim()) return "Please enter your message.";
    if (formData.message.trim().length < 10) return "Message must be at least 10 characters long.";
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("loading");

      try {
      // Submit to internal API route; on Vercel or Render this will call server-side delivery
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.ok || data.success)) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || data.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-transparent transition-colors relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,90,9,0.015),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Title Group */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16 sm:mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20 px-3.5 py-1.5 rounded-full shadow-xs">
            Connect
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            Initiate Contact
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] rounded mt-3" />
        </div>

        {/* Form and info details block split-grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel (5-grid/12): Contact details */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-xs">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF5A09] font-extrabold block">
                Collaboration Request
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight mt-2">
                Let's Build Something Notable
              </h3>
              <p className="text-slate-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mt-3">
                Have a demanding research problem, a clean software requirement, or an R&D roadmap? Fill inside the details, and I will align to respond in 24 hours.
              </p>
            </div>

            <div className="space-y-3.5 mt-8">
              
              {/* Email Entry: Gorgeous Orange-Amber Gradient Highlighting */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#FF5A09]/30 dark:border-[#FF5A09]/50 bg-gradient-to-r from-orange-100/10 via-transparent to-[#FF5A09]/10 dark:from-[#2e1d15]/50 dark:via-[#1c120e]/60 dark:to-[#221008]/40 backdrop-blur-xs shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5A09] to-[#FF9900] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[8px] font-bold text-slate-400 dark:text-neutral-500 uppercase block">
                    Direct Email
                  </span>
                  <a
                    id="contact-link-email"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-sans font-bold text-xs sm:text-sm text-slate-880 hover:text-[#FF5A09] dark:text-neutral-100 dark:hover:text-[#FF9900] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone Entry */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-150 dark:border-brand-gray-dark/40 bg-white/60 dark:bg-neutral-950/40">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/5 flex items-center justify-center text-[#FF5A09] shrink-0">
                  <Phone size={16} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[8px] font-bold text-slate-400 dark:text-[#FF5A09] uppercase block">
                    Phone Core
                  </span>
                  <a
                    id="contact-link-phone"
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-sans font-bold text-xs sm:text-sm text-slate-800 hover:text-[#FF5A09] dark:text-neutral-200 dark:hover:text-[#FF9900] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Entry */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-150 dark:border-brand-gray-dark/40 bg-white/60 dark:bg-neutral-950/40">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-950/40 flex items-center justify-center text-[#FF5A09] dark:text-[#FF9900] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="font-mono text-[8px] font-bold text-slate-400 dark:text-neutral-500 uppercase block">
                    Office Base
                  </span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-slate-800 dark:text-neutral-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right panel (7-grid/12): Contact Form Deck */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white via-slate-50/60 to-orange-50/20 dark:from-[#2e2e2e]/90 dark:via-[#1c1c1c]/95 dark:to-[#121212]/40 border border-neutral-200/80 dark:border-brand-gray-dark/50 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xs">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* Success view */
                <motion.div
                  id="contact-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4 h-full"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950/50 text-[#FF5A09] dark:text-[#FF9900] flex items-center justify-center shadow-xs"
                  >
                    <CheckCircle2 size={30} />
                  </motion.div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-lg text-slate-950 dark:text-white leading-snug">
                      Transmission Confirmed
                    </h3>
                    <p className="text-slate-500 dark:text-neutral-455 text-xs sm:text-sm max-w-sm">
                      Your message has been processed. Yoseph will review and respond directly to your provided email address.
                    </p>
                  </div>
                  <button
                    id="contact-success-reset"
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] hover:scale-[1.02] text-white font-bold text-xs rounded-xl cursor-pointer transition-transform shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* Main Interactive Form view */
                <motion.form
                  id="contact-form-core"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left h-full flex flex-col justify-between"
                >
                  {/* Validation Error banner if present */}
                  {status === "error" && errorMessage && (
                    <motion.div
                      id="contact-error-banner"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-900/60 text-rose-700 dark:text-rose-450 flex gap-2.5 text-xs items-center"
                    >
                      <AlertCircle size={15} className="text-rose-550 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Name and Email side-by-side on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-[9px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Yoseph Awoke"
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950 text-slate-800 dark:text-slate-100 text-xs sm:text-sm focus:border-[#FF5A09] dark:focus:border-[#FF5A09] focus:ring-1 focus:ring-[#FF5A09]/20 outline-none transition-all disabled:opacity-55"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-[9px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950 text-slate-800 dark:text-slate-100 text-xs sm:text-sm focus:border-[#FF5A09] dark:focus:border-[#FF5A09] focus:ring-1 focus:ring-[#FF5A09]/20 outline-none transition-all disabled:opacity-55"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-mono text-[9px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Collaboration R&D"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950 text-slate-800 dark:text-slate-100 text-xs sm:text-sm focus:border-[#FF5A09] dark:focus:border-[#FF5A09] focus:ring-1 focus:ring-[#FF5A09]/20 outline-none transition-all disabled:opacity-55"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5 flex-grow flex flex-col">
                    <label htmlFor="contact-message" className="font-mono text-[9px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">
                      Message Payload
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly expand on scope, timeline, and parameters..."
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950 text-slate-800 dark:text-slate-100 text-xs sm:text-sm focus:border-[#FF5A09] dark:focus:border-[#FF5A09] focus:ring-1 focus:ring-[#FF5A09]/20 outline-none transition-all disabled:opacity-55 resize-none flex-grow"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-trigger"
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer shadow-xs transition-transform disabled:opacity-55 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Transmitting Packets...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
