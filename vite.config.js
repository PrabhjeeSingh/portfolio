import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  base: '/portfolio/', // repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true, // Add source maps for better debugging
  },
  server: {
    port: 3000,
    open: true,
  }
})
