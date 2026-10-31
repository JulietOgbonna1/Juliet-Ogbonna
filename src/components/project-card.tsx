import type { Project } from "@/lib/data";
import { DeviceShowcase } from "./device-showcase";
import { ProjectLink } from "./project-link";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article">
      <ProjectLink
        href={project.url}
        label={project.title}
        className="glow-border group block rounded-[2rem] bg-surface/60 p-5 backdrop-blur-sm transition duration-500 hover:shadow-[0_40px_100px_-50px_var(--glow)] sm:p-8 lg:p-10"
      >
        <div className={`grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="relative rounded-[1.5rem] bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)] px-2 pt-6 pb-2 sm:px-6">
            <DeviceShowcase project={project} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-sm font-semibold text-muted">0{index + 1}</span>
              <span className="h-px w-8 bg-line" />
              <span className="eyebrow !tracking-[0.16em]">{project.kind}</span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
            {project.collaboration && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <span className="size-1.5 rounded-full bg-accent" /> {project.collaboration}
              </p>
            )}
            <p className="mt-4 leading-relaxed text-ink-soft text-pretty">{project.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
                  {t}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-3 font-display text-sm font-semibold">
              <span className="grid size-11 place-items-center rounded-full bg-brand text-on-brand transition duration-500 group-hover:rotate-45 group-hover:shadow-[0_0_30px_-4px_var(--glow)]">
                <ArrowUpRight />
              </span>
              <span className="transition group-hover:text-accent">View live project</span>
            </span>
          </div>
        </div>
      </ProjectLink>
    </Reveal>
  );
}
