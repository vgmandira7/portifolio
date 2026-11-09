import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/** Cada linha do nome "sobe" de dentro de uma máscara. */
const line: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type Segment = { text: string; tone?: "key" | "str" | "plain" };

const codeLines: { indent: number; segments: Segment[] }[] = [
  { indent: 0, segments: [{ text: "const ", tone: "key" }, { text: "vitor = {" }] },
  { indent: 1, segments: [{ text: "role: ", tone: "key" }, { text: '"Mobile & Back-End",', tone: "str" }] },
  { indent: 1, segments: [{ text: "stack: ", tone: "key" }, { text: '["Node", "Expo", "Python"],', tone: "str" }] },
  { indent: 1, segments: [{ text: "db: ", tone: "key" }, { text: '"PostgreSQL + Prisma",', tone: "str" }] },
  { indent: 1, segments: [{ text: "mindset: ", tone: "key" }, { text: '"resolver problema real",', tone: "str" }] },
  { indent: 1, segments: [{ text: "status: ", tone: "key" }, { text: '"construindo...",', tone: "str" }] },
  { indent: 0, segments: [{ text: "}" }] },
];

const toneClass = { key: "text-neo-lime", str: "text-neo-yellow", plain: "text-white" } as const;

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1120px] px-5 pb-20 pt-14 sm:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={fade}
            className="neo-box shadow-brutal-sm mb-8 inline-flex -rotate-2 items-center gap-2 bg-neo-lime px-4 py-2 text-sm font-bold uppercase text-neo-black"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-neo-black" aria-hidden="true" />
            Disponível para novas oportunidades
          </motion.p>

          <h1 className="text-[clamp(3.4rem,11vw,7.5rem)] font-bold uppercase leading-[0.92] tracking-tighter">
            <span className="sr-only">{profile.fullName}</span>
            <span aria-hidden="true">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={line} className="block">Vitor</motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={line} className="block">Gabriel</motion.span>
              </span>
              <span className="block overflow-hidden py-1 pr-2">
                <motion.span
                  variants={line}
                  className="neo-box shadow-brutal-sm inline-block bg-neo-yellow px-3 text-neo-black"
                >
                  Mandira
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={line} className="block">Soares</motion.span>
              </span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            className="neo-box shadow-brutal-sm mt-8 inline-block bg-neo-blue px-4 py-2 text-lg font-medium uppercase text-white sm:text-2xl"
          >
            Desenvolvedor Mobile &amp; Back-end
          </motion.p>

          <motion.p variants={fade} className="mt-8 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
            Regra de negócio complicada não me assusta. Eu pego o caos, transformo em{" "}
            <mark className="bg-neo-yellow px-1 font-bold text-neo-black">APIs robustas</mark> e coloco na mão
            do usuário em <mark className="bg-neo-lime px-1 font-bold text-neo-black">apps fluidos</mark>. Sem
            enrolação, mão na massa.
          </motion.p>

          <motion.div variants={fade} className="mt-10 flex flex-wrap gap-4">
            <Button href="#projetos" variant="red">
              Ver projetos <ArrowUpRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </Button>
            <Button href={profile.resume} download={profile.resumeFileName} variant="surface">
              <Download size={20} strokeWidth={2.5} aria-hidden="true" /> Baixar currículo
            </Button>
          </motion.div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, rotate: 8, y: 40 }}
          animate={{ opacity: 1, rotate: 2, y: 0 }}
          whileHover={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}
          className="neo-box shadow-brutal-lg bg-neo-black"
          aria-label="Resumo em formato de código"
        >
          <div className="flex items-center gap-2 border-b-3 border-ink bg-neo-yellow px-3 py-2.5 text-neo-black">
            <span className="h-3.5 w-3.5 border-2 border-neo-black bg-neo-red" />
            <span className="h-3.5 w-3.5 border-2 border-neo-black bg-white" />
            <span className="h-3.5 w-3.5 border-2 border-neo-black bg-neo-lime" />
            <span className="ml-2 font-mono text-sm font-bold">vitor@dev ~ %</span>
          </div>
          <motion.pre
            className="overflow-x-auto p-5 font-mono text-sm leading-7 sm:text-base"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 1 } } }}
          >
            {codeLines.map((l, i) => (
              <motion.code
                key={i}
                className="block whitespace-pre"
                style={{ paddingLeft: `${l.indent * 1.5}rem` }}
                variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
              >
                {l.segments.map((s, j) => (
                  <span key={j} className={toneClass[s.tone ?? "plain"]}>
                    {s.text}
                  </span>
                ))}
                {i === codeLines.length - 1 && (
                  <span className="ml-1 inline-block h-5 w-2.5 translate-y-1 animate-blink bg-neo-lime" aria-hidden="true" />
                )}
              </motion.code>
            ))}
          </motion.pre>
        </motion.div>
      </div>
    </section>
  );
}
