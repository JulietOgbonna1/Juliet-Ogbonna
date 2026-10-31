import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Live projects by Juliet Ogbonna — including the Mater Christi Centre website built with the Verbum Networks team and the Nova Hairs brand experience.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Built for every screen. <span className="text-accent">Shipped to the world.</span>
          </>
        }
        body="Each project is shown on laptop, tablet and phone. Tap anywhere on a project to open the live site in a new tab."
      />
      <section className="pb-12">
        <div className="container-x grid gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
