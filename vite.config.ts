/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';

  return {
    mode,
    plugins: [react()],
    resolve: {
      alias: [
        { find: '~app', replacement: path.resolve(__dirname, 'src/app') },
        {
          find: '~components',
          replacement: path.resolve(__dirname, 'src/app/components'),
        },
        {
          find: '~hooks',
          replacement: path.resolve(__dirname, 'src/app/hooks'),
        },
        {
          find: '~modules',
          replacement: path.resolve(__dirname, 'src/app/modules'),
        },
        {
          find: '~providers',
          replacement: path.resolve(__dirname, 'src/app/providers'),
        },
        {
          find: '~store',
          replacement: path.resolve(__dirname, 'src/app/store'),
        },
        { find: '~config', replacement: path.resolve(__dirname, 'src/config') },
        {
          find: '~constants',
          replacement: path.resolve(__dirname, 'src/constants'),
        },
        {
          find: '~globals',
          replacement: path.resolve(__dirname, 'src/globals'),
        },
        {
          find: '~services',
          replacement: path.resolve(__dirname, 'src/services'),
        },
        { find: '~utils', replacement: path.resolve(__dirname, 'src/utils') },
      ],
    },
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
  };
});
