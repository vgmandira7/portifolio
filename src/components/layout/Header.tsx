import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile, sectionIds } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { Theme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3" aria-label={`${profile.brand} — voltar ao topo`}>
          <span className="flex h-9 items-center bg-neo-black px-2 text-lg font-bold text-white">
            {profile.initials}
          </span>
          <span className="text-xl font-medium tracking-tight">{profile.brand}</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "relative py-1 font-bold uppercase tracking-wide transition-colors hover:text-neo-red",
                active === item.id && "text-neo-red",
              )}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-1 h-1 bg-neo-red"
                />
              )}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="neo-box neo-press shadow-brutal-sm flex h-10 w-10 items-center justify-center bg-surface"
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t-3 border-ink bg-paper md:hidden"
          >
            <ul className="mx-auto flex max-w-[1120px] flex-col px-5 py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b-2 border-ink/20 py-4 text-2xl font-bold uppercase last:border-b-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
