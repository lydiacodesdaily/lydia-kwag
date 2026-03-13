"use client";

import { motion, type Variants } from "framer-motion";
import ProjectCard, { type IllustrationKey } from "./ProjectCard";

type Project = {
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
  video?: string;
  illustrationKey?: IllustrationKey;
  variant: "featured" | "standard";
};

const projects: Project[] = [
  {
    name: "FlowMate",
    platform: "Web · iOS · Android",
    badge: "App Store",
    tagline: "AI-enhanced focus timer for people who need more than a Pomodoro",
    description:
      "Configurable audio cues, time-awareness features, and intelligent task suggestions powered by OpenAI. 1,000+ active users.",
    stack: ["React Native", "Expo", "OpenAI", "Claude", "React", "Next.js", "TypeScript"],
    link: "/projects/flowmate",
    caseStudyLink: "/projects/flowmate",
    video: "/screenshots/flowmate/flowmato/progress/flowmato_growing.mp4",
    variant: "featured",
  },
  {
    name: "Flow Club Companion",
    platform: "Chrome · Firefox",
    badge: "Extension",
    tagline: "Zero-friction coworking timer",
    description:
      "Lightweight timer and task manager embedded directly into Flow Club's virtual coworking sessions — stays out of the way.",
    stack: ["Browser Extension", "JavaScript", "WebExtension API"],
    link: "/projects/flow-club-companion",
    caseStudyLink: "/projects/flow-club-companion",
    illustrationKey: "extension",
    variant: "standard",
  },
  {
    name: "JustToday",
    platform: "iOS · Web",
    badge: "In Development",
    tagline: "Calm, energy-aware routine execution for people who struggle with starting",
    description:
      "Not a habit tracker — a judgment-free guide that adapts to the energy you actually have. Built with a pure-function execution engine, GTD-inspired capture, and neurodivergent-first UX.",
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "Zustand"],
    link: "/projects/justtoday",
    caseStudyLink: "/projects/justtoday",
    illustrationKey: "queue",
    variant: "standard",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-violet-400/70">
            Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
            Selected Projects
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {/* Featured project */}
          <motion.div variants={itemVariants}>
            <ProjectCard {...projects[0]} />
          </motion.div>

          {/* Standard projects — 2-column grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.div variants={itemVariants}>
              <ProjectCard {...projects[1]} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard {...projects[2]} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
