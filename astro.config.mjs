// @ts-check

import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://lunala-xyz.github.io',
    base: '/lunala-astroid-webapp',

    integrations: [vue()],

    markdown: {
        shikiConfig: {
            theme: 'catppuccin-mocha',
        },
    },
});