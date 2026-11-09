import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Mail, Terminal, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { accentBg, type Accent } from "@/lib/accent";
import { cn } from "@/lib/cn";

const links: { icon: LucideIcon; label: string; value: string; href: string; accent: Accent; external: boolean }[] = [
  { icon: Briefcase, label: "LinkedIn", value: profile.linkedinName, href: profile.linkedin, accent: "sky", external: true },
  { icon: Terminal, label: "GitHub", value: profile.githubHandle, href: profile.github, accent: "lime", external: true },
  { icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, accent: "yellow", external: false },
];

export function Contact() {
  return (
    // [--ink:10_10_10] mantém bordas e sombras PRETAS sobre o fundo azul, nos dois temas
    <section id="contato" className="scroll-mt-16 border-t-3 border-neo-black bg-neo-blue [--ink:10_10_10]">
      <div className="mx-auto max-w-[1120px] px-5 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(2.6rem,8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-white"
        >
          Bora construir{" "}
          <span className="inline-block bg-neo-yellow px-3 text-neo-black">algo foda?</span>
        </motion.h2>
        <p className="mt-6 max-w-lg text-lg font-medium text-white">
          Código bom a gente escreve junto. Me chama e vamos tirar a ideia do papel.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {links.map(({ icon: Icon, label, value, href, accent, external }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "neo-box neo-press group flex h-full min-h-40 flex-col justify-between p-5 text-neo-black",
                  accentBg[accent],
                )}
              >
                <span className="flex items-start justify-between">
                  <Icon size={30} strokeWidth={2.25} aria-hidden="true" />
                  <ArrowUpRight
                    size={30}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span className="block text-3xl font-bold uppercase leading-none">{label}</span>
                  <span className="mt-1 block break-all font-bold">{value}</span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <footer className="mt-16 border-t-3 border-neo-black pt-6 text-sm font-bold uppercase text-white sm:text-base">
          © {new Date().getFullYear()} {profile.fullName} — feito na raça, em React + Tailwind.
        </footer>
      </div>
    </section>
  );
}
