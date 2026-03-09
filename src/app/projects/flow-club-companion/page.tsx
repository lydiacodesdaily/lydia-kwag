"use client";

import { motion, type Variants } from "framer-motion";
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

const FEATURES = [
  {
    icon: "·",
    label: "Tick sounds",
    desc: "A soft metronome every second — grounding for users who struggle with time perception. The session becomes something you can hear, not just watch.",
    color: "text-sky-400",
    border: "border-sky-500/15",
    bg: "bg-sky-500/[0.03]",
  },
  {
    icon: "◎",
    label: "Voice announcements",
    desc: "Spoken time updates at configurable intervals (1, 5, or 10 minutes) so you can stay aware of the session without needing to check the clock.",
    color: "text-violet-400",
    border: "border-violet-500/15",
    bg: "bg-violet-500/[0.03]",
  },
  {
    icon: "▽",
    label: "Seconds countdown",
    desc: "Optional final-seconds alerts to ease session transitions. The end of a session feels deliberate, not abrupt — no jarring cut-offs.",
    color: "text-emerald-400",
    border: "border-emerald-500/15",
    bg: "bg-emerald-500/[0.03]",
  },
  {
    icon: "⇄",
    label: "Two-way task sync",
    desc: "Copy tasks between the extension and Flow Club's native \"My Goals\" panel. One less context switch between where you plan and where you work.",
    color: "text-orange-400",
    border: "border-orange-500/15",
    bg: "bg-orange-500/[0.03]",
  },
];

const TECH_HIGHLIGHTS = [
  {
    number: "01",
    label: "Cross-browser, parallel codebases",
    desc: "Chrome (Manifest V3) and Firefox Add-on maintained in parallel — two meaningfully different extension APIs, two separate publishing pipelines.",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/[0.04]",
  },
  {
    number: "02",
    label: "DOM observation without official API",
    desc: "MutationObserver watches Flow Club's session timer directly from the DOM. No official API — just resilient observation of what the page renders.",
    color: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/[0.04]",
  },
  {
    number: "03",
    label: "Audio systems from scratch",
    desc: "Web Audio API for tick generation and volume control. Web Speech API for voice announcements. Both tuned to be calm rather than alarming.",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/[0.04]",
  },
];

