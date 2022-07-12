/**
 * @desc 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m < 2 || n < 2) {
    return 1;
  }
  // dp[i][j]表示在[i,j]的走法有多少种
  // 到达[i,j]位置的上一步只能有2中,从上面 OR 左面,所以可以得到dp[i][j] = dp[i - 1][j] + dp[i][j-1]
  // 特殊case需要处理: 当i == 0 OR j== 0 时,表示ij在网格边上,这时候走法只有一种,所以需要初始化
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
