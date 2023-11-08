import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'ZMUI',
    },
    rollupOptions: {
      external: [/@zimu-ui.*/],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
