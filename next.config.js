/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const productionUrl = 'https://ekdldksp123.github.io/mayb-front'

const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  images: {
    loader: 'akamai',
    path: '',
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [1200, 1920, 2048, 3840],
  },
  assetPrefix: isProd ? productionUrl : '',
  pageExtentions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

module.exports = nextConfig;
