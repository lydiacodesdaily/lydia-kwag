"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

// [char, approx px width in Geist Sans at text-sm / 14px]
const YDIA: [string, number][] = [["y", 16], ["d", 15], ["i", 7], ["a", 14]];
const WAG: [string, number][] = [["w", 17], ["a", 14], ["g", 14]];
const TOTAL = YDIA.length + 1 + WAG.length; // 8 fading chars

// When collapsing: stagger outward from L (y first → g last)
// When expanding: reverse — g comes back first, y last
function staggerDelay(index: number, collapsed: boolean) {
  return (collapsed ? index : TOTAL - 1 - index) * 0.03;
}

export default function Nav() {
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setCollapsed(y > 50);
  });

  function charProps(maxWidth: number, idx: number) {
    return {
      className: "inline-block overflow-hidden whitespace-nowrap",
      animate: {
        maxWidth: collapsed ? 0 : maxWidth,
        opacity: collapsed ? 0 : 1,
        y: collapsed ? 4 : 0,
      },
      transition: {
        duration: 0.28,
        ease: "easeInOut" as const,
        delay: staggerDelay(idx, collapsed),
      },
    };
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
<nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <span className="flex items-baseline font-mono text-base font-medium tracking-tight text-stone-100">
          <span>L</span>
          {YDIA.map(([char, w], i) => (
            <motion.span key={`y${i}`} {...charProps(w, i)}>
              {char}
            </motion.span>
          ))}
          <motion.span {...charProps(8, YDIA.length)}>
            {"\u00A0"}
          </motion.span>
          <span>K</span>
          {WAG.map(([char, w], i) => (
            <motion.span key={`w${i}`} {...charProps(w, YDIA.length + 1 + i)}>
              {char}
            </motion.span>
          ))}
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
              className="rounded text-sm text-stone-400 transition-colors hover:text-violet-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/60"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
