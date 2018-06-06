var webpack = require('webpack');
var path = require('path');

// 實際 package.json 內的 libs，但不一定要包含全部，依實際情況而定
const VENDOR_LIBS = [
  'faker',
  'lodash',
  'redux',
  'react-redux',
  'react-dom',
  'react-input-range',
  'redux-form',
  'redux-thunk',
  'react-router',
  'react'
];

module.exports = {
  entry: {
    bundle: './src/index.js', // bundle.js
    vendor: VENDOR_LIBS // vendor.js
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js' // 依據 entry 內的 key 值，動態產生的檔名
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // bundle.js 與 vendor.js 內有重複的 lib 都移到 vendor.js
    })
  ]
};
