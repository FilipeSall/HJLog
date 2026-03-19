// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { loadEnv } from 'vite';

import icon from 'astro-icon';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = env.PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') || 'https://hjlogtransportes.com.br';

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [react(), icon()]
});
