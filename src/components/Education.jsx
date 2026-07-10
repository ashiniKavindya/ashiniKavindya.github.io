import { FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05 · Education" title="Academic path" />

        <div className="relative ml-3 border-l border-[var(--color-line)] pl-8 sm:ml-6 sm:pl-10">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.1} className="relative mb-12 last:mb-0">
              <span className="absolute top-1.5 -left-[41px] grid h-5 w-5 place-items-center rounded-full border border-[var(--color-violet)]/50 bg-[var(--color-void)] sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-violet)]" />
              </span>

              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-[#2a2620]">{edu.institution}</h3>
                  <span className="text-xs text-[var(--color-violet)]">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-stone-700">{edu.degree}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-[var(--color-dim)]">
                  <FiMapPin size={12} /> {edu.location}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {edu.details.map((d) => (
                    <li key={d} className="text-sm text-stone-600">
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
