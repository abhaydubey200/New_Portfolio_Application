import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/New_Portfolio_Application/", // ✅ MUST match repo name

  plugins: [
    // Required plugins
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // File types to support raw imports
  assetsInclude: ["**/*.svg", "**/*.csv"],
});