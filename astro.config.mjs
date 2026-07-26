import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare(),
  output: "server",
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
