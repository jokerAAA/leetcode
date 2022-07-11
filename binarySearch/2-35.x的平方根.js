/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = mid * mid;
    if (value === x) {
      return mid;
    } else if (value > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
