module.exports = {
  collectCoverageFrom: ["**/src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10
    }
  },
  displayName: "client",
  moduleNameMapper: {
    "\\.css": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/test/svg-file-mock.js"
  },
  modulePaths: ["<rootDir>/src", "<rootDir>/test"],
  setupTestFrameworkScriptFile: require.resolve(
    "./test/setup-test-framework.js"
  ),
  testPathIgnorePatterns: ["/node_modules/"]
};
