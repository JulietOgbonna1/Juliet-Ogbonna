import { site } from "@/lib/data";
import { BrandIcon, Mail } from "./icons";

const links = [
  { href: site.socials.github, label: "GitHub", icon: "github" },
  { href: site.socials.linkedin, label: "LinkedIn", icon: "linkedin" },
  { href: site.socials.facebook, label: "Facebook", icon: "facebook" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Juliet on ${l.label}`}
            className="grid size-10 place-items-center rounded-full border border-line text-ink-soft transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_24px_-6px_var(--glow)]"
          >
            <BrandIcon name={l.icon} className="size-4" mono />
          </a>
        </li>
      ))}
      <li>
        <a
          href={`mailto:${site.email}`}
          aria-label="Email Juliet"
          className="grid size-10 place-items-center rounded-full border border-line text-ink-soft transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_24px_-6px_var(--glow)]"
        >
          <Mail className="size-4" />
        </a>
      </li>
    </ul>
  );
}
