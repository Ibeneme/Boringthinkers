import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ensure public folder files are properly handled
  publicDir: 'public',

  build: {
    // This helps with static asset serving
    assetsDir: 'assets',
    // Generate clean sourcemaps (optional)
    sourcemap: false,
  },

  // Optional: Better base path (important for custom domains)
  base: '/',


})