import type { Config } from "tailwindcss";

const paleta = {
    pretoCarvao: "#111111",
    cinzaGrafite: "#2A2A2A",
    cinzaSuave: "#EEECEC",
    brancoGelo: "#F2F2F2",
    laranjaQueimado: "#FF6B00",
    cinzaAco: "#8C8C8C",
} as const;

const config: Config = {
    content: [
        "./src/**/*.{astro,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                paleta,
                superficie: {
                    primaria: paleta.pretoCarvao,
                    secundaria: paleta.cinzaGrafite,
                    terciaria: paleta.brancoGelo,
                    cabecalho: paleta.cinzaSuave,
                    rodape: paleta.cinzaSuave,
                },
                texto: {
                    principal: paleta.brancoGelo,
                    secundario: paleta.cinzaAco,
                    inverso: paleta.pretoCarvao,
                },
                destaque: paleta.laranjaQueimado,
            },
            fontFamily: {
                titulo: ["'Inter'", "system-ui", "sans-serif"],
                corpo: ["'Open Sans'", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
