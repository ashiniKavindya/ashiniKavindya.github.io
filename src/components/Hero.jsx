import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import NeuralBackground from "./NeuralBackground";
import AIOrb from "./AIOrb";
import { profile } from "../data/portfolioData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <NeuralBackground className="opacity-70" />
      <div className="noise-veil absolute inset-0" />

      <div className="animate-float-slow absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-700/20 blur-3xl" />
      <div className="animate-float absolute top-1/3 -right-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 font-mono text-xs tracking-wide text-violet-200"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            open to opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{profile.shortName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-display text-xl font-medium text-violet-200/90 sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-dim)]">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-[#05030d] transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 px-6 py-3 text-sm font-medium text-violet-100 transition-colors hover:border-cyan-300/60 hover:text-cyan-100"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { Icon: FiGithub, href: profile.github, label: "GitHub" },
              { Icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
              { Icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[var(--color-dim)] transition-all hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center"
        >
          <AIOrb />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs text-[var(--color-dim)] sm:flex"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
