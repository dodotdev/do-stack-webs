/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@library/eslint-config/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
