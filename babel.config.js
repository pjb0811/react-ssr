module.exports = function(api) {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-inline-svg',
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.css']
      }
    ],
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins
  };
};
