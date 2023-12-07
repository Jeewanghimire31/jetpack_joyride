/**
 * Returns a random number between a range
 *
 * @param {number} lower
 * @param {number} upper
 * @returns number
 */
const getRandomNum = (lower = 0, upper = 1) => {
    return lower + Math.random() * (upper - lower);
  };
