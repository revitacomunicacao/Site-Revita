import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/desenvolvimento/revita/',
  plugins: [
    tailwindcss(),
    react(),
    Pages({
      dirs: 'src/app',
      extensions: ['tsx','jsx'],
      routeStyle: 'next',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
