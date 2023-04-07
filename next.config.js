/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // problema do babel com SWC
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
