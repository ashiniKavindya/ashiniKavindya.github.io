import { FiBookOpen } from "react-icons/fi";
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
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-void)] text-[var(--color-violet)]">
                    <FiBookOpen size={20} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="font-display text-xl font-medium text-[#2a2620] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-violet)] hover:decoration-[var(--color-violet)]"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <h3 className="font-display text-xl font-medium text-[#2a2620]">{pub.title}</h3>
                      )}
                      <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-void)] px-3 py-0.5 text-[11px] text-stone-600">
                        {pub.year}
                      </span>
                    </div>
                    <p className="mt-1 text-xs tracking-wide text-[var(--color-violet)]">{pub.venue}</p>
                    <p className="mt-4 text-sm leading-relaxed text-stone-700">{pub.description}</p>
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
