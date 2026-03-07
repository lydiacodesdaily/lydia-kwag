"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Energy-aware systems",
    body: "Most software assumes constant attention and motivation. I design tools that work with fluctuating energy and focus.",
  },
  {
    num: "02",
    title: "Gentle structure",
    body: "Interfaces should guide behavior without overwhelming the user. Small constraints and subtle cues are more effective than complex feature sets.",
  },
  {
    num: "03",
    title: "Human-in-the-loop AI",
    body: "AI should assist thinking, not replace it. I build systems where people stay in control while AI helps generate options and reduce friction.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-white/[0.06] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-violet-400/70">
            Engineering Approach
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
            How I Build Software
          </h2>
        </motion.div>
        <motion.p
          className="mb-14 max-w-2xl text-base leading-relaxed text-stone-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          I design software systems around real human behavior rather than
          idealized workflows. My work focuses on tools that support focus,
          learning, and decision-making — reducing cognitive load and creating
          calmer interfaces that help people move forward.
        </motion.p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <span className="mb-4 block font-mono text-5xl font-bold leading-none text-white/[0.04] select-none">
                {p.num}
              </span>
              <h3 className="mb-3 text-base font-medium text-stone-100">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
