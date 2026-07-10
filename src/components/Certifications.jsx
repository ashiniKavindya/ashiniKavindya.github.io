import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="06 · Certifications" title="Continuous learning" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card flex h-full flex-col gap-3 rounded-2xl p-5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-violet)]/30 bg-[var(--color-violet)]/10 text-[var(--color-violet)]">
                  <FiAward size={16} />
                </span>
                <p className="font-display text-sm leading-snug font-medium text-[#2a2620]">{cert.name}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-void)] px-2.5 py-0.5 text-[10.5px] text-stone-600">
                    {cert.issuer}
                  </span>
                  <span className="text-[10.5px] text-[var(--color-dim)]">{cert.date}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
