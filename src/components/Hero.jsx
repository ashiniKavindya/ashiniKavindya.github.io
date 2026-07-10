import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
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
    <section id="top" className="relative flex min-h-screen items-center pt-32 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16"
      >
        <motion.div variants={item}>
          <p className="font-hand text-3xl text-[#2a2620] sm:text-4xl">
            Hi, I'm <span className="text-[var(--color-violet)]">{profile.shortName}</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-dim)]">
            {profile.location} — open to opportunities.
          </p>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-stone-500 transition-colors hover:text-[var(--color-violet)]"
            >
              <FiMail size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-stone-500 transition-colors hover:text-[var(--color-violet)]"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-stone-500 transition-colors hover:text-[var(--color-violet)]"
            >
              <FiLinkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        <div>
          <motion.p variants={item} className="text-lg font-medium text-[var(--color-violet)] sm:text-xl">
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 font-display text-4xl leading-[1.15] font-medium text-[#2a2620] sm:text-5xl lg:text-6xl"
          >
            Building intelligent systems at the intersection of{" "}
            <em className="font-normal italic">deep learning, NLP,</em> and full-stack engineering.
          </motion.h1>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-violet)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-800 underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-violet)] hover:decoration-[var(--color-violet)]"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[var(--color-dim)] sm:flex"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
