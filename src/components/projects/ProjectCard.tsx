import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon, Lock, Terminal } from "lucide-react";
import type { Project } from "@/data/projects";
import { accentBg } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const smallBtn =
  "neo-press shadow-brutal-sm inline-flex items-center gap-2 border-3 border-ink px-4 py-2 text-sm font-bold uppercase";

export function ProjectCard({ project, index, onOpen }: Props) {
  const { featured, accent, images } = project;
  const cover = images[0];
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "neo-box flex flex-col overflow-hidden bg-surface",
        featured && "md:col-span-2 md:flex-row",
      )}
    >
      {/* capa */}
      <div
        className={cn(
          "relative flex items-center justify-center border-b-3 border-ink p-6",
          accentBg[accent],
          featured ? "md:w-1/2 md:border-b-0 md:border-r-3" : "aspect-[16/10]",
          featured && "min-h-[240px]",
        )}
      >
        {cover ? (
          <img
            src={cover}
            alt={`Prévia do projeto ${project.title}`}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full border-3 border-ink object-cover object-top"
          />
        ) : (
          <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-3 border-3 border-dashed border-neo-black text-neo-black">
            <ImageIcon size={40} strokeWidth={2} aria-hidden="true" />
            <span className="text-sm font-bold uppercase">Mockups em breve</span>
          </div>
        )}
      </div>

      {/* conteúdo */}
      <div className={cn("flex flex-1 flex-col p-6 text-ink", featured && "md:w-1/2 md:justify-center")}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="bg-neo-black px-2 py-1 text-xs font-bold uppercase text-white">
            {number} / {project.category}
          </span>
          {project.status && (
            <span className="border-2 border-ink px-2 py-0.5 text-xs font-bold uppercase">{project.status}</span>
          )}
        </div>

        <h3 className="text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">{project.title}</h3>
        <p className="mt-3 text-base font-medium leading-relaxed">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag accent={accent}>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(smallBtn, "bg-neo-black text-white")}
            >
              <Terminal size={16} strokeWidth={2.5} aria-hidden="true" /> GitHub
            </a>
          ) : (
            <span
              className={cn(smallBtn, "cursor-not-allowed bg-surface text-ink opacity-60 shadow-none")}
              title="Repositório privado"
            >
              <Lock size={16} strokeWidth={2.5} aria-hidden="true" /> Repo privado
            </span>
          )}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className={cn(smallBtn, "bg-neo-yellow text-neo-black")}
            aria-haspopup="dialog"
          >
            Ver detalhes <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
