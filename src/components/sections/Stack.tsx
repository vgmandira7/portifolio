import { motion, type Variants } from "framer-motion";
import { stack } from "@/data/stack";
import { accentBg } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-[1120px] scroll-mt-20 px-5 py-16">
      <SectionHeading number="01" title="Minha stack" accent="coral" />

      <motion.ul
        className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {stack.map(({ name, icon: Icon, accent, rotate }) => (
          <motion.li
            key={name}
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: 0 },
              show: { opacity: 1, scale: 1, rotate },
            }}
            whileHover={{ rotate: 0, y: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={cn(
              "neo-box flex h-28 flex-col justify-between p-4 text-neo-black",
              accentBg[accent],
            )}
          >
            <Icon size={28} strokeWidth={2.25} aria-hidden="true" />
            <span className="font-bold uppercase tracking-tight">{name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
