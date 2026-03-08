"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export type IllustrationKey = "timer" | "extension" | "queue";

// ─── Illustrations ────────────────────────────────────────────────────────────

function TimerIllustration() {
  // Circumference of r=64: 2π×64 ≈ 402.1 — dashoffset 100.5 = 75% filled
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <svg
        aria-hidden="true"
        className="relative z-10 h-40 w-40"
        viewBox="0 0 160 160"
      >
        <circle
          cx="80"
          cy="80"
          r="64"
          fill="none"
          stroke="rgba(139,92,246,0.12)"
          strokeWidth="2.5"
        />
        <circle
          cx="80"
          cy="80"
          r="64"
          fill="none"
          stroke="rgba(167,139,250,0.65)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="402.1"
          strokeDashoffset="100.5"
          transform="rotate(-90 80 80)"
        />
        <text
          x="80"
          y="76"
          textAnchor="middle"
          fill="rgba(245,245,244,0.88)"
          fontSize="22"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
          letterSpacing="-0.5"
        >
          18:32
        </text>
        <text
          x="80"
          y="96"
          textAnchor="middle"
          fill="rgba(167,139,250,0.55)"
          fontSize="8"
          fontFamily="ui-monospace, monospace"
          letterSpacing="3"
        >
          FOCUS
        </text>
      </svg>
    </div>
  );
}

function ExtensionIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-52 rounded-full bg-violet-500/[0.07] blur-2xl" />
      </div>
      <div
        aria-hidden="true"
        className="relative z-10 w-56 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.05] px-3 py-2.5">
          <div className="h-2 w-2 rounded-full bg-white/[0.08]" />
          <div className="h-2 w-2 rounded-full bg-white/[0.08]" />
          <div className="h-2 w-2 rounded-full bg-white/[0.08]" />
          <div className="ml-2 h-2.5 flex-1 rounded-full bg-white/[0.04]" />
        </div>
        {/* Task list */}
        <div className="space-y-2.5 p-4">
          <div className="flex items-center gap-2.5">
            <div className="h-3 w-3 shrink-0 rounded-full border border-violet-400/40 bg-violet-400/[0.15]" />
            <div className="h-1.5 w-28 rounded-full bg-white/[0.15]" />
          </div>
          <div className="flex items-center gap-2.5 opacity-60">
            <div className="h-3 w-3 shrink-0 rounded-full border border-white/10" />
            <div className="h-1.5 w-20 rounded-full bg-white/[0.06]" />
          </div>
          <div className="flex items-center gap-2.5 opacity-40">
            <div className="h-3 w-3 shrink-0 rounded-full border border-white/10" />
            <div className="h-1.5 w-24 rounded-full bg-white/[0.06]" />
          </div>
          {/* Timer bar */}
          <div className="border-t border-white/[0.04] pt-3">
            <div className="flex h-6 items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/[0.08] px-3">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-400/60" />
              <span className="font-mono text-[9px] tracking-widest text-violet-400/60">
                25:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QueueIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-52 rounded-full bg-violet-500/[0.07] blur-2xl" />
      </div>
      <div aria-hidden="true" className="relative z-10 w-56 space-y-2">
        <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.07] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 shrink-0 rounded-full bg-violet-400/70" />
            <div className="h-1.5 w-28 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 opacity-50">
          <div className="flex items-center gap-2.5">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
            <div className="h-1.5 w-20 rounded-full bg-white/[0.08]" />
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 opacity-30">
          <div className="flex items-center gap-2.5">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
            <div className="h-1.5 w-24 rounded-full bg-white/[0.08]" />
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 opacity-[0.15]">
          <div className="flex items-center gap-2.5">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
            <div className="h-1.5 w-16 rounded-full bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectCardProps = {
  name: string;
  platform: string;
  badge: string;
  tagline: string;
  description: string;
  stack: string[];
  link?: string;
  caseStudyLink?: string;
  image?: string;
  images?: string[];
  illustrationKey?: IllustrationKey;
  variant?: "featured" | "standard";
};

// ─── Visual zone ──────────────────────────────────────────────────────────────

const Illustrations: Record<IllustrationKey, () => React.JSX.Element> = {
  timer: TimerIllustration,
  extension: ExtensionIllustration,
  queue: QueueIllustration,
};

