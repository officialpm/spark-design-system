const { resolve } = require('path');

const root = resolve(__dirname, '.');
module.exports = {
  rootDir: root,
  setupFilesAfterEnv: ["<rootDir>/setup.test.js"],
  "testMatch": [
    "**/?(*.)+(spec|test).[j]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    '<rootDir>/setup.test.js'
  ],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: '../coverage/react'
};
