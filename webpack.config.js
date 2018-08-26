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
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                localIdentName:
                  process.env.NODE_ENV === "production"
                    ? "[hash:base64]"
                    : "[name]__[local]___[hash:base64:5]",
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [require("autoprefixer")]
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        include: [path.resolve("src")],
        loaders: ["babel-loader"]
      }
    ]
  },

  resolve: {
    alias: {
      react: path.resolve("./node_modules/react")
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ]
};
