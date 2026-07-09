import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass-card py-3 shadow-[0_8px_40px_-12px_rgba(139,92,246,0.35)] mx-4" : "py-1"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/40 bg-violet-500/10 text-sm font-bold text-violet-200">
            AK
            <span className="absolute inset-0 rounded-lg bg-violet-400/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          </span>
          <span className="hidden text-gradient sm:inline">{profile.shortName}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wide text-[var(--color-dim)] uppercase transition-colors hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resumeFile}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-100 transition-all hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/30 text-violet-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 font-mono text-sm text-[var(--color-dim)] transition-colors hover:bg-white/5 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeFile}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-100"
              >
                <FiDownload /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
