import { motion } from "framer-motion";
import { accentBg, type Accent } from "@/lib/accent";
import { cn } from "@/lib/cn";

interface Props {
  number: string;
  title: string;
  accent: Accent;
  /** cor do texto do número (padrão: preto) */
  light?: boolean;
}

/** Título de seção: número num bloco colorido + título gigante. */
export function SectionHeading({ number, title, accent, light }: Props) {
  return (
    <motion.div
      className="mb-10 flex items-center gap-4"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <span
        className={cn(
          "neo-box shadow-brutal-sm flex h-11 w-11 shrink-0 items-center justify-center font-mono text-lg font-bold text-neo-black sm:h-12 sm:w-12",
          accentBg[accent],
        )}
        aria-hidden="true"
      >
        {number}
      </span>
      <h2
        className={cn(
          "text-4xl font-bold uppercase leading-none tracking-tighter sm:text-6xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
    </motion.div>
  );
}
