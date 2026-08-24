import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this repository from /lohith-portfolio/.
  // Local development remains available at the root URL.
  base: process.env.GITHUB_ACTIONS ? '/lohith-portfolio/' : '/',
  plugins: [react()]
});
