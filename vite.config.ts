import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGlobalData from '@csstools/postcss-global-data';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    strictPort: true,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  build: {
    rollupOptions: {
      input: './index.html',
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
    outDir: './../dist',
    emptyOutDir: true,
    assetsDir: './assets', // This ensures that all assets (JS, CSS, images) are placed in `dist/assets`
    manifest: true,
    cssCodeSplit: true,
    sourcemap: true,
  },
  preview: {
    port: 7001,
    host: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ['./app/styles/resolutions.module.css'],
        }),
        postcssCustomMedia({
          preserve: true,
        }),
      ],
    },
  },
});
