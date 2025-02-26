import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { icons } from './public/pwa/icons.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      manifest: {
        name: 'Awesome TodoList',
        short_name: 'AwesomeTodo',
        dir: 'ltr',
        lang: 'fa',
        icons,
        theme_color: '#000',
        display: 'standalone',
        background_color: '#fff',
        start_url: '/apps/awesome-todolist',
      },
      devOptions: {
        enabled: true,
      },
      includeManifestIcons: false,
      includeAssets: ['public/icons/*.{png,svg}', 'github.svg', 'favicon.ico'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './',
})
