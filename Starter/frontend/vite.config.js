import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API requests to the Express backend during development.
    // The browser calls /api/posts; Vite forwards it to localhost:3000.
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
