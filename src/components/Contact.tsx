"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", href: "mailto:lydia.kwag.dev@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lydiakwag" },
  { label: "GitHub", href: "https://github.com/lydiacodesdaily" },
  { label: "Resume", href: "/LydiaKwag_Resume.pdf", ariaLabel: "Resume (PDF, opens in new tab)", pdf: true },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.06] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-violet-400/70">
              Contact
            </p>
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-stone-100 md:text-5xl">
              Let&apos;s talk.
            </h2>
            <p className="mb-10 text-base leading-relaxed text-stone-500">
              Open to product engineering roles at companies building tools that
              matter. Especially interested in teams focused on productivity,
              focus, or human-centered software.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {links.map(({ label, href, ariaLabel, pdf }) => (
              <a
                key={label}
                href={href}
                aria-label={ariaLabel}
                target={href.startsWith("http") || pdf ? "_blank" : undefined}
                rel={
                  href.startsWith("http") || pdf ? "noopener noreferrer" : undefined
                }
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm font-medium text-stone-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/60"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
