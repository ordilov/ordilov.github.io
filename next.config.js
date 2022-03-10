const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withPlugins = require('next-compose-plugins');
const MDX = require('@next/mdx');

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	basePath: ghPages? '/ordilov.github.io/' : '',
	assetPrefix: ghPages ? '/ordilov.github.io/' : ''
}

module.exports = withPlugins([
	[MDX, {
		extension: /\.mdx?$/
	}]
], nextConfig)