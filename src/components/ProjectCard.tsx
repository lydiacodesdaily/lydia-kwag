type ProjectCardProps = {
  name: string;
  platform: string;
  badge: string;
  description: string;
  stack: string[];
  link?: string;
};

export default function ProjectCard({
  name,
  platform,
  badge,
  description,
  stack,
  link,
}: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(167,139,250,0.08)]"
    >
      <div>
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-stone-100">
            {name}
          </h3>
          <span className="shrink-0 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-400">
            {badge}
          </span>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-stone-500">
          {description}
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-stone-600">
          {platform}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-stone-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
