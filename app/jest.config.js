module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/"],
  verbose: true,
  testURL: "http://localhost/"
};
