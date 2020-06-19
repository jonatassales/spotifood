const { join } = require("path")

module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    '^@project$': '<rootDir>/src'
  },
  testMatch: [join(__dirname, "tests/**/*.spec.{ts,tsx}")],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.tests.json'
    }
  }
}
