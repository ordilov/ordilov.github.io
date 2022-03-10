/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const MDX = require('@next/mdx');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([
  [MDX, {
    extension: /\.mdx?$/,
  }]
], nextConfig)