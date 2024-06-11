/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  standalone: true,
});

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@pkg/ui"],
};

module.exports = withNextra(nextConfig);
