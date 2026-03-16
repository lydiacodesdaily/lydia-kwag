"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

function FadeUp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

const MOBILE_SCREENSHOTS = [
  { src: "/screenshots/flowmate/mobile/fm_m_1.jpg", caption: "Timer state reflected visually and delivered through audio — no clock watching required" },
  { src: "/screenshots/flowmate/mobile/fm_m_2.jpg", caption: "Five audio presets from silent to fully voiced — match your environment and task" },
  { src: "/screenshots/flowmate/mobile/fm_m_3.jpg", caption: "Name what you're focusing on to reduce pre-session cognitive friction" },
  { src: "/screenshots/flowmate/mobile/fm_m_4.jpg", caption: "Optional subtask breakdown — surfaces only when you want structure" },
  { src: "/screenshots/flowmate/mobile/fm_m_5.jpg", caption: "Audio cues scheduled across the arc of a session — minute markers, halfway point, countdown" },
];

const GROWTH_STAGES = [
  { src: "/screenshots/flowmate/flowmato/progress/1_seedling.png", label: "Seedling" },
  { src: "/screenshots/flowmate/flowmato/progress/2_plant.png", label: "Sprouting" },
  { src: "/screenshots/flowmate/flowmato/progress/3_small.png", label: "Growing" },
  { src: "/screenshots/flowmate/flowmato/progress/4_medium.png", label: "Thriving" },
  { src: "/screenshots/flowmate/flowmato/progress/5_full.png", label: "Blooming" },
  { src: "/screenshots/flowmate/flowmato/progress/6_happy.png", label: "Done!" },
];

