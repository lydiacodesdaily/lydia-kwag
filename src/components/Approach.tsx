"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Design for real attention patterns",
    body: "People often open tools mid-task, low-energy, or between other responsibilities. Good software should support that reality — easy to pick up, pause, and return to without losing the thread.",
  },
  {
    num: "02",
    title: "Structure over complexity",
    body: "Thoughtful constraints can be more effective than adding more features. Clear sequencing, quiet defaults, and simple states reduce friction and help people move forward.",
  },
  {
    num: "03",
    title: "AI that assists, not replaces",
    body: "AI works best when it supports thinking rather than replacing it. The goal is momentum — surfacing options, reducing blank-page friction, and getting out of the way once someone has clarity.",
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
        <motion.div
          className="mb-14 max-w-2xl space-y-3 text-base leading-relaxed text-stone-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p>
            People rarely use software in ideal conditions. They&apos;re often
            mid-task, switching contexts, or returning to something they started
            earlier.
          </p>
          <p>
            I design systems with those real-world patterns in mind — tools that
            are easy to start, pause, and continue without friction.
          </p>
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
              <div className="mb-5 border-t border-violet-500/20 pt-5">
                <span aria-hidden="true" className="font-mono text-xs text-violet-400/50 select-none">
                  {p.num}
                </span>
              </div>
              <h3 className="mb-3 text-base font-medium text-stone-100">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-400">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
