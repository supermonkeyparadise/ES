const express = require('express');
const path = require('path');

const app = express();

// Server routes... 可以對應到圖檔
app.get('/hello', (req, res) => {
  res.send('hihi');
});

// FOR DEVELOPMENT ENV
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');

  app.use(webpackMiddleware(webpack(webpackConfig)));
  // FOR PRODUCTION ENV
} else {
  // 將 dist folder 開放可公開存取
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    console.log('## trace_001');
    res.sendFile(path.join(__dirname, 'dist/index001.html'));
  });
}

// 優先使用系統預設的 PORT
app.listen(process.env.PORT || 3050, () => console.log('Listening'));
