const path = require("path");
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withPlugins = require('next-compose-plugins');
const MDX = require('@next/mdx');

const nextConfig = {
	webpack5: false,
	webpack: (config, { isServer }) => {
	    if (!isServer) {
	      	config.node = {
	        fs: 'empty'
	     	}
	    }
	    config.resolve.alias.images = path.join(__dirname, "images");
	    return config
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	target: 'serverless',
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
		}
	},
	basePath: ghPages? '/ordilov.github.io/' : '',
	assetPrefix: ghPages ? '/ordilov.github.io/' : '',
}

module.exports = withPlugins([
	[MDX, {
		extension: /\.mdx?$/,
	}]
], nextConfig)