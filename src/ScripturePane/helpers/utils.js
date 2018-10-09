/**
 * Delays code execution for a number of ms given.
 * @param {ms} ms
 */
export function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}
