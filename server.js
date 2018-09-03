const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.dev");

const defaultAppConfig = {
  port: 3000
};

let appConfig;

try {
  appConfig = require("./config/config");
} catch (e) {
  appConfig = defaultAppConfig;
}

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
  stats: {
    assets: false,
    children: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(appConfig.port, "0.0.0.0", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at localhost:" + appConfig.port);
});
