import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectPath = process.env.CI_PROJECT_PATH || 'pavel/craft3d_tech'

export default defineConfig(({ command }) => ({
  plugins: [react()],

  base: command === 'build'
    ? `/${projectPath}/`
    : '/',

  build: {
    outDir: 'dist'
  }
}))