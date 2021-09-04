const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addLessLoader({
    lessOptions: {
      // modifyVars: { '@primary-color': '#0005', 'text-color': '#fff' },
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
