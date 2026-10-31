"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { ArrowUpRight } from "./icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-500 ${
          scrolled || open
            ? "border-line bg-surface/75 shadow-[0_10px_40px_-20px_var(--glow)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-on-brand shadow-[0_0_24px_-4px_var(--glow)] transition group-hover:rotate-12">
            JO
          </span>
          <span>
            Juliet<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(item.href) ? "text-accent" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Hire me <ArrowUpRight />
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {nav.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg ${
                  isActive(item.href) ? "bg-brand text-on-brand" : "text-ink"
                }`}
              >
                {item.label}
                <span className="text-xs text-muted">0{i + 1}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
