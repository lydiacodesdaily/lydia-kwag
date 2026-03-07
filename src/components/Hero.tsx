"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const stack = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "OpenAI",
  "Claude",
  "Expo",
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
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Headline — dominant focal point */}
            <motion.h1
              variants={item}
              className="mb-8 text-4xl font-semibold leading-tight tracking-tight text-stone-100 md:text-5xl lg:text-6xl"
            >
              I build software that works with people.
            </motion.h1>

            {/* Byline — name + title, secondary */}
            <motion.div variants={item} className="mb-8">
              <div className="mb-3 h-px w-10 bg-violet-400/30" />
              <p className="font-mono text-sm text-stone-500">
                Lydia Kwag&nbsp;&nbsp;·&nbsp;&nbsp;Product Engineer
              </p>
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              variants={item}
              className="mb-10 text-base leading-relaxed text-stone-400"
            >
              AI-assisted tools, browser extensions, and calm software systems
              designed to reduce cognitive load.
            </motion.p>

            {/* Stack tags */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-xs text-stone-500 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-400"
                >
                  {tag}
                </span>
              ))}
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
            <div className="relative">
              {/* Outer ambient glow */}
              <div className="absolute inset-0 scale-125 rounded-3xl bg-violet-600/10 blur-[100px]" />
              {/* Inner halo */}
              <div className="absolute inset-0 scale-105 rounded-2xl bg-violet-500/20 blur-[50px]" />
              <Image
                src="/profile.png"
                alt="Lydia Kwag"
                width={400}
                height={400}
                className="relative w-full max-w-sm rounded-2xl object-cover ring-1 ring-white/[0.08]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
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
