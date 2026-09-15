// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // sesuaikan framework

export default defineConfig({
  plugins: [react()],
  base: '/<nama-repo>/', // Ganti dengan nama repositori GitHub Anda
})
