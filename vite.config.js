import react from "@vitejs/plugin-react";
import path from "path";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Manrope",
            local: "Manrope",
            src: "./src/assets/fonts/Manrope-*.ttf",
          },
        ],
        display: "auto",
        preload: true,
        prefetch: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
