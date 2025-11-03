import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{astro,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [],
};

export default config;
