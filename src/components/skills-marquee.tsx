import { skills } from "@/lib/data";
import { BrandIcon } from "./icons";

function Row({ reverse = false, duration = "45s" }: { reverse?: boolean; duration?: string }) {
  const items = reverse ? [...skills].reverse() : skills;
  return (
    <div
      className="group flex overflow-hidden marquee-mask [--marquee-gap:1rem]"
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      <div
        className={`flex w-max shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {/* Two copies for a seamless loop; the second is hidden from assistive tech */}
        {[0, 1].map((copy) =>
          items.map((s) => (
            <div
              key={`${copy}-${s.name}`}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex items-center gap-3 rounded-full border border-line bg-surface/70 py-2.5 pl-2.5 pr-6 backdrop-blur-sm transition hover:border-accent"
            >
              <span className="grid size-9 place-items-center rounded-full bg-bg-2 text-ink">
                <BrandIcon name={s.icon} className="size-[18px]" />
              </span>
              <span className="font-display text-sm font-semibold whitespace-nowrap">{s.name}</span>
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <div className="flex flex-col gap-4" aria-label="Technologies Juliet works with">
      <Row duration="50s" />
      <Row reverse duration="42s" />
    </div>
  );
}
