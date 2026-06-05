import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Sparkles, RefreshCw, Bot, User, ArrowRight } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "Double MSc degrees & GPAs?",
  "HUST research on botanical Specimen?",
  "Unity Park role under Prime Minister?",
  "What AI projects has Yoseph made?",
  "How can I contact Yoseph?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! 👋 I'm Yoseph's Virtual Assistant. I have complete access to his certified academic transcripts, research thesis details, PMO civic projects, and deep learning engineering focus.\n\nAsk me anything about Yoseph, or choose a prompt below to get started!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of conversation thread
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    setErrorMsg(null);
    setInputValue("");

    // Add user message to conversation
    const userMessageId = `user-${Date.now()}`;
    const userMessage: Message = {
      id: userMessageId,
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Map history payload
      const historyPayload = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Communication error");
      }

      const data = await res.json();
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message || "Failed to reach the AI engine. Please confirm that your GEMINI_API_KEY is configured in the Settings > Secrets modal."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Hello! 👋 Search has been reset. What other questions do you have regarding Yoseph's technical experience?",
        timestamp: new Date(),
      },
    ]);
    setErrorMsg(null);
  };

  return (
    <>
       {/* Floating Animated Wake-up Trigger Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              id="chatbot-trigger-button"
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="pointer-events-auto flex items-center gap-2.5 px-4.5 py-4 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white rounded-2xl shadow-xl cursor-pointer select-none transition-shadow relative overflow-hidden group border border-[#FF5A09]/10"
              aria-label="Toggle Ask Yoseph Artificial Intelligence Representative"
            >
              {/* Animated pulsating background aura effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute -inset-1 rounded-2xl bg-orange-500/20 blur opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition-opacity pointer-events-none" />
              
              <div className="relative flex items-center justify-center shrink-0">
                <Bot size={20} className="text-white animate-bounce-slow" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400 border border-orange-600 rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400 border border-orange-600 rounded-full" />
              </div>
              <span className="relative font-display font-bold text-xs sm:text-sm tracking-wide">
                Ask Yoseph AI
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Dynamic Chat Pane Popover Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="chatbot-overlay-pane"
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="pointer-events-auto w-[calc(100vw-32px)] sm:w-[420px] max-w-[500px] h-[550px] sm:h-[600px] bg-white dark:bg-[#1e1e1e] dark:bg-gradient-to-b dark:from-[#2e2e2e]/95 dark:to-[#121212]/95 rounded-3xl shadow-2xl border border-neutral-200 dark:border-brand-gray-dark/50 flex flex-col overflow-hidden"
            >
              {/* Header Box */}
              <div className="px-5 py-4 bg-slate-50 dark:bg-neutral-900/60 border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5A09] to-[#FF9900] text-white flex items-center justify-center shrink-0">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-neutral-100 tracking-tight flex items-center gap-1.5 leading-none">
                      Yoseph's AI Rep
                      <Sparkles size={11} className="text-[#FF9900] animate-pulse" />
                    </h3>
                    <p className="text-[10px] text-slate-500 dark:text-neutral-450 mt-1 font-mono leading-none">
                      Powered by Gemini 3.5
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleClearHistory}
                    title="Clear history log"
                    className="p-2 text-slate-400 hover:text-slate-600 dark:text-neutral-500 dark:hover:text-neutral-300 rounded-lg hover:bg-slate-100/50 dark:hover:bg-neutral-855 transition-colors cursor-pointer"
                  >
                    <RefreshCw size={14} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    title="Collapse dashboard window"
                    className="p-2 text-slate-400 hover:text-slate-600 dark:text-neutral-500 dark:hover:text-neutral-300 rounded-lg hover:bg-slate-100/50 dark:hover:bg-neutral-855 transition-colors cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Message scroll thread panel */}
              <div className="flex-grow overflow-y-auto px-5 py-4 bg-white/40 dark:bg-transparent space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 max-w-[85%] ${
                      msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    }`}
                  >
                    {/* Role Avatar Shield */}
                    <div
                      className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white"
                          : "bg-slate-100 dark:bg-neutral-900 text-slate-705 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-800"
                      }`}
                    >
                      {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                    </div>

                    {/* Text block container bubble */}
                    <div
                      className={`px-4.5 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed overflow-hidden break-words whitespace-pre-wrap text-left ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white rounded-tr-none shadow-xs"
                          : "bg-slate-100/90 dark:bg-neutral-900/95 text-slate-900 dark:text-slate-100 border border-neutral-200/40 dark:border-neutral-800 rounded-tl-none font-sans shadow-xs"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Animated typing dots simulation */}
                {isLoading && (
                  <div className="flex gap-3 max-w-[85%] mr-auto items-start">
                    <div className="w-7.5 h-7.5 rounded-lg bg-slate-100 dark:bg-neutral-900 text-slate-450 flex items-center justify-center shrink-0 border border-neutral-200/50 dark:border-neutral-800">
                      <Bot size={12} />
                    </div>
                    <div className="px-4 py-3 bg-slate-100/90 dark:bg-neutral-900/95 text-slate-500 rounded-2xl rounded-tl-none border border-neutral-200/40 dark:border-neutral-850 flex items-center gap-1 bg-clip-border text-[11px] font-mono tracking-wider">
                      <span>Analyzing credentials</span>
                      <span className="inline-flex gap-0.5 ml-1">
                        <span className="w-1.5 h-1.5 bg-[#FF5A09] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-[#F3843E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </span>
                    </div>
                  </div>
                )}

                {/* Error Banner inside stream block handles keys error beautifully */}
                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 dark:bg-rose-950/25 border border-rose-150 dark:border-rose-900/50 rounded-2xl text-xs text-rose-700 dark:text-rose-450 text-left font-sans leading-relaxed">
                    <p className="font-bold flex items-center gap-1.5 mb-1 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      Virtual Coordinator Offline
                    </p>
                    {errorMsg}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions shelf */}
              <div className="px-5 py-2.5 bg-slate-50/50 dark:bg-[#121212]/50 border-t border-neutral-200/40 dark:border-neutral-800 flex flex-col shrink-0 gap-1.5">
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[#FF5A09] text-left px-1 select-none flex items-center gap-1">
                  <Sparkles size={10} className="text-[#FF9900] shrink-0" />
                  Instant Referral Inquiries
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-[70px] overflow-y-auto pr-1">
                  {SUGGESTIONS.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={isLoading}
                      onClick={() => handleSendMessage(suggestion)}
                      className="px-2.5 py-1 text-[10px] sm:text-xs font-medium text-slate-700 dark:text-neutral-200 hover:text-white hover:bg-gradient-to-r hover:from-[#FF5A09] hover:to-[#FF9900] hover:border-transparent bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-all cursor-pointer text-left shrink-0 max-w-full truncate"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom prompt composition form control */}
              <form
                onSubmit={handleFormSubmit}
                className="px-4 py-3 bg-slate-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2.5 shrink-0"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  placeholder="Type a question about Yoseph..."
                  className="flex-grow px-4 py-2.5 text-xs sm:text-sm bg-white dark:bg-neutral-950 text-slate-800 dark:text-slate-100 rounded-xl border border-neutral-200 dark:border-neutral-800 focus:border-[#FF5A09] focus:outline-none focus:ring-1 focus:ring-[#FF5A09]/20 placeholder-slate-400 dark:placeholder-neutral-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2.5 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] text-white rounded-xl hover:shadow-xs disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-transform cursor-pointer"
                  aria-label="Submit Question"
                >
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
