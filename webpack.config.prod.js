const commonConfig = require("./webpack.config");

const prodConfig = commonConfig;

prodConfig.mode = "production";

module.exports = prodConfig;
