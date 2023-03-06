import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3500,
  },
  preview: {
    port: 3500,
  },
  test: {
    globals: true,
  },
  cacheDir: ".vite",
  build: {
    target: "esnext",
  }
});
