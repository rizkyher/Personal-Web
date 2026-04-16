import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
    },
    kit: {
        adapter: adapter({
            runtime: 'nodejs22.x' // Pastikan ini tetap ada untuk menghindari error Node version
        }),
        alias: {
            "@/*": "./path/to/lib/*",
        },
    }
};

export default config;