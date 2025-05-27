import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import devServer from '@hono/vite-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    devServer({
      entry: 'src/server.ts', // Entry point for the Hono server
      // Optional: Exclude routes handled by the Hono server from Vite's SPA fallback
      exclude: ['/api/**'], 
      // Optional: Inject custom variables or bindings for development
      injectClientScript: false, // Disable default client injection if not needed
    })
  ],
  // Configuration for Cloudflare Pages build
  build: {
    // Ensure the output directory matches Cloudflare Pages expectations (usually 'dist')
    outDir: 'dist',
    // Optional: Configure assets directory if needed
    // assetsDir: 'assets',
    // Optional: Configure rollup options for advanced build customization
    // rollupOptions: { ... }
  }
})
