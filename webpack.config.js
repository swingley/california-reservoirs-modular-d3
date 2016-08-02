var webpack = require('webpack')

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "d3.webpack.min.js",
    library: "d3"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
