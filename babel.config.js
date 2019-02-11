module.exports = function(api) {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-inline-svg',
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.css'],
      },
    ],
    '@babel/syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
  ];

  return {
    presets,
    plugins,
  };
};
