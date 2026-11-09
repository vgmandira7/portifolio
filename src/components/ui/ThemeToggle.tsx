import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import type { Theme } from "@/hooks/useTheme";

interface Props {
  theme: Theme;
  onToggle: () => void;
}

/** Botão de alternar tema claro/escuro, com troca animada do ícone. */
export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={isDark}
      className="neo-box neo-press shadow-brutal-sm flex h-10 w-10 items-center justify-center bg-neo-yellow text-neo-black"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
