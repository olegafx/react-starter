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

devConfig.entry.index.unshift(
  "webpack-dev-server/client?http://0.0.0.0:" + appConfig.port,
  "webpack/hot/only-dev-server",
  "react-hot-loader/patch"
);

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
);

module.exports = devConfig;
