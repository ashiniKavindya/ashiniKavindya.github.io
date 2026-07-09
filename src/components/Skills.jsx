import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiMediapipe,
  SiScipy,
  SiOpenjdk,
} from "react-icons/si";
import { FiCode, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "../data/portfolioData";

const iconMap = {
  Python: SiPython,
  "C++": SiCplusplus,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  "HTML/CSS": SiHtml5,
  "React (TypeScript)": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  TailwindCSS: SiTailwindcss,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  OpenCV: SiOpencv,
  MediaPipe: SiMediapipe,
  SciPy: SiScipy,
};

const categoryIcon = {
  "AI / Machine Learning": FiCpu,
  "Data & Tools": FiDatabase,
  "Web Technologies": FiLayers,
  "Languages & Systems": FiCode,
};

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          index="02 · Skills"
          title="A cross-stack toolkit"
          subtitle="From model architecture to production UI — the tools I reach for most."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, list], i) => {
            const CategoryIcon = categoryIcon[category] ?? FiCode;
            return (
              <Reveal key={category} delay={i * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/30 bg-violet-500/10 text-violet-200">
                      <CategoryIcon size={16} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {list.map((skill) => {
                      const Icon = iconMap[skill];
                      return (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.5)" }}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-200"
                        >
                          {Icon ? <Icon size={13} className="text-cyan-300" /> : null}
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
