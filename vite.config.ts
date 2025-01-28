import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts",
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.join(__dirname, "src/components"),
      },
      {
        find: "@model",
        replacement: path.join(__dirname, "src/model"),
      },
      {
        find: "@common",
        replacement: path.join(__dirname, "src/common"),
      },
      {
        find: "src",
        replacement: path.join(__dirname, "src"),
      },
    ],
  },
});
