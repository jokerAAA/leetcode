/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (!s) {
    return 0;
  }
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  const length = s.length;
  let ans = 0;
  for (let i = 0; i < length; i++) {
    const value = map.get(s[i]);
    // 如果前一位比后一位小,默认是减法 比如IX表示4 NOTE: 需要处理结尾的特殊case
    if (i < n - 1 && value < map.get(s[i + 1])) {
      ans -= value;
    } else {
      ans += value;
    }
  }
  return ans;
};
