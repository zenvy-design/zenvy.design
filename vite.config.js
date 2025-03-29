import react from "@vitejs/plugin-react";
import path from "path";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
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
