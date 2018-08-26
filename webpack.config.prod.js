const webpack = require("webpack");
const commonConfig = require("./webpack.config");

const prodConfig = commonConfig;

prodConfig.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  })
);

module.exports = prodConfig;