const CHARACTER_STATES = [
  { src: "/screenshots/flowmate/flowmato/state/flowmato_daydreaming.png", label: "Idle", desc: "Pondering between sessions", color: "text-sky-400", border: "border-sky-500/30", bg: "bg-sky-500/[0.06]" },
  { src: "/screenshots/flowmate/flowmato/state/flowmato_focus.png", label: "Focused", desc: "Wired glasses on, locked in on the laptop", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/[0.06]" },
  { src: "/screenshots/flowmate/flowmato/state/flowmato_relaxing.png", label: "Break", desc: "Sinking into the bean bag with a matcha latte", color: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/[0.06]" },
  { src: "/screenshots/flowmate/flowmato/state/flowmato_celebrating.png", label: "Celebrating", desc: "Bouncing with confetti — session complete", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/[0.06]" },
];

const OUTCOME_CARDS = [
  {
    icon: "◌",
    title: "Audio cues drive behavior change",
    body: "Early testers cited spoken cues as the primary behavior change — they stopped checking the clock. Designed so the timer is fully usable without looking at the screen.",
  },
  {
    icon: "◉",
    title: "Audio as a first-class interface",
    body: "40+ ElevenLabs voice cues with five configurable presets. The system was designed so the timer is fully usable without looking at the screen — cues deliver time awareness while your attention stays on the work.",
  },
  {
    icon: "◈",
    title: "Shipped cross-platform — Android unpromoted by design",
    body: "Web and Android are live, sharing business logic via @flowmate/shared. Android is intentionally unpromoted — holding for iOS launch so both platforms ship together with feature parity. iOS is currently in App Store review.",
  },
  {
    icon: "◎",
    title: "Design and code in the same hand",
    body: "Character designed, SVG paths drawn, animation spec written, and component implemented by one person. No translation layer between design intent and shipped behavior.",
  },
  {
    icon: "◫",
    title: "State-driven architecture paid off",
    body: "Modeling everything from a single timerPhase value meant audio cues, visual state, and PiP stayed synchronized. Adding a new state required one config entry — not a chain of event handlers.",
  },
];

const AUDIO_PRESETS = [
  { name: "Full", desc: "All cue types enabled — seconds markers, minute calls, halfway point, countdown. Maximum time awareness.", color: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/[0.06]" },
  { name: "Gentle", desc: "Softer tones, less frequent cues. For work that benefits from ambient awareness without regular interruption.", color: "text-sky-400", border: "border-sky-500/20", bg: "bg-sky-500/[0.04]" },
  { name: "Minimal", desc: "Key announcements only — halfway and final countdown. Quiet but oriented.", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/[0.04]" },
  { name: "Silent", desc: "No audio. Visual-only mode for environments where sound isn't possible.", color: "text-stone-400", border: "border-stone-500/20", bg: "bg-stone-500/[0.03]" },
  { name: "Hi-Fi", desc: "Full cues with a richer, more present voice. Designed for focused solo sessions where the voice feels like company.", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/[0.04]" },
];

const SESSION_ARC = [
  { phase: "Pre-session", state: "Idle", note: "Pondering", stateIdx: 0 },
  { phase: "Session starts", state: "Focused", note: "Locked in", stateIdx: 1 },
  { phase: "Break time", state: "Break", note: "Earned rest", stateIdx: 2 },
  { phase: "Session done", state: "Celebrating", note: "Confetti!", stateIdx: 3 },
];

function MobileMarquee() {
  const doubled = [...MOBILE_SCREENSHOTS, ...MOBILE_SCREENSHOTS];
  const [paused, setPaused] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="animate-marquee flex gap-4"
          style={{ width: "max-content", animationPlayState: paused ? "paused" : "running" }}
        >
          {doubled.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              style={{ width: 240, height: 520 }}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover object-top"
                sizes="240px"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AudioPresetPicker() {
  const [active, setActive] = useState(0);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-stone-600">
        Five audio presets — click to explore
      </p>
      <div className="mb-5 flex flex-wrap gap-2">
        {AUDIO_PRESETS.map((preset, i) => (
          <button
            key={preset.name}
            onClick={() => setActive(i)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] transition-all duration-200 ${
              i === active
                ? `${preset.border} ${preset.bg} ${preset.color}`
                : "border-white/[0.05] bg-white/[0.01] text-stone-600 hover:text-stone-400"
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="text-sm leading-relaxed text-stone-400"
        >
          {AUDIO_PRESETS[active].desc}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function CharacterStateExplorer() {
  const [active, setActive] = useState(0);
  const state = CHARACTER_STATES[active];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      {/* Tab strip */}
      <div className="flex border-b border-white/[0.06]">
        {CHARACTER_STATES.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`flex-1 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-all duration-200 ${
              i === active ? `${s.color} ${s.bg}` : "text-stone-600 hover:text-stone-400"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {/* Preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-6 px-6 py-5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={state.src}
            alt={`Flowmato ${state.label}`}
            className="h-24 w-24 shrink-0 object-contain"
          />
          <div>
            <p className={`mb-1 font-mono text-[10px] uppercase tracking-widest ${state.color}`}>
              {state.label}
            </p>
            <p className="text-sm leading-relaxed text-stone-400">{state.desc}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function InteractiveSessionArc() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">Session arc — hover to explore</p>
      <div className="flex items-center gap-0 overflow-x-auto">
        {SESSION_ARC.map((step, i, arr) => (
          <div key={step.state} className="flex shrink-0 items-center">
            <motion.div
              className="flex flex-col items-center gap-1 cursor-pointer rounded-lg px-3 py-2 text-center transition-all duration-200"
              onHoverStart={() => setActiveStep(i)}
              onHoverEnd={() => setActiveStep(null)}
              animate={{
                backgroundColor: activeStep === i ? "rgba(167,139,250,0.08)" : "transparent",
              }}
            >
              <span className={`font-mono text-[9px] uppercase tracking-wider transition-colors duration-200 ${activeStep === i ? "text-stone-400" : "text-stone-600"}`}>
                {step.phase}
              </span>
              <span className={`text-xs font-semibold transition-colors duration-200 ${activeStep === i ? "text-violet-300" : "text-violet-400"}`}>
                {step.state}
              </span>
              <span className={`text-[10px] transition-colors duration-200 ${activeStep === i ? "text-stone-500" : "text-stone-600"}`}>
                {step.note}
              </span>
            </motion.div>
            {i < arr.length - 1 && (
              <span className={`shrink-0 font-mono transition-colors duration-200 ${activeStep === i || activeStep === i + 1 ? "text-violet-600" : "text-stone-700"}`}>→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthStagesInteractive() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex gap-3 overflow-x-auto px-6 pb-4 sm:justify-center">
      {GROWTH_STAGES.map((stage, i) => (
        <motion.div
          key={stage.label}
          className="flex shrink-0 flex-col items-center gap-2 cursor-pointer"
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          animate={{ y: hovered === i ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border transition-all duration-200 ${
            hovered === i ? "border-violet-500/40 bg-violet-900/30" : "border-emerald-900/40 bg-emerald-950/60"
          }`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={stage.src} alt={stage.label} className="h-14 w-14 object-contain" />
          </div>
          <span className={`font-mono text-[9px] uppercase tracking-wider transition-colors duration-200 ${hovered === i ? "text-violet-400" : "text-stone-600"}`}>
            {i + 1}. {stage.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function TimerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      <video
        ref={videoRef}
        src="/screenshots/flowmate/flowmato/progress/flowmato_growing.mp4"
        loop
        playsInline
        muted
        className="w-full"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        onClick={toggle}
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-100"
        style={{ opacity: playing ? 0 : 1 }}
        aria-label={playing ? "Pause" : "Play"}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xl transition-transform duration-200 hover:scale-110">
          {playing ? "⏸" : "▶"}
        </div>
      </button>
      {playing && (
        <button
          onClick={toggle}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200"
          aria-label="Pause"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xl transition-transform duration-200 hover:scale-110">
            ⏸
          </div>
        </button>
      )}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
        <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Flowmato growing — live session</p>
      </div>
    </div>
  );
}

export default function FlowMateCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100">
      {/* Ambient lighting */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-60 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[700px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-700/[0.04] blur-[120px]" />
      </div>

      <main id="main-content" className="relative z-10">
        {/* Back nav */}
        <div className="mx-auto max-w-3xl px-6 pt-10">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-500 transition-colors duration-200 hover:text-violet-400"
          >
            <span aria-hidden="true">←</span>
            Back to projects
          </a>
        </div>

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 pb-16 pt-12">
          <FadeUp className="mb-6 flex flex-wrap items-center gap-2">
            {["React / Next.js", "Audio Engineering", "Product Engineering", "Character Design"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-400"
              >
                {tag}
              </span>
            ))}
          </FadeUp>

          <FadeUp>
            <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-stone-100 sm:text-5xl">
              FlowMate
            </h1>
            <p className="mb-3 text-lg text-violet-400">
              An audio-guided timer built around one intent
            </p>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              Built solo: product strategy, full-stack engineering, audio system design, and character illustration — from first sketch to shipped app on web and Android.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              Most timers ask you to watch them. FlowMate delivers time awareness through audio — spoken cues that keep you oriented through the arc of a session without pulling your attention away from the work.
              Before each session starts, you name one thing you&apos;re focusing on. That single intent anchors the session, and the timer runs from there.
            </p>
          </FadeUp>

          {/* Stats */}
          <FadeUp className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-5">
            {[
              { number: "~1,000", label: "Active users" },
              { number: "40+", label: "Voice cues" },
              { number: "5", label: "Audio presets" },
              { number: "2", label: "Platforms shipped" },
              { number: "Solo", label: "Design + eng" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 bg-white/[0.02] px-6 py-5 text-center"
              >
                <span className="font-mono text-2xl font-semibold text-violet-400">{stat.number}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-600">{stat.label}</span>
              </div>
            ))}
          </FadeUp>

          {/* Links */}
          <FadeUp className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://flowmate.club"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-400"
            >
              View live site →
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=club.flowmate.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-violet-500/25 bg-violet-500/[0.04] px-5 py-2.5 text-sm font-semibold text-stone-300 transition-colors duration-200 hover:border-violet-500/40 hover:text-stone-100"
            >
              Android app →
            </a>
            <a
              href="https://github.com/lydiacodesdaily/flowmate"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-stone-500 transition-colors duration-200 hover:border-white/[0.12] hover:text-stone-400"
            >
              GitHub
            </a>
            <div className="flex items-center gap-2 rounded-xl border border-orange-500/20 bg-orange-500/[0.04] px-5 py-2.5">
              <span className="text-sm font-semibold text-stone-500">iOS</span>
              <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-orange-400">
                In Review
              </span>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Visual Layer — Flowmato ──────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Visual Layer
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Flowmato — visual reinforcement
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              When you are looking at the screen, Flowmato reflects where you are in the session. It is the visual counterpart to the audio system — not the primary mechanism,
              but a reinforcing layer for the moments when your eyes are on the app. The character and the cues represent the same underlying state through different channels.
            </p>
          </FadeUp>

          {/* Step 1 */}
          <FadeUp className="mb-10 flex gap-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 font-mono text-sm font-semibold text-violet-400">
              1
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-stone-100">Hand-drawn character exploration</h3>
              <p className="mb-5 text-sm leading-relaxed text-stone-400">
                Started with pencil silhouettes to lock in personality before touching code. The tomato shape solved two problems at once: instantly readable as Pomodoro without being literal, and the round form naturally supports expressive facial states. I sketched the character in Procreate on iPad, building in layers — rough pencil sketch, then linework, then shading.
              </p>
              <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/flowmate/flowmato/handdrawn_flowmato.png"
                  alt="Hand-drawn Flowmato sketch"
                  className="h-48 w-full object-contain p-6"
                />
              </div>
            </div>
          </FadeUp>

          {/* Step 2 */}
          <FadeUp className="mb-10 flex gap-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 font-mono text-sm font-semibold text-violet-400">
              2
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-stone-100">AI as a divergence tool</h3>
              <p className="mb-5 text-sm leading-relaxed text-stone-400">
                Used AI image generation to rapidly stress-test silhouette readability, emotional clarity, and pose range — not to produce final assets, but to compress divergent exploration. Generated ~60 variations in under an hour to evaluate and discard directions that would have taken days to sketch. The questions driving each batch were specific: does this pose read as focused or strained at small size? Does the eye shape communicate warmth and support?
              </p>
              <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/flowmate/flowmato/flowmato.png"
                  alt="Final Flowmato character"
                  className="h-48 w-full object-contain p-6"
                />
              </div>
            </div>
          </FadeUp>

          {/* Step 3 */}
          <FadeUp className="flex gap-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 font-mono text-sm font-semibold text-violet-400">
              3
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-stone-100">Mapping states to the session arc</h3>
              <p className="mb-5 text-sm leading-relaxed text-stone-400">
                Each visual state maps to a real moment in a focus session. The design constraint was precise: posture, expression, and animation had to communicate a distinct phase — immediately and without text labels. The four states mirror the same arc that audio cues demarcate, so both channels reinforce each other.
              </p>

              {/* Interactive session arc */}
              <InteractiveSessionArc />

              {/* Interactive character states */}
              <CharacterStateExplorer />

              {/* State descriptions */}
              <ul className="mt-5 space-y-1.5 text-sm text-stone-500">
                {[
                  { state: "Idle", desc: "❤️ floats upward. A slow breathing pulse — welcoming, not urgent. Flowmato is thinking." },
                  { state: "Focused", desc: "Wired glasses on, eyes fixed on the laptop. No ambient motion — stillness signals intensity." },
                  { state: "Break", desc: "Sunk into a bean bag with a matcha latte. Earned rest reads as reward, not obligation." },
                  { state: "Celebrating", desc: "Bouncing up and down with confetti flying. The session ended — Flowmato marks the moment." },
                ].map((item) => (
                  <li key={item.state} className="flex gap-2">
                    <span className="shrink-0 text-violet-400/60">—</span>
                    <span>
                      <span className="text-stone-300">{item.state}</span>: {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Growth progression ───────────────────────────────── */}
        <Section className="py-16">
          <FadeUp className="mx-auto mb-6 max-w-3xl px-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Growth System
            </p>
            <p className="mt-1 text-sm text-stone-400">
              Flowmato grows across a session — a visual progress signal for the moments when you do look at the screen. It accumulates in parallel with the audio layer, reinforcing the same arc.
            </p>
          </FadeUp>
          <FadeUp>
            <GrowthStagesInteractive />
          </FadeUp>

          {/* Timer video */}
          <FadeUp className="mx-auto mt-10 max-w-sm px-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Watch it grow
            </p>
            <TimerVideo />
          </FadeUp>
        </Section>

        {/* ─── Problem ──────────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <div className="flex gap-5">
              <div className="mt-1 w-0.5 shrink-0 rounded-full bg-violet-400/60" />
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
                  The Problem
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-100">
                  Clock-checking and scattered intent both break focus.
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Standard timers display time. They don&apos;t deliver it. To know where you are in a session, you have to stop, look, and reorient —
                  an attention shift that compounds across every check. In deep work, that interruption breaks flow.
                  In physical tasks — cooking, working out, cleaning — it isn&apos;t even possible.
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  The second problem is fuzzier but just as damaging: starting a session without a clear anchor. You open a timer with a vague sense of what you&apos;re doing.
                  Ten minutes in, you&apos;ve half-answered an email, half-fixed a bug, and checked Slack once.
                  The time was spent, but nothing was actually finished.
                </p>
                <p className="text-sm leading-relaxed text-stone-300">
                  FlowMate addresses both: time awareness comes to you through audio, and each session begins with a single named intent.
                </p>
              </div>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Product System ───────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Product System
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Three interacting systems
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              FlowMate is built around three distinct but connected subsystems. Each one addresses a different failure mode of the standard focus timer.
            </p>
          </FadeUp>

          <div className="mb-1 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                number: "01",
                label: "Audio time awareness",
                desc: "Spoken cues that deliver time across the arc of a session — seconds, minutes, halfway, countdown. The timer runs without requiring a glance.",
                color: "text-violet-400",
                border: "border-violet-500/20",
                bg: "bg-violet-500/[0.04]",
              },
              {
                number: "02",
                label: "Focus intent",
                desc: "Each session starts with one named goal. Optional step breakdown up to five items — enough structure to begin, not enough to plan instead of do.",
                color: "text-orange-400",
                border: "border-orange-500/20",
                bg: "bg-orange-500/[0.04]",
              },
              {
                number: "03",
                label: "Flexible sessions",
                desc: "Add time, extend into another pomodoro, end early, or resume an unfinished task from history. Sessions adapt to real work — not the other way around.",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
                bg: "bg-emerald-500/[0.04]",
              },
            ].map((pillar) => (
              <FadeUp key={pillar.number}>
                <div className={`h-full rounded-2xl border ${pillar.border} ${pillar.bg} p-5`}>
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${pillar.color} opacity-60`}>{pillar.number}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${pillar.color}`}>{pillar.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-400">{pillar.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Section>

        {/* ─── Audio Awareness ──────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              System 01
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Audio time awareness
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              The primary interface is sound. FlowMate schedules voice cues across the arc of a session — not as notifications, but as ambient time markers that maintain orientation without demanding attention.
              The timer is fully usable without looking at a screen.
            </p>
          </FadeUp>

          {/* Cue types */}
          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                label: "Seconds cues",
                icon: "·",
                desc: "Fine-grained audio markers within the final stretch of a session — subtle ticks or brief tones that signal the passing of seconds without requiring a glance.",
                color: "text-sky-400",
                border: "border-sky-500/15",
                bg: "bg-sky-500/[0.03]",
              },
              {
                label: "Minute announcements",
                icon: "◎",
                desc: "Spoken reminders at key minute intervals — \"10 minutes remaining\", \"5 minutes remaining\" — delivered in your chosen voice and cadence. The session speaks for itself.",
                color: "text-violet-400",
                border: "border-violet-500/15",
                bg: "bg-violet-500/[0.03]",
              },
              {
                label: "Halfway reminders",
                icon: "◑",
                desc: "A single spoken cue at the session midpoint. Knowing you are halfway through reorients effort without requiring a clock check — often the most motivating moment in a session.",
                color: "text-orange-400",
                border: "border-orange-500/15",
                bg: "bg-orange-500/[0.03]",
              },
              {
                label: "Countdown cues",
                icon: "▽",
                desc: "Spoken countdown in the final seconds — 3, 2, 1. Prepares you for the transition rather than cutting you off cold. The end of a session feels deliberate, not abrupt.",
                color: "text-emerald-400",
                border: "border-emerald-500/15",
                bg: "bg-emerald-500/[0.03]",
              },
            ].map((cue) => (
              <FadeUp key={cue.label}>
                <div className={`h-full rounded-2xl border ${cue.border} ${cue.bg} p-5`}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`font-mono text-lg ${cue.color}`}>{cue.icon}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${cue.color}`}>{cue.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-400">{cue.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Interactive audio presets */}
          <FadeUp>
            <AudioPresetPicker />
          </FadeUp>

          {/* Use contexts */}
          <FadeUp className="mt-6">
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">Works when you are not at your screen</p>
              <div className="flex flex-wrap gap-2">
                {["Deep work", "Coding", "Taking a shower", "Cooking", "Cleaning", "Working out", "Chores", "Studying"].map((ctx) => (
                  <span
                    key={ctx}
                    className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-stone-500"
                  >
                    {ctx}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Focus Intent ─────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              System 02
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Focus intent
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-stone-500">
              Each session starts with a single named goal. The intent is set before the timer begins — not mid-session, not after the fact.
              This small friction point is the product. It forces a moment of clarity before committing time.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {[
              {
                label: "One goal per session",
                desc: "A single text field that asks: what are you working on? Not a project, not a list — one concrete thing. Naming it out loud (even to a timer) reduces the pre-session drift that pulls attention in multiple directions before work even begins.",
              },
              {
                label: "Up to five steps",
                desc: "If the goal needs breaking down, users can add up to five sub-steps. The limit is intentional. Five is enough to clarify the path without turning the timer into a task manager. The constraint keeps setup fast and prevents over-planning as a form of avoidance.",
              },
              {
                label: "Designed to start — not to organize",
                desc: "The intent system exists to reduce activation energy, not to track everything. It surfaces only when you initiate a session, disappears while the timer runs, and doesn't accumulate into a backlog. FlowMate is not a to-do app.",
              },
            ].map((item) => (
              <FadeUp key={item.label}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <h3 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-orange-400">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-stone-400">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Section>

        {/* ─── Flexible Sessions ────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              System 03
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Flexible sessions
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-stone-500">
              Real work rarely fits a clean 25-minute block. A strict Pomodoro forces you to either stop mid-thought or ignore the timer entirely.
              FlowMate treats session boundaries as suggestions that the user controls — not hard stops.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                label: "Add more time",
                desc: "Extend the current session without breaking rhythm. If you're in the middle of something, one tap buys more time and the audio cues recalibrate to the new duration.",
                color: "text-emerald-400",
                border: "border-emerald-500/15",
                bg: "bg-emerald-500/[0.03]",
              },
              {
                label: "Extend into another pomodoro",
                desc: "Chain sessions together when the work calls for it. The state machine handles the transition — a new timer begins with the same intent already set.",
                color: "text-sky-400",
                border: "border-sky-500/15",
                bg: "bg-sky-500/[0.03]",
              },
              {
                label: "End early",
                desc: "Finish when the work is done, not when the clock hits zero. Ending early is not failure — it means the session served its purpose. The session is logged either way.",
                color: "text-violet-400",
                border: "border-violet-500/15",
                bg: "bg-violet-500/[0.03]",
              },
              {
                label: "Resume from history",
                desc: "Unfinished tasks are saved to history. If a session ends before the goal was met, it can be picked up in the next session — with the same intent and step list intact.",
                color: "text-orange-400",
                border: "border-orange-500/15",
                bg: "bg-orange-500/[0.03]",
              },
            ].map((item) => (
              <FadeUp key={item.label}>
                <div className={`h-full rounded-2xl border ${item.border} ${item.bg} p-5`}>
                  <h3 className={`mb-2 font-mono text-[10px] uppercase tracking-widest ${item.color}`}>{item.label}</h3>
                  <p className="text-sm leading-relaxed text-stone-400">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Section>

        {/* ─── Engineering ──────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Engineering
            </p>
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-stone-100">
              One state machine driving three synchronized outputs
            </h2>

            {/* Hard problem callout */}
            <div className="mb-6 rounded-xl border border-violet-500/15 bg-violet-500/[0.04] p-5">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">Core challenge</p>
              <p className="mb-3 text-sm font-medium text-stone-200">
                Keeping audio cues, visual state, and Picture-in-Picture behavior synchronized — across web and Android — without brittle event-handler chains or platform-diverging logic.
              </p>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-stone-600">How I solved it</p>
              <ul className="space-y-1.5 text-sm text-stone-400">
                {[
                  "Modeled the session as a single timer state machine — one timerPhase value drives audio scheduling, character state, and PiP simultaneously",
                  "Audio cues are scheduled declaratively from elapsed time and duration — not imperatively from UI events, so they cannot drift out of sync",
                  "Focus intent and session control (add time, extend, end early) are explicit state transitions — not side effects",
                  "Shared timer logic in @flowmate/shared runs identically on web and Android; only the render target differs",
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audio scheduling code block */}
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Audio cue scheduler
            </div>
            <div className="mb-6 overflow-x-auto rounded-xl border border-white/[0.05] bg-[#0d0d1a] p-5 font-mono text-[12px] leading-relaxed">
              <div className="text-stone-600">{"// Cues are derived from elapsed time — not UI events"}</div>
              <div className="mt-1">
                <span className="text-violet-300">function</span>
                <span className="text-stone-300"> {"getCuesForTick(elapsed, duration) {"}</span>
              </div>
              <div className="pl-4 text-stone-400">{"const remaining = duration - elapsed;"}</div>
              <div className="pl-4 text-stone-400">{"const cues = [];"}</div>
              <div className="mt-2 pl-4">
                <span className="text-stone-600">{"// Halfway reminder"}</span>
              </div>
              <div className="pl-4 text-stone-400">
                {"if (elapsed === Math.floor(duration / 2)) cues.push("}
                <span className="text-orange-300">&quot;halfway&quot;</span>
                {");"}
              </div>
              <div className="mt-1 pl-4">
                <span className="text-stone-600">{"// Minute announcements"}</span>
              </div>
              <div className="pl-4 text-stone-400">
                {"if (remaining > 0 && remaining % 60 === 0) cues.push("}
                <span className="text-orange-300">&quot;minute:&quot; + remaining / 60</span>
                {");"}
              </div>
              <div className="mt-1 pl-4">
                <span className="text-stone-600">{"// Countdown cues"}</span>
              </div>
              <div className="pl-4 text-stone-400">
                {"if ([10, 5, 3, 2, 1].includes(remaining)) cues.push("}
                <span className="text-orange-300">&quot;countdown:&quot; + remaining</span>
                {");"}
              </div>
              <div className="pl-4 text-stone-400">{"return cues;"}</div>
              <div className="text-stone-300">{"}"}</div>
              <div className="mt-3 text-stone-600">{"// Single tick drives all three output layers"}</div>
              <div className="text-stone-400">{"onTick(elapsed, duration) {"}</div>
              <div className="pl-4 text-violet-300">{"updateTimerPhase(elapsed, duration)   "}<span className="text-stone-600">{"// → visual + PiP"}</span></div>
              <div className="pl-4 text-emerald-400">{"scheduleAudioCues(elapsed, duration)  "}<span className="text-stone-600">{"// → audio layer"}</span></div>
              <div className="text-stone-400">{"}"}</div>
            </div>

            {/* Key engineering decisions */}
            <ul className="space-y-3 text-sm text-stone-400">
              {[
                { label: "Timer state machine", desc: "Session lifecycle — idle, intent-setting, running, paused, break, complete — is modeled as explicit states. Flexible session controls (add time, extend, end early) are transitions, not ad-hoc mutations. New states require one config entry, not rewiring event handlers." },
                { label: "Audio cue scheduling", desc: "Cues are computed purely from elapsed time and session duration. Adding a new cue type means adding one rule to the scheduler — no UI wiring needed. Audio and visual outputs share the same timerPhase source, so they cannot fall out of sync." },
                { label: "Cross-platform shared logic", desc: "Web (Next.js) and Android (Expo) share business logic via @flowmate/shared in a Turborepo monorepo. Timer rules, state machine, and audio triggers live once and run on both platforms. Platform-specific code handles only rendering and native APIs." },
                { label: "Preset-based audio system", desc: "Five presets (Full, Gentle, Minimal, Silent, Hi-Fi) control cue density and voice character. The preset layer sits above the scheduler — same cue logic, different output rules. Switching presets doesn't reload audio files." },
                { label: "Document PiP API", desc: "Timer floats in a picture-in-picture window — persistent while working in other apps. Character state updates from the same timerPhase, so PiP and the main UI never diverge." },
                { label: "ElevenLabs TTS pipeline", desc: "40+ voice cue files generated, catalogued, and mapped to timer events. Audio was treated as a first-class interface layer from the start — production quality, not prototype sound." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/50" />
                  <span>
                    <span className="text-stone-200">{item.label}</span>: {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </Section>

        {/* ─── Design Psychology ────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp className="overflow-hidden rounded-2xl border border-violet-500/15 bg-violet-500/[0.04] p-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Design Psychology
            </p>
            <h2 className="mb-4 text-xl font-semibold tracking-tight text-stone-100">
              Two channels, one signal
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              Audio and visual outputs represent the same underlying session state through different modalities. Audio delivers time awareness passively — it reaches you wherever your attention is.
              Flowmato delivers it visually — for the moments when you do look at the screen, the character reflects where you are without requiring you to read a number.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              The design goal was a timer that stays out of the way until it has something worth saying. Audio cues are the primary mechanism for that — they are scheduled, purposeful, and brief.
              The character adds a layer of{" "}
              <em className="text-stone-300">relationship</em> to the visual surface:{" "}
              Flowmato in Focused state — still, intense, no ambient motion — mirrors back the quality of attention you are trying to maintain.
            </p>
            <p className="text-sm leading-relaxed text-stone-400">
              Neither channel creates pressure. Both reinforce structure. The combination is{" "}
              <span className="text-stone-200">calm presence</span> — a system that supports focus without inserting itself into it.
            </p>
          </FadeUp>
        </Section>

        {/* ─── Mobile Screenshots ───────────────────────────────── */}
        <Section className="py-16">
          <FadeUp className="mx-auto mb-6 max-w-3xl px-6">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              The App
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-stone-100">
                Shipped on Android &amp; Web
              </h2>
              <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-orange-400">
                iOS · In Review
              </span>
            </div>
            <p className="mt-2 text-sm text-stone-500">
              All platforms share the same timer logic, state machine, and audio system via a shared monorepo package. Android is live but unpromoted — holding until iOS ships so both platforms launch together.
            </p>
          </FadeUp>
          <FadeUp>
            <MobileMarquee />
          </FadeUp>
        </Section>

        {/* ─── Tech Stack ───────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "React Native",
                "Expo",
                "SVG animation",
                "ElevenLabs TTS",
                "Document PiP API",
                "HTML5 Audio API",
                "Turborepo monorepo",
                "OpenAI",
                "Claude",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-stone-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </Section>

        {/* ─── Outcome & Learnings ──────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Results
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              What shipped and what I learned
            </h2>
            <p className="mb-8 text-sm text-stone-500">
              Early testers responded most strongly to the spoken cues — not the character. Knowing the timer would tell them when it mattered meant they stopped checking. That validated the core premise: audio awareness changes how you relate to a timer, not just how you see it.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {OUTCOME_CARDS.map((card) => (
              <FadeUp key={card.title}>
                <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <span className="mb-3 block text-2xl text-violet-400/60">{card.icon}</span>
                  <h3 className="mb-2 text-sm font-semibold text-stone-100">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-500">{card.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Section>

        {/* ─── What's Next ──────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <div className="flex gap-5">
              <div className="mt-1 w-0.5 shrink-0 rounded-full bg-stone-700" />
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">
                  What I&apos;d do next
                </p>
                <h2 className="mb-4 text-xl font-semibold tracking-tight text-stone-100">
                  Open questions worth testing
                </h2>
                <ul className="space-y-3 text-sm text-stone-400">
                  {[
                    "Measure whether audio cues alone — without the character — are sufficient for certain users and contexts. The hypothesis is that audio is primary; the character is additive. That needs data.",
                    "Adapt cue density to session length. A 5-minute sprint and a 90-minute deep work block have different rhythms — the scheduler should reflect that without manual configuration.",
                    "Personalize voice tone and cue timing based on session type: deep work, admin tasks, and physical activities each have different attention patterns.",
                    "Explore adaptive cue timing based on subtask progress — if tasks are tracked, cues could acknowledge completion rather than only marking elapsed time.",
                    "Explore a web-based social layer: ambient awareness of others in session, without chat or notifications.",
                  ].map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </Section>

      </main>
    </div>
  );
}
