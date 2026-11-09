# GUIA — Portfólio Neo-brutalista (Vitor Gabriel)

Este guia tem **duas partes**:

1. **Parte 1** — como fazer o projeto rodar no seu computador
2. **Parte 2** — como subir no GitHub **por partes** (vários commits), só copiando e colando

---

# PARTE 1 — Rodar o projeto

## Passo 1 — Pré-requisitos
Você precisa de **Node.js 18 ou superior** (recomendo o 20 LTS) e **Git**.

```bash
node -v     # deve mostrar v18.x ou maior
npm -v
git --version
```

Se não tiver o Node no Ubuntu, instale com o nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# feche e abra o terminal, depois:
nvm install 20
```

## Passo 2 — Extrair o zip e entrar na pasta
```bash
cd ~/Downloads
unzip Portifolio-neobrutalista.zip
cd Portifolio
```

## Passo 3 — Instalar as dependências
```bash
npm install
```
Isso cria a pasta `node_modules` e o arquivo `package-lock.json`.

## Passo 4 — Rodar em modo desenvolvimento
```bash
npm run dev
```
O navegador abre em **http://localhost:5173**. Salvou um arquivo, a página atualiza sozinha.
Para parar o servidor: `Ctrl + C`.

## Passo 5 — Testar o tema claro/escuro
Clique no botão amarelo (sol/lua) no canto do menu. A escolha fica salva no navegador.
Na primeira visita, o site segue o tema do seu sistema operacional.

## Passo 6 — Personalizar o conteúdo
Tudo que é texto fica em `src/data/`:

- `src/data/profile.ts` → nome, e-mail, GitHub, LinkedIn, currículo, frases da faixa preta
- `src/data/stack.ts` → cards de tecnologias
- `src/data/projects.ts` → projetos

**Para adicionar um projeto:** copie um objeto de `projects.ts`, troque os dados e coloque as
imagens em `public/projects/` (prefira `.webp`, até ~1200 px de largura, para o site ficar leve).
Projeto sem `images` mostra "Mockups em breve". Projeto sem `githubUrl` mostra "Repo privado".

**Para trocar o currículo:** substitua `public/Curriculo.pdf` pelo novo arquivo (mesmo nome).

**Para trocar as cores:** edite `tailwind.config.ts` (cores `neo-*`) e as variáveis
`--paper`, `--ink`, `--surface` em `src/index.css` (tema claro em `:root`, escuro em `.dark`).

> Itens para revisar: o PreçoBom e o Stok ainda não têm imagens nem GitHub público.
> O projeto "Engenharias" do portfólio antigo não entrou no layout novo (a imagem
> `public/projects/engenharia-1.webp` está guardada caso queira adicioná-lo).

## Passo 7 — Verificar tipos e gerar o build de produção
```bash
npm run build
```
Gera a pasta `dist/`. Para ver o resultado exatamente como vai ficar online:
```bash
npm run preview
```

## Passo 8 — Publicar (opcional)
**Vercel (mais simples):** vá em https://vercel.com → *Add New Project* → importe o repositório do GitHub.
Ele detecta o Vite sozinho (Build: `npm run build`, Output: `dist`).

**GitHub Pages / Netlify** também funcionam: publique a pasta `dist`.

## Problemas comuns
| Problema | Solução |
|---|---|
| `command not found: npm` | Instale o Node (Passo 1) |
| Porta 5173 ocupada | `npm run dev -- --port 3000` |
| Erro estranho após mexer em dependências | `rm -rf node_modules package-lock.json && npm install` |
| Fonte não carrega | Rode `npm install` de novo (as fontes vêm pelo `@fontsource`) |

---

# PARTE 2 — Subir no GitHub por partes

Cada bloco abaixo é **um commit**. Copie e cole um bloco de cada vez, na ordem.
Antes de começar, rode `npm install` (Parte 1, passo 3) para existir o `package-lock.json`.

## Configuração inicial (só uma vez)

Confirme seu nome/e-mail no Git:
```bash
git config --global user.name "Vitor Gabriel"
git config --global user.email "vg.mandira@gmail.com"
```

### Opção A — Repositório NOVO (vazio)
1. No GitHub, crie um repositório novo (ex.: `Portifolio`), **sem** README, .gitignore ou licença.
2. Na pasta do projeto:
```bash
git init
git branch -M main
git remote add origin https://github.com/vgmandira7/Portifolio.git
```
Pronto: siga para os commits abaixo. O `git push` de cada commit vai para a `main`.

### Opção B — Repositório que JÁ TEM o portfólio antigo (recomendado: usa uma branch)
Assim o site antigo continua intacto na `main` até você aprovar o novo.
```bash
cd ~/Downloads
git clone https://github.com/vgmandira7/Portifolio.git Portifolio-repo
cd Portifolio-repo
git checkout -b refactor/neobrutalismo

