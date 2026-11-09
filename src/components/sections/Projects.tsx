import { useCallback, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projetos" className="mx-auto max-w-[1120px] scroll-mt-20 px-5 py-16">
      <SectionHeading number="02" title="Projetos de destaque" accent="sky" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
