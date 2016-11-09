let path = require("path");
let WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');

module.exports = {
  context: __dirname,
  entry: "./frontend/shoplife.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
        new WatchLiveReloadPlugin({
            files: [
                // Replace these globs with yours
                './**/bundle.js',
                './**/main.scss'
            ]
        }),
    ]
};