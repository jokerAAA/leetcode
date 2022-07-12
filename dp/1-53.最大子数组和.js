/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  // dp[i] 表示以第i个数结尾的连续子数组的最大和
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    // dp[i]取当前值和 dp[i - 1] + nums[i]的最大值,因为存在nums[i]是负 OR dp[i - 1]是负的场景
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  console.log(dp);
  return Math.max(...dp);
};