# apaga os arquivos antigos (a pasta .git é preservada)
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# copia o projeto novo (ajuste o caminho se extraiu em outro lugar)
cp -r ~/Downloads/Portifolio/. .
```
Agora, nos commits abaixo, **troque `git push` por `git push -u origin refactor/neobrutalismo`**
(só no primeiro; depois `git push` basta). No final, abra um Pull Request no GitHub e faça o merge.

> Dica: se ainda não rodou `npm install` nesta pasta, rode agora para gerar o `package-lock.json`.

---

## Commit 1 — Base do projeto (Vite + TypeScript)
```bash
git add package.json package-lock.json .gitignore tsconfig.json vite.config.ts src/vite-env.d.ts
git commit -m "chore: inicializa projeto com Vite, React e TypeScript"
git push -u origin main
```

## Commit 2 — Tailwind CSS e design tokens
```bash
git add postcss.config.js tailwind.config.ts src/index.css
git commit -m "chore: configura Tailwind com tokens neo-brutalistas e tema claro/escuro"
git push
```

## Commit 3 — HTML, favicon e arquivos públicos
```bash
git add index.html public/favicon.svg public/favicon.ico public/robots.txt public/Curriculo.pdf
git commit -m "feat: adiciona index.html com SEO, favicon, robots e currículo"
git push
```

## Commit 4 — Utilitários e hooks
```bash
git add src/lib src/hooks
git commit -m "feat: adiciona helpers de classes/cores e hooks de tema e seção ativa"
git push
```

## Commit 5 — Dados do portfólio
```bash
git add src/data
git commit -m "feat: centraliza perfil, stack e projetos em src/data"
git push
```

## Commit 6 — Componentes de UI reutilizáveis
```bash
git add src/components/ui
git commit -m "feat: cria componentes de UI (Button, Tag, SectionHeading, ThemeToggle)"
git push
```

## Commit 7 — Layout (cabeçalho, faixa e barra de progresso)
```bash
git add src/components/layout
git commit -m "feat: adiciona header responsivo, marquee e barra de progresso de rolagem"
git push
```

## Commit 8 — Seção Hero
```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: cria Hero com animação de entrada e terminal"
git push
```

## Commit 9 — Seção Stack
```bash
git add src/components/sections/Stack.tsx
git commit -m "feat: cria seção Minha Stack com cards animados"
git push
```

## Commit 10 — Imagens dos projetos
```bash
git add public/projects
git commit -m "feat: adiciona mockups dos projetos otimizados em webp"
git push
```

## Commit 11 — Seção Projetos (cards e modal)
```bash
git add src/components/projects src/components/sections/Projects.tsx
git commit -m "feat: cria seção de projetos com cards e modal de galeria"
git push
```

## Commit 12 — Seção Sobre mim
```bash
git add src/components/sections/About.tsx
git commit -m "feat: cria seção Sobre mim"
git push
```

## Commit 13 — Seção Contato e rodapé
```bash
git add src/components/sections/Contact.tsx
git commit -m "feat: cria seção de contato e rodapé"
git push
```

## Commit 14 — Montagem final da página
```bash
git add src/App.tsx src/main.tsx
git commit -m "feat: monta a página com MotionConfig e tema persistente"
git push
```

## Commit 15 — Documentação
```bash
git add README.md GUIA.md
git commit -m "docs: adiciona README e guia de instalação"
git push
```

## Conferência final
```bash
git status          # deve dizer "nothing to commit, working tree clean"
git log --oneline   # lista os 15 commits
```

**Se você usou a Opção B**, abra o link que o `git push` mostrou no terminal (ou vá no repositório →
*Compare & pull request*), crie o Pull Request da branch `refactor/neobrutalismo` para `main`
e faça o *Merge*.

### Se algo der errado
| Situação | Comando |
|---|---|
| Esqueci um arquivo no último commit | `git add arquivo && git commit --amend --no-edit && git push --force-with-lease` |
| `git add` reclamou de caminho inexistente | Confira se está na pasta raiz do projeto (`pwd`) e se o commit anterior foi feito |
| `push` rejeitado (repositório já tinha conteúdo) | Use a Opção B, ou `git pull --rebase origin main` e tente de novo |
| Quero ver o que vai no próximo commit | `git status` |
