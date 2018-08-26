const webpack = require("webpack");
const commonConfig = require("./webpack.config");

const defaults = {
  hmrPort: 3000
};

const devConfig = commonConfig;

devConfig.entry.index.unshift(
  "webpack-dev-server/client?http://0.0.0.0:" + defaults.hmrPort,
  "webpack/hot/only-dev-server",
  "react-hot-loader/patch"
);

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
);

module.exports = devConfig;
