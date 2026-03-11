"use client";

import { motion } from "framer-motion";

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
            <p className="mb-10 text-base leading-relaxed text-stone-400">
              Open to product engineering roles at companies building tools that
              matter. Especially interested in teams focused on productivity,
              focus, or human-centered software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex relative group/stack gap-2 sm:gap-0">

              {/* Email */}
              <div className="relative group/email sm:transform sm:-rotate-6 sm:group-hover/stack:rotate-0 sm:translate-x-2 sm:group-hover/stack:translate-x-0 transition-all duration-200 z-10">
                <a
                  href="mailto:lydia.kwag.dev@gmail.com"
                  aria-label="Send email to lydia.kwag.dev@gmail.com"
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/24/Gmail_Faenza.svg"
                    alt=""
                    className="w-10 h-10 rounded-xl cursor-pointer"
                  />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/email:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                  lydia.kwag.dev@gmail.com
                </span>
              </div>

              {/* LinkedIn */}
              <div className="relative group/linkedin sm:transform sm:rotate-3 sm:group-hover/stack:rotate-0 sm:group-hover/stack:translate-x-2 transition-all duration-200 z-20">
                <a
                  href="https://linkedin.com/in/lydiakwag"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt=""
                    className="w-10 h-10 rounded-xl cursor-pointer"
                  />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/linkedin:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                  @lydiakwag
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group/github sm:transform sm:-rotate-6 sm:group-hover/stack:rotate-0 sm:-translate-x-4 sm:group-hover/stack:translate-x-4 transition-all duration-200 z-30">
                <a
                  href="https://github.com/lydiacodesdaily"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt=""
                    className="w-10 h-10 rounded-xl cursor-pointer bg-white p-1"
                  />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/github:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                  @lydiacodesdaily
                </span>
              </div>

              {/* Resume */}
              <div className="relative group/resume sm:transform sm:rotate-6 sm:group-hover/stack:rotate-0 sm:-translate-x-6 sm:group-hover/stack:translate-x-6 transition-all duration-200 z-40">
                <a
                  href="/Lydia_Kwag_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume PDF (opens in new tab)"
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/23/Deepin_Icon_Theme_%E2%80%93_application-x-yaml_%282%29.svg"
                    alt=""
                    className="w-10 h-10 rounded-xl cursor-pointer"
                  />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/resume:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                  Resume
                </span>
              </div>

            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
