const stack = [
  "React Native",
  "TypeScript",
  "Next.js",
  "OpenAI",
  "Claude",
  "Expo",
];

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-stone-400">
            Product Engineer
          </p>
          <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-7xl">
            Lydia Kwag
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-stone-500 md:text-2xl">
            Builds human-centered productivity tools.
          </p>
          <p className="mb-12 max-w-xl text-base leading-relaxed text-stone-500">
            I design and ship software that reduces cognitive load — mobile
            apps, browser extensions, and web tools that help people work
            without friction.
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stone-200 px-3 py-1 font-mono text-xs text-stone-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
