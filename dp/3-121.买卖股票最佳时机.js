/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) {
    return 0;
  }
  const dp = [prices[0]];
  let maxProfit = 0;
  // dp[i] 表示截至到第i天的股票的历史最低价
  for (let i = 1; i < prices.length; i++) {
    const prevMinPrice = dp[i - 1];
    const curPrice = prices[i];
    if (prices[i] > prevMinPrice) {
      dp[i] = prevMinPrice;
    } else {
      dp[i] = prices[i];
    }
    maxProfit = Math.max(maxProfit, curPrice - dp[i]);
  }
  return maxProfit;
};

const max = (prices) => {
  if (!prices.length) {
    return 0;
  }
  // dp[i]表示第i天股票的历史最低价
  const dp = [];
  let maxProfit = 0;
  let prevMinPrice = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    const curPrice = prices[i];
    if (curPrice < prevMinPrice) {
      prevMinPrice = curPrice;
    }
    dp[i] = prevMinPrice;
    maxProfit = Math.max(maxProfit, curPrice - dp[i]);
  }
  return maxProfit;
};
