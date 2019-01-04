/* config-overrides.js */
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.plugins = [
    ...config.plugins,
    new ReactLoadablePlugin({
      filename: './build/react-loadable.json'
    })
  ];

  return config;
};
