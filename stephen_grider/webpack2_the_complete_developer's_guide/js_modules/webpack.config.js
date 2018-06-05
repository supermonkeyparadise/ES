const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // 將 CSS 整合在 bundle.js
        // use: ['style-loader', 'css-loader'],

        // 產生一個分開的 CSS file
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  }, // 將所有由 css-loader 載入的 css，寫入到 style.css 檔案中
  plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
