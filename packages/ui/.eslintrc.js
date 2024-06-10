/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@lib/eslint-config/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
