import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const port = process.env.APP_PORT || 3001;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
     refTransform: true
  })],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${port}/`,
        changeOrigin: true,
      },
    },
  },
})
