import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 9000,
    host: '192.168.178.25'
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8889',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    //   '/csrf': {
    //     target: 'http://localhost:8889',
    //     changeOrigin: true,
    //   },
    //   '/login': {
    //     target: 'http://localhost:8889',
    //     changeOrigin: true,
    //   },
    //   '/logout': {
    //     target: 'http://localhost:8889',
    //     changeOrigin: true,
    //   },
    // },
  }
})
