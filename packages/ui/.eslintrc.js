/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@acme/eslint-config/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
