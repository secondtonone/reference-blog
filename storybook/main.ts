import { Configuration } from 'webpack';

module.exports = {
  stories: ['./stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    'storybook-addon-next-router',
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  features: {
    postcss: false,
  },
  webpackFinal: async (config: Configuration) => {
    // eslint-disable-next-line global-require
    const path = require('path');

    if (config?.resolve?.alias) {
      config.resolve.alias['~'] = path.join(path.resolve(__dirname, '../application/src'), '/');
    }

    if (config?.module?.rules) {
      const withSpriteRules = config.module.rules
        .map(rule => {
          const ruleString = rule?.test?.toString();
          const keyToDelete = 'svg|';

          if (
            ruleString?.includes(keyToDelete)
          ) {
            return {
              ...rule,
              test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/
            };
          }

          return rule;
        });

      withSpriteRules.push({
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              runtimeGenerator:
                  require.resolve(path.resolve(__dirname, 'svg-sprite-loader/svg-runtime-generator.js'))
            },
          }
        ]
      });

      config.module.rules = withSpriteRules;
    }

    return config;
  }
};
