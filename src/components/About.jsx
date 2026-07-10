import { motion } from "framer-motion";
import { FiCpu, FiTarget } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01 · About" title="Turning signals into intelligence" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.1} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
              <FiCpu className="absolute -top-6 -right-6 h-32 w-32 text-[var(--color-violet)]/10" />
              <p className="relative text-lg leading-relaxed text-stone-700">{profile.bio}</p>
              <div className="relative mt-8 flex flex-wrap gap-3">
                {["Deep Learning", "NLP", "Computer Vision", "Full-Stack", "Edge Inference"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-void)] px-3 py-1 text-xs text-stone-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card flex h-full flex-col justify-between rounded-2xl p-5"
                >
                  <FiTarget className="mb-3 text-[var(--color-violet)]/70" size={18} />
                  <div className="font-display text-2xl font-medium text-[#2a2620] sm:text-3xl">
                    {s.value}
                    <span className="text-base text-[var(--color-violet)]/70">{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs tracking-wide text-[var(--color-dim)] uppercase">
                    {s.label}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
