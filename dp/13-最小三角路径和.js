/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (t) {
  // 思路: 当前点i,j的最小路径和 = 当前点的值 + Math.min(上层j,上层j - 1)
  const rows = t.length;
  if (!t.length) {
    return 0;
  }
  let first = t[0][0];
  const dp = [[first]];
  for (let i = 1; i < rows; i++) {
    dp[i] = [];
    // 特殊case1: 最左侧元素的最小路径和就是上层最左侧元素最小路径和与当前值的和
    dp[i][0] = dp[i - 1][0] + t[i][0];
    // 每层元素最多有层高个
    for (let j = 1; j < i; j++) {
      dp[i][j] = t[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
    }
    // 特殊case2: 最右侧元素的最小路径和是上层最右侧元素最小路径和与当前值的和
    dp[i][i] = dp[i - 1][i - 1] + t[i][i];
  }
  const lastRow = dp[rows - 1];
  return Math.min(...lastRow);
};
