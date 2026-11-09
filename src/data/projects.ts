import type { Accent } from "@/lib/accent";

export interface Project {
  id: string;
  category: string;
  title: string;
  /** texto curto do cartão */
  description: string;
  /** texto longo exibido no modal (opcional) */
  details?: string;
  tags: string[];
  /** cor do bloco de imagem e das tags */
  accent: Accent;
  status?: "Concluído" | "Em desenvolvimento";
  /** deixe vazio se o repositório for privado */
  githubUrl?: string;
  /** imagens em /public/projects — a primeira vira a capa */
  images: string[];
  /** projeto grande da primeira linha */
  featured?: boolean;
}

/**
 * Para adicionar um projeto: copie um objeto abaixo, troque os dados
 * e coloque as imagens (.webp de preferência) em /public/projects.
 */
export const projects: Project[] = [
  // {
  //   id: "precobom",
  //   category: "Sistema de logística",
  //   title: "Preço Bom",
  //   description:
  //     "API em Node/Express com banco PostGIS, app mobile para motoristas e PWA para o caixa. Foco em rastreamento GPS em tempo real e gestão de frota.",
  //   tags: ["Node.js", "Express", "PostGIS", "React Native", "PWA"],
  //   accent: "yellow",
  //   status: "Em desenvolvimento",
  //   images: [],
  //   featured: true,
  // },
  {
    id: "luna",
    category: "Plataforma educacional com IA",
    title: "Luna",
    description:
      "Plataforma educacional com IA para crianças com TDAH que adapta planos de aula dinamicamente ao ritmo e às necessidades de cada uma delas.",
    details:
      "Aplicativo mobile educacional em desenvolvimento para auxiliar crianças com TDAH no ambiente escolar. A personalização de atividades e planos de aula parte do hiperfoco do aluno, tornando o aprendizado mais engajador e adaptado, com acompanhamento de desempenho por professores e responsáveis. Projeto Integrador da faculdade",
    tags: ["Python", "IA", "API REST", "MongoDB"],
    accent: "mint",
    status: "Em desenvolvimento",
    githubUrl: "https://github.com/LunaSquad/Luna-Mobile.git",
    images: [
      "/projects/luna-1.webp",
      "/projects/luna-2.webp",
      "/projects/luna-3.webp",
      "/projects/luna-4.webp",
    ],
  },

  // {
  //   id: "stok",
  //   category: "WMS mobile",
  //   title: "Stok",
  //   description:
  //     "Aplicativo mobile WMS para contagem e gestão de inventário de armazéns, com leitura rápida e sincronização confiável.",
  //   tags: ["React Native", "Expo", "Node.js", "Prisma"],
  //   accent: "sky",
  //   images: [],
  // },
  {
    id: "barbearia",
    category: "Agendamento & gestão",
    title: "Barbearia Mandira",
    description:
      "Sistema web de agendamento: o barbeiro gerencia cortes, horários e clientes, e o cliente marca o horário online.",
    details:
      "Sistema web de agendamento para barbearia, onde o barbeiro pode gerenciar cortes, horários e clientes, enquanto os usuários realizam agendamentos online.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    accent: "coral",
    status: "Em desenvolvimento",
    githubUrl: "https://github.com/vgmandira7/BarbeariaMandira",
    images: [
      "/projects/barbearia-1.webp",
      "/projects/barbearia-2.webp",
      "/projects/barbearia-3.webp",
      "/projects/barbearia-4.webp",
    ],
  },
  {
    id: "fitvale",
    category: "Academia & treinos",
    title: "FitVale",
    description:
      "App mobile de gestão de academias: alunos, aulas, treinos personalizados e comunicação com instrutores.",
    details:
      "Aplicativo mobile desenvolvido em equipe como Trabalho de Conclusão de Curso (TCC), voltado ao gerenciamento de academias: controle de alunos, organização de aulas, montagem de treinos personalizados e comunicação com instrutores.",
    tags: ["React Native", "Expo", "PHP", "SQL"],
    accent: "orange",
    status: "Concluído",
    images: [
      "/projects/fitvale-1.webp",
      "/projects/fitvale-2.webp",
      "/projects/fitvale-3.webp",
      "/projects/fitvale-4.webp",
    ],
  },
];
