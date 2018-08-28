module.exports = {
  overrides: [
    {
      files: "{cypress,src,test}/**/*.js",
      options: {
        semi: false,
        singleQuote: true,
        trailingComma: "all",
        bracketSpacing: false,
        jsxBracketSameLine: false
      }
    }
  ]
};
