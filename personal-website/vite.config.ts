import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 800,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/crapsgame/crapsgame.js",
          dest: "./src/crapsgame/"
        },
        {
          src: "./src/randomQuoteGenerator/randomQuoteGenerator.js",
          dest: "./src/randomQuoteGenerator/"
        },
        {
          src: "./src/aboutMeSection/Damilola's CV.pdf",
          dest: "./src/aboutMeSection/"
        },
      ],
    }),
  ],
})
