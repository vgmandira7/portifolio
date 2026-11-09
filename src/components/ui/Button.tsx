import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "red" | "surface" | "black" | "yellow";

const variants: Record<Variant, string> = {
  red: "bg-neo-red text-white",
  surface: "bg-surface text-ink",
  black: "bg-neo-black text-white",
  yellow: "bg-neo-yellow text-neo-black",
};

const base =
  "neo-box neo-press inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide sm:text-base";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type Props = (AnchorProps | NativeButtonProps) & {
  variant?: Variant;
  children: ReactNode;
};

/** Botão neo-brutalista. Vira <a> automaticamente quando recebe `href`. */
export function Button({ variant = "surface", className, children, ...rest }: Props) {
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorProps)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as NativeButtonProps)}>
      {children}
    </button>
  );
}
