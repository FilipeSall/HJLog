# HJLOG - Site Institucional

Site institucional da HJLOG, com foco em apresentação de serviços logísticos e captação de solicitações de cotação. Este repositório possui 3 branches de versão, e a versão adotada para o projeto é a `v3`.

## Visão Geral

- **Objetivo:** apresentar a empresa, serviços e canais de contato/cotação
- **Público:** empresas que precisam de soluções logísticas
- **Versão ativa:** branch `v3`

## Tecnologias

- **Astro** (framework principal)
- **React** (componentes pontuais via integração)
- **TypeScript** (tipagem e organização de dados)
- **ESLint + Prettier** (qualidade e formatação)
- **Iconify (MDI)** e **@fontsource** (ícones e tipografia)

## Páginas

- `/` - Home
- `/servicos` - Lista de serviços
- `/sobre` - Sobre a empresa
- `/contato` - Contato
- `/cotacao` - Formulário de cotação (com pré-seleção via query string `?servico=...`)

## Estrutura do Projeto

```text
/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── package.json
```

## Scripts

| Comando | Ação |
| --- | --- |
| `npm install` | Instala dependências |
| `npm run dev` | Sobe o ambiente local em `localhost:4321` |
| `npm run build` | Gera o build em `./dist/` |
| `npm run preview` | Previsualiza o build localmente |
| `npm run lint` | Executa o lint do projeto |
