import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import basicSsl from '@vitejs/plugin-basic-ssl';
import { fileURLToPath, URL } from "node:url";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
  base: '/ui-alchemy/',
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
  // ── Tell Vite where to find .env files for import.meta.env ───────────────
    envDir: 'environment',

    resolve: {
      dedupe: ['@emotion/react', '@emotion/styled', '@mui/material'],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },
    },
    
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        }
      }
    }
})
