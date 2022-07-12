/**
 * @desc 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回 你能获得的 最大 利润 。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 思路: 因为股票可以当天买卖,将股票涨价做成一个涨跌曲线,存在递增和递减段
   * 如果要获取最大利润,就表示每个递增曲线都要买入+卖出,所以只要累加就可以
   */
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
};
