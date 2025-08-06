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
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/mp4|webm|ogg|mov|avi|wmv/i.test(ext || '')) {
            return `assets/videos/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
})
