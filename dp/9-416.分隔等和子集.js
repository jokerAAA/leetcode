/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const length = nums.length;
  if (length < 2) {
    return false;
  }
  // 异常case
  let sum = 0;
  let maxNum = 0;
  nums.forEach((v) => {
    sum += v;
    maxNum = Math.max(maxNum, v);
  });
  // 如果和是奇数,平分后存在小数和题目设定不符
  if (sum % 2 !== 0) {
    return false;
  }
  let target = sum / 2;
  // 如果最大数 > sum / 2,说明剩下的和小于一半
  if (maxNum > target) {
    return false;
  }
  // dp[i][j] 表示数组前i项元素和能否为j(元素可不选), 例子: nums = [1,2,3,4]: dp[0][0] = true, dp[0][1] = true, dp[0][2,3,4] = false;这里的dp很难自己想到！！！
  const dp = new Array(length).fill(0).map(() => new Array(target + 1, false));
  dp.forEach((v) => {
    // 元素可不选,所以dp[x][0] = true 只要不选即可
    v[0] = true;
  });
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 1; j <= target; j++) {
      // dp[j][j]有2种情况:
      // 1. 选择num: 由于是正整数,所以必须要dp[i - 1][j]比target小,且满
      // 2. 不选择num: 直接向前看即可, dp[i - 1][j]是否满足
      // 这两者区别是 j >= num
      if (j < num) {
        // 当前num大于目标值,只能不选择number,不选number直接看前一项元素和是否满足即可
        dp[i][j] = dp[i - 1][j];
      } else {
        // 当前num小于目标值,存在2种决策:
        // 1. 前一项元素和满足,放弃number:dp[i][j] = dp[i - 1][j]
        // 2. 前一项元素和不满足, 前一项元素和 + 当前元素值满足
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
      }
    }
  }
  // 数组第N项是否存在元素和为sum / 2
  return !!dp[length - 1][target];
};

const getBag = (nums) => {
  /**
   * 思路: 其实就是target是nums / 2的背包问题
   * dp[i][target] = dp[i - 1][target] || dp[i - 1][target - nums[i]]
   */
  const length = nums.length;
  if (nums.length < 2) {
    return false;
  }
  // 异常case处理
  let sum = 0;
  let numberMax = 0;
  nums.forEach((v) => {
    sum += v;
    numberMax = Math.max(numberMax, v);
  });
  if (sum % 2 !== 0) {
    return false;
  }
  let target = sum / 2;
  if (numberMax > target) {
    return false;
  }
  // dp[i][target]表示数组前i项能否组成target
  const dp = new Array(length).fill(0).map(() => new Array(target + 1, false));
  dp.forEach((v) => {
    // 元素可不选,所以dp[x][0] = true 只要不选即可
    v[0] = true;
  });
  dp[0][nums[0]] = true;
  for (let i = 1; i < length; i++) {
    const curNumber = nums[i];
    for (let j = 1; j <= target; j++) {
      // 正整数数组,如果curNumber比target大,只能放弃当前number,此时dp的值等于dp[i - 1]
      if (curNumber > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // curNumber比target小时有2种case:
        // 1. 放弃当前number,此时dp[i][j] = dp[i - 1][j]
        // 2. 取当前number,此时dp[i][j] = dp[i - 1][j - number]
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - curNumber];
      }
    }
  }
  return !!dp[length - 1][target];
};
