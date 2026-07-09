import { FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05 · Education" title="Academic path" />

        <div className="relative ml-3 border-l border-violet-400/20 pl-8 sm:ml-6 sm:pl-10">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.1} className="relative mb-12 last:mb-0">
              <span className="absolute top-1.5 -left-[41px] grid h-5 w-5 place-items-center rounded-full border border-violet-400/50 bg-[#0a0718] sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
              </span>

              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">{edu.institution}</h3>
                  <span className="font-mono text-xs text-cyan-300/80">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-violet-200/80">{edu.degree}</p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-[var(--color-dim)]">
                  <FiMapPin size={12} /> {edu.location}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {edu.details.map((d) => (
                    <li key={d} className="text-sm text-slate-400">
                      · {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
