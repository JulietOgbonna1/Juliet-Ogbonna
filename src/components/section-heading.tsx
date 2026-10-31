import { Sparkle } from "./icons";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">
        <Sparkle className="size-3" /> {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">{body}</p>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode }) {
  return (
    <section className="relative pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="container-x">
        <p className="eyebrow">
          <Sparkle className="size-3" /> {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">{body}</p>}
      </div>
    </section>
  );
}
