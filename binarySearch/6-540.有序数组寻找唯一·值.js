/**
 * @desc 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。请你找出并返回只出现一次的那个数。
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (!nums.length) {
    return null;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const num = nums[mid];
    if (mid % 2 === 0) {
      // 偶数位置,左侧有偶数个元素,如果当前元素和下一个元素相等,说明说明左边不存在唯一数,舍弃左边
      if (num === nums[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else {
      // 奇数位置,左侧是奇数个元素,如果当前元素和上一个元素相等,说明左侧元素不存在唯一数,舍弃左边
      if (num === nums[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left];
};
