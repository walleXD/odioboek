const common = {
  preset: "ts-jest"
}

module.exports = {
  projects: [
    {
      ...common,
      runner: "@jest-runner/electron/main",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/src/main/**/*.(spec|test|).ts",
        "<rootDir>/src/common/**/*.(spec|test|).ts"
      ]
    },
    {
      ...common,
      runner: "@jest-runner/electron",
      testEnvironment: "@jest-runner/electron/environment",
      testMatch: [
        "<rootDir>/src/renderer/**/*.(spec|test|).ts",
        "<rootDir>/src/renderer/**/*.(spec|test|).tsx"
      ]
    }
  ]
}
