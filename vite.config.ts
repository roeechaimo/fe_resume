import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|tsx)$/,
      babel: {
        plugins: ['styled-components'],
        babelrc: false,
        configFile: false,
      },
    }),
    splitVendorChunkPlugin(),
    Unfonts({
      custom: {
        families: [{ name: 'Chewy', src: './src/assets/fonts/Chewy.ttf' }],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
});
