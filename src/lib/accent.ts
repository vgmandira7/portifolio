/**
 * O Tailwind só gera classes que aparecem escritas por inteiro no código.
 * Por isso mapeamos cada cor para a classe completa (nada de `bg-${cor}`).
 */
export type Accent =
  | "yellow"
  | "red"
  | "blue"
  | "lime"
  | "cyan"
  | "sky"
  | "orange"
  | "pink"
  | "mint"
  | "coral";

export const accentBg: Record<Accent, string> = {
  yellow: "bg-neo-yellow",
  red: "bg-neo-red",
  blue: "bg-neo-blue",
  lime: "bg-neo-lime",
  cyan: "bg-neo-cyan",
  sky: "bg-neo-sky",
  orange: "bg-neo-orange",
  pink: "bg-neo-pink",
  mint: "bg-neo-mint",
  coral: "bg-neo-coral",
};
