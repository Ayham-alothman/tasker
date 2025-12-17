
module.exports = {
    entry:'/home/ayham/Desktop/Tamplate_To_Start/src/App.js',
    output:{
        path:'/home/ayham/Desktop/Tamplate_To_Start/',
        filename:'alldep'
    },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Translates CSS into CommonJS
          'postcss-loader' // Processes CSS with PostCSS
        ],
      },
    ],
  },
  mode: 'development', // Set the mode (development or production)
};
