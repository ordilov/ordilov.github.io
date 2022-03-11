/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const MDX = require('@next/mdx');
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = withPlugins([
  [MDX, {
    extension: /\.mdx?$/,
  }]
], nextConfig)