function VisualZone({
  image,
  images,
  illustrationKey,
  className = "",
}: {
  image?: string;
  images?: string[];
  illustrationKey?: IllustrationKey;
  className?: string;
}) {
  const IllustrationComponent = illustrationKey
    ? Illustrations[illustrationKey]
    : null;

  if (images && images.length > 0) {
    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden bg-gradient-to-br from-violet-500/[0.08] via-violet-500/[0.03] to-transparent ${className}`}
      >
        <div className="flex h-full items-end justify-center gap-2.5 px-6 pt-6">
          {images.map((src, i) => {
            const isCenter = i === Math.floor(images.length / 2);
            return (
              <img
                key={src}
                src={src}
                alt=""
                className={`w-[30%] rounded-t-xl object-cover object-top shadow-lg transition-transform ${
                  isCenter ? "h-[88%]" : "h-[76%]"
                }`}
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (image) {
    return (
      <div className={`relative overflow-hidden bg-black/20 ${className}`}>
        <img src={image} alt="" className="h-full w-full object-cover object-top" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br from-violet-500/[0.08] via-violet-500/[0.03] to-transparent ${className}`}
    >
      {IllustrationComponent && <IllustrationComponent />}
    </div>
  );
}

// ─── Tilt hook ────────────────────────────────────────────────────────────────

function useTilt(maxTilt: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(ry, { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    ry.set(((e.clientX - rect.left) / rect.width - 0.5) * 2 * maxTilt);
    rx.set(-((e.clientY - rect.top) / rect.height - 0.5) * 2 * maxTilt);
  }

  function onMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return { containerRef, rotateX, rotateY, onMouseMove, onMouseLeave };
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export default function ProjectCard({
  name,
  platform,
  badge,
  tagline,
  description,
  stack,
  link,
  caseStudyLink,
  image,
  images,
  illustrationKey,
  variant = "standard",
}: ProjectCardProps) {
  const { containerRef, rotateX, rotateY, onMouseMove, onMouseLeave } =
    useTilt(variant === "featured" ? 6 : 8);

  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : undefined;

  if (variant === "featured") {
    const content = (
      <>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-8 lg:p-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-400">
                {badge}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-600">
                {platform}
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-stone-100 lg:text-3xl">
              {name}
            </h3>
            <p className="mb-3 text-base text-stone-300">{tagline}</p>
            <p className="text-sm leading-relaxed text-stone-500">{description}</p>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-stone-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            {link && (
              <span aria-hidden="true" className="font-mono text-xs text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {caseStudyLink ? "Read case study →" : "View →"}
              </span>
            )}
          </div>
        </div>
        {/* Visual */}
        <VisualZone
          image={image}
          images={images}
          illustrationKey={illustrationKey}
          className="min-h-[240px] lg:w-[42%]"
        />
      </>
    );

    const cardClass =
      "group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-500 hover:border-violet-500/25 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(167,139,250,0.07)] lg:flex-row focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

    return (
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ perspective: "800px" }}
      >
        {link ? (
          <motion.a {...linkProps} className={cardClass} style={{ rotateX, rotateY }}>
            {content}
          </motion.a>
        ) : (
          <motion.div className={cardClass} style={{ rotateX, rotateY }}>
            {content}
          </motion.div>
        )}
      </div>
    );
  }

  const content = (
    <>
      {/* Visual */}
      <VisualZone image={image} illustrationKey={illustrationKey} className="h-48" />
      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-3 flex items-start justify-between gap-3">
            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-400">
              {badge}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone-600">
              {platform}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-stone-100">
            {name}
          </h3>
          <p className="mb-2 text-sm font-medium text-stone-300">{tagline}</p>
          <p className="text-sm leading-relaxed text-stone-500">{description}</p>
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <p aria-hidden="true" className="font-mono text-xs text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View →
            </p>
          )}
        </div>
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-500 hover:border-violet-500/25 hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(167,139,250,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: "800px" }}
      className="h-full"
    >
      {link ? (
        <motion.a {...linkProps} className={cardClass} style={{ rotateX, rotateY }}>
          {content}
        </motion.a>
      ) : (
        <motion.div className={cardClass} style={{ rotateX, rotateY }}>
          {content}
        </motion.div>
      )}
    </div>
  );
}
