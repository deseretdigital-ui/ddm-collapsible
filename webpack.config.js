var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'collapsible.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      {
        test: /\.scss$/, loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?{browsers:["last 2 version", "> 1%", "ie 8"]}',
          'sass-loader'
        ]
      }
    ]
  },
  externals: {
    "react": "React",
    "react/addons": "React"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['bower_components', 'node_modules'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
