import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-[var(--color-dim)] sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="flex items-center gap-1.5">
          Built with React &amp; Tailwind
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
        </p>
      </div>
    </footer>
  );
}
