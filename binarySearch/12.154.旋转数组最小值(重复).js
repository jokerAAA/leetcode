/**
 * @desc 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (!nums.length) {
    return -1;
  }
  /**
   * 思路: 和153题是类似的,唯一的区别在于value === nums[right]的时候,因为存在重复元素,所以无法二分
   * 由于这里的二分是从右侧开始缩小区间的,所以遇到重复元素时默认right--,因为 > right的场景在之前的循环处理过了
   */
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value > nums[right]) {
      left = mid + 1; // 求的是最小值,所以value > nums[right]时,一定不是最小值,直接舍弃mid
    } else if (value < nums[right]) {
      right = mid; // value < nums[right]时,当前value可能是最小值,所以mid不能舍弃
    } else {
      right--;
    }
  }
  return nums[left];
};
