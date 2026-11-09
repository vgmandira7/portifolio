# Portfólio — Vitor Gabriel

Portfólio neo-brutalista feito com **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.
Tema claro e escuro, animações que respeitam `prefers-reduced-motion`, 100% responsivo.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (pasta dist/)
npm run preview  # testa o build localmente
```

Passo a passo completo (rodar, personalizar, publicar e subir no GitHub por partes): veja **GUIA.md**.

## Onde editar o conteúdo
| O quê | Arquivo |
|---|---|
| Nome, e-mail, links, textos da faixa | `src/data/profile.ts` |
| Stack (cards coloridos) | `src/data/stack.ts` |
| Projetos, tags, links, imagens | `src/data/projects.ts` |
| Cores e sombras (design tokens) | `tailwind.config.ts` e `src/index.css` |
