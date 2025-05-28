const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isDev, isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};

module.exports = nextConfig; 