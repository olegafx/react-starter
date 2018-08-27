const webpack = require("webpack");
const commonConfig = require("./webpack.config");

const defaultAppConfig = {
  port: 3000
};

let appConfig;

try {
  appConfig = require("./config/config");
} catch (e) {
  appConfig = defaultAppConfig;
}

const devConfig = commonConfig;

devConfig.mode = "development";

devConfig.entry.index.unshift(
  "webpack-dev-server/client?http://0.0.0.0:" + appConfig.port,
  "webpack/hot/only-dev-server"
);

devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = devConfig;
