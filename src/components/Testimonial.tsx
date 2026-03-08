"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="border-l-2 border-violet-400/30 pl-6"
        >
          <p className="mb-4 text-base leading-relaxed text-stone-400 italic sm:text-lg">
            &ldquo;Thank you so much for developing these tools. They are truly supportive and provide a much needed reminder
            to let up on the gas pedal instead of crushing it harder when things don&apos;t seem to be working.&rdquo;
          </p>
          <footer className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
            — Christine, Flow Club Companion user
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
