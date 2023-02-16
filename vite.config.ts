/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const pathSrc = path.resolve(__dirname, './src');

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/shared/styles";` },
    },
  },
});
