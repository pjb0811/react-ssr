const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.entry.unshift('@babel/polyfill', '@babel/register');
    config = injectBabelPlugin('babel-plugin-inline-svg', config);
    config = injectBabelPlugin(
      [
        'babel-plugin-transform-require-ignore',
        {
          extensions: ['.css']
        }
      ],
      config
    );
  }
  return config;
};
