/**
 * @desc 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) {
    return true;
  }
  const length = s.length;
  if (length % 2 !== 0) {
    return false;
  }
  const stack = [];

  const map = new Map();
  map.set('{', '}');
  map.set('(', ')');
  map.set('[', ']');
  for (let i = 0; i < length; i++) {
    const cur = s[i];
    // 左括号压栈
    if (map.has(cur)) {
      stack.push(cur);
    } else {
      // 右括号弹栈,并判断当前左右括号是否匹配
      if (cur === map.get(stack.pop())) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};
