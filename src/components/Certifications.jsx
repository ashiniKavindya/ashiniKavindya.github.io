import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "../data/portfolioData";

const issuerColor = {
  Coursera: "text-blue-300 border-blue-400/30 bg-blue-400/10",
  Kaggle: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
};

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
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/30 bg-violet-500/10 text-violet-200">
                  <FiAward size={16} />
                </span>
                <p className="font-display text-sm leading-snug font-medium text-white">{cert.name}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] ${
                      issuerColor[cert.issuer] ?? "text-violet-200 border-violet-400/30 bg-violet-400/10"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10.5px] text-[var(--color-dim)]">{cert.date}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
