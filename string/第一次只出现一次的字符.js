/**
 * @desc 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) {
    return ' ';
  }
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!map.has(letter)) {
      map.set(letter, 1);
    } else {
      const count = map.get(letter);
      map.set(letter, count + 1);
    }
  }
  let ans = ' ';
  // NOTE: map的遍历方式!!
  for ([key, value] of map.entries()) {
    if (map.get(key) < 2) {
      ans = key;
      break;
    }
  }
  return ans;
};
