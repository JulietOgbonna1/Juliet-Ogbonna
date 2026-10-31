import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { Project } from "@/lib/data";

type Device = "laptop" | "tablet" | "mobile";

const viewports: Record<Device, { w: number; h: number; dsf: number; mobile: boolean }> = {
  laptop: { w: 1440, h: 900, dsf: 1.5, mobile: false },
  tablet: { w: 820, h: 1180, dsf: 2, mobile: true },
  mobile: { w: 390, h: 844, dsf: 3, mobile: true },
};

/**
 * Uses a locally captured screenshot when present (run `npm run capture`),
 * otherwise a live high-DPI capture from the Microlink screenshot API —
 * optimised and cached by next/image either way.
 */
function shot(project: Project, device: Device) {
  const file = `${project.slug}-${device}.png`;
  if (existsSync(path.join(process.cwd(), "public", "projects", file))) return `/projects/${file}`;
  const v = viewports[device];
  const q = new URLSearchParams({
    url: project.url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": String(v.w),
    "viewport.height": String(v.h),
    "viewport.deviceScaleFactor": String(v.dsf),
    "viewport.isMobile": String(v.mobile),
    "viewport.hasTouch": String(v.mobile),
    waitForTimeout: "2500",
  });
  return `https://api.microlink.io/?${q.toString()}`;
}

function Screen({ src, alt, sizes, ratio, title }: { src: string; alt: string; sizes: string; ratio: string; title: string }) {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(160deg,#2a0b06,#6e0d01_55%,#1a0805)]" style={{ aspectRatio: ratio }}>
      {/* Branded placeholder shown while the screenshot loads */}
      <div aria-hidden className="absolute inset-0 grid place-items-center p-2 text-center font-display text-[clamp(0.45rem,1.6vw,1.1rem)] font-semibold text-cream/70">
        {title}
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={90}
        className="object-cover object-top transition-[object-position] duration-[4000ms] ease-in-out group-hover:object-bottom"
      />
      {/* glass reflection */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.12)_0%,transparent_35%)]" />
    </div>
  );
}

export function DeviceShowcase({ project }: { project: Project }) {
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-3xl">
      {/* Laptop */}
      <div className="absolute left-[9%] top-[2%] w-[82%] transition duration-700 group-hover:-translate-y-2">
        <div className="rounded-t-[1.1rem] border border-white/10 bg-[#141110] p-[1.4%] shadow-[0_40px_80px_-40px_var(--glow)]">
          <div className="mx-auto mb-[0.8%] size-1.5 rounded-full bg-white/15" />
          <div className="overflow-hidden rounded-[0.35rem]">
            <Screen src={shot(project, "laptop")} alt={`${project.title} on a laptop`} sizes="(min-width: 768px) 620px, 82vw" ratio="16 / 10" title={project.title} />
          </div>
        </div>
        <div className="relative -mx-[7%] h-[0.9rem] rounded-b-[1.2rem] bg-gradient-to-b from-[#3a3330] to-[#1c1816] shadow-[0_18px_30px_-18px_rgb(0_0_0/0.6)] sm:h-[1.1rem]">
          <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-md bg-black/40" />
        </div>
      </div>

      {/* Tablet */}
      <div className="absolute bottom-[1%] right-[1%] w-[25%] transition duration-700 group-hover:-translate-y-4 group-hover:rotate-[2deg]">
        <div className="rounded-[1.1rem] border border-white/10 bg-[#141110] p-[5%] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.7)]">
          <div className="overflow-hidden rounded-[0.6rem]">
            <Screen src={shot(project, "tablet")} alt={`${project.title} on a tablet`} sizes="(min-width: 768px) 200px, 25vw" ratio="820 / 1180" title={project.title} />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[0%] left-[2%] w-[14%] transition duration-700 group-hover:-translate-y-5 group-hover:-rotate-[3deg]">
        <div className="relative rounded-[1.2rem] border border-white/10 bg-[#141110] p-[6%] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.7)] sm:rounded-[1.6rem]">
          <div aria-hidden className="absolute left-1/2 top-[3.2%] z-10 h-[2.6%] w-[34%] -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[0.9rem] sm:rounded-[1.2rem]">
            <Screen src={shot(project, "mobile")} alt={`${project.title} on a phone`} sizes="(min-width: 768px) 120px, 14vw" ratio="390 / 844" title={project.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
