/** Dados pessoais — edite aqui e o site inteiro atualiza. */
export const profile = {
  fullName: "Vitor Gabriel Mandira Soares",
  brand: "VITOR.DEV",
  initials: "VG",
  role: "Desenvolvedor Mobile & Back-end",
  location: "Jacupiranga, SP",
  email: "vg.mandira@gmail.com",
  github: "https://github.com/vgmandira7",
  githubHandle: "@vgmandira7",
  linkedin: "https://www.linkedin.com/in/vgmandira/",
  linkedinName: "Vitor Gabriel",
  resume: "/Curriculo.pdf",
  resumeFileName: "Curriculo-Vitor-Gabriel.pdf",
} as const;

export const marqueeItems = [
  "APIs robustas",
  "Resolução de problemas reais",
  "Refatoração",
  "Arquitetura",
  "Operações de TI",
  "Back-end",
  "Mobile",
] as const;

export const navItems = [
  { label: "Stack", id: "stack" },
  { label: "Projetos", id: "projetos" },
  { label: "Sobre", id: "sobre" },
  { label: "Contato", id: "contato" },
] as const;

export const sectionIds = navItems.map((item) => item.id);
