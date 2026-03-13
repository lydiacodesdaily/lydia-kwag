"use client";

import { motion, type Variants } from "framer-motion";

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

const DESIGN_FEATURES = [
  {
    icon: "◎",
    label: "Progressive disclosure",
    desc: "The run screen surfaces 2 primary actions (Pause / Done with this), not 8. \"Need more time\" reveals extension options only when tapped — reducing visible decisions from 8+ to 2, then 3.",
    color: "text-violet-400",
    border: "border-violet-500/15",
    bg: "bg-violet-500/[0.03]",
  },
  {
    icon: "·",
    label: "Supportive language",
    desc: "\"How are you feeling today?\" not \"Select mode.\" \"Done with this →\" not \"Skip.\" Overtime messages are non-judgmental: \"It's okay to take your time.\" \"No rush.\"",
    color: "text-sky-400",
    border: "border-sky-500/15",
    bg: "bg-sky-500/[0.03]",
  },
  {
    icon: "▽",
    label: "No streaks, no guilt",
    desc: "Energy is selected fresh each day. Optional items expire at midnight — no rollover pressure, no record of failure. The app never reminds you what you didn't do.",
    color: "text-emerald-400",
    border: "border-emerald-500/15",
    bg: "bg-emerald-500/[0.03]",
  },
  {
    icon: "⌘",
    label: "Accessible by default",
    desc: "44pt+ touch targets, color contrast optimized for calm readability, VoiceOver/TalkBack labels on all interactive elements, letter-spacing tuned for dyslexic users.",
    color: "text-orange-400",
    border: "border-orange-500/15",
    bg: "bg-orange-500/[0.03]",
  },
];

const CORE_SYSTEMS = [
  {
    number: "01",
    label: "Energy-Adaptive Routines",
    desc: "Each task in a routine template carries three boolean flags: lowIncluded, steadyIncluded, flowIncluded. Selecting an energy level each morning filters the task list dynamically via a pure deriveTasksForPace() function. A Low day shows only essentials; a Flow day surfaces bonus tasks. The template is never edited — the run adapts at runtime.",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/[0.04]",
  },
  {
    number: "02",
    label: "Timestamp-Based Execution Engine",
    desc: "A routine run is a live, mutable snapshot created from a template. The timer uses absolute Unix timestamps (startedAt, plannedEndAt) rather than interval counters, so it survives app backgrounding and system interruptions without drift. Remaining time is computed from Date.now() on each tick. All state transitions — start, pause, resume, skip, extend, advance — are pure functions: (currentRun, ...args) => RoutineRun. No side effects; fully testable.",
    color: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/[0.04]",
  },
  {
    number: "03",
    label: "GTD-Informed Capture System",
    desc: "Partway through building, I noticed the energy + routine system felt incomplete. Reading Getting Things Done by David Allen surfaced what was missing: a trusted system for capturing open loops. JustToday now incorporates projects, tasks organized by Today/Later, and a weekly review workflow — GTD's capture and clarify phases adapted for neurodivergent users who need low-friction entry points over rigid structure.",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/[0.04]",
  },
];

