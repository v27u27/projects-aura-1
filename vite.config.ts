import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' makes all asset paths relative to the index.html file.
  // This ensures it works at https://vinayak.dev/projects-aura-1/ OR any other path.
  base: './', 
})
