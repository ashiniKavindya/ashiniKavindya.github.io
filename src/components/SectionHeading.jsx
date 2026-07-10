import Reveal from "./Reveal";

export default function SectionHeading({ index, title, subtitle, align = "left" }) {
  return (
    <Reveal
      className={`mb-14 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="mb-3 flex items-center gap-2 text-xs tracking-[0.25em] text-[var(--color-dim)] uppercase">
        <span className="h-px w-6 bg-[var(--color-violet)]" />
        {index}
      </span>
      <h2 className="font-display text-3xl font-medium tracking-tight text-[#2a2620] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm text-[var(--color-dim)] sm:text-base">{subtitle}</p>
      )}
    </Reveal>
  );
}
