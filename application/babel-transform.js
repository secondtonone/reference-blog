const presets = [
  'next/babel',
];

const plugins = [
  ['babel-plugin-styled-components', {
    ssr: true, displayName: true
  }],
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-syntax-jsx',
  'babel-plugin-dynamic-import-node'
];

const env = {
  production: {
    plugins: [
      'transform-remove-undefined',
      'transform-remove-debugger',
      ['babel-plugin-styled-components', { displayName: false, minify: true, ssr: true }],
    ],
  }
};

module.exports = { presets, plugins, env };