export default function JustTodayCaseStudy() {
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
            {["iOS · Web", "Indie Product", "Neurodivergent-Friendly", "GTD-Inspired"].map((tag) => (
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
              JustToday
            </h1>
            <p className="mb-3 text-lg text-violet-400">
              A neurodivergent-friendly routine execution engine
            </p>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              JustToday is a real-time routine execution companion for people who struggle with starting.
              It&apos;s not a habit tracker or planner — it&apos;s a calm, judgment-free guide that helps you get
              through your day one step at a time, adapting to the energy you actually have.
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              Most productivity apps optimize for planning. JustToday solves a different problem: execution.
              The question isn&apos;t &ldquo;did you complete your habit?&rdquo; but &ldquo;what do you do right now,
              with the energy you actually have today?&rdquo;
            </p>
          </FadeUp>

          {/* Scope */}
          <FadeUp className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-4">
            {[
              { number: "2", label: "Platforms shipped" },
              { number: "3", label: "Energy modes" },
              { number: "22+", label: "Unit tests" },
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
              href="https://justtoday.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-400"
            >
              Visit justtoday.app →
            </a>
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
                  Planning isn&apos;t the bottleneck. Starting is.
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Habit trackers reward streaks. Planners optimize for scheduling. Todo apps fill up with items that never get touched.
                  All of these tools assume the hard part is remembering what to do — but for many neurodivergent users, the hard part is initiating.
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Existing tools also assume consistent capacity. They don&apos;t account for the fact that the same person
                  has a Low day and a Flow day — and needs their tool to adapt, not judge.
                </p>
                <p className="text-sm leading-relaxed text-stone-300">
                  JustToday doesn&apos;t ask what you planned. It asks how you&apos;re feeling today, and guides you from there.
                </p>
              </div>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Core Systems ─────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Core Systems
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Three interlocking systems, built from first principles
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              Each system solves one piece of the execution problem — and they compound when combined.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {CORE_SYSTEMS.map((item) => (
              <FadeUp key={item.number}>
                <div className={`rounded-2xl border ${item.border} ${item.bg} p-6`}>
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${item.color} opacity-60`}>{item.number}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${item.color}`}>{item.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-400">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Section>

        {/* ─── Design Layer ─────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Design Layer
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Neurodivergent-first UX
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              Every interaction is designed to reduce cognitive load, not add to it.
            </p>
          </FadeUp>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DESIGN_FEATURES.map((feature) => (
              <FadeUp key={feature.label}>
                <div className={`h-full rounded-2xl border ${feature.border} ${feature.bg} p-5`}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`font-mono text-lg ${feature.color}`}>{feature.icon}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${feature.color}`}>{feature.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-400">{feature.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Section>

        {/* ─── Engineering Architecture ─────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Engineering Architecture
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Two codebases. One engine.
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-stone-500">
              iOS and web are built as separate codebases rather than a shared monorepo package — a deliberate pragmatic choice for v1 that allows platform-specific optimizations without coordination overhead.
            </p>
          </FadeUp>

          <div className="space-y-4">
            <FadeUp>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-500">State management</p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Mobile uses React Context + useState with auto-save to AsyncStorage on every mutation.
                  Web uses Zustand with persist middleware and localStorage. Both call the same pure engine functions —
                  the divergence is only in how state is held and persisted, not in the logic itself.
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-500">Platform-aware audio</p>
                <p className="text-sm leading-relaxed text-stone-400">
                  Audio resolves by platform file extension: soundEngine.web.ts uses the Web Audio API;
                  the native version uses expo-av. Metro and Next.js auto-resolve the right file by platform.
                  An audio queue prevents overlapping announcements.
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-stone-600">
                  Key technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Expo",
                    "Expo Router",
                    "TypeScript",
                    "Next.js 16",
                    "Zustand",
                    "AsyncStorage",
                    "Web Speech API",
                    "expo-speech",
                    "Web Audio API",
                    "expo-av",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-stone-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Section>

        {/* ─── What I Learned ───────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <div className="flex gap-5">
              <div className="mt-1 w-0.5 shrink-0 rounded-full bg-stone-700" />
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">
                  What I Learned
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  The biggest design insight was that a tool for neurodivergent users needs to be honest about
                  capacity — not optimistic. The energy mode system came from recognizing that the same person
                  has a Low day and a Flow day, and their tool should reflect that without judgment.
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  The GTD integration came from noticing a gap: routines help you execute known sequences,
                  but users also needed a trusted place for everything else floating in their head.
                  Reading Getting Things Done mid-build surfaced what was missing — and integrating it showed
                  that good product thinking is iterative, not planned from the start.
                </p>
                <p className="text-sm leading-relaxed text-stone-500">
                  Combining energy-aware execution with GTD-style capture is what makes JustToday feel complete.
                  Neither system works as well alone.
                </p>
              </div>
            </div>
          </FadeUp>
        </Section>

      </main>
    </div>
  );
}
