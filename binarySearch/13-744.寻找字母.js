/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  // 寻找第一个比target大的元素
  if (!letters.length || target == null) {
    return null;
  }
  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }
  let left = 0;
  let right = letters.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = letters[mid];
    // 先左后右的区别在于区间收缩,寻找第一个比target大的元素,应该不停的收缩右区间
    // 寻找第一个比target小的元素,应该不停的收缩左区间
    if (value > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return letters[left];
};
