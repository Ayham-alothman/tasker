const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// Check if favicon exists
const faviconPath = path.join(__dirname, 'public', 'favicon.ico');
const hasFavicon = fs.existsSync(faviconPath);

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: hasFavicon ? './public/favicon.ico' : false // Set to false if not exists
  })
];

module.exports = {
  entry: './src/index.js',
 
output: {
  path: path.resolve(__dirname, 'build'), 
  filename: 'bundle.js',
  clean: true,
  publicPath: '/'
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins,
  mode: 'development'
};