import { motion } from "framer-motion";
import { GraduationCap, Server, Wrench, type LucideIcon } from "lucide-react";
import { accentBg, type Accent } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards: { icon: LucideIcon; title: string; text: string; accent: Accent | "white" }[] = [
  {
    icon: GraduationCap,
    title: "FATEC",
    text: "Desenvolvimento de Software Multiplataforma · previsão de término em 2027",
    accent: "white",
  },
  {
    icon: Wrench,
    title: "TI & Operações",
    text: "Suporte e sistemas internos para empresas locais",
    accent: "sky",
  },
  {
    icon: Server,
    title: "Back-end & Mobile",
    text: "APIs, bancos de dados e apps em produção",
    accent: "pink",
  },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1120px] scroll-mt-20 px-5 py-16">
      <SectionHeading number="03" title="Sobre mim" accent="lime" />

      <div className="neo-box grid gap-10 bg-neo-yellow p-6 text-neo-black sm:p-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-4xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl">
            Da prática pro código.
          </h3>
          <p className="mt-6 text-lg font-medium leading-relaxed">
            Estudo <strong>Desenvolvimento de Software Multiplataforma na FATEC</strong> e já tenho experiência
            real com TI, operações e criação de sistemas internos para empresas locais. Aprendi na rua e no
            suporte que software bom é o que resolve o problema de quem usa.
          </p>
          <p className="mt-4 text-lg font-medium leading-relaxed">
            Minha praia é a lógica pesada por trás das aplicações: refatoração, arquitetura de sistemas e
            entregar tudo isso no celular do usuário.
          </p>
        </div>

        <ul className="flex flex-col gap-5">
          {cards.map(({ icon: Icon, title, text, accent }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ x: -6 }}
              className={cn(
                "neo-box shadow-brutal-sm flex gap-4 p-4",
                accent === "white" ? "bg-neo-white" : accentBg[accent],
              )}
            >
              <Icon size={28} strokeWidth={2.25} className="mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-bold uppercase">{title}</h4>
                <p className="text-sm font-medium sm:text-base">{text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
