const principles = [
  {
    title: "Reduce before you build",
    body: "Cognitive load is the enemy. The best feature is often the one you remove. I design for the minimum viable mental model, then ship.",
  },
  {
    title: "Behavior-first thinking",
    body: "Good software understands how people actually work — not how they wish they worked. I study behavior and build constraints that support it.",
  },
  {
    title: "Calm systems",
    body: "Software should not demand attention. I build tools that recede into the background and let the work itself stay in focus.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-stone-200 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-stone-400">
            Thinking
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
            How I Build
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="mb-3 text-base font-medium text-stone-900">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
