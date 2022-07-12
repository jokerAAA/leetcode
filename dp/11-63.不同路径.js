/**
 * @desc 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
网格中的障碍物和空位置分别用 1 和 0 来表示。
例子: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] return 2 中央有障碍物
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 按62思路,当前值 dp[i][j] = dp[i - 1][j] + dp[i][j - 1],添加额外判断: 如果当前点是障碍物,dp[i][j] = 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 初始化边的时候额外判断当前点是否为障碍物,遇到障碍物可以直接终止循环,后续边上的点都是障碍物无法到达
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      const up = dp[i - 1][j];
      const left = dp[i][j - 1];
      dp[i][j] = up + left;
    }
  }
  return dp[m - 1][n - 1];
};
