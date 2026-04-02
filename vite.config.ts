import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `process` is available when Vite runs in Node environments (CI or locally).
// Add a minimal declaration for TypeScript tooling to avoid "Cannot find name 'process'".
declare const process: any;

// Determine base for GitHub Pages deployments.
// Priority:
// 1. process.env.VITE_BASE (explicit, e.g. set in CI/workflow)
// 2. process.env.GITHUB_REPOSITORY (when running in GitHub Actions automatically derive the repo name)
// 3. default to '/'
// Ensure a trailing slash when non-root so Vite emits correct asset URLs.
function computeBase() {
  const raw = process.env.VITE_BASE;
  if (raw && raw !== "/") {
    return raw.endsWith("/") ? raw : `${raw}/`;
  }

  const ghRepo = process.env.GITHUB_REPOSITORY; // format: owner/repo
  if (ghRepo) {
    const repoName = ghRepo.split("/").pop();
    if (repoName) return `/${repoName}/`;
  }

  return "/";
}

const base = computeBase();

export default defineConfig({
  plugins: [react()],
  base,
});
