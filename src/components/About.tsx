export default function About() {
  return (
    <section id="about" className="border-t border-stone-200 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-stone-400">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
              Lydia Kwag
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-stone-500">
              I&apos;m a product-focused software engineer working at the
              intersection of engineering, behavior design, and
              human-computer interaction.
            </p>
            <p className="text-base leading-relaxed text-stone-500">
              My focus areas: focus tools, productivity systems, and software
              that respects how humans actually think. I care about the whole
              product — from architecture to interaction design to the words on
              the screen.
            </p>
            <p className="text-base leading-relaxed text-stone-500">
              Currently building{" "}
              <span className="font-medium text-stone-700">FlowMate</span> and
              exploring what calm, effective software can look like for people
              who do deep work.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 font-mono text-xs text-stone-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Currently building
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
