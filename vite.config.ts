import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/contact.php": "http://localhost:8080",
    },
  },
  preview: {
    proxy: {
      "/contact.php": "http://localhost:8080",
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
