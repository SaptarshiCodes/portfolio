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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("gsap")) {
              return "vendor-gsap";
            }
            if (id.includes("motion")) {
              return "vendor-motion";
            }
            if (id.includes("ogl")) {
              return "vendor-ogl";
            }
            if (id.includes("react-icons") || id.includes("lucide-react")) {
              return "vendor-icons";
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            return "vendor-misc";
          }
        },
      },
    },
  },
});
