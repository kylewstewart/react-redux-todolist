module.exports = {
  entry: "./index.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          preset: ['es2015', 'react']
        }
      }
    ]
  }
};
