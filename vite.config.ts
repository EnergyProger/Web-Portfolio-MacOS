import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/components"
      ),
      "@types": resolve(dirname(fileURLToPath(import.meta.url)), "src/types"),
      "@config": resolve(dirname(fileURLToPath(import.meta.url)), "src/config"),
      "@hooks": resolve(dirname(fileURLToPath(import.meta.url)), "src/hooks"),
      "@utils": resolve(dirname(fileURLToPath(import.meta.url)), "src/utils"),
      "@constants": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/constants"
      ),
      "@store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
    },
  },
});
