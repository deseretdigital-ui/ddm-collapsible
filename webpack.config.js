var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  'process.env': {'NODE_ENV': JSON.stringify('production')}
});

module.exports = {
  output: {
    filename: 'collapsible.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/, loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?{browsers:["last 2 version", "> 1%", "ie 8"]}',
          'sass-loader'
        ]
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader'}
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom"
    },
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['bower_components', 'node_modules'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    definePlugin
  ]
}
