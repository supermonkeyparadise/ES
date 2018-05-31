// 處理跨平台路徑問題
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js'
  }
};

// node global obj
// __dirname ===> Users/steven/Lab/monkey/ES/andrew_mead/javaScript_with_babel_and_webpack/webpack/boilerplate

// 實際路徑
// /Users/steven/Lab/monkey/ES/andrew_mead/javaScript_with_babel_and_webpack/webpack/boilerplate/public/scripts