export default function FlowClubCompanionCaseStudy() {
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
            {["Chrome Extension", "Firefox Add-on", "Indie Product", "Neurodivergent-Friendly"].map((tag) => (
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
              Flow Club Companion
            </h1>
            <p className="mb-3 text-lg text-violet-400">
              A browser extension supporting time awareness in virtual coworking sessions
            </p>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              Flow Club is a virtual coworking platform where people work together in timed sessions.
              While the platform provides structure, it&apos;s still easy to lose track of time during a session —
              either by becoming deeply absorbed in a task or drifting into distractions.
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              As a heavy Flow Club user myself, I experienced this repeatedly. Sometimes I would look up and realize the session was almost over.
              Other times I would drift away from the task entirely. In both cases, the timer on screen didn&apos;t help unless I stopped and checked it.
              I built Flow Club Companion to provide gentle audio cues and lightweight task support so users can stay aware of time passing
              without needing to constantly check the timer.
            </p>
          </FadeUp>

          {/* Stats */}
          <FadeUp className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-4">
            {[
              { number: "~100", label: "Active users" },
              { number: "2", label: "Browsers shipped" },
              { number: "MV3", label: "Architecture" },
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
                  You lose track of the session — in both directions.
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Flow Club sessions provide real structure: a shared start time, a defined duration, and people working alongside you.
                  But structure alone doesn&apos;t solve attention drift.
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Sometimes you become deeply absorbed in a task and suddenly realize the session is ending.
                  Other times attention drifts and you lose the sense of the session entirely.
                  In both cases, the timer on screen isn&apos;t enough — it only helps if you interrupt your work to look at it.
                </p>
                <p className="text-sm leading-relaxed text-stone-300">
                  Flow Club Companion introduces ambient audio cues — time awareness that reaches you without requiring visual attention.
                </p>
              </div>
            </div>
          </FadeUp>
        </Section>

        {/* ─── What It Does ─────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              What It Does
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Calm structure. Every default tuned to help without intruding.
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              Four primary features, all configurable per user — because time blindness looks different for everyone.
            </p>
          </FadeUp>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
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

          <FadeUp>
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">Per-user configurability</p>
              <p className="text-sm leading-relaxed text-stone-500">
                Volume, announcement frequency, cue type — all adjustable. The defaults are tuned to be helpful without being intrusive,
                but the extension respects that what works for one person may not work for another.
              </p>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Screenshots ──────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-8 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Extension
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FadeUp>
              <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <Image
                  src="/screenshots/flowclubcompanion/fcc_screenshot_1.jpg"
                  alt="Flow Club Companion extension popup showing audio controls and task list"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp>
              <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <Image
                  src="/screenshots/flowclubcompanion/fcc_screenshot_2.jpg"
                  alt="Flow Club Companion extension showing session timer integration"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </Section>

        {/* ─── Technical Highlights ─────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Technical Highlights
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-stone-100">
              Built on browser primitives, without official APIs
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-stone-500">
              The extension integrates deeply with Flow Club without any cooperation from the platform — pure browser APIs and observation.
            </p>
          </FadeUp>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TECH_HIGHLIGHTS.map((item) => (
              <FadeUp key={item.number}>
                <div className={`h-full rounded-2xl border ${item.border} ${item.bg} p-5`}>
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${item.color} opacity-60`}>{item.number}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${item.color}`}>{item.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-400">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-stone-600">
                Published independently
              </p>
              <div className="flex flex-wrap gap-2">
                {["Chrome Web Store", "Firefox Add-ons", "Manifest V3", "MutationObserver", "Web Audio API", "Web Speech API", "LocalStorage"].map((item) => (
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
        </Section>

        {/* ─── The Hard Part ────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-orange-400/70">
                The Hard Part
              </p>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-100">
                Platform challenges during distribution
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-stone-400">
                During development, the Chrome Web Store developer account associated with the extension was flagged and revoked,
                removing the extension from the store and disconnecting approximately 100 active users.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-stone-400">
                To recover, I established a dedicated developer account with improved publishing practices,
                republished the extension under the new account, and rebuilt the distribution pipeline across both Chrome and Firefox.
                Updates continued shipping throughout the transition.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-stone-400">
                Many of the original Chrome users are still on the older version and haven&apos;t migrated to the new one.
                That&apos;s a real loss I carry — when you have to restart from scratch, you don&apos;t just lose the install count.
                You lose the momentum the continuity that built up over time.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-stone-300">
                The experience reinforced that platform governance and account management are part of the product lifecycle, not an afterthought, when shipping software on third-party platforms.
              </p>
              <div className="mt-6 border-t border-orange-500/10 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">What I took from it</p>
                <div className="mt-3 space-y-2">
                  {[
                    "Platform governance is a product risk — treat it like one",
                    "Account hygiene matters: dedicated accounts, clean separation of concerns",
                    "You can re-publish and keep shipping — loss isn't permanent",
                  ].map((lesson) => (
                    <div key={lesson} className="flex gap-3 text-sm">
                      <span className="shrink-0 text-orange-400/60">—</span>
                      <span className="leading-relaxed text-stone-500">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Reception ────────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
              Reception
            </p>
            <blockquote className="border-l-2 border-violet-400/40 pl-6">
              <p className="mb-4 text-lg leading-relaxed text-stone-300 italic">
                &ldquo;…we&apos;ve loved seeing some of you hack together your own customizations — from Liddy&apos;s extension that adds ticking sounds,
                to scripts that categorize tasks…&rdquo;
              </p>
              <footer className="font-mono text-[11px] uppercase tracking-widest text-stone-500">
                — Ricky Yean, co-founder of Flow Club
              </footer>
            </blockquote>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Getting a public shoutout from the platform&apos;s co-founder — for a tool I built because I needed it — is one of the things I&apos;m most proud of professionally.
            </p>
          </FadeUp>
        </Section>

        {/* ─── Reflection ───────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 py-16">
          <FadeUp>
            <div className="flex gap-5">
              <div className="mt-1 w-0.5 shrink-0 rounded-full bg-stone-700" />
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-600">
                  Reflection
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Flow Club Companion started as a tool I built for my own workflow. Because I use Flow Club daily,
                  the feedback loop between product development and real usage is immediate.
                </p>
                <p className="mb-3 text-sm leading-relaxed text-stone-400">
                  Design decisions are grounded in direct experience and community feedback. Small details — audio tone,
                  cue timing, task interaction — were refined through real sessions rather than theoretical productivity frameworks.
                </p>
                <p className="text-sm leading-relaxed text-stone-500">
                  The project reinforced how small, well-designed tools can meaningfully improve how people work.
                </p>
              </div>
            </div>
          </FadeUp>
        </Section>

        {/* ─── Links ────────────────────────────────────────────── */}
        <Section className="mx-auto max-w-3xl px-6 pb-32 pt-8">
          <FadeUp>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-stone-600">
              Links
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://chromewebstore.google.com/detail/flow-club-companion/onkipfjaffclamfkknfbippcjpnfbabf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 font-mono text-xs text-stone-300 transition-colors duration-200 hover:border-violet-500/30 hover:text-violet-400"
              >
                Chrome Web Store
                <span aria-hidden="true" className="text-stone-600">→</span>
              </a>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/flow-club-companion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 font-mono text-xs text-stone-300 transition-colors duration-200 hover:border-violet-500/30 hover:text-violet-400"
              >
                Firefox Add-ons
                <span aria-hidden="true" className="text-stone-600">→</span>
              </a>
            </div>
          </FadeUp>
        </Section>
      </main>
    </div>
  );
}
