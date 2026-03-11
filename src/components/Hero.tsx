"use client";

import Image from "next/image";
import {
  motion,
  type Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const stack = [
  {
    label: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    bg: "bg-[#20232a]",
    defaultClass: "sm:rotate-6 sm:translate-x-2 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-0",
    z: "z-10",
    group: "group/react",
    tooltip: "group-hover/react:opacity-100",
  },
  {
    label: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    bg: "",
    defaultClass: "sm:rotate-6 sm:-translate-x-6 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-4",
    z: "z-30",
    group: "group/ts",
    tooltip: "group-hover/ts:opacity-100",
  },
  {
    label: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    bg: "",
    defaultClass: "sm:-rotate-6 sm:-translate-x-10 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-6",
    z: "z-40",
    group: "group/next",
    tooltip: "group-hover/next:opacity-100",
  },
  {
    label: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    bg: "bg-[#0f172a]",
    defaultClass: "sm:rotate-3 sm:-translate-x-14 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-8",
    z: "z-50",
    group: "group/tailwind",
    tooltip: "group-hover/tailwind:opacity-100",
  },
  {
    label: "OpenAI API",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    bg: "bg-[#10a37f]",
    defaultClass: "sm:-rotate-6 sm:-translate-x-20 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-10",
    z: "z-[60]",
    group: "group/openai",
    tooltip: "group-hover/openai:opacity-100",
  },
  {
    label: "Claude API",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Claude-ai-icon.png",
    bg: "bg-[#cc785c]",
    defaultClass: "sm:rotate-3 sm:-translate-x-24 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-12",
    z: "z-[70]",
    group: "group/claude",
    tooltip: "group-hover/claude:opacity-100",
  },
  {
    label: "Vercel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    bg: "bg-white",
    defaultClass: "sm:-rotate-6 sm:-translate-x-28 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-14",
    z: "z-[80]",
    group: "group/vercel",
    tooltip: "group-hover/vercel:opacity-100",
  },
  {
    label: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    bg: "bg-[#1e1e1e]",
    defaultClass: "sm:rotate-3 sm:-translate-x-32 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-16",
    z: "z-[90]",
    group: "group/figma",
    tooltip: "group-hover/figma:opacity-100",
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Glow layers counter-move to appear to travel less than the portrait
  const outerCounterX = useTransform(smoothX, (v) => -v * 0.6);
  const outerCounterY = useTransform(smoothY, (v) => -v * 0.6);
  const innerCounterX = useTransform(smoothX, (v) => -v * 0.35);
  const innerCounterY = useTransform(smoothY, (v) => -v * 0.35);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(nx * 16);
    mouseY.set(ny * 16);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Headline — dominant focal point */}
            <motion.h1
              variants={item}
              className="mb-10 text-4xl font-semibold leading-[1.15] tracking-tight text-stone-100 md:text-5xl lg:text-[3.5rem]"
            >
              I build software that works with people.
            </motion.h1>

            {/* Byline — name + title, secondary */}
            <motion.div variants={item} className="mb-8">
              <div className="mb-3 h-px w-10 bg-violet-400/25" />
              <p className="font-mono text-sm">
                <span className="text-stone-300">Lydia Kwag</span>
                <span className="mx-3 text-stone-700">·</span>
                <span className="text-violet-400/75">Senior Product Engineer</span>
              </p>
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              variants={item}
              className="mb-3 text-base leading-relaxed text-stone-300"
            >
              AI-assisted tools, browser extensions, and calm software systems
              designed to reduce cognitive load.
            </motion.p>

            {/* Status line */}
            <motion.p
              variants={item}
              className="mb-10 text-sm leading-relaxed text-stone-500"
            >
              After a decade in federal contracting, I left to build at the
              intersection of front-end engineering and AI. Now looking for my
              next team.
            </motion.p>

            {/* Stack icons */}
            <motion.div variants={item}>
              <span className="inline-flex relative group/stack gap-2 sm:gap-0">
                {stack.map(({ label, img, bg, defaultClass, z, group, tooltip }) => (
                  <div key={label} className={`relative ${group} sm:transform ${defaultClass} transition-all duration-200 ${z}`}>
                    <img
                      src={img}
                      alt={label}
                      className={`w-10 h-10 rounded-xl cursor-default p-1 ${bg}`}
                    />
                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 ${tooltip} transition-opacity whitespace-nowrap hidden sm:block`}>
                      {label}
                    </span>
                  </div>
                ))}
              </span>
            </motion.div>
          </motion.div>

          {/* Portrait with layered ambient halo */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              y: { duration: 6, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Parallax wrapper — portrait travels furthest */}
            <motion.div className="relative" style={{ x: smoothX, y: smoothY }}>
              {/* Outer ambient glow — travels 40% as far (counter-moves) */}
              <motion.div
                className="absolute inset-0 scale-[1.3] rounded-3xl bg-violet-600/12 blur-[90px]"
                style={{ x: outerCounterX, y: outerCounterY }}
              />
              {/* Inner halo — travels 65% as far */}
              <motion.div
                className="absolute inset-0 scale-[1.06] rounded-2xl bg-violet-500/15 blur-[40px]"
                style={{ x: innerCounterX, y: innerCounterY }}
              />
              <Image
                src="/profile.png"
                alt="Lydia Kwag"
                width={400}
                height={400}
                className="relative w-full max-w-sm rounded-2xl object-cover ring-1 ring-white/[0.10]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-transparent via-violet-400/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.4 }}
        />
      </motion.div>
    </section>
  );
}
