/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    devSourcemap: true,
  },
  build: {
    outDir: "../dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest-global-setup.ts"],
    coverage: {
      reportsDirectory: "../coverage",
    },
  },
});
