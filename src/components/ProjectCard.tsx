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
      className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-200 hover:border-stone-300 hover:shadow-sm"
    >
      <div>
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-stone-900">
            {name}
          </h3>
          <span className="shrink-0 rounded-full border border-stone-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-stone-400">
            {badge}
          </span>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-stone-500">
          {description}
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-stone-400">
          {platform}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-[11px] text-stone-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
