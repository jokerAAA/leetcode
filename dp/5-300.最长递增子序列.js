/**
 * @desc 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  // dp[i] 表示第i个元素最长上升子序列长度
  const dp = [1];
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    // 对于每个dp[i],都要遍历dp[i]之前的元素,dp[i]是当前元素最长上升子序列长度,如果dp[i]的位置不是最长的,在之前j的位置
    // 存在dp[j]的最长子序列长度比dp[i]要长,此时dp[i]就是dp[j];
    // dp[i]要对比完每一个dp[j],拿到最大值
    // [2,5,3,7] 从这个例子看
    // i = 3, j = 0,此时dpi = 2,子序列是27
    // i = 3, j = 1,此时dpi = 3,子序列是257
    // i = 3, j = 2,此时dpi = 3,子序列是237
    for (let i = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

var test = (nums) => {

  // dp[i]表示第i项的元素的最长子序列值:
  // dp[j]表示第i项之前的元素的最长子序列值
  const dp = []
  const length = nums.length;
  let max = 0;
  dp[0] = 1;
  for (let i = i; i < length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(nums[j] + 1, dp[i]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}
