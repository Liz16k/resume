import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "docs",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
