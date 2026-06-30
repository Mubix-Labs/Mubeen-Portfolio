import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Mubeen-Portfolio/",

  plugins: [react(), tailwindcss()],

  build: {
    target: "es2020",
    cssMinify: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three"))
              return "vendor-three";
            if (id.includes("framer-motion"))
              return "vendor-motion";
            if (id.includes("react-dom") || id.includes("/react/"))
              return "vendor-react";
            if (id.includes("firebase"))
              return "vendor-firebase";
          }
        },
      },
    },
  },
});