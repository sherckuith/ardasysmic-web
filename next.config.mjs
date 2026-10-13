// Static export: served behind nginx via Dokpor (no Node runtime).
// No secrets, no local routes.

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Fetched third-party components (Magic UI, shadcn) may carry cosmetic
    // lint rules; lint is enforced separately via `npm run lint`.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors are surfaced by `tsc`/IDE; keep the static export robust.
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  webpack(config) {
    // Explicit alias so `@/` resolves to src even under static export.
    config.resolve.alias["@"] = path.resolve(__dirname, "./src");
    return config;
  },
};

export default nextConfig;
