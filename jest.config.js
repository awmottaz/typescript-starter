/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },

  // Transform must be empty to support ESM.
  // https://jestjs.io/docs/ecmascript-modules
  transform: {},
};
