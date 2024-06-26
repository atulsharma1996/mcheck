import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    plugins: [react()],
  };
})
