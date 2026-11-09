import { accentBg, type Accent } from "@/lib/accent";
import { cn } from "@/lib/cn";

/** Etiqueta pequena de tecnologia. */
export function Tag({ children, accent = "yellow" }: { children: string; accent?: Accent }) {
  return (
    <span
      className={cn(
        "border-2 border-ink px-2 py-0.5 text-xs font-bold text-neo-black sm:text-sm",
        accentBg[accent],
      )}
    >
      {children}
    </span>
  );
}
