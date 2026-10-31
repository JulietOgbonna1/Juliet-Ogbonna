import { skills } from "@/lib/data";
import { BrandIcon } from "./icons";
import { Reveal } from "./reveal";

export function SkillGrid({ limit, compact = false }: { limit?: number; compact?: boolean }) {
  const list = limit ? skills.slice(0, limit) : skills;
  return (
    <ul className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${compact ? "" : "lg:grid-cols-4"}`}>
      {list.map((s, i) => (
        <Reveal as="li" key={s.name} delay={(i % 4) * 80}>
          <div className="glow-border group h-full rounded-3xl bg-surface/70 p-5 backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-28px_var(--glow)] sm:p-6">
            <div className="flex items-start justify-between gap-2">
              <span className="grid size-12 place-items-center rounded-2xl border border-line bg-bg-2 text-ink transition duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                <BrandIcon name={s.icon} className="size-6" />
              </span>
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">{s.group}</p>
            <h3 className="mt-1 font-display text-lg font-semibold">{s.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
