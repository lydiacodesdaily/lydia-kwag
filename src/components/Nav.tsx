"use client";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200 bg-[#fafaf9]/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-sm font-medium tracking-tight text-stone-900">
          Lydia Kwag
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Approach", href: "#approach" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
