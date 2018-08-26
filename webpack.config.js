var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require("path");

module.exports = {
  entry: {
    index: ["./src/index"]
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/dist/"),
    publicPath: "/dist/"
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "css-loader?modules&localIdentName=" +
            (process.env.NODE_ENV === "production"
              ? "[hash:base64]"
              : "[name]__[local]___[hash:base64:5]") +
            "&importLoaders=1!postcss-loader"
        )
      },
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },

  postcss: function() {
    return [autoprefixer];
  },

  resolve: {
    alias: {
      react: path.resolve("./node_modules/react")
    },
    extensions: ["", ".jsx", ".js", ".json"],
    modulesDirectories: ["node_modules"]
  },

  plugins: [new ExtractTextPlugin("index.css")]
};
