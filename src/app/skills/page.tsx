import type { Metadata } from "next";
import { skills, softSkills } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";
import { SkillsMarquee } from "@/components/skills-marquee";
import { SkillGrid } from "@/components/skill-grid";
import { Reveal } from "@/components/reveal";
import { BrandIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Skills",
  description: "HTML5, CSS, JavaScript, React, Next.js, Node.js, Express, Tailwind CSS, MongoDB, Vercel and Git — the stack Juliet Ogbonna uses to build modern web products.",
  alternates: { canonical: "/skills" },
};

const groups = ["Core", "Frameworks", "Backend", "Tooling"] as const;

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="My skills"
        title={
          <>
            A modern stack, <span className="text-accent">mastered end to end.</span>
          </>
        }
        body="I combine creativity with code to build visually appealing, responsive interfaces — and the services that power them."
      />

      <section aria-label="Tech stack" className="border-y border-line bg-surface/30 py-8">
        <SkillsMarquee />
      </section>

      <section className="py-24">
        <div className="container-x">
          <SkillGrid />
        </div>
      </section>

      <section className="pb-12">
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g} delay={i * 80}>
              <div className="h-full rounded-[2rem] bg-gradient-to-b from-[#1a0a07] to-maroon p-7 text-cream shadow-[0_30px_60px_-35px_var(--glow)]">
                <h2 className="font-display text-lg font-semibold">{g}</h2>
                <ul className="mt-5 space-y-3">
                  {skills
                    .filter((s) => s.group === g)
                    .map((s) => (
                      <li key={s.name} className="flex items-center gap-3 text-sm">
                        <BrandIcon name={s.icon} className="size-4" mono />
                        {s.name}
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-surface/60 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold">Soft skills</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {softSkills.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg/60 px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
