/* config-overrides.js */
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins = [
    ...config.plugins,
    new ReactLoadablePlugin({
      filename: './build/react-loadable.json',
    }),
  ];

  config = injectBabelPlugin(
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    config
  );

  return config;
};
