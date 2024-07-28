/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist'
  },
  test: {
    globals: true,
    // environment: 'jsdom',
    // setupFiles: ['vitest-global-setup.ts'],
    // testTimeout: 10000,
    // coverage: {
    //   reporter: ['html', 'text', 'lcov'],
    //   exclude: ['**/__tests__/**', '**/__mocks__/**']
    // }
  }
})
