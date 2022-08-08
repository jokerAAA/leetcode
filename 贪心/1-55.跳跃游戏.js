/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  /**
   * 思路: 对于数组的每个点,有2种情况:
   * 1. 当前距离大于过去点的最大到达距离, 说明当前距离不可到达;
   * 2. 当前距离可到达,那么对当前点来说最大到达距离有2种情况:
   *    1. 当前距离 + 当前可跳跃距离
   *    2. 历史最大距离:
   * 例子: 当前距离起点3个距离,当前可跳1,上一个点最大可到达距离是10,此时对当前点来说最大到达距离就是10
   */
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    max = Math.max(max, i + nums[i])
  }
  return true;
};
