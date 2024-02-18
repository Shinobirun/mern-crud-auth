import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://localhost:3000', // Cambia esto según la URL de tu servidor de desarrollo
    },
  },
  build: {
    sourcemap: true,
  },
  cors: true, // Habilitar CORS para todas las solicitudes
});
