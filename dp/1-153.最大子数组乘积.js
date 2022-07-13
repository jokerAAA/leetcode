/**
 * @desc 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  /**
   * 思路: 和最大子数组和是类似的,有一点区别:
   * 1. 这里的子数组是连续的,不能像子数组和一样跳过
   * 2. 数组包含负数,所以当前最大值不但要取最大,还要取最小值
   */
  const length = nums.length;
  if (!length) {
    return 0;
  }
  if (length === 1) {
    return nums[0];
  }
  // 表示第i项的最大乘积/最小乘积
  let maxDp = [nums[0]];
  let minDp = [nums[0]];
  // 对第i项来说,存在2种情况:
  // 1. 不要之前的,只要第i项
  // 2. 将第i项相乘作为最大乘积/最小乘积
  for (let i = 1; i < length; i++) {
    const value = nums[i];
    // 对于正数来说要去前i-1项最大值,负数时取最小值, 即最大值可能是 2 * 3的形式,也可以是-2 * -3的形式
    maxDp[i] = Math.max(maxDp[i - 1] * value, value, minDp[i - 1] * value);
    minDp[i] = Math.min(minDp[i - 1] * value, value, minDp[i - 1] * value);
  }
  return Math.max(...maxDp);
};
