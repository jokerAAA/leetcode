/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }
  // dp[i] 表示在i层有多少种方式:
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
