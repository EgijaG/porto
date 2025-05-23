import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ include: "**/*.tsx" })],
  base: "/porto",
  server: {
    watch: {
      usePolling: true,
    }
  }
})
