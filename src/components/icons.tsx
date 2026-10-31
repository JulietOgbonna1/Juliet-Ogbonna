import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siVercel,
  siGithub,
  siFacebook,
} from "simple-icons";

type Brand = { path: string; hex: string };

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

// Monochrome brands (black logos) render in currentColor so they work in both themes.
const brands: Record<string, Brand> = {
  html5: { path: siHtml5.path, hex: `#${siHtml5.hex}` },
  css: { path: siCss.path, hex: "#2965F1" },
  javascript: { path: siJavascript.path, hex: `#${siJavascript.hex}` },
  react: { path: siReact.path, hex: `#${siReact.hex}` },
  nextdotjs: { path: siNextdotjs.path, hex: "currentColor" },
  tailwindcss: { path: siTailwindcss.path, hex: `#${siTailwindcss.hex}` },
  nodedotjs: { path: siNodedotjs.path, hex: `#${siNodedotjs.hex}` },
  express: { path: siExpress.path, hex: "currentColor" },
  mongodb: { path: siMongodb.path, hex: `#${siMongodb.hex}` },
  vercel: { path: siVercel.path, hex: "currentColor" },
  github: { path: siGithub.path, hex: "currentColor" },
  facebook: { path: siFacebook.path, hex: "currentColor" },
  linkedin: { path: LINKEDIN_PATH, hex: "currentColor" },
};

export function BrandIcon({
  name,
  className = "size-6",
  mono = false,
}: {
  name: string;
  className?: string;
  mono?: boolean;
}) {
  const b = brands[name];
  if (!b) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={mono ? "currentColor" : b.hex}
      aria-hidden="true"
    >
      <path d={b.path} />
    </svg>
  );
}

type P = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowUpRight = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowRight = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Mail = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const Phone = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
export const Pin = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const Sun = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const Moon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </svg>
);
export const Check = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="m5 12 5 5 9-10" />
  </svg>
);
export const Sparkle = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2c.6 4.6 2.4 6.9 7 8-4.6 1.1-6.4 3.4-7 8-.6-4.6-2.4-6.9-7-8 4.6-1.1 6.4-3.4 7-8z" />
  </svg>
);
