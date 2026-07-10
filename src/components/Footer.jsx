import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[var(--color-dim)] sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="flex items-center gap-1.5">
          Built with React &amp; Tailwind
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-violet)]" />
        </p>
      </div>
    </footer>
  );
}
