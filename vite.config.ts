import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.docx"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Keep individual asset inlining off so lazy chunks stay as separate files
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split Three.js + react-three-fiber into their own async chunk
          if (id.includes("three") || id.includes("@react-three")) {
            return "three-vendor";
          }
          // Split @react-pdf into its own async chunk
          if (id.includes("@react-pdf")) {
            return "pdf-vendor";
          }
        },
      },
    },
  },
});
