import { motion } from "framer-motion";
import { TbBrain } from "react-icons/tb";
import { SiPytorch, SiPython, SiScikitlearn, SiReact, SiOpencv, SiNumpy } from "react-icons/si";

const orbitIcons = [
  { Icon: SiPytorch, color: "#ee4c2c" },
  { Icon: SiPython, color: "#facc15" },
  { Icon: SiScikitlearn, color: "#f89939" },
  { Icon: SiReact, color: "#61dafb" },
  { Icon: SiOpencv, color: "#5c9ee7" },
  { Icon: SiNumpy, color: "#a78bfa" },
];

export default function AIOrb() {
  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px]">
      <div className="animate-pulse-glow absolute inset-8 rounded-full bg-violet-600/40" />
      <div className="animate-pulse-glow absolute inset-16 rounded-full bg-cyan-500/30 [animation-delay:1.2s]" />

      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="absolute rounded-full border border-violet-400/20"
          style={{
            inset: `${ring * 34}px`,
            borderStyle: ring === 1 ? "dashed" : "solid",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {orbitIcons.map(({ Icon, color }, i) => {
          const angle = (i / orbitIcons.length) * 2 * Math.PI;
          const radius = 46;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <div
              key={i}
              className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-[#100c22]/90 shadow-lg backdrop-blur-sm"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <Icon size={20} color={color} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <div className="relative z-10 grid h-28 w-28 place-items-center rounded-full border border-violet-300/30 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 shadow-[0_0_60px_-5px_rgba(139,92,246,0.6)] backdrop-blur-md sm:h-32 sm:w-32">
        <TbBrain size={48} className="text-violet-100" />
      </div>
    </div>
  );
}
