import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/portfolioData";

const contactCards = [
  { Icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { Icon: FiMapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-28">
      <div className="relative mx-auto max-w-4xl text-center">
        <SectionHeading index="07 · Contact" title="Let's build something intelligent" align="center" />

        <Reveal delay={0.1}>
          <p className="mx-auto -mt-6 mb-12 max-w-lg text-sm text-[var(--color-dim)] sm:text-base">
            Have a role, a research idea, or a project in mind? My inbox is open.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactCards.map(({ Icon, label, value, href }, i) => {
            const content = (
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-violet)]/30 bg-[var(--color-violet)]/10 text-[var(--color-violet)]">
                  <Icon size={17} />
                </span>
                <div>
                  <p className="text-[11px] tracking-wide text-[var(--color-dim)] uppercase">{label}</p>
                  <p className="mt-1 text-sm text-stone-700 break-words">{value}</p>
                </div>
              </motion.div>
            );
            return (
              <Reveal key={label} delay={0.15 + i * 0.08}>
                {href ? (
                  <a href={href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4} className="mt-12 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-violet)] px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <FiMail /> Say Hello
          </a>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-dim)] transition-all hover:-translate-y-1 hover:border-[var(--color-violet)]/50 hover:text-[var(--color-violet)]"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-dim)] transition-all hover:-translate-y-1 hover:border-[var(--color-violet)]/50 hover:text-[var(--color-violet)]"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
