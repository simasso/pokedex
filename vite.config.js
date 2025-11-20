import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        pokedex: path.resolve(__dirname, 'pokedex.html'),
      },
    },
  },
});
