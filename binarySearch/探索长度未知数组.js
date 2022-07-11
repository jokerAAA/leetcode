/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @desc 探索长度未知的数组
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
  if (!reader || target === null) {
    return -1;
  }
  const invalidNumber = Math.pow(2, 31) - 1;
  if (reader.get(0) > reader.get(1) === invalidNumber) {
    return reader.get(0) === target ? 0 : -1;
  }
  let left = 0;
  let right = 10000;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = reader.get(mid);
    if (value === target) {
      return mid;
    } else if (value < target && value !== invalidNumber) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
