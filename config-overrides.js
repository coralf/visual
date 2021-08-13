const {
  override,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
