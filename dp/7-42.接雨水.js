/**
 * @desc 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const length = height.length;
  if (length <= 1) {
    return 0;
  }
  // 思路: 第i处能接到的水 = 左/右最高点小的那个 和 当前高度的差,例如2,1,3,在1处能接到的水 = 2 - 1;
  // leftMax[i]表示第i处元素左侧的最高点
  const leftMax = [height[0]];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  // rightMax[i]表示第i处右侧的最高点
  const rightMax = [];
  rightMax[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < length; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};
