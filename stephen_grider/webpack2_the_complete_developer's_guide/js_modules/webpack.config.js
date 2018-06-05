const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          // if img > 40000 bytes，將檔案儲存到某個目錄
          // img <= 40000 bytes，加 img 寫到 bundle.js 中
          { loader: 'url-loader', options: { limit: 40000 } },
          'image-webpack-loader'
        ]
      }
    ]
  }, // 將所有由 css-loader 載入的 css，寫入到 style.css 檔案中
  plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
