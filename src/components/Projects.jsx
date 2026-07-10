import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

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
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-void)] px-3 py-1 text-[11px] tracking-wide text-[var(--color-violet)]">
                    {p.tag}
                  </span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-dim)] transition-colors hover:border-[var(--color-violet)]/50 hover:text-[var(--color-violet)]"
                    >
                      <FiGithub size={14} />
                    </a>
                  )}
                </div>

                <h3 className="font-display text-lg font-medium text-[#2a2620] transition-colors group-hover:text-[var(--color-violet)]">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-dim)]">{p.period}</p>

                <p className="mt-4 text-sm leading-relaxed text-stone-700">{p.description}</p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[var(--color-abyss)] px-2 py-1 text-[10.5px] text-stone-600"
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
