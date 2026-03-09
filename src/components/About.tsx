"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-violet-400/70">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Lydia Kwag
            </h2>
          </motion.div>
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-base leading-relaxed text-stone-300">
              I design software systems around real human behavior — not
              idealized workflows.
            </p>
            <p className="text-base leading-relaxed text-stone-500">
              My work focuses on tools for focus, learning, and deeper
              productivity — software that earns attention rather than demands
              it.
            </p>
            <p className="text-base leading-relaxed text-stone-500">
              I care about the full product experience: system behavior,
              interface design, interaction details, and the clarity of
              language.
            </p>
            <p className="text-base leading-relaxed text-stone-500">
              Outside of software, I&rsquo;m drawn to quiet routines — slow
              runs with audiobooks, tea rituals, a bit of piano. I also organize
              Drawing Northern Virginia, a local meetup where artists sketch
              outdoors together. Many of the ideas behind my work — calm
              interfaces, time awareness, reduced cognitive load — come from
              these everyday rhythms.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-stone-400">
                <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Currently building
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
