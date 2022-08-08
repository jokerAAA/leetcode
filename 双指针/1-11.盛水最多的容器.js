/**
 * @desc 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length < 2) {
    return 0;
  }
  /**
   * 思路: 这个题思路比较特殊,没做过不容易想到;
   * 1. 对任意左右位置,假设leftValue < rightValue, 此时盛水的值为 leftValue * (right - left);
   * 2. 假设移动相对较大的那个(right),此时最小值没变(leftValue),但是right - left的值变小了,盛水只能变小
   * 3. 所以可以得出一个结论: 假设左右值不一致,移动较小的那个才可能找到比当前更大的盛水值;
   */
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  while (left < right) {
    const leftValue = height[left];
    const rightValue = height[right];
    const area = Math.min(leftValue, rightValue) * (right - left);
    ans = Math.max(ans, area);
    if (leftValue <= rightValue) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
