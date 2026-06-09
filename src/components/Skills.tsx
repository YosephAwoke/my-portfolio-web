import React from "react";
import { Cpu, Terminal, Layers, Database, ShieldCheck, Compass, GitMerge, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGitlab,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpencv,
  SiOpenjdk,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiSpringboot,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { SKILL_CATEGORIES } from "../data";

export default function Skills() {
  const skillMeta: Record<string, { Icon?: IconType; mark: string; tone: string; brandColor?: string }> = {
    "Deep Learning": { Icon: SiTensorflow, mark: "DL", tone: "from-orange-500 to-amber-400", brandColor: "#FF6F00" },
    "Machine Learning": { Icon: SiScikitlearn, mark: "ML", tone: "from-blue-500 to-orange-400", brandColor: "#F7931E" },
    "Computer Vision": { Icon: SiOpencv, mark: "CV", tone: "from-[#FF5A09] to-[#FF9900]", brandColor: "#5C3EE8" },
    "Fine-Grained Classification": { Icon: Cpu as unknown as IconType, mark: "FG", tone: "from-emerald-500 to-teal-400" },
    "Attention Mechanisms": { Icon: Sparkles as unknown as IconType, mark: "AT", tone: "from-rose-500 to-orange-400" },
    "Model Evaluation & Optimization": { Icon: GitMerge as unknown as IconType, mark: "M+", tone: "from-amber-500 to-yellow-400" },
    React: { Icon: SiReact, mark: "Re", tone: "from-sky-500 to-cyan-300", brandColor: "#61DAFB" },
    "Node.js": { Icon: SiNodedotjs, mark: "Nd", tone: "from-green-600 to-lime-400", brandColor: "#5FA04E" },
    Express: { Icon: SiExpress, mark: "Ex", tone: "from-neutral-700 to-neutral-500", brandColor: "#FFFFFF" },
    FastAPI: { Icon: SiFastapi, mark: "Fa", tone: "from-emerald-600 to-teal-400", brandColor: "#009688" },
    TensorFlow: { Icon: SiTensorflow, mark: "Tf", tone: "from-orange-500 to-amber-400", brandColor: "#FF6F00" },
    PyTorch: { Icon: SiPytorch, mark: "Pt", tone: "from-red-500 to-orange-400", brandColor: "#EE4C2C" },
    "Spring Boot": { Icon: SiSpringboot, mark: "Sp", tone: "from-green-600 to-emerald-400", brandColor: "#6DB33F" },
    Laravel: { Icon: SiLaravel, mark: "Lv", tone: "from-red-600 to-rose-400", brandColor: "#FF2D20" },
    Python: { Icon: SiPython, mark: "Py", tone: "from-blue-600 to-yellow-400", brandColor: "#3776AB" },
    Java: { Icon: SiOpenjdk, mark: "Java", tone: "from-red-500 to-orange-400", brandColor: "#FFFFFF" },
    JavaScript: { Icon: SiJavascript, mark: "JS", tone: "from-yellow-400 to-amber-500", brandColor: "#F7DF1E" },
    TypeScript: { Icon: SiTypescript, mark: "TS", tone: "from-blue-600 to-sky-400", brandColor: "#3178C6" },
    Kotlin: { Icon: SiKotlin, mark: "Kt", tone: "from-purple-600 to-orange-400", brandColor: "#7F52FF" },
    SQL: { Icon: Database as unknown as IconType, mark: "SQL", tone: "from-indigo-500 to-blue-400" },
    MongoDB: { Icon: SiMongodb, mark: "Mg", tone: "from-green-600 to-emerald-400", brandColor: "#47A248" },
    MySQL: { Icon: SiMysql, mark: "My", tone: "from-blue-600 to-orange-400", brandColor: "#4479A1" },
    PostgreSQL: { Icon: SiPostgresql, mark: "Pg", tone: "from-blue-700 to-sky-400", brandColor: "#4169E1" },
    SQLite: { Icon: SiSqlite, mark: "Sq", tone: "from-slate-600 to-blue-400", brandColor: "#003B57" },
    "Adobe Photoshop": { mark: "Ps", tone: "from-blue-800 to-cyan-500" },
    "Adobe Illustrator": { mark: "Ai", tone: "from-orange-700 to-amber-400" },
    "Adobe Premiere Pro": { mark: "Pr", tone: "from-purple-800 to-violet-400" },
    "Adobe After Effects": { mark: "Ae", tone: "from-indigo-800 to-purple-400" },
    "UI/UX Prototyping": { Icon: SiFigma, mark: "UX", tone: "from-pink-500 to-orange-400", brandColor: "#F24E1E" },
    "Agile/Scrum": { Icon: GitMerge as unknown as IconType, mark: "Ag", tone: "from-emerald-500 to-lime-400" },
    Kanban: { Icon: Layers as unknown as IconType, mark: "Kb", tone: "from-cyan-500 to-blue-400" },
    Docker: { Icon: SiDocker, mark: "Do", tone: "from-sky-600 to-blue-400", brandColor: "#2496ED" },
    "Git/GitLab": { Icon: SiGitlab, mark: "Git", tone: "from-orange-600 to-red-400", brandColor: "#FC6D26" },
    "CI/CD Pipelines": { Icon: SiGit, mark: "CI", tone: "from-violet-600 to-blue-400", brandColor: "#F05032" },
  };

  const featuredSkills = ["TensorFlow", "PyTorch", "React", "FastAPI", "TypeScript", "Docker"];

  const getSkillMeta = (skill: string) =>
    skillMeta[skill] ?? {
      Icon: undefined,
      mark: skill
        .split(/[\s/.-]+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 3),
      tone: "from-[#FF5A09] to-[#FF9900]",
    };

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
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="skills"
      className="py-14 sm:py-20 bg-gradient-to-b from-slate-100/75 via-white/35 to-slate-100/70 dark:from-neutral-950/60 dark:via-[#191919]/85 dark:to-neutral-950/55 transition-colors relative overflow-hidden border-y border-slate-200/60 dark:border-neutral-800/60"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,90,9,0.055),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(255,153,0,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,90,9,0.075),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(255,153,0,0.05),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-9 sm:mb-11">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A09] bg-orange-500/10 dark:bg-orange-500/15 border border-[#FF5A09]/20 px-3.5 py-1.5 rounded-full shadow-xs">
            Expertise Matrix
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            Technical Skillset Breakdown
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF5A09] via-[#F3843E] to-[#FF9900] rounded mt-2" />
        </div>

        {/* Categories bento grid layout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-4 sm:mb-5 rounded-3xl border border-white/85 dark:border-neutral-700/65 bg-white/78 dark:bg-neutral-900/72 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:shadow-[0_22px_55px_rgba(0,0,0,0.32)] overflow-hidden relative"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF5A09] via-[#F3843E] to-[#FF9900]" />
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-2xl bg-orange-50 dark:bg-neutral-950/70 border border-[#FF5A09]/20 text-[#FF5A09]">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="font-display font-black text-sm sm:text-base text-slate-950 dark:text-white">
                  Production Stack Highlights
                </h3>
                <p className="text-xs text-slate-600 dark:text-neutral-300 mt-0.5">
                  Tools I use to connect research-grade AI with polished full-stack products.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {featuredSkills.map((skill) => {
                const meta = getSkillMeta(skill);
                const Icon = meta.Icon;
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="flex items-center gap-2 rounded-2xl bg-white/80 dark:bg-neutral-950/70 border border-slate-200/80 dark:border-neutral-800/80 px-2.5 py-1.5"
                  >
                    <span className="grid h-8 w-8 place-items-center text-slate-800 dark:text-neutral-100">
                      {Icon ? <Icon size={22} color={meta.brandColor ?? "currentColor"} /> : <span className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-br ${meta.tone}`}>{meta.mark}</span>}
                    </span>
                    <span className="text-xs font-extrabold text-slate-800 dark:text-neutral-100">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className={`p-4 sm:p-5 rounded-3xl border border-white/85 dark:border-neutral-700/65 bg-white/82 dark:bg-neutral-900/76 backdrop-blur-md shadow-[0_14px_36px_rgba(15,23,42,0.07)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.28)] hover:shadow-[0_18px_45px_rgba(255,90,9,0.08)] transition-all duration-300 ${getBorderColor(
                category.name
              )}`}
            >
              {/* Card Header with customized icons */}
              <div className="flex items-center gap-3 mb-4 text-left">
                <div className="p-2 rounded-xl bg-slate-50/90 dark:bg-neutral-950/60 border border-slate-200/80 dark:border-neutral-800">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-neutral-100 leading-tight">
                  {category.name}
                </h3>
              </div>

              {/* Skills Tags inside the card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                {category.skills.map((skill) => {
                  const meta = getSkillMeta(skill);
                  const Icon = meta.Icon;
                  return (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ y: -2, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 360, damping: 24 }}
                      className="group/skill flex items-center gap-2.5 rounded-2xl font-sans text-[11px] font-bold text-slate-700 dark:text-neutral-200 bg-white/72 hover:bg-orange-50/60 dark:bg-neutral-950/48 dark:hover:bg-neutral-950/85 border border-slate-200/80 dark:border-neutral-800/80 hover:border-brand-orange/40 transition-all duration-200 cursor-default px-2.5 py-1.5 shadow-[0_1px_0_rgba(15,23,42,0.03)] min-h-[42px]"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center text-slate-800 dark:text-neutral-100 transition-transform duration-200 group-hover/skill:scale-110">
                        {Icon ? <Icon size={24} color={meta.brandColor ?? "currentColor"} /> : <span className={`text-base font-black text-transparent bg-clip-text bg-gradient-to-br ${meta.tone}`}>{meta.mark}</span>}
                      </span>
                      <span className="leading-tight text-slate-700 dark:text-neutral-100 group-hover/skill:text-[#FF5A09] dark:group-hover/skill:text-[#FF9900] transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
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
          className="mt-7 sm:mt-8 p-4 sm:p-5 rounded-3xl border border-white/85 dark:border-neutral-700/65 bg-white/78 dark:bg-neutral-900/72 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 justify-between max-w-4xl mx-auto shadow-[0_14px_36px_rgba(15,23,42,0.07)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
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
