"use client";

import { motion, type Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "FlowMate",
    platform: "Web · iOS · Android",
    badge: "App Store",
    description:
      "AI-enhanced focus timer for people who need more than a Pomodoro. Configurable audio cues, time-awareness features, and intelligent task suggestions powered by OpenAI and Claude. ~1,000 active users.",
    stack: ["React Native", "Expo", "OpenAI", "Claude", "React", "Next.js", "TypeScript"],
  },
  {
    name: "Flow Club Companion",
    platform: "Chrome · Firefox",
    badge: "Extension",
    description:
      "Browser extension designed for Flow Club's virtual coworking sessions. A lightweight timer and task manager embedded directly into the coworking workflow — zero friction, stays out of the way.",
    stack: ["Browser Extension", "JavaScript", "WebExtension API"],
  },
  {
    name: "JustToday",
    platform: "Web",
    badge: "Web App",
    description:
      "Minimal routine execution system designed to reduce decision fatigue. Queue-based task flow with real-time editing and behavioral constraints that keep you moving without getting overwhelmed.",
    stack: ["React", "TypeScript", "Next.js"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
