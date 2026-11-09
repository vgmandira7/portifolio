import { marqueeItems } from "@/data/profile";

/** Faixa preta com texto em loop infinito (CSS puro, leve). */
export function Marquee() {
  // lista duplicada: a animação anda 50% e recomeça sem "pulo"
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="group overflow-hidden border-y-3 border-ink bg-neo-black py-3 text-white"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-bold uppercase motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-neo-yellow">★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
