/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'imgix',
    // path: 'https://example.com/myaccount/',
    domains: ['raw.githubusercontent.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
