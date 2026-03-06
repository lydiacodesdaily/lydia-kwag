const links = [
  { label: "Email", href: "mailto:lydia.kwag.dev@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lydiakwag" },
  { label: "GitHub", href: "https://github.com/lydiacodesdaily" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-stone-200 px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-stone-400">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900">
            Let&apos;s talk.
          </h2>
          <p className="mb-10 text-base leading-relaxed text-stone-500">
            Open to product engineering roles at companies building tools that
            matter. Especially interested in teams focused on productivity,
            focus, or human-centered software.
          </p>
          <div className="flex flex-wrap gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 transition-colors hover:decoration-stone-600"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
