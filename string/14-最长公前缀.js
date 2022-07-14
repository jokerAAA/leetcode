/**
 * @desc 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let prefix = '';
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    // 用strs第一个元素的每个位置的字母去向后对比,如果都相同则拼前缀,否则终止循环
    const isSameLetter = strs.every((value) => {
      return value && value[i] === letter;
    });
    if (isSameLetter) {
      prefix += letter;
    } else {
      return prefix;
    }
  }
  return prefix;
};
