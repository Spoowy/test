const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // https://github.com/woocommerce/wc-api-node/issues/52#issuecomment-406794166
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
};
