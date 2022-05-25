import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.js'),
      name: 'GeekleDemo'
    },
    rollupOptions: {
      output: {
        exports: 'named',
        assetFileNames: 'geekle-demo.[ext]'
      }
    }
  },
  plugins: [vue()]
})
