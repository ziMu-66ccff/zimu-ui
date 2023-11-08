import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'ZMShared',
      fileName: 'zimu-shared',
    },
    rollupOptions: {
      external: [/lodash.*/],
    },
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
