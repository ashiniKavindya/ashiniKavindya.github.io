import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

const tagColors = {
  "Deep Learning": "from-violet-500/20 to-fuchsia-500/20 text-violet-200 border-violet-400/30",
  "Machine Learning": "from-cyan-500/20 to-blue-500/20 text-cyan-200 border-cyan-400/30",
  NLP: "from-emerald-500/20 to-teal-500/20 text-emerald-200 border-emerald-400/30",
  "Full-Stack": "from-pink-500/20 to-rose-500/20 text-pink-200 border-pink-400/30",
  Systems: "from-amber-500/20 to-orange-500/20 text-amber-200 border-amber-400/30",
  Hardware: "from-slate-500/20 to-slate-400/20 text-slate-200 border-slate-400/30",
};

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 · Projects"
          title="Selected work"
          subtitle="Models, tools, and systems I've designed, trained, and shipped."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass-card group flex h-full flex-col rounded-2xl p-6 sm:p-7"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full border bg-gradient-to-r px-3 py-1 font-mono text-[11px] tracking-wide ${
                      tagColors[p.tag] ?? "from-violet-500/20 to-cyan-500/20 text-violet-200 border-violet-400/30"
                    }`}
                  >
                    {p.tag}
                  </span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-[var(--color-dim)] transition-colors hover:border-cyan-300/50 hover:text-cyan-300"
                    >
                      <FiGithub size={14} />
                    </a>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--color-dim)]">{p.period}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-300/90">{p.description}</p>

                {p.highlights && (
                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-xs leading-relaxed text-slate-400">
                        <FiArrowUpRight className="mt-0.5 shrink-0 text-violet-400/70" size={12} />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10.5px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
