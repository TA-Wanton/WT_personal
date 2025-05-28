/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').join(__dirname, '.'),
    };
    return config;
  },
};

module.exports = nextConfig; 