export const log = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.log(" ");
  console.log("LOGGER: ", ...args);
  console.log(" ");
};
