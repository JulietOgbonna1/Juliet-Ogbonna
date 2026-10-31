import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portrait from "../../../public/images/juliet.jpg";
import { about, education, services, site, softSkills } from "@/lib/data";
import { PageHeader, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Juliet Ogbonna — a frontend developer and designer from Enugu, Nigeria, with a background in Human Anatomy and a passion for clean, creative code.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title={
          <>
            Precision of a scientist. <span className="text-accent">Eye of a designer.</span>
          </>
        }
        body="From studying the human body to shaping digital experiences — I bring analytical rigour and creative flair to every interface I build."
      />

      <section className="pb-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <div className="glow-border rounded-[2rem] bg-surface p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src={portrait} alt="Juliet Ogbonna" fill preload placeholder="blur" sizes="(min-width: 1024px) 440px, 92vw" className="object-cover object-top" />
              </div>
            </div>
          </Reveal>
          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={`leading-relaxed text-pretty ${i === 0 ? "font-display text-2xl font-medium text-ink sm:text-3xl" : "mt-6 text-lg text-ink-soft"}`}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <dl className="mt-10 grid gap-4 rounded-3xl border border-line bg-surface/60 p-6 sm:grid-cols-2">
                {[
                  ["Based in", site.location],
                  ["Focus", "Frontend & UI engineering"],
                  ["Email", site.email],
                  ["Phone", site.phones.join(" · ")],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{k}</dt>
                    <dd className="mt-1 break-words font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={260}>
              <h2 className="mt-14 font-display text-xl font-semibold">What I bring to a team</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {softSkills.map((s) => (
                  <li key={s} className="flex items-center gap-3 rounded-2xl border border-line bg-surface/50 px-4 py-3 text-sm">
                    <span className="grid size-6 place-items-center rounded-full bg-brand text-on-brand">
                      <Check className="size-3.5" />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="My services" title="How I can help you ship." />
          </Reveal>
          <ol className="mt-14 grid gap-4 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 100}>
                <div
                  className={`h-full border border-line bg-surface/60 p-8 transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_30px_70px_-40px_var(--glow)] ${
                    i % 2 === 0 ? "rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem]" : "rounded-[2rem] rounded-tl-[5rem] rounded-br-[5rem]"
                  }`}
                >
                  <span className="font-display text-5xl font-bold text-accent/25">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Education" title="Where the foundation was laid." />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <article className="glow-border h-full rounded-[2rem] bg-surface/60 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{e.period}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{e.org}</p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{e.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/experience" className="btn-ghost">
              See my experience <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
