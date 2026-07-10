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
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          index="02 · Skills"
          title="A cross-stack toolkit"
          subtitle="Tools I use across ML and web development."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, list], i) => {
            const CategoryIcon = categoryIcon[category] ?? FiCode;
            return (
              <Reveal key={category} delay={i * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-violet)]/30 bg-[var(--color-violet)]/10 text-[var(--color-violet)]">
                      <CategoryIcon size={16} />
                    </span>
                    <h3 className="font-display text-base font-medium text-[#2a2620]">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {list.map((skill) => {
                      const Icon = iconMap[skill];
                      return (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -3, borderColor: "rgba(204,106,30,0.5)" }}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-void)] px-3 py-1.5 text-xs text-stone-700"
                        >
                          {Icon ? <Icon size={13} className="text-[var(--color-violet)]" /> : null}
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
