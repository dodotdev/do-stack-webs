/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@lib/eslint-config/nextjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
