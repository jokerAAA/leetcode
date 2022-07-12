/**
 * @desc 给你一个字符串 s，找到 s 中最长的回文子串。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  if (length < 2) {
    return s;
  }
  /**
   * 思路: 本质就是穷举法,在穷举的过程中,通过构造关系,让每个小问题的答案可以被更大的问题复用,减少计算工作量
   * 例: 当我们知道aba是一组回文字符串的时候,在遇到xabay的过程中,我们只要对比xy是否相等即可，aba在之前的过程中已经计算并缓存过了。
   * dp[left][right] = dp[left + 1][right - 1] && s[left] === s[right]
   */
  let maxLength = 1;
  let start = 0;
  // dp[i][j]表示从i到j的子串是否为回文串
  const dp = [];
  // 初始化长度为1的子串的dp值
  for (let i = 0; i < length; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }
  // 从子串长度为2开始,直到子串长度和字符串长度相等
  for (let strLength = 2; strLength <= length; strLength++) {
    // 依次判断长度为2、3、4...的子串是否为回文串
    // 第一次循环是 0-1 1-2 2-3 3-4...
    // 第二次循环是 0-2 1-3 2-4 3-5...
    for (let left = 0; left < length; left++) {
      let right = left + strLength - 1;
      // 越界终止当前子串长度的循环
      if (right > length - 1) {
        break;
      }
      // 首尾不等的子串一定不是回文串
      if (s[left] !== s[right]) {
        dp[left][right] = false;
      } else {
        // 首尾相等,且长度小于3: 如aba OR aa ,无论长度是2还是3,这种时候都是回文串
        if (right - left < 3) {
          dp[left][right] = true;
        } else {
          // 首尾相等,取决于s[left + 1][right - 1]是否为回文串
          // dp[left + 1][right - 1]一定在之前计算过了,因为循环是按照子串长度递增方式的,[left + 1][right - 1]的子串长度比[left][right]小2,一定在之前的循环中计算过
          dp[left][right] = dp[left + 1][right - 1];
        }
      }
      // 循环结束,已经有了dp[left][right]的值了
      if (dp[left][right] && right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
    }
  }
  return s.substring(start, start + maxLength);
};
