"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left bg-violet-500"
        style={{ scaleX }}
      />
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-sm font-medium tracking-tight text-stone-100">
          Lydia Kwag
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Approach", href: "#approach" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-stone-500 transition-colors hover:text-violet-400"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
