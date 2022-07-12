/**
 * @desc 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。说明：每次只能向下或者向右移动一步。
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  /**
   * 思路: 对于确定的点,最小路径和 = Math.min(左元素最小路径和,上元素最小路径和) + 当前值;
   * 特殊case: 最上边和最左边是初始值,要优先计算;例如dp[1][1] = Math.min(dp[0][1], dp[1][0]) + grid[1][1]
   */
  const rows = grid.length;
  const columns = grid[0].length;
  const dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
};
