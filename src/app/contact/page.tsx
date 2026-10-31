import type { Metadata } from "next";
import { site } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Mail, Phone, Pin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Juliet Ogbonna for frontend development, UI implementation, website maintenance and performance work.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ...site.phones.map((p, i) => ({ icon: Phone, label: i === 0 ? "Phone" : "Alt. phone", value: p, href: `tel:+234${p.slice(1)}` })),
  { icon: Pin, label: "Location", value: site.location, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-accent">remarkable together.</span>
          </>
        }
        body="Have a project, role or idea in mind? Send a message — it lands straight in Juliet's inbox and she'll reply personally."
      />

      <section className="pb-12">
        <div className="container-x grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col gap-4">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-on-brand shadow-[0_0_30px_-8px_var(--glow)]">
                    <c.icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{c.label}</span>
                    <span className="mt-0.5 block truncate font-display font-semibold">{c.value}</span>
                  </span>
                  {c.href && <ArrowUpRight className="size-5 text-muted transition group-hover:rotate-45 group-hover:text-accent" />}
                </>
              );
              const cls = "group flex items-center gap-4 rounded-3xl border border-line bg-surface/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50";
              return c.href ? (
                <a key={c.label} href={c.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={cls}>
                  {inner}
                </div>
              );
            })}
            <div className="rounded-3xl border border-line bg-surface/60 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Find me online</p>
              <SocialLinks className="mt-4" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glow-border relative rounded-[2rem] bg-surface/70 p-6 backdrop-blur-sm sm:p-10">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Send a message</h2>
              <p className="mt-2 mb-8 text-ink-soft">Usually replies within 24 hours.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
