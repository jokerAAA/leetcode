/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // dp[i]表示第i层的杨辉三角number
  const dp = [[1], [1, 1], [1, 2, 1]];
  for (let i = 3; i < numRows.length; i++) {
    const prev = dp[i - 1];
    dp[i] = [];
    prev.reduce((prev, next) => {
      dp[i].push(prev + next);
    }, 0);
    dp[i].push(1);
  }
  return dp[numRows - 1];
};
