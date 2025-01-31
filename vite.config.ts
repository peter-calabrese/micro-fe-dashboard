import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    cors: true,
  },
  plugins: [
    react(),
    federation({
      name: 'dashboard', // micro FE name
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx', // exposes the app comp
      },
      shared: ['react', 'react-dom'], // share depends
    }),
  ],
  build: {
    target: 'esnext',
    minify: false, // debugging purposees - set true in prod
    cssCodeSplit: false, // debugging purposees - set true in prod
  },
});
