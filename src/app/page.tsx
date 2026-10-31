import Image from "next/image";
import Link from "next/link";
import portrait from "../../public/images/juliet.jpg";
import { about, projects, roles, services, site, skills } from "@/lib/data";
import { Typewriter } from "@/components/typewriter";
import { SocialLinks } from "@/components/social-links";
import { SkillsMarquee } from "@/components/skills-marquee";
import { SkillGrid } from "@/components/skill-grid";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight, Sparkle } from "@/components/icons";

const stats = [
  { value: "2+", label: "Years hands-on" },
  { value: `${projects.length}`, label: "Live projects" },
  { value: `${skills.length}`, label: "Technologies" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs font-semibold text-ink-soft backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </p>
            <p className="mt-8 font-display text-lg text-ink-soft">Hello, it&apos;s me</p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.4rem]">
              <span className="text-gradient animate-shine">Juliet</span>
              <br />
              Ogbonna<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 min-h-[2.2em] font-display text-2xl font-semibold sm:text-3xl">
              And I&apos;m a <Typewriter words={roles} />
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              I craft fast, responsive, beautifully detailed web experiences with React, Next.js and Tailwind CSS —
              backed by Node.js, Express and MongoDB.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn-primary">
                See my work <ArrowRight />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Let&apos;s talk
              </Link>
            </div>
            <SocialLinks className="mt-9" />
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[26rem]">
            <div aria-hidden className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-2xl" />
            <div aria-hidden className="absolute -inset-3 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0_55%,var(--brand-2)_70%,var(--accent)_82%,transparent_95%)]" />
            <div aria-hidden className="absolute -inset-[3px] rounded-full bg-bg" />
            <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-surface-2">
              <Image
                src={portrait}
                alt="Portrait of Juliet Ogbonna, frontend developer"
                fill
                preload
                fetchPriority="high"
                placeholder="blur"
                quality={90}
                sizes="(min-width: 1024px) 416px, 80vw"
                className="object-cover object-[50%_22%]"
              />
            </div>

            <div className="absolute -left-2 top-[18%] animate-float rounded-2xl border border-line bg-surface/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
              <p className="font-display text-2xl font-bold text-accent">2+</p>
              <p className="text-xs text-ink-soft">years building</p>
            </div>
            <div
              className="absolute -right-2 bottom-[14%] animate-float rounded-2xl border border-line bg-surface/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6"
              style={{ animationDelay: "-3.5s" }}
            >
              <p className="flex items-center gap-1.5 font-display text-sm font-semibold">
                <Sparkle className="size-3.5 text-accent" /> Next.js · React
              </p>
              <p className="text-xs text-ink-soft">Pixel-perfect UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-label="Tech stack" className="border-y border-line bg-surface/30 py-8 backdrop-blur-sm">
        <SkillsMarquee />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="glow-border rounded-[2rem] bg-surface p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={portrait}
                  alt="Juliet Ogbonna smiling in an orange blazer"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 flex w-[88%] -translate-x-1/2 justify-between rounded-2xl border border-line bg-surface/90 px-5 py-4 shadow-xl backdrop-blur-md">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-xl font-bold text-accent sm:text-2xl">{s.value}</p>
                  <p className="text-[11px] text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">
              <Sparkle className="size-3" /> About me
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              {about.headline}
            </h2>
            <p className="mt-3 font-display text-sm font-semibold text-accent">{site.role}</p>
            <p className="mt-6 leading-relaxed text-ink-soft">{about.paragraphs[0]}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{about.paragraphs[1]}</p>
            <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
              {[
                ["Name", site.name],
                ["Location", site.location],
                ["Experience", "2+ years hands-on"],
                ["Email", site.email],
              ].map(([k, val]) => (
                <div key={k} className="flex gap-2">
                  <dt className="font-semibold text-accent">{k}:</dt>
                  <dd className="truncate text-ink-soft">{val}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                More about me <ArrowRight />
              </Link>
              <a href={`tel:+234${site.phones[0].slice(1)}`} className="btn-ghost">
                Call me
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="My skills"
              title="Technical expertise & core skill set"
              body="A modern, full-stack JavaScript toolkit — from semantic markup and motion-rich interfaces to APIs, databases and edge deployments."
            />
            <Link href="/skills" className="btn-ghost mt-8">
              Explore all skills <ArrowRight />
            </Link>
          </Reveal>
          <SkillGrid limit={9} compact />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Selected work"
              title={
                <>
                  Projects that ship, <span className="text-accent">on every screen.</span>
                </>
              }
              body="Real products live on the web — each shown across laptop, tablet and phone. Click any project to explore it live."
            />
          </Reveal>
          <div className="mt-16 grid gap-10">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="What I do" title="Services built around results." />
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 100}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-line bg-surface/60 p-8 transition duration-500 hover:-translate-y-1 hover:border-accent/50">
                  <div aria-hidden className="absolute -right-20 -top-20 size-56 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] opacity-0 transition duration-700 group-hover:opacity-100" />
                  <span className="font-display text-sm font-semibold text-muted">0{i + 1}</span>
                  <h3 className="relative mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                  <ArrowUpRight className="absolute right-8 top-8 size-5 text-muted transition duration-500 group-hover:rotate-45 group-hover:text-accent" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
