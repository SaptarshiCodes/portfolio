import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Plugin to eliminate render-blocking CSS by converting it to preload + onload stylesheet
function nonBlockingCss() {
  return {
    name: "non-blocking-css",
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), nonBlockingCss()],
  server: {
    watch: {
      ignored: ["**/.agents/**", "**/.git/**", "**/dist/**"],
    },
  },
  build: {
    // Increase limit and enable intelligent chunking
    chunkSizeWarningLimit: 600,
    modulePreload: {
      resolveDependencies: (url, deps) => {
        // Prevent preloading heavy lazy chunks on initial page load
        return deps.filter(
          (dep) =>
            !dep.includes("Work") &&
            !dep.includes("Skills") &&
            !dep.includes("Contact") &&
            !dep.includes("About") &&
            !dep.includes("motion") &&
            !dep.includes("fa-")
        );
      },
    },
  },
});
