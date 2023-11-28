module.exports = {
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
