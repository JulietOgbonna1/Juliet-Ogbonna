import Link from "next/link";
import { nav, site } from "@/lib/data";
import { SocialLinks } from "./social-links";
import { Year } from "./year";
import { ArrowUpRight } from "./icons";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="container-x py-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand p-8 text-on-brand sm:p-14">
          <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-[radial-gradient(circle,rgb(255_160_120/0.35),transparent_65%)]" />
          <div aria-hidden className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:40px_40px]" />
          <p className="relative font-display text-xs font-semibold uppercase tracking-[0.22em] opacity-80">Available for new work</p>
          <h2 className="relative mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Have a product worth building beautifully? Let&apos;s talk.
          </h2>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn bg-cream text-maroon hover:-translate-y-0.5">
              Start a project <ArrowUpRight />
            </Link>
            <a href={`mailto:${site.email}`} className="btn border border-cream/30 hover:-translate-y-0.5 hover:border-cream">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold">
              Juliet Ogbonna<span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-sm text-muted">{site.role} · {site.location}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </div>
        <p className="mt-10 text-xs text-muted">
          © <Year /> Juliet Ogbonna. Designed &amp; built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
