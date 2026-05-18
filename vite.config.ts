import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/time_line/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@nexus/ui': path.resolve(__dirname, '../frontend/node_modules/@nexus/ui'),
    }
  }
})
