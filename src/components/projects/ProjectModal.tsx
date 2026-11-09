import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff, Terminal, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { accentBg } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && <ModalContent key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}

function ModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = project.images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Esc fecha, setas navegam, trava a rolagem do fundo e foca no botão fechar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (total > 1 && e.key === "ArrowLeft") setCurrent((c) => (c - 1 + total) % total);
      if (total > 1 && e.key === "ArrowRight") setCurrent((c) => (c + 1) % total);
    };
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [onClose, total]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-neo-black/70 p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, opacity: 0, rotate: -1 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="neo-box shadow-brutal-lg relative max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-surface text-ink"
      >
        <div className={cn("flex items-start justify-between gap-4 border-b-3 border-ink p-5", accentBg[project.accent])}>
          <div className="text-neo-black">
            <p className="text-xs font-bold uppercase">{project.category}</p>
            <h3 id="modal-title" className="text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes"
            className="neo-box neo-press shadow-brutal-sm flex h-10 w-10 shrink-0 items-center justify-center bg-neo-white text-neo-black"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <div className="space-y-5 p-5">
          {/* galeria */}
          {total > 0 ? (
            <div>
              <div className="relative border-3 border-ink bg-paper">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={project.images[current]}
                    src={project.images[current]}
                    alt={`${project.title} — imagem ${current + 1} de ${total}`}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-contain"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.18 }}
                  />
                </AnimatePresence>

                {total > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Imagem anterior"
                      className="neo-box neo-press shadow-brutal-sm absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-neo-yellow text-neo-black"
                    >
                      <ChevronLeft size={22} strokeWidth={3} />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Próxima imagem"
                      className="neo-box neo-press shadow-brutal-sm absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-neo-yellow text-neo-black"
                    >
                      <ChevronRight size={22} strokeWidth={3} />
                    </button>
                  </>
                )}
              </div>

              {total > 1 && (
                <ul className="mt-3 grid grid-cols-4 gap-3">
                  {project.images.map((src, i) => (
                    <li key={src}>
                      <button
                        type="button"
                        onClick={() => setCurrent(i)}
                        aria-label={`Ver imagem ${i + 1}`}
                        aria-current={i === current}
                        className={cn(
                          "block w-full border-3 border-ink transition-opacity",
                          i === current ? "opacity-100 shadow-brutal-sm" : "opacity-50 hover:opacity-100",
                        )}
                      >
                        <img src={src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 border-3 border-dashed border-ink p-10 text-center">
              <ImageOff size={36} aria-hidden="true" />
              <p className="font-bold uppercase">Mockups em breve</p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            {project.status && (
              <span className="border-2 border-ink bg-neo-lime px-2 py-0.5 text-xs font-bold uppercase text-neo-black">
                {project.status}
              </span>
            )}
          </div>

          <p className="text-base font-medium leading-relaxed sm:text-lg">{project.details ?? project.description}</p>

          <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag accent={project.accent}>{tag}</Tag>
              </li>
            ))}
          </ul>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-press shadow-brutal-sm inline-flex items-center gap-2 border-3 border-ink bg-neo-black px-4 py-2 text-sm font-bold uppercase text-white"
            >
              <Terminal size={16} strokeWidth={2.5} aria-hidden="true" /> Ver código no GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
