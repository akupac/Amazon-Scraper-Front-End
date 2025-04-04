import { defineConfig, loadEnv } from 'vite'

const apiUrl = loadEnv(process.env.VITE_API_URL, process.cwd());

export default defineConfig({
  root: './',
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: apiUrl,
    },
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
  },
})