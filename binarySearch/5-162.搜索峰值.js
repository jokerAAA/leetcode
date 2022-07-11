/**
 * @desc 峰值元素是指其值严格大于左右相邻值的元素。给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
你可以假设 nums[-1] = nums[n] = -∞ 。对于所有有效的 i 都有 nums[i] != nums[i + 1]
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  /**
   * 思路: 因为nums[-1] = nums[n] = -∞,边界默认是无穷小,所以寻找峰值可以类比爬山,沿着下坡走,可能会遇到峰值也可能不会。但是沿上坡走一定会遇到峰值,因为边界是负无穷
   * 思路2：一次遍历求最大值,因为nums[i] != nums[i + 1] ,所以最大值两边的元素都不一样，最大值一定是一个波峰
   */
  if (nums.length == 0) {
    return -1;
  }
  if (nums.length === 1) {
    return 0;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    // mid > mid + 1,说明是下坡,下坡可能会一路下坡到边界,所以直接舍弃右边、
    if (nums[mid] > nums[mid + 1]) {
      right = mid; // 因为每次都要比较mid > mid + 1,所以这里的right = mid,否则会错过mid- 1 > mid的比较
    } else {
      left = mid + 1;
    }
  }
  return left;
};
