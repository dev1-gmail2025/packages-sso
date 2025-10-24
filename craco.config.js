const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins = config.plugins.filter((p) => p?.constructor?.name !== 'ForkTsCheckerWebpackPlugin');

      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          async: true,
          typescript: {
            memoryLimit: 6000,
            mode: 'write-references',
            diagnosticOptions: {
              semantic: true,
              syntactic: true,
            },
          },
        }),
      );

      config.module.rules.forEach((rule) => {
        if (!rule.oneOf) return;
        rule.oneOf.forEach((one) => {
          if (one.test?.toString().includes('tsx') && one.loader?.includes('babel-loader')) {
            one.loader = require.resolve('ts-loader');
            one.options = { transpileOnly: true };
          }
        });
      });

      config.module.rules = config.module.rules.filter(
        (rule) =>
          !(
            (typeof rule.loader === 'string' && rule.loader.includes('source-map-loader')) ||
            (rule.use &&
              Array.isArray(rule.use) &&
              rule.use.some((u) =>
                typeof u === 'string' ? u.includes('source-map-loader') : u.loader?.includes('source-map-loader'),
              ))
          ),
      );

      return config;
    },
  },

  eslint: {
    enable: false,
  },
};
