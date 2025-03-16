import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/patt-rentals/',
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // 👈 Fix refresh 404 issue
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp4'],
});
