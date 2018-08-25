module.exports = {
  overrides: [
    {
      files: "src/**/*.{js,jsx,json,css}",
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
