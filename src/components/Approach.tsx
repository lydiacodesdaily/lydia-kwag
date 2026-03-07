"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Reduce before you build",
    body: "Cognitive load is the enemy. The best feature is often the one you remove. I design for the minimum viable mental model, then ship.",
  },
  {
    num: "02",
    title: "Behavior-first thinking",
    body: "Good software understands how people actually work — not how they wish they worked. I study behavior and build constraints that support it.",
  },
  {
    num: "03",
    title: "Calm systems",
    body: "Software should not demand attention. I build tools that recede into the background and let the work itself stay in focus.",
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
            Thinking
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
            How I Build
          </h2>
        </motion.div>
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
