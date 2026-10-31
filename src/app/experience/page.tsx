import type { Metadata } from "next";
import { education, experience } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "Juliet Ogbonna's experience and education — frontend development internship and training at Verbum Networks, and a B.Sc. in Human Anatomy from the University of Nigeria.",
  alternates: { canonical: "/experience" },
};

const timeline = [
  ...experience.map((e) => ({ type: "Experience", title: e.role, org: e.org, period: e.period, body: e.summary, points: e.points })),
  ...education.map((e) => ({ type: "Education", title: e.title, org: e.org, period: e.period, body: e.body, points: [] as string[] })),
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience & education"
        title={
          <>
            The journey so far, <span className="text-accent">one milestone at a time.</span>
          </>
        }
        body="Real projects, real teams and a foundation in science — the path that shaped how I build."
      />

      <section className="pb-12">
        <div className="container-x">
          <ol className="relative ml-3 border-l border-line sm:ml-6">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} className="relative pb-14 pl-8 sm:pl-14" delay={i * 60}>
                <span className="absolute -left-[9px] top-2 grid size-[17px] place-items-center rounded-full border border-accent bg-bg">
                  <span className="size-[7px] rounded-full bg-accent shadow-[0_0_12px_var(--glow)]" />
                </span>
                <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
                  <div>
                    <p className="font-display text-sm font-semibold text-accent">{t.period}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{t.type}</p>
                  </div>
                  <article className="glow-border rounded-[2rem] bg-surface/60 p-7 sm:p-9">
                    <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.title}</h2>
                    <p className="mt-1 font-medium text-muted">{t.org}</p>
                    <p className="mt-4 leading-relaxed text-ink-soft">{t.body}</p>
                    {t.points.length > 0 && (
                      <ul className="mt-6 grid gap-3">
                        {t.points.map((p) => (
                          <li key={p} className="flex gap-3 text-ink-soft">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
