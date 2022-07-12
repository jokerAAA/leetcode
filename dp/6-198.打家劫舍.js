/**
 * @desc 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  // dp[i] 表示当前能偷到的最大金额
  const dp = [nums[0], nums[0] > nums[1] ? nums[0] : nums[1]];
  for (let i = 2; i < nums.length; i++) {
    // 当前能偷到的最大金额取决于i - 2和当前当前金额之和,与n - 1金额的最大值
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[i];
};
