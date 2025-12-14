# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HJLog is a logistics company website built with Astro 5. The site is a single-page application showcasing the company's services, values, and contact information. It uses React integration for interactive components and follows a component-based architecture with a clean data-driven approach.

## Commands

All commands are run from the root of the project:

- `npm install` - Install dependencies
- `npm run dev` - Start local dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview build locally before deploying
- `npm run lint` - Run ESLint on `.ts` and `.astro` files
- `npm run astro ...` - Run Astro CLI commands (e.g., `astro add`, `astro check`)

## Architecture

### Data-Driven Component Pattern

The project follows a strict separation between data and presentation:

- **Data Layer** (`src/data/`): TypeScript files export structured data for each section
  - [navigation.ts](src/data/navigation.ts) - Internal/external navigation links
  - [hero-section.ts](src/data/hero-section.ts) - Hero section flow steps
  - [servicos.ts](src/data/servicos.ts) - Service items
  - [quem-somos.ts](src/data/quem-somos.ts) - Company values
  - [contato.ts](src/data/contato.ts) - Contact information

- **Type Definitions** (`src/types/components.ts`): All component prop interfaces are centralized here

- **Components** (`src/components/`): Presentation components that receive typed props
  - Components are purely presentational and consume data from the data layer
  - No business logic or hardcoded content in components

### Project Structure

```
src/
├── components/       # Presentational Astro components
├── data/            # TypeScript data files (source of truth for content)
├── images/          # Static images (icons, service images)
│   ├── icons/       # SVG icons for social media, UI elements
│   └── servicos/    # Service-related images
├── layouts/         # Layout wrapper (MainLayoult.astro)
├── pages/           # Astro pages (index.astro is the main page)
├── styles/          # Global CSS (tema.css with CSS custom properties)
└── types/           # TypeScript type definitions
```

### Layout and Page Structure

- **MainLayoult.astro**: The main layout wrapper that includes:
  - Global font imports (Inter and Open Sans from Fontsource)
  - Header component
  - Global styles and CSS reset
  - Theme CSS custom properties

- **index.astro**: Single-page structure composed of section components:
  1. HeroSection
  2. QuemSomos (About Us)
  3. Gallery
  4. Servicos (Services)
  5. Contato (Contact)

### Styling System

The project uses a CSS custom properties system defined in [src/styles/tema.css](src/styles/tema.css):

- **Color Palette**: Predefined color variables (e.g., `--paleta-laranja-queimado`, `--paleta-preto-carvao`)
- **Semantic Tokens**: Theme-aware tokens (e.g., `--tema-fundo-base-escuro`, `--tema-texto-claro-primario`)
- **Typography System**: Font families, sizes, weights, line heights, and letter spacing
- Always use the semantic tokens (prefixed with `--tema-`) rather than palette variables directly

### Fonts

The project uses two web fonts via Fontsource:
- **Inter**: Primary font (weights: 400, 600, 700) - Used for headings, buttons, and UI elements
- **Open Sans**: Secondary font (weight: 400) - Used for body text and paragraphs

## Code Conventions

### TypeScript

- All data files export typed constants
- Component prop interfaces are defined in [src/types/components.ts](src/types/components.ts)
- TSConfig extends Astro's strict configuration

### ESLint Configuration

- Uses flat config format ([eslint.config.js](eslint.config.js))
- TypeScript ESLint with recommended rules
- Astro plugin with recommended flat config
- Import plugin configured (import order rule disabled)
- Unused variables prefixed with `_` are allowed

### Prettier

- Configured with Prettier plugin for Astro files
- Astro files use the Astro parser

## Adding New Sections

When adding a new section to the website:

1. Create a data file in `src/data/` with the section's content
2. Add type definitions to `src/types/components.ts` if needed
3. Create the component in `src/components/`
4. Import and add the component to [src/pages/index.astro](src/pages/index.astro)
5. Ensure the component uses CSS custom properties from [tema.css](src/styles/tema.css)

## Navigation

Navigation uses anchor links to sections on the single-page layout. Internal links in [src/data/navigation.ts](src/data/navigation.ts) use hash fragments (e.g., `#inicio`, `#quemsomos`) that correspond to section IDs.
