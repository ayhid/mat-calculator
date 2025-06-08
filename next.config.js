/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  },
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  env: {
    CUSTOM_KEY: 'mat-calculator-app'
  }
}

module.exports = nextConfig

