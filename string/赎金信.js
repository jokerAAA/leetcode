/**
 * @desc 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
如果可以，返回 true ；否则返回 false 。
magazine 中的每个字符只能在 ransomNote 中使用一次。
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (!ransomNote) {
    return true;
  }
  if (!magazine) {
    return false;
  }
  const mMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const value = magazine[i];
    if (!mMap.has(value)) {
      mMap.set(value, 1);
    } else {
      const count = mMap.get(value);
      mMap.set(value, count + 1);
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    const letter = ransomNote[j];
    if (!mMap.has(letter)) {
      return false;
    } else {
      let count = mMap.get(letter);
      count = count - 1;
      if (count > 0) {
        mMap.set(letter, count);
      } else {
        mMap.delete(letter);
      }
    }
  }
  return true;
};
