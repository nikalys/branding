import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: set VITE_BASE=/repo-name/ in CI (trailing slash required).
const raw = process.env.VITE_BASE ?? "/";
const base = raw === "/" ? "/" : raw.endsWith("/") ? raw : `${raw}/`;

export default defineConfig({
  plugins: [react()],
  base,
});
