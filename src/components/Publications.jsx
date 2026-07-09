import { FiBookOpen, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { publications } from "../data/portfolioData";

export default function Publications() {
  return (
    <section id="publications" className="relative scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04 · Publications" title="Research" />

        <div className="flex flex-col gap-6">
          {publications.map((pub) => (
            <Reveal key={pub.title}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                    <FiBookOpen size={20} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-semibold text-white">{pub.title}</h3>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 font-mono text-[11px] text-emerald-200">
                        {pub.year}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs tracking-wide text-violet-300/80">{pub.venue}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300/90">{pub.description}</p>
                    <ul className="mt-4 space-y-2">
                      {pub.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-xs leading-relaxed text-slate-400">
                          <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400/70" size={13} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
