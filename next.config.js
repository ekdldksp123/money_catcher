/** @/type {import('next').NextConfig} */

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const productionUrl = 'https://mayb.netlify.app/';

const nextConfig = {
	webpack (config) {
		config.resolve = {
			alias: {
				'@/atom/*': path.resolve(__dirname, 'src/components/atom/*'),
				'@/layout/*': path.resolve(__dirname, 'src/components/layout/*'),
				'@/libs/*': path.resolve(__dirname, 'src/libs/*'),
				'@/molecules/*': path.resolve(__dirname, 'src/components/molecules/*'),
				'@/types/*': path.resolve(__dirname, 'src/types/*'),
				'@/views/*': path.resolve(__dirname, 'src/components/views/*')
			},
			...config.resolve
		};
		return config;
	},
	assetPrefix: isProd ? productionUrl : '',
	images: {
		deviceSizes: [ 1200, 1920, 2048, 3840 ],
		formats: [ 'image/avif', 'image/webp' ],
		loader: 'akamai',
		path: ''
	},
	pageExtentions: [ 'js', 'jsx', 'ts', 'tsx', 'md', 'mdx' ],
	reactStrictMode: true,
	staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;