/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';

  return {
    mode,
    plugins: [react()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3001,
    },
    build: {
      cssCodeSplit: true,
      cssMinify: !isDevelopment,
      minify: 'esbuild',
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['src/setupTest.ts'],
    },
  }
})
