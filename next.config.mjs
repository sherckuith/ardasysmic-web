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
    // ESLint is not installed in this environment; lint is enforced separately via `npm run lint`.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors must fail the build in production.
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  webpack(config) {
    // Explicit alias so `@/` resolves to src even under static export.
    config.resolve.alias["@"] = path.resolve(__dirname, "./src");
    return config;
  },
};

export default nextConfig;
