module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  const plugins = [
    "react-hot-loader/babel",

    // stage 0
    "@babel/plugin-proposal-function-bind",

    // stage 1
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { loose: false }],
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: false }],
    "@babel/plugin-proposal-do-expressions",

    // stage 2
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-proposal-json-strings"
  ];

  const presets = [
    [
      "@babel/preset-env",
      {
        debug: true,
        modules: false,
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];

  return {
    plugins,
    presets
  };
};
