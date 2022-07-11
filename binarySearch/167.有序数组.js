/**
 * @desc 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。你所设计的解决方案必须只使用常量级的额外空间。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (!numbers.length < 2) {
    return -1;
  }
  /**
   * 思路1: map,不符合常量级的额外空间
   * 思路2: 循环然后二分找元素, Olog(N)的时间复杂度
   * 思路3: 因为数组是非递减顺序, 且有唯一解,那我们假设有left、right表示最终答案， 0 <= left <= right <= length - 1;其中left初始化0，right初始化为length - 1
   * 1. 假设left、right符合目标,满足target
   * 2. 假设left到达,此时right必然在右侧,需要左移一步;
   * 3. 假设right到达,此时left必然在左侧,需要右移
   * 4. 注意: left 不能和right重合
   */
  let left = 0;
  let right = length - 1;
  while (left < right) {
    const sum = left + right;
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
};
