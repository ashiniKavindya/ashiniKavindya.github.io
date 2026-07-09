import Reveal from "./Reveal";

export default function SectionHeading({ index, title, subtitle, align = "left" }) {
  return (
    <Reveal
      className={`mb-14 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-cyan-300/70 uppercase">
        <span className="h-px w-6 bg-gradient-to-r from-violet-400 to-cyan-300" />
        {index}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm text-[var(--color-dim)] sm:text-base">{subtitle}</p>
      )}
    </Reveal>
  );
}
