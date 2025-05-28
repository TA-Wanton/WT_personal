/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  webpack(config, { isServer }) {
    config.resolve.alias['@'] = require('path').join(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig; 