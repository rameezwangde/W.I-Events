import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('lucide') || id.includes('lenis')) return 'ui'
            return 'vendor'
          }
        }
      }
    }
  }
})
